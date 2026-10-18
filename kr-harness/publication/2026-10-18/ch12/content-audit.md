# 제12절 독립 출판 초기 내용 감사

작성 UTC: 2026-10-18T13:27:27.984990+00:00

검토대상: source.md · SHA256 `01aa7401bf3d69e2186f55d4299a23ff488c06dcfb8a77637976717829c20b2d`

manifest SHA256 `b22958233d04899130138fdfda4fab7ed9a7bccb29cb4350f91090a1c7d1217b` · 전24항/스냅샷24개대조

상태: **pending_candidate_review**. 현재후보와editorial제안이없어필드편집승인을하지않았다. 초기원자료감사이며정식KR-FIT/최종편집승인/출판허가가아니다.

AGENTS.md·CLAUDE.md·KR-GUIDE.md·publication/CONTRACT.md 및kr-fit-review/humanize-kr규칙을적용했다. 한국독자가행동할조건과예외를보존하며쉽게2~4문장120자목표보다법적조건보존을우선한다. 원문/순수윤문/README/기존감사/git수정없음.

## 전체 범위

제18항만연구근거이며나머지는법·제도/경험조언이다. 법령조문·벌칙·기간과각조문부칙을대조했다. C등급17/19의경험제안을연구효과나법정의무처럼승격하지않는다. 상법331의주주유한책임과과점주주납세/별도보증/이사책임은각각다른제도다. 중국제도를그대로적용한수치는발견하지못했지만중국원문변경설명이여러비고에반복돼독자용문체로는축약권장.

기계검사(읽기전용): `node .claude/skills/kr-verify/scripts/kr-fit.mjs kr-harness/publication/2026-10-18/ch12/source.md --check` exit0, block0/warn0. 이는최종후보내용승인이나새해시KR-FIT를대신하지않는다.

## 항목별 판정과 확인 범위

### 1. clarify

- 원문검토범위: 상법331·민법830/832/406

- 확인/문제: 주주의 회사채무 책임한도와 별도보증을 구분한 점은 맞다. “집 재산”은 배우자·가족 전재산을 뜻하지 않게 개인재산으로 분명히 한다. 사업예산 제한은 직접 정량근거가 없는 저자 권고.

- 수정·유지요건(쉽게, 비고): 개인보증 범위·특유재산·일상가사·채권자취소 요건 유지. 중국 원문 설명을 메타서술로 길게 반복하지 말고 한국 독자 행동 중심으로 정리.

- 스냅샷: `_workspace/2026-10-18-001-15f0/entry_snapshot.md` · SHA256 `f808981d2fee2fc549a304717e0a1476d4b71cb7a11594f63633b0232ad66092`.

### 2. checked_primary

- 원문검토범위: 민법428·428의2·428의3·437,상법57

- 확인/문제: 일반보증의 최고·검색 항변과 연대보증 배제,상행위보증의 연대책임,근보증최고액서면확인은 원문 부합. 연대보증은 회사에 먼저 재판/강제집행한 뒤에만 요구할 수 있는 책임이 아니다.

- 수정·유지요건(쉽게, 이득): 보증인기명날인/서명서면 요건·전자적표시무효·최고액 미특정근보증무효를 추가할 경우 각각 예외와 조문을 보존. 배우자 서명이 없는 부부책임을 자동 전제하지 말 것.

- 스냅샷: `_workspace/2026-10-18-002-78f0/entry_snapshot.md` · SHA256 `34f5a2b48355b6f1d309f2b899710aa169c239478a1545666ddc4f4bb750c432`.

### 3. clarify

- 원문검토범위: 상법212·331

- 확인/문제: 합명회사사원연대책임·주식인수가액한도는 확인. 제목의 민법상조합은 이득에서 구체조문/책임을 설명하지 않는다. 합명회사와 민법조합을 같은 제도로 읽히게 해서는 안 된다.

- 수정·유지요건(title, 이득, 비고): 조합책임까지 조언하려면 민법 조합 조문/판례 추가검증. 주주/이사/보증인 지위차이 유지. 중국5년출자 문장은 한국행동에필요한지 검토.

- 스냅샷: `_workspace/2026-10-18-003-41f9/entry_snapshot.md` · SHA256 `461192aeb07998d80246abf2a5c3017bfba450719066089f350bfc866d8e6de9`.

### 4. needs_revision

- 원문검토범위: 상법331·민법428/428의2;추가검증상증법45의2·국세기본법39

- 확인/문제: “명의주주로 이름만 올린다고 보증이나 임원책임을 피할 수 없다”는 주주명부등재만으로 보증/임원책임이 생긴다는 오독을 낳는다. 명의신탁세무를 TODO로만 남겼지만 확인 가능한 현행 원문이 있다.

- 수정·유지요건(쉽게, 이득, 비고, 출처): 명의주주와 보증서명/임원취임의 별도요건을 분리. 명의신탁재산증여의제는 실제소유자/명의자불일치 및 조세회피목적없는예외 등 조건을 적어 보강가능. 과점주주2차납세는 법인재산부족·50%초과/경영지배·실질권리행사분 한도 등 요건부로만 설명. 이름만 있으면 전부 개인빚이라는 단정 금지.

