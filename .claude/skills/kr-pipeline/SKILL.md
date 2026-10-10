---
name: kr-pipeline
description: 한국어판(book-kr/) 현지화 파이프라인 오케스트레이터. 절 하나를 S1 분석부터 S8 조립까지 끝까지 돌리거나, 현재 상태를 보고 다음 단계만 진행할 때 사용. "/kr-pipeline 13", "다음 절 현지화", "파이프라인 돌려", "현지화 상태", "kr pipeline" 같은 요청. 로컬·클라우드(claude.ai/code, --cloud, routines) 어디서나 같은 절차로 돈다. API 키 없이 구독 로그인으로만 돈다.
argument-hint: "[절 번호] [--until S6] [--from S4]"
---

# 한국 현지화 파이프라인 (오케스트레이터)

인자: `$ARGUMENTS` — 절 번호(없으면 상태표의 다음 후보), 선택적으로 `--from Sx`·`--until Sx`.

너는 오케스트레이터다. **본문을 직접 쓰거나 고치지 않는다.** 단계마다 정해진 스킬·스크립트·서브에이전트에 맡기고, 결과 파일과 검사 결과만 확인한다. 규칙 원본은 [KR-GUIDE.md](../../../KR-GUIDE.md), 운영 노하우는 [kr-harness/LESSONS.md](../../../kr-harness/LESSONS.md)다. 시작 전에 둘 다 읽는다.

모델과 병렬 한도는 저장소 루트의 [AGENTS.md](../../../AGENTS.md) 환경 대응 규칙이 우선한다. 이 스킬과 연결된 지시의 Opus(`model: opus`)는 Codex에서 `gpt-6.1-sol`로, `gpt-6.1-sol`은 Claude에서 Opus로 실행한다. 하위 서브에이전트도 같다. Claude용 에이전트 frontmatter는 그대로 유지한다. 병렬 실행은 현재 가용 슬롯 안에서 나눠 띄우며, Codex의 현재 한도는 오케스트레이터 포함 7개다. Claude의 서브에이전트 20개 기록을 Codex에 적용하지 않는다.

## 0. 상태 확인

```bash
node .claude/skills/kr-pipeline/scripts/pipeline.mjs status          # 34절 전체
node .claude/skills/kr-pipeline/scripts/pipeline.mjs status 13       # 한 절
```

출력의 `→ [단계] 할 일`이 다음 행동이다. 절 번호가 없으면 "다음 후보" 첫 번째 절을 고른다(🟢·🟡 우선, 🔴는 사용자가 지정할 때만).

## 1. 단계표

| 단계 | 누가 | 실행 | 산출물 |
|---|---|---|---|
| S1-S3 분석·조사·초역 | `kr-localizer` 서브에이전트 1개 | Agent 도구, 프롬프트 "제N절" | `kr-harness/chapters/NN/{1-analysis,2-research,3-draft}.md` |
| S4 문체(B 합니다체) | 결정론 스크립트 | `pipeline.mjs new-run N` | `kr-harness/runs/<ID>-NN-styleB/4-styled.md`(예: `R18a-18-styleB`) |
| S5 검증 | 결정론 스크립트 | `node .claude/skills/kr-verify/scripts/verify.mjs <ID>` | `5-verify.md`, `meta.json.verify` |
| S6 윤문 | `kr-polisher` 서브에이전트 1개 | Agent 도구, 프롬프트는 실행 ID(예: "R18a") | `6-polished.md` |
| S7 항목별 개선 | 항목마다 `kr-entry-refiner` 1개 | [kr-refine](../kr-refine/SKILL.md) 절차 | `7-refined.md` |
| S5′ 재검증 | 결정론 스크립트 | `verify.mjs <ID>` | 7-refined 기준 판정 |
| G 적합성 게이트 | 기계 검사 + `kr-fit-reviewer` 서브에이전트 1개(Opus) | `kr-fit.mjs <산출물> --check` → Agent 도구, 프롬프트 "제N절" → `pipeline.mjs gate N --save` | `kr-harness/chapters/NN/{kr-fit-lint.txt,kr-fit-review.md}`(리뷰 마지막 줄에 본문 sha256) |
| S8 조립 | 결정론 스크립트 | `pipeline.mjs assemble <ID>` (게이트 미통과면 거부) | `book-kr/NN-*.md`, README 표 ✅ |
| 보고(main 전용) | 결정론 스크립트 | 절 세션에서는 돌리지 않는다. 아래 「병렬 세션 규칙」 | `kr-harness/report.html` |

**원칙(2026-10-06 사용자 확정): 개별 항목은 항상 개별 서브에이전트가 작업한다.** S7에서 절 전체를 한 컨텍스트로 고치지 않는다.

### 실행 ID (2026-10-10부터)

