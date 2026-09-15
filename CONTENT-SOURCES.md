# Roblox content sources

## Publication status — 2026-09-15

The continuation below is now published with explicit user approval. Source commit c729b111c043dac8b45ff4537e5f0d7003dfffb5; successful Pages run34981263388. The local draft/not-yet-published labels below describe the earlier review stage.


## Local continuation — 2026-09-15 (not yet published)

This section supersedes conflicting observations below. The current Roblox Korean listing was read in a browser and visually inspected: **Minimal · Ages 16+**, server size **8**, **voice chat supported**, **camera supported**. The earlier “Not Supported” observation is no longer current. No account settings were changed. Actual social feature use has not been tested.

### Gameplay media

- Source: the owner's existing `assets/promo/2026-09-15` package in the game workspace, built from a 2026-09-14 gameplay recording. Its generator and timeline were inspected, as were the three selected stills and a video contact sheet.
- Added assembly, desert and tundra JPGs at 1280 × 720. These are **edited gameplay captures**, with added frames/titles, not raw screenshots or synthetic game scenes. No visible account names/chat were found in the selected stills.
- Website video uses only the first 25 seconds of the existing 30-second trailer. The final creator attribution containing an exact age is excluded. Original recorded audio is excluded; the existing project-generated instrumental music bed is used alone. The source media is preserved.
- Video: H.264/AAC, 1280 × 720, 30fps, 25.00 seconds, fast-start MP4. Full FFmpeg decode passed. Opening 3 seconds are half-speed; the city race is AI practice. Historical footage is not evidence of current UI/audio or a live multiplayer test.
- Added English WebVTT descriptions and a static, timed description. No autoplay; video preload is disabled. No VideoObject upload date is asserted before publication.
- Creator biography is omitted from the visitor page pending approved wording; no placeholder is exposed.

### Purchase and saved-progress facts

The live build record identifies 0.25.2 / Roblox version 12. Current editable source is already 0.26.1 and is not treated as proof of deployment. Reviewed the preserved 0.25.1 source and the 0.25.2 release change list (audio/result changes). This is source review, not a current payment test or an account-settings audit.

| Preserved file | Confirmed fact | SHA-256 |
| --- | --- | --- |
| shared/GoldProducts.luau | Fixed 1500 / 5000 / 9000 gold products | 1ED8AE959CC17E63D0563473A06E799EA8FD4DC140DBB302D5A4644DBE5CF92D |
| shared/GoldEconomy.luau | Paid gold is excluded when buying luck tickets | 37BAD6ED9209EC24BF7D6BF7214A09C03299E2D9C7EE0D4291D1C1489A71792A |
| server/Profiles.luau | Roblox user-ID keyed progress and purchase records | 1EEF7F55164E2C19A57367272DBE31010266BEC777C225093E2E6AC081603CD0 |
| server/HallOfFame.luau | Best times, supporter records and username display | 5852E6D2DDA35DAC986BF896AEDFE8AEF72CC4D49D181A2F2A0E2D6AA6760258 |

No entry-price, current Robux price, pass inventory, blanket privacy, all-ages, or independent safety claim was added. Parent table and FAQ use matching qualified wording. Game identity and VideoGame description remain unchanged and consistent with the visible overview.

## Earlier listing-only review (historical)

Reviewed **2026-09-15**. The owner supplied a Roblox share link and asked to reuse its public game description and imagery for this official site. No Roblox account or game settings were changed.

## Game identity

- [Official game](https://www.roblox.com/games/84170027522482/Lucky-Kart-Racing): **Lucky Kart Racing**.
- [Korean listing inspected](https://www.roblox.com/ko/games/84170027522482/Lucky-Kart-Racing).
- Place ID: `84170027522482`; universe ID in the public page: `10766256801`.
- Website shorthand: Lucky Kart. JSON-LD uses the exact game name and stable game URL as sameAs. The temporary share code is not used as a public play destination.

## Evidence mapped to website content

| Evidence in the public listing | Website use / limitation |
| --- | --- |
| Bilingual description: assemble kart; launch timing; stay centred to charge boosts | Overview and three-step playing guide. Not independently playtested. |
| AI practice; races with up to 4 players | Game facts, guide and FAQ. Not confused with server size 8. |
| Korean description: six city/desert/tundra courses | Six courses and the three environments. Individual course names are not invented. |
| Chassis, engines, tires, upgrades and paint customization | Kart-building description. Ambiguous English part count omitted. |
| Track edges send karts flying; fireworks | Specific gameplay and parent information. No claim of zero violence. |
| PC: W/Up accelerate, A/D steer, Left/Right boost, C camera; mobile on-screen controls | Controls shown as described. No claim that individual devices or controllers were tested. |
| Korean UI: “수위: 최소 • 나이 16세 이상” | Minimal content maturity and Ages 16+, with the observed date. Not a child-suitability or all-ages recommendation. |
| Voice chat: not supported. Camera: not supported. | Public listing status only; text chat remains unverified. |
| Server size: 8 | Parent information and FAQ, separately from four racers. |

Popularity counts and dates on the listing are volatile and are not used as promotional claims. Entry pricing, developer products, text chat, data handling, exact content descriptors, race duration and creator story remain unverified.

## Artwork provenance

- File: `docs/assets/lucky-kart-racing-artwork.webp`.
- [Image source observed in the rendered game page](https://tr.rbxcdn.com/180DAY-548982172f7675786f365ee4e981f2bb/768/432/Image/Webp/noFilter).
- Actual decoded size: **767 × 432**; downloaded file: **94,544 bytes**.
- Copied unchanged to the website. The original CDN URL is not hotlinked because it can expire. The same hosted image is used in the hero, Open Graph and VideoGame image field.
- Visual content: Lucky Kart Racing title, red kart and helmeted character above a city track, other karts and fireworks. This is promotional illustration, explicitly captioned. No gameplay footage or independent screenshot was available from the inspected page.
- Reuse is within the owner's request for this game website; no broader public license is asserted.

## Why the age-access label matters

[Roblox's current publishing guidance](https://en.help.roblox.com/hc/en-us/articles/203313890-How-to-Publish-Games-on-Roblox) separates content maturity from audience eligibility. All-ages distribution has additional eligibility and evaluation requirements. A Minimal label alone is insufficient to establish access for younger players.

The public label is observed evidence. It is **not** evidence of which specific requirement this game has or has not met. Check **Creator Hub → Audience Reach** and publishing eligibility from the owner account at home. Do not label the game “for young children” until access and suitability have been reviewed.