- 스냅샷: `_workspace/2026-10-18-004-b264/entry_snapshot.md` · SHA256 `65f2079d585d4a3c79fc9bb137ae11ffedfa5c61409d8dccd5f66c41a6cd3507`.

### 5. needs_revision

- 원문검토범위: 가맹법3·6의2·7·9·10·11,시행령5·10·11

- 확인/문제: 정보공개서/계약서각14일·전문가자문7일,계약전/계약후4개월사유구분,중단일서면재개요청,1개월내반환은 원문대조했다. 그러나 소규모가맹본부 적용배제(3①)때 모든거래적용예외(3②)에는7은있지만11이없다. 계약서숙려를모든가맹거래에일률단정하면틀린다.

- 수정·유지요건(쉽게, 이득, 비고, 출처): “계약서숙려는 법적용대상인 경우”라는 유보와 소규모예외를 짧게반영. 법3/시행령5출처보강. 정보공개서숙려는 모든가맹거래적용임을구분. 14/7·각기산일·예치최초일/합의일·4개월·1개월·반환액비례조건·분쟁비용을축약중지우지말것. 11의기간위반만으로10①1의자동반환사유라고추가하지말것.

- 스냅샷: `_workspace/2026-10-18-005-2f70/entry_snapshot.md` · SHA256 `342609bc24aad038786b6ae10496c5589073822ca694010dde749940eadd1de3`.

### 6. checked_primary

- 원문검토범위: 부가가치세8,상법317

- 확인/문제: 사업개시일부터20일내/사전신청 가능,법인등기와사업자등록/영업허가별개는원문부합. 모든법인의설립절차를주식회사317만으로설명하지말것.

- 수정·유지요건(이득, 비고): 법인종류에따른등기차이를유보.20일기산점유지. 신청서류/처리기한/수수료TODO는실무안내추가검증여지이나등록자체무료와법인설립비용을혼동금지.

- 스냅샷: `_workspace/2026-10-18-006-1ccb/entry_snapshot.md` · SHA256 `f2f87d804c97d693ca37e703aea69a2415f1e51b15025c889d5f895365c1fe2d`.

### 7. checked_primary

- 원문검토범위: 식품위생37·94·95·97,시행령21·25·26의2

- 확인/문제: 무신고음식점3년/3천만원,무등록식품제조5년/5천만원체계가일치한다. 허가영업94는10년/1억원체계. 모든음식/제조활동이동일의무라는뜻은아니다.

- 수정·유지요건(쉽게, 이득): 필요한허가/등록/신고대상이라는조건유지. 제조/판매/주류/식품종류별법령차이를지우지말것.시행령의적용제외/단순가공예외를무시한무조건불법단정금지.

- 스냅샷: `_workspace/2026-10-18-007-d288/entry_snapshot.md` · SHA256 `13d4b1c349772610068b1e4bce9649e4eedc04ddd3d5b4f93db1615e0fcf5cf4`.

### 8. clarify

- 원문검토범위: 식품위생37,시행령21·25·26의2,축산물위생7·22·24

- 확인/문제: 제조등록/즉석·일반·휴게신고와포장판매규모/방식별차이확인. 축산물현행법도ID대체조회로원문확보했다.

- 수정·유지요건(쉽게, 이득, 비고): 단순포장식품소매가항상신고대상이라거나정육점이일반식품법허가라고쓰지말것. 축산물제21①6~8대상은24신고,도축/가공/포장/보관은22허가라는구분보강가능. 구체면적·시설/교육·신고예외는하위규정추가확인필요.

- 스냅샷: `_workspace/2026-10-18-008-ad12/entry_snapshot.md` · SHA256 `bf06f8446758410a2c32b569810a443984d1c218d35f18124082e3ed605b9df5`.

### 9. clarify

- 원문검토범위: 식품표시광고4·28

- 확인/문제: 표시기본항목,제품별제조연월일/소비기한/품질유지기한선택,표시위반일반식품3년/3천만원확인. 법4①단서는일부만표시할수있는예외도둔다.

- 수정·유지요건(title, 쉽게, 이득, 비고): 제목“소비기한을빠뜨리지마세요”를모든제품의무로읽히지않게“해당제품의날짜표시”등범위유보. 일반식품벌칙과건강기능식품차이유지. 글씨크기/표시예외/산출기준은추가공식고시검토필요.

- 스냅샷: `_workspace/2026-10-18-009-cc53/entry_snapshot.md` · SHA256 `a22164c85d93bef2ec1ea94d958aeb61671d52bab3633abf97da0299ccfad3dc`.

### 10. checked_primary

- 원문검토범위: 식품표시광고8①1~3·26

- 확인/문제: 질병예방치료/의약품오인/일반식품의건기식오인광고는10년/1억원·병과가능으로확인. 광고내용1~3호에한정된벌칙임.

- 수정·유지요건(이득, 비고): 모든과장광고가10년이라는일반화금지. 반복범행가중은별도. 포장/상세/방송매체범위와사전검토권고를보존.

- 스냅샷: `_workspace/2026-10-18-010-b31e/entry_snapshot.md` · SHA256 `f6f28a43a895e1943542f0d94fbf4202327390d8bde9326ede5f0850d0b9cad6`.

### 11. clarify

- 원문검토범위: 식품위생4·7④·93~95

