# 목표: 한국어판을 「한국 실정 검증 게이트 → 온라인 전자책」까지 프로덕션 레디로 올리기

작업 디렉터리: C:\Users\ssals\orca\workspaces\life-os\bristlemouth (git worktree, Windows, Git Bash, gh 로그인됨).
저장소: github.com/seolcoding/HowToLiveBetter-KR (공개, eternity4719/HowToLiveBetter의 포크).

먼저 다음을 읽는다.
- CLAUDE.md 전체
- KR-GUIDE.md, book-kr/README.md
- .claude/skills/ 전체: kr-pipeline, kr-verify의 scripts, kr-localize/references/kr-sources.md
- .github/workflows/: kr-check.yml, book.yml
- tools/lib/book.mjs, tools/epub/build.mjs, tools/offline/build.mjs, tools/pdf/build.mjs, tools/pdf/template.typ

## 0. 현재 상태 (2026-10-09, 직접 다시 확인할 것)
- origin/main은 38f0c4b다. 원격 브랜치는 main 하나뿐이다. 메인 워크트리 C:/Users/ssals/orca/projects/life-os는 main(38f0c4b)이고 깨끗하다.
- 이 워크트리는 브랜치 `seolcoding/kr-ebook`(38f0c4b, 커밋 없음)에 있다. 중단된 이전 시도가 남긴 미추적 파일 `kr-harness/ebook/`(lib.mjs, epub.css, node_modules/)가 있다.
- 로컬에 커밋 없는 빈 브랜치 `seolcoding/kr-fit-gate`와 `worktree-agent-a3814a453fca3191c`가 남아 있다.
- book-kr/ 34절 중 ✅는 2, 3, 4, 6, 14, 22절(133항목)뿐이다. 나머지는 자리표시 파일이다. 본문에 TODO가 22개 있다.
- GitHub Pages는 꺼져 있고 Release는 0개다. 저장소 homepage URL은 원본 사이트를 가리킨다. 포크의 중국어 전자책 워크플로 「电子书」는 활성 상태다.
- upstream/main이 35커밋 앞서 있다. 이번 범위에서 동기화하지 않는다.

## 작업 방식 (사용자 지정)
- 너는 오케스트레이터다. 구현, 검토, 수정, 디버깅은 **Opus 서브에이전트**에게 맡긴다. Agent 도구에 반드시 `model: "opus"`를 지정한다.
- 서브에이전트 프롬프트에 이 문서의 「설계 원칙」과 「금지」를 그대로 넣는다. 같은 파일을 두 서브에이전트가 동시에 고치지 않는다.
- git 브랜치 작업, push, PR, 머지, Pages, Release, 저장소 설정 같은 외부 행동은 너만 한다.
- 단계가 끝날 때마다 짧은 진행 상황을 남긴다. 막히면 우회하지 말고 멈춰서 보고한다.

## 설계 원칙
1. **upstream 파일은 수정하지 않는다**: README.md, index.html, book/, docs/, tools/, .github/workflows/book.yml, links.yml. 나중에 upstream을 머지할 때 충돌을 막기 위해서다. 한국어 쪽 코드는 kr-harness/와 .claude/ 아래에만 둔다. upstream 모듈은 import는 해도 되지만 고치지 않는다.
2. CLAUDE.md대로 book-kr/는 sync-stats, check-refs, check-links, index.html 범위 밖이다. 이 스크립트들을 돌리거나 고치지 않는다.
3. **✅만 공개한다.** ✅의 조건은 1단계 게이트 통과다. 전자책과 웹 리더는 book-kr/README.md 표에서 ✅인 절만 싣는다. 파일 목록은 하드코딩하지 않는다.
4. 근거 없는 판정, 지어낸 숫자나 URL은 금지한다. 출처를 못 찾으면 `TODO 확인 필요`로 남긴다.

## 1단계. 한국 실정 적합성 게이트 (브랜치 `seolcoding/kr-fit-gate`, PR ①)

### 1-A. 기계 검사 `kr-fit` (LLM 없음, 결정론)
`.claude/skills/kr-verify/scripts/kr-fit.mjs`를 만들고, 규칙은 `references/kr-fit-rules.json` 같은 데이터 파일로 분리한다.
- **중국 고유 기관, 제도, 서비스, 단어**: 한글 음역, 한자, 직역 모두 잡는다. 사전은 아래 예시보다 넓게 만든다.
  - 화폐: 위안, 인민폐, 元
  - 행정·사법: 호구(户口), 성(省) 행정, 공안국, 인민법원, 검찰원, 가도판사처
  - 사회보장: 사보(社保), 의보(医保), 주택공적금, 최저생활보장(低保), 노동중재
  - 기관: 국가약감국, 위건위
  - 서비스·행사·학제: 위챗, 알리페이, 타오바오, 징둥, 더우인, 웨이보, 바이두, 솽스이, 가오카오
  - 단위: 근(斤) 같은 중국식 단위
