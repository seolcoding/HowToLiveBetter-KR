# 클라우드에서 돌리기 (Claude Code 클라우드 런타임)

한국어판 파이프라인 하니스는 저장소 안에 모두 들어 있다. 로컬 터미널, claude.ai/code 클라우드 세션, routines가 같은 파일을 읽고 같은 절차로 돈다. 로컬 전용 도구(orca CLI, codex, opencode, 로컬 프록시)에는 의존하지 않는다.

**API 키나 토큰은 쓰지 않는다.** LLM 작업은 전부 claude.ai 구독 로그인으로 돈다. 클라우드 세션과 routines는 계정 로그인으로 돌고, 로컬은 `/login`으로 돈다. 저장소에는 `ANTHROPIC_API_KEY`, `CLAUDE_CODE_OAUTH_TOKEN` 같은 비밀값이 하나도 없다. GitHub Actions(`kr-check.yml`)는 LLM 없이 결정론적 검사만 한다. Actions에서 Claude를 돌리려면 장기 토큰을 저장소 비밀값으로 넣어야 해서, 그 경로는 2026-10-07에 뺐다. 로컬에서 `ANTHROPIC_API_KEY`가 셸에 설정돼 있으면 구독 로그인보다 우선한다. 그러면 `/schedule`이나 `--cloud`가 숨겨지거나 API 과금으로 돈다. `/status`의 Login method가 claude.ai 계정인지 확인한다.

런타임 사실은 2026-10-07에 공식 문서로 확인했다. 출처는 맨 아래에 있다.

## 하니스 구성

```
.claude/
  settings.json              권한 허용 목록 + SessionStart 훅 등록
  hooks/session-start.mjs    세션 시작 시 런타임·다음 할 일·조사 도메인 접속을 알려 줌
  agents/
    kr-localizer.md          S1-S3, 절 1개 = 에이전트 1개(웹 조사)
    kr-polisher.md           S6, 실행 1개 = 에이전트 1개
    kr-entry-refiner.md      S7, 항목 1개 = 에이전트 1개
  skills/
    kr-pipeline/             오케스트레이터(/kr-pipeline N) + scripts/pipeline.mjs(status·new-run·assemble) + scripts/run-id.mjs(실행 ID 규칙)
    kr-localize/             S1-S3 절차 + references/(문체 규칙, 1차 출처, 문체 코퍼스)
    kr-style/                S4 scripts/convert-b.mjs(합니다체 결정론 변환)
    kr-verify/               S5 scripts/verify.mjs + scripts/report.mjs(report.html, main에서만)
    kr-polish/               S6 윤문 규칙
    kr-refine/               S7 팬아웃 절차 + scripts/entries.mjs(분할·구조검사·조립)
.github/workflows/
  kr-check.yml               LLM·비밀값 없는 검사(문법·검증·실행 ID 중복·구조·상태표)
kr-harness/                  데이터(chapters/, runs/, report.html)와 문서(pipeline.md, LESSONS.md, 이 문서)
  routines/*.md              routine 프롬프트 본문(routine에는 「이 파일을 읽고 수행」 한 줄만 넣는다)
```

스크립트는 Node 20 이상, 외부 패키지 없이 돈다. 클라우드 VM의 기본 Node는 22다.

## 실행 경로 세 가지

### 1. 클라우드 세션 (claude.ai/code, 데스크톱 앱, 모바일)

- claude.ai/code(또는 모바일 앱 Code 탭)에서 저장소 선택기로 이 저장소(`seolcoding/HowToLiveBetter-KR`)를 고른다. 환경은 `kr-research`, 권한 모드는 **Accept edits**나 **Auto**를 고른다. 그다음 `/kr-pipeline 13`처럼 입력한다. 클라우드에는 Manual·Bypass 모드가 없다.
- **미리 채운 링크로 바로 열기**: `node .claude/skills/kr-pipeline/scripts/pipeline.mjs launch`를 실행하면 다음 후보 절마다 `https://claude.ai/code?prompt=…&repositories=…&environment=kr-research` 링크가 나온다. 절 번호를 직접 줄 수도 있다(`launch 13 16 --until S5`). 링크 하나가 세션 하나, 브랜치 하나다. 여러 개를 열면 절 여러 개가 병렬로 돈다. 워크트리를 따로 만들 필요가 없다. 같은 절을 두 세션에 맡기지는 않는다. 병렬로 돌릴 때 지킬 것은 아래 「병렬 세션」에 있다.
- 터미널에서 넘길 수도 있다: `claude --cloud "/kr-pipeline 13"`. 클라우드는 GitHub 원격에서 클론하므로, 로컬 변경은 먼저 push한다.
- 결과는 `claude/`로 시작하는 브랜치에 push된다. push한 뒤에도 세션은 닫히지 않는다. diff 보기에서 줄마다 댓글을 남기면 다음 메시지에 같이 전달된다. 다 됐으면 diff 보기 상단의 **PR 생성**을 누른다. PR 뒤 CI 실패나 리뷰 댓글도 같은 세션에서 고친다.
- 탭을 닫아도 세션은 계속 돈다. 휴대폰 앱으로 확인할 수 있다.
- 클라우드 결과를 로컬로 가져오려면 `claude --teleport <세션 ID>` 또는 `/teleport`를 쓴다.

