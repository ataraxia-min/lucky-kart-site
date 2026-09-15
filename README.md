# Lucky Kart official website

A small, English-first website for the Roblox kart racing game Lucky Kart.

**Project:** https://github.com/ataraxia-min/lucky-kart-site  
**Intended public URL:** https://ataraxia-min.github.io/lucky-kart-site/

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

Only the name, Roblox platform and kart-racing genre are presently treated as facts supplied by the owner. The exact experience, gameplay, prices, ages and safety settings have not been independently verified. Missing material is visibly labeled, and unknown claims are omitted from structured data. There are no invented screenshots, ratings, testimonials or player counts.

The decorative track is CSS artwork, not a gameplay image. Actual child audio/video from earlier conversations is not included. Add privacy-reviewed game captures later.

## Search access

`docs/robots.txt` expresses the intended OAI-SearchBot policy, but a project-path robots.txt is not authoritative. Crawlers consult the host root, `https://ataraxia-min.github.io/robots.txt`. See the review and deployment record for the effective root status. An HTTP 404 root robots.txt does not disallow crawling. Do not overwrite an existing root policy.

No rankings, indexing dates or AI recommendations are promised. The site is a foundation for publishing useful, verified game facts.
