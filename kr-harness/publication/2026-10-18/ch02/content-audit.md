# 제2절 독립 출판 내용 감사

검토일: 2026-10-18. 대상: `source.md`, `candidate.md`, `manifest.json`, 42개 `entry_snapshot.md`, 현재 존재하는 24개 `editorial-proposal.json`.

**출판 판정: 수정 필요.** 42/42 항목을 읽고 검토 범위를 기록했습니다. 상태 합계: {'warn': 18, 'block': 23, 'unverified': 1}. 이는 내용 감사이며 순수 윤문 42/42 게이트 통과를 대체하거나 취소하는 기록이 아닙니다. 정식 KR-FIT 게이트 승인도 아닙니다. 출판 준비가 완료됐다고 표시하지 않습니다.

- source raw SHA256: `f6ae488455384ae0661f8b278436732c774f7bf34ec327942f28e011729cbe22`
- candidate raw SHA256: `de97a4f0638c7621b72afef6329c971bf379ff82028768e2412143a3e669aa51`
- manifest SHA256: `15ae3b83a9a2a75281ec9abb4a8beef420a0476058fef989f2ba92c2da8b0dba`

`block`은 확인된 오기·범위왜곡 또는 근거보다 강한 처방, `warn`은 핵심 비교 확인 후 보강·제한이 필요한 항목, `unverified`는 중요한 한국 현지 기준을 아직 확인하지 못한 항목입니다. warn도 모든 문장·현행 제도를 출판 승인했다는 뜻이 아닙니다. 접근 실패는 근거가 틀렸다는 판정과 분리했습니다.

## 실제 확인 경로와 한계

제공된 `/workspace/.cache/howtolivebetter/source-check/2026-10-18/medical-doi-cache-index.json`, `crossref-cache-index.json`, `crossref-retry-index.json`를 실제 읽었습니다. 제2절에 연결된 EuropePMC 캐시 본문을 열어 원초록과 DOI·제목을 대조했습니다. Crossref는 서지 확인용이며 원문 검증으로 세지 않았습니다. 캐시 열람을 새 실시간 HTTP 조회라고 부르지 않습니다. 원초록에 없는 주장은 DOI 존재만으로 승인하지 않았습니다.

별도로 HTTPS 인증서 검증을 유지한 urllib 요청으로 제2절 PMC 원문 34개를 받아 연구설계·해당 결과·표 또는 조건을 읽었습니다. XML fullText endpoint의 HTTP500인 19개는 원문 접근 실패이며 연구 무효가 아닙니다. PMCID가 없는 논문도 원초록 확인과 원문 확인을 구별했습니다. 문헌 전체의 모든 부록·모든 인용문헌까지 검증했다는 주장이 아닙니다. 항목별 DOI 확인수준은 아래에 전부 기재했습니다. 원문은 `/tmp/ch02-audit/full-PMC*.body`·`.txt`, 요청상태는 같은 폴더 `fetch.json`에 남았습니다(작업용 자료이며 공개본문은 수정하지 않음).

추가 실시간 1차 근거:

1. Lindson et al.2019, <https://doi.org/10.1002/14651858.CD013183.pub2>. EuropePMC core 원초록 직접 조회: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1002/14651858.CD013183.pub2&format=json&resultType=core>. “neither approach resulted in superior quit rates (RR 1.01, 95% CI 0.87 to 1.17 … 22 studies, 9219 participants)”. 원문 XML은 HTTP500으로 접근 실패. 제4항 대체 리뷰 존재와 결론은 원초록에 명시되어 있습니다.
2. Ma et al.2017, <https://doi.org/10.1136/bmj.j4849>. 제목 검색으로 DOI를 확인한 뒤 원초록과 <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5682593/fullTextXML> 직접 열람. 총54RCT30,206명 중 총사망34시험685사망, RR0.82(0.71–0.95). 비만성인 식이감량±운동 범위입니다. 제32항 ‘RCT가 없다’의 반증이며 일반 정상체중자의 무조건감량 근거가 아닙니다. 조사 중 추정 DOI j4761은 실제로 비타민D 논문이어서 배제했습니다.
3. 공단 금연치료 PDF <https://www.nhis.or.kr/static/html/wbma/c/smkInfo_01.pdf> 직접 열람·pdftotext 대조. “연3회지원”, “(1~2회)본인부담20%”, “(3~6회)본인부담없음”, 이수기준 “6회상담 또는 … 부프로피온56일 이상 / 바레니클린,보조제84일”, “본인부담금100%”. PDF의 지급표·조건을 확인했으나 향후 사업조건 고정을 보장하지 않습니다.
4. 공단 스케일링 <https://www.nhis.or.kr/static/alim/paper/oldpaper/202404/sub/section1_5.html> 직접 열람. “스케일링만을 목적으로 시술하는 경우” 만19세이상 연1회. 이어 치주질환 수술 전단계 전악/부분 치석제거 예외가 나옵니다. 제10항의 전면 비급여 단정을 제한해야 합니다.
5. 금연길라잡이 <https://www.nosmokeguide.go.kr/helpness/counsel>·<https://www.nosmokeguide.go.kr/helpness/center> 직접 열람. “이용금액 무료”, “1544-9030”, “전국17개”. 센터 서비스 “4박5일 … 6개월간9회이상”도 확인하여 모든 국내상담을 4~8회로 동일시하지 않았습니다.
6. 식약처 레비아정 <https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=199700692> 직접 열람. “적정 관리 프로그램과 병행하여 알코올 의존성 치료”, 성인1일50mg, 치료 전7~10일 아편류 미사용을 의사가 판단하는 조건. 실제 처방결정은 의사·최신허가사항을 따릅니다.
7. 보건복지부 공식 보도자료 <https://www.korea.kr/briefing/pressReleaseView.do?newsId=156742756> 및 <https://www.korea.kr/briefing/pressReleaseView.do?newsId=156767651> 직접 열람. 합성니코틴 포함, 2026.4.24 시행 및 금연구역 규제 확인. 법령 제12조 직접 조문 확인범위는 뒤 보충기록과 구분합니다.
8. KDCA 활동지침 자료실 <https://health.kdca.go.kr/healthinfo/biz/health/ntcnInfo/helthEdcRecsroom/helthEdcRecsroomView.do?phledu_recsroom_sn=1931> 페이지를 직접 열었으나 첨부 지침 본문의 해당 권고를 이번에 추출·대조하지 못해 국내 지침 전부검증으로 세지 않았습니다.
9. IARC 공식 보도자료 <https://www.iarc.who.int/wp-content/uploads/2018/07/pr244_E.pdf> 직접 열람: 매우뜨거운음료65℃초과2A. WHO 저나트륨소금 지침 <https://www.who.int/publications/i/item/9789240105591> 안내페이지는 열었지만 지침 전문은 확인하지 않아 세부 권고·예외를 확정하지 않았습니다.

국내 비용(담뱃값,기기·액상,칼륨염,치간도구,코트,견과,차·커피 등), 현행영양섭취기준 세부량, 식용유 아플라톡신 공전 규격은 이번 감사에서 확인되지 않았습니다. TODO를 숨기는 문장만으로 미확인을 해결할 수 없습니다. 이는 중국 연구 수치가 거짓이라는 뜻이 아닙니다.

## 항목별 판정과 확인 범위

### 2-1. 금연하세요. 빨리 끊을수록 좋습니다

- 상태: **warn**
- 확인·문제·수정조건: 미국 원초록의 기대수명 10년·금연연령별 10/9/6년, 중국 원문의 도시 RR1.65·농촌1.22 확인. 농촌은 ‘1.22배 높습니다’보다 ‘1.22배입니다(약22% 높음)’가 분명합니다. 담뱃값·금단기간은 국내 가격·임상 근거 미확인; 2004년 간접흡연 수치의 연도는 보존합니다.
- 근거 확인범위:
  - `10.1056/NEJMsa1211128` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1056/NEJMsa1211128>
  - `10.1016/S0140-6736(15)00340-2` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4691901/fullTextXML>
  - `10.1016/S0140-6736(10)61388-8` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/S0140-6736(10)61388-8>

### 2-2. 집과 차 안에서는 담배를 피우지 마세요. 손님에게도 금연시키세요

- 상태: **block**
- 확인·문제·수정조건: 쉽게의 ‘세 명 중 한 명’은 원초록 28%와 다릅니다. 2004년 세계 추정임을 쉽게에도 표시하세요. OR1.28/1.39/1.36을 발생확률 30% 증가로 동일시하지 마세요. 57연구·질환별 OR는 원초록과 일치. 집 안/밖 비교는 관찰자료의 차이이며 장소 자체의 독립 인과효과로 단정하지 않습니다.
- 근거 확인범위:
  - `10.1016/S0140-6736(10)61388-8` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/S0140-6736(10)61388-8>
  - `10.1093/ntr/ntaf111` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1093/ntr/ntaf111>

### 2-3. 금연은 의지로만 버티지 말고 약부터 받으세요. 성공률이 두 배 넘게 오릅니다

- 상태: **warn**
- 확인·문제·수정조건: 바레니클린 RR2.32·NRT1.55·병용1.27과 각 분모를 원문/초록에 대조했습니다. 병용 27%를 20%로 요약하기보다 ‘약30%’가 낫습니다. 공단 PDF에서 연3차수, 1~2회20%, 3~6회면제, 이수 환급 확인. 환급은 사업 내 본인부담금이며 모든 진료비 전부라는 뜻으로 확대하지 마세요. 6회 또는 약제별56/84일 조건을 유지합니다.
- 근거 확인범위:
  - `10.1002/14651858.CD006103.pub8` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10169257/fullTextXML>
  - `10.1002/14651858.CD000146.pub5` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD000146.pub5>
  - `10.1002/14651858.CD013308.pub2` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10278922/fullTextXML>

### 2-4. 금연일을 정하고 그날 한 번에 끊으세요. 서서히 줄이지 마세요

- 상태: **block**
- 확인·문제·수정조건: ‘철회돼 더는 갱신되지 않습니다. 현재 가장 좋은 근거는 위의 무작위 시험’은 대체 리뷰 누락입니다. 2019 Smoking reduction interventions for smoking cessation(CD013183.pub2)은 22시험9,219명에서 RR1.01(0.87–1.17), 중간 확실성으로 장기 금연 우열을 확인하지 못했습니다. 2016 단일시험 22.0%/15.5%는 맞지만 제목 ‘서서히 줄이지 마세요’의 전면 금지 근거가 아닙니다. 기존 수치와 새 종합결론을 함께 제시하고 선호·치료지원에 따라 선택하도록 수정하세요.
- 근거 확인범위:
  - `10.7326/M14-2805` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.7326/M14-2805>
  - `10.1002/14651858.CD013308.pub2` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10278922/fullTextXML>

### 2-5. 보건소 금연클리닉에 가보세요. 금연상담전화 1544-9030도 있습니다

- 상태: **warn**
- 확인·문제·수정조건: 약물+행동지원 RR1.83·전화 RR1.38/1.25는 원초록 확인. 전화번호1544-9030·무료·17센터는 공식 페이지 직접 확인. 전국 금연지원서비스 모두가 동일한 상담4~8회/회30~60분이라는 근거는 없습니다. 센터 페이지는 4박5일·6개월9회 이상도 제시합니다. 일반 상담의 예시와 국내 프로그램을 구분하세요.
- 근거 확인범위:
  - `10.1002/14651858.CD008286.pub3` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD008286.pub3>
  - `10.1002/14651858.CD002850.pub4` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD002850.pub4>

### 2-6. 끊지 못할 때만 전자담배를 고려하세요. 원래 안 피우던 사람은 만지지 마세요

