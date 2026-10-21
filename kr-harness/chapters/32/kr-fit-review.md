# 제32절 한국 실정 적합성 검토
검토일: 2026-10-22 · 검토 대상: book-kr/32-유학.md (항목 11개) · 4회차 재검토(2차 조사 반영 후). 직전 기록은 3회차(대상 kr-harness/runs/R32a-32-styleB/7-refined.md, pass, 해시 7404b371…)였다.

기계 검사 `kr-fit.mjs 32`: block 0 · warn 0.

직전 리뷰 이후 본문이 바뀐 곳: `git diff HEAD -- book-kr/32-유학.md`(HEAD bc7fe16f는 3회차 통과 후 조립 커밋)로 확인했다. 바뀐 곳은 상태 배너(TODO 5건→1건), 제2항 이득·출처·비고, 제5항 출처·비고, 제6항 쉽게·이득·출처·비고, 제9항 이득·출처·비고, 제10항 비고 한 문장, TODO 절이다. 제1·3·4·7·8·11항은 글자 하나 바뀌지 않아 3회차와 그 이전 리뷰의 확인을 인용한다. 반영 기록은 kr-harness/chapters/32/2-research.md 「2차 조사 반영 기록 (2026-10-22)」이다. 바뀐 사실은 이번에 원문을 직접 다시 열어 대조했다.

참조 확인: 바뀐 문장에 새 절·항 참조는 없다. 기존 참조(제21절, 제23절, 제14절, 제8절, 제31절, 제4항(정규 과정 재학), 제9항(외국박사학위 신고), 제11항(병무청 국외여행허가))는 문장이 그대로이고 3회차에서 확인했다. 「준비 중」 같은 표시는 없다. 새로 들어간 전화번호는 없다.

## 항목별 판정

### 32-1. 등록금을 내기 전에 그 학교가 그 나라 정부의 공식 명단에 있는지 확인하세요
- 판정: 적합(문장 변경 없음, 직전 리뷰 확인 인용)

### 32-2. 미국 F-1 새 규칙을 둘러싼 소송을 지켜보세요
- 판정: 적합
- 확인: 새로 들어간 사실을 법원 기록 PDF로 직접 대조했다.
  - ECF 61(2026-10-16 접수, Saylor 판사 서명): 「Defendants shall transmit to plaintiffs the administrative record, and file with the Court an administrative record index, by October 23, 2026.」 「Any motions for summary judgment shall be filed by October 26, 2026」 「Any reply memorandum shall be filed by November 2, 2026」. 본문 「10월 23일 행정기록, 10월 26일 약식판결 신청, 11월 2일 답변서」와 맞다.
  - ECF 59(정부): 「On October 7, 2026, … Defendants asked the First Circuit to establish an expedited briefing and argument」, 「stay of district court proceedings pending resolution of the expedited interlocutory appeal」. 본문 「10월 7일 신속 진행 신청」「항소심이 끝날 때까지 지방법원 절차를 멈추자」와 맞다.
  - ECF 60(원고, 2026-10-09): 「render a final judgment now, rather than enter a stay」, 「The First Circuit resolved that motion earlier today, October 9, 2026」, 「As the First Circuit has not yet entered a briefing schedule」, 「the currently effective Section 705 stay」. 본문 비고 「항소법원은 10월 9일 신속 진행 신청을 받아들였습니다. 다만 그때까지 서면 제출 일정은 정하지 않았습니다」와 맞다. 「받아들였습니다」는 원고 서면이 인용한 항소법원 명령(「When this appeal is ready for briefing … the following schedule will enter」)과 원고의 신청 동의 사실에 비추어 지나치지 않다. 본문도 「원고 측 서면에 따르면」으로 전언임을 밝힌다.
