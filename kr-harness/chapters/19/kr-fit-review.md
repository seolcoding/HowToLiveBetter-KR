# 제19절 한국 실정 적합성 검토
검토일: 2026-10-22 · 검토 대상: book-kr/19-재직-퇴사-산재.md (항목 18개, 미해결 TODO 0개) · 3차 조사 반영 후 재검토

## 범위와 방법

- 직전 리뷰(sha256=28cfabfc…21f20b)의 판정은 pass, warn 3건(19-2·19-3·19-7 판례 개별 링크 없음)이었다.
- 이번 변경은 kr-harness/chapters/19/2-research.md 끝 「3차 조사 반영 기록 (2026-10-22)」에 적혀 있다. `git diff --word-diff`로 본문 변경 범위를 확인했다. 바뀐 곳은 다음뿐이다.
  - 배너 「TODO 2건」 → 「TODO 0건」
  - 도입부 주석 `kr-doi-add: 10.31083/j.fbl2805096` 추가
  - 제2·3·7항 출처 칸에 사법정보공개포털 링크 병기(DRF 링크는 유지)
  - 제10항 이득 칸에 규폐 잠복기 6문장 추가, 출처 칸에 NIOSH/CDC 페이지와 Handra 2023 추가
  - `## TODO 확인 필요` 절 삭제
- 나머지 항목은 직전 판정을 이어받는다.
- 시작·종료 `kr-fit.mjs 19 --hash` 값은 b6b4064f…976eff로 같다. `kr-fit.mjs 19 --check` 결과는 block 0 · warn 0(통과)이다. 본문에 남은 「TODO」 문자열은 배너의 「TODO 0건」과 2차 조사 주석 안의 「TODO 7」뿐이며 미해결 표시가 아니다.

## 이번에 직접 연 출처 (2026-10-22)

- NIOSH/CDC 「Symptoms and Medical Monitoring | Silica」 https://www.cdc.gov/niosh/silica/symptoms/index.html (WebFetch, 페이지 날짜 2026-07-07)
  - 「The time from initial exposure to when symptoms first appear (the latency period)」은 노출 기간·강도에 따른다.
  - 「Higher exposures result in shorter latency periods and faster disease development.」
  - 「This can occur after a few weeks or months of exposure to very high levels of RCS.」(급성)
  - 「Accelerated silicosis occurs after high levels of exposure and typically occurs after 5 to 10 years.」
  - 「Chronic silicosis is the most common type.」「It occurs after 10 or more years of exposure to lower levels of RCS.」
  - 노출 중단 뒤 진행을 직접 말하는 문장은 없다. 본문도 그 내용을 CDC가 아니라 Lancet 총설에 기대고 있어 문제없다.
- Handra 2023 초록, NCBI efetch https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=37258484&rettype=abstract&retmode=text
  - 「Front Biosci (Landmark Ed). 2023 May 22;28(5):96. doi: 10.31083/j.fbl2805096.」 저자 Handra CM, Gurzu IL, Chirila M, Ghita I. 제목 「Silicosis: New Challenges from an Old Inflammatory and Fibrotic Disease.」
  - 「The latency period for silicosis ranges from a few years to several decades, depending on the duration and intensity of exposure to silica dust.」
- DOI 실재 확인: https://doi.org/10.31083/j.fbl2805096 → 302, https://www.imrpress.com/journal/FBL/28/5/10.31083/j.fbl2805096 로 이동. Crossref API(https://api.crossref.org/works/10.31083/j.fbl2805096)에서 발행처 IMR Press, 같은 초록 확인.
- 사법정보공개포털 판례 본문 API `https://portal.scourt.go.kr/pgp/pgp1011/selectJdcpctCtxt.on`(읽기 조회. 첫 요청은 웹방화벽에 막혔고, 상세 화면을 먼저 열어 세션을 받은 뒤 다시 조회)
  - jisCntntsSrno=3271737 → 「대법원 2021. 10. 14. 선고 2021다227100 판결」
  - jisCntntsSrno=2192309 → 「대법원 2015. 11. 27. 선고 2015두48136 판결」
  - jisCntntsSrno=2226493 → 「대법원 2017. 2. 3. 선고 2016다255910 판결」
  - 상세 주소 https://portal.scourt.go.kr/pgp/main.on?w2xPath=PGP1011M04&jisCntntsSrno=3271737 은 HTTP 200이다.

## 항목별 판정

### 19-1. 연장·야간·휴일근로 가산임금
- 판정: 적합. 변경 없음.

