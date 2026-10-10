# 제1절 한국 실정 적합성 검토

검토일: 2026-10-10 · 검토 대상: `kr-harness/runs/R01a-01-styleB/7-refined.md` (42항목)

AGENTS.md, KR-GUIDE.md, kr-fit-reviewer 정의, kr-fit-review 스킬, 1-analysis.md·2-research.md와 중국어 원문을 대조했다. 한국 법령·고시·기관 자료는 아래 URL을 이번 검토에서 직접 열었다. 기존 조사 기록만으로 열람을 갈음하지 않았다. 의학 연구의 국적은 부적합 사유로 삼지 않았으며 원문 연구와 수치를 보존하는 것을 원칙으로 했다.

기계 검사: block 0·warn 0·예외 통과 1. 시작·종료 해시 일치: `5de33cdc56bc79bc31526a53eace21526378aa7a2381c2d56d3dd3e759964cd2`.

## 직접 확인한 공통 근거

- **L1 도로교통법**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281875&type=XML&efYd=20261010 — 제11조 영유아는 6세 미만, 제44조 음주 기준 0.03%, 제50조 모든 좌석 안전띠·인명보호 장구, 제156조 자전거 운전자 처벌 제외. 시행령도 열었다: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290387&type=XML&efYd=20261010 .
- **L2 소방시설법**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=236977&type=XML&efYd=20261010 — 제10조 공동주택 중 아파트·기숙사 제외, 제16조 피난시설 주위 물건 적치 금지, 제61조 300만원 이하 과태료, 제37조 제품검사 합격표시. 시행령 제10조는 소화기와 단독경보형 감지기를 정한다: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290451&type=XML&efYd=20261010 .
- **L3 가스·방문판매**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276549&type=XML&efYd=20261010 — LPG법 제30조 공급자의 점검, 제40조 제5항 개조 금지, 제73조 200만원 이하 과태료. https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289257&type=XML&efYd=20261010 — 도시가스 시행규칙 별표 7 주기적 점검·이상 시 보수. https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290239&type=XML&efYd=20261010 — 방문판매법 제8조 14일 철회와 사용·일부 소비 제한.
- **L4 수상레저**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=267437&type=XML&efYd=20261010 — 제20조 장비 착용, 제64조 제2항 50만원 이하 과태료. 일반 계곡 물놀이 전체의 법적 의무로 확대하지 않았다.
- **H1 건강검진 실시기준**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000272270&type=XML — 별표·서식 포함 원문 열람. 공복혈당 검사, 40세 B형간염, 54·60·66세 여성 골밀도, 66·70·80세 낙상검사와 3m 걷기·한발 서기, 다음 해 3월 31일 확진 진료 문구 확인. BMI 표기는 일반 임상 정의와 혼동하지 않도록 검진 결과표의 표기라고 한정했다.
- **H2 암검진**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281743&type=XML&efYd=20261010 및 https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000270432&type=XML — 유방·자궁경부·대장·위·폐암 검진 연령·주기, 분변잠혈 양성 시 내시경, 위내시경 기본, 폐암 고위험군·금연 후 15년 예외, 제11조 90%/10%와 자궁경부·대장 전액 부담 확인.
- **H3 국가예방접종**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285754&type=XML 및 별표 1 PDF — B형간염·파상풍 12세 이하, HPV 12~26세 여성(18~26세 저소득층)·12세 남성, 독감 65세 이상·6개월~14세·임신부, 65세 이상 폐렴구균 다당질 1회 확인. https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285325&type=XML&efYd=20261010 제24조도 열람했다.
- **L5 HIV**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=220905&type=XML&efYd=20261010 — 제8조 익명검진 안내·제공, 제8조의2 본인 통보와 예외, 제7조 비밀 유지, 제19조 전파매개행위 금지, 제25·26조 형벌 확인.
- **L6 장기 매매**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290657&type=XML&efYd=20261010 — 제7조 매매 금지와 제45조 제1·2항 처벌 구분 확인.
- **L7 방사선**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=259305&type=XML&efYd=20261010 및 https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=286119&type=XML&efYd=20260519 — 생활주변방사선법 감시·보고, 원자력안전법 제2조 장치·동위원소 구분, 제97조 사업자의 지체 없는 신고 확인.
- **L8 그라인더**: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=273603&type=XML&efYd=20261010 — 제122조 지름 5cm 이상 연삭숫돌 덮개, 작업 전 1분·교체 뒤 3분 시험운전, 최고 속도·측면 사용 제한 확인.

