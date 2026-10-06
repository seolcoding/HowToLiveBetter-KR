---
description: S6 윤문 — astra(codex)로 문장을 다듬는다. 예: /kr-polish R11, /kr-polish R09 R13
---

윤문 대상: $ARGUMENTS

다음을 실행하세요:

```
node kr-harness/polish-codex.mjs $ARGUMENTS
```

완료 후 `node kr-harness/verify.mjs && node kr-harness/report/build.mjs`를 돌리고 결과를 보고하세요. 규칙은 `kr-harness/polish-codex.mjs` 프롬프트와 `kr-harness/LESSONS.md` 참고.