- 상태: **block**
- 확인·문제·수정조건: pub11 원문에서 80RCT29,861명, NRT대비 RR1.61·11시험4,114명·추가4/100·SAE RD0.01 확인. 비교군은 니코틴 대체요법 전체이며 쉽게의 ‘니코틴 패치’ 단독 비교로 축소하면 안 됩니다. 액상형 전자담배 연구를 궐련형 가열담배로 확대하지 않도록 명시하세요. 합성니코틴 2026.4.24 규제와 6월 보도자료는 실제 HTTPS 열람. 법 제12조 판매규정의 직접 조문 열람 상태는 아래 기록. ‘금연약이 근거도 더 확실’은 제품/비교별로 달라 일괄 단정하지 마세요.
- 근거 확인범위:
  - `10.1002/14651858.CD010216.pub11` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13506250/fullTextXML>

### 2-7. 당분 음료를 마시지 마세요. 제로로 바꾼다고 해결되지 않습니다

- 상태: **block**
- 확인·문제·수정조건: Malik·EPIC 원초록/EPIC 원문에서 단 음료 HR1.21/1.14, 제로HR1.26 확인. 단위는 잔/serving이며 ‘병’으로 치환할 수 없습니다. 각 음료군의 관찰연관은 단 음료를 제로로 바꾸는 대체 효과를 직접 검증하지 않습니다. 제목·쉽게의 ‘제로로 바꿀 이득 없음’은 해당 비교를 실시하지 않았다는 뜻으로 수정해야 합니다.
- 근거 확인범위:
  - `10.1161/CIRCULATIONAHA.118.037401` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1161/CIRCULATIONAHA.118.037401>
  - `10.1001/jamainternmed.2019.2478` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6724165/fullTextXML>

### 2-8. 빈랑(빈랑나무 열매)을 씹지 마세요

- 상태: **warn**
- 확인·문제·수정조건: 17연구388,134명 전체와 사망 하위분모179,582명·RR1.21, 당뇨1.47·대사1.51은 원문 대조. 씹는 양/기간 및 금단 뒤 암위험 감소까지는 인용 논문의 해당 암 원자료를 추가 확인하지 못했습니다. 빈랑 혼합물과 열매 자체, 담배 포함 여부를 구분하고 암 관련 1차 근거를 보강하세요.
- 근거 확인범위:
  - `10.1371/journal.pone.0070679` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3734295/fullTextXML>

### 2-9. 집의 소금을 저나트륨 소금(칼륨염)으로 바꾸세요

- 상태: **warn**
- 확인·문제·수정조건: SSaSS 원초록: 600마을20,995명, 뇌졸중 병력 또는60세이상 고혈압, 평균4.74년, 염화나트륨75%/염화칼륨25%, rate ratio .88/.86/.87 확인. 쉽게의 ‘5년 안에 죽을 확률12% 감소’는 발생률비의 대략풀이이므로 연구 추적기간과 누적확률을 같게 쓰지 않는 편이 정확합니다. 고칼륨 관련 중증사건 차이 미검출은 신장질환자의 안전성 확정이 아닙니다. 신장질환·칼륨잔류약은 의사 확인 조건을 반드시 유지. 국내 가격차는 미확인.
- 근거 확인범위:
  - `10.1056/NEJMoa2105675` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1056/NEJMoa2105675>
  - `10.1056/NEJMoa1311889` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1056/NEJMoa1311889>

### 2-10. 칫솔질을 제대로 하고, 하루 한 번 치아 사이를 청소하고, 빠진 이는 바로 치료하세요

- 상태: **block**
- 확인·문제·수정조건: JAGES9,676명6년·HR.89/.77, 노인 치아수 OR1.87/2.04는 원초록 확인. 도구 사용 여부의 연구를 ‘매일’ 사용효과로 좁히지 마세요. OR를 사망확률 두배로 바꾸지 마세요. NHIS 공식 원문은 예방 목적 단독 스케일링의 연1회 급여와 치주질환 치료 관련 별도 급여를 구분합니다. ‘한 해 두번째부터 건강보험 안 됨’ 전면 단정을 예방 목적에 한정하세요.
- 근거 확인범위:
  - `10.1016/j.jdent.2026.106789` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/j.jdent.2026.106789>
  - `10.1007/s41999-025-01319-4` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1007/s41999-025-01319-4>

### 2-11. 하루 7000~8000보를 걷거나, 일주일에 150~300분 빠르게 걷세요

- 상태: **warn**
- 확인·문제·수정조건: 47,471명·3,013사망·분위별 걸음수3553/5801/7842/10901·HR.60/.55/.47, 연령별 정체구간은 원초록 확인. 운동시간 연구의7.5~15MET·h/주는 걸음수 연구와 다른 비교입니다. ‘하나만 채우면 됩니다’는 두 측정법이 모든 개인에게 정확히 등가라는 뜻으로 읽히지 않게 하세요. 한국 활동지침 페이지는 열었으나 첨부 지침 원문의 해당 권고문은 아직 직접 대조하지 못했습니다.
- 근거 확인범위:
  - `10.1016/S2468-2667(21)00302-9` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/S2468-2667(21)00302-9>
  - `10.1093/eurjpc/zwad229` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1093/eurjpc/zwad229>
  - `10.1001/jamainternmed.2015.0533` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1001/jamainternmed.2015.0533>
  - `10.1136/bmj.l4570` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6699591/fullTextXML>

### 2-12. 고혈압·고지혈증이 있으면 처방대로 꾸준히 드세요. 임의로 끊지 마세요

- 상태: **block**
- 확인·문제·수정조건: 혈압 RR.87/.80/.73/.72와 CTT LDL1.0mmol/L당.90/.78은 원문/초록 확인. 쉽게의 ‘1 단위’는 한국에서 흔히 쓰는 mg/dL 1과 혼동돼 필수 단위를 잃습니다. mmol/L를 명시하거나 LDL수치 상세는 이득에 남기고 쉽게는 처방약 유지와 방향만 요약하세요. 복약순응 .55/.71은 관찰 비교임을 유지. 모든 처방약 하루1회라는 단정은 처방마다 다르므로 고칩니다.
- 근거 확인범위:
  - `10.1016/S0140-6736(15)01225-8` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/S0140-6736(15)01225-8>
  - `10.1016/S0140-6736(10)61350-5` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC2988224/fullTextXML>
  - `10.1093/eurheartj/eht295` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1093/eurheartj/eht295>

### 2-13. 밤마다 7시간쯤 자고, 자고 일어나는 시각을 고정하세요

- 상태: **block**
- 확인·문제·수정조건: 7시간 최저점의 용량반응과 수면규칙성·사회적시차 수치는 각 원문/초록 확인. Cappuccio의 short sleep RR1.12는 원연구별 짧은 수면 정의가 다르며 단일 ‘7시간 미만’ 집단의 효과가 아닙니다. 7시간 기준 연구와 RR1.12의 비교정의를 합치지 마세요. 규칙적 네 분위20~48% 감소를 최상분위 한 집단의 범위로 표현하지 않습니다. ‘대부분 역인과’는 비율을 검증한 결론이 아니므로 가능성으로 제한하세요.
- 근거 확인범위:
  - `10.1093/sleep/33.5.585` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1093/sleep/33.5.585>
  - `10.1161/JAHA.117.005947` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5634263/fullTextXML>
  - `10.1093/sleep/zsad253` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10782501/fullTextXML>
  - `10.1111/joim.70133` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1111/joim.70133>

### 2-14. 일주일에 세 번, 45분씩 라켓 운동을 하세요

- 상태: **block**
- 확인·문제·수정조건: 80,306명 라켓 HR.53·심혈관.44·수영.72/.59 등은 원초록 확인. 이 연구는 운동종류별 관찰 비교이며 ‘주3회45분’이라는 최적 처방을 검증하지 않습니다. 출처 없는 횟수·시간을 제목의 확정 권고로 두지 마세요. 비용 국내 코트1만원은 근거 미확인. ‘라켓 참여자는 원래 더 건강’도 가능성으로 적어야 합니다.
- 근거 확인범위:
  - `10.1136/bjsports-2016-096822` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1136/bjsports-2016-096822>

### 2-15. 계단 오르기, 부리나케 걷기 같은 자투리 '힘든 움직임'을 하루 4~5분 모으세요

- 상태: **block**
- 확인·문제·수정조건: 원문25,241 비운동인·6.9년852사망, 3 bouts와4.4분 각각의 감소폭 확인. 대조군은 VILPA가 없는 사람이지 ‘전혀 움직이지 않는 사람’이 아닙니다. 쉽게의 분모를 고치세요. 원문은 운동하는62,344명에서도 유사 결과를 제시하므로 ‘이미 운동하는 사람에게 적용되지 않는다’는 전면 배제는 연구전체 설명과 맞지 않습니다. 두 분석을 구분하세요.
- 근거 확인범위:
  - `10.1038/s41591-022-02100-x` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9800274/fullTextXML>

### 2-16. 일주일에 30~60분 근력 운동을 하세요

- 상태: **warn**
- 확인·문제·수정조건: 원문16연구·근력활동과10~17%낮은 위험·30~60분 부근 최대10~20% 감소 확인. 더 큰 운동량의 효과는 불확실하다는 결론입니다. ‘그 이상 추가 이득 없음’을 확정 상한으로 단정하지 마세요. 한국 활동지침의 근력운동 빈도와 연구의 시간량을 구분하세요.
- 근거 확인범위:
  - `10.1136/bjsports-2021-105061` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9209691/fullTextXML>

### 2-17. 한자리에 오래 앉아 있지 말고, 틈틈이 일어나 움직이세요

- 상태: **warn**
- 확인·문제·수정조건: 좌식 총시간HR2.63·회당1.96, 활동60~75분 및8시간이상/4시간미만 비교HR1.59·활동최상군1.04는 원초록 확인. 위험 상쇄는 관찰상 통계적 차이가 뚜렷하지 않았다는 뜻입니다. 모든 개인의 좌식위험을 운동이 제거한다고 보장하지 마세요. TV시청은 별도노출이며 총좌식과 혼합하지 않습니다.
- 근거 확인범위:
  - `10.7326/M17-0212` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.7326/M17-0212>
  - `10.1016/S0140-6736(16)30370-1` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/S0140-6736(16)30370-1>

### 2-18. 가공육(햄, 베이컨, 소시지, 런천미트)을 줄이세요

- 상태: **warn**
- 확인·문제·수정조건: 높은/낮은 섭취 비교RR1.23/1.29/1.10 및 일일1인분당1.23/1.10은 서로 다른 논문 원초록과 일치. ‘1인분’의 식품별 g 정의가 빠져 한국 햄 한봉지로 오인될 수 있습니다. 해당 원문의 표에서 가공육·붉은고기 기준량을 확인해 이득에 명시해야 합니다. NutriRECS의 약한 권고와 관찰근거 불확실성은 남기세요.
- 근거 확인범위:
  - `10.1093/aje/kwt261` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1093/aje/kwt261>
  - `10.3945/ajcn.117.153148` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.3945/ajcn.117.153148>
  - `10.7326/M19-1621` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.7326/M19-1621>

### 2-19. 술을 줄이거나 끊으세요

- 상태: **block**
- 확인·문제·수정조건: Wood 원문에서 기대수명6개월/1~2년/4~5년은 현재음주자 주0~100g 기준과 비교한 모델 추정입니다. 쉽게에서 비교군을 빼면 평생금주자와의 차이로 읽힙니다. 기준집단을 밝혀야 합니다. 5%맥주2.5L·40%증류주300mL는 근삿값이며 동일100g의 정밀환산값이 아닙니다. GBD2016의0최저 결론은 해당연구의 결과로 귀속하고 모든연령/현재지침의 유일 결론으로 단정하지 마세요. 금단경고 유지.
- 근거 확인범위:
  - `10.1016/S0140-6736(18)30134-X` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5899998/fullTextXML>
  - `10.1016/S0140-6736(18)31310-2` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6148333/fullTextXML>
  - `10.1001/jamanetworkopen.2023.6185` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10066463/fullTextXML>
  - `10.1001/archinte.166.22.2437` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1001/archinte.166.22.2437>

### 2-20. 매일 마시다가 끊으면 손이 떨리는 사람은 스스로 끊지 마세요

