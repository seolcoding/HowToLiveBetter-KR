# 제12절 한국 실정 적합성 검토
검토일: 2026-10-10 · 검토 대상: kr-harness/runs/R12a-12-styleB/7-refined.md (항목 24개) · 독립 2회차

## 직전 판정 대비

| 항목 | 직전 지적 | 재검토 결과 |
|---|---|---|
| 12-5 | 반환 기산점 일괄 계약일·계약서 별도 숙려기간 누락(block) | 해소. 4개 반환 사유·각 기산점, 각 문서 14/7일과 자문 조건, 두 요건 모두 충족을 구분했다. |
| 12-4 | 명의신탁 세무·실제주주 판례(warn) | 미해소. 미확인 TODO 유지. |
| 12-6 | 신청 서류·처리기한·등기 비용(warn) | 미해소. 미확인 TODO 유지. |
| 12-8 | 판매 방식·면적·정육점 세부(warn) | 미해소. 미확인 TODO 유지. |
| 12-9 | 품목별 날짜·표시 형식·예외(warn) | 미해소. 미확인 TODO 유지. |
| 12-16 | 보험별 대상·신고 기한·보험료(warn) | 미해소. 미확인 TODO 유지. |
| 12-19 | 제품별 안전관리·어린이제품(warn) | 미해소. 미확인 TODO 유지. |
| 12-24 | 국내 대행 사기 공식 사례·허위주문 제재(warn) | 미해소. 미확인 TODO 유지. |

24항 전체를 독립 재독했다. 원문 24항·DOI 10.1287/mnsc.2018.3249와 번호·앵커·한국 제도 전제를 대조했다. 지정 경로 kr-fit --check는 block 0 · warn 0이다. 시작·종료 해시는 동일하다. 제5항 수정 주장은 국가법령정보센터 법률·시행령 XML 전체 해당 조문과 부칙을 이번에 직접 열었다. 나머지 변경 없는 문장의 법령 22종·공식 전화번호·출판사 초록 근거는 재검토 추가 지시에 따라 직전 리뷰의 직접 확인을 인용한다. 이번에 그 출처 전체를 새로 열었다고 주장하지 않는다. 7개 TODO의 구체 판례·서류·비용·기한·품목 조건·보험료·사례는 여전히 미확인이다.