- 미확인: 「2026년 10월 21일 … 그날까지 시행을 미룬 명령을 풀거나 바꾼 기록은 없습니다」와 출처의 docket entry 62(Oct. 21). CourtListener 사건 화면과 API, Clearinghouse가 모두 403이라 10월 16일 이후 기록을 직접 보지 못했다. 10월 9일 원고 서면이 705조 유예를 「currently effective」라고 쓴 것까지만 확인했다. 본문 TODO가 공개 전 재확인을 걸어 두었으므로 판정을 막지는 않는다.
- 근거: https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.59.0_1.pdf ; …60.0.pdf ; …61.0.pdf (이번에 받아 pdftotext로 읽음). Yale OISS 2026-09-14 공지(이후 갱신 없음).

### 32-3. 아르바이트 시간 상한은 미국·캐나다·영국·호주가 모두 정해 두었습니다
- 판정: 적합(문장 변경 없음, 직전 리뷰 확인 인용)

### 32-4. 신분의 뿌리는 "정규 과정 재학"입니다
- 판정: 적합(문장 변경 없음, 직전 리뷰 확인 인용)

### 32-5. 미국에서 이사하면 10일 안에 새 주소를 알리세요
- 판정: 적합
- 확인:
  - 호주: legislation.gov.au API로 현행 편집본을 확인했다(Versions/Find 결과 「compilationNumber":"289"」, 「start":"2026-10-02」, 「isCurrent":true」). 제3권 Word 원문 condition 8533: 「(a) in the case of a holder who was outside Australia when the visa was granted, notify the education provider of the holder's residential address in Australia within 7 days after arriving in Australia; and (b) in all cases: (i) notify the education provider of any change in the holder's residential address in Australia within 7 days after the change occurs」. 제2권 500.611(1)(a) 「in all cases, conditions 8105, 8202, 8501, 8516, 8517, 8532 and 8533」. 본문 「입국 후 7일」「주소가 바뀌어도 7일」「학교에」와 맞다.
  - 캐나다: canada.ca 「You only need to update your address if you have an active application in progress with us.」 본문과 맞다.
  - 영국: gov.uk 「You must report any changes in your circumstances」, eVisa가 있으면 UKVI 계정에서 주소를 바꾸며, 기한 문구는 없다. 본문과 맞다.
- 참고(건수 미포함): 8533 (a)의 입국 후 7일은 비자를 호주 밖에서 받은 사람에게만 걸린다. 한국에서 신청하는 독자는 여기에 해당하므로 틀린 말은 아니다. 영국의 「UKVI 계정에서 바꿉니다」는 eVisa 소지자 기준이고, eVisa 접근을 아직 만들지 않은 사람은 온라인 주소 변경 서비스나 서식을 쓴다.
- 근거: https://api.prod.legislation.gov.au/v1/Versions/Find(titleId='F1996B03551',asAtSpecification='Latest') ; https://www.legislation.gov.au/F1996B03551/latest/text ; https://www.canada.ca/en/immigration-refugees-citizenship/services/application/change-address.html ; https://www.gov.uk/change-circumstances-visa-brp/youre-in-the-uk-and-have-a-brp

