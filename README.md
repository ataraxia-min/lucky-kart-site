# Lucky Kart official website

A small, English-first website for the Roblox game Lucky Kart Racing (Lucky Kart).

**Project:** https://github.com/ataraxia-min/lucky-kart-site  
**Public website:** https://ataraxia-min.github.io/lucky-kart-site/

**Roblox game:** https://www.roblox.com/games/84170027522482/Lucky-Kart-Racing

Publication status is recorded in `DEPLOYMENT.md` after verification. A prepared URL is not evidence that a site is live.

## Edit and publish

- The entire public website is in `docs/`. Plain HTML, CSS and a small optional navigation script; no build step or dependency install.
- GitHub Pages publishing source: **Deploy from a branch → main → /docs**.
- Run `npm run check` and `node --check docs/script.js` with Node.js 20 or later.
- Run `npm run preview`, then open http://127.0.0.1:4173/lucky-kart-site/.
- Commit and push reviewed changes to `main`. Check the Pages deployment and actual public page afterwards.

## Continue from another computer

Start with [HANDOFF.ko.md](HANDOFF.ko.md), [CONTENT-TODO.md](CONTENT-TODO.md), and [SEARCH-REVIEW.md](SEARCH-REVIEW.md).

## Content standard

The owner's Roblox link resolves to Lucky Kart Racing, place ID 84170027522482. The official listing supplies the promotional artwork, gameplay description, PC/mobile controls and public voice/camera status. These are listing-based facts, not an independent playtest. See [CONTENT-SOURCES.md](CONTENT-SOURCES.md) for evidence and limitations.

The listing displayed **Minimal content maturity · Ages 16+** on 2026-09-15. Do not turn Minimal into an all-ages or child-safety claim. Check Creator Hub Audience Reach before attempting to promote the game for younger children. Text chat, purchases, data handling and actual device performance remain unverified.

The hero and social preview use the listing's promotional artwork, explicitly captioned. Actual gameplay captures and a guardian-approved creator story remain pending. No child audio/video, fabricated screenshots, ratings, testimonials or popularity counts are included.

## Search access

`docs/robots.txt` expresses the intended OAI-SearchBot policy, but a project-path robots.txt is not authoritative. Crawlers consult the host root, `https://ataraxia-min.github.io/robots.txt`. See the review and deployment record for the effective root status. An HTTP 404 root robots.txt does not disallow crawling. Do not overwrite an existing root policy.

No rankings, indexing dates or AI recommendations are promised. The site is a foundation for publishing useful, verified game facts.
