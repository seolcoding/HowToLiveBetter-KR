# 제2절 한국 실정 적합성 검토
검토일: 2026-10-18 (Asia/Seoul) · 검토 대상: book-kr/02-천천히-죽지-않기.md (42항목)

새 독립 정식 검토입니다. 초기 감사·편집 승인·순수 윤문 게이트를 정식 승인으로 복사하지 않았습니다. KR-GUIDE, kr-fit-review 스킬, 출판 품질 목표와 CONTRACT를 적용했습니다. 현재 한국어 42항의 여섯 필드·도입·TODO9개, 중국어 원문42항·도입을 대조했습니다. 1-analysis/2-research는 이력으로 참고했습니다. evidence grade A는 이 저장소의 정량 근거 분류이며 모든 관찰자료의 인과 확실성이 높다는 뜻으로 승인하지 않습니다.

시작 CLI 정규화 해시: `e0db99cf8dc3918b22ced785fdf056f8272f5996ff80e2ce725e86fde38160bd`. 시작 machine block0/warn0. 검토 중 원작성자 최소 제35항 도입수정과 ROOT의 DOI 사유 메타데이터수정을 별도 정확 SHA로 독립 판단했습니다. 본문을 직접 수정하지 않았습니다. 최종 변경·CLI 재확인 기록은 아래에 있습니다.

## 실제 열람 범위와 접근 한계

아래 신규 HTTP는 이번 검토에서 직접 요청했습니다. 기존 raw 열람을 신규 요청으로 세지 않습니다. HTTPS 인증서를 무시하지 않았습니다.