## 항목별 판정
### 12-1. 잃어도 생활이 무너지지 않을 돈만 창업에 쓰세요
- 판정: 적합
- 문제: 상법 제331조의 인수가액 한도, 민법 제830조 특유재산·제832조 일상가사·제406조 채권자취소를 구분했다.
- 근거: 「상법」 제331조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=273629&type=HTML&mobileYn=&efYd=20260910 · 「민법」 제830조·제832조·제406조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=284415&type=HTML&mobileYn=&efYd=20260317 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-2. 회사 대출에 개인 연대보증을 서지 말고 배우자 서명도 따로 확인하세요
- 판정: 적합
- 문제: 민법 제437조의 변제자력·집행 용이성 증명과 상법 제57조제2항의 상행위 보증 연대책임을 확인했다. 근보증 최고액의 서면 특정도 제428조의3과 일치한다.
- 근거: 「민법」 제428조·제428조의2·제428조의3·제437조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=284415&type=HTML&mobileYn=&efYd=20260317 · 「상법」 제57조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=273629&type=HTML&mobileYn=&efYd=20260910 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-3. 개인사업·조합과 주식회사의 책임 차이부터 확인하세요
- 판정: 적합
- 문제: 상법 제212조의 회사재산 부족 시 사원 연대책임과 제331조 주주 책임을 구분했다. 설립·회계 비용은 견적으로 안내해 미확인 가격을 만들지 않았다.
- 근거: 「상법」 제212조·제331조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=273629&type=HTML&mobileYn=&efYd=20260910 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-4. 남의 주식이나 사업을 이름만 빌려 등록하지 마세요
- 판정: 수정 권장(warn)
- 문제: 주주 유한책임과 실제 서명한 보증채무를 구분한다. 명의신탁 세무·판례는 미확인 TODO로 공개되어 있다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「상법」 제331조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=273629&type=HTML&mobileYn=&efYd=20260910 · 「민법」 제428조·제428조의2 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=284415&type=HTML&mobileYn=&efYd=20260317 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-5. 가맹계약 전에 등록 정보공개서를 받고 숙려기간을 지키세요
- 판정: 적합
- 문제: “두 문서의 기간을 각각 충족해야 합니다”, “법정 사업 중단일부터 4개월 내 요구하세요”로 직전 block을 해소했다. 정보공개서등 미제공·법정 제공방법·예정지 미확정 예외와 최초 예치 합의일을 함께 안내한다. 제11조 위반을 제10조제1항제1호의 반환 사유라고 넓히지 않았다. 반환 협의·분쟁조정·소송의 시간과 비용도 남아 있다.
- 근거(이번 직접 열람): https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=288583&type=XML&efYd=20261002 — 기본정보 법령ID 009367, 공포 20260804 제21857호, 시행 20261002. 제7·9·10·11조 조문시행일자 20261002. 제21857호 부칙의 개정은 제44조 기관명이고, 제19614호 부칙은 제11조제1항 공포 후 3개월 시행·당시 제공 후 14일 미경과에도 적용하므로 현재 숙려기간을 미래 시행 조문으로 오인하지 않는다.
- 확인한 원문: 제7조제1항 “등록 또는 변경등록한 정보공개서”, 제공시점 객관 확인 방법. 제2항 인근 10개(해당 광역지자체 내 10개 미만이면 전체) 현황문서 및 예정지 미확정이면 “확정되는 즉시”. 제3항 정보공개서등 미제공 또는 제공일부터 “14일”, 정보공개서에 변호사·가맹거래사 자문 시 “7일”; 수령·계약 모두 금지, 예치는 최초 예치일 또는 최초 예치 합의일. 제11조제1항은 계약내용 기재 문서 제공일부터 별도 “14일”, 계약서 내용에 해당 전문가 자문 시 “7일”, 역시 수령·계약 모두 금지다. 한 문서 자문만으로 다른 문서 기간까지 줄인다고 쓰지 않는다.
- 확인한 원문: 제10조제1항제1호 제7조제3항 위반은 “계약 체결 전 또는 ... 체결일부터 4개월”; 제2호 제9조제1항 위반은 가맹희망자가 계약 전 요구; 제3호 같은 위반이 계약 체결에 “중대한 영향을 준 것으로 인정”되어 가맹점사업자가 계약 체결일부터 4개월 내 요구; 제4호 정당한 사유 없는 일방 중단은 “가맹사업의 중단일부터 4개월”. 공통은 대통령령 사항 적은 서면 요구일부터 “1개월 이내”. 제2항 반환액은 체결경위·대가 성격·계약기간·계약이행기간·귀책정도 고려로 전액 자동반환이 아니다.
- 근거(이번 직접 열람): https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=288453&type=XML&efYd=20260804 — 법령ID 009369, 공포 20260804 제36561호, 기본 시행 20260804. 제10·11조 조문시행일자 20260804. 기본정보·제36561호 부칙 제1조의 20280101 부분유예는 제5조의6제2항제2호·제9조제4항(통합특별시·광역시 개정부분 제외)·제36조의3제2항제2호의2 및 별표1·1의2이다. 인용 반환요구·중단일 조문에는 해당하지 않는다.
- 확인한 원문: 시행령 제10조 서면 사항은 주소·성명, 허위·과장·누락 사실, 계약체결에 중대한 영향이 인정되는 사실, 정당한 이유 없는 일방 중단 사실·일자, 반환 가맹금 금액, 정보공개서 미제공 또는 14/7일 미경과 수령·체결 사실과 날짜다. 본문은 법정 사항을 적으라 안내하고 해당 위반 사실·금액·날짜를 요약한다. 제11조제1호 중단 통지는 “가맹점사업자에게 도달된 날”. 제2호는 사전 통지 없이 사업에 중대한 영향을 미치는 거래 10일 이상 중단, 서면으로 거래재개일 정해 요청, 본부가 불응해야 하며 기산일은 “위 서면으로 정한 거래재개일”이다. 본문이 이 조건과 날짜를 보존한다.