- 확인/문제: 위해식품10년/1억원·기준규격위반5년/5천만원·병과체계확인.94①1은93①/③해당사건을명시제외한다.

- 수정·유지요건(이득, 비고): “일반적으로94조가적용되며특정원료/감염동물등에는별도중한처벌이있다”등조건유보. 재범만예외인듯쓰지말것. 기준규격의7④범위와건강해칠우려요건유지.

- 스냅샷: `_workspace/2026-10-18-011-65a7/entry_snapshot.md` · SHA256 `7832cc8c064ed77c18ad16f31c1aab6b0a6528dc73635e61d9351357ab48ead2`.

### 12. clarify

- 원문검토범위: 부가가치세48·49,소득세70,법인세60,국세기본47의2/47의4

- 확인/문제: 종소세다음해5.1~5.31·결손/과표없는거주자범위,내국법인종료달말일부터원칙3개월확인. 법인성실신고확인서4개월·감사미종결연장조건이있다. 부가세예정신고/고지유형차이도있다.

- 수정·유지요건(이득, 비고): “원칙”·본인유형유보를유지하고법인범위명시. 부가세신고를모든사업자에매달/분기일률의무로쓰지말것. 개인무소득전체의신고의무/면제와특례는별도구분. 직접개인/법인신고실무전체검증완료는아님.

- 스냅샷: `_workspace/2026-10-18-012-356b/entry_snapshot.md` · SHA256 `f9869494a5e3b0b204aeb29c080cceb9050168cddcffbbe961a34f611d3da94a`.

### 13. checked_primary

- 원문검토범위: 부가가치세61·69,시행령109,조세범10③

- 확인/문제: 간이과세직전년공급대가1억400만원미만,납부면제해당과세기간4800만원미만,12개월환산·제외업종,허위계산서처벌원문확인.

- 수정·유지요건(이득, 비고): 간이과세는개인사업자라는대상과부동산임대/유흥장소등별도기준/복수사업장합산조건을필요시보강.69①추가납부세액예외도있으므로모든세금면제로쓰지말것. 신고·증빙별도의무보존.

- 스냅샷: `_workspace/2026-10-18-013-f11d/entry_snapshot.md` · SHA256 `4262cde6a08cf1cafcebda12b35fa690b276dd8ce592ace16e4932125a0cfb37`.

### 14. checked_primary

- 원문검토범위: 국세청홈페이지·경찰피싱안심SOS

- 확인/문제: 국세청새조회본문에서“국세상담센터(유료) ... 국번없이126”을직접확인. 홈택스/관할서확인과연락중단은합리적대응이다. 경찰사이트도열었으나홈화면만으로은행/112대응의모든세부절차를검증한것은아니다.

- 수정·유지요건(쉽게, 비고): 126유료·모든세무서전화가사기아님조건유지. 사이트주소를사용자가직접입력한다는취지유지. 공식사기신고세부절차는별도페이지검증필요.

- 스냅샷: `_workspace/2026-10-18-014-e205/entry_snapshot.md` · SHA256 `783bdb8fecb044d6c3331b4b90089a75132d1a5622b4905d62014c7921dd7a26`.

### 15. clarify

- 원문검토범위: 민법565·398

- 확인/문제: 다른약정없음/계약금교부/일방이행착수전포기·배액상환,부당과다예정손해배상감액원문확인.

- 수정·유지요건(쉽게, 이득): 쉽게의“조건있음”만으로끝내지말고“다른약정이없고어느쪽도이행에착수하기전”핵심조건을담는것권장. 매매/유상계약준용범위와위약금/위약벌을혼동하지말것. 소송비용설명유지.

- 스냅샷: `_workspace/2026-10-18-015-d68b/entry_snapshot.md` · SHA256 `d8a3063dc5b2627df2525643b16c2656130a61c9f401461009d8fc3e3476fe3c`.

### 16. needs_revision

- 원문검토범위: 근로기준17·114·11,건강보험6·8②

- 확인/문제: 체결/변경때근로조건명시·주요조건서면/전자문서교부·위반500만원확인. 건강보험법8②는자격취득일부터14일내신고를직접규정한다. 현재TODO가확인가능한기한까지미확인으로묶는다.

- 수정·유지요건(이득, 비고, 출처): 건강보험14일은조건부로보강가능,다른보험기한/보험료까지확인됐다고표시금지. 초단시간/단기근로등직장가입제외와근로기준사업장적용범위를유보. 5인미만도임금/계약서일체면제라는오독금지.114조2026개정의12월시행조항을10월현행으로섞지말것.

- 스냅샷: `_workspace/2026-10-18-016-f040/entry_snapshot.md` · SHA256 `1f99345d8124aff13b00536aee0ff69b6eb9d82461fdafacc02e4ae2e8a17be5`.

### 17. checked_primary

- 원문검토범위: 근로기준17·43·48

- 확인/문제: 통화/직접/전액/매월1회이상정기지급·법령/단체협약예외·지급시임금명세교부확인. 임시임금/수당등정기지급예외도조문에있다.

- 수정·유지요건(이득, 비고): 기록권고의C등급과법정의무를구분. 개인대여금과임금장부분리효과를정량연구처럼확정금지. 사업장/가산수당범위유보유지.