### 32-6. 현지에서 90일 넘게 머물면 재외국민등록을 하고, 출국 전과 재학 중에 외교부 여행경보를 확인하세요
- 판정: 적합
- 확인: 새로 들어간 신청 경로 문장을 재외동포청 누리집에서 직접 확인했다. 「거주지 관할 우리 공관(대사관, 총영사관, 분관 또는 출장소) 방문 또는 우편 송부」, 「(온라인) 재외동포 365 민원포털」, 「※ 한국에서는 신청이 불가 합니다.」 본문 「공관 방문이나 우편, 재외동포 365 민원포털(g4k.go.kr) … 한국 안에서는 할 수 없습니다」와 맞다. 같은 페이지의 이동신고 「변경된 날부터 90일 이내 새로운 주소나 거소를 관할하는 등록공관의 장에게 이동 신고」와 귀국신고 「90일 초과 기간 동안 계속하여 국내에 거주 또는 체류할 의사를 가지고 귀국한 경우 귀국일로부터 90일 이내에 재외동포청장에게 신고」도 본문 비고(제9조·제9조의2)와 맞다. 법제처 생활법령 페이지는 「주소나 거소를 정한 날부터 90일 이내에 등록공관에 등록」, 이동신고 「변경된 날부터 90일 이내」를 적어 본문 제4조·제9조 문장과 맞다.
- 참고(건수 미포함): 생활법령 페이지는 첫 등록의 온라인 신청이나 국내 신청 불가를 따로 적지 않는다. 본문은 이 두 사실을 「재외동포청 안내에 따르면」으로 재외동포청에 기대어 쓰므로 문제없다. 생활법령 페이지 도입부와 본문의 기한 표기가 서로 다르지만(도입부 이동신고 30일, 본문 90일), 책 본문은 법 조문과 재외동포청에 맞춘 90일을 쓴다. 영사안전콜센터 번호 문장이 제21절과 겹치는 점은 직전과 같다.
- 근거: https://www.oka.go.kr/web/content.do?menu_cd=000050 ; https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=699&ccfNo=3&cciNo=2&cnpClsNo=1 (이번에 WebFetch로 엶). 「재외국민등록법」 MST=248495 제2조·제4조·제9조·제9조의2와 「여권법」 제17조·제24조 제2호는 직전 리뷰 확인 인용.

### 32-7. 호주: 유학생 의료보험(OSHC)은 체류 기간 전체를 빈틈없이 덮어야 합니다
- 판정: 적합(문장 변경 없음, 직전 리뷰 확인 인용)

### 32-8. 영국: 비자 수수료 말고도 해마다 붙는 의료부담금이 있습니다
- 판정: 적합(문장 변경 없음, 직전 리뷰 확인 인용)

### 32-9. 귀국 전에 학위 서류를 챙겨 두고, 박사는 귀국한 날부터 6개월 안에 외국박사학위 신고를 하세요
- 판정: 적합
- 확인:
  - 「고등교육법 시행령」(DRF MST=289437, 시행 2026-09-11) 제17조: 「3. 외국인으로서 외국에서 박사학위를 받은 이후 대한민국 국적을 취득한 경우: 대한민국 국적을 취득한 날부터 6개월 이내」. 본문 새 문장과 맞다. 제1호·제2호(귀국한 날, 학위를 받은 날부터 6개월)와 「학위논문 및 학위증명서를 첨부」도 그대로다.
  - 「외국의 대학에서 박사학위를 받은 자의 신고에 관한 규칙」(DRF admrul ID=2100000269490): 머리 정보 「20251224 537 일부개정 … Y」(현행). 「제2조 삭제」, 「제4조(신고방법) 외국박사학위의 신고는 한국연구재단이 구축ㆍ운영하는 온라인시스템을 통해 하여야 한다.」, 「제5조(신고서류) … 1. 학위논문 … 2. 학위증명서」. 제10조는 「한국연구재단이사장이 별도의 규정을 둘 수 있다」고 쓴다. 본문 「현행은 제537호이고, 신고대상을 정한 제2조는 삭제됐습니다. 신고대상과 제외 기준은 재단이 정한 운영 기준에 따릅니다」와 맞다.
  - 한국연구재단 reportNote: 「외국의 대학에서 박사학위를 받은 자의 신고에 관한 규칙(교육부 훈령 제421호)」를 인용하고, 신고대상 일부를 「재단 운영규칙 제4조」로 든다. 본문 「재단 안내 페이지는 아직 옛 훈령(제421호)을 인용합니다」와 맞다.
  - 「대학교원 자격기준 등에 관한 규정」(시행 2026-03-24) 제13조 첨부서류는 「1. 논문 또는 저서 7부 2. 연구실적요지서 7부 3. 이력서와 경력증명서 … 4. 학력증명서 1부」뿐이다. 시행령·훈령·이 규정 DRF 원문 셋 모두에서 「아포스티유」「영사확인」이 0건이다. 본문 「외국박사학위 신고 서류와 대학교원 자격인정 신청 서류 규정에도 그런 문구가 없습니다」와 맞다. 「찾지 못했습니다」로 확인 범위를 밝혔고 단정하지 않으므로 TODO 삭제도 타당하다.
