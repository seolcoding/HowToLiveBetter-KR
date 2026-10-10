---
name: kr-refine
description: 한국 현지화 파이프라인 S7 항목별 개선. 실행(예: R18a)의 6-polished.md를 항목(###) 단위로 쪼개 항목마다 kr-entry-refiner 서브에이전트를 하나씩 띄워 다듬고, 구조 검사 후 7-refined.md로 재조립한다. "항목별 개선", "refine", "S7", "/kr-refine R18a" 요청에 사용.
argument-hint: "<실행 ID> [--jobs 8]"
---

# S7 항목별 개선 (항목 1개 = 서브에이전트 1개)

대상 실행: `$ARGUMENTS`. **원칙(2026-10-06 사용자 확정): 개별 항목은 항상 개별 서브에이전트가 작업한다.** 절 전체를 한 컨텍스트에서 고치지 않는다. 너(오케스트레이터)는 항목 본문을 직접 고치지 않는다.

예전에는 `entry-pass.mjs`가 orca 터미널마다 codex exec를 띄웠다. 지금은 Claude Code의 Agent 도구가 같은 일을 한다. 그래서 로컬과 클라우드에서 똑같이 돈다.

## 절차

입력 파일 `IN = kr-harness/runs/<실행폴더>/6-polished.md`.

1. **분할**
   ```bash
   node .claude/skills/kr-refine/scripts/entries.mjs split $IN
   ```
   `entries/e-NN-in.md`와 `jobs.json`이 생긴다. 이미 통과한 출력은 지우지 않는다. 처음부터 다시 하려면 `--force`를 붙인다.

2. **남은 항목 목록**
   ```bash
   node .claude/skills/kr-refine/scripts/entries.mjs pending $IN
   ```
   `[{in, out}, ...]` JSON이 나온다.

3. **팬아웃**: 남은 항목마다 `kr-entry-refiner` 서브에이전트를 하나씩 띄운다.
   - 한 메시지에 Agent 호출을 여러 개 넣어 병렬로 띄운다. 한 번에 최대 8개(`--jobs`로 조정)씩 묶고, 한 묶음이 끝나면 다음 묶음을 띄운다.
   - 각 서브에이전트에 주는 프롬프트는 이 두 줄뿐이다.
     ```
     입력: kr-harness/runs/<실행폴더>/entries/e-NN-in.md
     출력: kr-harness/runs/<실행폴더>/entries/e-NN.md
     ```
   - 서브에이전트가 스스로 구조 검사를 돌리고 실패하면 한 번 다시 쓴다.

4. **재시도**: 2번을 다시 돌린다. 남은 항목이 있으면 그 항목만 한 번 더 팬아웃한다. 두 번째에도 실패한 항목은 원문을 유지한다(조립 단계가 알아서 처리).

5. **조립**
   ```bash
   node .claude/skills/kr-refine/scripts/entries.mjs assemble $IN
   ```
   `7-refined.md`가 생긴다. 구조 검사를 통과하지 못한 항목은 `e-NN-in.md` 원문으로 들어가고, 사유는 `e-NN.md.err`에 남는다. `## TODO` 섹션은 원문 그대로 붙는다.

6. **재검증**
   ```bash
   node .claude/skills/kr-verify/scripts/verify.mjs <ID>
   ```

## 구조 검사가 보는 것 (`entries.mjs check`)

- 첫 줄이 `### N.`이고, 항목 번호가 입력과 같다. 제목 블록이 한 번만 나온다.
- 비용태그 주석 줄이 입력과 글자 하나까지 같다.
- 필드 6종이 정확히 한 번씩, 순서대로 나온다.
- 근거등급 값과 출처 줄이 입력과 같다.
- 숫자와 URL의 다중집합이 입력과 같다. 빠진 것도, 새로 생긴 것도 실패다. 원문에 없는 사실을 덧붙이면 대개 여기서 걸린다.

[LESSONS.md](../../../kr-harness/LESSONS.md) L14의 실패 유형(블록 중복, 필드 누락, TODO 유실)은 모두 이 검사와 조립 단계에서 막힌다.

다른 절 참조(KR-GUIDE 「참조 표기」): 항목 에이전트는 괄호 안 주제를 README 표 제목으로 맞추고 「(준비 중)」「다룰 예정」을 지울 수 있다. 숫자가 늘거나 주는 고침(묶은 참조 쪼개기 등)은 이 검사에 걸리므로 항목 에이전트가 하지 않는다. 남은 것은 게이트의 kr-fit(KF-REF-*)이 잡는다.

## 클라우드에서

VM이 쉬었다가 재생성되면 커밋 안 된 `entries/` 파일은 사라질 수 있다. 묶음 하나가 끝날 때마다 `entries/`를 커밋해 둔다. 재개할 때는 1번(split, `--force` 없이)부터 다시 하면 통과한 항목은 건너뛴다.