## 항목별 판정

벌금·과태료 표는 API 별표의 PDF도 직접 열어 대조했다: https://www.law.go.kr/LSW/flDownload.do?flSeq=169705915 (도로교통 시행령 별표 6, 동승자 13세 미만 6만원·이상 3만원), https://www.law.go.kr/LSW/flDownload.do?flSeq=169705949 (별표 8, 안전띠·헬멧 범칙금), https://www.law.go.kr/LSW/flDownload.do?flSeq=169695073 (소방시설 시행령 별표 10, 피난시설 위반 100·200·300만원).

### 1-1. 안전띠
- 판정: 적합. L1과 경찰청 https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1614 의 “2025년 … 사망 2,549명” 확인. 미국 사고 통계·효과는 미국 자료라고 구분했다.

### 1-2. 헬멧
- 판정: 적합. L1의 이륜차·개인형 이동장치·자전거 구분에 부합. 오토바이 연구를 다른 이동수단의 직접 연구로 소개하지 않았다.

### 1-3. 연기감지기·일산화탄소 경보기
- 판정: 수정 권장(warn).
- 문제: “잠든 사람은 냄새로 깨지 못합니다.” 중국 원문 쉽게에도 있는 문장이라 번역자가 새로 만든 주장은 아니다. 하지만 절대적으로 깨지 못한다는 뜻은 지나치다. 이득의 41% 통계만으로 후각 반응을 증명할 수는 없다.
- 수정안: “잠들면 냄새만으로 깨어날 거라 기대하면 안 됩니다.” 이득 또는 출처에 이를 뒷받침하는 수면 연구를 보강한다. 원문의 OR 0.39와 화재 통계를 바꾸지 않는다.
- 근거: 직접 연 초록 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=AUTH:Carskadon%20AND%20olfactory&format=json&resultType=core 의 Carskadon 연구(PMID 15164891, DOI 10.1093/sleep/27.3.402)는 “human olfaction is not reliably capable of alerting a sleeper”라고 결론 냈다. 1단계 수면·일부 피리딘 자극에는 반응도 있었다. https://www.usfa.fema.gov/downloads/pdf/statistics/v22i2.pdf 의 41%·24% 확인. 한국 제도는 L2, 주택 사망 45.9%는 https://www.bokjiro.go.kr/ssis-tbu/cms/pc/news/promotion/1308417_1118.html 의 이미지 대체텍스트에서 확인. https://www.mcst.go.kr/kor/s_notice/press/pressView.jsp?pSeq=17142 는 야영장 화재안전 기준 강화 보도자료다.

### 1-4. 가스 설비·방문판매
- 판정: 적합. L3 확인. https://www.incheon.go.kr/safe/SAFE060301/1403964 의 밸브 잠그기·환기·전기 스위치 조작 금지와 맞는다. 찾지 못한 호스 교체 주기를 법적 의무로 단정하지 않았다.

### 1-5. 야생버섯
- 판정: 적합. https://www.rda.go.kr/board/board.do?mode=view&prgId=day_farmprmninfoEntry&dataNo=100000805255 에서 국내 2,292종·식용 416종(18%)·독버섯 248종·불명 1,550종과 민간 구별법 근거 없음을 확인. 중국 사망 통계는 중국으로 명시했다. “토해내고 … 의료기관”은 해당 농촌진흥청 문구의 재현이며 검토자가 새 처치를 추가하지 않았다.

### 1-6. 전기자전거·킥보드 충전
- 판정: 적합. L2 및 https://www.korea.kr/news/policyNewsView.do?newsId=148946042 의 678건·485건(70%)·111건, 완충 즉시 분리·현관/비상구 피하기 확인. 한국에 없는 중국식 실내 충전 금지 조문을 이식하지 않았다. 70%는 공식 자료 자체의 반올림 표기다.

### 1-7. 혈압
- 판정: 적합. H1과 한국 고혈압 팩트시트 초록 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.5646/ch.2026.32.e13&format=json&resultType=core 에서 2023년 1,260만·29%·79/76/62%·젊은 층 50% 미만 확인. 중국 유병률을 한국 수치로 소개하지 않았다.

### 1-8. 공복혈당
- 판정: 적합. H1 확인. 미국 권고와 아시아계 미국인 BMI 23, 한국 검진 결과표를 구분한다. 중국 BMI 24/28 기준을 한국 기준으로 이식하지 않았다.

