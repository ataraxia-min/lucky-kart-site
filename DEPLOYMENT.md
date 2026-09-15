# Publication and verification record

Verified on **2026-09-15**.

- **Public website:** https://ataraxia-min.github.io/lucky-kart-site/
- **Public repository:** https://github.com/ataraxia-min/lucky-kart-site
- **Owner:** ataraxia-min (explicitly selected by the user).
- **GitHub Pages source:** `main` branch, `/docs` folder, “Deploy from a branch”.
- **HTTPS:** enforced by GitHub Pages on the default domain.
- **Website source commit:** `454a7f3958f4e1476367bfb9d57cb5e310b67ae3`.
- **Verified successful Pages run:** https://github.com/ataraxia-min/lucky-kart-site/actions/runs/34931360473
- That run returned `status: completed`, `conclusion: success`; its head was `36a048d720c1f1c38428ae114d89b518aaca0de0`, which contains the same public website files. Subsequent handoff/tool documentation commits do not change the homepage and assets reviewed here. The managed GitHub workflow emitted a non-blocking Node.js 20 action deprecation warning; the deployment succeeded.

## Checks performed

| Check | Observed result |
| --- | --- |
| GitHub Pages settings | “Your site is live” with the public URL |
| Public homepage | HTTP 200, `text/html; charset=utf-8` |
| Public HTML, CSS, JavaScript, sitemap and project robots.txt | All HTTP 200; SHA-256 hashes match the local reviewed files |
| Crawl directives | No noindex in the HTML and no X-Robots-Tag in the homepage response headers |
| Canonical / Open Graph URL / sitemap | Consistent HTTPS project URL |
| VideoGame JSON-LD | Valid JSON; name, description, platform and genre match visible text; no invented prices, ratings or age claims |
| Internal links and assets | All local references and section targets exist |
| JavaScript | Syntax check passed; body content and FAQ answers are already in static HTML |
| Browser review | Desktop plus 390px and 320px widths; no horizontal page overflow at either mobile width; parent table readable |
| FAQ | Opened by pointer and closed using Enter |
| Origin root robots.txt | https://ataraxia-min.github.io/robots.txt returned HTTP 404: no robots-file crawl restriction |

The `/lucky-kart-site/robots.txt` copy is **not** the effective host-root file. The root 404 is different from a disallow rule. A narrow optional root policy is included in `ops/robots-root.txt`; no additional user-site repository was created.

## Not yet completed or established

- Real Roblox experience link, gameplay, child suitability and safety facts: pending the material listed in CONTENT-TODO.md.
- Google Search Console / Bing Webmaster Tools verification and sitemap submission: not performed; owner account access is needed.
- Actual Google/Bing indexing, OAI-SearchBot crawl, citations, traffic and AI recommendations: not observed or promised.
- Accessibility certification, testing every device and checking access from OpenAI's published IP ranges: not performed. Browser and HTTP checks have the scope described above.

To continue from home, clone the public repository and start with HANDOFF.ko.md.
