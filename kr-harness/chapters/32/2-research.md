# 제32절 조사 기록 — 한국 대응과 4개국 비자 규정 (2026-10-10 확인)

규칙: 1차 출처만 인용한다. 한국 조문 번호는 국가법령정보센터에서 원문을 열어 확인한 것만 쓴다. 외국 규정은 각국 정부(이민 당국)·연방 법령·법원 기록 원문으로 확인했다. 확인일은 모두 2026-10-10.

조사 방법 비고:
- 한국 법령: 국가법령정보센터 오픈API `https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&query=<법령명>&type=XML`로 현행 법령일련번호(MST=lsiSeq)와 시행일을 얻고, `DRF/lawService.do?OC=test&target=law&MST=<번호>&type=XML`로 조문 전문을 받았다. 재외국민등록법은 `LSW/lsInfoR.do`(POST)로 받았다. 한글 주소(`/법령/…`)는 자바스크립트 화면이라 본문 확인에는 쓰지 않았고, 초역의 출처 링크로만 쓴다.
- 외국 사이트: eCFR는 `api/versioner/v1/full/2026-10-01/title-8.xml`(압축 헤더 필요), 연방관보는 API JSON, CourtListener는 사건 화면 HTML(curl)로 받았다. 호주 내무부 화면은 WebFetch가 403이라 curl로 받은 HTML 안의 내장 JSON을 풀어 읽었다. 나머지(gov.uk, canada.ca, USCIS, Study in the States, Yale OISS, AILA)는 WebFetch.
- 막힌 곳: web.archive.org(한국어판은 보관 링크 불요), ed.gov(403, 대체 출처 사용), 재외동포청 재외국민등록 안내(메뉴 JSON만 응답, 법 조문으로 대체), 0404.go.kr는 WebFetch 503이지만 curl로 열림.

---

## A. 미국 (항목 2·3·4·5·1)

### A-1. F-1 고정 체류기간 규칙(항목 2)

| 대상 | 확인 내용 | 확인 URL |
|---|---|---|
| 연방관보 2026-14439 | title 「Establishing a Fixed Time Period of Admission and an Extension of Stay Procedure for Nonimmigrant Academic Students, Exchange Visitors, and Representatives of Foreign Information Media」, publication_date 2026-07-17, effective_on 2026-09-15, corrections 없음. 2026-08-01 이후 같은 문구로 낸 후속 관보(시행 연기 고시 등)는 없음(검색 결과는 OPT 수수료 제안 규칙 2026-10-08과 규제 의제 공지뿐) | https://www.federalregister.gov/api/v1/documents/2026-14439.json · https://www.federalregister.gov/documents/2026/07/17/2026-14439/establishing-a-fixed-time-period-of-admission-and-an-extension-of-stay-procedure-for-nonimmigrant |
| eCFR 8 CFR 214.2(f)(5)(i) | 「An F-1 student is admitted for a fixed period of time … not to exceed a period of 4 years」(eCFR는 관보 시행일 기준으로 새 문구를 이미 반영) | https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2 |
| eCFR 8 CFR 214.2(f)(5)(v) | 학업·승인 실습을 마친 F-1은 「an additional 30-day period」 출국 준비 기간 | 같은 URL |
| CourtListener 사건 1:26-cv-13799 (D. Mass.) | 50번(2026-09-14) MEMORANDUM AND ORDER: 「GRANTED to the extent that it seeks to postpone the effective date of the Final Rule pursuant to … 5 U.S.C. § 705. To the extent that plaintiffs seek vacatur … summary judgment, or other relief, the motion is DENIED without prejudice to its re[newal]」. 51번(같은 날) 「PRELIMINARY INJUNCTION ORDER POSTPONING EFFECTIVE DATE OF FINAL RULE」. 52번 현황 심리 10/2 예정. **53번(2026-09-30) NOTICE OF APPEAL as to 50 Memorandum & ORDER by … Department of Homeland Security …. 55번 USCA Case Number 26-2112.** 56번(2026-10-02) 「Status Conference held … Proposed schedule and pathway forward due for submission by October 9, 2026」. 59번(2026-10-09) Brief | https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/ |
| Yale OISS (2026-09-14) | 「issued an order preliminarily enjoining DHS from implementing this rule」, 「the current D/S framework remains in place for now」, 「You do not currently need to apply for an Extension of Stay」, 「The administration may appeal」. 9-14 이후 갱신 없음 | https://oiss.yale.edu/news/important-update-court-action-on-the-ds-rule |
| AILA 글(2026-09-17, AILA Doc. No. 26091703, 필자 Steven Brown) | 「The relief is nationwide, and it reaches the whole rule」, 「The rule is postponed, not vacated」, 「the 60-day grace period stands」, 「there is no new I-539 requirement」, 「the government may seek review in the First Circuit」 | https://www.aila.org/blog/think-immigration-one-day-before-taking-effect-federal-court-postpones-the-f-j-and-i-fixed-admission-period-rule |

- 출처 성격: AILA는 변호사 단체라 원본 규칙상 「입장성 강한 기관」으로 보아 사실 확인 보조로만 쓴다. 60일 유예기간이 그대로라는 점은 법원 명령이 규칙 전체의 시행을 미뤘다는 기록(51번)과 Yale OISS의 「D/S framework remains」로 뒷받침된다.
- 원문 대비 새 사실: 정부 항소(2026-09-30, 제1순회 26-2112). 원문 비고의 「政府可以上诉」는 「정부가 항소했다」로 바뀐다.

### A-2. 아르바이트 시간·정규 과정·주소 신고(항목 3·4·5)