- 스냅샷: `_workspace/2026-10-18-017-912d/entry_snapshot.md` · SHA256 `660be8a4867bd1975f2c82ead408f8200b766c0d8517a4282289dd02cb9556ac`.

### 18. needs_revision

- 원문검토범위: Camuffo2020 DOI10.1287/mnsc.2018.3249 출판사초록+Crossref저자초록

- 확인/문제: 116이탈리아스타트업·약1년/16시점RCT,성과향상·전환가능성증가·초기중단증가없음은초록과부합. 양군모두시장피드백일반교육10회,처치군에만가설/엄격검증훈련이다. 선주문/작은주문자체의독립효과실험이아니다.

- 수정·유지요건(쉽게, 이득, 비고): 선주문방식은저자적용제안으로분리. 가설검증훈련개입의결과만B근거로연결. 잘못된프로젝트투자확률감소는이론과일치하는해석이라는유보유지. 한국성공률/생존율/수익효과량추가금지. 전문표/분석은초록확인과구분.

- 스냅샷: `_workspace/2026-10-18-018-46be/entry_snapshot.md` · SHA256 `4ba20a4222b092d5bb151aafb779f3c696b4cbb25588ac991bd600a6277406d3`.

### 19. clarify

- 원문검토범위: 전기생활용품안전법5·15·23

- 확인/문제: 안전인증/안전확인신고/공급자적합성확인구분원문대조. 모델/제조·수입주체·각단계의시험/신고차이가있다.

- 수정·유지요건(쉽게, 이득, 비고): 모든제품KC하나/신고하나로정리금지. 품목별대상·예외·어린이제품법검증은남음. 양산/재고장부는C등급경험제안이고법정인증제도는그원문범위로한정.

- 스냅샷: `_workspace/2026-10-18-019-ad2c/entry_snapshot.md` · SHA256 `fc6c6b36380bb554cb46cde26b7dae345a531c71126ee5143a5ca5436eca53a4`.

### 20. checked_primary

- 원문검토범위: 상표108·109·114·230

- 확인/문제: 형사7년/1억원과민사고의/과실요건확인.114는소송에서의서류제출명령이고영수증자동면책근거가아니다.

- 수정·유지요건(쉽게, 이득, 비고): 출처서류확보는사실설명과손해계산도움이며모든민형사책임면제아님유지. 위조품이라는사실만으로무과실형사처벌인듯단정금지. 직원행위/양벌요건추가시별도조문확인.

- 스냅샷: `_workspace/2026-10-18-020-1a66/entry_snapshot.md` · SHA256 `0c5d5c24e9724a86a36068b8ecbef6e349c49173e3a80289f48026a58116c3a7`.

### 21. checked_primary

- 원문검토범위: 저작권16·22·46·136,상표108·230

- 확인/문제: 저작재산권침해7년/1억원·병과는2026.2.10법21336개정6개월경과(8.11시행)확인. 옛5년상한으로되돌리면오류다.

- 수정·유지요건(title, 이득, 비고): 저작권보호기간/인용/공정이용등법정허용도있으므로직접제작/허락만이합법이라는배타적표현은피할것.136①권리/방법범위유지.10.29예정개정을현재로쓰지말것.

- 스냅샷: `_workspace/2026-10-18-021-661b/entry_snapshot.md` · SHA256 `b23da91979e90759617516d314708466c6d1ad3b5ed4508e4fb53fe7f420fc7b`.

### 22. needs_revision

- 원문검토범위: 간호12,응급의료5의2,민법750

- 확인/문제: 간호업무와응급면책이별개이며민사/상해형사면제·사망형사감면을구분한점맞음. 본문에서면책출발요건인“생명이위급한응급환자”가명확하지않다.

- 수정·유지요건(이득, 비고): 생명이위급한환자·고의/중과실없음·구조자유형/업무중아님및면허자격범위를보강. 업무중전문구조자는같은면책이라고일반화금지. 조사/대응비용별개유지.

- 스냅샷: `_workspace/2026-10-18-022-18b4/entry_snapshot.md` · SHA256 `0b42c2ff70b134497a9503c206a0f1939c7f80c5cffaa80123c3468dd8414b5b`.

### 23. clarify

- 원문검토범위: 상법517·535,채무자회생305·306·564·566,부가세8·49

- 확인/문제: 해산/청산·지급불능파산·법인채무초과·개인면책별개원문확인. 법인채무초과는존립중합명/합자회사제외. 세금/임금등비면책은566에명시.

- 수정·유지요건(이득, 비고): 폐업세신고를TODO안내만두지말고폐업일속한달의다음달25일까지(49①)확인분보강가능. 파산=전채무소멸금지,세금/임금/고의불법행위손해등예외간단히명시권장. 청산채권신고기간/공지등세부는실제법인유형별확인. 비용·기간미확인과원문조문확인구분.

- 스냅샷: `_workspace/2026-10-18-023-80c3/entry_snapshot.md` · SHA256 `51f165c4bc6f76e048894dd34142b1f990f0a233c3798f7546a1061639b0f47b`.

### 24. checked_primary

- 원문검토범위: 민법110·141·146,형법347,경찰사이트

- 확인/문제: 사기취소·원상회복·추인가능일부터3년/행위일부터10년·형사기망요건확인. 단순계약부진과사기구분및회수상대재산/집행비용유보적절.