- 상태: **warn**
- 확인·문제·수정조건: 노르웨이36,287명·연간8.0/5.0/3.6%·SMR9.8은 원초록 확인. 이는 자가 금주의 급성 치사율이 아닌 진단 이후 장기 사망입니다. 그 구분은 현 후보 비고에 있어 유지해야 합니다. 금단이 의심되면 병원 도움을 받아 끊는 조건과 심한 증상의 긴급성은 짧게라도 남기세요. 국내 진료/입원비 건강보험 적용의 세부범위는 이번에 직접 대조 못했습니다.
- 근거 확인범위:
  - `10.1016/j.ejim.2026.107103` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/j.ejim.2026.107103>
  - `10.1111/add.16297` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1111/add.16297>

### 2-21. 술을 줄이려면 일주일 치부터 세고, 의사와 몇 분 이야기하세요

- 상태: **warn**
- 확인·문제·수정조건: 34시험15,197명·1년주20g감소는 총69연구 중 주분석 분모입니다. Jonas 전체122RCT+1코호트22,803명과 약별NNT12의 음주재발/폭음재발 구별 확인. ‘122무작위시험22,803명’은 전체표본에 코호트1편 포함임을 보완하세요. 간단상담 무료 보장은 국내 수가 확인이 필요합니다. 레비아정 허가/50mg·아편사용 사전확인 조건을 공식 제품원문에서 확인했습니다. 처방·의사판단을 생략하지 마세요.
- 근거 확인범위:
  - `10.1002/14651858.CD004148.pub4` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD004148.pub4>
  - `10.1001/jama.2014.3628` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1001/jama.2014.3628>

### 2-22. 하루에 견과 한 줌을 드세요

- 상태: **warn**
- 확인·문제·수정조건: 두 코호트76,464여성+42,498남성·3,038,853인년, 주별.93/.89/.87/.85/.80은 원초록 확인. 첫쉽게의 ‘먹는 사람20%’는 주7회이상 범위로 한정해야 하며 모든섭취자 평균효과가 아닙니다. 국내28g월몇만원과 비흡연/질환배제 세부조리 기준 원문은 미확인. 견과는 원래 간식에 추가하기보다 열량주의를 유지합니다.
- 근거 확인범위:
  - `10.1056/NEJMoa1307352` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1056/NEJMoa1307352>

### 2-23. 붉은 살코기 일부를 생선과 가금육으로 바꾸세요

- 상태: **block**
- 확인·문제·수정조건: HR.99/.99는 생선·가금육 섭취가 주2인분 늘 때의 독립 연관성입니다. 원초록은 육류를 동량 생선·가금육으로 바꾸는 대체분석 결과라고 하지 않습니다. 쉽게·이득의 ‘바꾸면’은 이 수치의 해석을 바꾸므로 삭제/정정. 가공육·살코기 각각HR1.03은 맞습니다. 실제 대체효과를 말하려면 별도 대체모델 1차 근거가 필요합니다.
- 근거 확인범위:
  - `10.1001/jamainternmed.2019.6969` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1001/jamainternmed.2019.6969>

### 2-24. 흰쌀·밀가루 일부를 통곡물로 바꾸세요

- 상태: **block**
- 확인·문제·수정조건: BMJ 원문90g/일은 통곡물 식품3인분 예시(빵2장+시리얼1그릇)입니다. 마른통곡물 자체와 통곡물제품 신선중량은 다릅니다. 현미/쌀 문맥에서 무게기준을 생략하면 조리밥90g 또는 마른쌀90g으로 오인됩니다. ‘절반만 바꾸면 최대이득 구간’도 원래 총섭취량이 없는 상태에서는 도출되지 않습니다. 원문 정의를 이득에 보존하고 쉽게는 일부 바꾸기만 제안하세요.
- 근거 확인범위:
  - `10.1136/bmj.i2716` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4908315/fullTextXML>
  - `10.3945/ajcn.117.153148` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.3945/ajcn.117.153148>

### 2-25. 일주일에 세 잔 이상 차를 드세요

- 상태: **block**
- 확인·문제·수정조건: 차China-PAR100,902명·중앙추적7.3년·HR.85·50세1.26/1.41년은 원초록 확인. 독소논문 둘은 실제 deterministic/probabilistic·Monte Carlo 위험평가를 했습니다. ‘식이 위험을 계산해내지 못했습니다’는 수행하지 못했다는 뜻이므로 오역입니다. ‘계산한 노출/섭취조건에서 뚜렷한 식이위험을 확인하지 못했다’로 바꾸세요. 우린 차와 고농도추출물의 간독성 구별은 인용 리뷰 초록 확인.
- 근거 확인범위:
  - `10.1177/2047487319894685` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1177/2047487319894685>
  - `10.1016/j.fct.2020.111830` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/j.fct.2020.111830>
  - `10.3390/toxins14070452` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9318285/fullTextXML>
  - `10.1016/j.yrtph.2018.03.019` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/j.yrtph.2018.03.019>

### 2-26. 하루 3~4잔 커피를 드세요. 설탕과 크림은 넣지 마세요

- 상태: **block**
- 확인·문제·수정조건: Poole 원문3~4잔·RR.83(.79–.88) 관찰연관 확인. 이 논문은 설탕·크림을 넣으면 이득이 상쇄된다는 직접 비교 근거를 제공하지 않습니다. 설탕·크림 제한 권고와 효과완전상쇄 단정을 분리하세요. 잔당부피·카페인함량이 정해지지 않은 채 하루3~4잔 처방을 강하게 내리지 마세요. 임신·불면 등 예외 유지.
- 근거 확인범위:
  - `10.1136/bmj.j5024` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5696634/fullTextXML>

### 2-27. 하루 5인분(약 400g) 과일과 채소를 채우세요

- 상태: **warn**
- 확인·문제·수정조건: Aune 원문200g당RR.90와 최대800g, Wang 원초록5vs2인분HR.87 및 총26코호트 확인. 한 연구의80g기준 인분과 다른 연구 식품별 serving 정의를 같은400g 정밀수치로 합치지 마세요. 과일주스·감자 등 제외 범위를 독자가 5인분에 산입하지 않도록 짧게 보완 권장. 국내권장량은 별도 미확인.
- 근거 확인범위:
  - `10.1093/ije/dyw319` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5837313/fullTextXML>
  - `10.1161/CIRCULATIONAHA.120.048996` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1161/CIRCULATIONAHA.120.048996>

### 2-28. 초가공식품(감자칩, 라면, 과자, 즉석식품)을 줄이세요

- 상태: **warn**
- 확인·문제·수정조건: 원문 umbrella RR1.21·심혈관사망1.50과 epidemiological evidence class/GRADE 구별 확인. 서로 다른 등급체계를 ‘높음’과 혼동하지 않게 하세요. ‘반대 결론 연구가 지금까지 없다’는 포괄 부재주장은 이 리뷰 한편으로 검증하지 못했습니다. 중복 권고를 제거할 수 있으나 등급의 불확실성은 보존합니다.
- 근거 확인범위:
  - `10.1136/bmj-2023-077310` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10899807/fullTextXML>

### 2-29. 밥 짓고 난방할 때 연탄과 장작을 태우지 마세요. 전기나 가스로 바꾸세요

- 상태: **warn**
- 확인·문제·수정조건: 중국271,217명 고체연료조리HR1.11·난방1.14, 전환.87/.67, PM2.5 10µg/m³당RR1.08은 원초록 확인. 한국가구 효과로 직접 옮기지 않는 비고는 유지. 국내교체비와 한국주거보급률은 별도 원자료 미확인. 청정연료도 적절한 환기를 요구한다는 일반 안전조건을 삭제하지 마세요.
- 근거 확인범위:
  - `10.1001/jama.2018.2151` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1001/jama.2018.2151>
  - `10.1016/j.envint.2020.105974` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/j.envint.2020.105974>

### 2-30. 뜨거운 것은 좀 식혀서 드세요. 끓는 차·국·커피를 곧바로 마시지 마세요

- 상태: **block**
- 확인·문제·수정조건: 이란 사례대조OR2.07/8.16·대기<2분OR5.41은 원문과 일치하지만 쉽게는 ‘위험8배/5배’로 확률비처럼 표현합니다. 이란 특정암 사례대조의 오즈라는 범위를 짧게 한정하고 수치 상세는 이득에 남기는 편이 낫습니다. 2~3분만 기다리면 안전하다는 시간보장은 온도/용기에 따라 달라 원문에서 도출 못합니다. IARC65℃초과2A는 공식 보도자료 직접 확인.
- 근거 확인범위:
  - `10.1136/bmj.b929` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3269898/fullTextXML>
  - `10.1016/S1470-2045(16)30239-X` — 서지 메타데이터 캐시만 확인; 내용 미확인. <https://doi.org/10.1016/S1470-2045(16)30239-X>

### 2-31. 낮에 나가 햇빛을 쬐세요. 종일 햇빛을 피하지 마세요

- 상태: **block**
- 확인·문제·수정조건: 스웨덴여성29,518명20년·기대수명차.6~2.1년은 원초록 확인. ‘하루 십수분이면 충분’은 이 관찰연구가 정한 안전/유효용량이 아닙니다. 한국위도·계절·피부특성별 보장량으로 제시하지 마세요. 금연위험과의 수치유사성을 햇볕이 흡연을 상쇄한다는 뜻으로 읽히지 않게 하고 피부암주의 유지.
- 근거 확인범위:
  - `10.1111/joim.12496` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1111/joim.12496>

### 2-32. BMI를 20~25로 유지하세요. 과체중이면 빼세요

- 상태: **block**
- 확인·문제·수정조건: BMI239코호트 원문에서 비흡연·질환없음·첫5년생존 조건과 각HR 확인. ‘감량이 총사망률을 낮춘다는 무작위 시험도 없습니다’는 틀립니다. Ma등2017 BMJ j4849 원초록과 원문 직접열람: 비만성인 식이감량±운동, 총사망34시험685사망 RR.82(.71–.95). BMI관찰연관을 감량효과로 환산할 수 없다는 한계는 맞지만 RCT부재 단정은 고쳐야 합니다. 한국진단기준 BMI와 관찰최저위험구간도 구분하세요.
- 근거 확인범위:
  - `10.1016/S0140-6736(16)30175-1` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4995441/fullTextXML>
  - `10.1001/jama.2012.113905` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1001/jama.2012.113905>

### 2-33. 일주일에 네 번 이상 고추를 드세요

- 상태: **block**
- 확인·문제·수정조건: 원초록의 최상섭취군은 >4 times/week(주4회 초과), 비교군은 없음/드묾입니다. 본문의 ‘4회 이상’과 제목‘네번 이상’은 다른 경계입니다. HR.77/.66 및22,811명·중앙8.2년·1,236사망은 맞습니다. 섭취빈도를 인과적으로 수명연장하는 처방처럼 쓰지 말고 위장관 예외 유지.
- 근거 확인범위:
  - `10.1016/j.jacc.2019.09.068` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/j.jacc.2019.09.068>

### 2-34. 하루에 우유나 요거트 1~2잔을 드세요

- 상태: **block**
- 확인·문제·수정조건: PURE HR.83(.72–.96)은 total dairy >2 servings/day vs none입니다. total dairy에는 우유·요거트·치즈가 포함됩니다. 이를 ‘우유·요거트 두잔 이상’으로 바꾸면 노출종류·분량·경계가 달라집니다. 1~2잔 권고는 별도 한국권고 근거가 필요합니다. >2와≥2도 구분하세요. 평균9.1년 단정은 원문 추적기간 지표를 확인해 쓰세요.
- 근거 확인범위:
  - `10.1016/S0140-6736(18)31812-9` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1016/S0140-6736(18)31812-9>

### 2-35. 달걀은 끊을 필요 없습니다. 다만 날마다 3~4개는 피하세요