| 조문·페이지 | 확인 내용 | 확인 URL |
|---|---|---|
| 8 CFR 214.2(f)(9)(i) | 교내 근무 「must not exceed 20 hours a week while school is in session」 | eCFR 위 URL |
| 8 CFR 214.2(f)(9)(ii) | 교외 시간제 근무 「limited to no more than 20 hours a week when school is in session」, 「may work full-time during holidays or school vacation」 | 같은 URL |
| 8 CFR 214.2(f)(6)(i)(B) | 학부 정규 과정 = 「at least 12 semester or quarter hours of instruction per academic term」. 같은 항 (i): 유학생 수용 인증을 받지 않은 기관의 과정은 정규 과정 요건을 못 채움(「A course of study at an institution not certified for attendance by foreign students … does not satisfy」) | 같은 URL |
| 8 CFR 214.2(f)(17) | 「A student must inform DHS and the DSO of any … change of address, within 10 days」, 「A student can satisfy the requirement in 8 CFR 265.1 … by providing a notice of a change of address within 10 days to the DSO, and the DSO in turn must enter the information in SEVIS within 21 days」, 주소는 우편 주소가 아니라 실제 거주지 | 같은 URL |
| 8 CFR 265.1 | 「must report each change of address and new address within 10 days of such change in accordance with instructions provided by USCIS」 | https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-265/section-265.1 |
| USCIS AR-11 (Last Reviewed/Updated 06/03/2026) | 「you must report any change of address to USCIS within 10 days of moving」, A·G 비자와 비자면제 방문자는 제외, 온라인 계정 권장(시스템에 거의 즉시 반영), 우편 AR-11은 법적 요건은 채우지만 USCIS 시스템 주소를 자동으로 바꾸지 않음 | https://www.uscis.gov/ar-11 |
| Study in the States, Working in the United States (2023-11-28 갱신) | 교내 근무는 「F-1 students whose status is Active in SEVIS」, 학기 중 주 20시간 이하. 교외 근무는 1학년 이상 이수 + 경제적 곤란 + DSO 승인 + USCIS의 I-765 승인, 「you cannot begin to work while the Form I-765 is pending」 | https://studyinthestates.dhs.gov/students/work/working-in-the-united-states |
| Study in the States, School Search | SEVP 인증 학교·프로그램 검색, F-1·M-1 학생을 받을 수 있는 학교. 인증 학교 목록 파일 certified-school-list-10-07-26.pdf | https://studyinthestates.dhs.gov/school-search |

- 참고: Study in the States 근무 페이지에는 「정규 과정 유지」 문구가 없다. 정규 과정 요건은 8 CFR 214.2(f)(6)으로 단다.
- ed.gov 「Diploma Mills and Accreditation」 페이지는 403으로 못 열었다 → 항목 1 미국 부분은 SEVP 인증 학교 검색으로 대체.

## B. 영국 (항목 3·4·8·1)

| 페이지 | 확인 내용 | 확인 URL |
|---|---|---|
| Immigration Rules Appendix Student ST 26.1 | 정규(full-time) 학위 이상, 실적 검증 고등교육기관 후원: 학기 중 주 20시간. 정규 학위 미만(같은 후원 조건): 주 10시간. 「All other study, including all part-time study: No employment permitted」. 학기 밖에는 전일 근무 가능 | https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student |
| 같은 문서 ST 26.5 | (a) 자영업·사업 운영 금지(ST 26.8 예외), (b) 프로 운동선수·코치, (c) 연예인, (d) 상시 정규직 자리 채우기 금지(ST 26.6 예외) | 같은 URL |
| Student visa | 「£558 to apply for a Student visa from outside the UK」, 「£558 to extend or switch」, 동반 가족도 1인당 비자 수수료. 18세 이상 학위 과정은 보통 최장 5년, 학위 미만 2년 | https://www.gov.uk/student-visa |
| How much you pay (IHS) | 「£776 per year for students, their dependants, and those on a Youth Mobility Scheme visa」, 「£1,035 per year for all other …」, 「£1,552 for a 2-year visa」(학생 예). 6개월 이하: 영국 밖 신청은 부담금 없음, 영국 안 신청은 반년치(학생 £388). 6개월 초과 1년 미만은 1년치 전액. 미납·부족 통지 메일 후 영국 안 10영업일, 밖 7영업일 안에 내지 않으면 신청 거절 | https://www.gov.uk/healthcare-immigration-application/how-much-pay |
| Pay for UK healthcare (IHS) | 「Most people need to pay the immigration health surcharge (IHS) as part of their online immigration application」, 비자 시작일부터 NHS 무료 이용, 처방약·치과·시력검사·난임 치료 등은 여전히 유료 | https://www.gov.uk/healthcare-immigration-application |
| Check if a university is officially recognised | 잉글랜드는 OfS Register에서 학위 수여 권한 확인, 북아일랜드·스코틀랜드·웨일스는 각 정부 목록. 「If your degree is not officially recognised, employers or universities might not accept it」 | https://www.gov.uk/check-university-award-degree |

## C. 캐나다 (항목 3·4·1)

| 페이지 | 확인 내용 | 확인 URL |
|---|---|---|
| Work off campus as an international student (Page details 2026-04-15) | 학기 중 교외 근무 「24 hours per week」, 일 여러 개 합산. 허가증에 20시간이 적혀 있어도 요건을 갖추면 24시간. 근거 IRPR 186(v). 승인 휴학 중이나 학교를 옮기며 공부하지 않는 동안 「you can't work off campus. You can only return to work once you resume your studies」. 24시간 초과는 허가 조건 위반이고 학생 신분 상실로 이어질 수 있음 | https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html |
| Designated learning institutions list (Date modified 2026-10-05) | 「A DLI is a school approved by a provincial or territorial government to host international students」, 「You need a letter of acceptance (LOA) from a DLI to apply for a study permit」, 「Not all programs offered by a DLI are eligible for a PGWP」 | https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html |

## D. 호주 (항목 3·7·1)