- 신규 HTTP200: 금연길라잡이 <https://www.nosmokeguide.go.kr/helpness/counsel> “1544-9030”, “이용금액 무료”; <https://www.nosmokeguide.go.kr/helpness/center> “전국17개”, “4박5일”, “6개월간9회이상”.
- 신규 HTTP200: 공단 <https://www.nhis.or.kr/static/alim/paper/oldpaper/202404/sub/section1_5.html> “19세이상”, “매년1월1일부터12월31일까지”, 단독스케일링1회/치주수술전치석제거예외. 공단 <https://www.nhis.or.kr/static/html/wbma/c/smkInfo_01.pdf> 6,345,781바이트 PDF를 새로 받았고, 문장은 기존 `/tmp/ch02-audit/nhis-smk.txt`에서 읽었습니다. 새 PDF를 이번에 재변환·전페이지완독했다고 하지 않습니다. 해당 지원·부담표·이수조건을 대조했습니다.
- 신규 HTTP200: 식약처 <https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=199700692> “적정 관리 프로그램과 병행하여 알코올 의존성 치료”, “치료 전7∼10일내에 아편류를 사용하지 않았다고 의사가 판단”.
- 신규 HTTP200: 보건복지부 전재 <https://www.korea.kr/briefing/pressReleaseView.do?newsId=156742756>와 <https://www.korea.kr/briefing/pressReleaseView.do?newsId=156767651>. 페이지 제목·설명에서 합성니코틴 포함과2026-04-24시행을 읽었습니다. 첨부 보도자료 전체를 새로 내려받아 검증한 것은 아닙니다.
- 담배법 DRF 신규요청 <https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280343&type=XML>는 터널502 실패. 이후 재시도 옵션을 둔 curl로 <https://www.law.go.kr/LSW/lsSideInfoP.do?lsiSeq=280343&joNo=0012&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR>의 실제 제12조를 읽었습니다. 제2항 “소매인이 아닌 자는 담배를 소비자에게 판매해서는 아니 된다”, 제4항 “우편판매 및 전자거래…방법으로 하여서는 아니 된다”를 확인했습니다. 기존 `/tmp/ch02-audit/batch1-law12.body`도 별도 열람했습니다.
- 기존 법령raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/288767.xml`, <https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288767&type=XML>의 시행령21조2호 “제조ㆍ가공업소에서 직접 최종소비자에게 판매하는 영업”; `/tmp/ch02-audit/rule37.body`의 규칙37조 별표15위임을 읽었습니다. 규칙 현행전체 XML은 캐시상 unavailable, `/tmp/ch02-audit/food-retry.body`는 조문본문을 얻지 못한 자료입니다. 별표15전체·현행식품공전아플라톡신규격은 미확인입니다.
- 신규 HTTP200 원초록: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1002/14651858.CD013183.pub2&format=json&resultType=core> (22시험9,219명RR1.01), <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1007/s00394-018-1692-3&format=json&resultType=core> (7개이상/주대1개미만 HR1.08,CI0.93–1.24/통합HR1.09,CI0.997–1.200).
- 신규 HTTP200 원문XML <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5682593/fullTextXML>: 이번에 읽은 범위는 구조화초록(설계·포함조건·분모·결과)입니다. 비만성인식이감량54RCT30,206명·사망34시험685건RR0.82(CI0.71–0.95)를 확인했습니다. 모든표/보충자료까지 새로 검증한 것이 아닙니다.
- 기존 의학raw: 위 캐시의 `medical-doi-cache-index.json`에 연결된 EuropePMC core JSON의 DOI·초록 결과/조건을 열람했습니다. 본문 인용 DOI가 초록에 없거나 상세조건이 필요한 경우 `/tmp/ch02-audit/full-PMC*.txt`와 해당 `.body`, publication ch02 `source-evidence`를 추가 열람했습니다. 전문 접근이 가능한 자료도 이번에는 관련 방법·결과·표·논의의 범위를 읽었습니다. 모든 문헌 전문전체·인용문헌·부록을 완독했다는 판정이 아닙니다. Crossref의 서지는 연구결과검증으로 세지 않았습니다.
- 실제 추가로 읽은 기존 원문 부분: PMC3734295(빈랑분모/통합지표), PMC9209691(근력Table1), PMC9800274(VILPA선정/활동), PMC13121452(수면제한방법/결과), PMC7174336(후드방법/Table4), PMC4881732(연구수/합성결과), PMC11695283(광저우PR/ITS), PMC11025407(광시모형/결과), PMC12909254(낮잠인지/운동/질환비교), PMC13096975(낮잠시간대Table1/결과), PMC13506250(전자담배선정/비교), PMC13344439(야간근무암결과). 각 DOI는 항목의 출처와 다음 색인에 연결됩니다. publication e26 `coffee-correction-PMC5765813.xml`의 실제 정정공지와 `/tmp/ch02-audit/iarc-hot.txt`의 above65°C/Group2A·coffeeGroup3도 읽었습니다.

국내 가격·수가/급여조건 전체·현재제품유통·영양섭취기준 세부·연결정정전수검색은 확인되지 않았습니다. 미확인은 해당 문장이 거짓이라는 판정과 구별했습니다. 중국수치를 한국인 효과로 바꾸지 않는 제한과 TODO를 근거없이 지우지 않습니다.

## 항목별 판정
### 2-1. 금연하세요. 빨리 끊을수록 좋습니다
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 미국 기대수명 10년·금연 연령별 10/9/6년과 중국 도시/농촌 1.65/1.22를 원초록과 대조했습니다. 2004년 간접흡연 추정은 현재 연간 사망으로 바뀌지 않았습니다. “한 달에 십수만 원”의 국내 공식 가격과 금단기간은 미확인입니다. TODO1을 유지하고 국내 가격을 확인한 뒤 산식을 보강하세요. 원문 하루20~30위안을 단순 원화 환산했다는 증거는 찾지 못했습니다.
- 대조 출처: https://doi.org/10.1056/NEJMsa1211128 ; https://doi.org/10.1016/S0140-6736(15)00340-2 ; https://doi.org/10.1016/S0140-6736(10)61388-8

### 2-2. 집과 차 안에서는 담배를 피우지 마세요. 손님에게도 금연시키세요
- 판정: 적합
- 판단·문제·수정 권고: 603,000명·2004년·아동28%와 DALY61%의 분모를 구별했습니다. 57연구 OR1.28/1.39/1.50/1.36은 원초록과 같습니다. 오즈와 확률을 구별하고 집/비집 노출을 실내/실외의 독립 인과효과로 읽지 않도록 제한했습니다. 노출시간 등 원문 전문은 미확인이라는 한계도 본문에 있습니다.
- 대조 출처: https://doi.org/10.1016/S0140-6736(10)61388-8 ; https://doi.org/10.1093/ntr/ntaf111

### 2-3. 금연은 의지로만 버티지 말고 약부터 받으세요.
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 금연성공은 최소6개월; 바레니클린41시험17,395명 RR2.32, NRT133시험64,640명 RR1.55, 병용16시험12,169명 RR1.27을 대조했습니다. 공단PDF의 연3회·1~2회20%·3~6회면제·56/84일·이수환급 조건을 읽었습니다. “약은 금단 증상으로 괴로운 몇 주 동안의 고통만 덜어줍니다”의 “만”은 약효를 지나치게 좁힙니다. 원초록은 금단 완화와 흡연 보상 감소를 함께 설명합니다. “약은 금단 증상을 덜고 금연을 돕습니다”처럼 원작성자 보강을 권합니다. 국내 모든 제형의 허가·현행 유통은 별도 미확인입니다.
- 대조 출처: https://doi.org/10.1002/14651858.CD006103.pub8 ; https://doi.org/10.1002/14651858.CD000146.pub5 ; https://doi.org/10.1002/14651858.CD013308.pub2 ; https://www.nhis.or.kr/static/html/wbma/c/smkInfo_01.pdf

### 2-4. 금연일을 정하고 자신에게 맞는 방법으로 끊으세요
- 판정: 적합
- 판단·문제·수정 권고: 697명 개별시험의 4주49.0/39.2%,6개월22.0/15.5%와 2019통합22시험9,219명 RR1.01(0.87–1.17)을 구별합니다. 새HTTP200 원초록으로 후자를 직접 읽었습니다. 우열 미확인과 두 방법의 완전한 동등성 입증을 혼동하지 않습니다. 미리쓰는 NRT RR1.25도 조건과 상담을 남겼습니다.
- 대조 출처: https://doi.org/10.7326/M14-2805 ; https://doi.org/10.1002/14651858.CD013308.pub2 ; https://doi.org/10.1002/14651858.CD013183.pub2

### 2-5. 보건소 금연클리닉에 가보세요. 금연상담전화 1544-9030도 있습니다
- 판정: 적합
- 판단·문제·수정 권고: 52시험19,488명 RR1.83과 전화14시험32,484명 RR1.38/65시험41,233명 RR1.25의 모집·비교집단을 구별했습니다. 새HTTP 공식상담·센터페이지에서 1544-9030/무료/17개/4박5일/6개월9회이상을 읽었습니다. 외국시험의 상담 강도를 한국 모든 서비스와 같다고 하지 않습니다.
- 대조 출처: https://doi.org/10.1002/14651858.CD008286.pub3 ; https://doi.org/10.1002/14651858.CD002850.pub4 ; http://www.korea.kr/policy/pressReleaseView.do?newsId=155884687 ; https://www.nhis.or.kr/static/html/wbma/c/smkInfo_01.pdf ; https://www.nosmokeguide.go.kr/helpness/counsel ; https://www.nosmokeguide.go.kr/helpness/center

### 2-6. 끊지 못할 때만 전자담배를 고려하세요. 원래 안 피우던 사람은 만지지 마세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: pub11 원초록의 전체80완료RCT29,861명과 NRT비교11시험4,114명을 구별합니다. RR1.61과 100명당추가4명, 중대한이상사건 RD0.01(-0.01~0.02)·중간확실성을 대조했습니다. 액상형과 가열담배·NRT단일과병용을 구별합니다. 새HTTP로 법제12조2항/4항과 공식 발표의 합성니코틴 포함을 읽었습니다. 무니코틴 기기자체의 법적분류, WHO/영국의 현재 모든 운영정책은 이번에 직접 확인하지 못했습니다. TODO2를 유지하고 실제 제품에 일반화하지 마세요.
- 대조 출처: https://doi.org/10.1002/14651858.CD010216.pub11 ; https://www.korea.kr/briefing/pressReleaseView.do?newsId=156742756 ; https://www.korea.kr/briefing/pressReleaseView.do?newsId=156767651 ; https://www.law.go.kr/법령/담배사업법/제12조

### 2-7. 당분 음료를 마시지 마세요. 제로 전환의 이득은 단정하지 마세요
- 판정: 적합
- 판단·문제·수정 권고: 미국 만성질환없던37,716남/80,647여와 유럽451,743명 비교를 구별합니다. 유럽2잔이상 대 월1잔미만 HR1.08/1.26/1.17, 250mL 조건과 제로교체 효과 미확인을 유지했습니다. 관찰군 차이를 전환시험 효과로 쓰지 않습니다.
- 대조 출처: https://doi.org/10.1161/CIRCULATIONAHA.118.037401 ; https://doi.org/10.1001/jamainternmed.2019.2478

### 2-8. 빈랑(빈랑나무 열매)을 씹지 마세요
- 판정: 적합
- 판단·문제·수정 권고: 총17연구388,134명과 사망4연구179,582명·당뇨2연구51,412명·대사증후군3연구23,291명 분모를 구별합니다. 실제 원문에서 RR/HR/OR 통합과 혼합물의 담배 포함 가능성을 읽었습니다. 암의 별도효과·중단후 암위험을 이 메타분석에서 계산하지 않았다고 정직하게 제한합니다.
- 대조 출처: https://doi.org/10.1371/journal.pone.0070679

### 2-9. 집의 소금을 저나트륨 소금(칼륨염)으로 바꾸세요
- 판정: 적합
- 판단·문제·수정 권고: 중국600마을20,995명 고위험집단·평균4.74년·75/25%칼륨염과 100%보통소금·1,000인년당 수치·발생률비0.88/0.86/0.87을 원초록과 대조했습니다. PURE는 아침소변 추정배설량과4.00~5.99g기준의 복합사건OR1.27/1.15로 분리했습니다. 고칼륨 차이 미검출을 신장질환 안전보장으로 확대하지 않습니다. 국내가격/맛 미확인 표시가 있습니다.
- 대조 출처: https://doi.org/10.1056/NEJMoa2105675 ; https://doi.org/10.1056/NEJMoa1311889

### 2-10. 칫솔질을 제대로 하고, 하루 한 번 치아 사이를 청소하고, 빠진 이는 바로 치료하세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 일본 자립노인9,676명6년·치간도구HR0.89/혀도구0.77과 50세이상통합의 무치악OR1.87/20개미만OR2.04를 대조했습니다. 새HTTP공단안내는19세이상·달력연도1회·치주치료예외를 명시합니다. “1년에 몇만 원이 채 안 됩니다”의 국내 시세는 미확인입니다. TODO9와 함께 추정임을 비용줄에도 표시하는 편이 좋습니다.
- 대조 출처: https://doi.org/10.1016/j.jdent.2026.106789 ; https://doi.org/10.1007/s41999-025-01319-4 ; https://www.nhis.or.kr/static/alim/paper/oldpaper/202404/sub/section1_5.html

### 2-11. 하루 7000~8000보를 걷거나, 일주일에 150~300분 빠르게 걷세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 47,471명3,013사망·걸음사분위와 661,137명116,686사망·여가활동 분석, 기기연구36,383명2,149사망을 구별했습니다. 3,867보는 기준집단중앙값으로 바로잡혀 있습니다. HR와 걸음/시간의 불완전환산·관찰한계를 유지합니다. 국내활동지침 첨부의 해당 권고 전문과 Banach 연결정정문, 시간비용환산은 이번 미확인입니다. 국내지침 전부검증으로 세지 않습니다.
- 대조 출처: https://doi.org/10.1016/S2468-2667(21)00302-9 ; https://doi.org/10.1093/eurjpc/zwad229 ; https://doi.org/10.1001/jamainternmed.2015.0533 ; https://doi.org/10.1136/bmj.l4570 ; https://health.kdca.go.kr/healthinfo/biz/health/ntcnInfo/helthEdcRecsroom/helthEdcRecsroomView.do?phledu_recsroom_sn=1931

### 2-12. 고혈압·고지혈증이 있으면 처방대로 꾸준히 드세요. 임의로 끊지 마세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 혈압10mmHg당RR0.87/0.80/0.73/0.72와 LDL1mmol/L당RR0.90/0.78은 시험통합입니다. 복용률80%이상의RR0.55/0.71은 관찰자료이며 자가관리교란을 밝힙니다. “혈압약과 스타틴은 건강보험 급여 약”은 성분·적응증별 조건을 생략한 일반표현입니다. 개별급여 기준과 월부담액은 미확인이라 “급여 여부와 본인부담은 처방·급여기준에 따라 다릅니다” 보강을 권합니다.
- 대조 출처: https://doi.org/10.1016/S0140-6736(15)01225-8 ; https://doi.org/10.1016/S0140-6736(10)61350-5 ; https://doi.org/10.1093/eurheartj/eht295

### 2-13. 밤마다 7시간쯤 자고, 자고 일어나는 시각을 고정하세요
- 판정: 적합
- 판단·문제·수정 권고: 짧은수면 기준이 연구마다4시간이하~7시간미만임을 명시합니다. 60,977명 수면규칙성 사분위가 아니라5등급, 상위4등급20~48%를 정확히 씁니다. 사회시차51,562명·3,853신규CVD·2시간이상HR1.30은 원초록과 같습니다. 7시간을 모든 개인의 필수량으로 강제하지 않습니다.
- 대조 출처: https://doi.org/10.1093/sleep/33.5.585 ; https://doi.org/10.1161/JAHA.117.005947 ; https://doi.org/10.1093/sleep/zsad253 ; https://doi.org/10.1111/joim.70133

### 2-14. 라켓 운동을 해보세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 80,306명·최근4주운동여부·라켓종목 테니스/배드민턴/스쿼시·HR0.53/심혈관0.44를 대조했습니다. 출판사 원문과 초록의56%/논의59% 차이를 본문에서 밝힙니다. 주3회45분 처방근거로 확대하지 않습니다. “만 원 안팎”은 국내요금 미확인 추정치임이 표시되어 warn으로 남깁니다.
- 대조 출처: https://doi.org/10.1136/bjsports-2016-096822

### 2-15. 계단 오르기, 부리나케 걷기 같은 자투리 '힘든 움직임'을 하루 4~5분 모으세요
- 판정: 적합
- 판단·문제·수정 권고: 비운동인25,241명·852사망·평균6.9년의 분석과 운동인62,344명의 별도분석을 구별했습니다. 3회1~2분과 총4.4분이 서로 다른 비교이며 같은감소폭으로 합치지 않습니다. 활동측정보다 평균5.5년 전 설문으로 비운동인을 구분한 한계를 유지합니다.
- 대조 출처: https://doi.org/10.1038/s41591-022-02100-x

### 2-16. 일주일에 30~60분 근력 운동을 하세요
- 판정: 적합
- 판단·문제·수정 권고: 원문 표의 전체사망7연구42,133/263,058명 RR0.85를 읽어 약15% 귀속을 확인했습니다. 30~60분의10~20%구간과 더높은양의불확실성·자가보고·관찰설계를 유지합니다. 한국빈도지침을 이 시간량과 동일시하지 않습니다.
- 대조 출처: https://doi.org/10.1136/bjsports-2021-105061

### 2-17. 한자리에 오래 앉아 있지 말고, 틈틈이 일어나 움직이세요
- 판정: 적합
- 판단·문제·수정 권고: 총좌식과연속좌식 각각의 최고/최저사분위HR2.63/1.96 및 활동·좌식교차집단HR1.59/1.04의 기준집단이 구별됩니다. TV시청은 별도노출입니다. 현행 연결정정문 전체는 이번 미확인으로 기록하며 관찰상차이를 운동의 개인별위험제거 보장으로 바꾸지 않았습니다.
- 대조 출처: https://doi.org/10.7326/M17-0212 ; https://doi.org/10.1016/S0140-6736(16)30370-1

### 2-18. 가공육(햄, 베이컨, 소시지, 런천미트)을 줄이세요
- 판정: 적합
- 판단·문제·수정 권고: 최고/최저섭취군 RR1.23/total red meat1.29/unprocessed1.10과 2017일1회분증가분석을 구별합니다. 1.10 비유의성과 NutriRECS약한권고·낮은확실성을 남겼습니다. 연구1인분을 한국식당1인분으로 환산하지 않습니다. 세부그램·NutriRECS정정문은 미확인입니다.
- 대조 출처: https://doi.org/10.1093/aje/kwt261 ; https://doi.org/10.3945/ajcn.117.153148 ; https://doi.org/10.7326/M19-1621

### 2-19. 술을 줄이거나 끊으세요
- 판정: 적합
- 판단·문제·수정 권고: 현재음주자599,912명·19개고소득국·기준>0~100g/주의 기대수명추정을 비음주자비교·개인감량효과와 구별합니다. GBD초록week/본문day 불일치를 고지하고 상한을 제시하지 않습니다. Zhao의45~64/65g이상RR1.19/1.35와 소량RR0.93비유의를 대조했습니다. 남4잔/여2잔을 건강목표량으로 권하지 않습니다.
- 대조 출처: https://doi.org/10.1016/S0140-6736(18)30134-X ; https://doi.org/10.1016/S0140-6736(18)31310-2 ; https://doi.org/10.1001/jamanetworkopen.2023.6185 ; https://doi.org/10.1001/archinte.166.22.2437

### 2-20. 매일 마시다가 끊으면 손이 떨리는 사람은 스스로 끊지 마세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 금단임상리뷰는 갑작스런중단 또는큰감량·의존·중증응급을 다룹니다. 노르웨이36,287명·진단후연사망8/5/3.6%와SMR9.8을 자가금주급성치사율로 쓰지 않습니다. 국내정신건강진료의 세부급여·입원기간은 직접 확인하지 못했습니다. 개별비용과 치료장소를 의료기관에 확인하도록 보강할 수 있습니다.
- 대조 출처: https://doi.org/10.1016/j.ejim.2026.107103 ; https://doi.org/10.1111/add.16297

### 2-21. 술을 줄이려면 일주일 치부터 세고, 의사와 몇 분 이야기하세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 간단중재34시험15,197명1년후주20g감소와 약물122RCT+1코호트22,803명 분모를 구별합니다. 아캄프로세이트 any drinking NNT12와 날트렉손50mg heavy drinking NNT12는 다른종말점입니다. 새HTTP식약처 허가·아편류7~10일사전확인을 직접 읽었습니다. 아캄프로세이트국내유통·국내상담수가는 미확인입니다. “더 길게 중재해도 추가 이득은 없었습니다”는 원초록의 imprecise·낮은확실성을 함께 짧게 보강하는 편이 좋습니다.
- 대조 출처: https://doi.org/10.1002/14651858.CD004148.pub4 ; https://doi.org/10.1001/jama.2014.3628 ; https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=199700692

### 2-22. 하루에 견과 한 줌을 드세요
- 판정: 적합
- 판단·문제·수정 권고: 미국여76,464/남42,498명·3,038,853인년·견과1회28g·비섭취기준의HR0.93/0.89/0.87/0.85/0.80을 대조했습니다. 비흡연자전용연구라고 하지 않고 조리법별차이 미조사를 밝힙니다. 국내가격을 단정하지 않고 TODO4를 유지합니다.
- 대조 출처: https://doi.org/10.1056/NEJMoa1307352

### 2-23. 붉은 살코기 일부를 생선과 가금육으로 바꾸세요
- 판정: 적합
- 판단·문제·수정 권고: 미국6코호트29,682명의 주2인분증가·가공육/비가공붉은고기HR1.03, 가금/생선0.99와 각각의CI를 대조했습니다. 동량대체모형이나 실제교체시험 효과로 해석하지 않도록 쉽게와이득 모두 제한합니다.
- 대조 출처: https://doi.org/10.1001/jamainternmed.2019.6969

### 2-24. 흰쌀·밀가루 일부를 통곡물로 바꾸세요
- 판정: 적합
- 판단·문제·수정 권고: 통곡물식품90g추가RR0.83(CI0.77~0.90), 건조곡물/조리밥무게와 식품무게의 구분, 빵2장+시리얼예시를 대조했습니다. 225g위험최저와 일1회분RR0.92는 별도분석입니다. 절반교체면최대이득이라는 보장을 삭제하고 I²83%를 남겼습니다.
- 대조 출처: https://doi.org/10.1136/bmj.i2716 ; https://doi.org/10.3945/ajcn.117.153148

### 2-25. 차를 드세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: China-PAR100,902명·중앙7.3년·HR0.85·50세기대수명1.26/무질환1.41년을 대조했습니다. 독소158건중2양성과352건16종 검사·섭취량모형평가를 미검출/모든식품안전보장으로 바꾸지 않습니다. 국내차연비용은 미확인입니다. “1년에 몇만 원에서 십수만 원”에는 추정표시를 권합니다.
- 대조 출처: https://doi.org/10.1177/2047487319894685 ; https://doi.org/10.1016/j.fct.2020.111830 ; https://doi.org/10.3390/toxins14070452 ; https://doi.org/10.1016/j.yrtph.2018.03.019

### 2-26. 커피 하루 3~4잔의 건강 효과와 설탕·크림
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 201관찰메타분석과17시험메타분석·사망결과는관찰이라는 구분이 정확합니다. 기존raw 정정공지bmj.k194에서 사망RR0.83 CI0.79–0.88 정정을 읽었습니다. 설탕/크림효과상쇄를확정하지않고 잔크기불일치·임신등예외를 남겼습니다. “하루 몇백 원” 국내비용은 미확인으로 TODO9를 유지합니다.
- 대조 출처: https://doi.org/10.1136/bmj.j5024 ; https://doi.org/10.1136/bmj.k194

### 2-27. 하루 과일 2인분과 채소 3인분을 채우세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: Aune200g당RR0.90과 Wang의2코호트+다른24코호트=26·5대2회분HR/RR0.87을 구별합니다. 일괄400g환산을 하지 않고 주스·감자·전분채소예외를 남겼습니다. 국내영양섭취기준·Wang식품별모든회분의전문·하루몇천원가격은 미확인입니다. TODO5를 유지하세요.
- 대조 출처: https://doi.org/10.1093/ije/dyw319 ; https://doi.org/10.1161/CIRCULATIONAHA.120.048996

### 2-28. 초가공식품(감자칩, 라면, 과자, 즉석식품)을 줄이세요
- 판정: 적합
- 판단·문제·수정 권고: 우산리뷰의사망RR1.21/GRADE낮음과CVD사망RR1.50/GRADE매우낮음을 원초록과 대조했습니다. evidence class를GRADE와구별합니다. 단음료/가공육과의겹침·추가이득미확인을 남기고 세계전체에반대연구가없다는 주장을 하지 않습니다.
- 대조 출처: https://doi.org/10.1136/bmj-2023-077310

### 2-29. 밥 짓고 난방할 때 연탄과 장작을 태우지 마세요. 전기나 가스로 바꾸세요
- 판정: 적합
- 판단·문제·수정 권고: 중국농촌271,217명·조리179,952/난방163,882·평균7.2년·15,468사망과 계속고체연료사용자대교체군HR0.87/0.67을 구별합니다. 실외PM리뷰107전체/104코호트를 해당효과분모로쓰지 않습니다. 한국교체비·보급률과 공기청정기사망효과를 확인했다고 하지 않습니다.
- 대조 출처: https://doi.org/10.1001/jama.2018.2151 ; https://doi.org/10.1016/j.envint.2020.105974

### 2-30. 뜨거운 것은 좀 식혀서 드세요. 끓는 차·국·커피를 곧바로 마시지 마세요
- 판정: 적합
- 판단·문제·수정 권고: 이란300환자/571대조·따뜻한차기준OR2.07/8.16·<2분대≥4분OR5.41을 대조했습니다. 확률배수가아니며 몇분대기안전보장도 아닙니다. IARC공식PDF기존raw에서above65°C/Group2A 및coffeeGroup3를 직접 읽었습니다.
- 대조 출처: https://doi.org/10.1136/bmj.b929 ; https://doi.org/10.1016/S1470-2045(16)30239-X ; https://www.iarc.who.int/wp-content/uploads/2018/07/pr244_E.pdf

### 2-31. 낮에 나갈 때 햇빛과 피부 보호를 함께 생각하세요
- 판정: 적합
- 판단·문제·수정 권고: 스웨덴여29,518명20년·회피대최대노출기대수명0.6~2.1년차이를 원초록과대조합니다. 한국개인햇빛시간처방·흡연해상쇄로확대하지않고 피부보호와일조량한계를 밝힙니다.
- 대조 출처: https://doi.org/10.1111/joim.12496

### 2-32. BMI를 20~25로 유지하세요. 과체중이면 빼세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 239코호트·비흡연/기존질병없음/5년생존조건·22.5~25기준HR들과동아시아BMI>25의5단위HR1.39를 대조했습니다. 새HTTP원전초록에서 비만성인식이감량54RCT30,206명·총사망34시험685건RR0.82를 읽었습니다. “가벼운 비만은 약 5% 낮았습니다”에는 Flegal HR0.95(CI0.88~1.01)로 통계적으로뚜렷하지않다는 설명을 권합니다. 한국진단기준과관찰최저구간이 다름은 본문에이미있습니다.
- 대조 출처: https://doi.org/10.1016/S0140-6736(16)30175-1 ; https://doi.org/10.1001/jama.2012.113905 ; https://doi.org/10.1136/bmj.j4849

### 2-33. 고추 섭취와 사망 위험의 관계
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 이탈리아22,811명·중앙8.2년·1,236사망·>4회/주대안먹음/드묾 HR0.77/0.66을 대조했습니다. 섭취처방으로바꾸지않은제목이적절합니다. “매운 음식은 위식도 역류, 치질, 과민성 장 증상을 악화합니다”의 모든질환·모든환자에대한단정은 이사망연구로검증되지않았습니다. “증상이 심해지면 무리해서 먹지 마세요”로개인반응조건을 권합니다.
- 대조 출처: https://doi.org/10.1016/j.jacc.2019.09.068

### 2-34. 우유나 요거트는 몸에 맞게 드세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 21국136,384명·6,796사망·totaldairy>2회분대0회분HR0.83,CI0.72–0.96/P추세0.0052를 대조했습니다. 초록9.1년을평균/중앙으로단정하지않습니다. 우유두잔이나1~2잔최적처방으로바꾸지않았습니다. 국내유제품권장량·가격은 미확인으로 TODO5를 유지합니다.
- 대조 출처: https://doi.org/10.1016/S0140-6736(18)31812-9

### 2-35. 달걀의 안전한 개수는 이 연구만으로 정할 수 없습니다
- 판정: 적합
- 판단·문제·수정 권고: 미국521,120명50~71세·129,328사망·하루wholeegg반개HR1.07과동량대체모형을 대조했습니다. 새HTTP200으로Xu2019의7개이상/주대1개미만비유의결과를읽었습니다. 하루1개안전·3~4개위험경계를정하지않았습니다. 도입의끊지않기안내를중립주제명으로고친정확span제안을독립승인했고 적용된현재intro도다시읽었습니다.
- 대조 출처: https://doi.org/10.1371/journal.pmed.1003508 ; https://doi.org/10.1007/s00394-018-1692-3

### 2-36. 여건이 되면 몸을 담그는 목욕을 고려하세요
- 판정: 적합
- 판단·문제·수정 권고: 일본40~59세30,076명19년·2,097CVD·거의매일대주0~2회HR0.72및하위질환값을 원초록과대조했습니다. 전체사망효과나샤워대목욕인과시험이아니라고밝혔습니다. 고정30분입욕을권하지않고고령/심혈관주의를 남겼습니다.
- 대조 출처: https://doi.org/10.1136/heartjnl-2019-315752

### 2-37. 낮잠은 30분 안으로 끝내세요. 1시간을 넘기지 마세요. 1~2시간은 자야 버틸 수 있다면 몸을 점검하세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 우산리뷰16메타분석244결과·인지18RCT·SMD0.69와 운동0.99를 원문해당절에서읽었습니다. CHD RR1.30은본문에서nappers대non-nappers이며60분초과조건을붙이지않습니다. 초록/본문시간귀속충돌을고지했습니다. 실측노인1,338명926사망과시간대분모1,089명·HR1.13/1.07/1.30도확인했습니다. 30분은사망예방경계가아닌실천권고임을밝혔습니다. 제목이길고임상검사순서는저자판단이므로개별진료판단으로다듬는것을권합니다. 모든하위리뷰부록은미확인입니다.
- 대조 출처: https://doi.org/10.3389/phrs.2026.1609013 ; https://doi.org/10.1001/jamanetworkopen.2026.7938 ; https://doi.org/10.1038/s41467-020-20585-3

### 2-38. 잠이 부족한 뒤에는 다음 날 밤에 바로 보충하세요. 주말로 미루지 마세요
- 판정: 적합
- 판단·문제·수정 권고: 85,618명·중앙8년·개인필요량보다2.5시간부족한밤·기간별누적부족평균2.5~3.5/>3.5시간·직후첫밤의보충평균>0시간을 원문결과/방법에서대조했습니다. HR1.15/1.42/1.12/1.13과미국4,586명재현을구별합니다. 비유의를위험소거로쓰지않으며완전밤샘/주말보충으로확대하는한계를명시했습니다.
- 대조 출처: https://doi.org/10.1038/s41467-026-72461-1

### 2-39. 야간 교대를 오래 할수록 심혈관 위험이 커집니다. 옮길 수 있으면 일찍 옮기세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 23코호트RR1.13/1.27·5년당1.07및1.05를대조했습니다. 실제초록4%/RR1.05충돌을본문에고지했습니다. 암12연구12,132건과중국남성8,202건·중앙16.1년을구별합니다. 8명빛/어둠복합실험은7,000~12,000lux·생체시계종말점이고CVD/사망시험이아닙니다. 설명이매우길어중복을줄일수있으나필수조건/원문충돌고지는보존해야합니다. 연결정정전수검색·한국어부록은미확인입니다.
- 대조 출처: https://doi.org/10.3389/fpubh.2025.1668848 ; https://doi.org/10.1093/occmed/kqaf040 ; https://doi.org/10.5271/sjweh.4290 ; https://doi.org/10.1056/NEJM199005033221801

### 2-40. 식용유의 밀폐 포장과 제조 정보를 확인하세요
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 광저우2010~2022년·농도중앙1.29/IQR0.12~6.58·즉시2.865/연2.593감소·간기능PR0.650과 광시1,611명81.7%·직접효과aOR1.9/1.8을대조했습니다. 간암/사망효과나한국방앗간전면금지를주장하지않고국내규격미확인을2026-10-18로명시했습니다. 시행령21조2호의직접최종소비자판매업종정의·규칙37조의별표15위임은읽었으나별표전체/현행아플라톡신규격은미확인입니다. “유통기한”은국내소비기한표시와함께확인하도록용어보강을권합니다. 포장이오염검사합격보장이아니라는제한을유지하세요.
- 대조 출처: https://doi.org/10.3389/fpubh.2024.1484414 ; https://doi.org/10.1080/16549716.2024.2336312 ; https://publications.iarc.fr/123 ; https://www.law.go.kr/법령/식품위생법시행령/제21조 ; https://www.law.go.kr/법령/식품위생법시행규칙/제37조

### 2-41. 돼지기름·버터 대신 식물성 기름을 쓰세요. 기름을 번갈아 살 근거는 없습니다. 아마씨유의 추가 이득은 제한적입니다
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 포화지방전체15RCT56,675명과CVD12시험53,758명RR0.83·전체사망0.96을구별합니다. 오메가6의LA12/GLA7시험과ALA하위총사망5시험19,327/CHD4시험19,061·부정맥2시험4,912명RR0.73을대조했습니다. ALA모든심장효과없음으로단정하지않습니다. 국내조리유권장량은미확인입니다. 제목이길어원문의조건과기름교대근거부족을유지하면서짧게다듬는것을권합니다.
- 대조 출처: https://doi.org/10.1002/14651858.CD011737.pub3 ; https://doi.org/10.1002/14651858.CD011094.pub4 ; https://doi.org/10.1002/14651858.CD003177.pub5

### 2-42. 볶고 튀길 때는 레인지후드를 켜세요. 불 붙인 때부터 끝날 때까지
- 판정: 수정 권장(warn)
- 판단·문제·수정 권고: 사례대조기반OR1.74/2.11을확률비로쓰지않습니다. 대만Table4의41+144+374=559대조/107+226+510=843환자와OR0.49를직접읽었습니다. cookingtime-years>10은경력10년이아니며방법0.33/0.67경계와표4라벨불일치·메타초록13/본문14편불일치를밝힙니다. 상하이71,320명429폐암·환기/석탄의HR1.49/2.03/1.03을구별합니다. 모든부록/정정은미확인입니다. 통계설명이길어중복설명을줄이는것을권하되노출·분모·한계는남기세요.
- 대조 출처: https://doi.org/10.2147/OTT.S100949 ; https://doi.org/10.1038/s41598-020-63656-7 ; https://doi.org/10.1002/ijc.29020

## 도입·TODO·참조·문체

도입은 관찰연관과 무작위시험을 구별하며 수치를 개인효과로 보장하지 않습니다. 원작성자 #35 도입 최소안 `publication-formal-intro-correction-r1.json` SHA `0c9663be2fbc6e9dcaa2e56c6ccc60932361c301a6e3de88af6f0b592afc6549`의 유일span “달걀은 끊지 않기(제35항)”→“달걀과 사망 위험(제35항)”을 현재raw/intro해시로 독립 승인했습니다. ROOT 적용 뒤 바뀐도입을 다시읽었습니다. #32추가 DOI `10.1136/bmj.j4849` 사유의 채소·과일주제오류는 `doi-annotation-correction-proposal-r1.json` SHA `72af44c58bf4752aebf534133b06902665755a866db88788f8dc791bff177116`의 비만성인감량시험사유로 고치는 최소안만 독립 승인했습니다. 이 두 승인은 절전체 정식판정을 대신하지 않습니다.

다른절참조는 제3절2항/11항, 제6절26항, 제22절4항과 대상제목을 직접대조했습니다. 제24절(병원이용), 제1절(너무일찍죽지않기)의 주제참조도 연결됩니다. 같은절 앵커는 해당현재제목과 주제가 이어집니다. 제목변경으로 외부incoming참조를 모두 자동재검사했다는 주장은 하지 않습니다. 공개예정표시는 없습니다. 도입의 주제명+항번호목록은 목차형 안내입니다.

TODO9개는 실제 남은한계와 대조했습니다. #3지원·#10스케일링·날트렉손허가는 이미확인되어 TODO에서 완료되지않은것처럼 남아있지 않습니다. 담뱃값/무니코틴기기/아캄프로세이트유통/견과비용/국내영양량/부록/식용유규격/조리유량/기타금액어림은 미확인입니다. 저염소금가격차 TODO는 현재비용의 미확인표시와 부합합니다.

문체는 합니다/하세요로 통일되고 숫자설명·조건·부정이 보존됐습니다. 통계용어설명이 반복되고 #37·39·41·42의 제목/세부설명이 긴 점은 warn입니다. 이를줄일때 분모·관찰설계·노출·원문충돌고지를 삭제하면 안 됩니다. 비용의 원화어림 일부는 중국위안원문과 대조했으나 단순환산의 증거는 없고 국내근거부족은 TODO/warn으로 남겼습니다.

## 의학 원초록 캐시 색인

아래는 실제 열린 기존 raw 경로/DOI입니다. 초록에 없는 전문세부를 확인한 것으로 확대하지 않습니다. 캐시수집시각은 선행수집자의 시각이며 이번신규요청시각이 아닙니다.

- <https://doi.org/10.1016/S0140-6736(15)01225-8> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9d76eccee18ffd543f24.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(15)00340-2> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/bf9ac65f9d9ef2b71512.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1056/NEJMsa1211128> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9a806d34dd9a22f88357.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(10)61388-8> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4419084fca5878740fdb.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD006103.pub8> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7edb7882b06470c96504.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD000146.pub5> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d55015cacab9b75c4357.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD013308.pub2> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d7233d91d92af809e2ee.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.7326/M14-2805> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e8b65ecbbea63c8460dc.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD008286.pub3> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7dcf6573dc7c0df04b17.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD002850.pub4> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d6469feb0a30d8a5cd20.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD010216.pub11> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9326e464f38ade934dda.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1161/CIRCULATIONAHA.118.037401> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d589bf67028de68ae779.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jamainternmed.2019.2478> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/1deca7ea2a5476b815ed.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1371/journal.pone.0070679> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/156bcb32b83b43193b51.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1056/NEJMoa1311889> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/262bccdaabbcd9a9ee70.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/j.jdent.2026.106789> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/85937fcbb2df949bcf5f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1007/s41999-025-01319-4> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7687b13873bdd5f9ebb2.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S2468-2667(21)00302-9> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/683bb7799e08f8155c9f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/ntr/ntaf111> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c8c171be347ded2a2f52.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/eurjpc/zwad229> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e1b1009e2c926ca207f0.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jamainternmed.2015.0533> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a3967d4d88be84683f13.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1056/NEJMoa2105675> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/f471019f1972c206279f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/eurheartj/eht295> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/f4c786bd3453be05c2b1.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/sleep/33.5.585> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/98ed1f52f78b79d8a5ec.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1161/JAHA.117.005947> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ac28c0b40432ac8d05e6.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bmj.l4570> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a8a5eafff37c58c7d874.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(10)61350-5> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/879f70de45077f18cea1.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/sleep/zsad253> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/41a3b8c317dcaf2b78ce.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bjsports-2016-096822> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/0b283ffd37147f6ec12d.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1038/s41591-022-02100-x> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c87a83bee6d4f965e53a.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bjsports-2021-105061> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/648e30fdf4ead0bd50fb.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.7326/M17-0212> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e068967c4a851dd421bf.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(16)30370-1> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e522d333f433d51fb64d.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/aje/kwt261> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6d999285da35006e915f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.3945/ajcn.117.153148> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4b7da62d583d8e829ddf.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.7326/M19-1621> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/3b5f25797f64d4d98130.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(18)30134-X> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b0ff44e44a3d91f9048f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jamanetworkopen.2023.6185> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b4f3ad5110145baa34db.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/archinte.166.22.2437> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c9d68df968a86f93b3e7.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/j.ejim.2026.107103> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b9c928ac241d047dc531.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1111/add.16297> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/2230022860fe369613e8.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD004148.pub4> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5f4aff456ae7268e9379.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jama.2014.3628> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/52ab8a5eff9189bb5042.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1111/joim.70133> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6ec72dd8f254bf56dca9.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1056/NEJMoa1307352> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a12e0c2ec1910d24976c.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jamainternmed.2019.6969> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/0b6beb299d71a48a9114.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1177/2047487319894685> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4e0e0655683271e12c19.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/j.fct.2020.111830> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5fde18292b4ae6fd255f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.3390/toxins14070452> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/fb779ced00d87af760f5.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(18)31310-2> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/76580b9193ca0c12e83b.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/j.yrtph.2018.03.019> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7bdf70026746773e4d1c.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bmj.j5024> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b52b1e14c57ddd410243.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/ije/dyw319> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c15fa559b9104d8fdd17.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1161/CIRCULATIONAHA.120.048996> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/931785f9c2296f3d6d44.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jama.2018.2151> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9a9a5095d6eb444aa465.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/j.envint.2020.105974> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/da2b073459b6bda06a19.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bmj.b929> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/252a099803319d0f8443.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S1470-2045(16)30239-X> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/eeaca2b0cbf9a50935ec.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1111/joim.12496> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e68a6464b290a05b21d2.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(16)30175-1> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b33e4208c4b4ebee022f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bmj.i2716> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/190df93ef40965b88825.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jama.2012.113905> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/790629f89037aa491844.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/j.jacc.2019.09.068> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/edda638827db3ce65f50.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1371/journal.pmed.1003508> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a0f64cf2a93beec39bfc.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/heartjnl-2019-315752> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/0e15be4104e49df0da5f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.3389/phrs.2026.1609013> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/3a43bc70f539217294b6.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1136/bmj-2023-077310> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/1db316287e0c39f6b946.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1038/s41467-020-20585-3> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/10f476808bce3a7c7d29.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1016/S0140-6736(18)31812-9> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d3719f3370e6ea4aeb80.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.3389/fpubh.2025.1668848> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/84c9895f1d5a1cd6d973.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1093/occmed/kqaf040> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/37d716cf70d6d27c928e.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.5271/sjweh.4290> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c07e30ac799e35e1533c.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1001/jamanetworkopen.2026.7938> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ae28aefbe1ccc7000bd4.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1056/NEJM199005033221801> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/cf5aca00940d2def4af9.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.3389/fpubh.2024.1484414> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/68e1ffa9ea623ad1b44f.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1080/16549716.2024.2336312> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/fef2f14697dce605c0b3.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD011737.pub3> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/fed4ecd055021a77a46b.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD011094.pub4> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/73fe7c4149bcd3f2f4d2.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/14651858.CD003177.pub5> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/2a6d4461b4b4fe0070fb.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1038/s41467-026-72461-1> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d9122b213c22906fa8ad.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1038/s41598-020-63656-7> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6b4d69222cd678138588.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.2147/OTT.S100949> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/00efb55badb5af137a4e.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)
- <https://doi.org/10.1002/ijc.29020> — `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/640e361c1efc7d803c07.json` (기존 core 원초록; 존재/서지만으로 전문승인하지 않음)

## 요약

- block 0건, warn 20건, 삭제 권고 0건. warn은 항목당1건으로 계산했습니다. 도입2개불일치는 별도최소수정승인 뒤 ROOT가 적용했고 현재본문재열람으로 해결을 확인했습니다.
- 미확인: 제1·3·6·10·11·12·14·17·18·20·21·22·25·26·27·29·32·33·34·37·39·40·41·42항에 위와같이 한계를 남겼습니다. 모든것을 새로검증했다는 판정이 아닙니다. 핵심효과·노출·분모의 확인범위와 독자에게명시한한계에 근거한 판단입니다.
- 최종 CLI 해시와 machine 결과는 마지막작성 직전에 직접 얻어 아래에 기록합니다.

## 최종 현재 본문 재확인

2026-10-18 14:53 UTC(Asia/Seoul23:53)에 도입 전체의 변경부분과 DOI주석4개를 직접 다시읽었습니다. 제35항안내는 “달걀과 사망 위험(제35항)”, bmj.j4849사유는 “비만 성인의 체중 감량 중재 시험을 통합한 근거를 보완”입니다. 최종raw SHA256 `b580b637d34819b9de1169d80093a9d953a5298ca1e7d84a34a70a63b270949a`. 시작정규화해시와 달라진 두 intro수정의 사실·참조를 재판단했습니다. 항목42개와TODO9개를 보존했습니다. 최종 machine `kr-fit.mjs 2 --check`는 block0/warn0/예외0으로 통과했습니다. 이 기계결과와 위 내용검토를 구별합니다. 최종본문 CLI해시는 마지막줄과 같습니다.

KR-FIT: pass blockers=0 sha256=d86b65f72379b541ebb4e039162b2c88ced964a481efa917dcd611dd56b429f9