- 상태: **warn**
- 확인·문제·수정조건: 원문521,120명129,328사망·하루달걀반개추가HR1.07, 대체모델 결과는 확인. 비고의 ‘메타분석도 무관’·미국콜레스테롤상한폐지·하루1개안심/3~4개경계는 본문이 인용한 단일논문만으로 충분히 확인하지 못했습니다. 해당 반대근거와 현재 공식식이지침을 직접 보강한 뒤 수량권고를 확정하세요.
- 근거 확인범위:
  - `10.1371/journal.pmed.1003508` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7872242/fullTextXML>

### 2-36. 여건이 되면 몸을 담그는 목욕을 하세요. 샤워로만 때우지 마세요

- 상태: **block**
- 확인·문제·수정조건: 원초록30,076명·0~2회/주 비교HR.72·질환별 값 확인. 쉽게의 ‘두번 미만’은 기준과 다릅니다. 비용의 ‘한번30분’은 연구가 정한 유효·안전입욕시간이 아닙니다. 고령자에게 장시간입욕을 부추길 수 있어 실제권고근거 없이 고정시간을 제시하지 마세요. 중년 일본관찰결과를 샤워보다 우월한 인과효과로 단정하지 않고 고령/심혈관주의 유지.
- 근거 확인범위:
  - `10.1136/heartjnl-2019-315752` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1136/heartjnl-2019-315752>

### 2-37. 낮잠은 30분 안으로 끝내세요. 1시간을 넘기지 마세요. 1~2시간은 자야 버틸 수 있다면 몸을 점검하세요

- 상태: **warn**
- 확인·문제·수정조건: 원문 umbrella16메타분석244결과·인지SMD.69·운동.99와 JAMA1,338명926사망·시간당1.13·횟수당1.07·오전1.30 확인. umbrella에는 운동/인지 중재자료도 들어 있으므로 ‘위 두연구 모두 관찰자료’라는 일괄설명은 결과별로 나눠야 합니다. <60분·>60분의 연구경계와 쉽게‘한시간 이내’를 일치시키세요. 30분은 실천권고이며 사망예방이 확정된 임계점이 아닙니다.
- 근거 확인범위:
  - `10.3389/phrs.2026.1609013` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - `10.1001/jamanetworkopen.2026.7938` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13096975/fullTextXML>
  - `10.1038/s41467-020-20585-3` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7876146/fullTextXML>

### 2-38. 밤새고 나면 다음 날 밤에 바로 보충하세요. 주말로 미루지 마세요

- 상태: **warn**
- 확인·문제·수정조건: 원문85,618명·중앙8년·보충없음HR1.15/1.42 및 보충군1.12/1.13의 유의하지 않은 CI 확인. 수면제한은 개인필요량 대비 누적2.5~3.5시간·심한제한>3.5시간으로 정의했습니다. 완전밤샘만 조사한 연구가 아니므로 제목·권고의 ‘밤샘’은 더 넓은 추론임을 구분하세요. 다음밤보충을 주말몰아자기로 바꾸지 않고 위험소멸 보장도 금지합니다.
- 근거 확인범위:
  - `10.1038/s41467-026-72461-1` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13121452/fullTextXML>

### 2-39. 야간 교대를 오래 할수록 심혈관 위험이 커집니다. 옮길 수 있으면 일찍 옮기세요

- 상태: **block**
- 확인·문제·수정조건: 원문 심혈관메타RR1.13/1.27·5년당1.07/1.05, 유방암리뷰1.05·20년1.25 및 중국남성췌장HR1.59는 대조했습니다. 1990실험 원초록은 젊은남성8명, 빛+암막 복합개입입니다. 이 설계로 ‘생체시계를 옮기는 유일방법’ 또는 ‘빛·암막·선글라스 셋중 하나라도 빠지면 무용’이라고 구성요소별 필수성을 증명할 수 없습니다. 7,000~12,000룩스의 일반 자가처방은 줄이고 실험조건으로 귀속하세요. 식사를 낮에모으는 대책은 인용목록에 해당시험이 빠져 있습니다.
- 근거 확인범위:
  - `10.3389/fpubh.2025.1668848` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12506678/fullTextXML>
  - `10.1093/occmed/kqaf040` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12794909/fullTextXML>
  - `10.5271/sjweh.4290` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13344439/fullTextXML>
  - `10.1056/NEJM199005033221801` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1056/NEJM199005033221801>

### 2-40. 밀폐 포장에 제조 정보가 찍힌 식용유를 사세요. 소규모 자가압착 땅콩기름은 사지 마세요

- 상태: **unverified**
- 확인·문제·수정조건: 중국원문 PR.650·독소중앙1.29µg/kg·개입직후−2.865 및연−2.593µg/kg, 광시1,611명·aOR1.9/1.8 확인. OR를 출생위험90/80%로 동일시하지 마세요. 국내즉석제조업의 존재는 법조문확인범위를 아래 별도기록하며 국내아플라톡신기준은 아직 미확인입니다. 중국소규모작업장결과만으로 한국방앗간전체를 금지할 수 없습니다. 밀봉·제조정보확인은 오염검사합격보증이 아닙니다. 현 TODO를 문장만 바꿔 출판승인 처리할 수 없습니다.
- 근거 확인범위:
  - `10.3389/fpubh.2024.1484414` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11695283/fullTextXML>
  - `10.1080/16549716.2024.2336312` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11025407/fullTextXML>

### 2-41. 요리에는 돼지기름·버터 대신 식물성 기름을 쓰세요. 기름을 갈아 사 다닐 필요도, 아마씨유의 심장 보호 효과를 기대하지도 마세요

- 상태: **block**
- 확인·문제·수정조건: 포화지방감소15시험56,675명 RR.83, omega6 19시험6,461명은 원초록 확인. omega3 전체86시험162,796명을 식물성ALA분석 분모로 기재한 것은 오류. ALA총사망5시험19,327명·RR1.01, CHD사건4시험19,061명·RR1.00입니다. 같은리뷰는 ALA부정맥 감소와 심혈관사건 소폭감소 가능성을 보고하므로 ‘심장보호효과 없음’ 전면 단정은 넘칩니다. 효과미검출과 무효입증을 구분하세요. 국내일일조리유권장량 미확인.
- 근거 확인범위:
  - `10.1002/14651858.CD011737.pub3` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD011737.pub3>
  - `10.1002/14651858.CD011094.pub4` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD011094.pub4>
  - `10.1002/14651858.CD003177.pub5` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/14651858.CD003177.pub5>

### 2-42. 볶고 튀길 때는 레인지후드를 켜세요. 불 붙인 때부터 끝날 때까지

- 상태: **block**
- 확인·문제·수정조건: 원문 대만분석의 cooking time-years>10은 실제요리경력10년이 아닙니다. 하루식사수×기간의 누적지표이며 예컨대하루3끼20년=60입니다. 제안쉽게의 ‘요리경력10년이상’도 반려. 후드비율은 <.33/.33~<.67/≥.67이지 정확1/3·2/3 경계가 아닙니다. Xue원문은 연기노출10연구와 후드없음4연구를 별도통합했으며 전체초록/본문의 총연구수 자체도 불일치합니다. 10연구중4라는 포함관계로 단정하지 마세요. OR1.74/2.11·대만.49·상하이HR1.49/2.03의 연구별노출·분모를 분리합니다.
- 근거 확인범위:
  - `10.2147/OTT.S100949` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4881732/fullTextXML>
  - `10.1038/s41598-020-63656-7` — HTTPS 원문 XML 직접 열람·항목의 주요 수치/조건 대조. <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7174336/fullTextXML>
  - `10.1002/ijc.29020` — 제공된 EuropePMC 원초록 캐시 열람; 원문 전체 미확인. <https://doi.org/10.1002/ijc.29020>

## 편집 제안 판정

정확한 현재 제안 파일 SHA와 필드별 승인/수정 이유는 `editorial-decisions.json`에 기록했습니다. 120자·2~4문장은 목표이며, 법·의료필수조건을 지우는 승인을 하지 않았습니다. 불필요한 연구설계·모든 부차수치를 쉽게에 중복해 넣어 만든 길이 예외는 수용하지 않았습니다. 제목 축약 자체는 허용하며 주제·핵심조건·incoming anchor 보존 여부와 사실범위를 심사했습니다.

## 법령 직접 열람 보충기록

- 「식품위생법 시행규칙」 제37조: 한글주소의 iframe에서 lsiSeq=289161을 실제 얻어 <https://www.law.go.kr/LSW/lsSideInfoP.do?lsiSeq=289161&joNo=0037&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR>를 HTTPS로 직접 열었습니다. 시행2026.9.1, “영 제21조제2호에서 … 식품이란 별표15와 같다” 확인. 별표15 식품목록 자체와 국내 식용유 독소규격은 확인하지 못했습니다. 이 한조문으로 모든 한국방앗간의 허가·검사범위를 승인하지 않습니다.
- 「담배사업법」 제12조와 「식품위생법 시행령」 제21조: 한글주소 wrapper는 재시도후 HTTP200이었으나 실제 조문iframe 요청은 각각 HTTP502 및 터널502로 실패했습니다. wrapper열람을 조문원문열람으로 세지 않았습니다. 따라서 제6항 판매규정의 제12조제2항·제4항, 제40항 시행령21조제2호 세부문언은 이번 감사에서 직접검증 미완료입니다. 보도자료로 확인한2026.4.24합성니코틴규제와 이 미확인조문을 구별합니다. 접근실패를 법규정이 없거나 잘못됐다는 뜻으로 처리하지 않습니다.

## 남은 출판 조건

확인된 block을 근거에 맞춰 별도 내용수정안으로 고치고 독립 재검토를 받아야 합니다. 위의 warn·unverified 항목은 표기한 세부범위를 보강하거나 검증범위 안으로 권고를 줄여야 합니다. 수정된 본문의 새로운 SHA로 내용 검토 및 정식 KR-FIT 검토를 다시 받아야 하며, 이 감사파일을 기존공개본문의 pass표시로 재사용하면 안 됩니다. 공개본문·순수윤문결과·기존리뷰·README·git는 수정하지 않았습니다.

## 사실 수정안 배치1 독립 재검토

검토일2026-10-18. frozen `author-batch-1.json` SHA256: `0ffe4d4fb49745a78f3ccc58e78d4dd20d9287996d23b19d0cbd21296418b430`. **6안중approve5·revise1.** 기존strict후보와초기23block판정을새본문pass로소급변경하지않습니다. 승인대상은아래정확SHA의수정안이며정식KR-FIT·절전체출판승인아닙니다. 기존국내가격·WHO/영국정책등미확인까지검증했다는뜻이아닙니다.

