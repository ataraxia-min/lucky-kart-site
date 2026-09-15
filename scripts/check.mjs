import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const root = new URL('../docs/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
const robots = await readFile(new URL('robots.txt', root), 'utf8');
assert.match(html, /<html lang="en">/);
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, 'One main heading');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'Unique document IDs');
const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
assert.equal(new URL(canonical).protocol, 'https:');
assert.ok(canonical.endsWith('/lucky-kart-site/'));
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), 'Canonical matches sitemap');
assert.ok(html.includes(`property="og:url" content="${canonical}"`));
assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`));
assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//);
assert.doesNotMatch(html, /content="[^"]*noindex|content="[^"]*nofollow/);
const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(graph['@type'], 'VideoGame');
assert.equal(graph.url, canonical);
assert.equal(graph['@id'], `${canonical}#game`);
assert.ok(html.includes(graph.description), 'Structured description appears in visible content');
for (const field of ['name', 'genre', 'gamePlatform']) assert.ok(html.includes(graph[field]));
assert.doesNotMatch(JSON.stringify(graph), /TODO|PLACEHOLDER|example\.com/);
for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const target = match[1];
  if (target.startsWith('#')) assert.ok(ids.includes(target.slice(1)), `Existing anchor: ${target}`);
  else if (!/^[a-z]+:/i.test(target)) {
    assert.ok(!target.startsWith('/'), `Project-relative asset: ${target}`);
    await access(new URL(target, root));
  }
}
await access(new URL('.nojekyll', root));
assert.match(html, /<caption>/);
assert.match(html, /<summary>/);
assert.match(html, /age suitability has not yet been verified/);
console.log('PASS: metadata, canonical and sitemap consistency, VideoGame JSON, visible claims, local assets and anchors, parent information, static FAQ and Pages entrypoint.');