- 수정·유지요건(이득, 비고): 상대방이아닌제3자사기라면상대방인지/인지가능조건(110②),선의제3자(110③)유보. 모든쇼핑몰창업사기가전기통신금융사기지급정지대상이라고쓰지말것. 특정공식사건/허위주문제재는직접원문미확인유지.

- 스냅샷: `_workspace/2026-10-18-024-a0c8/entry_snapshot.md` · SHA256 `d65f25985e4e269bf4d26c2e87232b7aa40eae8af26010299af5cea14e0cbc70`.

## 법령 버전·부칙 대조

공식법령검색신규조회에서현행/시행예정을분리했다. 법인세280349·소득세280405는검색상2026.7.1현재버전이지만XML본문시행일표시는2026.1.1로나오므로법률21217/21221의조문별7.1부분을부칙에서확인했다. 본항인용60/70의기본신고기간은부칙별도지연부분이아니다. 부가세시행령283641도본문2026.2.27/검색4.1차이가있고부칙36133은69⑮⑯만4.1시행,본항109의1억400만원기준과구분했다.

- 가맹법288583현행2026.10.2/281999시행예정2026.12.31을구분. 시행령288453부칙36561의2028.1.1시행기재사항변경을10월현행문서요건에섞지않았다.

- 식품위생285339현행10.8,향후2026.12.31·2027·2028·2029버전분리. 시행령288767부칙36593은일부시설/정원규정2028.7.1시행유보.

- 근로기준285279의부칙21533:일반6개월,114제1호등공포후8개월,일부2027.1.1시행. 제17위반500만원은개정전에도있는처벌이며아직시행하지않은114개정전체를현행으로판정하지않았다.

- 저작권283335부칙21336:136①상한개정은공포후6개월(2026.8.11),별도3개월시행조항과구분.10.29예정버전285693적용안함.

- 간호283885(9.11현행)와시행일99990101예정289557을구분. 응급의료280429현행6.24와12.10예정286763구분. 건강보험285273현행10.8과12.24/2027예정분구분.

## 짧은 원문 인용

- 가맹법3②: “제6조의2부터제6조의5까지,제7조,제9조,제10조및제15조의2는모든가맹사업거래에대하여적용한다.” 제11조가열거되지않음.

- 가맹법7③: “14일(...변호사또는...가맹거래사의자문...7일...)”/10①: “서면으로요구하는날부터1개월이내”.

- 건강보험8②: “자격을취득한날부터14일이내에보험자에게신고하여야한다.”

- 부가세시행령109①: “1억4백만원”;부가세69①: “4천800만원미만”;69③: “12개월로환산”.

- 식품표시광고26①: “제8조제1항제1호부터제3호까지...10년이하...1억원이하...병과”.

- 저작권136①: “7년이하의징역또는1억원이하의벌금...병과”.

- 응급의료5의2: “생명이위급한응급환자”/“고의또는중대한과실이없는경우”.

- 부가세49①: “폐업일이속한달의다음달25일”.

- 연구저자초록: “116 Italian startups and16 data points ... about one year”; “Both the treatment and control groups receive10 sessions”; “not more likely to drop out”.

## 공용 캐시 재열람 원장

아래는기존캐시재열람이며신규HTTP아님. 원래확보시각·URL·SHA를유지한다. 출력본문에원문전체/base64를싣지않는다.

- 상법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=273629&type=XML · 확보 2026-10-18T12:37:16.807462+00:00 · HTTP 200 · SHA256 `48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/273629.xml`.

- 전기용품 및 생활용품 안전관리법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276591&type=XML · 확보 2026-10-18T12:37:21.040234+00:00 · HTTP 200 · SHA256 `47798d3ddc624c3a88c0fb6c1b2d1e68abcea5cd66f24038ed0770ba6374318f` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/276591.xml`.

- 소득세법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280405&type=XML · 확보 2026-10-18T12:37:33.260388+00:00 · HTTP 200 · SHA256 `c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280405.xml`.

- 응급의료에 관한 법률: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280429&type=XML · 확보 2026-10-18T12:37:34.012384+00:00 · HTTP 200 · SHA256 `ea4a88a9660c588508730947b9b996e9553ef1a183870c4a5ae15e310e4616f9` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280429.xml`.

- 저작권법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283335&type=XML · 확보 2026-10-18T12:37:44.576976+00:00 · HTTP 200 · SHA256 `6a429f0550556154dcad808d032185e92b6ffdf3f40d791439b14129e1ee929d` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283335.xml`.

- 민법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284415&type=XML · 확보 2026-10-18T12:37:55.111996+00:00 · HTTP 200 · SHA256 `cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284415.xml`.

- 국민건강보험법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285273&type=XML · 확보 2026-10-18T12:37:57.198257+00:00 · HTTP 200 · SHA256 `61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285273.xml`.

- 근로기준법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285279&type=XML · 확보 2026-10-18T12:37:57.424991+00:00 · HTTP 200 · SHA256 `222fd311aa29570bf0045061e332c9b6696b49427a4ae8f17540763866b36c2e` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285279.xml`.