### 배치1-4: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-004-87e1/publication-entry-proposal.md`
- proposal SHA256: `6c5ba969bdc0ff772a84daa393999e4fb44b8402a81e809a33c59365fb375d15`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-004-87e1/publication-entry-changes.json`
- changes SHA256: `2417ac96bf7305b4c31d42a5c11eadce420a62cc5684055cf6e5897662de7cfd`
- 판정이유: 2019리뷰22시험·9,219명RR1.01(0.87–1.17), 2016시험수치및선사용RR1.25는직접근거와맞습니다. 다만2019리뷰뒤 ‘두집단모두금연일전NRT’의 귀속이2016영국시험인지불명확합니다. ‘앞의2016년영국시험에서는…’으로 한정하세요. 9시험선사용통합결과만으로 모든독자에게금연일2주전부터자가패치를일률권고하지말고 시작시점을의사·약사와상담하게바꾸세요. 제목의금연일앵커는유지했습니다. 추가DOI내용은적합하나 현fullentry는승인하지않습니다.
- 남은확인한계: 원초록수준의2019·2016비교,2019리뷰전체원문미열람.2주일률패치시점추가확인필요.
- 아래증거ID: gradual2019, trial2016, preloading

### 배치1-6: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-006-8fb2/publication-entry-proposal.md`
- proposal SHA256: `c4c5f315f9efe395e90677b854948687d2e66d19490f0a992f58e1450dee8ece`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-006-8fb2/publication-entry-changes.json`
- changes SHA256: `977f11bfc8533974bc8eae6b60bc2a6ff2b07859586f38af36dfa77205a5bd9c`
- 판정이유: NRT전체대비RR1.61을패치단독으로축소하던오류와액상형/궐련형범위를고쳤고장기안전성불확실성을유지했습니다. 80RCT29,861명·11시험4,114명·추가4/100·RD0.01및CI를원문과대조했습니다. 새직접조문확인으로12조2항·4항의미확인을해소했습니다. 니코틴정의확대·금연구역은이전공식보도자료열람근거를유지합니다.
- 남은확인한계: 국내월가격·WHO/영국정책·금연약이더싸다는보편비교는이번에신규검증하지않음.12조확인을법2조본문직접확인으로확장하지않음.
- 아래증거ID: ecig2026, law12-new

### 배치1-7: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-007-a8ec/publication-entry-proposal.md`
- proposal SHA256: `379ff6458fb73f6d3d27d62a37079b3ba7184f0e9552e2ee4137b4f4a0acc8eb`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-007-a8ec/publication-entry-changes.json`
- changes SHA256: `b5d934c1dd8e57293eef2fbff480e6905d057471e79bc26a7dad1f1e06ac9aa0`
- 판정이유: 미국1회분/유럽약250mL를구분하고HR1.21/1.14및1.08/1.26의분모·구간을보존했습니다. 병을잔으로정정했고각음료군비교만으로제로전환효과를알수없다고제한했습니다. HR를절대사망확률로동일시하지않는문장이있습니다. 제16절incoming앵커‘당분음료를마시지마세요’주제는제목에보존됩니다.
- 남은확인한계: 미국논문전체미열람.해당인용숫자의분석범위만승인하며논문전체에대체분석이전혀없다고단정하지않음.
- 아래증거ID: malik2019, epic250

### 배치1-10: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-010-2bba/publication-entry-proposal.md`
- proposal SHA256: `e9d1fd2559055777dae3ca5e74cc4cb1da87673410832347e43fe08c0816f211`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-010-2bba/publication-entry-changes.json`
- changes SHA256: `b3c32fcc08a49ce90bbfb7eb4900767aa752760c4a7c18322c4f78a78644015d`
- 판정이유: 치간도구매일사용효과단정을사용여부비교로정정했습니다. 일본스스로생활하는유치아노인과50세이상통합분석을구분하며OR1.87/2.04를확률배수로전환하지않습니다. 예방목적단독스케일링연1회와치주질환치료관련예외를공단원문에맞게정정했습니다. 제24절‘빠진이치료’주제앵커보존.
- 남은확인한계: 도구가격·시간미확인.NHIS2024공식안내이며2026새개정전수검증아님.
- 아래증거ID: jages2026, ko2026, nhis-scale

### 배치1-12: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-012-3296/publication-entry-proposal.md`
- proposal SHA256: `bc01318e15559bd2d482d947d25e510894ad4971dd08e0a59769689960517129`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-012-3296/publication-entry-changes.json`
- changes SHA256: `e47f2618f9a4ee1ca383a11bc31f79dac6e86e05ddc5841c59e56c4d807e5360`
- 판정이유: 1단위를1.0mmol/L로바꿔mg/dL와의혼동을막고모든약하루1회단정을삭제했습니다. 혈압10mmHg당RR.87/.80/.73/.72와CTT LDL단위당.90/.78, 순응도80%이상대미만.55/.71은원초록에일치합니다. 순응도교란을‘크게잡혔을수있다’로제한하고처방대상·임의중단금지를유지했습니다. CTT의원보고RR는rate ratio임을감사에명시하며절대확률로역산하지않습니다.
- 남은확인한계: 국내급여한달부담미확인.원초록및기존CTT원문대조범위,별도혈당시험추가검증아님.
- 아래증거ID: bp2016, ctt2010, adherence2013

### 배치1-23: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-023-7dfd/publication-entry-proposal.md`
- proposal SHA256: `19d9a03435718e4efccf7714c1dee0743f2b59e14ed96f0ef8bb561eb8becabf`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-023-7dfd/publication-entry-changes.json`
- changes SHA256: `fdd38064b700a689320f03b04f266f59c353763eb1bb53bb618ead58ddb77db3`
- 판정이유: 가금육·생선HR.99는주2인분추가의독립연관으로정정되었고식품대체효과를직접분석한수치아님을독자본문에명시했습니다. 가공육/살코기HR1.03및각CI는원초록과일치합니다. 제목의생선·가금육선택은저자실천제안이며이수치가대체의인과효과를입증했다는뜻으로확대승인하지않습니다.
- 남은확인한계: 원문전체미열람.changes의감사파일없음문구는초안시점이력이며현재부재판정으로사용금지.
- 아래증거ID: meat2020

### 실제열람증거·재현성

이배치에서는기존primaryabstract RAW와기존직접수집XML을재개봉했습니다. 새HTTP는담배법12조한건으로구별합니다. 이전직접XML응답34개의raw경로/현재SHA/요청URL/HTTP결과는JSON `initial_direct_fulltext_raw_registry`에모두연결했습니다. 기존`cache_file`은메타데이터포인터임을`metadata_cache_file`로명확히하고`direct_fulltext_raw`를별도연결했습니다. **초기직접HTTP의정확수신시각은기록하지않았으므로null입니다.** 파일mtime이나루트의나중공용캐시수집시각으로대체하지않습니다. 이재검토열람시각은JSON `read_at_utc`이며원래수집시각과다릅니다.

- **gradual2019** (previous_direct_http_primary_abstract_now_reopened): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1002/14651858.CD013183.pub2&format=json&resultType=core>
  - raw: `/tmp/ch02-audit/gradual.body`
  - SHA256: `490471b161b009dc634fc3007b40e06f13f32ef77061bd5be46f2b23ccd43b56`
  - 수집시각: 정확시각미기록; 이번재열람시각과구분 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: neither approach resulted in superior quit rates (RR 1. 01, 95% CI 0.87 to 1.17; I<sup>2</sup> = 29%; 22 studies, 9219 participants)
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **trial2016** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.7326%2FM14-2805%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e8b65ecbbea63c8460dc.json`
  - SHA256: `e442dd8ee2327d547b56cbd3be887eed639b0ffe265cac53ae0f199a6de8e27d`
  - 수집시각: 2026-10-18T20:49:55.202788+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: Both groups received behavioral support from nurses and used nicotine replacement before and after quit day.
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **preloading** (previous_direct_http_fulltext_now_reopened): <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10278922/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC10278922.body`
  - SHA256: `3be1541f6b8f8643e9d674891cec0a484833b240d594da558033ebf170337919`
  - 수집시각: 정확시각미기록; 이번재열람시각과구분 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: 9 studies, 4395 participants
  - 범위: 이번재검토는 기존직접수집응답 재열람. 처음HTTP정확시각은기록없음, 지금새수집이라표시하지않음.

- **ecig2026** (previous_direct_http_fulltext_now_reopened): <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13506250/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC13506250.body`
  - SHA256: `70b431ba83ea315aeb9c12a6a08687ba9b92fe1b75d9bc38ca9f95312ea85227`
  - 수집시각: 정확시각미기록; 이번재열람시각과구분 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: 11 studies, 4114 participants
  - 범위: 이번재검토는 기존직접수집응답 재열람. 처음HTTP정확시각은기록없음, 지금새수집이라표시하지않음.

- **malik2019** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1161%2FCIRCULATIONAHA.118.037401%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d589bf67028de68ae779.json`
  - SHA256: `6e189557dd4e2d75b3c2825e40095c6c1b36409b21ed392c981c3a74ce3249c5`
  - 수집시각: 2026-10-18T20:49:55.660132+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: 1.14 (1.09, 1.19), and 1.21 (1.13, 1.28
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **epic250** (previous_direct_http_fulltext_now_reopened): <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6724165/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC6724165.body`
  - SHA256: `1f48db8e2b7622d2728688b925ad6634844300106709bfdc60883f7cf300fb50`
  - 수집시각: 정확시각미기록; 이번재열람시각과구분 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: 1 glass was equal to approximately 250 mL
  - 범위: 이번재검토는 기존직접수집응답 재열람. 처음HTTP정확시각은기록없음, 지금새수집이라표시하지않음.