### 1-9. 음주·과속
- 판정: 적합. L1 제44조 0.03% 확인. 이 수치를 안전선으로 제시하지 않았다. WHO의 속도 모형은 국제 근거로 유지했다.

### 1-10. 카시트
- 판정: 적합. L1의 6세 미만을 사용했다. 미국 효과 연구의 1세 미만·1~4세 숫자는 한국 법적 연령과 구분해 보존했다.

### 1-11. 창문 추락
- 판정: 적합. https://www.kdca.go.kr/injury/biz/injury/damgInfo/childDamgMain.do 에서 “추락 및 낙상(42.6%)” 확인. 뉴욕의 집주인 의무는 뉴욕 사례이며 한국 의무로 소개하지 않았다.

### 1-12. 물놀이·구명조끼
- 판정: 적합. L4와 https://www.korea.kr/news/policyNewsView.do?newsId=148946340 및 https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=119065 를 열람. 최근 5년 112명, 하천·계곡 비중, 안전 부주의 41명과 일치. 법 적용 범위를 수상레저기구 활동에 한정했다.

### 1-13. 균형 운동·주거 개선
- 판정: 적합. H1과 https://www.kdca.go.kr/injury/biz/injury/damgInfo/odsnDamgMain.do 의 75세 이상 주거지 손상 퇴원율 2,065명·65~74세 623명 확인. 연구의 낙상 횟수를 사망 감소 수치로 바꾸지 않았다.

### 1-14. B형간염
- 판정: 적합(한국 검진·국가접종 치환). H1·H3 확인. 한국 연구 초록 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.4178/epih/e2015055&format=json&resultType=core 에서 4.6%→2.9%와 연령대 확인. 신생아 시험 효과 84%를 성인 효과라고 단정하지 않았다. 원문의 항체 소실 성인에 대한 접종 조언은 유지됐으며 이번 검토에서 그 임상 적응증 자체를 새 한국 지침으로 확정한 것은 아니다.

### 1-15. 상처·파상풍
- 판정: 수정 필요(block).
- 문제: “마지막 접종이 5년 넘었으면”, “10년 넘었을 때”는 인용한 CDC의 5년 이상·10년 이상을 초과로 바꿔 정확히 경계에 있는 사람을 제외한다. TIG 적응증 목록에는 HIV·중증 면역저하가 빠졌다.
- 수정안: 쉽게와 이득의 표현을 “5년 이상”, “10년 이상”으로 통일하고, 더럽거나 큰 상처에서는 HIV 또는 중증 면역저하가 있어도 TIG를 평가한다는 예외를 덧붙인다. 제목의 당일 진료 권고는 유지한다.
- 근거: 직접 열람 https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html — “5 or more years ago”, “10 or more years ago”; TIG 목록의 “People with HIV”, “People with a severe immunodeficiency”. 한국 무료접종 대상은 H3과 부합한다.

### 1-16. HPV 백신
- 판정: 적합. H3 별표 1의 여성 12~26세·18~26세 저소득층·12세 남성과 2/3회 접종 확인. 오래된 여성만 지원하는 규정으로 되돌리지 않는다. 스웨덴 IRR은 원문 연구로 유지했다.

### 1-17. 유방촬영
- 판정: 적합. H2의 40세 이상·2년과 비용 구분 확인. 미국 40~74세·추가검사 근거 불충분을 한국 법적 제외 연령으로 바꾸지 않았다.

### 1-18. 자궁경부암 검진
- 판정: 적합. H2의 20세 이상·2년·세포검사·공단 전액 확인. 제목의 30세는 원문 HPV 연구 권고 맥락이며 비용·쉽게·이득에서는 한국의 20세를 명시한다. 인도 HPV 효과를 한국 국가 세포검사 효과라고 쓰지 않았다.

### 1-19. 대장암 검진
- 판정: 적합. H2의 50세 이상 매년 분변잠혈·양성 시 내시경·전액 부담 확인. 연구 초대군과 실제 수검군의 차이·사망 효과 불확실성을 남겼다.

### 1-20. 독감 백신
- 판정: 적합. H3의 65세 이상·6개월~14세·임신부 확인. 심근경색 환자 연구와 건강한 노인의 낮은 확실성을 구분했다.