### 2. Routines (예약·즉시 실행·PR 이벤트)

routine 설정은 저장소가 아니라 claude.ai 계정에 저장된다. 그래서 **프롬프트 본문은 저장소의 `kr-harness/routines/`에 두고**, routine에는 한 줄만 넣는다. 이렇게 하면 절차를 바꿀 때 routine을 고칠 필요 없이 커밋만 하면 된다. routine은 권한 확인 없이 자율로 돌고, 구독 사용량에서 빠진다. 비밀값은 필요 없다.

| routine | 트리거 | 프롬프트(routine에 넣는 한 줄) | 환경 |
|---|---|---|---|
| `kr-next` | 일정(예: 매주 월 09:07) + 필요할 때 **Run now** | `kr-harness/routines/next-chapter.md를 읽고 그대로 수행하라.` | `kr-research` |
| `kr-pr-check` | GitHub 이벤트 `pull_request.opened`, 필터 헤드 브랜치 starts with `claude/`, 초안 여부 `false` | `kr-harness/routines/pr-check.md를 읽고 그대로 수행하라.` | Default |

- 만드는 법: claude.ai/code/routines → **New routine**. 또는 터미널에서 `/schedule`을 실행한다(GitHub 트리거는 v2.1.225 이상). 저장소는 이 저장소 하나만 고르고, Connectors는 전부 뺀다.
- GitHub 트리거는 저장소에 Claude GitHub App이 설치돼 있어야 한다. `/web-setup`만으로는 웹훅이 오지 않는다. 지원 이벤트는 PR과 릴리스뿐이다. 이슈 댓글로 부르는 기능(@claude)은 routine에 없다.
- 한도: Run now는 routine마다 시간당 30회다. 예약 실행은 계정당 시간당 100회다. 실행 목록의 녹색 표시는 「인프라 오류 없음」이라는 뜻일 뿐이다. 결과는 세션을 열어 확인한다.
- routine 실행도 `claude/` 브랜치에 push한다. PR은 실행 세션의 diff 보기에서 연다.

### 3. GitHub (비밀값 없이)

- **검사**: book-kr/, kr-harness/, .claude/를 건드린 PR마다 「한국어판 검사」(kr-check.yml)가 돈다. LLM은 쓰지 않는다.
- **PR 리뷰 댓글·CI 실패 대응**: Claude GitHub App을 설치하면 클라우드 세션이 연 PR의 CI 실패와 리뷰 댓글에 Auto-fix로 대응한다. 세션 안에서 직접 시켜도 된다.

## 처음 한 번 설정