- **jages2026** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jdent.2026.106789%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/85937fcbb2df949bcf5f.json`
  - SHA256: `93f56ff3022c182c90b1f1a46d4b1b5e5028e35b0b0005fb5eda4ff445684a0c`
  - 수집시각: 2026-10-18T20:49:56.891764+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: interdental cleaner use (HR=0.89; 95% CI=0.80-0.99)
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **ko2026** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1007%2Fs41999-025-01319-4%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7687b13873bdd5f9ebb2.json`
  - SHA256: `fbd10720869ab483276c9e4398656e10c862cee639691d40cc41ab8d9aac3ff9`
  - 수집시각: 2026-10-18T20:49:57.089939+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: fewer than 20 teeth (OR, 2.04, 95% CI [1.67-2.49]
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **nhis-scale** (previous_direct_http_official_html_now_reopened): <https://www.nhis.or.kr/static/alim/paper/oldpaper/202404/sub/section1_5.html>
  - raw: `/tmp/ch02-audit/nhis-scale.body`
  - SHA256: `91f2606c1e0bc2be9d3c1245df860ca52ed15b9b771a0f8ed0fb57d36840c20a`
  - 수집시각: 정확시각미기록; 이번재열람시각과구분 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: 스케일링만을 목적으로 시술하는 경우 1년 주기(매년 1월 1일부터 12월 31일까지)로 1회에 한해 건강보험을 적용
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **bp2016** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS0140-6736%2815%2901225-8%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9d76eccee18ffd543f24.json`
  - SHA256: `b7a3ddb2081a5387b1c14184aa4197a5811593b6ece4061e5b5ba77af0d85f22`
  - 수집시각: 2026-10-18T20:49:41.563609+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: Every 10 mm Hg reduction in systolic blood pressure
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **ctt2010** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS0140-6736%2810%2961350-5%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/879f70de45077f18cea1.json`
  - SHA256: `3434d5ec9349d1183f4a9968c5f6c1bf4d3cd7a9b64247db0cf7a0597958cae2`
  - 수집시각: 2026-10-18T20:49:58.072488+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: rate ratio [RR] 0·78, 95% CI 0·76-0·80
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **adherence2013** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Feurheartj%2Feht295%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/f4c786bd3453be05c2b1.json`
  - SHA256: `b0a768004b00af7a2c3e0a821f508fe9ee1a1cb1b803450fea111ab8b0e2a513`
  - 수집시각: 2026-10-18T20:49:59.109540+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: 0.55 (0.46-0.67) and 0.71 (0.64-0.78)
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **meat2020** (cached_primary_abstract): <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjamainternmed.2019.6969%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/0b6beb299d71a48a9114.json`
  - SHA256: `c3cc35e29e09a1219baf97c1be48d041a9b624305d8c76f2a24e717ee310dddb`
  - 수집시각: 2026-10-18T20:50:03.281741+09:00 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: based on each additional intake of 2 servings per week
  - 범위: 인용한 결과·대상·노출 정의 대조. 서지존재만 확인한 기록이 아님.

- **law12-new** (new_https_official_article): <https://www.law.go.kr/LSW/lsSideInfoP.do?lsiSeq=280343&joNo=0012&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR>
  - raw: `/tmp/ch02-audit/batch1-law12.body`
  - SHA256: `7abde23787e4066e82d0e0e7682fef930f5578ad50cf35d4662b0a32454aa5c6`
  - 수집시각: 정확시각미기록; 이번재열람시각과구분 / HTTP: 200 / 재열람UTC: 2026-10-18T13:47:08.728391+00:00
  - 확인문장: ② 소매인이 아닌 자는 담배를 소비자에게 판매해서는 아니 된다. ④ 소매인이 담배를 소비자에게 판매하는 경우에는 우편판매 및 전자거래의 방법으로 하여서는 아니 된다.
  - 범위: 이번재검토때curl TLS검증 유지로새로받아조문본문읽음. clock확인13:44:45UTC이전요청완료, 정확응답수신시각은없음. 2026.4.24시행 법률제21216호. HTML태그/인용법령설명 생략한 발췌.

제4항확정수정요청과나머지승인범위는humanize_a및ROOT에전달했습니다. OR를RR·발생확률로바꾸거나기저확률을가정해역산하지않았습니다. HR·RR·CTT rate ratio는원보고범위대로해석했습니다. 이6안에사용한핵심수치에서새로운원자료내부충돌은발견하지않았으며원문접근실패를무효판정으로처리하지않았습니다. 공개본문·strict final·입력·승인자료·git는변경하지않았습니다.

## 사실 수정안 배치1-r2 및 배치2 독립 재검토

배치1-r2 **제4항approve**. 배치2 **approve3(13/15/24), revise3(14/19/25)**. 검토UTC: 2026-10-18T13:49:56.448301+00:00. 이전frozen파일과판정은그대로남기고새variant를정확SHA로심사했습니다. 정식KR-FIT·전체절출판승인아닙니다.

### 배치1-r2

- 제4항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-004-87e1/publication-entry-proposal-r2.md`
  - proposal SHA256: `e87a1c82e8c06fe72692141df370194afccdae2e6b8c48c8f01261fca9f3812b`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-004-87e1/publication-entry-changes-r2.json`
  - changes SHA256: `fda0a14da0b2871adbe6a9ceda8189eccd04e238e48f36345ae8290891331010`
  - 판정: 2016영국시험의두집단NRT조건으로귀속을명확히했고선사용시점을의사·약사와상담하도록제한해frozen초안에대한두수정요청을해결했습니다. 기존검증수치·새DOI와금연일앵커를유지합니다.
  - 근거ID: gradual2019, trial2016, preloading

### 배치2

- 제13항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-013-0d52/publication-entry-proposal.md`
  - proposal SHA256: `9639cea2bd2caa9bc28de840c4a2fad50f490357979aa7acae24c1190969e1b5`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-013-0d52/publication-entry-changes.json`
  - changes SHA256: `bbc4b912c41f7a52b1e7141a407274b9f1b9380fd2127d87be272c4377b67ca8`
  - 판정: Cappuccio연구별짧은수면기준≤4시간부터<7시간범위를원문HTML에서확인했습니다. 비교기준도다르므로RR1.12를일률7시간미만효과로묶지않게고친점이적합합니다. 규칙성네분위20~48%와최저분위비교를보존하고‘대부분역인과’를가능성으로낮췄습니다. Yin용량반응1.06/1.13과Kumar사회적시차≥2시간HR1.30을각연구범위로유지합니다.
  - 근거ID: sleep-definitions, sleep2010, sleep-dose, sleep-regular, jetlag2026

- 제14항 **revise**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/publication-entry-proposal.md`
  - proposal SHA256: `6ef4d5fedd933e7b078cf48f5bdc3f854515c8163fbcc5cdbfb142eed8c1b889`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/publication-entry-changes.json`
  - changes SHA256: `3c2fd9af37d9d19ca1b891a9fa5ad6555f8d67c036e99baca9e5d01d0776cdbf`
  - 판정: 원문노출은badminton/tennis/squash여서탁구를스쿼시로고친점,주3회45분최적처방삭제는타당합니다. 그러나원문결과는심혈관사망HR.44=56%낮음인데논의는59%라고씁니다. changes limitations에만기록했고독자본문에는고지하지않았습니다. 새CONTRACT의원출처내부수치충돌고지원칙상본문에짧게불일치를밝히고사용값이HR.44/56%임을명시해야합니다.
  - 근거ID: racket-primary

- 제15항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-015-901a/publication-entry-proposal.md`
  - proposal SHA256: `d559da9d859da3f4c42a4221707ff3bab94580c3498165c6f0124cf37025664c`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-015-901a/publication-entry-changes.json`
  - changes SHA256: `2a639a7ab39813cd9c31d55705b74d9321441444343dacf7dde4b7f5e6260705`
  - 판정: 주분석25,241명·평균6.9년852사망,각VILPA비교감소폭과운동인62,344명별도분석을원문방법·결과에서대조했습니다. 비운동인선정은기기측정보다평균5.5년전설문,여가산책주1회이하라는조건이맞습니다. 대조군을전혀움직이지않는사람에서해당짧은격한활동이없는사람으로정정하고운동인전면배제를없앴습니다. 인과·운동인추가효과를시험한것아님을본문에유지합니다.
  - 근거ID: vilpa2022

- 제19항 **revise**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-019-e80d/publication-entry-proposal.md`
  - proposal SHA256: `a138b57bb8cbe69b9a9607446fffb242282fa4f78abc1493af5fc366cac914b3`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-019-e80d/publication-entry-changes.json`
  - changes SHA256: `6744a002ce5d0dc7ceda0ea8705b0295edd95aa606b033ecdc17eeaffc0cc631`
  - 판정: Wood의현재음주자>0~≤100g기준·40세기대수명모델,음주량별범위및Zhao추정치는맞게정정했습니다. 다만GBD2016원문초록은95%UI0.0~0.8standarddrinks/week,같은논문결과는daily로씁니다. 현재안은주당0.0~0.8만확정하고내부충돌을본문에밝히지않아수정필요. 0최저추정방향은유지하되불확실성상한의단위충돌을고지하고미해결수치를안전기준으로제시하지마세요.
  - 근거ID: wood2018, gbd-unit-week, gbd-unit-day, zhao2023, alcohol2006

- 제24항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-024-c727/publication-entry-proposal.md`
  - proposal SHA256: `f2cd0aeff8995ac5d5681535156539b47f1d0eb3fbc06255c7d73ac285387b08`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-024-c727/publication-entry-changes.json`
  - changes SHA256: `f9bd91803a30cbe46cc959916866ae47b2d07aacd78b55a81f486a03f239554f`
  - 판정: 통곡물RR.83(.77~.90)·식품90g3인분·최저위험225g·I²83%를원문에대조했습니다. 다수연구의제품신선중량과일부건조곡물중량차이를설명하고90g마른현미/조리밥처방이아님을명시해단위오독을막았습니다. 절반만교체하면최대이득이라는미지원조건도정정했습니다. AJCN하루1인분RR.92는원초록범위로확인하며그논문전체serving중량까지승인하지않습니다.
  - 근거ID: grain2016, grain2017

- 제25항 **revise**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-025-1523/publication-entry-proposal.md`
  - proposal SHA256: `8f15caa462554af27f6ff84d06c3058d73d77395631be46b58548bf08cdff119`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-025-1523/publication-entry-changes.json`
  - changes SHA256: `4392a1ecb5e0b1082b6cbe7cce2c72e06aee7079b1d180e7b5de5e1f41f636c5`
  - 판정: China-PAR100,902명·중앙7.3년HR.85(.79~.90)와기대수명추정,독소두연구가실제위험평가를했다는정정,우린차와고농도추출물간독성구별은원초록/관련원문에맞습니다. 그러나제목‘일주일세잔이상’은changes limitations에서도빈도·잔용량미검증이라남겼습니다. 원초록의habitual만으로주3잔을확정할수없으므로원문운영정의를직접확인하거나제목에서미검증섭취빈도를삭제해야합니다. 제목자체가원래문장이라는이유로수량권고를승인하지않습니다.
  - 근거ID: tea2020, aflatoxin2020, tea-toxin2022, tea-liver2018

### 배치2 직접열람근거

새HTTP를했다는주장없음. 기존직접수집XML·제공된원초록캐시및작성자가보존한실제1차HTML을직접재열람했습니다. 작성자의수집시각을검토자의HTTP시각으로옮기지않습니다.

- **sleep-definitions**: <https://pmc.ncbi.nlm.nih.gov/articles/PMC2864873/>
  - raw: `/tmp/ch02e13-primary.html`
  - SHA256: `7b60175fa0e9326c1f0a4488a84215d01e5880eefba9abe220972daf4602fc8a`
  - 형태: author_preserved_primary_html_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: Short sleep was ≤ 5 h … ≤ 6 h … < 7 h … ≤ 4 h.
  - 범위: 작성자가HTTPS로보존한원문HTML을이번에직접읽음.정확원HTTP시각미기록,작성자2026-10-18수집기록과구분.

- **sleep2010**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Fsleep%2F33.5.585%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/98ed1f52f78b79d8a5ec.json`
  - SHA256: `1dfe4f2c2e4fef74683cedc5993d1f5836f346ef17011020c2bf57bbb0030c53`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:49:59.299783+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: 1,382,999 male and female participants
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

- **sleep-dose**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5634263/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC5634263.body`
  - SHA256: `7401ff314417e19ab78ad832f4048a5adf5a17d51fdd700d97eeb1bce95c6ddb`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: 1.06
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **sleep-regular**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10782501/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC10782501.body`
  - SHA256: `c60cf4619010806636c8cb76ae9388b6c98a33308f63c979c1acd6a80730eb69`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: across the top four SRI quintiles compared to the least regular quintile
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **jetlag2026**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fjoim.70133%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6ec72dd8f254bf56dca9.json`
  - SHA256: `d41a6b38ac83c8b568748447185fd8f4ab8ed08f0d51d0b2fd948a68b11db58c`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:50:00.510137+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: HR 1.30, 95% CI 1.11-1.54
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

- **racket-primary**: <https://bjsm.bmj.com/content/51/10/812>
  - raw: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/source-evidence/primary.html`
  - SHA256: `b4b95fdc8edef5136dd70cf6df22a9b15095ae001294088e9329d58520cc63c8`
  - 형태: author_preserved_publisher_html_reopened; 원수집시각: 2026-10-18T13:37:07.039446+00:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: 결과: Racquet sports participation was associated with a significant reduced risk of CVD mortality of 56% (HR=0.44, 95% CI 0.24 to 0.83). 논의: 47% in all-cause mortality and 59% reduction in CVD mortality. 노출: badminton/tennis/squash combined
  - 범위: 작성자의수집기록시각이며검토자의신규HTTP아님.동일RAW SHA일치확인후결과·논의·노출문단을읽음.

- **vilpa2022**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9800274/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC9800274.body`
  - SHA256: `517988dcf668ecd335886cc6e3df51cfc2a55ca31bda12a29650e1a6ea2c34ed`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: reported no leisure time exercise participation and no more than one recreational walk per week
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **wood2018**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5899998/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC5899998.body`
  - SHA256: `6b26cfa7c791cf92ebc3ec68cf47396ba4ad50d557bb1e3eda74faa527aeb401`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: >0–≤100 g per week
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **gbd-unit-week**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6148333/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC6148333.body`
  - SHA256: `de2fc26089a26e01dfc9bf0d77bd8d8894fc8532b08f6ed165910c200a6e5f60`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: zero (95% UI 0·0–0·8) standard drinks per week
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **gbd-unit-day**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6148333/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC6148333.body`
  - SHA256: `de2fc26089a26e01dfc9bf0d77bd8d8894fc8532b08f6ed165910c200a6e5f60`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: zero (95% UI 0·0–0·8) standard drinks daily
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **zhao2023**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10066463/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC10066463.body`
  - SHA256: `217dc207a4cb1bcb7a152b4d4029ab87e8f3c937bacb205ebcc35ca82d1fd77b`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: Low-volume (1.30 to <25)
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **alcohol2006**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Farchinte.166.22.2437%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c9d68df968a86f93b3e7.json`
  - SHA256: `09d6b3f9e2fc5c7dd725442e9ada077c8159f2b91e6c36faa4042a12b6e66b3d`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:50:02.053499+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: Consumption of alcohol, up to 4 drinks per day in men and 2 drinks per day in women
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

- **grain2016**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4908315/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC4908315.body`
  - SHA256: `f2efbe24aaf366f9f1aabee1847ff4bbafa907c6821311fbeee7568e1f390c92`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: whole grain food or product intake (fresh weight including water content)
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **grain2017**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.3945%2Fajcn.117.153148%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4b7da62d583d8e829ddf.json`
  - SHA256: `78c1aa2d6eb0a605813a7b92792a1b65df45cad47ac7b116ff2abb36ac2ada6c`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:50:01.155547+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: whole grains (RR: 0.92; 95% CI: 0.89, 0.95)
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

- **tea2020**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1177%2F2047487319894685%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4e0e0655683271e12c19.json`
  - SHA256: `52b5139378d6c29ec9d5aa199703ac3e43306e6a4e23faf0b93ee7d57d6978a4`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:50:03.510728+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: 1.41 years longer of atherosclerotic cardiovascular disease-free years and 1.26 years longer of life expectancy
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

- **aflatoxin2020**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.fct.2020.111830%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5fde18292b4ae6fd255f.json`
  - SHA256: `468973e84b3afc51c996a1ea8203c62f6dda199a511c192230f60af3449d62f5`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:50:03.844545+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: Two out of 158 samples were positive
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

- **tea-toxin2022**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9318285/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC9318285.body`
  - SHA256: `ac013af1a5ee8b6e76ac31c69a3f7d0383510029892522dd6f56df989aa8f21f`
  - 형태: previous_direct_http_fulltext_reopened; 원수집시각: 정확시각미기록; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: A risk assessment was performed for the worst-case scenarios by point evaluation and Monte Carlo assessment model
  - 범위: 초기자체수집응답재열람.초기정확HTTP시각미기록.지금새HTTP아님.

- **tea-liver2018**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.yrtph.2018.03.019%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7bdf70026746773e4d1c.json`
  - SHA256: `ce8c74bd6354ab553cb68c694f9c0a0b3fe7fa379db5a69c93c65af22386261c`
  - 형태: provided_primary_abstract_cache_reopened; 원수집시각: 2026-10-18T20:50:04.355366+09:00; 재열람UTC: 2026-10-18T13:49:56.448301+00:00
  - 확인문장: but not when consumed as brewed tea
  - 범위: 해당원문결과·방법의인용부분열람.부록전체검증아님.

제14항59%/56%와제19항week/daily는실제원자료내부충돌입니다. 한쪽을임의정답으로정해조용히고치지않았고독자본문에도충돌을고지하도록revise했습니다. OR/RR역산·임의기저확률은사용하지않았습니다. 제25항수정내용의주요오류는해결됐지만미확인수량제목은승인하지않았습니다. 확정수정요청은humanize_a와ROOT에전달했습니다.

## 배치2-r2 및 정정공지 추가 대조

**14/19/25 r2세안approve.** 기존r1revise이력과frozen자료는보존했습니다. 새정정문·현재출판사HTML/EuropePMC XML을HTTPS검증유지로직접열람했습니다. 과거초록메타데이터와수정원문의차이를영구적인모순으로표현하지않도록확인범위를제한했습니다.

- 제14항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/publication-entry-proposal-r2.md`
  - proposal SHA256: `9585db5f13dc584f87b8f1d3a6095ea73bf86b8e94c2c742712ee2f0894bd069`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/publication-entry-changes-r2.json`
  - changes SHA256: `c6c588e231321735e35917457e2a6ebdf141c671348f6972828d660569adb06a`
  - 판정: r2이득에초록56%·논의59%가일치하지않음을독자에게직접고지했습니다. 실제현재출판사HTML재조회에도결과HR.44/56%와논의59%가함께있어과거초록만의차이를영구모순으로만든것이아닙니다. 기존주3회45분처방삭제·라켓노출정정과다른수치보존을유지해approve.

- 제19항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-019-e80d/publication-entry-proposal-r2.md`
  - proposal SHA256: `b2a963b66f25a48485911b66cdc006d66a51a94c123f5e7fcf05e9ddcfd437ba`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-019-e80d/publication-entry-changes-r2.json`
  - changes SHA256: `b14b238fc3747f41bb9473f72f871baf758a9f154edd7af33c84d181b8c4663b`
  - 판정: r2가GBD의불확실성상한수치를제거하고초록주당/결과하루단위차이를독자본문에고지했습니다. 연결된정정공지두건을직접읽었으나이단위수정을명시하지않고현재새XML에도두표기가있음을확인했습니다. 금주최저방향·Wood현재음주자기준및모델한계는보존합니다. 확인한버전의표기차이라는범위를넘어영구미해결이라단정하지않고approve.

- 제25항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-025-1523/publication-entry-proposal-r2.md`
  - proposal SHA256: `c62bce7810d622172287eb78d74962441b4029d742a6a64675540a64ef531592`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-025-1523/publication-entry-changes-r2.json`
  - changes SHA256: `c6838a1fb5b29f0176958a99d9dc49a2f93d09e28c45d741af41b38474f09d73`
  - 판정: r2는미검증주3잔빈도를제목에서삭제한‘차를드세요’이며나머지검토된본문은r1과동일합니다. incoming제25항제목앵커는book-kr검색에서발견되지않았습니다. 차라는주제·독소/추출물경고와조건을보존하고검증하지못한섭취량권고를강화하지않아approve.

### 정정 확인의 실제 근거

- <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6902241/fullTextXML>
  - raw: `/tmp/ch02-audit/correction2018.body` / SHA256: `883858c20a902ab4cae3d733b25bae10e895ec5ebcf8d41e39b45592ca9aad66`
  - 새HTTP 200, 시작UTC 2026-10-18T13:50:20.513850+00:00, 완료UTC 2026-10-18T13:50:22.000169+00:00, 열람UTC 2026-10-18T13:52:04.375325+00:00
  - 범위: 실제정정공지본문직접열람.2018저자명/소속·데이터공유성명,2019저자/소속/이해관계정정.음주단위정정내용없음.
  - 발췌: GBD 2016 Alcohol Collaborators. Alcohol use and burden for 195 countries and territories, 1990–2016: a systematic analysis for the Global Burden of Disease Study 2016.  Lancet  2018;  392:  1015–35— Alan D Lopez has been added to the list of GBD 2016 Alcohol Collaborators; the names of Masood Ali Shaikh and Dhirendra Narain Sinha have been corrected; and affiliations have been updated for Karzan Abdulmuhsin Mohammad. Raw data underlying figures and relative risk curves have been made publicly available on Mendeley Data, a secure online repository for research data, as of Sept 19, 2018 (DOI:10.17632/5thy2mcwn7.1). A data sharing statement containing a link to this dataset has been added at the end of the Article. These corrections have been made to the online version as of Sept 27, 2018.

- <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6598857/fullTextXML>
  - raw: `/tmp/ch02-audit/correction2019.body` / SHA256: `e58bb3fef0a824dd40ea0137ee603ebfadcdf91367352fdcf21e4b6c7c60a800`
  - 새HTTP 200, 시작UTC 2026-10-18T13:50:20.514615+00:00, 완료UTC 2026-10-18T13:50:22.098680+00:00, 열람UTC 2026-10-18T13:52:04.375325+00:00
  - 범위: 실제정정공지본문직접열람.2018저자명/소속·데이터공유성명,2019저자/소속/이해관계정정.음주단위정정내용없음.
  - 발췌: GBD 2016 Alcohol Collaborators. Alcohol use and burden for 195 countries and territories, 1990–2016: a systematic analysis for the Global Burden of Disease Study 2016.  Lancet  2018;  392:  1015–35— In this Global Health Metrics paper, Stefan Lorkowski has been added to the collaborators list; affiliation details and a declaration of interests statement for Stefan Lorkowski have also been added. These corrections have been made to the online version as of June 20, 2019.

- <https://pmc.ncbi.nlm.nih.gov/articles/PMC6148333/>
  - raw: `/tmp/ch02-audit/gbd-live.body` / SHA256: `10aaacae842dd978d220e15a203941ec5207ca7e49e25058f5f9691b2e73ba49`
  - 새HTTP 200, 시작UTC 2026-10-18T13:50:20.515111+00:00, 완료UTC 2026-10-18T13:50:20.929051+00:00, 열람UTC 2026-10-18T13:52:04.375325+00:00
  - 범위: HTTP200이지만reCAPTCHA화면.논문본문확인실패이며논문접근성공으로세지않음.
  - 발췌: 본문발췌없음

- <https://bjsm.bmj.com/content/51/10/812>
  - raw: `/tmp/ch02-audit/racket-live.body` / SHA256: `0ffc856d5c6158f28c52210708f0b6989e5d128406915cdb8520baed9e6d9beb`
  - 새HTTP 200, 시작UTC 2026-10-18T13:50:20.515700+00:00, 완료UTC 2026-10-18T13:50:22.404424+00:00, 열람UTC 2026-10-18T13:52:04.375325+00:00
  - 범위: 현재출판사HTML직접열람,같은페이지의56/59차이존재확인.정정공지가세상에없다는주장아님.
  - 발췌: 현재출판사결과: CVD mortality of 56% (HR=0.44, 95% CI 0.24 to 0.83). 논의: 59% reduction in CVD mortality.

- <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6148333/fullTextXML>
  - raw: `/tmp/ch02-audit/gbd-live-xml.body` / SHA256: `de2fc26089a26e01dfc9bf0d77bd8d8894fc8532b08f6ed165910c200a6e5f60`
  - 새HTTP 200, 시작UTC 2026-10-18T13:50:53.580028+00:00, 완료UTC 2026-10-18T13:50:54.451815+00:00, 열람UTC 2026-10-18T13:52:04.375325+00:00
  - 범위: 현재새EuropePMC응답에도두표기가같은XML에존재.이후정정가능성이나접근못한출판사최종판을배제하지않음.
  - 발췌: 초록: zero (95% UI 0·0–0·8) standard drinks per week. 결과: zero (95% UI 0·0–0·8) standard drinks daily.

확인한두GBD정정문은단위수정이아니며새EuropePMC응답에서week/daily차이는현재관찰됩니다. PMC웹페이지의HTTP200은reCAPTCHA였으므로본문열람성공으로계상하지않았습니다. 출판사최종판의모든변경이없다고판정한것은아니며향후정정이있으면고지를갱신해야합니다. 제14항은현재출판사본문에서도56/59차이를확인했습니다. 이추가확인은기존승인정확SHA를바꾸지않으며새r2만승인합니다. 정식KR-FIT및절전체출판승인은여전히아닙니다.

## 사실 수정안 배치3 독립 재검토

**approve3(30/31/32), revise2(26/33).** 기존승인12항목과정확SHA이력은고정했습니다. 검토UTC 2026-10-18T13:55:57.965373+00:00. 새커피정정공지와현재출판사본문은HTTPS검증유지로직접받았고,나머지는기존원초록/원문응답을다시읽어확인범위를구분했습니다.

### 배치3-26: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-026-c168/publication-entry-proposal.md`
- proposal SHA256: `3e8144925d85240f5576dcd1bfd647efff4d4403e21d709eaa1d3d4517df1304`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-026-c168/publication-entry-changes.json`
- changes SHA256: `2f620050ff0cd50801e5f5f2073f05f2b03e5c5f12e8a9010d3162a01079d08d`
- 판정: 기존과원문CI차이를본문에알린의도는맞으나2018BMJ정정공지k194가원하는CI0.79~0.88을명시합니다. ‘확인이더필요’로미해결처리하지말고정정문을출처에보강해수정된값을사용하고옛원문오기와정정사실을짧게고지하세요. 제목‘커피는관찰결과/근거는별개’는독자용주제제목으로고치며쉽게‘사망17%적음’도건수와RR을혼동하지않게‘사망위험17%낮음’으로정리하세요. 설탕·크림완전상쇄삭제·마시기증량권고제한은적합합니다.
- 근거ID: coffee-oldxml, coffee-correction2018, coffee-currentpublisher, coffee-underlying-abstract

### 배치3-30: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-030-4d4a/publication-entry-proposal.md`
- proposal SHA256: `f68f58d4a8673cdeb7837a4d237df408016e4a1d1a95674abba94c664a445891`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-030-4d4a/publication-entry-changes.json`
- changes SHA256: `07b8a5912a07976c51c4b4f1e12063a3a975f3d5aaa69791369a9f6bec9b6a6c`
- 판정: OR2.07/8.16, 300환자571대조·편평세포암, 대기<2분대≥4분OR5.41과CI를원문에서확인했습니다. OR가확률배수가아님을독자본문에밝히고2~3분기다리면안전하다는임의시간기준을삭제했습니다. 초록/본문CI소수점자릿수차이는16.9/16.91·11.1/11.14의반올림정밀도차이로,서로다른추정치충돌로과장하지않습니다.65℃초과2A·커피자체분류불가를IARC공식PDF에대조했습니다.
- 근거ID: hot-tea2009, iarc-hot2016

### 배치3-31: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-031-7734/publication-entry-proposal.md`
- proposal SHA256: `22aa1a574c1bd5718a803ceec52ba9985e6dda8e4baa202f021aa1c53b6e3ab7`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-031-7734/publication-entry-changes.json`
- changes SHA256: `6f93322ad013cdee80a863e767f17bfa34075a1eb6155757f1616c8e5a93cc75`
- 판정: 스웨덴여성29,518명·초기25~64세·20년·기대수명차0.6~2.1년은원초록에일치합니다. 하루십수분충분이라는미지원용량을삭제하고한국/계절/피부별보장량을확정하지않으며햇빛이흡연해를상쇄한다는오독을직접차단했습니다. 피부보호조건을보존했습니다. 전체원문노출분류는미열람이므로그범위까지검증승인하지않습니다.
- 근거ID: sun2016

### 배치3-32: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-032-d167/publication-entry-proposal.md`
- proposal SHA256: `d3f3cc50ea0982a6f273ee780efc8fdb4949f1f4e0a946712423dfb060f0c603`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-032-d167/publication-entry-changes.json`
- changes SHA256: `9b0b6ac6bb3f1af05cda89608e88272f1f308329c8779c5df316117e4ce4ec92`
- 판정: BMI239코호트의기준22.5~<25·선정세조건·각HR및동아시아5kg/m²당1.39를원문에대조했습니다. RCT부재단정대신Ma2017총54시험30,206명·사망분석34시험685사망RR.82(.71~.95)를비만성인식이±운동범위로추가했습니다. HR/RR·절대확률·BMI관찰차이와감량개입을구분했고정상체중감량/한국진단기준으로확대하지않습니다. 쉽게의마지막‘관찰된차이’는BMI관찰비교를가리킨다는본문맥락으로읽습니다.
- 근거ID: bmi2016, weight-rct2017, flegal2013

### 배치3-33: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-033-866b/publication-entry-proposal.md`
- proposal SHA256: `6799fbfcca880e64de4cf9414c3067274a608e304d8a95f41453881a8a72d32a`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-033-866b/publication-entry-changes.json`
- changes SHA256: `9fbb018481925853128a46de0ca8157e21b05789c15fdde006822d604170188c`
- 판정: 22,811명·중앙8.2년1,236사망·>4/week대없음/드묾·HR.77/.66및CI는원초록에일치합니다. ≥4를>4로고친내용과인과한계는적합합니다. 다만제목‘관찰결과를살펴보세요’는독자에게논문검토를시키는메타제목입니다. 고추주제를유지한명사형등간결한독자용제목으로바꾸세요. 미확인섭취처방을되살리지는마세요.
- 근거ID: chili2019

### 배치3 근거·정정문

제26항CI의불일치는미해결인상태가아닙니다. BMJ2018정정공지<https://doi.org/10.1136/bmj.k194>가0.79~0.88로명시정정했습니다. 현재출판사페이지에옛오기가남아있더라도정정문을따라야합니다. 원작성자의미해결문구는수정요청했습니다. 정정문원XML바이트는JSON의batch3 sources coffee-correction2018 `raw_utf8`에내장하여허용된두감사파일안에보존했고,UTF8복원SHA가원응답SHA와일치함을검사했습니다.

- **coffee-oldxml**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5696634/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC5696634.body` / SHA256: `87d53f28f923f2d7391b8e3f4f135a3ee9798251019c251b771a33f0b9b786bb`
  - 형태: previous_direct_primary_xml_reopened / 수집UTC: 정확초기시각미기록 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: 0.83, 95% confidence interval 0.83 to 0.88
  - 범위: 기존자체직접수집XML재열람,정확초기HTTP시각미기록.지금새HTTP아님.

- **coffee-correction2018**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5765813/fullTextXML>
  - raw: `/tmp/ch02-audit/coffee-correction.body` / SHA256: `b1549670ff3c732920727c8a2a3f245f76c21e47281d543498826d8c3fccc729`
  - 형태: new_https_primary_fetch / 수집UTC: 2026-10-18T13:53:34.975485+00:00 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: the relative risk should read 0.83 (95% confidence interval 0.79 to 0.88) rather than the current 0.83 (0.83 to 0.88).
  - 범위: BMJ2018정정공지직접본문열람.초록/사망본문에반복된CI오기수정임을명시.기존의0.79~0.88은정정공지로확인됐고미해결이라고하지않음.

- **coffee-currentpublisher**: <https://www.bmj.com/content/359/bmj.j5024>
  - raw: `/tmp/ch02-audit/coffee-publisher.body` / SHA256: `bc95bbe38cb0224166731c2506b64e7e71151bc140fdddcc4d4e737a04e8daa7`
  - 형태: new_https_primary_fetch / 수집UTC: 2026-10-18T13:53:28.947356+00:00 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: 현재응답에는 all cause mortality (relative risk 0.83, 95% confidence interval 0.83 to 0.88)가남아있음.
  - 범위: 현재출판사본문에서도옛오기보존을확인했지만명시정정공지의.79~.88해결을우선한다.이것을미해결영구모순으로쓰지않음.

- **coffee-underlying-abstract**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1007/s10654-016-0202-2&format=json&resultType=core>
  - raw: `/tmp/ch02-audit/coffee-underlying.body` / SHA256: `8f45ad3ffa98d049645f99b3fe6c561a91ae418a640253f14443ba9a64e73307`
  - 형태: new_https_primary_fetch / 수집UTC: 2026-10-18T13:53:27.613321+00:00 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: Coffee consumption has been associated with several benefits toward human health. However, its association with mortality risk has yielded contrasting results, including a non-linear relation to all-cause and cardiovascular disease (CVD) mortality and no association with cancer mortality. As smoking habits may affect the association between coffee and health outcomes, the aim of the present study was to update the latest dose-response meta-analysis of prospective cohort studies on the association between coffee consumption and mortality risk and conduct stratified analyses by smoking status and other potential confounders. A systematic search was conducted in electronic databases to identify relevant studies, risk estimates were retrieved from the studies, and dose-response analysis was modeled by using restricted cubic splines. A total of 31 studies comprising 1610,543 individuals and 183,991 cases of all-cause, 34,574 of CVD, and 40,991 of cancer deaths were selected. Analysis showed decreased all-cause [relative risk (RR) = 0.86, 95 % confidence interval (CI) = 0.82, 0.89)] and CVD mortality risk (RR = 0.85, 95 % CI = 0.77, 0.93) for consumption of up to 4 cups/day of coffee, while higher intakes were associated with no further lower risk. When analyses were restricted only to non-smokers, a linear decreased risk of all-cause (RR = 0.94, 95 % CI = 0.93, 0.96), CVD (RR = 0.94, 95 % CI = 0.91, 0.97), and cancer mortality (RR = 0.98, 95 % CI = 0.96, 1.00) for 1 cup/day increase was found. The search for other potential confounders, including dose-response analyses in subgroups by gender, geographical area, year of publication, and type of coffee, showed no relevant differences between strata. In conclusion, coffee consumption is associated with decreased risk of mortality from all-cause, CVD, and cancer; however, smoking modifies the observed risk when studying the role of coffee on human health.
  - 범위: Grosso2016하위메타분석원초록조회.전체논문/그래프CI를검증한것아님.이하위초록만으로.83CI를역산하지않음.