### 1-21. 대상포진 백신
- 판정: 적합. H3과 감염병법 제24조에서 대상포진은 일반 국가예방접종 대상 질병에 들어 있지 않음을 확인. 지방 지원·병원 가격은 확인하지 않았고 본문도 특정 가격을 단정하지 않는다. 연구 효능·이상반응은 유지했다.

### 1-22. 폐렴구균 백신
- 판정: 적합. H3의 65세 이상 다당질 1회와 부합. 연구의 13가 단백결합 백신 효능을 한국 무료 다당질 백신 효능으로 적용할 수 없다고 명시했다.

### 1-23. 헬리코박터
- 판정: 적합(한국 국가검진 설명). H2의 40세 이상·2년·위내시경 기본 확인. 린취 시험은 중국으로 명시. 가족 동시 검사·치료 조언은 원문 유지이며 국가암검진이 이를 무료 제공한다는 뜻으로 쓰지 않았다.

### 1-24. 저선량 CT
- 판정: 적합. H2의 54~74세·30갑년 현재 흡연자·2년, 검진 후 금연자의 금연 15년 이내 예외 확인. NLST의 55~74세·매년·전 흡연자 포함 조건과 한국 제도를 구분했다.

### 1-25. 109·수단 제한
- 판정: 수정 권장(warn).
- 문제: 출처의 `lsiSeq=279695`만 지정한 링크는 기본값이 2026-11-12 시행예정 본문으로 열릴 수 있다. 2026-10-10 현재 확인을 재현하기 어렵다. 인용 내용 자체는 현행과 같으므로 block은 아니다.
- 수정안: 시행일을 명시한 현행 URL을 병기한다.
- 근거: https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=279695&type=XML&efYd=20260512 의 제2조의2와 https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000244764&type=XML 직접 확인. https://www.129.go.kr/109/ 의 24시간 109·1577-0199 안내, 한국 파라콰트 논문 초록 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1093/ije/dyv304&format=json&resultType=core 의 5.26→2.67·847건·RR 0.63도 확인했다.

### 1-26. 가정 소방용품
- 판정: 적합. L2 확인. 소화담요·대피용 마스크를 한국 정부의 의무 목록이라고 단정하지 않고 TODO로 남겼다. 장비 자체의 효과와 방문 교육 효과를 구분했다.

### 1-27. 눈에 보이는 혈뇨
- 판정: 적합(현지화). 영국 1차 의료 연구의 예측도를 영국으로 표시했고 한국 진단율로 바꾸지 않았다. 한국 법·제도를 새로 주장하지 않는다.

### 1-28. 발기 문제·심혈관
- 판정: 적합(현지화). 국제 추적 연구의 연관성을 인과·검사 자체의 사망률 이득으로 바꾸지 않았다. 직접 연 미국 공식 설명서 https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d905dc8d-917f-4ea3-a4ee-a1ecf6967d4e 를 미국 출처로 구분했다.

### 1-29. 생활습관·발기 기능
- 판정: 적합(현지화). 원문 연구·점수 척도를 보존했고 금연·감량·약 참조의 절/항목을 확인했다. 한국 국가제도 수치로 바꾸지 않았다.

### 1-30. 콘돔·주사기
- 판정: 적합(현지화). 이성 간 혈청 불일치 커플의 효과를 전체 성행위 위험으로 바꾸지 않았다. 한국 지원 조건은 제38항으로 연결한다.

### 1-31. HIV 익명검사
- 판정: 적합. L5, https://news.seoul.go.kr/welfare/archives/229549 의 “거주지 관계없이 누구나 익명으로 무료검사”·20분·12주, https://kdca.go.kr/kdca/3425/subview.do 의 지역별 무료 익명검사는 거주지 보건소 문의 안내를 확인했다. 전국 신속검사 조건을 서울 조건과 동일하다고 단정하지 않았다. 제19조 법문 자체는 확인했으나 헌법재판소 결정의 적용 범위는 TODO 그대로 미확인이다.