### 12-6. 상호·주소·업종을 정하고 사업자등록과 법인등기를 구분하세요
- 판정: 수정 권장(warn)
- 문제: 부가가치세법 제8조 사업 개시일부터 20일 이내와 개시 전 신청을 확인했다. 상법 제317조 법인등기와 구분한다. 서류·처리기한·등기 비용은 미확인 TODO다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「부가가치세법」 제8조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=276117&type=HTML&mobileYn=&efYd=20260102 · 「상법」 제317조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=273629&type=HTML&mobileYn=&efYd=20260910 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-7. 영업 허가·등록·신고가 필요한 업종은 절차를 마친 뒤 시작하세요
- 판정: 적합
- 문제: 식품위생법 제37조 허가·신고·등록 및 제97조 3년/3천만원, 제95조 등록 누락, 제94조 허가 누락을 확인했다.
- 근거: 「식품위생법」 제37조·제94조·제95조·제97조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285339&type=HTML&mobileYn=&efYd=20261008 · 「식품위생법 시행령」 제21조·제25조·제26조의2 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=288767&type=HTML&mobileYn=&efYd=20260818 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-8. 음식점·식품 제조·포장식품 판매·정육점의 절차를 각각 확인하세요
- 판정: 수정 권장(warn)
- 문제: 시행령 제25조 음식점·즉석판매 신고와 제26조의2 제조·가공 등록, 축산물법 제22·24조 별도 절차를 확인했다. 시행령 제25조제2항·제26조의2제2항 예외가 있어 실제 업종·판매 방식 확인을 유지해야 한다. 정육점 시설·면적별 세부 요건은 미확인 TODO다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「식품위생법」 제37조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285339&type=HTML&mobileYn=&efYd=20261008 · 「식품위생법 시행령」 제21조·제25조·제26조의2 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=288767&type=HTML&mobileYn=&efYd=20260818 · 「축산물 위생관리법」 제7조·제22조·제24조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285351&type=HTML&mobileYn=&efYd=20261008 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-9. 포장식품 표시를 제품별로 확인하고 소비기한을 빠뜨리지 마세요
- 판정: 수정 권장(warn)
- 문제: 표시광고법 제4조의 제조연월일·소비기한 또는 품질유지기한 구분과 제28조 3년/3천만원을 확인했다. 전 품목 날짜 동시 표시로 단정하지 않는다. 하위 규정 예외·표시 형식은 미확인 TODO다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「식품 등의 표시ㆍ광고에 관한 법률」 제4조·제28조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=269957&type=HTML&mobileYn=&efYd=20250919 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-10. 일반 식품 광고에 질병 예방·치료 효과를 붙이지 마세요
- 판정: 적합
- 문제: 표시광고법 제8조제1항제1~3호와 제26조제1항의 10년/1억원 및 병과를 확인했다.
- 근거: 「식품 등의 표시ㆍ광고에 관한 법률」 제8조·제26조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=269957&type=HTML&mobileYn=&efYd=20250919 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-11. 상한 식품·유해 원료·기준 초과 식품을 판매하지 마세요
- 판정: 적합
- 문제: 식품위생법 제4조·제7조제4항과 제94조 10년/1억원, 제95조 5년/5천만원 및 병과를 확인했다. 피해 발생·판매액이 공통 범죄 성립 조건이라고 쓰지 않았다.
- 근거: 「식품위생법」 제4조·제7조·제94조·제95조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285339&type=HTML&mobileYn=&efYd=20261008 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-12. 매출이 없어도 신고할 세목과 기한을 확인하세요
- 판정: 적합
- 문제: 소득세법 제70조 5월1~31일·결손 포함, 법인세법 제60조 원칙 3개월·무소득 포함, 국세기본법 무신고·납부지연 가산세를 확인했다. 원칙이라는 한정이 있어 성실신고확인 예외(개인 6월30일·법인 4개월)와 모순되지 않는다.
- 근거: 「부가가치세법」 제48조·제49조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=276117&type=HTML&mobileYn=&efYd=20260102 · 「소득세법」 제70조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=280405&type=HTML&mobileYn=&efYd=20260701 · 「법인세법」 제60조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=280349&type=HTML&mobileYn=&efYd=20260701 · 「국세기본법」 제47조의2·제47조의4 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=289999&type=HTML&mobileYn=&efYd=20261002 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-13. 세금계산서는 실제 거래대로 발급하고 간이과세 요건을 확인하세요
- 판정: 적합
- 문제: 시행령 제109조제1항 원문 “1억4백만원”, 부가가치세법 제69조 “4천800만원 미만”과 제3항 12개월 환산을 확인했다. 제외 업종·특별 기준 및 신고와 납부면제를 구분한다. 조세범처벌법 제10조 실제 공급 없는 증빙 처벌을 확인했다.
- 근거: 「부가가치세법」 제32조·제61조·제69조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=276117&type=HTML&mobileYn=&efYd=20260102 · 「부가가치세법 시행령」 제109조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=283641&type=HTML&mobileYn=&efYd=20260401 · 「조세범 처벌법」 제10조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=224875&type=HTML&mobileYn=&efYd=20210101 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-14. 세무서 사칭 연락은 끊고 국세청 대표 번호로 다시 확인하세요
- 판정: 적합
- 문제: 국세청 첫 화면 “국세상담센터 (유료)”, “국번없이 126”을 직접 확인했다. 경찰청 공식 화면 “1394 또는 112로 즉시 신고”도 확인했다.
- 근거: 국세청 공식 누리집 https://www.nts.go.kr · 경찰청 피싱안심SOS https://www.counterscam112.go.kr — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-15. 계약금·해약금·위약금의 뜻과 외상 결제 조건을 적어두세요
- 판정: 적합
- 문제: 민법 제565조의 다른 약정 없음·일방 이행착수 전·교부자 포기/수령자 배액, 제398조 부당 과다 배상액 감액을 확인했다. 분쟁의 시간·인지대·송달료·대리비용을 명시한다.
- 근거: 「민법」 제565조·제398조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=284415&type=HTML&mobileYn=&efYd=20260317 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-16. 직원을 채용할 때 근로조건을 서면으로 주고 보험 가입을 확인하세요
- 판정: 수정 권장(warn)
- 문제: 근로기준법 제17조 계약 체결 때 조건 명시·서면교부, 제114조 500만원 이하 벌금을 확인했다. 건강보험법 제6조 가입 예외·제8조 자격취득도 확인했다. 보험별 대상·신고 기한·보험료는 미확인 TODO로 남겼다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「근로기준법」 제17조·제114조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285279&type=HTML&mobileYn=&efYd=20261008 · 「국민건강보험법」 제6조·제8조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285273&type=HTML&mobileYn=&efYd=20261008 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-17. 임금은 약속과 법에 맞춰 지급하고 인상·상여·대여금도 기록하세요
- 판정: 적합
- 문제: 근로기준법 제43조 통화·직접·전액·매월1회 원칙과 제48조 임금명세서 교부를 확인했다. 예외·적용 사업장 확인을 안내한다. 경험 권고 C를 유지한다.
- 근거: 「근로기준법」 제17조·제43조·제48조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285279&type=HTML&mobileYn=&efYd=20261008 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-18. 먼저 작은 주문과 시장 반응을 확인한 뒤 생산에 돈을 쓰세요
- 판정: 적합
- 문제: 출판사 초록 “116 Italian startups”, “about one year”, “perform better”, “more likely to pivot”, “not more likely to drop out”을 직접 확인했다. 이탈리아 연구 한 건을 한국 효과량으로 바꾸지 않는다. 원문 DOI가 동일하다.
- 근거: Camuffo A, Cordova A, Gambardella A, Spina C (2020). A Scientific Approach to Entrepreneurial Decision Making: Evidence from a Randomized Control Trial. Management Science 66(2):564-586. https://doi.org/10.1287/mnsc.2018.3249 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-19. 샘플을 만들면 양산 비용·재고·인증부터 계산하세요
- 판정: 수정 권장(warn)
- 문제: 전기용품 및 생활용품 안전관리법 제5조 안전인증·제15조 안전확인 신고·제23조 공급자적합성확인의 서로 다른 체계를 확인했다. 품목·예외·어린이제품은 미확인 TODO다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「전기용품 및 생활용품 안전관리법」 제5조·제15조·제23조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=276591&type=HTML&mobileYn=&efYd=20251001 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-20. 매입마다 거래 증빙과 공급자 정보를 남기고 수상한 저가품은 받지 마세요
- 판정: 적합
- 문제: 상표법 제108조 침해행위·제109조 손해배상·제230조 7년/1억원을 확인했다. 직원 매입만으로 사장 형사책임을 단정하거나 영수증만으로 일률 면책하지 않는다.
- 근거: 「상표법」 제108조·제109조·제114조·제230조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=279819&type=HTML&mobileYn=&efYd=20251111 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-21. 상품과 홍보 이미지에는 직접 만든 자료나 허가받은 자료를 쓰세요
- 판정: 적합
- 문제: 저작권법 제16조·제22조·제46조와 제136조제1항 7년/1억원·병과를 확인했다. 21336호 부칙은 원칙 공포 후6개월, 일부 조문만3개월이다. 제136조는 2026-08-11 시행이 맞다.
- 근거: 「저작권법」 제16조·제22조·제46조·제136조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=283335&type=HTML&mobileYn=&efYd=20260811 · 「상표법」 제108조·제230조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=279819&type=HTML&mobileYn=&efYd=20251111 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-22. 업무는 권한과 절차에 맞게 하고 긴급구조 예외도 확인하세요
- 판정: 적합
- 문제: 간호법 제12조 지도하 진료보조·업무범위와 응급의료법 제5조의2의 생명이 위급한 환자·고의/중과실 없음·구조자 유형·업무 밖 조건을 확인했다. 민사·상해형사 면제와 사망형사 감면을 구분한다. 조사·자료제출·법률비용은 별도라고 설명한다.
- 근거: 「간호법」 제12조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=283885&type=HTML&mobileYn=&efYd=20260911 · 「응급의료에 관한 법률」 제5조의2 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=280429&type=HTML&mobileYn=&efYd=20260624 · 「민법」 제750조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=284415&type=HTML&mobileYn=&efYd=20260317 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-23. 손실이 나면 폐업·청산·회생·파산을 구분해 정리하세요
- 판정: 적합
- 문제: 상법 제517조·제535조 해산·채권자 공고, 채무자회생법 제305·306조 지급불능·법인채무초과 및 제564·566조 면책 불허가/비면책을 확인했다. 폐업신고가 면책이라고 쓰지 않는다. 시간·전문가 비용을 비용 칸에 적었다.
- 근거: 「상법」 제517조·제535조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=273629&type=HTML&mobileYn=&efYd=20260910 · 「채무자 회생 및 파산에 관한 법률」 제305조·제306조·제564조·제566조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=290631&type=HTML&mobileYn=&efYd=20261002 · 「부가가치세법」 제8조·제49조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=276117&type=HTML&mobileYn=&efYd=20260102 — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