- **전화번호**: 중국 번호를 잡는다(12356, 12315, 12378, 96110, 12320, 12345, 12308 등). **한국에서 뜻이 다른 번호**는 따로 규칙을 둔다. 110은 한국에서 정부민원안내콜센터이고 경찰은 112다. 120은 다산콜센터이고 구급은 119다. 한국 번호 허용 목록(112, 119, 109, 1393, 1577-0199, 1388, 1366, 1332, 1301, 182 등)은 하나씩 1차 출처로 현재도 유효한지 확인한 뒤 넣고, 출처를 json에 남긴다.
- **본문 안의 한자 잔존**: 「출처」 줄은 원 문헌 제목이므로 제외한다.
- **법·제도 항목의 출처가 중국 정부 도메인뿐인 경우**를 잡는다.
- **예외 표시**: `<!-- kr-fit-ok: 사유 -->`(같은 줄 또는 바로 윗줄)가 있으면 통과시킨다. 중국 연구 인용이나 「한국에는 이 제도가 없다」는 비교가 여기에 해당한다. 사유가 비어 있으면 실패다.
- 출력은 파일:줄, 규칙 ID, block/warn, 일치한 단어, 권장 조치. `--check`면 block이 있을 때 exit 1이다.

### 1-B. 내용 검토 (Opus 서브에이전트, 절당 1개 병렬)
- `.claude/agents/kr-fit-reviewer.md`와 `.claude/skills/kr-fit-review/`를 만든다.
- 검토 대상:
  - 한국에 없는 제도를 전제로 한 조언
  - 한국에서는 다른 기관이 맡는 일(예: 노동중재 → 노동위원회, 고용노동부 진정)
  - 한국 법의 기한이나 금액과 다른 숫자
  - 중국 생활 맥락의 예시
  - 한국 독자에게 어색한 번역투 용어와 기관명
- 한국 1차 출처(law.go.kr, 부처, 공단, KOSIS)를 직접 열어 확인한다. 추측으로 「한국에도 있다」고 판정하는 것을 금지한다.
- 결과는 `kr-harness/chapters/NN/kr-fit-review.md`에 남긴다. 항목별로 판정(적합/수정 필요/삭제 권고), 근거, URL을 적고, 마지막 줄에 `KR-FIT: pass|fail blockers=N`을 둔다.
- ✅ 6개 절(2, 3, 4, 6, 14, 22)을 Opus 서브에이전트 6개가 병렬로 검토한다.

### 1-C. 수정 (절 단위 Opus 서브에이전트)
- 1-A의 block 건과 1-B의 「수정 필요」 건을 고친다.
- 대응하는 한국 제도가 없으면 KR-GUIDE대로 처리한다. 빼거나, 「한국에는 이 제도가 없다」고 명시한다. 항목을 빼면 절 안의 상호 참조와 항목 수 표기도 맞춘다.
- 고친 뒤 다시 검토해 `KR-FIT: pass`를 받아야 한다. 통과하지 못한 절은 ✅에서 🟨로 강등하고 사유를 기록한다.

### 1-D. 게이트 연결
1. `pipeline.mjs`: ✅ 판정에 kr-fit `--check` 통과와 `KR-FIT: pass`를 모두 요구한다. status에 게이트 상태를 표시한다.
2. kr-pipeline SKILL.md: S8 조립 전에 「적합성 게이트」 단계를 넣는다.
3. KR-GUIDE.md 체크리스트: 손으로 하던 grep 항목을 kr-fit과 리뷰 기록으로 바꾼다.
4. `.github/workflows/kr-check.yml`: 「한국 적합성 게이트」 단계를 추가한다. README 표에서 ✅인 절마다 kr-fit `--check`와 `KR-FIT: pass`가 있어야 하고, 없으면 실패다.

## 2단계. 온라인 전자책 (브랜치 `seolcoding/kr-ebook`, PR ②, PR ①이 머지된 뒤 origin/main에서 시작)
- 남아 있는 `kr-harness/ebook/` 미추적 파일은 검토해서 쓸 만하면 재사용하고, 아니면 버린다. node_modules/와 dist-kr/은 .gitignore에 넣는다.
- `kr-harness/ebook/`에 둘 것:
  - 공용 파서: book-kr/README.md 표에서 ✅인 절만 고른다. 나머지는 목차에 「준비 중」으로 표시한다.
  - EPUB, 오프라인 단일 HTML, PDF 빌드. PDF는 pandoc → typst이고, 글꼴은 Noto CJK KR, 버전은 book.yml과 같다.
  - 웹 리더 빌드.
  - 의존성 버전을 고정한다(package.json과 lock 파일).