### 1-32. 곁의 한 사람에게 말하기
- 판정: 수정 필요(block: 추가 단정 미확인).
- 문제: “넷 중 셋은 그사이 주변 사람과 연락했지만 말하지 않았습니다.” 원문 쉽게에도 있으나 원문 이득·논문 초록이 확인하는 것은 대인 접촉 76.8%뿐이다. 그 63명 모두가 자살 생각을 말하지 않았다는 결론은 접촉 비율로부터 나오지 않는다. 사실이 거짓이라고 확정한 판정은 아니며 현재 근거로는 확인되지 않은 단정이다.
- 수정안: “넷 중 셋은 그사이 주변 사람과 연락했습니다.”로 한정한다. 76.8%·82명·47.6%와 원문 DOI는 그대로 둔다.
- 근거: 제목으로 직접 찾은 논문 초록 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22duration%20of%20the%20suicidal%20process%22&format=json&resultType=core (PMID 19026258): “76.8% (N = 63) reported having had any kind of interpersonal contact.” 초록에는 비공개/미발언 비율이 없다. 출판사 본문 https://www.psychiatrist.com/jcp/duration-suicidal-process-time-left-intervention-consideration/ 는 재시도에도 403으로 전문 미확인. DOI 검색 실패를 DOI 변경 근거로 삼지 않았다.

### 1-33. 중독 후유증
- 판정: 수정 권장(warn).
- 문제: “후유증 없이 끝나는 방법은 없습니다.”는 모든 생존자에게 후유증이 남는다는 뜻으로 읽힐 수 있다. 바로 앞 시험도 후유증 비율이 25.0%/46.1%로, 100%를 보고하지 않는다. 중국 원문에도 같은 단정이 있으므로 현지화자가 새로 만든 주장으로 보지 않는다.
- 수정안: “살아남아도 후유증이 없으리라는 보장은 없습니다.” 원문 연구 수치는 유지한다.
- 근거: 본문이 인용한 Weaver 무작위 시험 https://doi.org/10.1056/NEJMoa013121 의 본문 재현 수치 19/76·35/76과 대조. 한국 파라콰트 규제는 위 제25항에서 직접 확인한 한국 논문 초록으로 확인.

### 1-34. 추락의 장기 대가
- 판정: 적합(현지화). 신장 남부 연구와 독일 복귀 연구의 나라·대상·관찰연구 한계를 표시했다. 중국 입원비를 원화로 변환하지 않았다. 원 저자 경험도 한국 독자 사례로 바꾸지 않았다.

### 1-35. 신장 매매
- 판정: 적합. L6의 제7조와 제45조 처벌 구분 확인. 미국·노르웨이 기증자와 인도 매매자의 결과를 구분했으며 한국 발생률·보상금으로 바꾸지 않았다.

### 1-36. 출처 모를 금속 부품
- 판정: 수정 권장(warn).
- 문제: `lsiSeq=286119` 기본 본문은 2027-01-01 시행예정 버전을 열 수 있다. 현행 확인 날짜를 재현하기 어려우나 제2·97조 인용은 현행과 같다.
- 수정안: L7의 2026-05-19 시행일 지정 URL을 병기한다. 사업자의 원안위 신고 의무와 일반인의 112/119 신고 권고는 구분을 유지한다.
- 근거: L7의 현행 본문 직접 확인. IAEA 보고서 https://www-pub.iaea.org/MTCD/Publications/PDF/Pub815_web.pdf 는 403으로 이번 독립 검토에서 전문 미열람이며 해외 사례의 의학 수치 재검증으로 주장하지 않는다.

### 1-37. 도박 빚·상담
- 판정: 적합. https://www.kcgp.or.kr/pcMain.do 에서 “국번없이 1336(무료) / 365일 연중무휴 09:00 ~ 22:00” 직접 확인. 109는 제25항 공식 안내와 부합. 스웨덴 SMR·정정 숫자를 한국 도박자 전체의 위험으로 적용하지 않았다.

### 1-38. PrEP
- 판정: 수정 권장(warn).
- 문제: “2025년 1월부터 … 지원사업을 합니다”는 현재 진행형이나 2026년 지속 여부는 TODO·비고에 미확인이라고 남아 있다. 조건·금액 자체는 2025년 안내문과 맞는다.
- 수정안: “질병관리청의 2025년 안내문은 … 지원사업을 안내합니다”로 자료 시점을 한정하고 보건소에 현행 여부·참여 병원을 확인하라는 문구를 유지한다. 6만원이나 대상 범위를 추측해서 바꾸지 않는다.
- 근거: https://daedeok.go.kr/board/binary/CHC_000005/2097358.pdf 를 메모리에서 PDF 텍스트로 직접 읽음. “본인부담금 6만원(1개월) 제외한 나머지 약값 지원”, 검사 급여 본인부담 전액, 시작 1개월·이후 3개월 평가 확인. 2026년 지속 여부·병원 명단은 미확인.

