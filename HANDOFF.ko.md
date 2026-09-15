# 집 컴퓨터의 Codex에서 이어가기

## 시작

1. GitHub의 `lucky-kart-site` 저장소를 집 컴퓨터에 복제합니다. 저장소 주소와 게시 확인 결과는 `DEPLOYMENT.md`를 확인합니다.
2. 이 파일, `CONTENT-TODO.md`, `SEARCH-REVIEW.md`를 읽도록 합니다.
3. 실제 게임 자료를 제공하고 아래 요청으로 이어갑니다.

## 이어서 사용할 요청문

> Lucky Kart 공식 사이트를 이어서 완성해 주세요. 먼저 HANDOFF.ko.md, CONTENT-TODO.md, SEARCH-REVIEW.md와 DEPLOYMENT.md를 읽으세요. docs/가 GitHub Pages 공개 폴더입니다. 제공한 Roblox 게임 링크, 실제 화면/영상, 현재 프로젝트 설정을 검증하고 확인된 정보만 placeholder에 반영하세요. 안전성·연령·무료 여부·기능을 추측하지 마세요. 어린 창작자의 개인정보를 공개하지 마세요. 본문과 FAQ를 먼저 고친 뒤 VideoGame JSON-LD와 메타데이터를 일치시키세요. 실제 변경일만 sitemap과 검토일에 반영하세요. npm run check와 화면 점검 후 main에 반영하고 GitHub Pages 배포 및 공개 URL을 확인하세요. 추천 순위나 검색 색인을 보장하는 표현을 사용하지 마세요.

## 가져올 자료 — 우선순위

1. **정확한 Roblox 플레이 링크**와 게임 소유자/그룹 확인.
2. **게임별 안전정보:** 콘텐츠 성숙도, 채팅·음성, 과금, 데이터 처리, 실제 플레이 내용.
3. **실제 스크린샷 3장과 짧은 플레이 영상:** 화면의 계정 이름·채팅·개인정보를 확인하고 제거.
4. 실제 조작법, 지원 기기, 게임 모드, 플레이 시간.
5. 보호자가 승인한 young creator 소개. 제작에서 맡은 역할을 사실대로 작성.

## 구조

- `docs/index.html`: 영어 본문, FAQ, 부모용 표, 메타데이터와 VideoGame JSON-LD.
- `docs/style.css`: 모바일 대응 화면. CSS로 만든 트랙 장식은 게임 화면이 아닙니다.
- `docs/script.js`: 현재 읽는 섹션을 메뉴에 표시하는 보조 기능. 본문은 JS 없이 읽을 수 있습니다.
- `docs/assets/`: 실제 자료를 넣을 자리.
- `docs/sitemap.xml`: 실제 canonical URL 한 개만 포함.
- `docs/robots.txt`: 프로젝트 경로의 참고 정책. 실제 수집 정책은 호스트 루트에서 확인해야 합니다.
- `ops/robots-root.txt`: 필요할 때 호스트 루트에 병합할 규칙의 예시. 자동 적용되지 않습니다.

## 검토 기준

- 지금 상태는 검색 시스템이 읽을 수 있는 소개 사이트의 기반입니다. 실제 어린이 추천에 필요한 근거가 충분히 채워진 상태는 아닙니다.
- 검색 순위·AI 추천은 보장할 수 없습니다. FAQ나 schema를 추가하는 것만으로 우선 추천되지 않습니다.
- 영어를 우선합니다. 한국어 페이지는 실제 번역본을 만든 뒤 별도 URL과 상호 hreflang을 추가합니다.
- 사이트의 자료가 채워진 다음 Search Console/Bing에서 소유권을 확인하고 sitemap을 제출합니다. 완료 전에는 제출됐다고 보고하지 않습니다.
- 실제 Roblox 소개와 공식 사이트를 연결하고, 독립적인 이용자 후기는 자연스럽게 쌓습니다. 허위 후기를 만들지 않습니다.
- 다음 업데이트 후 공개 URL, CSS, JS, sitemap, 도메인 루트 robots.txt를 다시 확인합니다.
