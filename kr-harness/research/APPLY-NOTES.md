## 2차 조사 반영 에이전트 지시 (오케스트레이터)

너는 agy가 쓴 TODO 딥리서치 기록 `kr-harness/research/NN.md`를 한국어판 본문 `book-kr/NN-*.md`에 반영하는 에이전트다.

1. 먼저 읽는다: KR-GUIDE.md(항목 형식·참조 표기·체크리스트), `.claude/skills/kr-localize/references/humanize-kr.md`(합니다체, 짧은 문장), `kr-harness/research/NN.md`, 대상 본문.
2. **agy 기록을 그대로 믿지 않는다.** 반영할 사실마다 기록에 적힌 URL을 직접 열어(WebFetch 우선, law.go.kr은 `curl -sS --retry 5 --retry-all-errors --retry-delay 2 -m 30`, `LSW/lsInfoP.do`·DRF 공개 API `https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=<번호>&type=XML`) 원문 문장과 숫자가 맞는지 확인한다.
   - 판정이 「상충」「부분 해결」이거나, 다시 열어 보니 기록과 원문이 다르면: 기록에 적힌 링크와 그 상위·최신 출처(법령 원문, 기관 공지 최신판)를 열어 보완한다. 그래도 정할 수 없으면 본문에 단정하지 않고 TODO를 남기되, 무엇이 왜 엇갈리는지 한 줄로 고쳐 쓴다.
   - 1차 출처가 아닌 것(블로그, 언론 2차 전달, 나무위키, 광고)은 근거로 쓰지 않는다.
3. 반영 방법:
   - 확인된 사실은 해당 항목의 알맞은 칸(비용/쉽게/이득/근거등급/출처/비고)에 넣는다. 「쉽게」 칸에는 이득 칸에 없는 숫자·사실을 새로 넣지 않는다. 출처 칸에 URL을 더한다.
   - 해결된 TODO 줄은 `## TODO 확인 필요` 목록에서 지운다. 부분 해결이면 남은 쟁점만 남기게 줄을 고쳐 쓴다. 목록이 비면 `## TODO 확인 필요` 제목도 지운다.
   - 지키는 것: 항목 구조(`### N.` 제목, 비용태그 주석 줄 글자 그대로, 여섯 칸이 순서대로 한 번씩), 근거등급(더 나은 1차 근거가 있을 때만 바꾸고 이유를 비고에), DOI·PubMed 링크, 도입부 HTML 주석(kr-omit·kr-add·kr-doi-*). 문장은 합니다체, 50자 안팎, AI 투 금지.
   - 확인 못 한 숫자·조문은 쓰지 않는다.
4. 기록: `kr-harness/chapters/NN/2-research.md` 끝에 `## 2차 조사 반영 기록 (YYYY-MM-DD)` 절을 붙인다. TODO마다 「반영/부분/유지」, 바뀐 문장 전→후 요약, 직접 확인한 URL을 적는다.
5. 자체 확인(반드시 돌린다): `node .claude/skills/kr-verify/scripts/kr-fit.mjs NN --check` → block 0.
6. 금지: 대상 본문, 그 절 2-research.md 밖의 파일 수정. `kr-harness/research/NN.md`, kr-fit-review.md는 고치지 않는다. git 상태를 바꾸는 명령 금지. tools/·sync-stats·check-refs 실행 금지.
7. 보고는 짧게: TODO별 반영/부분/유지 개수, 남긴 TODO와 이유, 상충을 어떻게 판단했는지, kr-fit 결과 줄.

### agy(Gemini Flash) 기록에서 자주 나오는 문제 (2026-10-20 제4절에서 확인)

- 출처가 누리집 첫 화면 주소(https://www.msit.go.kr, https://kosis.kr 등)뿐인 경우가 있다. 실제 보고서·보도자료·통계표·조문 페이지를 찾아 열고 그 구체적인 URL을 적는다. 원문에서 숫자를 직접 확인하지 못하면 반영하지 않는다.
- 「전무하다」「유일하다」「없다」 같은 부재·유일 단정은 그대로 쓰지 않는다. 「찾지 못했습니다(검색한 곳, 날짜)」처럼 확인한 범위만 쓴다.
- 거론된 논문은 DOI·PubMed로 실재와 서지사항을 확인한 뒤에만 인용한다.
- 서로 다른 연도의 통계를 섞지 않고 연도를 밝힌다. 「해결」 판정도 다시 열어 보면 틀린 경우가 있으니 판정을 믿지 말고 원문을 본다.