- 근거: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000269490&type=XML ; https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289437&type=XML ; https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&type=XML&LM=대학교원%20자격기준%20등에%20관한%20규정 ; https://dr.nrf.re.kr/report/reportNote (모두 이번에 엶). HCCH 현황표·협약 본문, reportInfo·FAQ의 검토 기간은 직전 리뷰 확인 인용(문장 변경 없음).

### 32-10. "출국 없이, 몇 달 만에 외국 학위"를 내건 과정은 등록 전에 교육부 인가와 그 대학의 자국 인정부터 확인하세요
- 판정: 적합
- 확인: 새 문장 「이 기준은 훈령 조문이 아니라 재단이 정한 운영 기준입니다.」는 훈령 제537호에 신고대상·제외 조항이 없고(제2조·제3조·제6조 삭제) 제10조가 재단이사장의 별도 규정을 허용하는 점, reportNote가 「재단 운영규칙」을 드는 점과 맞다. 이득 칸의 제외대상(분교 형식, 사회적 문제, 한글 논문, 실무·실기)은 reportNote 원문 목록과 그대로 맞다. 나머지 문장(「고등교육법」 제4조 제2항·제64조 제2항 제1호, 시행령 제13조·제13조의2)은 변경 없음.
- 참고(건수 미포함, 직전과 같음): 비용 칸의 「국내 대학과 맺은 공식 교육과정인지 확인합니다」에는 어디서 확인하는지가 없다.
- 근거: 32-9와 같은 훈령 DRF, https://dr.nrf.re.kr/report/reportNote

### 32-11. 병역의무가 남은 남성은 출국 전에 병무청 국외여행허가를 받고, 기간 안에 못 돌아오면 만료 15일 전까지 연장허가를 받으세요
- 판정: 적합(문장 변경 없음, 3회차 리뷰 확인 인용: 「병역법 시행령」 MST=290421 제147조 제2항·제3항 등)

## 미확인
- 32-2: 2026-10-16 이후 지방법원 기록(출처의 docket entry 62, 10월 21일)과 「10월 21일까지 705조 유예를 풀거나 바꾼 기록 없음」. CourtListener 화면·API(인증 요구)와 Clearinghouse가 403이었다. 본문 TODO에 공개 전 재확인이 걸려 있다.
- 32-2: 제1순회 항소법원 기록(26-2112) 원문. PACER가 필요하다. 원고 서면(ECF 60)의 인용으로만 확인했고, 본문도 전언으로 쓴다.
- 직전 리뷰의 미확인 중 미국 교육부 인정기관 검색 화면(ope.ed.gov)은 이번에도 열지 않았다. 해당 문장(32-1 비고)이 바뀌지 않았다.
- 직전 미확인이던 훈령 원문(32-9·32-10)과 재외동포청 신청 경로(32-6)는 이번에 원문을 열어 해소했다.

## 요약
- block 0건, warn 0건, 삭제 권고 0건
- 2차 조사로 바뀐 제2·5·6·9·10항의 새 사실은 모두 원문과 맞았다. 한국 쪽 판정(훈령 제537호 제2조 삭제·제4조·제5조, 시행령 제17조 제3호, 재외동포청 신청 경로와 국내 신청 불가, 대학교원 자격인정 첨부서류에 아포스티유 문구 없음)은 law.go.kr DRF와 재외동포청·한국연구재단 원문으로 확인했다.
KR-FIT: pass blockers=0 sha256=d3e9b65a9565c438f2bb18a392107fff5ec5db22f80d407f26cb5e04bd5b361c
