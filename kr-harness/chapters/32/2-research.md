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

## TODO 확인 필요 (조사 단계)

1. 「외국의 대학에서 박사학위를 받은 자의 신고에 관한 규칙」(교육부 훈령 제421호) 원문을 국가법령정보센터 행정규칙에서 직접 확인. 지금은 한국연구재단 페이지의 인용만 썼다.
2. 재외동포청 재외국민등록 안내 페이지(온라인 신청 경로, 영사민원24 등)의 본문 확인. 이번에는 메뉴 JSON만 받아져 법 조문만 썼다.
3. 미국 F-1 소송: 제1순회 항소(26-2112) 이후 진행과 2026-10-09 제출 일정안의 내용. 법원 기록 59번(Brief) 본문은 열지 않았다.
4. 캐나다·영국·호주의 주소 변경 신고 기한(원문도 미확인). 초역 항목 5 비고는 「각국 이민 당국 안내로 확인」으로만 둔다.
5. 국내 채용·진학 기관이 외국 학위 서류에 아포스티유를 요구하는 일반 기준(있다면 출처).