| 페이지 | 확인 내용 | 확인 URL |
|---|---|---|
| Student visa (subclass 500) — 근무 | 「work up to 48 hours a fortnight when your course of study or training is in session (students studying a master's by research or doctoral degree, and their families, have no work limit)」 | https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500 |
| 같은 페이지 — OSHC | 「have and maintain adequate health insurance for the whole of your stay in Australia」, 「You and your family members must be covered by Overseas Student Health Cover (OSHC) from an approved Australian health insurance provider, unless an 'Exception' applies」, 보장 시작일은 도착일, 「ensure you don't enter Australia before your OSHC begins, and maintain your OSHC until you leave Australia」, 「You may be refused entry to Australia if you cannot prove you have health insurance in place when you arrive」, 앞 비자에 건강보험 의무가 있었다면 「cover must be continuous with no gap」 | 같은 URL |
| 같은 페이지 — OSHC 예외 | 「a Norwegian student covered by the Norwegian National Insurance Scheme / a Swedish student covered by Kammarkollegiet / a Belgian student covered under the Reciprocal Health Care Agreement with Australia」 → **한국 국적은 예외 목록에 없다** | 같은 URL |
| 같은 페이지 — 학교가 보험을 대신 가입하는 경우 | 보험사 이름 등을 신청서에 적어야 함, 학교 두 곳이 각각 가입하면 「The second policy must begin as soon as the first expires」 | 같은 URL |
| 같은 페이지 — CoE | 「You must be enrolled in a full time course registered on the Commonwealth Register of Institutions and courses for Overseas Students (CRICOS)」, CoE 없이 내면 신청 무효 | 같은 URL |
| CRICOS | 학생 비자 유학생 대상 교육기관·과정 공식 등록부, 과정·기관 검색 | https://cricos.education.gov.au/ |

---

## E. 한국 법령

### E-1. 병역법 (법률 제21857호, 2026.8.4. 타법개정, 시행 2026.10.2., lsiSeq=290783) — 항목 11

| 조문 | 확인 내용 | 확인 URL |
|---|---|---|
| 제70조 제1항 | 병역의무자 중 「1. 25세 이상인 병역준비역, 보충역 또는 대체역으로서 소집되지 아니한 사람」 등은 국외여행을 하려면 병무청장의 허가를 받아야 한다 | https://www.law.go.kr/법령/병역법/제70조 |
| 제70조 제3항 | 「허가기간에 귀국하기 어려운 경우에는 기간만료 15일 전까지, 25세가 되기 전에 출국한 사람은 25세가 되는 해의 1월 15일까지 병무청장의 기간연장허가 또는 국외여행허가를 받아야 한다」 | 같은 URL |
| 제81조의2 제1항 제1호 | 제70조 제1항·제3항 허가 없이 출국·체류하거나 정당한 사유 없이 허가 기간에 귀국하지 않은 사람의 인적사항과 병역의무 미이행 사항을 병무청장이 인터넷 홈페이지 등에 공개할 수 있다(질병·수감 등 예외) | https://www.law.go.kr/법령/병역법/제81조의2 |
| 제94조 제1항 | 병역 기피·감면 목적으로 허가 없이 출국·체류 → 1년 이상 5년 이하의 징역 | https://www.law.go.kr/법령/병역법/제94조 |
| 제94조 제2항 | 허가 없이 출국·체류하거나 정당한 사유 없이 허가된 기간에 귀국하지 않은 사람(귀국명령 위반 포함) → 3년 이하의 징역 | 같은 URL |

- 제81조의2는 가지 조문이지만 DRF XML 전문에 본문이 그대로 있어 원문 확인됨.

### E-2. 병역법 시행령 (대통령령 제36728호, 2026.9.29. 타법개정, 시행 2026.10.2., lsiSeq=290421) — 항목 11

| 조문 | 확인 내용 | 확인 URL |
|---|---|---|
| 제124조 제1항 | 학교별 제한연령: 4년제 대학 24세, 5년제 25세, 6년제 26세(의·치·한의·수의·약학 27세), 석사 2년제 26세·2년 초과 27세, 박사 28세 등 | https://www.law.go.kr/법령/병역법시행령/제124조 |
| 제124조 제2항 제2호 가목·제3호 | 대학·대학원 범위에 「고등교육법」상 대학·대학원에 상응하는 외국 대학·대학원 포함 | 같은 URL |
| 제145조 제1항 | 국외여행허가 신청은 출국 예정일 2일 전까지 병무청장에게. 25세 전 출국자는 25세 되는 해 1월 15일까지 재외공관장을 거쳐 신청(유학 등은 공관을 거치지 않고 직접 제출 가능) | https://www.law.go.kr/법령/병역법시행령/제145조 |
| 제146조 제1항 제10호 | 「유학(고등학교에 수학하기 위한 유학은 제외한다). 이 경우 국외여행허가기간은 제124조에 따른 학교별 제한연령까지」 | https://www.law.go.kr/법령/병역법시행령/제146조 |
| 제147조 제2항·제3항 | 외국 학교 재학 중이면 학교별 제한연령까지 연장 허가, 그 안에 졸업·학위가 어려우면 29세를 넘지 않는 범위에서 1년 더. 대학원생이 30세 되는 해 6월 이전 박사학위 취득 가능하면 그해 6월 30일까지 | https://www.law.go.kr/법령/병역법시행령/제147조 |
| 제147조의2 제1항 제5호 | 허가 요건을 유지하지 못하게 되면 허가 취소·병역의무 부과 가능 | https://www.law.go.kr/법령/병역법시행령/제147조의2 |

### E-3. 병무청 안내 (국외여행허가 — 유학 탭)

| 확인 내용 | 확인 URL |
|---|---|
| 허가기간: 「영 제124조에 따른 고등학교를 제외한 학교별 제한연령 범위에서 입학예정일 6개월 전부터 졸업예정일을 지나 6개월까지」, 이미 재학 중이면 「학교별 제한연령에 1년을 더한 기간의 범위에서 졸업예정일을 지나 6개월까지」. 구비서류: 국외여행 허가신청서, 입학허가서 또는 재학증명서, 국외학력 사실확인 동의서, 허가의무 위반 시 제재사항 확인서 등. 온라인 신청 시 신청서·확인서 서식 첨부 생략 가능. 문의 「병무민원상담소(1588-9090) 또는 관할지방병무청」 | https://www.mma.go.kr/contents.do?mc=mma0000786 |

### E-4. 여권법 (법률 제21383호, 2026.2.27. 일부개정, 시행 2026.8.28., lsiSeq=283681) — 항목 6

| 조문 | 확인 내용 | 확인 URL |
|---|---|---|
| 제17조 제1항 | 외교부장관은 국외 위난상황으로 기간을 정해 특정 국가·지역에서 여권 사용을 제한하거나 방문·체류를 금지할 수 있다. 영주·취재·보도·긴급한 인도적 사유·공무 등은 허가 가능 | https://www.law.go.kr/법령/여권법/제17조 |
| 제24조 제2호 | 방문·체류 금지 국가·지역으로 고시된 사정을 알면서 허가 없이 여권을 쓰거나 방문·체류한 사람 → 3년 이하의 징역 또는 3천만원 이하의 벌금 | https://www.law.go.kr/법령/여권법/제24조 |

### E-5. 재외국민등록법 (법률 제19228호, 2023.3.4. 타법개정, 시행 2023.6.5., lsiSeq=248495) — 항목 6

| 조문 | 확인 내용 | 확인 URL |
|---|---|---|
| 제2조(등록대상) | 「외국의 일정한 지역에 계속하여 90일을 초과하여 거주하거나 체류할 의사를 가지고 그 지역에 체류하는 대한민국 국민은 이 법에 따라 등록하여야 한다」 | https://www.law.go.kr/법령/재외국민등록법/제2조 |
| 제3조 | 주소·거소 관할 대사관·총영사관·분관·출장소(등록공관)에 성명·여권번호·병역관계(남성)·체류목적 등 12개 사항 등록 | https://www.law.go.kr/법령/재외국민등록법/제3조 |
| 제4조(등록 기간) | 「외국의 일정한 지역에 주소나 거소를 정한 날부터 90일 이내에 등록공관에 등록하여야 한다」 | https://www.law.go.kr/법령/재외국민등록법/제4조 |
| 제8조·제9조·제9조의2 | 등록사항 변경 30일 이내 변경신고, 관할 공관이 바뀌면 90일 이내 이동신고, 90일 넘게 국내에 머물 의사로 귀국하면 90일 이내 귀국신고 | 같은 법 |
| 제11조 | 등록·신고 방법: 문서, 모사전송, 전자문서, 그 밖의 방법 | 같은 법 |
| 벌칙 | 제1조~제12조와 부칙 전체를 읽음. **벌칙·과태료 조항 없음** | 같은 법 |

### E-6. 고등교육법 (법률 제21423호, 2026.3.10. 일부개정, 시행 2026.9.11., lsiSeq=283883) — 항목 1·9·10

| 조문 | 확인 내용 | 확인 URL |
|---|---|---|
| 제4조 제2항 | 국가 외의 자가 학교를 설립하려면 교육부장관의 인가를 받아야 한다 | https://www.law.go.kr/법령/고등교육법/제4조 |
| 제27조 제1항 | 「외국에서 박사학위를 받은 사람은 대통령령으로 정하는 바에 따라 교육부장관에게 신고하여야 한다」 | https://www.law.go.kr/법령/고등교육법/제27조 |
| 제27조 제2항 | 교육부장관은 외국학교의 박사학위과정 설치현황과 학위과정에 대한 해당 국가의 인증 여부 등 정보시스템을 구축해야 한다 | 같은 URL |
| 제64조 제2항 제1호 | 학교설립인가나 분교설치인가 없이 학교 명칭을 사용하거나 학생을 모집하여 시설을 사실상 학교 형태로 운영하는 자 → 3년 이하의 징역 또는 3천만원 이하의 벌금 | https://www.law.go.kr/법령/고등교육법/제64조 |

- 제27조 위반에 대한 벌칙·과태료는 제64조에 없음(제64조 제1항~제3항 전체 확인).

### E-7. 고등교육법 시행령 (대통령령 제36644호, 2026.9.8. 일부개정, 시행 2026.9.11., lsiSeq=289437) — 항목 9·10

| 조문 | 확인 내용 | 확인 URL |
|---|---|---|
| 제13조 제1항 | 국내 대학이 다른 대학과 공동으로 교육과정을 운영할 때, 외국대학은 「해당 외국 또는 외국이 공인하는 평가인정기구의 평가인정을 받은 외국대학에 한정」 | https://www.law.go.kr/법령/고등교육법시행령/제13조 |
| 제13조의2 제1항 | 국내대학이 외국대학으로 하여금 국내대학 교육과정을 운영하게 할 때도 외국대학은 해당 외국의 평가인정(또는 공인 평가인정기구 인정)을 받은 곳으로 한정 | https://www.law.go.kr/법령/고등교육법시행령/제13조의2 |
| 제17조(외국박사학위의 신고) | 학위논문과 학위증명서를 첨부해 교육부장관에게 신고. 「1. 대한민국 국민으로서 귀국 이전에 박사학위를 받은 경우: 귀국한 날부터 6개월 이내」 「2. … 귀국 후에 박사학위를 받은 경우: 해당 학위를 받은 날부터 6개월 이내」 「3. 외국인으로서 … 국적을 취득한 날부터 6개월 이내」 | https://www.law.go.kr/법령/고등교육법시행령/제17조 |

### E-8. 한국연구재단 외국박사학위 종합시스템 (항목 1·9·10)

| 페이지 | 확인 내용 | 확인 URL |
|---|---|---|
| 신고대상 | 근거: 「외국의 대학에서 박사학위를 받은 자의 신고에 관한 규칙」(교육부 훈령 제421호). 신고대상: 대한민국 국민으로서 외국 대학에서 박사학위를 받은 자 등. 재단 운영규칙: 「해당국가의 정부 또는 국제적으로 공신력 있는 인증기관으로부터 인증 받은 박사학위 수여기관에서 취득한 박사학위」. **제외대상**: 미국 J.D.·D.Min.·D.M.A.(논문 있는 음악 전공 일부 예외)·Pharm.D., 실무·실기 분야 박사, 해당국 언어·UN 공용어 외 언어 논문, 「박사학위 수여기관 또는 학위과정이 사회적으로 문제가 있다고 판단된 학위」, 학위 취득 예정자, 「정부(교육부) 인가 혹은 승인 없이 외국대학 분교 형식에 의하여 수여한 학위」, 한글 논문(또는 한글 작성 후 영문 번역), 한국 국적 없는 사람. 서류: 학위논문, 학위증명서(같은 훈령 제5조) | https://dr.nrf.re.kr/report/reportNote |
| 신고 절차 | IRIS 가입·연구자 전환 → KRI 가입·연구자 전환 → dr.nrf.re.kr 로그인 → 학위증 사본·박사논문 원문 PDF 업로드 → 승인대기 「담당자 제출자료 검토(평균 3~5일 소요)」 → 완료. 영어 외 언어 자료는 국문 또는 영문 번역본 추가 | https://dr.nrf.re.kr/report/reportInfo |
| 자주 묻는 질문 | 「신고처리 기간은 평균 2~3일이 소요되며, 경우에 따라 그 이상의 기간이 필요할 수 있습니다」. 연구자 전환에 본인인증이 필수라 「귀국 후 본인인증이 가능하실 때 신고해주시기 바랍니다」 | https://dr.nrf.re.kr/customer/faq |

- 처리 기간이 페이지마다 다르다(절차 안내 3~5일, FAQ 2~3일). 초역에는 둘 다 적는다.
- 교육부 훈령 제421호 원문은 국가법령정보센터 행정규칙에서 직접 열어 보지 않았다 → TODO(재단 페이지의 인용만 사용).

### E-9. 외교부 해외안전여행 (항목 6·도입부)

| 페이지 | 확인 내용 | 확인 URL |
|---|---|---|
| 여행경보제도 | 2004년부터 운영. 1단계 남색경보 여행유의(국내 대도시보다 상당히 높은 수준의 위험, 신변안전 위험 요인 숙지·대비), 2단계 황색경보 여행자제(국내 대도시보다 매우 높은 수준의 위험, 여행예정자 불필요한 여행 자제·체류자 신변안전 특별유의), 3단계 적색경보 출국권고(여행예정자 여행 취소·연기, 체류자 긴요한 용무가 아닌 한 출국), 4단계 흑색경보 여행금지(여행예정자 여행금지 준수, 체류자 즉시 대피·철수). 특별여행주의보는 단기적 긴급 위험에 발령, 행동요령은 2단계 이상 3단계 이하에 준함 | https://www.0404.go.kr/bbs/contsPst/MST0000000000127/27/detail |
| 여행금지제도 | 「여행경보 4단계(흑색경보, 여행금지)에 해당하는 국가로서 허가 없이 방문하면 처벌을 받습니다」, 법적 근거 여권법 제17조·제24조. 현재 지정 국가 목록(이라크·소말리아·아프가니스탄·예멘·리비아·우크라이나·수단 등, 기간 2027-01-31까지) | https://www.0404.go.kr/bbs/contsPst/MST0000000000101/1/detail |
| 영사안전콜센터 | 「연중무휴 24시간 상담서비스」, 영사안전콜센터(유료) 국내 02-3210-0404, 해외 +82-2-3210-0404 | https://www.0404.go.kr/bbs/contsPst/MST0000000000104/4/detail |

- 원문의 「12308」(중국 영사보호 핫라인) 자리에 쓴다. kr-fit 허용 목록에 없는 번호라 warn이 날 수 있다(공식 페이지 확인 완료).

### E-10. 아포스티유 (항목 9)

| 출처 | 확인 내용 | 확인 URL |
|---|---|---|
| HCCH 협약 현황표(Convention of 5 October 1961) | Republic of Korea: 가입 2006-10-25, 발효 2007-07-14. United States: 발효 1981-10-15. United Kingdom: 발효 1965-01-24. Australia: 발효 1995-03-16. Canada: 가입 2023-05-12, 발효 2024-01-11 | https://www.hcch.net/en/instruments/conventions/status-table/?cid=41 |
| HCCH 협약 본문 | 제1조: 공문서 범위에 행정문서, 공증 행위(notarial acts), 사인이 서명한 문서 위의 공적 증명 포함. 제2조: 체약국은 협약이 적용되는 문서를 영사 인증(legalisation)에서 면제. 제3조: 요구할 수 있는 유일한 절차는 문서 발급국 권한 당국의 아포스티유 부착 | https://www.hcch.net/en/instruments/conventions/full-text/?cid=41 |
| 대한민국 아포스티유(외교부·재외동포청) | 「「외국공문서에 대한 인증의 요구를 폐지하는 협약」이 2007년 7월 14일 정식발효」. 이 사이트는 한국 공문서를 외국에서 쓰는 쪽(한국 발급)만 다룬다 | https://www.apostille.go.kr/gd/intro/appIntro.do?checkTabNo=1 |

- 국내 채용·진학에서 외국 학위증에 아포스티유를 요구하는지는 공식 일반 기준을 찾지 못했다(인사혁신처·재외동포청 공고 1건 확인, 해당 문구 없음) → 초역에는 「요구 여부는 제출처 공고로 확인」으로만 쓴다.

---

## F. 확인했지만 쓰지 않은 것

- 교육부 「1+3 유학 프로그램」 불법 판단(2014년경): 검색 결과가 언론 기사뿐이고 교육부 보도자료 원문을 열지 못해 쓰지 않음.
- 교육부의 2026-09 외국인 유학생 관리 강화 방침: 한국에 오는 외국인 유학생 대상이라 이 절과 무관.
- 연방관보 「Optional Practical Training Fees」 제안 규칙(2026-10-08, 2026-20660): 아직 제안 단계라 쓰지 않음.

## G. 적합성 검토(kr-fit-review) 반영 추가 확인 (2026-10-10)

| 대상 | 확인 내용 | 확인 URL |
|---|---|---|
| Study in the States, The Basics of School Accreditation (Last updated 2025-09-19, WebFetch) — 항목 1 | 「Although a school does not need to be accredited to receive SEVP certification」 「(unless it is an English language training program)」 「some opportunities may require that a student's degree come from an accredited institution」(한 문장의 조각들), 「The U.S. Department of Education maintains a database of accrediting agencies it recognizes」, 「SEVP only recognizes schools as accredited if the accrediting agency is recognized by the Department of Education」, 학교 인정 여부는 「U.S. Department of Education's Database of Accredited Postsecondary Institutions and Programs」에서 검색하라고 안내하고 링크(ope.ed.gov/accreditation/Index.aspx)를 단다 | https://studyinthestates.dhs.gov/schools/apply/the-basics-of-school-accreditation |
| 미국 교육부 DAPIP | ope.ed.gov/dapip는 자바스크립트 화면이라 본문(제목 「DAPIP」 외)을 확인하지 못함 → 본문에 주소를 넣지 않고 「국토안보부 인정 안내 페이지에 그 링크가 있다」로만 씀 | https://ope.ed.gov/dapip/ |
| 「병역법」 제2조 제2항 (MST=290783, 시행 2026-10-02, DRF XML) — 항목 11 | 「이 법에서 병역의무의 이행시기를 연령으로 표시한 경우 "○○세부터"란 그 연령이 되는 해의 1월 1일부터를, "○○세까지"란 그 연령이 되는 해의 12월 31일까지를 말한다」 | https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290783&type=XML |
| 「병역법 시행령」 제147조 제3항 (MST=290421, DRF XML) | 「외국의 대학원에 재학 중인 사람이 30세가 되는 해의 6월 이전에 박사학위를 취득할 수 있는 경우에는 30세가 되는 해의 6월 30일까지 허가할 수 있다」 → 본문 「6월 전에」를 「6월까지」로 고침 | https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290421&type=XML |
| 같은 영 제147조의2 제1항 제3호 | 「국외이주 외의 목적으로 국외여행허가를 받고 정당한 사유 없이 허가받은 날부터 1년 이내에 출국하지 아니하거나 법 제70조제1항제1호에 해당하는 사람이 국외여행허가기간 내에 귀국하여 3개월 이상 계속하여 국내에 체재하는 경우」 허가 취소·병역의무 부과 가능 | 같은 URL |
| 병무청 국외여행 「허가 절차 안내」(WebFetch) | 허가대상 「25세 이상인 병역준비역(…)」 「25세 이상인 보충역 또는 대체역으로서 소집되지 아니한 사람」, 「허가기간만료 15일전까지, 24세이전에 출국한 사람은 25세가되는 해의 1월 15일까지 국외여행(기간연장)허가를 받아야 함」 → 나이를 해 단위로 센다는 판단의 보강(「25세가 되는 해 1월 1일부터」를 글자 그대로 적은 안내는 여전히 못 찾음) | https://www.mma.go.kr/contents.do?mc=usr0000186 |
| 병무청 「국외여행허가 취소」(WebFetch) | 국외이주 외 목적 허가 취소 사유: 「허가기간 내에 귀국하여 3개월 이상 계속하여 국내 체재하는 경우」, 「허가기간 내에 병역의무를 이행하려는 경우」, 「허가를 받은 사람이 허가요건을 유지하지 못하게 된 경우」 | https://www.mma.go.kr/contents.do?mc=mma0001993 |
| 「여권법」 제17조·제24조 제2호, 「재외국민등록법」 제2조·제4조·제9조·제9조의2 (DRF XML 재확인) — 항목 6 | 조사 E-4·E-5와 같음. 제9조의2 귀국신고는 「귀국일부터 90일 이내에 재외동포청장에게」 | MST=283681, MST=248495 |

- 항목 6: 여행경보 단계별 정의·특별여행주의보 설명은 제21절(해외여행과 현지 안전)로 넘기고, 이 항목은 재외국민등록을 중심으로 줄였다(원문 제21절 제1항 「出发前查一次外交部安全提醒」과 겹침 방지).

## TODO 확인 필요 (조사 단계)

1. 「외국의 대학에서 박사학위를 받은 자의 신고에 관한 규칙」(교육부 훈령 제421호) 원문을 국가법령정보센터 행정규칙에서 직접 확인. 지금은 한국연구재단 페이지의 인용만 썼다.
2. 재외동포청 재외국민등록 안내 페이지(온라인 신청 경로, 영사민원24 등)의 본문 확인. 이번에는 메뉴 JSON만 받아져 법 조문만 썼다.
3. 미국 F-1 소송: 제1순회 항소(26-2112) 이후 진행과 2026-10-09 제출 일정안의 내용. 법원 기록 59번(Brief) 본문은 열지 않았다.
4. 캐나다·영국·호주의 주소 변경 신고 기한(원문도 미확인). 초역 항목 5 비고는 「각국 이민 당국 안내로 확인」으로만 둔다.
5. 국내 채용·진학 기관이 외국 학위 서류에 아포스티유를 요구하는 일반 기준(있다면 출처).

## 2차 조사 반영 기록 (2026-10-22)

조사 기록: kr-harness/research/32.md (opencode GLM 5.3 Flash). 판정을 그대로 쓰지 않고 사실마다 원문을 다시 열었다.

| TODO | 결과 | 바뀐 문장 (전 → 후 요약) | 직접 확인한 URL |
|---|---|---|---|
| T1 훈령 원문 (항목 9·10) | 반영 | 이득: 시행령 제17조 제3호(외국인 국적 취득 후 6개월) 추가, 훈령 제4·5조(재단 온라인 시스템, 학위논문·학위증명서) 추가. 비고: 「재단 페이지는 옛 훈령 제421호 인용, 현행은 제537호(2025-12-24)이고 제2조 삭제, 신고대상·제외 기준은 재단 운영 기준」. 출처에 훈령 DRF URL. 항목 10 비고에 「제외 기준은 재단 운영 기준」 한 문장. 상충 ①(421 vs 537): law.go.kr 현행 표시(현행여부 Y, 발령 537)를 기준으로 판단. 상충 ②(검토 3~5일 vs 2~3일): 이미 본문에 양쪽 병기돼 있어 그대로 둠(reportInfo·FAQ 원문 재확인) | https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000269490&type=XML ; https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289437&type=XML (시행 2026-09-11) ; https://dr.nrf.re.kr/report/reportNote ; https://dr.nrf.re.kr/report/reportInfo ; https://dr.nrf.re.kr/customer/faq |
| T2 재외국민등록 온라인 경로 (항목 6) | 반영 | 쉽게·이득: 「공관 방문·우편, 온라인은 재외동포 365 민원포털(g4k.go.kr), 한국 안에서는 신청 불가」 추가. 출처에 재외동포청·법제처 생활법령. 기록이 남긴 잔여 쟁점(제9조의2·벌칙 부재)은 DRF 전문(MST=248495, 현행)으로 확인: 제9조의2(귀국신고) 「귀국일부터 90일 이내에 재외동포청장에게」, 조문 제목 목록에 벌칙·과태료 조항 없음 | https://www.oka.go.kr/web/content.do?menu_cd=000050 ; https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=699&ccfNo=3&cciNo=2&cnpClsNo=1 ; https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=248495&type=XML |
| T3 F-1 소송 (항목 2) | 부분 | 기록은 59·60·61번 본문을 못 열었다고 했으나 PDF를 직접 받아 pdftotext로 읽음. 이득: 10-07 정부 신속 진행 신청, 10-09 양측 일정안(정부: 항소심 동안 절차 정지, 원고: 즉시 최종 판결), 10-16 명령(행정기록 10-23, 약식판결 신청 10-26, 답변 11-02) 추가. 비고 기준일 10-10 → 10-21, 「10-21까지 705조 유예를 풀거나 바꾼 기록 없음」, 「원고 서면에 따르면 항소법원이 10-09 신속 진행 신청을 받아들였으나 서면 일정은 미정」. TODO는 제1순회 기록 직접 열람(PACER 필요)과 약식판결 결과 재확인으로 축소 | https://www.courtlistener.com/docket/74661796/presidents-alliance-on-higher-education-and-immigration-v-united-states/ ; https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.59.0_1.pdf ; …60.0.pdf ; …61.0.pdf |
| T4 캐나다·영국·호주 주소 신고 (항목 5) | 반영 | 비고 「각국 이민 당국 안내로 확인하세요」 → 호주 8533(입국 후 7일·변경 후 7일 학교 통지), 영국(변동 보고 의무, UKVI 계정, 안내 페이지에 기한 없음), 캐나다(심사 중 신청이 있을 때만). 기록이 미확인으로 남긴 호주 현행 문언은 legislation.gov.au API로 현행 편집본(Compilation No. 289, 2026-10-02 시행, F2026L01347까지 반영) 제3권 Word 원문을 받아 대조: 「8533 The holder must: (a) … notify the education provider of the holder's residential address in Australia within 7 days after arriving in Australia; and (b) in all cases: (i) notify the education provider of any change in the holder's residential address in Australia within 7 days after the change occurs …」, 500.611(1)(a) 「in all cases, conditions 8105, 8202, 8501, 8516, 8517, 8532 and 8533」. IRCC 「You only need to update your address if you have an active application in progress with us.」 GOV.UK 「You must report any changes in your circumstances」, 기한 문구 없음 | https://api.prod.legislation.gov.au/v1/Versions/Find(titleId='F1996B03551',asAtSpecification='Latest') ; https://www.legislation.gov.au/F1996B03551/latest/text ; https://www.canada.ca/en/immigration-refugees-citizenship/services/application/change-address.html ; https://www.gov.uk/change-circumstances-visa-brp/youre-in-the-uk-and-have-a-brp |
| T5 아포스티유 일반 기준 (항목 9) | 부분 (TODO 삭제) | 일반 기준 문서는 여전히 못 찾음. 비고: 「아포스티유를 일괄해서 요구하는 법령 기준은 찾지 못했습니다. 외국박사학위 신고 서류와 대학교원 자격인정 신청 서류 규정에도 그런 문구가 없습니다」로 확인 범위를 명시하고 「제출처 공고로 확인」 유지. DRF 전문 3건(시행령, 훈령, 대학교원 자격기준 규정 시행 2026-03-24)에서 「아포스티유」「영사확인」 0건, 규정 제13조 첨부서류는 「4. 학력증명서 1부」까지. 본문이 확인 범위를 밝혀 두었으므로 TODO 줄은 지움 | https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&type=XML&LM=대학교원%20자격기준%20등에%20관한%20규정 |

- TODO 5건 → 1건(T3 축소본). 상태 배너 갱신.
- 검사: `node .claude/skills/kr-verify/scripts/kr-fit.mjs 32 --check` → block 0 · warn 0.

## 3차 조사 반영 기록 (2026-10-22)

조사 기록: kr-harness/research/32-r3.md (opencode GLM 5.3 Flash, 판정 「해결」). 판정을 믿지 않고 제1순회 항소 기록을 CourtListener RECAP Atom 피드로 직접 열어 항목 원문을 대조했다(docket HTML은 CloudFront 403, REST API는 인증 필요라 피드만 열림). 언론 보도는 근거로 쓰지 않았다.

| TODO | 결과 | 바뀐 문장 (전 → 후 요약) | 직접 확인한 URL |
|---|---|---|---|
| T1 F-1 소송 항소 기록 (항목 2) | 부분 (TODO 축소 유지) | 이득: 「10월 7일 신속 진행 신청」 → 「원고 측도 동의」 추가(10-07 항목 「ASSENTED TO MOTION to expedite BRIEFING AND HEARING SCHEDULE filed by Appellants…」). 10-09 Dunlap 판사 명령의 일정(「Opening Brief/Appendix: 21 days after briefing schedule is entered on the docket; Response Brief: 30 days after service of the opening brief; Reply Brief: 10 days after service of the Response Brief … Argument will be scheduled as appropriate」), 10-19 항목(「EXPEDITED briefing schedule set. Brief and Appendix due 11/09/2026 for appellants…」), 구두변론 미지정 추가. 비고: 「원고 측 서면에 따르면 항소법원은 10-09 신청을 받아들였고 서면 일정은 미정」(전언) → 「항소 기록 10-19, 지방 기록 10-21 기준. 유예 명령을 풀거나 바꾼 기록, 멈춰 달라는 신청은 찾지 못함」. 출처에 항소 docket URL 추가. 쓰지 않은 것: 28 U.S.C. § 1657(기록 원문에서 직접 못 봄), 「신청을 받아들였다」(명령 원문은 「The motion is resolved as follows」라 그 표현 대신 「일정을 정했다」로 씀), 제1순회 달력·구두변론 오디오 검색(부재 확인이라 본문에 단정 안 함), ECF 60의 「vacatur」 구제 내용(항목 판단에 불필요). TODO는 미래 일정(지방법원 재답변 11-02, 정부 항소 서면 11-09, 구두변론 지정)만 남김 | https://www.courtlistener.com/docket/74908049/feed/ ; https://www.courtlistener.com/docket/74661796/feed/ (지방법원 최신 항목 10-21 #62 46번 신청 moot 확인) |

- TODO 1건 → 1건(문구 축소). 배너 건수 1 유지.
- 검사: `node .claude/skills/kr-verify/scripts/kr-fit.mjs 32 --check` → block 0 · warn 0 · 예외 통과 0.

### 재검토 warn 수정 (2026-10-22, 오케스트레이터)

- 제2항: ECF 61 「reply memorandum」을 「답변서」→「재답변서」로 고쳐 항소심 용어와 구분. https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.61.0.pdf

## 4차 조사 반영 기록 (2026-10-23)

조사 기록: kr-harness/research/32-r4oc.md (opencode GLM 5.3 Flash, 판정 「부분 해결」). 판정을 믿지 않고 지방법원 Atom 피드와 ECF #63 PDF(127 KB, pdftotext)를 직접 열어 대조했다. 항소 피드도 다시 열었다. 언론 보도는 근거로 쓰지 않았다.

| TODO | 결과 | 바뀐 문장 (전 → 후 요약) | 직접 확인한 URL |
|---|---|---|---|
| T1 F-1 소송 이후 진행 (항목 2) | 유지 (문구 갱신) | 이득: 10-16 일정 뒤에 「정부는 10월 22일 두 마감을 10월 30일과 11월 6일로 미뤄 달라고 신청, 이유는 항소 서면 병행 준비, 원고 측은 찬성도 반대도 안 함, 받아들였다는 기록은 아직 없음」 추가. 출처: docket entries에 63 (Oct. 22, 2026), ECF 63 PDF 추가. 비고: 지방 기록 기준일 10-21 → 10-22, 확인일 10-22 → 10-23. TODO: #63까지 확인, 재가 여부·기존 마감 이후 진행·구두변론 지정 재확인으로 고침 | https://www.courtlistener.com/docket/74661796/feed/ ; https://storage.courtlistener.com/recap/gov.uscourts.mad.305059/gov.uscourts.mad.305059.63.0.pdf ; https://www.courtlistener.com/docket/74908049/feed/ |

- ECF #63 원문(Filed 10/22/26, 3쪽): 「Defendants move for the deadline to file motions for summary judgment to be extended to October 30, 2026, and that the deadline for reply memoranda be correspondingly extended to November 6, 2026.」 「Plaintiffs' counsel stated that Plaintiffs take no position on this motion.」 사유: 「Defendants are concurrently preparing their opening appellate brief and appendix in the related First Circuit interlocutory appeal (No. 26-2112), which are due November 9, 2026.」 근거 조항 FRCP 6(b).
- 재가 여부: 지방법원 피드(updated 2026-10-22)의 최신 항목이 #63 「Extension of Time」이고, 그 뒤 명령 항목은 없다. 그래서 「신청했다」까지만 썼다.
- 항소 피드: updated 2026-10-19, 최신 항목은 10-19 「EXPEDITED briefing schedule set. Brief and Appendix due 11/09/2026 …」. 새 항목 없음.
- 쓰지 않은 것: 행정기록 인증(10-23 마감)의 제출 여부(오늘 마감이라 기록 없음은 미제출 단정 근거가 안 됨), 제1순회 달력·CourtListener 구두변론 검색·관보 검색의 부재 결과(부재 확인이라 본문에 단정 안 함), 제1순회 CM/ECF 중단 공지(본문 판단과 무관).
- TODO 1건 → 1건(문구 갱신). 배너 건수 1 유지. 본문 인라인 「TODO」 없음(grep: 배너 1행, 목록 제목 114행뿐).
- 검사: `node .claude/skills/kr-verify/scripts/kr-fit.mjs 32 --check` → block 0 · warn 0 · 예외 통과 0.

## 5차 조사 반영 기록 (2026-10-23)

진행 중인 소송을 다시 확인했다. 원문만 직접 열었다.

| TODO | 결과 | 바뀐 문장 | 직접 확인한 URL |
|---|---|---|---|
| T1 F-1 소송 이후 진행 (항목 2) | 유지 (확인 기록만) | TODO 줄에 「10-23 오후 재확인 때도 새 항목 없음」 추가. 본문 이득·비고는 그대로 | https://www.courtlistener.com/docket/74661796/feed/ ; https://www.courtlistener.com/docket/74908049/feed/ ; https://www.federalregister.gov/api/v1/documents.json ; https://www.ice.gov/sevis |

- 지방법원 피드: updated 2026-10-22. 최신 항목은 #63이다.
- #63 뒤에 명령 항목은 없었다. 연기 신청이 받아들여졌는지는 아직 모른다.
- 항소 피드(26-2112): updated 2026-10-19. 새 항목은 없었다.
- REST API v4 docket-entries는 인증을 요구했다.
- 응답 원문: 「Authentication credentials were not provided.」
- docket HTML 페이지는 919바이트짜리 차단 응답만 왔다.
- 그래서 두 Atom 피드를 근거로 삼았다.
- 연방관보 API로 2026-09-01 이후 문서를 검색했다.
- 검색어는 "duration of status"(DHS)와 "fixed time period of admission"이다.
- 결과 세 건 중 이 규칙을 고치거나 미루는 문서는 없었다.
- 2026-20660 OPT 수수료 제안 규칙(10-08)은 이미 기록한 문서다.
- 2026-20955 EAD 자동연장 폐지 규칙(10-14)은 F-1 기간 규칙과 별개다.
- 2026-18631 60일 유예 폐지 제안 규칙(09-11)도 나왔다.
- 이 규칙은 8 CFR 214.1(l)(2)를 지우자는 제안이다.
- 원문: 「grace period upon cessation of employment」.
- 취업 비자 소지자가 일을 그만둘 때의 유예를 뜻한다.
- F-1 학업 종료 뒤 60일과 다른 조항이라 본문에 넣지 않았다.
- 이 제안의 의견 마감은 2026-11-10이다.
- ICE SEVIS 페이지에는 7-17 최종 규칙 공표 문장만 있었다.
- 법원 명령이나 시행 연기에 관한 새 공지는 없었다.
- TODO 1건 → 1건. 배너 건수 1 유지.
- 검사: `node .claude/skills/kr-verify/scripts/kr-fit.mjs 32 --check` → block 0 · warn 0 · 예외 통과 0.

### 12차 일관성 반영 (2026-10-23)
- 2차 일관성 감사: 1588-9090 창구 이름을 병무청 누리집 표기대로 「병무민원상담」으로 고쳤다(31절과 맞춤).
- 재검토 warn(같은 날): 「상담」 뒤 조사를 「이나」로 고쳤다.

## 19차 조사 반영 기록 (2026-10-23)

진행 중인 F-1 소송을 다시 확인했다. 원문만 직접 열었다.

| TODO | 결과 | 바뀐 문장 | 직접 확인한 URL |
|---|---|---|---|
| T1 F-1 소송 이후 진행 (항목 2) | 유지 (확인 기록만) | TODO 줄 「10-23 오후 재확인」 → 「10-23 오후와 19차 재확인」. 본문 항목은 그대로 | https://www.courtlistener.com/docket/74661796/feed/ ; https://www.courtlistener.com/docket/74908049/feed/ ; https://www.federalregister.gov/api/v1/documents.json ; https://www.ice.gov/sevis |

- 지방법원 피드: updated 2026-10-22다.
- 최신 항목은 「Entry #63」이다.
- 그다음은 10-21 minute entry와 #62다.
- #63 연기 신청에 대한 명령은 아직 없다.
- 항소 피드(26-2112): updated 2026-10-19다.
- 그 뒤 새 항목은 없었다.
- 연방관보 API를 2026-10-20 이후로 검색했다.
- 검색어는 세 가지다.
- "duration of status"(DHS)는 0건이었다.
- "F-1" student도 0건이었다.
- "fixed time period of admission"도 0건이었다.
- ICE SEVIS 페이지에는 기존 문장만 있었다.
- 원문: 「On July 17, 2026, DHS …」로 시작한다.
- 법원 명령이나 시행 연기 공지는 없었다.
- TODO 1건 → 1건. 배너 건수 1 유지.
- 검사: `node .claude/skills/kr-verify/scripts/kr-fit.mjs 32 --check` → block 0 · warn 0 · 예외 통과 0.
- 재검토 warn(같은 날): 내부 회차 표현 「19차」를 「10-23 두 차례 재확인」으로 바꿨다.
