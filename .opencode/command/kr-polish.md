---
description: 윤문 단계(S6). 변환기 산출본을 astra 문체로 다듬는다. 예: /kr-polish R11, /kr-polish 14 (절 번호는 그 절의 최신 B 런을 자동 선택)
agent: kr-polisher
---

윤문 대상: $ARGUMENTS

- R실행 ID(`R11` 등)면 `kr-harness/runs/<ID>/4-styled.md`
- 절 번호(`14` 등)면 `kr-harness/runs/`에서 그 절의 style B 실행을 골라 최신 4-styled.md(6-polished.md가 이미 있으면 그것을 다시 다듬지 말고 건너뛰기)

에이전트 규칙(.opencode/agent/kr-polisher.md)을 따라 `6-polished.md`로 출력하고 meta.json을 갱신하세요. 여러 개를 지정하면 순서대로 처리하세요.
