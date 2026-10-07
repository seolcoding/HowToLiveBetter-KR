---
name: kr-verify
description: 한국 현지화 파이프라인 S5 검증과 비교 보고서 생성. 실행(RNN)의 최신 산출물을 원문과 대조해 통과/조건부 통과/반려를 판정하고 kr-harness/report.html을 다시 만든다. "검증", "verify", "보고서 갱신", "S5" 요청에 사용. LLM을 쓰지 않는다.
---

# S5 검증 + 보고서 (결정론)

```bash
node .claude/skills/kr-verify/scripts/verify.mjs            # runs/ 전체 검증, 5-verify.md·meta.json 갱신
node .claude/skills/kr-verify/scripts/verify.mjs R15        # 한 실행만
node .claude/skills/kr-verify/scripts/verify.mjs --check    # 파일을 쓰지 않음, 반려가 있으면 종료코드 1 (CI)
node .claude/skills/kr-verify/scripts/report.mjs            # kr-harness/report.html 재생성
```

검증 대상 파일은 실행 폴더에서 `7-refined.md > 6-polished.md > 4-styled.md` 순으로 가장 앞선 것이다.

## 검사 항목

1. 항목 수가 원문 `book/NN-*.md`와 같은지
2. 필드 6종(비용/쉽게/이득/근거등급/출처/비고)과 비용태그 줄이 모든 항목에 있는지
3. DOI 집합이 원문과 같은지(누락·추가 모두 반려)
4. 중국 잔재: 필드 줄의 한자(「」 인용·링크·`.md` 경로 제외), 중국 전용 전화번호
5. 50자 초과 문장(조건부 통과 사유)
6. `## TODO` 건수 집계

판정: 이슈 1~4가 있으면 **반려**, 50자 초과만 있으면 **조건부 통과**, 없으면 **통과**.

## 기계 검사가 못 잡는 것

전화번호 치환의 정확성, 법령 조문 원문 열람 여부, 번역테·AI腔은 사람이나 서브에이전트가 본다. KR-GUIDE.md 체크리스트를 따른다. 오탐 사례(걸음 수 10000, `.md` 경로의 한자)는 이미 제외돼 있다([LESSONS.md](../../../kr-harness/LESSONS.md) L5).

## 보고서

사용자 컨펌은 대화가 아니라 `kr-harness/report.html`에서 받는다(L9). 실행을 추가하거나 단계를 끝낼 때마다 다시 만든다.
