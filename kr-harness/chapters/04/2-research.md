# 제4절 조사 — 한국 대응 (2-research)

조사일: 2026-10-06. 절 등급이 🟢이라 교체 대상은 ① 시간이용 통계 4건 ② 상담 전화 1건뿐이다.

## 1. 시간이용 통계: 통계청 2024년 생활시간조사

- **1차 출처**: 통계청 (2025). 2024년 생활시간조사 결과(보도자료, 게시일 2025-07-28).
  - 국가데이터처 게시판: https://www.mods.go.kr/board.es?mid=a10301010000&bid=220&act=view&list_no=437764
  - 보도자료 PDF(hwp/pdf 첨부)를 다운로드해 원문에서 수치를 직접 추출함(pypdf).
  - KOSIS 국가통계포털(https://kosis.kr)의 생활시간조사 통계표가 근원. 통계표 직접 열람은 JS 렌더링으로 실패했고, 보도자료 본문 PDF로 대체 확인.
- **조사 개요**: 전국 표본가구 1만 2,750가구 내 10세 이상 약 2만 5,000명. 5년 주기 제6회. 사계절 조사로 개편.

### 확보한 수치 (보도자료 쪽수)

| 지표 | 2024년 | 2019년 | 쪽 | 대상 항목 |
|---|---|---|---|---|
| 가사노동(가정관리+가족돌봄) 하루 평균 | **1시간 52분** | 1시간 56분 | 6, 13 | 제14항 |
| 이동 하루 평균(전 국민) | **1시간 32분** | 1시간 36분 | 6, 13 | 제18항 |
| 이동 하루 평균(취업자) | **1시간 46분** | 1시간 49분 | 29(33쪽 표) | 제18항 |
| 여가 중 미디어 이용 하루 평균 | **2시간 43분** | 2시간 26분 | 9, 13 | 제15항 |
| 미디어 이용 행위자(일요일, 10분 이상) | **93.4%, 행위자 평균 3시간 41분** | 92.0% / 3:33 | 15(22쪽) | 제15항 |
| 동영상 시청 행위자(일요일) | 45.4%, 평균 1시간 55분 | 21.2% / 1:47 | 15 | 제15항 |
| 실시간 방송 시청 평균(평일) | **1시간 30분** | 1시간 34분 | 15 | 제16항 |
| 실시간 방송 시청 평균(일요일) | 2시간 8분 | 2시간 25분 | 15 | 제16항 |
| 실시간 방송 행위자(일요일) | 71.1%, 평균 3시간 1분 | 80.2% / 3:01 | 15 | 제16항 |

- 주의: 생활시간조사의 「미디어 이용」은 책·실시간방송·동영상·인터넷 정보검색 등을 합친 여가 활동이다. 중국 원문의 「인터넷 사용 5:37」과 1:1 대응되지 않는다. 초역에서는 이 한계를 비고에 명시하고, 원문의 중국 수치(인터넷 총량)는 이식하지 않는다.
- 가사노동·이동의 **행위자(참여자) 평균**은 보도자료에 전국 수치로 나오지 않는다(일부 하위그룹만 수록). 초역에서는 전체 평균만 쓴다. 필요 시 KOSIS 통계표에서 보강 → `TODO 확인 필요`.

## 2. 자살예방상담전화 109 (제13항, 원문 12356)

- **1차 출처 1**: 보건복지부 보도자료 「분산된 자살예방 상담전화 1월 1일부터 '109'로 통합 운영」
  https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&act=view&list_no=1479607
- **1차 출처 2**: 보건복지상담센터 자살예방상담전화 페이지 https://www.129.go.kr/109
- 확인 내용: 2024-01-01부터 기존 1393 등 분산 번호를 109로 통합. 24시간 운영. kr-sources.md 치환표(12356→109)와 일치.
- 확인일: 2026-10-06.

## 3. 원문 유지 항목 (조사 불필요)

- 의료·심리 연구 20건: DOI·수치를 원본 그대로 이식 (KR-GUIDE 2번 원칙). 중국 검증기록에서 Crossref/OpenAlex/Semantic Scholar로 확인된 수치들이다.
- 미국 BLS ATUS 2025(제16항): 원문 URL 그대로 유지. 한국 수치를 보강해 병기.

## 4. 조사하되 확인 못 한 것

1. **Rozental(2015) 자조 프로그램의 한국어판 존재 여부** — 국내 출간·프로그램 공개 여부를 1차 출처로 확인하지 못했다. 원문도 「중국어에는 없다」고만 쓰고 있으므로, 초역은 「한국어판 확인 안 됨」으로 표기하고 비고에 남긴다. `TODO 확인 필요`
2. **가사노동·이동의 행위자 평균(전국)** — KOSIS 통계표 직접 열람 필요. `TODO 확인 필요`

## TODO 확인 필요 (3-draft로 넘기는 것)

- [ ] KOSIS 생활시간조사 통계표에서 가사노동·이동 행위자 평균 확인 → 제14·18항 이득 칸 보강
- [ ] 제13항: 미루기 인지행동 자조교재의 한국어판·한국어 RCT 존재 여부

## 5. 교차 참조 앵커 확인 완료 (2026-10-10)

- 공개 제4절 끝의 다음 조사 할 일은 완료되어 이 기록으로 옮겼습니다.
  - 교차 참조 앵커(제2절 제3항(금연은 약부터), 제3절 제1항(알림 끄기), 제3절 제18항(움직이기·햇볕 쬐기·제때 자기·누군가에게 말하기), 제3절 제20항(또래 소식 앱에 제한 걸기)): 해당 절의 한국어 제목이 확정되면 앵커 단어를 그 제목에서 다시 뽑을 것.
- 현행 공개 대상 파일의 제목과 본문을 직접 읽고, 공개 제4절 제10·11·13·15항의 참조와 대조했습니다. 이전 검토의 판정만으로 완료 처리하지 않았습니다.

| 제4절 참조 위치 | 직접 읽은 공개 대상 | 제목·본문 대조 결과 |
|---|---|---|
| 제11항 | `book-kr/02-천천히-죽지-않기.md` 제3항 「금연은 의지로만 버티지 말고 약부터 받으세요. 성공률이 두 배 넘게 오릅니다」 | 약을 이용한 금연 방법을 설명합니다. 「금연은 약부터」와 번호가 맞습니다. |
| 제10항 | `book-kr/03-기력-낭비-줄이기.md` 제1항 「불필요한 알림을 끄고, 일할 때는 휴대전화를 시야 밖에 두세요」 | 알림 끄기와 휴대전화 시야 밖 두기가 모두 있습니다. 「알림 끄기」와 번호가 맞습니다. |
| 제13항 | 같은 파일 제18항 「기분이 가라앉을 때 먼저 할 일: 움직이기, 햇볕 쬐기, 제때 자기, 누군가에게 말하기, 109에 전화하기」 | 네 가지 행동이 제목과 본문에 있습니다. 위급할 때의 109 안내도 있습니다. 앵커와 번호가 맞습니다. |
| 제15항 | 같은 파일 제20항 「"남들은 어떻게 살까"를 매일 확인하지 마세요. 또래 소식을 훑는 앱에 제한을 걸거나 끄세요」 | 또래 소식 앱의 이용 제한, 되찾은 시간과 기분 변화가 있습니다. 「또래 소식 앱에 제한 걸기」와 번호가 맞습니다. |

- 네 참조 모두 `제N절 제M항(앵커어)` 형식입니다. 대상 제목에서 뽑은 앵커가 현행 본문에 맞아 참조 문장은 그대로 뒀습니다.
- 공개 본문에서는 완료된 조사 할 일 한 줄만 지웠습니다. 항목 18개의 제목·수치·DOI·비용태그·근거등급·참조는 변경하지 않았습니다.
- 가사노동·이동의 행위자 평균, 자조 프로그램 한국어판·국내 무작위시험, 인터넷 총 이용시간의 미확인 조사 할 일은 유지했습니다. 제7항 비고의 백분율 미확인 표시도 유지했습니다.

## 2차 조사 반영 기록 (2026-10-20)

agy 기록(kr-harness/research/04.md)의 URL과 수치를 직접 열어 대조했다. 기록의 숫자 상당수가 원문과 달라 그대로 쓰지 않았다.

### T1. 가사노동·이동 행위자 평균시간 (제14·18항) — 반영

- agy 기록과 원문 대조: 「평일 통근 행위자 52.0%, 전국 1시간 17분」은 2024 보도자료 시도별 표에서 전남 행위자 비율(52.0%)과 부산 행위자 평균(1:17)에 해당하는 값이었다. 보도자료에 전국 출퇴근 행위자 평균은 없다. 「성인 가사노동 행위자 76.5%, 2시간 37분」은 2019년 보고서 수치라고 적혀 있으나, 76.5%는 2024 보도자료의 평일 교제·참여 행위자 비율이었다. 연도가 섞였고 원문과 맞지 않아 둘 다 버렸다.
- 대신 2024년 KOSIS 통계표를 브라우저로 직접 열어 확인했다(요일평균, 10세 이상): 행위자비율 가정관리 75.3%, 가족 및 가구원 돌보기 16.7%, 이동 89.4%. 행위자평균시간 가정관리 2:05(남 1:17, 여 2:39), 가족 돌보기 1:47, 이동 1:43. 검산: 75.3%×2:05≈1:34(보도자료 가정관리 평균 1:34), 89.4%×1:43≈1:32(이동 평균 1:32).
- 출퇴근은 2024 보도자료 「출퇴근 시간(평일)」 시도별 표에서 행위자 평균 서울 1:30, 경기 1:31, 인천 1:25를 확인했다.
- 제14항 이득: 「5년 전보다 4분 줄었습니다.」 뒤에 가정관리 75.3%·2시간 5분(남 1시간 17분, 여 2시간 39분), 가족 돌보기 16.7%·1시간 47분, 「두 값은 대상이 달라 더하지 않습니다」를 더했다. 출처에 KOSIS 두 표를 더했다.
- 제18항 이득: 「취업자는 평균 1시간 46분입니다.」 뒤에 이동 행위자 89.4%·1시간 43분, 평일 출퇴근 행위자 평균 서울·경기·인천을 더했다. 출처에 KOSIS 두 표를 더했다.
- 남은 점: 전국 평일 출퇴근 행위자 평균은 보도자료에 없고 KOSIS 주행동 표에도 없다(중분류 미확인). 본문에 쓰지 않았다.
- 확인 URL:
  - https://www.mods.go.kr/board.es?mid=a10301010000&bid=220&act=view&list_no=437764 (첨부 hwpx, seq=8)
  - https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1TS202002 (행위자비율, 자료갱신일 2025-07-28)
  - https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1TS202003 (행위자평균시간)

### T2. Rozental(2015) 한국어판·국내 무작위시험 (제13항) — 부분

- agy의 「한국어 번역판은 전무」「국내 RCT는 2025 UNIST 연구가 유일」은 검색 범위를 넘는 단정이라 쓰지 않았다.
- JMIR mHealth uHealth 2025;13:e53133은 Europe PMC에서 실재를 확인했다(PMID 40208664, DOI 10.2196/53133). 울산과학기술원 저자, 한국 대학생 85명, 챗봇(Moa)을 붙인 할 일 앱 30일 사용, 파일럿 무작위시험. Rozental 교재와는 다른 중재다.
- Kim 등(2020) Cogent Psychology DOI 10.1080/23311908.2020.1809844는 Crossref로 실재만 확인했다. 척도 타당화 연구라 본문에 인용하지 않았다.
- Europe PMC에서 「procrastination AND (Korea OR Korean) AND randomized」(107건)를 훑었고, Rozental 프로그램을 국내에서 시험한 연구는 찾지 못했다.
- 제13항 비고 전: 「같은 프로그램의 한국어판은 찾지 못했습니다(TODO 확인 필요).」 → 후: 「같은 프로그램의 한국어판은 찾지 못했습니다. 이 프로그램을 국내에서 시험한 무작위시험도 찾지 못했습니다(2026-10-20, Europe PMC 검색 기준). 국내에는 다른 방식을 시험한 연구가 있습니다. 대학생 85명이 참여한 소규모 무작위시험입니다. 챗봇을 붙인 할 일 앱을 한 달 써 보게 했습니다(2025).」 출처에 Lee 등(2025) DOI를 더하고 도입부에 kr-doi-add를 달았다.
- 남은 TODO: 한국어 번역서 여부는 국립중앙도서관 서지를 직접 확인하지 못해 유지했다.
- 확인 URL: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.2196/53133 ; https://api.crossref.org/works/10.1080/23311908.2020.1809844

### T3. 한국 인터넷 총 이용시간 통계 (제15항) — 반영

- agy 기록의 출처는 누리집 첫 화면뿐이었다. 원문 보도자료를 각각 찾아 열었다.
- 과기정통부 「2024 인터넷이용실태조사」 보도자료(2025-03-30 보도, 붙임 주요 결과표): 「주 평균 인터넷이용시간 22.1 20.8 20.5」('22·'23·'24년). 20.5시간 확인. agy의 「20대 29.2시간」은 보도자료에 없고 요약보고서 PDF는 글자 추출이 안 돼 확인하지 못했다. 쓰지 않았다.
- 방통위 「2024 방송매체 이용행태조사」 보도자료(2024-12-30, 13세 이상 8,316명): 「스마트폰 이용시간은 2시간 6분으로 전년 대비 6분 증가」, 「스마트폰을 통해 주 5일 이상 이용하는 주요 콘텐츠로는 숏폼(41.8%)」 확인.
- 과기정통부 「2023년 디지털 정보격차·웹 접근성·스마트폰 과의존 실태조사 결과 발표」 보도자료: 「숏폼 이용자 전체 중 23.0%가 이용시간 조절에 어려움을 겪으며 … 청소년(36.7%)이 가장 어려움」 확인. 보도시점이 「2023. 3. 28.(목)」로 적혀 있으나 요일과 맞지 않아 출처에 날짜를 쓰지 않았다.
- 제15항 이득: 「5년 전 21.2%와 비교하면 두 배가 넘습니다.」 뒤에 20.5시간(하루 약 2시간 56분, 20.5÷7 계산), 스마트폰 2시간 6분, 숏폼 41.8%, 숏폼 이용자 23.0%·청소년 36.7%를 조사 연도와 함께 더했다. 쉽게 칸은 고치지 않았다. 출처에 네 개 URL을 더했다. 근거등급 C 유지.
- 확인 URL:
  - https://www.index.go.kr/unity/potal/FileDown.do?seq=15597&id=1346&div=1 (2024 인터넷이용실태조사 보도자료 PDF)
  - https://www.msit.go.kr/bbs/view.do?sCode=user&nttSeqNo=3173673&bbsSeqNo=79&mId=99&mPid=74
  - https://www.kmcc.go.kr/user.do?boardId=1113&page=A05030000&dc=K00000200&boardSeq=64951&mode=view (첨부 hwpx)
  - https://www.msit.go.kr/bbs/view.do?sCode=user&mId=113&mPid=238&bbsSeqNo=94&nttSeqNo=3184252 (첨부 hwpx)

### 자체 확인

- `node .claude/skills/kr-verify/scripts/kr-fit.mjs 04 --check` → block 0 · warn 0 → 통과.
- 본문 해시가 바뀌었으므로 kr-fit-review는 다시 받아야 한다.

## 3차 조사 반영 기록 (2026-10-22)

입력: `kr-harness/research/04-r3.md`(opencode GLM 5.3 Flash). GLM 판정(해결)은 믿지 않고 원문을 다시 열었다.

### T1. 제13항 자조 교재의 한국어 번역서 — 반영

- 시험 계획서(Rozental A, Carlbring P, JMIR Res Protoc 2013;2(2):e46, DOI 10.2196/resprot.2801, PMID 24220277, PMC3841370)를 열어 확인: 「derived from a self-help book for procrastination written by one of the authors (AR)」, 참고문헌 「Dansa på deadline. Stockholm: Natur & Kultur; 2014.」, 「randomized controlled trial (NCT01842945) with a total sample size of 150 participants divided into three groups; treatment with therapist contact …, treatment without therapist contact …, and wait-list control」. 설계(150명, 세 그룹, 10주)가 JCCP 2015 논문과 같다. 서지는 Europe PMC로 확인했다. GLM 기록의 저자 표기 「Rozental A, et al.」은 실제로 두 사람(Rozental·Carlbring)이다.
- LIBRIS(스웨덴 국립서목) JSON 질의 결과: 스웨덴어판(ISBN 9789127136069, 2014; 전자책·2021년판·녹음본)과 덴마크어판 《Dansen på deadline》(ISBN 9788771581263)만 나왔다. 한국어판은 목록에 없다.
- 국립중앙도서관 통합검색을 직접 질의했다(2026-10-22): `Rozental` 43건(Devis-Rozental 논문 등, 해당 책 없음), `알렉산더 로젠탈` 2건(무관), `로젠탈 미루기` 0건, `Dansa på deadline` 0건. KOLIS-NET은 결과가 스크립트로 불려 와 curl로는 건수를 확인하지 못했다. GLM이 적은 KOLIS-NET 「0건」은 재현하지 못해 근거로 쓰지 않았다.
- 2차 기록의 《Overcoming Procrastination》은 본문·이 기록 어디에도 인용돼 있지 않아 고칠 문장이 없었다(grep 확인).
- 본문 변경:
  - 제13항 비고: 「같은 프로그램의 한국어판은 찾지 못했습니다.」 → 「시험 계획서를 보면 교재는 저자 Rozental이 쓴 책 《Dansa på deadline》(2014)입니다. 이 책을 10주 분량으로 나눠 썼습니다. 이 책의 한국어 번역서는 찾지 못했습니다(2026-10-22, 국립중앙도서관 통합검색 기준).」 부재는 단정하지 않고 검색 범위만 적었다.
  - 제13항 출처: 시험 계획서(DOI 10.2196/resprot.2801)를 더했다.
  - `## TODO 확인 필요` 목록의 유일한 줄을 지우고 제목도 지웠다.
- 확인 URL:
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC3841370/
  - https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:PMC3841370&format=json&resultType=core
  - https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25939016&rettype=abstract&retmode=text
  - https://libris.kb.se/xsearch?query=dansa+p%C3%A5+deadline&format=json
  - https://www.nl.go.kr/NL/contents/search.do?kwd=Rozental (및 위 세 검색어)

### 남은 표시

- 제7항 비고의 본문 안 「(TODO 확인 필요)」(Kruger·Evans 연구의 백분율)는 이번 3차 조사 대상이 아니어서 그대로 두었다.

### 자체 확인

- `node .claude/skills/kr-verify/scripts/kr-fit.mjs 04 --check` → block 0 · warn 0 → 통과.
- 본문 해시가 바뀌었으므로 kr-fit-review는 다시 받아야 한다.

### 재검토 warn 수정 (2026-10-22, 오케스트레이터)

- 제7항 인라인 TODO를 절 끝 `## TODO 확인 필요` 목록으로 되살리고 배너에 「TODO 1건」과 게이트 날짜(2026-10-22)를 반영(검토 수정안 ①).
- 제13항: 교재 저자를 Rozental·Wennersten 두 명으로 고침. https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3841370/fullTextXML

## 5차 조사 반영 기록 (2026-10-23, 원문 직접 확인)

### 제7항 Kruger·Evans(2004) 실험별 수치 — 유지

전문을 합법적 공개 경로에서 구하지 못했다. 본문은 고치지 않았고 TODO 1건을 그대로 둔다.

시도한 경로(2026-10-23):

- Unpaywall API `https://api.unpaywall.org/v2/10.1016/j.jesp.2003.11.001` → `is_oa: false`, `oa_status: closed`, `has_repository_copy: false`, `oa_locations: []`. 저자 소속은 University of Illinois at Urbana-Champaign 심리학과로 나온다.
- Semantic Scholar API `https://api.semanticscholar.org/graph/v1/paper/DOI:10.1016/j.jesp.2003.11.001?fields=title,openAccessPdf,externalIds` → `openAccessPdf.status: CLOSED`, URL 없음.
- OpenAlex `https://api.openalex.org/works/doi:10.1016/j.jesp.2003.11.001` → `is_oa: false`, `oa_url: null`, `pdf_url: null`.
- Europe PMC REST 검색 `DOI:10.1016/j.jesp.2003.11.001` → hitCount 0(심리학 학술지라 수록 안 됨).
- CORE API v3 제목 검색 → 이 논문의 전문 사본은 결과에 없었다.
- 저자 기관 페이지: `https://pages.stern.nyu.edu/~jkruger/`는 현재 403. 웹 아카이브 2006·2008·2011년 사본에는 CV와 강의계획서 링크만 있고 논문 PDF 링크는 없었다. 일리노이대 개인 페이지(`psych.uiuc.edu/~jkruger/`)는 아카이브 사본을 찾지 못했다.
- 웹 검색(「If you don't want to be late, enumerate」 pdf, 「Unpacking reduces the planning fallacy」 filetype:pdf) → 원 논문 PDF는 없었다. 이 논문을 인용한 Bournemouth 대학 프리프린트(https://eprints.bournemouth.ac.uk/21338/)는 다른 저자의 2차 서술이라 수치 근거로 쓰지 않았다.
- 유료 벽을 우회하는 사이트는 쓰지 않았다.

### 자체 확인

- 본문 변경 없음.

## 30차 조사 반영 기록 (2026-10-23)

### 제7항 Kruger·Evans(2004) 수치 — 유지

공개 전문도, 수치를 옮긴 1차 논문도 찾지 못했다.
본문은 그대로 두고 TODO 1건을 유지한다.

전문 경로(2026-10-23):

- OpenAlex `works/doi:10.1016/j.jesp.2003.11.001`: 초록 없음.
- 같은 응답의 피인용 수는 191건이다.
- 웹 아카이브 CDX `pages.stern.nyu.edu/~jkruger/*`를 다시 봤다.
- 2006년 첫 화면, 강의계획서 PDF, 그림 파일뿐이었다.
- 논문 PDF 사본은 없었다.
- `psych.uiuc.edu`, `psych.illinois.edu`의 `~jkruger/`도 조회했다.
- 두 곳 모두 아카이브 사본이 0건이었다.
- ResearchGate 논문 페이지는 403으로 막혔다.
- CORE API v3 검색은 오류를 돌려줬다.
- 응답: `The HTTP status code "0" is not valid.`

2차 인용 경로(이 논문을 인용한 공개 논문):

- OpenAlex `filter=cites:W2094856403,is_oa:true`로 92건을 뽑았다.
- 과제 시간 예측을 다룬 논문 10여 편을 내려받아 읽었다.
- 결과 수치를 옮긴 논문은 없었다.
- 모두 「풀어 적으면 예상이 길어졌다」는 방향만 적었다.

읽은 논문과 해당 문장:

- Hadjichristidis 등(2014), JESP 51:45–50.
- DOI 10.1016/j.jesp.2013.10.009.
- 사본: http://eprints.bournemouth.ac.uk/21338/
- 원문: "Overall, duration estimates were higher in the unpacked condition."
- Forsyth·Burt(2008), Memory & Cognition 36(4).
- DOI 10.3758/MC.36.4.791.
- 원문: "Kruger and Evans showed that unpacking produced larger estimates, and, in two experiments, fewer planning fallacy bias estimates."
- 이 논문은 「두 실험」이라고만 적었다.
- 실험 번호와 크기는 적지 않았다.
- Halkjelsvik·Jørgensen(2018), Time Predictions(Springer, 공개).
- DOI 10.1007/978-3-319-74953-2.
- 7.1절의 「8분 반 → 약 13분」 예시가 있었다.
- 이 예시의 인용 번호는 [4]다.
- [4]는 Hadjichristidis 등(2014)이다.
- Kruger·Evans([5])의 수치가 아니어서 쓰지 않았다.
- [5]에는 "contributes to greater realism"이라는 말만 붙었다.
- 「Backward planning」(2016, JDM)을 읽었다.
- DOI는 10.1017/S1930297500007269다.
- 원문: "Kruger and Evans found that unpacking reduced prediction bias"
- 수치는 없었다.
- Weick·Guinote(2010)은 DOI 10.1016/j.jesp.2010.03.005다.
- Kruger·Evans의 문서 서식 과제를 빌려 썼다는 말뿐이었다.
- PMC5976789(Frontiers, 2018)는 선물 쇼핑 과제를 예로만 들었다.
- PMC6621925, PMC8193572, PMC13038220도 방향만 적었다.
- Huang(2021), IJPS 13(2)도 방향만 적었다.
- 이 논문은 고등학생 단독 연구여서 근거로도 쓰지 않는다.

쓰지 않은 것:

- Moher(2012) 워털루대 학위논문은 동료심사 논문이 아니다.
- 그래서 열어 보지 않았다.
- 블로그의 수치 서술도 쓰지 않았다.

### 자체 확인

- 본문 변경 없음.
- 남은 TODO: 1건(제7항).

## 38차 조사 반영 기록 (2026-10-25)

입력: `kr-harness/research/04-r38oc.md`(opencode). TODO 1건(제7항) — **부분**.

- 직접 확인: Hadjichristidis·Summers·Thomas(2014) JESP 51:45–50, DOI 10.1016/j.jesp.2013.10.009. 공개 사전인쇄본 https://eprints.bournemouth.ac.uk/21338/4/Unpacking_estimates_of_task_duration_(JESP_paper)_-pre-print_version.pdf 를 내려받아 텍스트로 대조했다.
  - Table 1(p.21, -raw 추출): Unpacked Short 51명 6.24(4.57), Packed 50명 8.48(6.26), Unpacked Long 51명 12.73(8.65).
  - p.7: 「There was a main effect of Condition: F(2,148) = 9.35, p < .001 … significant differences between the unpacked-short and packed conditions (p = .019) and between the unpacked-short and unpacked-long conditions (p < .001).」 packed와 unpacked-long 사이는 유의 차이로 보고되지 않았다. 기록에는 이 단서가 빠져 있어 본문에 넣었다.
  - 과제는 서식 변경 시간을 상상해 추정하는 것(p.6, 「they had to imagine opened as an MS Word document」)이고 실제 소요시간은 재지 않았다. 초록: 「Unpacking typical early or late components leaves estimates unaffected (Study 3).」
- 본문 변경(제7항):
  - 비고: 「요약에서 결과 방향만 확인… 백분율은 싣지 않았습니다(TODO)」 → 원 논문 백분율 미확인(TODO) + 재현 연구 Study 1 수치·유의 단서·Study 3 무효과·실제 시간 미측정.
  - 출처: Hadjichristidis 등(2014) DOI와 공개 사전인쇄본 랜딩 추가.
  - TODO: 「구체적 백분율」 → 「K&E 실험별 증가 폭, 공개 합법 사본을 찾지 못함(2026-10-24·25), 재현 연구로 대신 채움」으로 좁힘.
- 반영하지 않은 것: 계산 백분율(+50.1% 등)은 원문에 없는 계산치라 쓰지 않았다. Study 2 수치, OpenAlex 인용 구조(메타분석 0편)는 본문에 넣지 않았다. K&E 실험 구성 정정은 본문에 해당 서술이 없어 반영할 곳이 없다.
- 자체 확인: `kr-fit.mjs 04 --check` → block 0 · warn 0 · 통과. 남은 TODO 1건(제7항).


## 41차 조사 반영 기록 (2026-10-25)

입력: `kr-harness/research/04-r41agy.md`(agy Gemini Flash). TODO 1건(제7항) — **유지**. 본문은 고치지 않았다.

- 기록의 판정은 「부분 해결」이고, 제안은 TODO를 지워 종결하자는 것이다. 새 1차 출처나 새 수치는 없다. K&E(2004) 원 논문의 실험별 수치는 여전히 원문에서 확인하지 못했으므로 TODO를 닫지 않았다. 재현 연구로 「대신 채운」 상태는 38차에 이미 TODO 줄에 적혀 있다.
- 직접 대조한 것:
  - Hadjichristidis 등(2014) 사전인쇄본(38차에 내려받은 `$TEMP/kr04r38/h.txt`, https://eprints.bournemouth.ac.uk/21338/) 70–75행: 「Kruger and Evans asked participants to predict how many days they would take to complete their Christmas shopping either directly (packed condition) or after listing the people they planned to buy gifts for (unpacked condition). Overall, duration estimates were higher in the unpacked condition.」 기록의 인용과 같다. 수치는 없다.
  - 중국어 원본 검증 기록 docs/核实记录/04-不要浪费时间.md 60행: 「具体实验百分比**未确认**，条目未写数字。」 기록의 인용과 같다(강조 표시만 다름).
  - K&E 출판사 초록 문장(「Participants prompted to unpack … less biased …」): Crossref(api.crossref.org/works/10.1016/j.jesp.2003.11.001)에 초록이 없고, Europe PMC는 0건, OpenAlex는 초록 색인이 없었다(2026-10-25). 원문에서 같은 문장을 찾지 못해 쓰지 않는다. 본문에도 이 문장은 없다.
- 반영하지 않은 것: 「후속 문헌 전수 대조」(Forsyth & Burt 2008 등)는 기록에 URL·인용문이 없어 확인할 수 없다. 「유일한 공개 재현 연구」「합법적 공개 경로가 전무」는 부재·유일 단정이라 쓰지 않는다.
- 자체 확인: `kr-fit.mjs 04 --check` → block 0 · warn 0 · 통과. 남은 TODO 1건(제7항).