- 독자용 출력에서 내부 표시를 뺀다: `> **상태: …**` 줄, `[← 총목차]` 줄, `<!-- … -->` 주석. TODO는 남기고 빌드 로그에 개수를 집계한다.
- 메타데이터: lang=ko, 비공식 현지화판이며 원문이 우선한다는 안내와 원본 링크를 넣는다. 빌드 스탬프는 Asia/Seoul 기준이다.
- **웹 리더(GitHub Pages)**:
  - 목차와 진행률(N/34절)을 보여 주고, 항목 제목으로 검색할 수 있게 한다.
  - 390px 폭에서 가로 스크롤이 없어야 하고, 다크 모드를 지원한다. 외부 스크립트는 쓰지 않는다.
  - EPUB, PDF, HTML 다운로드 링크와 원본 링크를 둔다.
- `.github/workflows/kr-book.yml`:
  - 트리거: book-kr/**, kr-harness/ebook/**, 워크플로 자신, workflow_dispatch.
  - PR일 때: 빌드, epubcheck 5.4.0, 아티팩트 업로드만 한다.
  - main일 때: 고정 Release `kr-ebook-latest`에 HowToLiveBetter-KR.epub/.pdf/.html을 올리고, actions/deploy-pages로 배포한다.
  - pages/id-token 권한과 concurrency를 설정한다. kr-check.yml의 「API 키 의존 금지」 규칙을 지킨다.
- book-kr/README.md 상단에 웹 리더 URL(https://seolcoding.github.io/HowToLiveBetter-KR/)과 다운로드 링크를 넣는다.
- 로컬 검증: EPUB, HTML, 웹 리더를 실제로 빌드한다. Playwright로 데스크톱과 390px 폭 스크린샷을 찍어 확인한다. PDF와 epubcheck는 로컬 도구가 없으면 CI에서 확인한다.

## 3단계. 업로드와 정리 (오케스트레이터가 직접)
각 PR의 흐름: 커밋(한국어, 끝에 `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`) → push → PR(한국어, 끝에 `🤖 Generated with [Claude Code](https://claude.com/claude-code)`) → CI가 초록이 될 때까지 수정 → `gh pr merge --squash --delete-branch`.

PR ①을 머지한 뒤 PR ②를 시작한다.

PR ② 머지 전후:
1. Pages 활성화: `gh api -X POST repos/seolcoding/HowToLiveBetter-KR/pages -f build_type=workflow`. 이미 있으면 PUT으로 바꾼다.
2. `gh workflow disable "电子书" -R seolcoding/HowToLiveBetter-KR`. 파일은 수정하지 않는다.
3. 머지 후 main의 kr-book run이 성공했는지 확인한다. Release 세 파일을 내려받아 크기를 확인한다. Pages URL이 200이고 ✅ 절이 보이는지 Playwright로 확인한다.
4. `gh repo edit seolcoding/HowToLiveBetter-KR --homepage https://seolcoding.github.io/HowToLiveBetter-KR/`.

정리:
- 빈 로컬 브랜치 `seolcoding/kr-fit-gate`(1단계 전에 다시 쓰거나 지우고 새로 만든다)와 `worktree-agent-a3814a453fca3191c`를 지운다.
- 머지된 브랜치를 로컬과 원격에서 지운다. 서브에이전트 worktree를 쓴 경우 `git worktree remove`로 지운다.
- 이 워크트리는 `git switch --detach origin/main`으로 둔다. 메인 워크트리는 `pull --ff-only`로 맞춘다(먼저 깨끗한지 확인).
- 마지막에 `git worktree list`, `git branch -a`, `git ls-remote --heads origin`을 출력한다.

## 금지
- upstream 파일 수정, sync-stats.mjs 실행, check-refs.mjs를 --check 없이 실행.
- main에 직접 push. force push는 자기 기능 브랜치에 `--force-with-lease`로만 한다.
- 원본 저장소(eternity4719)에 무엇이든 보내는 것. 이슈 작성. 이 문서에 없는 저장소 설정 변경.
- bare `git stash`.
- 서브에이전트에게 외부 행동을 맡기는 것.
- 게이트를 통과하지 못한 절을 ✅로 두는 것. 근거 없이 「한국에도 있다」고 판정하는 것.

## 완료 기준
- PR ①, PR ②가 머지됐고 main CI(한국어판 검사, kr-book)가 초록이다.
- ✅ 절은 전부 게이트를 통과한다.
- Release `kr-ebook-latest` 세 파일을 받을 수 있다. Pages URL이 정상이고, homepage가 갱신됐다.
- 원격 브랜치는 main 하나다. 워크트리 두 개가 origin/main과 일치한다.

## 보고 (한국어)
- 절별 발견 건수(block/warn/리뷰 지적)와 대표 수정 사례(원문 → 수정, 근거 URL)
- 강등된 절과 사유
- 허용 목록에 넣은 한국 번호와 출처
- PR 번호, run ID, Release와 Pages URL, 스크린샷 경로, TODO 집계
- Opus 서브에이전트를 몇 개 띄워 무엇을 맡겼는지
- 하지 못한 일과 이유
