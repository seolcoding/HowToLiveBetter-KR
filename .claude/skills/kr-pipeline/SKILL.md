---
name: kr-pipeline
description: 한국어판(book-kr/) 현지화 파이프라인 오케스트레이터. 절 하나를 S1 분석부터 S8 조립까지 끝까지 돌리거나, 현재 상태를 보고 다음 단계만 진행할 때 사용. "/kr-pipeline 13", "다음 절 현지화", "파이프라인 돌려", "현지화 상태", "kr pipeline" 같은 요청. 로컬·클라우드(claude.ai/code, --cloud, routines) 어디서나 같은 절차로 돈다. API 키 없이 구독 로그인으로만 돈다.
argument-hint: "[절 번호] [--until S6] [--from S4]"
---

# 한국 현지화 파이프라인 (오케스트레이터)

인자: `$ARGUMENTS` — 절 번호(없으면 상태표의 다음 후보), 선택적으로 `--from Sx`·`--until Sx`.

너는 오케스트레이터다. **본문을 직접 쓰거나 고치지 않는다.** 단계마다 정해진 스킬·스크립트·서브에이전트에 맡기고, 결과 파일과 검사 결과만 확인한다. 규칙 원본은 [KR-GUIDE.md](../../../KR-GUIDE.md), 운영 노하우는 [kr-harness/LESSONS.md](../../../kr-harness/LESSONS.md)다. 시작 전에 둘 다 읽는다.

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
| S4 문체(B 합니다체) | 결정론 스크립트 | `pipeline.mjs new-run N` | `kr-harness/runs/RNN-NN-styleB/4-styled.md` |
| S5 검증 | 결정론 스크립트 | `node .claude/skills/kr-verify/scripts/verify.mjs RNN` | `5-verify.md`, `meta.json.verify` |
| S6 윤문 | `kr-polisher` 서브에이전트 1개 | Agent 도구, 프롬프트 "RNN" | `6-polished.md` |
| S7 항목별 개선 | 항목마다 `kr-entry-refiner` 1개 | [kr-refine](../kr-refine/SKILL.md) 절차 | `7-refined.md` |
| S5′ 재검증 | 결정론 스크립트 | `verify.mjs RNN` | 7-refined 기준 판정 |
| S8 조립 | 결정론 스크립트 | `pipeline.mjs assemble RNN` | `book-kr/NN-*.md`, README 표 ✅ |
| 보고 | 결정론 스크립트 | `node .claude/skills/kr-verify/scripts/report.mjs` | `kr-harness/report.html` |

**원칙(2026-10-06 사용자 확정): 개별 항목은 항상 개별 서브에이전트가 작업한다.** S7에서 절 전체를 한 컨텍스트로 고치지 않는다.

## 2. 단계 사이 관문

- S1-S3 뒤: 세 파일이 다 있고, `3-draft.md`의 `### ` 개수가 원문 `book/NN-*.md`와 같아야 다음으로 간다. 다르면 서브에이전트에게 사유를 묻고, 의도된 삭제면 `1-analysis.md`에 기록돼 있어야 한다.
- S5 판정이 **반려**면 멈춘다. `5-verify.md` 이슈 목록을 사용자에게 보고한다. 오케스트레이터가 직접 본문을 고치지 않는다.
- S7 뒤 재검증이 반려면 조립하지 않는다. 조건부 통과(50자 초과 문장, 법조문 인용 보존)는 조립해도 된다.
- 모든 단계에서 `book/`, 원본 `README.md`, `docs/`, `index.html`, `tools/`는 수정 금지. `tools/sync-stats.mjs`, `check-refs.mjs`, `check-links.mjs`는 돌리지 않는다(book-kr/는 대상이 아님).

## 3. 커밋과 브랜치

- 단계가 하나 끝날 때마다 커밋한다. 클라우드 VM은 쉬었다가 재생성될 수 있어서, 커밋 안 된 산출물은 사라질 수 있다.
- 커밋 메시지: `kr: 제NN절 S4 문체 변환 (R15)`처럼 절·단계·실행 ID를 넣는다.
- 클라우드 세션에서는 `CLAUDE_CODE_REMOTE=true`다. 세션이 정해 준 작업 브랜치(`claude/…`)에 단계마다 push한다. 브랜치를 새로 만들거나 바꾸지 않는다.
- PR은 직접 열지 않는다. 사용자에게 diff 보기 상단의 **PR 생성** 버튼을 쓰라고 안내한다. 이때 PR 본문 초안(검증 판정, TODO 건수, 세션 링크 `https://claude.ai/code/${CLAUDE_CODE_REMOTE_SESSION_ID/#cse_/session_}`)을 마지막 메시지에 붙인다. push한 뒤에도 세션은 닫히지 않는다. PR 뒤 CI 실패나 리뷰 댓글은 같은 세션에서 이어서 고친다.
- 클라우드 권한 모드는 Auto, Accept edits, Plan뿐이다(Manual·Bypass 없음). Accept edits로 돌릴 때 `node`·`git` 명령이 막히지 않게 `.claude/settings.json` 허용 목록에 들어 있다. Plan 모드로 시작했으면 계획 승인 뒤 진행한다.
- main에 직접 push하지 않는다.

## 4. 끝나면

사용자에게 다음을 보고한다: 대상 절, 실행 ID, 단계별 결과(S5 판정, S7 개선 n/m, 원문 유지 항목), 남은 TODO 건수, PR 본문 초안(PR은 사용자가 연다). `kr-harness/polish-queue.md` 표에 실행 한 줄을 추가하거나 상태를 ✅로 바꾼다.

## 클라우드 주의

- S1-S3 조사는 law.go.kr, KOSIS, 공단 사이트, doi.org, europepmc.org 등에 접속해야 한다. 클라우드 환경의 네트워크가 기본 **Trusted**면 이 사이트들이 막힌다. 세션 시작 훅이 접속 여부를 알려 준다. 막혀 있으면 S1-S3를 건너뛰고 S4 이후 단계만 진행한 뒤, 사용자에게 [kr-harness/CLOUD.md](../../../kr-harness/CLOUD.md)의 허용 도메인 설정을 안내한다.
- S4·S5·S8과 보고서는 네트워크가 필요 없다. S6·S7은 파일만 다룬다.
