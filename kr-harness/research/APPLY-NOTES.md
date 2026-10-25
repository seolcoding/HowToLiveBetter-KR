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
- 원문 PDF·hwpx 등을 내려받을 때는 저장소 밖 임시 폴더(예: `$TEMP`)에 둔다. 저장소 루트에 파일을 남기지 않는다(2026-10-20 제1·7절에서 pdf·bin·zip 10개가 루트에 남았다).
- 전화번호가 허용 목록에 없으면 본문에 넣지 말고, 확인한 공식 URL과 원문 문장을 보고에 적는다. 오케스트레이터가 직접 확인해 허용 목록에 넣는다.

### 공통 금지 (2026-10-22 추가)

- `python -`나 heredoc처럼 표준입력을 기다리는 명령을 쓰지 않는다.
- 프로세스를 이름으로 강제 종료하지 않는다(`taskkill /IM python.exe` 등). 이 PC에서는 다른 세션의 작업이 같이 돈다. 멈춘 명령은 자기 PID만 끈다.

### 한글이 깨지는 PDF 텍스트 추출 (2026-10-23 추가)

- pdftotext로 한글이 빠지는 정부 PDF(사업안내 등)는 글꼴표(CMap)가 없어서다. pdfjs-dist에 CMap을 지정하면 전 쪽 텍스트가 나온다. 저장소 밖 임시 폴더에서 `npm i pdfjs-dist` 후 `getDocument({data, cMapUrl: 'node_modules/pdfjs-dist/cmaps/', cMapPacked: true, standardFontDataUrl: 'node_modules/pdfjs-dist/standard_fonts/'})`로 쪽마다 `getTextContent()`를 이어 붙인다. 쪽 이미지(pdftoppm)는 표·흐름도처럼 배치가 중요한 쪽만 본다.
- 국세법령정보시스템 검색은 화면 대신 `POST https://taxlaw.nts.go.kr/action.do`(actionId `ASEISA001MR01`)로 정확 구문 검색을 할 수 있다.

### 한글 검색어는 curl에 직접 넣지 않는다 (2026-10-23 추가)

- Git Bash의 curl에 한글 검색어를 URL에 그대로 넣으면 글자가 깨진 채 전송되는 경우가 있다(law.go.kr DRF에서 「패러디」가 `�з���` 0건, node로 UTF-8 인코딩하니 13건). 한글 검색어는 node의 `encodeURIComponent`로 인코딩해 node(fetch)로 보낸다. Git Bash의 `curl --data-urlencode`도 한글이 깨진 사례가 있다(2026-10-23 한국저작권위원회 「팬아트」 0건 → node 2건).
- 그래서 3·4차 기록의 「검색 0건」은 인코딩을 확인하지 않았으면 「없음」의 근거로 쓰지 않는다. 본문에 「찾지 못했습니다」를 쓸 때는 인코딩을 확인한 검색만 근거로 삼는다.

## 판례: 대법원 사법정보공개포털 (2026-10-23 31차에 확인)

- glaw.scourt.go.kr(종합법률정보)는 DNS가 풀리지 않는다. 후속인 portal.scourt.go.kr(사법정보공개포털)은 열린다.
- 화면 정의 `https://portal.scourt.go.kr/pgp/ui/pgp1000/PGP1011M01.xml`에서 조회 API를 찾는다. 목록 `/pgp/pgp1011/selectJdcpctSrchRsltLst.on`, 본문 `/pgp/pgp1011/selectJdcpctCtxt.on`. 하급심 판결 본문과 「판결 : 확정」 같은 확정 표시가 함께 나온다. 스크립트 예: `$TEMP/kr06r31tool`.
- 대법원 「전국법원 주요판결」(scourt.go.kr dcboard gubun=44)은 검색어를 EUC-KR로 퍼센트 인코딩해 GET으로 보내야 한다. 제목(요지)만 검색된다.
- 목록 응답의 전체 건수는 `data.totalCount`에 있다(`data.dma_searchParam.totalCount`는 늘 0). 사건번호 상세검색은 `csNoLstCtt`. 공개된 판결만 실리므로 「이 포털에서 찾지 못함」으로 적는다.

## 사법정책연구원 보고서 전문 (2026-10-25 38차에 확인)

- KISS(kiss.kstudy.com)의 「₩ 0」 무료 표시 보고서도 내려받기는 로그인을 요구한다. 같은 보고서가 사법정책연구원 누리집(jpri.scourt.go.kr) 통합검색에 있으면 `https://jpri.scourt.go.kr/fileDownLoad.do?seq=<번호>`로 로그인 없이 받힌다(25절 연구총서 2020-19는 seq=2033, 33절 2017-05는 seq=1898).
- 「미리보기 2쪽뿐」이라는 기록은 jpri에서 전문을 다시 찾아본 뒤에만 「확인 못 함」의 근거로 쓴다.

### agy Flash가 지어낸 판례 (2026-10-25 40차에 확인)

- 10절 40차 기록이 「해결」 근거로 든 「서울고등법원 2024. 11. 13. 선고 2024나2012451 판결(대법원 상고기각 확정)」은 사법정보공개포털(키워드·사건번호 상세검색)과 law.go.kr DRF 어디에서도 0건이었다. 같은 경로로 다른 사건번호는 정상 검색됐다. 출처가 포털 첫 화면 주소뿐인 판례는 사건번호로 직접 찾아 실재를 확인하기 전에는 절대 쓰지 않는다.
- 40차 전체로 보면 Flash 기록의 「해결」 판정은 원문 대조에서 한 건도 유지되지 않았다. Flash 기록은 판정 대신 「원문 URL 후보 목록」으로만 쓰고, 인용문은 반영 에이전트가 원문에서 같은 문장을 찾은 것만 쓴다.
