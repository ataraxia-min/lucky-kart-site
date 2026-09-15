# Publication and verification record

Verified on **2026-09-15**.

- **Public website:** https://ataraxia-min.github.io/lucky-kart-site/
- **Public repository:** https://github.com/ataraxia-min/lucky-kart-site
- **Owner:** ataraxia-min (explicitly selected by the user).
- **GitHub Pages source:** `main` branch, `/docs` folder, “Deploy from a branch”.
- **HTTPS:** enforced by GitHub Pages on the default domain.
- **Website source commit:** `e0bdbc785adaa9682fe7f43b6e7e6dc930cb162d`.
- **Verified successful Pages run:** https://github.com/ataraxia-min/lucky-kart-site/actions/runs/34933423487
- That run returned `status: completed`, `conclusion: success`, with the website source commit above. The preceding artwork commit `d3fa1a70d36cd121c2af181781d8c75b21ac7fc6` is included. Later maintenance-document and checking-script updates do not change these reviewed public files.

## Roblox content update

The site now includes the verified game URL, official promotional artwork, described features, PC/mobile controls and observed parent information. The listing shows **Minimal content maturity · Ages 16+**; this does not establish suitability or normal availability for younger children. Evidence and remaining checks are in CONTENT-SOURCES.md and CONTENT-TODO.md.

The updated HTML, CSS and artwork all returned HTTP 200 and matched local SHA-256 hashes. The published image loaded at its actual 767 × 432 size in the browser. The updated local site passed `npm run check`, JavaScript syntax checking, mobile width checks at 390px and 320px, and `git diff --check`.

## Checks performed

| Check | Observed result |
| --- | --- |
| GitHub Pages settings | “Your site is live” with the public URL |
| Public homepage | HTTP 200, `text/html; charset=utf-8` |
| Public HTML, CSS and artwork | HTTP 200 and SHA-256 match after the Roblox update; unchanged JavaScript, sitemap and project robots.txt passed the same checks at initial launch |
| Crawl directives | No noindex in the HTML and no X-Robots-Tag in the homepage response headers |
| Canonical / Open Graph URL / sitemap | Consistent HTTPS project URL |
| VideoGame JSON-LD | Valid JSON; exact game name and visible description; official Roblox sameAs; hosted artwork matches social metadata; no invented prices, ratings or age claims |
| Internal links and assets | All local references and section targets exist |
| JavaScript | Syntax check passed; body content and FAQ answers are already in static HTML |
| Browser review | Desktop plus 390px and 320px widths; no horizontal page overflow at either mobile width; parent table readable |
| FAQ | Opened by pointer and closed using Enter |
| Origin root robots.txt | https://ataraxia-min.github.io/robots.txt returned HTTP 404: no robots-file crawl restriction |

The `/lucky-kart-site/robots.txt` copy is **not** the effective host-root file. The root 404 is different from a disallow rule. A narrow optional root policy is included in `ops/robots-root.txt`; no additional user-site repository was created.

## Not yet completed or established

- Actual playtesting, child suitability, Audience Reach status, text chat, purchases and data use: pending the material listed in CONTENT-TODO.md. Public listing facts are distinguished from playtested facts.
- Google Search Console / Bing Webmaster Tools verification and sitemap submission: not performed; owner account access is needed.
- Actual Google/Bing indexing, OAI-SearchBot crawl, citations, traffic and AI recommendations: not observed or promised.
- Accessibility certification, testing every device and checking access from OpenAI's published IP ranges: not performed. Browser and HTTP checks have the scope described above.

To continue from home, clone the public repository and start with HANDOFF.ko.md.