- 식품위생법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285339&type=XML · 확보 2026-10-18T12:37:57.905055+00:00 · HTTP 200 · SHA256 `d2b52de3105fe3f332ed41c17235750812d128260b142acae3ebc96a146e75d4` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285339.xml`.

- 형법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290185&type=XML · 확보 2026-10-18T12:38:25.603245+00:00 · HTTP 200 · SHA256 `391f3c2bb7173fff4040eda9ae2259674b616e58aeadf4371206b63c70f1c89b` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290185.xml`.

- 상속세 및 증여세법: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276123&type=XML · 확보 2026-10-18T12:47:43.218598+00:00 · HTTP 200 · SHA256 `5ecded8eac7bc4a9d410fcdf78955677506ea9d960faa78a92c9db6a6f238ac3` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/276123.xml`.

- 식품위생법 시행령: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288767&type=XML · 확보 2026-10-18T12:48:04.937798+00:00 · HTTP 200 · SHA256 `6aed2d6230cd09be389da000ca7612f41d746501912389b4603b1c4bbb994182` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/288767.xml`.

- medical-doi-cache-index.json: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1287%2Fmnsc.2018.3249%22&format=json&resultType=core&pageSize=10 · 확보 2026-10-18T20:50:58.669618+09:00 · HTTP 200 · SHA256 `cfcdab672bf95c296b5c7b5b78429f2c466e4804cc430e830b36cc17781a2776` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a240f77200c15563aff6.json`. EuropePMC hit0는원문확인아님. Crossref등록초록은저자초록확인이고전문검증아님.

- crossref-cache-index.json: https://api.crossref.org/works/10.1287%2Fmnsc.2018.3249 · 확보 2026-10-18T20:52:31.458243+09:00 · HTTP 200 · SHA256 `429ab5aa2f463a70240472a7f4b59cf74487012cccae1578576235a9721370e2` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/a240f77200c15563aff6.json`. EuropePMC hit0는원문확인아님. Crossref등록초록은저자초록확인이고전문검증아님.

## 신규 HTTPS 원자료 원장