### 1-39. 골밀도 검사
- 판정: 수정 필요(block).
- 문제: 쉽게의 “1,000명이 검사받으면 골절을 겪는 사람이 5명쯤 줄어듭니다”는 이득의 고관절 골절 5건을 모든 골절/사람으로 넓힌다. 비고의 “세 시험 모두 위험을 먼저 따진 뒤 골밀도를 쟀습니다”도 원 근거 검토의 시험 설계 설명과 맞지 않는다.
- 수정안: “검진·치료 과정에 참여한 여성 1,000명당 고관절 골절이 5건쯤 줄었습니다.”로 결과와 개입을 명시한다. 설계는 “두 시험은 먼저 골절 위험을 평가하고 기준을 넘으면 골밀도를 쟀습니다. 다른 시험은 골밀도와 추가 검사를 함께 했습니다”로 고친다. RR 0.83·42,009명·SCOOP 수치는 보존한다.
- 근거: 직접 연 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1001/jama.2024.21653&format=json&resultType=core 의 초록은 “Two RCTs used 2-stage screening … One RCT used BMD plus additional tests”, 고관절 RR 0.83과 주요 골다공증성 골절 RR 0.94를 구별한다. 한국 검사 연령·허리뼈 원칙은 H1 확인. 한국 골절 후 사망률은 https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.11005/jbm.2020.27.4.281&format=json&resultType=core 의 여성 14.0%·남성 21.0% 확인.

### 1-40. 골다공증 약
- 판정: 적합. 위 한국 골다공증 팩트시트 초록에서 약 복용 33.5%·골절 뒤 12개월 41.9% 확인. HORIZON 한 시험의 사망 결과와 전체 메타분석의 불확실성을 구분했다. 칼슘·비타민 D는 두 무리 모두 사용했다는 원 설계를 유지했다.

### 1-41. 얼음 두께
- 판정: 적합. https://www.safekorea.go.kr/safekorea-kor/acts/nacts/action-guide.do?category=summerWaterPlay&menuSn=4 를 직접 열어 “최소 10cm … 소수인원(1~2명)”과 결빙기·해빙기 진입 금지를 확인했다. 10cm를 안전 보장으로 소개하지 않는다. 중국·캐나다·미국의 서로 다른 안내는 해당 나라로 구분했다.

### 1-42. 그라인더
- 판정: 적합. L8의 5cm·1분·3분·최고속도 제한 확인. 중국 사고 조사 2건은 한국 법적 근거가 아닌 해외 사고 사례라는 예외 사유가 타당하다. 한국 응급실 연구 DOI·OR을 보존했다.

## 요약

- 내용 검토: block 3건(제15·32·39항), warn 5건(제3·25·33·36·38항), 삭제 권고 0건. 기계 검사 결과와 내용 판정은 별도다.
- 항목 생략/추가 없음(원문·대상 모두 42항목). 도입부 DOI 교체 사유는 한국 통계·제도로 치환한 취지를 확인했다. Lu J 2017 DOI-drop의 기계 “효력 없음”은 제39항 DOI와 괄호까지 잘린 추출값이 같은 기존 문제다. 다른 DOI로 고칠 근거가 아니다.
- 기존 TODO는 한국 CO·버섯·방사선원·얼음 사망 통계, 가스 점검/교체 주기·번호, 일부 백신 가격·지방 지원, 소화담요·대피 마스크 정부 목록, HIV 헌재 적용 범위·서울 밖 조건, PrEP 지속 여부·병원, 뒷좌석 착용률이다. 이를 확인한 것으로 판정하지 않았다. 단정 없는 미확인 자료를 메우기 위해 중국 숫자를 한국 숫자로 바꾸지 않았다.
- 추가 미확인: 제32항 76.8%의 자살 생각 미발언 여부(출판사 전문 403). 이 미확인 단정은 block 1건에 포함했다. 제36항 IAEA 전문은 403으로 독립 재열람하지 못했으나 한국 제도 판정은 L7로 직접 확인했다. 원문의 모든 국제 의학 논문 전문을 새로 검증한 보고서는 아니다.
- 본문 수정·Git 작업은 하지 않았다. 지적을 반영하면 새 본문 해시로 재검토해야 한다.

KR-FIT: fail blockers=3 sha256=5de33cdc56bc79bc31526a53eace21526378aa7a2381c2d56d3dd3e759964cd2