- 형식은 `R` + 절 번호 두 자리 + 절 안 순번 글자다. 제18절 첫 실행은 `R18a`, 두 번째는 `R18b`, 제13절 첫 실행은 `R13a`다. 순번은 a…y 다음 za, zb…로 이어진다. 폴더는 `kr-harness/runs/<ID>-<절>-style<S>`(예: `R18a-18-styleB`)다.
- 절 번호가 ID에 들어 있으니 다른 절을 도는 세션끼리는 조정 없이 겹치지 않는다. 같은 작업 트리 안에서는 같은 절 `new-run`을 동시에 돌려도 겹치지 않는다. 같은 절을 두 세션에서 동시에 돌리지는 않는다(절 하나 = 세션 하나 = 브랜치 하나).
- 옛 ID `R01`~`R14`는 그대로 둔다. `verify.mjs`·`assemble`은 ID를 정확히 맞춰 찾는다. 그래서 `R13`(옛, 제4절)과 `R13a`(새, 제13절)는 섞이지 않는다. 서브에이전트에게도 ID를 그대로 주고, 실행 폴더는 「`<ID>-`로 시작하는 폴더」로 찾게 한다.
- 주력 실행(문체 B, 재현성 제외, 가장 최근)은 절 안에서 고른다. 옛 ID보다 새 ID가, 새 ID끼리는 순번이 큰 쪽이 최근이다. 규칙은 `scripts/run-id.mjs` 머리말에 있고, `node .claude/skills/kr-pipeline/scripts/run-id.mjs --check`가 폴더 이름과 ID 중복을 검사한다(CI도 돌린다).

## 2. 단계 사이 관문

- S1-S3 뒤: 세 파일이 다 있고, `3-draft.md`의 `### ` 개수가 원문 `book/NN-*.md`와 같아야 다음으로 간다. 다르면 서브에이전트에게 사유를 묻고, 의도된 삭제면 `1-analysis.md`에 기록돼 있고 `3-draft.md` 도입부(첫 `### ` 줄 앞)에 뺀 항목마다 `<!-- kr-omit: N — 사유 -->` 표시가 있어야 한다. 한국 전용 항목을 더했으면 `1-analysis.md`의 사유와 `<!-- kr-add: N — 사유 -->` 표시가 있어야 한다. 원문 DOI를 일부러 더하거나 뺐으면 `kr-doi-add`·`kr-doi-drop` 표시도 있어야 한다([kr-verify](../kr-verify/SKILL.md) 「문서화된 의도적 차이」). 표시가 없으면 S5가 반려한다.
- S5 판정이 **반려**면 멈춘다. `5-verify.md` 이슈 목록을 사용자에게 보고한다. 오케스트레이터가 직접 본문을 고치지 않는다.
- S7 뒤 재검증이 반려면 조립하지 않는다. 조건부 통과(50자 초과 문장, 법조문 인용 보존)는 조립해도 된다.
- **적합성 게이트(S8 조립 전, 2026-10-10)**: ✅의 조건은 S5 검증에 더해 한국 실정 적합성 게이트 통과다. 둘 다 있어야 한다.
  1. 기계 검사: `node .claude/skills/kr-verify/scripts/kr-fit.mjs kr-harness/runs/<실행폴더>/7-refined.md --check`. block이 있으면 S7 산출물을 고친다(항목 단위, kr-entry-refiner). 오탐이면 규칙(`kr-verify/references/kr-fit-rules.json`)을 고치거나, 의도된 비교라면 그 줄에 `<!-- kr-fit-ok: 사유 -->`를 단다.
  2. 내용 검토: `kr-fit-reviewer` 서브에이전트(Opus)를 Agent 도구로 띄운다. 프롬프트는 "제N절"이다. 검토 대상 파일은 `pipeline.mjs status N`의 게이트 줄 괄호 안 파일이다(조립 전이면 실행 산출물, 조립 뒤면 book-kr). 결과는 `kr-harness/chapters/NN/kr-fit-review.md`, 마지막 줄 `KR-FIT: pass|fail blockers=N sha256=<64자>`. sha256은 검토 대상 본문의 해시이고 `node .claude/skills/kr-verify/scripts/kr-fit.mjs <검토 대상> --hash`(book-kr이면 `kr-fit.mjs N --hash`)로 넣는다.
  3. `node .claude/skills/kr-pipeline/scripts/pipeline.mjs gate N`이 셋을 확인한다: kr-fit block 0, `KR-FIT: pass blockers=0`, sha256이 지금 본문 해시와 같음. 리뷰 뒤에 본문이 한 글자라도 바뀌면(해시 불일치) 또는 해시가 없으면 「리뷰가 본문보다 오래됨 → 재검토 필요」로 실패한다. 해시는 BOM·CRLF와 `> **상태:` 배너 줄을 무시하므로, 실행 산출물을 검토한 리뷰는 `assemble` 뒤에도, `--demote`·`--promote` 뒤에도 유효하다. `kr-fit-lint.txt`는 `gate N --save`일 때만, 내용이 바뀌었을 때만 쓴다. 통과해야 `assemble`이 조립한다. 우회 플래그는 없다.
  4. fail이면 리뷰의 block·삭제 권고를 고치고 검토를 다시 받는다. 대응하는 한국 제도가 없으면 KR-GUIDE대로 빼거나 「한국에는 이 제도가 없다」고 쓴다. 오케스트레이터가 직접 본문을 고치지 않는다.
  5. 이미 ✅인 절이 게이트를 못 넘으면(원본 갱신, 규칙 추가 등) 고칠 때까지 `pipeline.mjs gate N --demote`로 🟨로 내리고 사유를 남긴다. 고친 뒤 통과하면 `gate N --promote`로 ✅로 올린다. CI(「한국 적합성 게이트」 단계)는 README에서 ✅인 절마다 이 두 조건을 확인하고, 하나라도 없으면 실패한다.