TLS인증검증유지. 최초외부raw저장경로미생성으로저장실패한시도는근거에사용하지않았고경로생성뒤다시HTTP하여아래시각/해시로확보했다. 같은MST가502일때법령ID대체조회로확보한축산물/식품표시광고는원문시행일·제목까지대조했다.

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&ID=001507&type=XML · UTC 2026-10-18T13:24:06.417295+00:00 · 상태 200 · SHA256 `ab962fba394d161c656484eb4fdc6a95e35b9b8d8bf86f458a58f5e21ef32cae` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/b7ed89056315db4c.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&ID=013094&type=XML · UTC 2026-10-18T13:24:06.418235+00:00 · 상태 200 · SHA256 `08bf403773f8361aec1406c10f718133e66f0a60cfd7cf75814c2f104a7d6237` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/4e63f2d019659afd.raw` · 

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%B1%84%EB%AC%B4%EC%9E%90%ED%9A%8C%EC%83%9D%EB%B0%8F%ED%8C%8C%EC%82%B0%EC%97%90%EA%B4%80%ED%95%9C%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:24:06.418967+00:00 · 상태 200 · SHA256 `65be44045bbdc10269abcf084503de674e58664db6cf57418e169ab6769fea76` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/0887cefa2a835a71.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:24:06.420013+00:00 · 상태 200 · SHA256 `1c37fa662067b5a0de750993e8e16ad51840bd318721211d70be41f658a7190b` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/9331d129cebdd2b0.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%8B%9D%ED%92%88%EC%9C%84%EC%83%9D%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:24:06.420567+00:00 · 상태 200 · SHA256 `606211447d31ce6e09fbedc5e8ecefcb51118824842a7b3ab8665d071521e6e5` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/528c276c034420a8.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%9D%91%EA%B8%89%EC%9D%98%EB%A3%8C%EC%97%90%EA%B4%80%ED%95%9C%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:24:06.421260+00:00 · 상태 200 · SHA256 `7d3a612f95692c2c2c253bd3e27bd4a37301ee0167703401bd76f8b38253a671` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/a4c7129ee3e61808.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%83%81%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:24:06.426219+00:00 · 상태 200 · SHA256 `e672672bc71782a98c595ece6cbc62056971551caaf93d6921af9e09e3a460f7` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/8c0870bca15b9de0.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%84%ED%98%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:27.182256+00:00 · 상태 200 · SHA256 `7b01ac6756eb489c4b65b6b9fb1720db6ed65b3a573dd7d97658d1e1b9fb5376` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/8bc51260090c690b.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%80%EB%A7%B9%EC%82%AC%EC%97%85%EA%B1%B0%EB%9E%98%EC%9D%98%20%EA%B3%B5%EC%A0%95%ED%99%94%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:23:27.183253+00:00 · 상태 200 · SHA256 `19d2fe06a42631aeaa1faf01b4149a7d9178ba8f4aec10588ea321602a00fdba` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/a2f1033948ea3b28.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A1%B0%EC%84%B8%EB%B2%94%20%EC%B2%98%EB%B2%8C%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:27.183911+00:00 · 상태 200 · SHA256 `843e99f7bd2d884b6e9d67b53e5eef0aaf2fe97365ae13f0ddc1d9a7c3244048` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/4f8637237d6513ab.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%B6%80%EA%B0%80%EA%B0%80%EC%B9%98%EC%84%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:27.184512+00:00 · 상태 200 · SHA256 `8cad49a667112f5796cbc705d3112f24db559c5aa2af6a5972bf944773240f66` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/94eb08103b38c1a6.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%B2%95%EC%9D%B8%EC%84%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:27.186226+00:00 · 상태 200 · SHA256 `f0a87821dc05f3ae8eaea5868369511372bb3a5bf52e8a90a315e130b00fb6ab` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/f8a51d6c30adb9db.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%B6%80%EA%B0%80%EA%B0%80%EC%B9%98%EC%84%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1 · UTC 2026-10-18T13:23:27.190115+00:00 · 상태 200 · SHA256 `a07ca6074ecf10c5050b9a08fd701b83138ff843aa93754608439ee02e5543c2` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/6a78255df33fc0f5.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%83%81%ED%91%9C%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:27.194239+00:00 · 상태 200 · SHA256 `fefbfec5a0c56669c5bfeb5ef9abcb9933743dcc9ab12c188ef8baffdedc543a` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/12cd1783866d6d88.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%B1%84%EB%AC%B4%EC%9E%90%20%ED%9A%8C%EC%83%9D%20%EB%B0%8F%20%ED%8C%8C%EC%82%B0%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:23:27.206351+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B5%AD%EC%84%B8%EA%B8%B0%EB%B3%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:32.605778+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%80%EB%A7%B9%EC%82%AC%EC%97%85%EA%B1%B0%EB%9E%98%EC%9D%98%20%EA%B3%B5%EC%A0%95%ED%99%94%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1 · UTC 2026-10-18T13:23:32.891936+00:00 · 상태 200 · SHA256 `76044eb343e0aef3870fa163ed11a32f344821de4320f4caac24127a57c5776b` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/dd609975d9f79566.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%AF%BC%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:33.711657+00:00 · 상태 200 · SHA256 `374eaaa09285c7a4f6d0b99324f6e887f6e7d03f3fd5659be3ea5700089d71c1` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/df8ca516880426ab.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%8B%9D%ED%92%88%EC%9C%84%EC%83%9D%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1 · UTC 2026-10-18T13:23:37.253813+00:00 · 상태 200 · SHA256 `5893dac3e9c17705e835e32777377f10e4784fb97d562213881f916aa3c6bd24` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/a0b08f31df046a80.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%8B%9D%ED%92%88%EC%9C%84%EC%83%9D%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:37.394033+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%86%8C%EB%93%9D%EC%84%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:37.519247+00:00 · 상태 200 · SHA256 `65522420f0cf0517dbcde719f8aec4fbeddd8a056f1022c82639ef049bdfd178` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/5060628ffce69246.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%84%EA%B8%B0%EC%9A%A9%ED%92%88%20%EB%B0%8F%20%EC%83%9D%ED%99%9C%EC%9A%A9%ED%92%88%20%EC%95%88%EC%A0%84%EA%B4%80%EB%A6%AC%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:37.586564+00:00 · 상태 200 · SHA256 `ffa5c6d5fbf32908413441b41154a82fb1a581103135357adb86c3763908f470` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/76540ada81afe539.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B7%BC%EB%A1%9C%EA%B8%B0%EC%A4%80%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:37.869039+00:00 · 상태 200 · SHA256 `b8a20072e5cff7651c2732cda90541bf6cb63a7bfddbe0e6a368643d207917f8` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/0f80005cb8838c2b.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EB%B3%B4%ED%97%98%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:38.767502+00:00 · 상태 200 · SHA256 `6ca6a815c48088c8428734ddcec370abaed70df429d9a494180b61424b43a36d` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/1093eb23f1e1bf0d.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%9D%91%EA%B8%89%EC%9D%98%EB%A3%8C%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:23:41.624054+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%83%81%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:42.610389+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%80%EC%9E%91%EA%B6%8C%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:42.859363+00:00 · 상태 200 · SHA256 `b6735803d8d5ada057c68a2793fe631d59a0ea908b58d7f7bcebadaaf5352bea` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/2603d5a7397c4633.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%B6%95%EC%82%B0%EB%AC%BC%20%EC%9C%84%EC%83%9D%EA%B4%80%EB%A6%AC%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:23:42.928624+00:00 · 상태 200 · SHA256 `ac1472bb7172f7af78dcb641eb5568bfed9a785293249f7861c2951982db16fa` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/6d6f5bf6a39bbf37.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%8B%9D%ED%92%88%20%EB%93%B1%EC%9D%98%20%ED%91%9C%EC%8B%9C%E3%86%8D%EA%B4%91%EA%B3%A0%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:23:43.391892+00:00 · 상태 200 · SHA256 `be02c6ab778ef806914a2f1848ba27715cb240ab2b24dff7a6e4cdc6b8b1a4ea` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/6de3b1bf95c2559c.raw` · 법령명검색;본문열람과별도,현행/시행예정선택확인

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285351&type=XML · UTC 2026-10-18T13:23:06.709795+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · HTTP Error 502: Bad Gateway

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=269957&type=XML · UTC 2026-10-18T13:23:06.710663+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · HTTP Error 502: Bad Gateway

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283641&type=XML · UTC 2026-10-18T13:23:06.711249+00:00 · 상태 200 · SHA256 `3c48b1f0efa05fb44f5f8d06c13561d1aa4b2ceb065eff8b51904c18ba63cf3a` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/46aed0cbaec3514e.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288583&type=XML · UTC 2026-10-18T13:22:04.667668+00:00 · 상태 200 · SHA256 `8f020b8188aaab18bc57d161505724a31ce9b249b235683f32669a5c14aeb136` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/7a046566c21a438b.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288453&type=XML · UTC 2026-10-18T13:22:04.668526+00:00 · 상태 200 · SHA256 `3134580b9f4b0c03bf015a45a151c3241f8a6ddb38c805ed180775e0d279b1f3` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/a41225d7a880531e.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276117&type=XML · UTC 2026-10-18T13:22:04.669143+00:00 · 상태 200 · SHA256 `b2360d874974675a3452b6775478942deff2a479bbd1d25d2bc2886a05159710` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/d4b13273b73108cf.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285351&type=XML · UTC 2026-10-18T13:22:04.669667+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · <urlopen error Tunnel connection failed: 502 Bad Gateway>

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=269957&type=XML · UTC 2026-10-18T13:22:04.670199+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · <urlopen error Tunnel connection failed: 502 Bad Gateway>

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280349&type=XML · UTC 2026-10-18T13:22:04.671468+00:00 · 상태 200 · SHA256 `3c3bd7eda4a35cf0e35449b16e32d0279dd6f8df5aba73c696711e7d48f72740` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/1437632ff6ca579f.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289999&type=XML · UTC 2026-10-18T13:22:04.678211+00:00 · 상태 200 · SHA256 `7bef4053b5934f73d35d857f594ff58e8eaf94214d7b622289f983c9dd1eb603` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/cd1d40cbab0015ff.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283641&type=XML · UTC 2026-10-18T13:22:04.682097+00:00 · 상태 access_failed · SHA256 `없음` · `raw없음` · HTTP Error 502: Bad Gateway

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=224875&type=XML · UTC 2026-10-18T13:22:07.051077+00:00 · 상태 200 · SHA256 `3af38761d86a1c71716e28763864ee34cbd4e7f5338501faba4246d7482c63a6` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/e1b6d6098a8c68c8.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=279819&type=XML · UTC 2026-10-18T13:22:07.148524+00:00 · 상태 200 · SHA256 `4ac2572023033024fc6e00d934e4a5d76b999a4e9aedac12d753bd182f67ce33` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/c96f7e96b2e0c1e9.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283885&type=XML · UTC 2026-10-18T13:22:07.387698+00:00 · 상태 200 · SHA256 `b717865a70a53d88a5622a3b9cb790427bf5907dd42e0b3035357d11af0d96b6` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/ee8ee3888d156440.raw` · 

- https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290631&type=XML · UTC 2026-10-18T13:22:07.450440+00:00 · 상태 200 · SHA256 `0f25c76b847f02c2753e0099d9e2102902fd00567a94c5ceb1e09627be3e3bce` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/e2db437dcf6766c3.raw` · 