- **hot-tea2009**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3269898/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC3269898.body` / SHA256: `aca4f244d445ed112346140b32b32038385868e90242bdfffd68793f2363fb9a`
  - 형태: previous_direct_primary_xml_reopened / 수집UTC: 정확초기시각미기록 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: less than two minutes after pouring (5.41, 2.63 to 11.1)
  - 범위: 기존자체직접수집XML재열람,정확초기HTTP시각미기록.지금새HTTP아님.

- **iarc-hot2016**: <https://www.iarc.who.int/wp-content/uploads/2018/07/pr244_E.pdf>
  - raw: `/tmp/ch02-audit/iarc-hot.body` / SHA256: `089c2b65dc67e9fd58e4ba67294e4f31a35ca02fc1fa0c25a4292e4811df6d16`
  - 형태: previous_direct_official_pdf_reopened / 수집UTC: 정확초기시각미기록 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: Drinking very hot beverages was classified as probably carcinogenic to humans (Group 2A). “Very hot” refers to any beverages consumed at a temperature above 65 °C.
  - 범위: 이전직접수집PDF와pdftotext두페이지/각주재열람.정확초기HTTP시각미기록.새HTTP아님.

- **sun2016**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fjoim.12496%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e68a6464b290a05b21d2.json` / SHA256: `8f4dac63a0d2b73eda218ba53290f66ca2802cc62414cebbc022ccfd629a21dd`
  - 형태: provided_primary_abstract_cache_reopened / 수집UTC: 2026-10-18T20:50:05.832308+09:00 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: Compared to the highest sun exposure group, life expectancy of avoiders of sun exposure was reduced by 0.6-2.1 years.
  - 범위: 원초록의해당대상/결과를직접읽음.전체원문/부록열람으로세지않음.

