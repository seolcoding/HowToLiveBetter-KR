---
name: kr-polish
description: 한국 현지화 파이프라인 S6 윤문. 합니다체로 변환된 실행 산출물(4-styled.md)을 사람이 쓴 것처럼 문장 차원에서 다듬어 6-polished.md를 만든다. 내용·숫자·출처·구조는 바꾸지 않는다. "윤문", "polish", "S6", "/kr-polish R15" 요청에 사용. 보통 kr-polisher 서브에이전트 안에서 실행.
argument-hint: "RNN"
---

# S6 윤문

대상 실행: `$ARGUMENTS` (예: R15). 실행 폴더는 `kr-harness/runs/RNN-*/`.

오케스트레이터가 이 스킬을 직접 실행하지 않는다. 실행 하나마다 `kr-polisher` 서브에이전트를 Agent 도구로 하나 띄우고, 프롬프트에 실행 ID만 준다. 여러 실행은 한 메시지에서 병렬로 띄워도 된다(서로 다른 파일만 쓴다).

## 먼저 읽을 것

1. [kr-harness/LESSONS.md](../../../kr-harness/LESSONS.md)
2. [humanize-kr.md](../kr-localize/references/humanize-kr.md) — 문체 규칙, B(합니다체) 기본
3. [STYLE-PROFILES.md](../kr-localize/references/style-corpus/STYLE-PROFILES.md) — B 프로파일과 앵커 특징

## 입출력

- 입력: `kr-harness/runs/<실행폴더>/4-styled.md`
- 출력: `kr-harness/runs/<실행폴더>/6-polished.md` (전체 파일, 구조 유지)
- 이미 6-polished.md가 있으면 사용자가 다시 하라고 했을 때만 덮어쓴다.

## 다듬을 것 (문장 차원만)

- 같은 어미가 세 번 넘게 연속으로 끝나면 깬다. 짧은 명사 종결이나 다른 서술로 리듬을 만든다.
- 50자 초과 문장을 쪼갠다. 한 문장 한 정보.
- 연결어를 다양하게: 이에 따라/다만/한편/특히 중 하나만 반복하지 않는다.
- 번역테 제거: ~에 있어서, 명사 화법(~이 가능합니다 → ~할 수 있습니다), '것' 남발.
- AI腔 제거: 메타서술, 문단 끝 감상, 공회전 강조, 끝 요약.
- 관료 표현 금지: ~하시기 바랍니다, ~하였음, 금번, 상기.

## 절대 불변 (하나라도 바뀌면 실패)

- 비용/쉽게/이득/근거등급/출처/비고 필드의 사실·숫자·통계치(HR/RR/OR/CI/P값)
- DOI·URL·법령명·조문 번호와 그 원문 인용
- 항목 구조(`### N.`), 비용태그 주석 줄, 항목 순서, 항목 수
- `## TODO 확인 필요` 목록 전체
- 쉽게: 칸의 방향·크기 숫자
- 원문에 없는 사실·기전·예시를 덧붙이지 않는다(2026-10-07 구조검사가 잡은 실제 사례: "식물성 오메가-3는 아마씨유·들깨유의 주성분입니다" 추가)

## 끝나면

1. 자체 확인: 항목 수 불변, 필드 6종 전 항목 존재, 숫자·URL이 입력과 같음. 아래 명령이 판정을 낸다.
   ```bash
   node .claude/skills/kr-verify/scripts/verify.mjs RNN
   ```
2. `meta.json`에 `"polished": "claude-kr-polisher"`, `"polished_at": "YYYY-MM-DD"`를 추가한다(다른 키는 보존).
3. 마지막 메시지 3~5줄: 다듬은 문장 수, 쪼갠 긴 문장 수, 검증 판정, 남긴 이슈.

금지: git commit(오케스트레이터가 한다), `book/`·`kr-harness/chapters/`·`book-kr/` 수정, 항목 추가·삭제, 근거등급 변경.