### 19-2. 연차휴가와 미사용 수당
- 판정: 적합. 직전 warn은 해소됐다.
- 확인: 출처 칸에 「(사법정보공개포털 https://portal.scourt.go.kr/pgp/main.on?w2xPath=PGP1011M04&jisCntntsSrno=3271737)」이 붙었다. 이 번호의 본문 제목이 「대법원 2021. 10. 14. 선고 2021다227100 판결」로 본문의 사건번호·선고일과 같다. KR-GUIDE의 판례 링크 규칙을 충족한다.

### 19-3. 수습 최저임금 감액
- 판정: 적합. 직전 warn은 해소됐다. jisCntntsSrno=2192309가 「대법원 2015. 11. 27. 선고 2015두48136 판결」로 본문과 같다.

### 19-4. 퇴직금
- 판정: 적합. 변경 없음.

### 19-5. 해고예고
- 판정: 적합. 변경 없음.

### 19-6. 부당해고 구제신청
- 판정: 적합. 변경 없음.

### 19-7. 사직서 서명
- 판정: 적합. 직전 warn은 해소됐다. jisCntntsSrno=2226493이 「대법원 2017. 2. 3. 선고 2016다255910 판결」로 본문과 같다.

### 19-8. 퇴사 전 자료 저장
- 판정: 적합. 변경 없음.

### 19-9. 위험 교육·특수건강진단
- 판정: 적합. 변경 없음.

### 19-10. 보호구·작업중지
- 판정: 적합.
- 확인(새 6문장):
  - 「규폐가 생기기까지 걸리는 기간은 노출 기간과 강도에 따라 다릅니다.」 → CDC의 「depends on duration and intensity of exposure」, Handra의 「depending on the duration and intensity of exposure」와 맞는다.
  - 「가장 흔한 만성 규폐는 낮은 농도에 10년 이상 노출된 뒤 생깁니다.」 → 「most common type」「10 or more years of exposure to lower levels」와 맞는다. 농도 조건 「낮은」이 남아 있다.
  - 「높은 농도에 노출되면 보통 5~10년 뒤에 생깁니다(가속형).」 → 「high levels of exposure」「typically occurs after 5 to 10 years」와 맞는다. 「보통」(typically)도 살아 있다.
  - 「아주 높은 농도면 몇 주나 몇 달 만에도 생깁니다(급성).」 → 「a few weeks or months of exposure to very high levels」와 맞는다.
  - 「규폐 총설 논문은 이 기간을 몇 년에서 수십 년으로 적었습니다.」 → Handra 초록 「from a few years to several decades」와 맞는다. CDC의 급성(몇 주~몇 달)과 범위가 다르지만, 출처를 나눠 적어서 섞이지 않는다.
  - 낮은·높은·아주 높은 세 농도 조건이 모두 빠지지 않았다.
- 쉽게 칸과의 관계: 쉽게 칸은 바뀌지 않았고 잠복기 숫자를 하나도 쓰지 않는다. 이득 칸에 없는 숫자나 주장이 쉽게 칸에 새로 생긴 것이 없어 어긋나지 않는다. 쉽게 칸에 잠복기를 안 넣은 것은 생략이지 오류가 아니다.
- 참고(판정에 반영하지 않음): CDC의 latency는 「증상이 처음 나타날 때까지」의 기간이다. 본문은 「생기기까지」「생깁니다」라고 썼지만 CDC 페이지 자체도 「occurs after」로 적으므로 틀린 표현은 아니다. 미국 기관 자료이지만 질병의 자연경과에 관한 의학 근거라 국적과 상관없이 쓸 수 있다. 한국 산재 인정 기준처럼 말하지도 않는다.
- 근거: 위 「이번에 직접 연 출처」의 CDC·NCBI·doi.org·Crossref 인용.

### 19-11. 산재 직접 신청
- 판정: 적합. 변경 없음(직전 검토에서 1588-0075 문의 창구 표현을 확인했다).

### 19-12. 「회사에서 쓰러져야 산재」 오해
- 판정: 적합. 변경 없음.

### 19-13. 미신고 회사의 산재 급여
- 판정: 적합. 변경 없음.

### 19-14. 장해등급과 장해급여
- 판정: 적합. 변경 없음.

### 19-15. 유족급여·장례비
- 판정: 적합. 변경 없음.

### 19-16. 직장 내 괴롭힘
- 판정: 적합. 변경 없음.

### 19-17. 사용증명서
- 판정: 적합. 변경 없음.

### 19-18. 퇴직소득 세금
- 판정: 적합. 변경 없음.

## 기타
- 배너 「TODO 0건」과 TODO 절 삭제는 본문 상태와 맞는다. 규폐 잠복기와 판례 링크 두 TODO가 위에서 확인한 대로 해결됐다.
- 도입부 주석 `kr-doi-add: 10.31083/j.fbl2805096`의 DOI는 실재하고, 제10항 출처 칸의 DOI·PMID와 같다.

## 요약
- block 0건, warn 0건, 삭제 권고 0건.
- 직전 warn 3건(19-2·19-3·19-7 판례 개별 링크)은 해소됐다.
- 미확인: 없음.
- 기계 검사 `kr-fit.mjs 19 --check`: block 0 · warn 0. 시작·종료 `--hash` 값이 같다.
KR-FIT: pass blockers=0 sha256=b6b4064f35795e8f628366c74d47d7ab44c1e6474a5e8772bdc256efa3976eff
