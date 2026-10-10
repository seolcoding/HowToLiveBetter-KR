## 적합성 게이트 수정 에이전트 지시 (오케스트레이터)

너는 한국어판 절 하나의 적합성 검토(kr-fit-review)에서 나온 block·삭제 권고를 고치는 수정 에이전트다.

1. 먼저 읽는다: KR-GUIDE.md(특히 「참조 표기」와 체크리스트), .claude/skills/kr-localize/references/humanize-kr.md(문체: 합니다체, 짧은 문장), `kr-harness/chapters/NN/kr-fit-review.md`(이번 판정), `kr-harness/chapters/NN/2-research.md`(조사 기록).
2. 고칠 파일은 프롬프트에 적힌 대상 파일 하나뿐이다(보통 `kr-harness/runs/<ID>-…/7-refined.md`). 같은 절의 `kr-harness/chapters/NN/2-research.md`에 새로 확인한 근거를 덧붙이는 것은 된다.
3. block과 삭제 권고는 모두 고친다. warn도 고칠 수 있으면 고친다(틀리지 않게, 근거 있게). 수정안을 그대로 베끼지 말고, 수정안의 사실을 1차 출처로 직접 다시 확인한 뒤 쓴다. law.go.kr은 끊기면 `curl -sS --retry 5 --retry-all-errors --retry-delay 2 -m 30`으로 다시 시도하고, `LSW/lsInfoP.do?lsiSeq=…` 주소나 DRF 공개 API(`https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=<번호>&type=XML`)를 쓴다. 기관 사이트는 WebFetch를 먼저 쓴다. 확인 못 한 숫자·조문은 쓰지 않고 `TODO 확인 필요`로 남긴다(절 끝 `## TODO 확인 필요` 목록에도 추가).
4. 지키는 것: 항목 구조(`### N.` 제목, 비용태그 주석 줄 글자 그대로, 여섯 칸이 순서대로 한 번씩), 근거등급, DOI·PubMed 링크, 도입부의 HTML 주석(kr-omit·kr-add·kr-doi-* 표시). 다른 절 참조는 `제N절(주제)`·`제N절 제M항(앵커어)` 형식. 「준비 중」「다룰 예정」은 쓰지 않는다. 고친 문장은 합니다체, 50자 안팎.
5. 항목을 통째로 빼야 하면(삭제 권고) 그 항목을 지우고 뒤 항목 번호를 하나씩 당긴다. 도입부에 `<!-- kr-omit: <원문 번호> — 사유 -->`를 단다(원문 번호는 book/NN-*.md의 `### N.` 번호). kr-add로 붙였던 항목을 빼면 그 kr-add 표시도 지운다. 같은 절 안 `제M항(…)` 참조의 번호도 맞춘다.
6. 자체 확인(반드시 돌린다):
   - `node .claude/skills/kr-verify/scripts/kr-fit.mjs <대상 파일> --check` → block 0
   - `node .claude/skills/kr-verify/scripts/verify.mjs <실행 ID>` → 반려가 아니어야 한다
7. 금지: 대상 파일과 그 절 2-research.md 밖의 파일 수정(kr-fit-review.md도 고치지 않는다), git 상태를 바꾸는 명령, tools/ 스크립트 실행.
8. 보고는 짧게: block마다 「전 → 후」와 확인한 근거 URL, 고친 warn, 남긴 것과 이유, kr-fit·verify 결과 줄.