1. **GitHub 연결**(둘 중 하나):
   - 브라우저: claude.ai/code에 로그인하고 「Sign in with GitHub」로 연결한다. 이 저장소는 공개라 앱 없이도 클론된다. 그래도 [Claude GitHub App](https://github.com/apps/claude/installations/new)을 설치하는 게 좋다. 앱이 있어야 비공개 저장소가 보이고, PR의 CI 실패와 리뷰 댓글에 자동 대응(Auto-fix)하며, routine의 GitHub 트리거도 쓸 수 있다. 앱 설치는 비밀값을 저장소에 넣지 않는다.
   - 터미널: `gh auth login` → Claude Code 안에서 `/login`(claude.ai 계정, API 키 로그인은 안 됨) → `/web-setup`. `gh` 토큰이 클라우드 세션의 GitHub 자격 증명이 된다. **이 하니스는 `.github/workflows/`를 고칠 수 있으므로 토큰에 `workflow` 범위가 있어야 push가 거부되지 않는다.** 경고가 나오면 `gh auth refresh -s workflow` 후 `/web-setup`을 다시 실행한다.
   - Pro·Max 플랜은 이때 **Default** 환경(Trusted 네트워크, setup script 없음)이 자동으로 생긴다. S4~S8만 돌릴 거면 그것으로 충분하다.
2. **클라우드 환경 만들기**: claude.ai/code의 환경 선택기에서 `kr-research` 환경을 추가한다(`pipeline.mjs launch` 링크가 이 이름을 미리 고른다).
   - Network access: **Full** 이 가장 간단하다. 좁히고 싶으면 **Custom**을 고르고 「Also include default list」를 켠 뒤, 아래 목록을 넣는다.
   - Setup script: 비워 둔다(외부 패키지가 없다). 나중에 뭔가 넣더라도 환경 캐시를 만드는 시간 예산이 약 5분이다. 0이 아닌 종료 코드는 세션 시작을 막는다. 무거운 일은 SessionStart 훅으로 옮긴다.
   - Environment variables: 필요 없다. 여기에 API 키를 넣지 않는다(환경 변수는 그 환경을 쓰는 모든 사람에게 보인다).
3. 조사(S1-S3)를 하지 않는 세션은 기본 **Trusted** 환경으로 충분하다. S4~S8과 보고서는 네트워크를 쓰지 않는다.

### Custom 네트워크 허용 목록 (S1-S3 조사용)

조사 기록과 book-kr/에 실제로 나온 도메인에서 뽑았다. DOI는 출판사 사이트로 넘어가므로 주요 출판사도 넣었다.

```
*.go.kr
*.or.kr
kosis.kr
*.kdca.go.kr
glaw.scourt.go.kr
search.naver.com
doi.org
*.doi.org
europepmc.org
*.europepmc.org
pubmed.ncbi.nlm.nih.gov
*.ncbi.nlm.nih.gov
web.archive.org
archive.org
*.who.int
*.nice.org.uk
*.cdc.gov
*.fda.gov
*.nih.gov
*.nejm.org
*.thelancet.com
*.bmj.com
jamanetwork.com
*.jamanetwork.com
*.springer.com
link.springer.com
*.nature.com
*.wiley.com
onlinelibrary.wiley.com
*.sciencedirect.com
academic.oup.com
*.cochranelibrary.com
journals.plos.org
*.frontiersin.org
*.mdpi.com
*.tandfonline.com
*.sagepub.com
*.ahajournals.org
arxiv.org
```

세션이 시작되면 훅이 law.go.kr, kosis.kr, doi.org, Europe PMC, pubmed, web.archive.org 접속을 점검해 알려 준다. 판정 방식(2026-10-10)은 다음과 같다.

- 도메인 6개를 동시에 보고, 도메인마다 최대 3번 시도한다(시도당 5초, 사이 0.7초). 한 번이라도 서버가 답하면 **정상**이다. 훅 전체는 20초 안에 끝난다.
- Europe PMC는 화면(europepmc.org)이 curl에 403을 주므로 REST API(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=test&format=json`)로 본다.
- 실패는 둘로 나눈다. 시간 초과·연결 끊김이 섞여 있으면 **끊김**이다. 막힌 게 아니라 응답이 들쭉날쭉한 것일 수 있다(2026-10-10 law.go.kr은 curl 8번 중 5번 성공). 매번 프록시나 서버가 거절했으면 **차단**이다. 프록시의 CONNECT 403·407은 조직 정책 차단이라 다시 시도하지 않는다.
- curl로 안 열린 곳도 WebFetch로는 열릴 수 있다(2026-10-10 nhis.or.kr·moel.go.kr). 끊김뿐이면 재시도(`curl --retry 3 --retry-all-errors`)와 WebFetch로 조사를 진행한다. 차단이 있으면 WebFetch로 직접 열어 보고, 1차 출처가 WebFetch로도 안 열릴 때만 조사 단계를 건너뛴다.

## 병렬 세션 (2026-10-10)

세션 여러 개가 절을 하나씩 맡아 동시에 돌고, PR도 각자 낸다. 서로 충돌하지 않게 다음 규칙을 둔다.

### 실행 ID

- `pipeline.mjs new-run N`이 붙이는 ID는 `R` + 절 번호 두 자리 + 절 안 순번 글자다. 예: 제18절 첫 실행 `R18a`, 두 번째 `R18b`, 제13절 첫 실행 `R13a`. 순번은 a…y 다음 za, zb…로 이어진다. 폴더는 `kr-harness/runs/<ID>-<절>-style<S>`(예: `R18a-18-styleB`)다.
- 다른 절을 도는 세션끼리는 절 번호가 달라서 조정 없이도 겹치지 않는다. 한 세션 안에서 같은 절 `new-run`을 동시에 여러 번 돌려도 폴더를 만든 뒤 확인하고 물러나는 방식이라 겹치지 않는다. 같은 절을 두 세션에서 동시에 돌리는 것만 하지 않는다.
- 옛 ID `R01`~`R14`(전역 일련번호)와 그 폴더는 그대로 둔다. 찾기는 ID를 정확히 맞춘다. 그래서 `R13`(옛, 제4절)과 `R13a`(새, 제13절)는 섞이지 않는다. 주력 실행은 절 안에서 옛 ID보다 새 ID, 새 ID끼리는 순번이 큰 쪽을 최근으로 본다.
- 브랜치를 합치다 같은 ID 폴더가 둘 생기면 `node .claude/skills/kr-pipeline/scripts/run-id.mjs --check`(CI 「실행 ID 규칙과 중복」 단계)가 실패한다. `verify.mjs`·`assemble`도 겹친 ID는 처리하지 않는다.

### 함께 고치는 생성 파일

- `kr-harness/report.html`은 **main에서만** 다시 만든다. `report.mjs`는 다른 브랜치에서는 쓰지 않고 안내만 한다. 미리 보기는 `report.mjs --out <저장소 밖 경로>`, 보고서만 바꾸는 별도 PR은 `report.mjs --force`다.
- `verify.mjs`는 결과가 같은 실행의 `5-verify.md`·`meta.json`을 다시 쓰지 않는다. 인자 없이 돌려도 R01~R14 파일이 날짜 한 줄 때문에 PR마다 바뀌지 않는다.
- `kr-harness/polish-queue.md` 표에는 줄을 덧붙이지 않는다(끝에 덧붙이는 줄은 병렬 PR끼리 충돌한다). 진행 상태는 `pipeline.mjs status`와 실행 폴더의 `meta.json`이 원본이다.
- `book-kr/README.md` 표는 절마다 다른 줄을 고치므로 그대로 쓴다.

## 클라우드에서 달라지는 점

- **사용자 설정은 안 따라온다.** `~/.claude/`의 CLAUDE.md, 스킬, 에이전트, 훅, 플러그인은 클라우드에 없다. 필요한 것은 전부 이 저장소의 `.claude/`에 커밋돼 있어야 한다.
- **플러그인은 설치되지 않는다.** 저장소 settings.json에 `enabledPlugins`를 넣어도 클라우드 세션은 설치하지 않는다. 그래서 하니스를 플러그인이 아니라 프로젝트 스킬로 만들었다.
- **저장소 하나짜리 세션에서만** `.claude/settings.json`의 훅과 권한이 적용된다. 여러 저장소를 붙인 세션에서는 이 하니스의 훅이 돌지 않는다.
- **VM은 쉬었다가 재생성될 수 있다.** 오래 쉬면 VM이 회수되고, 커밋 안 된 파일은 사라질 수 있다. 그래서 파이프라인은 단계마다 커밋하고, S7은 묶음마다 `entries/`를 커밋한다. `entries.mjs split`은 통과한 출력을 지우지 않아서 중간부터 다시 할 수 있다.
- **GitHub 프록시 제약**: 브랜치 삭제와 태그 push가 막힌다. 브랜치 push와 PR은 된다.
- **세션 링크**: `CLAUDE_CODE_REMOTE_SESSION_ID`의 `cse_`를 `session_`으로 바꾸면 `https://claude.ai/code/session_...`이 된다. 훅이 출력해 주고, PR 본문에 넣는다.

## 출처 (2026-10-07 확인)

- 빠른 시작(GitHub 연결·`/web-setup`·`workflow` 범위, Default 환경, 권한 모드, 미리 채우기 URL 매개변수, diff 보기와 PR 생성, setup script 5분 예산): https://code.claude.com/docs/ko/web-quickstart
- 클라우드 환경(설치 도구, 네트워크 단계, 허용 도메인, setup script, SessionStart 훅, `CLAUDE_CODE_REMOTE`, 따라오는 파일): https://code.claude.com/docs/en/cloud-environments
- 클라우드 세션, `--cloud`, teleport, GitHub 프록시: https://code.claude.com/docs/en/claude-code-on-the-web
- Routines(일정·API·GitHub 트리거, PR·릴리스 이벤트만, GitHub App 필요, 한도, `ANTHROPIC_API_KEY`가 구독 로그인보다 우선함): https://code.claude.com/docs/ko/routines