- https://pubsonline.informs.org/doi/10.1287/mnsc.2018.3249 · UTC 2026-10-18T13:22:12.550097+00:00 · 상태 200 · SHA256 `5c54ed846df38a6604ff45797321737f1e99b014e2be81a0fe72a9ddf72cd8de` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/07e8cbf9cb6af9d4.raw` · 출판사초록본문200확인;전문표/분석결과검증범위아님

- https://www.nts.go.kr · UTC 2026-10-18T13:22:13.666462+00:00 · 상태 200 · SHA256 `feb049b006f8dd5f1a8fd8fe8da1f394667d8c35ccd3494527f73dcc66a01e97` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/52be15d84b38891b.raw` · 홈화면본문126/유료문구직접확인

- https://www.counterscam112.go.kr · UTC 2026-10-18T13:22:14.694209+00:00 · 상태 200 · SHA256 `886b7e988d65b2053b69ce74d3028b5807d74459b7b3b0fc76ba83c2da5d53d2` · `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch12-audit/73cd9da76d4947f8.raw` · 공식홈화면확인;사례/피해지원세부원문확인아님

## 미확인과 승인 경계

현재제안승인0건. 후보/제안이준비되면candidateSHA·entry전체beforeSHA·필드before/after와이감사요건을다시대조해야한다. 최종통합본문새해시의독립정식KR-FIT도별도필수다.

- 명의주식실질주주판례와실제세무신고처리,사업자등록서류/처리기간/등기비견적,정육점시설·하위규정면적별예외,식품표시고시세부,고용/산재/연금보험가입대상/기한/보험료,어린이제품/개별품목안전기준,한국운영대행사기사례·허위주문제재는직접원문추가검증이남는다.

- 확인가능했던법정건보14일과폐업부가세다음달25일,명의신탁세무기본조문을그냥미확인으로남기지는않았다. 이확인으로각제도의실무전반까지통과시킨것은아니다.

- 검증범위안에서정량오류/한국제도오류를독립판정했으며24항모두무조건적합이라고처리하지않았다. 연구원문은초록확인,법령은해당조문/부칙확인,관청홈화면은해당문구확인으로한정한다.