- 모든 단계에서 `book/`, 원본 `README.md`, `docs/`, `index.html`, `tools/`는 수정 금지. `tools/sync-stats.mjs`, `check-refs.mjs`, `check-links.mjs`는 돌리지 않는다(book-kr/는 대상이 아님).

## 3. 커밋과 브랜치

- 단계가 하나 끝날 때마다 커밋한다. 클라우드 VM은 쉬었다가 재생성될 수 있어서, 커밋 안 된 산출물은 사라질 수 있다.
- 커밋 메시지: `kr: 제NN절 S4 문체 변환 (R18a)`처럼 절·단계·실행 ID를 넣는다.
- 클라우드 세션에서는 `CLAUDE_CODE_REMOTE=true`다. 세션이 정해 준 작업 브랜치(`claude/…`)에 단계마다 push한다. 브랜치를 새로 만들거나 바꾸지 않는다.
- PR은 직접 열지 않는다. 사용자에게 diff 보기 상단의 **PR 생성** 버튼을 쓰라고 안내한다. 이때 PR 본문 초안(검증 판정, TODO 건수, 세션 링크 `https://claude.ai/code/${CLAUDE_CODE_REMOTE_SESSION_ID/#cse_/session_}`)을 마지막 메시지에 붙인다. push한 뒤에도 세션은 닫히지 않는다. PR 뒤 CI 실패나 리뷰 댓글은 같은 세션에서 이어서 고친다.
- 클라우드 권한 모드는 Auto, Accept edits, Plan뿐이다(Manual·Bypass 없음). Accept edits로 돌릴 때 `node`·`git` 명령이 막히지 않게 `.claude/settings.json` 허용 목록에 들어 있다. Plan 모드로 시작했으면 계획 승인 뒤 진행한다.
- main에 직접 push하지 않는다.

### 병렬 세션 규칙 (2026-10-10)

여러 세션이 동시에 PR을 내도 서로 충돌하지 않게 다음을 지킨다.

- **`kr-harness/report.html`은 절 세션에서 다시 만들지 않는다.** 모든 실행을 한 파일에 모으므로 PR마다 고치면 반드시 충돌한다. `report.mjs`는 main이 아닌 브랜치에서는 쓰지 않고 안내만 한다. 미리 보려면 `report.mjs --out <저장소 밖 경로>`를 쓴다. 보고서 갱신은 main을 받은 뒤 사용자가 하거나, 보고서만 바꾸는 별도 PR에서 `report.mjs --force`로 한다.
- `verify.mjs`는 자기 실행 ID로 돌린다. 인자 없이 돌려도 결과가 같은 실행의 `5-verify.md`·`meta.json`은 다시 쓰지 않는다(날짜 줄만 바뀌는 일을 막는다).
- `kr-harness/polish-queue.md` 표에는 더 이상 줄을 덧붙이지 않는다. 진행 상태는 `pipeline.mjs status`와 실행 폴더의 `meta.json`이 원본이다.
- `book-kr/README.md` 표는 절마다 다른 줄을 고치므로 그대로 쓴다.

## 4. 끝나면

사용자에게 다음을 보고한다: 대상 절, 실행 ID, 단계별 결과(S5 판정, S7 개선 n/m, 원문 유지 항목, 적합성 게이트 kr-fit block·warn과 KR-FIT 판정), 남은 TODO 건수, PR 본문 초안(PR은 사용자가 연다). `kr-harness/polish-queue.md` 표와 `kr-harness/report.html`은 고치지 않는다(위 「병렬 세션 규칙」).

## 클라우드 주의

- S1-S3 조사는 law.go.kr, KOSIS, 공단 사이트, doi.org, europepmc.org 등에 접속해야 한다. 클라우드 환경의 네트워크가 기본 **Trusted**면 이 사이트들이 막힌다. 세션 시작 훅이 도메인마다 최대 3번 시도해 정상·끊김·차단을 알려 준다. 끊김만 있으면 재시도와 WebFetch로 S1-S3를 진행한다. 차단이 있으면 WebFetch로 직접 열어 보고, 1차 출처가 WebFetch로도 안 열리면 S1-S3를 건너뛰고 S4 이후 단계만 진행한다. 그다음 사용자에게 [kr-harness/CLOUD.md](../../../kr-harness/CLOUD.md)의 허용 도메인 설정을 안내한다.
- S4·S5·S8과 보고서는 네트워크가 필요 없다. S6·S7은 파일만 다룬다.
