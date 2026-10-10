# 목표: 한국어판 「공개 예정」 줄이기 (클라우드 세션용)

이 파일은 claude.ai/code 클라우드 세션에 주는 지시문이다. 세션 첫 메시지에 다음 중 하나를 넣는다.

- 0단계: `kr-harness/goals/2026-10-next-publish.md의 「0단계 세션」을 수행하라.`
- 절 하나: `/kr-pipeline N --until S8` (링크 생성: `node .claude/skills/kr-pipeline/scripts/pipeline.mjs launch 18 16 17 28 32 34`)

순서와 묶음은 [../ROADMAP.md](../ROADMAP.md)를 따른다. 환경은 `kr-research`(조사용 네트워크), 권한 모드는 Auto 또는 Accept edits.

## 공통 규칙 (모든 세션)

- 먼저 읽는다: CLAUDE.md의 「한국어판」 절, KR-GUIDE.md, kr-harness/LESSONS.md, kr-harness/ROADMAP.md, .claude/skills/kr-pipeline/SKILL.md.
- **작업은 서브에이전트가 한다.** 세션은 오케스트레이터다. 구현, 조사, 본문 작성, 검토, 수정은 Agent 도구로 띄운 서브에이전트에게 맡긴다. 모두 `model: "opus"`로 띄운다. 저장소의 에이전트 정의(`.claude/agents/*.md`)도 `model: opus`다. 서브에이전트가 또 서브에이전트를 띄우면 그것도 Opus다.
- **바깥으로 나가는 일은 오케스트레이터만 한다.** 커밋과 push는 세션 브랜치(`claude/…`)에만 한다. main에 직접 push하지 않는다. PR은 사용자가 diff 보기에서 만든다. 마지막 메시지에 PR 본문 초안을 남긴다.
- 고치지 않는다: `book/`, 원본 `README.md`, `docs/`, `index.html`, `tools/`, `.github/workflows/book.yml`, `.github/workflows/links.yml`.
- 돌리지 않는다: `tools/sync-stats.mjs`, `check-refs.mjs`(`--check` 없이), `check-links.mjs`.
- 숫자, 조문, URL을 지어내지 않는다. 확인하지 못하면 `TODO 확인 필요`를 남긴다. 중국 수치를 한국어로 옮기기만 하는 것은 금지다(위안을 환율로 바꾼 원화 금액 포함).
- 단계마다 커밋하고 push한다. VM이 재생성되면 커밋 안 된 파일은 사라진다.
- 맨손 `git stash`, main 강제 push, upstream(eternity4719)에 무엇을 보내는 일은 하지 않는다.

## 0단계 세션

ROADMAP의 「0단계」 세 가지를 한다. 서브에이전트 분담 예시는 다음과 같다. 파일이 겹치지 않게 나눈다.

1. **리더 표시**: `kr-harness/ebook/`의 목차, 진행 막대, 「공개 예정」 처리를 맡는 에이전트.
   - 웹 리더(site), 오프라인 HTML, EPUB, PDF를 모두 고친다.
   - `제N절(주제)` 참조를 대상 절 공개 여부에 따라 링크 또는 흐린 표시로 바꾸는 변환을 넣는다.
2. **본문 참조 정리**: 공개된 절(2, 3, 4, 6, 14, 22)의 「(준비 중)」 23곳을 `제N절(주제)` 형식으로 고치는 에이전트.
   - 절 하나에 에이전트 하나를 쓴다. 고친 뒤 절마다 `kr-fit-reviewer`로 재검토를 받는다.
   - `pipeline.mjs gate --all-done`이 6/6 통과해야 한다.
   - 하니스 문서에 「(준비 중)」을 붙이라는 규칙이 있으면 새 형식으로 바꾼다.
3. **병렬 안전**: `pipeline.mjs new-run`의 실행 ID가 동시에 돈 세션 사이에서 겹치지 않게 하는 에이전트.
   - 기존 R01~R14와 verify.mjs, assemble, report.mjs가 그대로 동작해야 한다.
   - 여러 세션이 함께 고치는 생성 파일의 충돌 대책도 맡는다.
   - kr-harness/CLOUD.md와 kr-pipeline/SKILL.md에 바뀐 점을 적는다.

완료 조건:
- 로컬 빌드(`kr-harness/ebook`)로 산출물 넷을 만들 수 있다. 그중 EPUB은 epubcheck 오류 0이다.
- 웹 리더 첫 화면이 390px 폭에서 가로 스크롤이 없다. 이 점을 Playwright 스크린샷이나 그에 준하는 확인으로 남긴다.
- 「한국어판 검사」와 kr-book 워크플로가 PR에서 녹색이다.
- `gate --all-done` 6/6을 통과한다.
- 공개된 절 본문에 「(준비 중)」 문자열이 0개다.

## 절 세션 (1단계, 2단계)

`/kr-pipeline N --until S8` 절차를 그대로 따른다. 덧붙일 것은 다음과 같다.

- 다른 절은 `제N절(주제)`로만 가리킨다. 「(준비 중)」을 붙이지 않는다. 공개 여부 표시는 빌드가 한다.
- 적합성 게이트(kr-fit block 0, `KR-FIT: pass blockers=0`, 해시 일치)를 통과하지 못하면 조립하지 않는다. 막히면 리뷰의 block을 고치는 Opus 서브에이전트를 띄우고, 다시 검토받는다. 같은 절에서 세 번째 리뷰도 fail이면 멈추고 남은 block을 보고한다.
- 대응하는 한국 제도가 없는 항목은 KR-GUIDE대로 빼거나 「한국에는 이 제도가 없다」고 적는다. 뺀 항목과 사유는 PR 본문에 적는다.
- PR 본문 초안에 넣을 것:
  - 항목 수(원문 대비)
  - S5 판정
  - S7 개선 n/m
  - 게이트 결과와 리뷰 회차
  - 뺀 항목
  - TODO 건수
  - 세션 링크

## 묶음이 끝날 때 (사용자 또는 로컬 세션)

- 묶음의 PR을 모두 합친 뒤 main CI(한국어판 검사, kr-book)가 녹색인지 본다.
- 웹 리더의 공개 절 수가 늘었는지, 앞서 공개된 절의 참조가 링크로 바뀌었는지 확인한다.
- 다음 묶음의 링크를 만든다: `pipeline.mjs launch <절들>`.