- **bmi2016**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4995441/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC4995441.body` / SHA256: `e63f5232c5728c87368ac6a01da315ee3ff5e64bd5bf170618f2d5c3f9bd8b39`
  - 형태: previous_direct_primary_xml_reopened / 수집UTC: 정확초기시각미기록 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: relative to BMI 22·5–<25·0 kg/m
  - 범위: 기존자체직접수집XML재열람,정확초기HTTP시각미기록.지금새HTTP아님.

- **weight-rct2017**: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5682593/fullTextXML>
  - raw: `/tmp/ch02-audit/weight-full.body` / SHA256: `aa4d7da30b16493cf74d5e8b1d6955d33ab63c468ddaa5ad43ce271dd8974b78`
  - 형태: previous_direct_primary_xml_reopened / 수집UTC: 정확초기시각미기록 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: 54 RCTs with 30206 participants; all cause mortality (34 trials, 685 events; risk ratio 0.82, 95% confidence interval 0.71 to 0.95)
  - 범위: 초기추가직접수집응답의요약·선정방법·결과재열람.비만성인식이감량±운동,1년이상이며정상체중에일반화하지않음.

- **flegal2013**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2012.113905%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/790629f89037aa491844.json` / SHA256: `65bcdb6b29475d18052ab5dea9a1f1ee381a29c20338a7f477d71e5641e54ec1`
  - 형태: provided_primary_abstract_cache_reopened / 수집UTC: 2026-10-18T20:50:06.281088+09:00 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: 0.94
  - 범위: 원초록의해당대상/결과를직접읽음.전체원문/부록열람으로세지않음.

- **chili2019**: <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jacc.2019.09.068%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/edda638827db3ce65f50.json` / SHA256: `a3a27d4290375b707c0c283f3057339a0f305f15cb1ca3dadc6289ca11483a35`
  - 형태: provided_primary_abstract_cache_reopened / 수집UTC: 2026-10-18T20:50:06.349978+09:00 / 재열람UTC: 2026-10-18T13:55:57.965373+00:00
  - 확인문장: regular (>4 times/week) relative to none/rare intake
  - 범위: 원초록의해당대상/결과를직접읽음.전체원문/부록열람으로세지않음.

기저확률가정이나OR→RR역산은하지않았습니다. 제30항의원문정밀도차이를실질충돌로과장하지않았고제26항은명시정정문으로해결했습니다. 새DOI j4849추가는검증된개별추가안이지만ROOT의별도DOIannotation과최종본문새SHA의정식KR-FIT가필요합니다. 공개본문·기존승인안·git는변경하지않았습니다.