### 12-24. 쇼핑몰 운영 대행·창업 교육에 돈 내기 전에 추가 비용과 환불 조건을 받으세요
- 판정: 수정 권장(warn)
- 문제: 민법 제110조 사기 취소·제141조 효과·제146조 추인 가능일부터3년/행위일부터10년과 형법 제347조를 확인했다. 협의·소송·집행·상대 재산에 따른 회수 한계와 인지대·송달료·변호사비용·시간을 명시한다. 국내 대행 사기 사례와 허위주문 제재는 미확인 TODO다.
- 수정안: 본문이 미확인 숫자·세부 규칙을 단정하지 않아 block은 아니다. 해당 TODO를 유지하고 실제 실행 전 담당 기관·원문 규정으로 세부 요건을 확인하세요.
- 근거: 「민법」 제110조·제141조·제146조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=284415&type=HTML&mobileYn=&efYd=20260317 · 「형법」 제347조 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=290185&type=HTML&mobileYn=&efYd=20261002 · 경찰청 피싱안심SOS https://www.counterscam112.go.kr — 직전 리뷰(kr-fit-review.r1.md)에서 직접 확인, 해당 문장 변경 없음. 이번 재검토는 그 확인을 인용한다.

## 요약
- block 0건, warn 7건, 삭제 권고 0건. 제5항 직전 block 해소, 새 block 없음.
- 미확인: 제4항 명의신탁 세무·실제주주 판례; 제6항 등록 서류·처리기한·등기 세금/수수료; 제8항 판매 방식·면적·정육점 신고 세부; 제9항 품목별 날짜·글씨·예외; 제16항 4대보험 상세 대상·기한·부담률; 제19항 품목별 안전관리·어린이제품; 제24항 국내 공식 대행 사기 사례·허위주문 제재. 각각 정직한 TODO이며 해당 세부 규칙을 승인하지 않는다.
- 이번 법률·시행령 직접 접근 성공. 변경 없는 출처는 직전 확인 인용. 기계 검사 block 0/warn 0과 내용 warn 7건은 서로 다른 결과다.
KR-FIT: pass blockers=0 sha256=518486ad15b0154db7b4445518b7c4345e4153a61f913e678ad07ca5710b1ec4
