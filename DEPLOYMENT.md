# Publication and verification record

## Published continuation — 2026-09-15

The user explicitly approved public publication. Website source commit: c729b111c043dac8b45ff4537e5f0d7003dfffb5. GitHub Pages run https://github.com/ataraxia-min/lucky-kart-site/actions/runs/34981263388 completed successfully. Later checking-script and maintenance-document commits do not change these public assets.

Public HTML, CSS, JS, sitemap, project robots.txt, three JPGs, MP4 and WebVTT all returned HTTP200 and matched local SHA-256 hashes. WebVTT is served as text/vtt; MP4 as video/mp4. Host-root robots.txt returned404. The public browser shows the new gallery, Watch gameplay link and corrected voice/camera wording. The public video played through all 25 seconds without a media error and its caption track reached loaded state.

The release consists of image commit a0ee9cebc82ce591ee6fcb96e1370e2b9aaabf86, video commit e70fa430783f17859722b0dbe20bbbde6d6a627f and website commit c729b111c043dac8b45ff4537e5f0d7003dfffb5. Revert the website commit to restore the previous visible page; its unused media can remain. Original source ZIP is preserved locally. Earlier draft and approval-pending notes below are historical and superseded.


## Local draft verification — 2026-09-15

**Not published.** The records below this section describe the earlier public site. The continuation adds gameplay media and corrects social-feature information; it has not been pushed to main.

- Source imported from the official public main ZIP; original ZIP retained outside the site folder for rollback/comparison. No Git history was fabricated.
- `node scripts/check.mjs` passed (the exact target of `npm run check`; npm is unavailable in this runtime). JavaScript syntax checks passed. Video controls, no autoplay, local captions, poster, media references and static description are checked.
- FFmpeg fully decoded the 25.00-second H.264/AAC output with no errors.
- Browser: local homepage loaded; Watch gameplay anchor worked; video advanced past 18 seconds with English captions loaded; transcript opened by pointer and closed with Enter; purchase FAQ opened.
- Desktop 1280px and mobile 390px/320px layout checks: document width stayed within the viewport. All gallery JPGs loaded at 1280 × 720. Mobile video/caption layout was visually inspected.
- Current public homepage and Roblox listing were read in the browser. Roblox now shows voice and camera supported; the old “Not Supported” statement is superseded. Actual in-game social functionality remains untested.
- Canonical and sitemap stay at the existing URL/date (the earlier and current content edits occurred on the same day). No fabricated VideoObject upload date or search submission was added.
- Before public release: obtain approval for this reviewed draft, compare against current main to preserve intervening edits, commit changed files/media, then verify Pages success and public HTML/CSS/JS/media/sitemap/root robots status. Roll back by reverting only that future update commit.

Preview: `node scripts/preview.mjs`, then open `http://127.0.0.1:4173/lucky-kart-site/`. If port 4173 is already serving this site, reuse it.

## Previous published baseline

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
