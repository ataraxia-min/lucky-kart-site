# Search and content review

Reviewed: **2026-09-15**. This review distinguishes official documentation from implementation judgment.

## Conclusion

The site can provide a crawlable, consistent source of facts about Lucky Kart Racing. It cannot ensure indexing, citations, higher rankings or recommendations. The official Roblox listing now supplies the exact identity, link, artwork, described features and controls. It displayed **Minimal content maturity · Ages 16+** on the review date. This is not sufficient evidence to recommend the game to younger children; audience access, actual gameplay, remaining social features and purchases need review. See CONTENT-SOURCES.md.

## OpenAI: official requirements and limits

- [Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots): OAI-SearchBot supports ChatGPT search. Permit it and avoid blocking the published crawler IP ranges. GPTBot concerns potential model training and is an independent control. The roughly 24-hour robots-policy adjustment mentioned there is **not** an indexing or ranking deadline. GitHub controls its edge network; a successful request from this computer cannot prove all OpenAI IP ranges are allowed.
- [Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856): public websites can appear in search; OAI-SearchBot must be able to crawl content for summaries/snippets. ChatGPT referrals may contain `utm_source=chatgpt.com`. The current site installs no analytics.
- [Searching the web with ChatGPT](https://help.openai.com/en/articles/9237897-chatgpt-search): search is contextual and may use third-party providers. The current fetched page did not contain the earlier conversation's exact ranking quotation; it is not reproduced as a newly verified quote. The sources do not promise priority placement for this site.

Our implementation uses native headings, links, table headers and details/summary controls. This supports readers and assistive tools. It is not an established ranking boost.

## Changes to the original plan

| Original idea | Current decision |
| --- | --- |
| “Family-friendly”, ages 7–10, easy controls, short races, non-violent | Omitted as unverified claims. Public safety rows state uncertainty. |
| Prominent Play / Watch buttons | Play buttons now point to the verified Roblox game. A video button remains absent until actual footage exists. |
| Young creator story | Clearly labeled placeholder until parent-approved facts and role are supplied. No personal child information or media published. |
| VideoGame schema | Exact Roblox name, shorthand alternateName, platform, genre, visible description, official sameAs and actual artwork image. No invented ratings, reviews, prices, age range, release date, safety claim or author. |
| FAQ as an important search lever | Useful visible answers retained. No claim of a special ChatGPT ranking mechanism. No FAQPage markup added merely for a rich result. |
| robots.txt in project folder | File retained with a scope warning. Effective rules must be checked at origin root; see below. |
| Game version/update history | Initial date describes the website only. No invented game version. |
| Images/video | Actual Roblox promotional artwork used in the hero and social metadata, explicitly captioned. Real gameplay captures remain pending. |
| Keyword phrases for kids | No artificial repetition or “best” claims. Plain game identity and parent questions. |

## GitHub Pages and robots.txt

GitHub Pages supports plain HTML/CSS/JS. [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) supports publishing `main` → `/docs`, with no custom build workflow needed here.

At a project URL such as `https://ataraxia-min.github.io/lucky-kart-site/`, crawlers look for **https://ataraxia-min.github.io/robots.txt**, not `/lucky-kart-site/robots.txt`. [Official robots file placement](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt) requires a root-level file. A root 404 means no robots-file restrictions, not a failure of the site. A root disallow or server error must be investigated; do not claim the project copy overrides it.

If a user-site repository already serves the root, merge the narrow policy in `ops/robots-root.txt` without overwriting unrelated rules. If none exists, the root 404 permits crawling; an additional repository/domain is optional and has not been silently created. The project copy will become effective if this site later uses a dedicated domain root. Update all absolute URLs on a domain change.

## Other search systems and structured data

- [Google AI features and websites](https://developers.google.com/search/docs/appearance/ai-features): normal search best practices apply; no special AI schema or extra AI text file is needed for Google's AI features. This is Google guidance, not evidence of OpenAI ranking rules. `llms.txt` is therefore not added as a speculative requirement.
- [Google's official update log](https://developers.google.com/search/updates): FAQ rich results stopped appearing beginning **2026-05-07**; the documentation was subsequently removed. FAQ still serves readers but is not a rich-result promise.
- [Schema.org VideoGame](https://schema.org/VideoGame) defines the vocabulary. Its existence is not a guarantee of Google rich results or ChatGPT ranking. Visible facts and schema must agree.

## Remaining work and verification limits

1. Review outstanding audience-access and safety evidence in CONTENT-TODO.md. A Minimal label is not an all-ages access guarantee; verify Creator Hub Audience Reach before promotion to younger children.
2. Verify publicly accessible HTML, assets, sitemap, absence of noindex/auth gates and effective root robots policy after deployment. Record actual results in DEPLOYMENT.md.
3. Verify ownership in Google Search Console and Bing Webmaster Tools using the owner's accounts, then submit the sitemap. This is not yet completed. A sitemap is a discovery hint, not an indexing guarantee.
4. Link the site from the correct Roblox listing and consistent official profiles. Genuine independent reviews may add useful evidence; their effect on AI ranking is not guaranteed or quantified here.
5. Inspect real indexing/referral evidence later. HTTP success proves availability from the checking client, not that OpenAI has crawled or recommended the game.

Maintenance documents and scripts are outside `/docs`; only public site assets are deployed. The repository itself is public, so no secrets or private source evidence belong anywhere in it.
