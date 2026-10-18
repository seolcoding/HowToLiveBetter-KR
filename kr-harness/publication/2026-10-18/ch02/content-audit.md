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

## 배치3-r2 및 쉽게 r2/r3 승인 입력 검토

fullentry26·33 r2 **approve2**. 쉽게r2 **approve6(11/16/17/21/28/37), revise1(20)**이며후속20 r3는불확실성수정확인후**approve**했습니다. 모든쉽게before는각strict-entry실제문자열과일치하며manifest SHA·source SHA도명령으로검사했습니다. 이전승인과frozen이력은보존했습니다.

- fullentry제26항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-026-c168/publication-entry-proposal-r2.md` / SHA256 `f249d914ac9a2a7f73e358cf6b6f18915026edc4e9b5a263aa5604a840b51410`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-026-c168/publication-entry-changes-r2.json` / SHA256 `1a7793885db6f0aebfb93d8c69183d138da49a7ae9f56c3a3da826d9a95cfa07`
  - 이유: 2018BMJ정정문k194에맞게CI0.79~0.88을확정하고옛0.83~0.88오기를정정사실로고지했습니다. 쉽게의사망건수표현을사망위험으로바꾸고메타제목을명사형주제제목으로고쳤습니다. 원문관찰범위·증량권고아님·첨가물직접비교부재한계를보존합니다.

- fullentry제33항 **approve**
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-033-866b/publication-entry-proposal-r2.md` / SHA256 `0efc29aa9c2efaa27768057c55d0a489e46d6ed891e9834762c99ca831d540e9`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-033-866b/publication-entry-changes-r2.json` / SHA256 `94b4abdcbb514b7d49d8526c925e474c4d32e16904131e19b4c514ec777f8a16`
  - 이유: 고추섭취와사망위험관계라는명사형제목으로메타검토지시를제거했습니다. r1의주4회초과조건·HR/CI·대상과인과한계는그대로보존했습니다.

- 쉽게제11항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/editorial-proposal-r2.json` SHA256 `b75d3652688abfc529af9a3e4f2454ef1e5b812db3e2fe739e9488467741d262`
  - before: 하루 7800보쯤 걷는 사람과 3500보쯤 걷는 사람을 비교했습니다. 같은 기간 죽을 확률은 많이 걷는 쪽이 45% 가깝게 낮습니다. 운동 시간으로 비교해도 사망 위험이 낮습니다. 일주일에 150~300분 빠르게 걷는 사람도 비교했습니다. 죽을 확률은 안 걷는 사람보다 30%쯤 낮습니다. 다만 일정량을 넘기면 위험이 더 낮아지지 않습니다. 예순이 넘었으면 6000~8000보로 충분합니다. 걸음 수나 운동 시간 중 하나만 채우세요.
  - after: 일주일에 150~300분 빠르게 걸으세요. 이만큼 움직인 사람은 활동 없는 사람보다 사망 위험이 약 30% 낮았습니다. 걷기 때문이라고 단정할 수는 없습니다. 걸음 수와 시간은 정확히 맞아떨어지지 않습니다.
  - 판단: 주150~300분빠르게걷기에대략해당하는7.5~15MET·h/주활동의무활동대비HR.69를약30%로요약했습니다. 인과단정과걸음수/시간정확등가를피했습니다. 기존논문의여러활동량을빠른걷기로대략환산한요약범위이며한국첨부지침본문현행성까지검증한것은아닙니다.

- 쉽게제16항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/editorial-proposal-r2.json` SHA256 `57e7a3886428eb093df595131fb40d8e28514e67f5b67b4d85523787d0cc19a4`
  - before: 주 30~60분 근력 운동을 하는 사람을 비교했습니다. 같은 기간 사망 확률은 안 하는 쪽보다 10~20% 낮습니다. 그 이상 운동해도 추가 이득은 늘지 않습니다. 근력 운동과 유산소 운동을 함께 하면 가장 좋습니다.
  - after: 주 30~60분 근력 운동을 하는 사람의 사망 위험이 낮았습니다. 안 하는 사람보다 약 10~20% 낮았습니다. 운동 덕분인지는 확실하지 않습니다. 더 많이 했을 때의 이득은 확실하지 않습니다.
  - 판단: 원문주30~60분최대약10~20%관찰연관을보존하고고용량효과가불명확하다는실제결론으로한정해상한확정오독을줄였습니다. 쉽게만승인하며이득의‘그이상추가이득없음’문장은별도수정필요입니다.

- 쉽게제17항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-017-5e24/editorial-proposal-r2.json` SHA256 `0e0f6cf24be70cf36dcd5c3cc204f6760a145ea0b3e1fad1d769593072725008`
  - before: 가장 오래 앉는 사람과 가장 적게 앉는 사람을 비교했습니다. 가장 오래 앉는 쪽은 죽을 확률이 2.6배입니다. 한 번에 오래 앉아 있어도 위험이 더 커집니다. 하루 60~75분 중간 강도로 움직이면 이 위험은 거의 상쇄됩니다.
  - after: 가장 오래 앉는 쪽의 사망 위험은 가장 적게 앉는 쪽의 2.6배였습니다. 몸이 나빠 오래 앉는 경우도 섞여 있습니다. 하루 60~75분 중간 강도로 움직인 쪽은 좌식 위험 차이가 뚜렷하지 않았습니다.
  - 판단: Diaz사분위HR2.63과Ekelund가장활동적집단HR1.04(.99~1.10)의서로다른비교를대조했습니다. 역인과가능성을남기고개인별위험상쇄보장을통계적차이미검출로한정했습니다. 시간은중강도활동조건이며TV시청까지동일하게상쇄한다는뜻아닙니다.

- 쉽게제20항 **revise**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-020-e74f/editorial-proposal-r2.json` SHA256 `8c89ac3af2d4e913c01eb00e25d6a50ca521a9c73d355f5abe1e5c875e0e85c5`
  - before: 매일 많이 마시다가 갑자기 끊으면 금단 증상이 나타납니다. 가벼운 증상으로는 손 떨림과 땀이 있습니다. 가슴이 두근거리거나 잠이 안 오기도 합니다. 심하면 경련이나 진전섬망이 나타납니다. 진전섬망은 생명을 위협하는 급성 질환입니다. 노르웨이에서 3만여 명을 추적했습니다. 진전섬망을 앓았던 집단에서는 이후 해마다 8%가 사망했습니다. 술을 끊고 싶으면 먼저 병원에 가세요. 하루에 얼마나 마시는지 말하세요.
  - after: 매일 많이 마시다 갑자기 끊거나 크게 줄이면 손 떨림 등이 생깁니다. 끊으려면 병원 도움을 받으세요. 온몸이 떨리거나 심하게 혼란스러우면 생명이 위험할 수 있습니다. 바로 응급진료를 받으세요.
  - 판단: 매일과음자가갑자기끊거나크게줄이면모두금단증상이필연적으로생긴다고읽히는‘생깁니다’를‘생길수있습니다’로고쳐야합니다. 급작스런중단/큰감량·병원도움·심한떨림/혼란시즉시응급진료는EJIM원초록과NHS공식본문에부합합니다. 이작은불확실성수정전r2는revise.

- 쉽게제21항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-021-e337/editorial-proposal-r2.json` SHA256 `f6c5483df159b7f9d9a89ec31e04b3acbef40b579aedcca466d85d440262b749`
  - before: 의사가 몇 분간 음주량을 살핍니다. 음주 위험을 설명하고 목표도 함께 잡습니다. 이렇게 하면 1년 뒤 일주일에 순알코올을 평균 20g 덜 마십니다. 맥주 반 리터쯤에 해당합니다. 상담을 더 길게 해도 이득이 늘지는 않습니다. 이미 술을 멈추지 못하는 단계라면 약물 치료도 있습니다. 12명을 치료하면 한 명이 추가로 폭음을 피합니다.
  - after: 의사와 술을 줄일 목표를 잡으세요. 짧게 상담받은 쪽은 거의 상담받지 않거나 안 받은 쪽보다 덜 마셨습니다. 1년 뒤 주당 알코올이 평균 20g 적었습니다. 근거는 중간 수준이며 상담을 늘려도 더 낫지는 않았습니다.
  - 판단: 최소중재/무처치비교를일상말로명시하고1년주당평균20g및중간확실성을보존했습니다. 긴상담의관찰된추가효과미검출을요약한것이며모든장기상담이무효라고입증한뜻아닙니다. 약물검토전체122RCT+1코호트분모정정은쉽게승인으로해결되지않습니다.

- 쉽게제28항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/editorial-proposal-r2.json` SHA256 `e9488a235f4d04a14d012820da1ae00a0ce5086f91e2d381d2b699f779e82386`
  - before: 초가공식품을 가장 많이 먹는 사람과 가장 적게 먹는 사람을 비교했습니다. 같은 기간 죽을 확률은 많이 먹는 쪽이 20%쯤 높습니다. 심혈관 사망은 50%쯤 높습니다. 다만 이 근거는 불확실성이 크다고 평가했습니다. 수치는 그 한계를 감안해 보세요.
  - after: 초가공식품을 가장 많이 먹는 쪽과 가장 적게 먹는 쪽을 비교했습니다. 같은 기간 사망 위험은 많이 먹는 쪽이 20%쯤 높았습니다. 이 자료만으로 원인이라 단정할 수 없습니다. 근거가 불확실해 수치 해석에 주의하세요.
  - 판단: 가장높은섭취대가장낮은섭취의총사망RR1.21을약20%로요약하고원인단정금지·낮은확실성을유지했습니다. 쉽게만승인하며본문의‘반대결론연구지금까지없음’포괄부재단정은여전히미검증입니다.

- 쉽게제37항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/editorial-proposal-r2.json` SHA256 `c68317dcecc27e723e6ad120fba719b8832c4778ae83e45db2b667f4ddff3a4a`
  - before: 낮잠이 한 시간 이내면 사망과 만성질환 위험이 오르지 않았습니다. 머리도 더 맑았습니다. 한 시간을 넘기면 관상동맥질환 위험은 30%쯤 높았습니다. 당뇨병과 비만 위험은 20%쯤 높았습니다. 알람을 맞추고 30분 뒤에 일어나세요. 매일 1~2시간은 자야 버틸 수 있다면 몸을 점검하세요.
  - after: 알람을 맞추고 30분 뒤에 일어나세요. 1시간 넘게 낮잠을 잔 사람은 관상동맥질환 위험이 약 30% 높았습니다. 매일 1~2시간은 자야 버틸 수 있다면 몸을 점검하세요.
  - 판단: 원문초록의>60분낮잠과관상동맥질환약30%연관을과거형으로요약하고30분알람/오래자야버티면점검조건을보존했습니다. 이30분은저자실천권고이지사망예방임계값입증이아닙니다. 비고의모든연구관찰자료일괄설명과당뇨OR/노출조건은별도해결필요입니다.

- 쉽게제20항 **approve**, `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-020-e74f/editorial-proposal-r3.json` SHA256 `2e9daf0df5d2719deaa1e17b958cda00373f288bca40a708d6f3e8cc1c40d9d6`
  - before: 매일 많이 마시다가 갑자기 끊으면 금단 증상이 나타납니다. 가벼운 증상으로는 손 떨림과 땀이 있습니다. 가슴이 두근거리거나 잠이 안 오기도 합니다. 심하면 경련이나 진전섬망이 나타납니다. 진전섬망은 생명을 위협하는 급성 질환입니다. 노르웨이에서 3만여 명을 추적했습니다. 진전섬망을 앓았던 집단에서는 이후 해마다 8%가 사망했습니다. 술을 끊고 싶으면 먼저 병원에 가세요. 하루에 얼마나 마시는지 말하세요.
  - after: 매일 많이 마시다 갑자기 끊거나 크게 줄이면 손 떨림 등이 생길 수 있습니다. 끊으려면 병원 도움을 받으세요. 온몸이 떨리거나 심하게 혼란스러우면 생명이 위험할 수 있습니다. 바로 응급진료를 받으세요.
  - 판단: r2의금단필연성을생길수있음으로제한해수정요청을해결했습니다.갑작스런중단/큰감량·병원도움·심한떨림/혼란의즉시응급진료조건은실제원초록/NHS공식문장으로확인했습니다.

### canonical잔여지적은필드승인과별개

제16항이득의고용량확정상한은실제저자결론unclear보다강한단정입니다. 제21항22,803명은122RCT와1코호트를포함한검토전체분모입니다. 제28항전세계반대연구부재는미검증포괄주장으로서확정거짓을입증한뜻아니며문장삭제/검토범위제한이가능합니다. 제37항인지효과의근거에는18RCT메타분석이포함되어두연구모두관찰자료라는일괄설명은틀렸습니다. 추가로당뇨OR1.20과습관적낮잠노출을>60분위험20%로곧바로바꾸는지표/노출범위문제도남아있습니다. 정확before·근거·정정범위는JSON canonical_remaining_findings_after_editorial_r2에고정하고humanize_a와ROOT에전달했습니다.

### 실제근거재열람및신규HTTP

- **arem-walking** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjamainternmed.2015.0533%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a3967d4d88be84683f13.json` / SHA256 `549f6f8bbe29be27c99c840e6ca2bac9ddff082ea42d3ffaa8f33baae4ae4c71`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:49:57.879658+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: a 31% lower risk at 1 to 2 times the recommended minimum (HR, 0.69

- **momma-higher-dose** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9209691/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC9209691.body` / SHA256 `ffe5462b860ed16387503b573c56b65debce95491864b1900fdc387496625c8a`
  - 범위: 기존직접수집XML관련본문재열람.정확초기HTTP시각미기록,새HTTP아님.
  - 수집시각 정확초기시각미기록 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: the influence of a higher volume of muscle-strengthening activities on all-cause mortality, CVD and total cancer is unclear

- **diaz-sedentary** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.7326%2FM17-0212%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e068967c4a851dd421bf.json` / SHA256 `89e1cc99b7756659a5add3743d000870d75bfcae2649a53b129232b26ba5e652`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:50:00.919988+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: 2.63

- **ekelund-sedentary** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS0140-6736%2816%2930370-1%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e522d333f433d51fb64d.json` / SHA256 `ac3f7e3ebfa1388411fb6491d9e1a39cd263df03d329c88de532384b43a04606`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:50:00.959615+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: HR=1·04; 95% CI 0·99-1·10

- **aws-review** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.ejim.2026.107103%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b9c928ac241d047dc531.json` / SHA256 `1c302683b74114ab30e4f2a8e61e276beb38d585afb3eb8ccd1a22d6b7e07928`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:50:02.248109+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: after abrupt cessation or substantial reduction of sustained heavy alcohol use

- **kaner-brief** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD004148.pub4%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5f4aff456ae7268e9379.json` / SHA256 `1a2faa368551ebedb724a94c23fd6c28f47eecd9893ad297454cd7fc98dee9a7`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:50:02.633185+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: mean difference (MD) -20 g/week

- **jonas-denominator** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2014.3628%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/52ab8a5eff9189bb5042.json` / SHA256 `cde67e843082b2ecd9a615cc80496394b912133b639b1f2ab3b28f882a58b5a5`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:50:02.869359+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: We included 122 RCTs and 1 cohort study (total 22,803 participants).

- **lane-upf** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10899807/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC10899807.body` / SHA256 `45154cac70401515cd7f07cff88d9fdcd460a92d6ebc23fed3d28aa4d56da184`
  - 범위: 기존직접수집XML관련본문재열람.정확초기HTTP시각미기록,새HTTP아님.
  - 수집시각 정확초기시각미기록 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: all cause mortality (risk ratio 1.21, 1.15 to 1.27; low)

- **du-nap30** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML관련본문재열람.정확초기HTTP시각미기록,새HTTP아님.
  - 수집시각 정확초기시각미기록 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: Napping for >60

- **du-rct** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML관련본문재열람.정확초기HTTP시각미기록,새HTTP아님.
  - 수집시각 정확초기시각미기록 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: One meta-analysis of 18 randomized controlled trials (RCTs)

- **du-diabetes-or** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML관련본문재열람.정확초기HTTP시각미기록,새HTTP아님.
  - 수집시각 정확초기시각미기록 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: diabetes (OR = 1.20, 95% CI: 1.14–1.27

- **aws-nhs** <https://www.nhs.uk/conditions/alcohol-misuse/treatment/>
  - raw: `/tmp/ch02-audit/aws-nhs.body` / SHA256 `1112c4852fe2f18c23fcf26b2639e1bc7d64b31117db9329751c8c9c257104a1`
  - 범위: 새HTTPS직접수집·NHS공식본문의금단/떨림/혼란/발작및즉시응급진료문장열람.영국전화번호를한국독자본문으로옮기지않음.
  - 수집시각 2026-10-18T14:08:22.290618+00:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: Immediate action required: Call 999 or go to A&E if: You or someone else has severe withdrawal symptoms after stopping drinking alcohol, such as: shaking visibly … confusion … having a seizure.

- **aws-overview** <https://www.nhs.uk/conditions/alcohol-misuse/>
  - raw: `/tmp/ch02-audit/aws-overview.body` / SHA256 `1112c4852fe2f18c23fcf26b2639e1bc7d64b31117db9329751c8c9c257104a1`
  - 범위: 새HTTPS직접수집·NHS공식본문의금단/떨림/혼란/발작및즉시응급진료문장열람.영국전화번호를한국독자본문으로옮기지않음.
  - 수집시각 2026-10-18T14:08:22.744583+00:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: Immediate action required: Call 999 or go to A&E if: You or someone else has severe withdrawal symptoms after stopping drinking alcohol, such as: shaking visibly … confusion … having a seizure.

- **coffee-correction-reopened** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5765813/fullTextXML>
  - raw: `/tmp/ch02-audit/coffee-correction.body` / SHA256 `b1549670ff3c732920727c8a2a3f245f76c21e47281d543498826d8c3fccc729`
  - 범위: 이전직접수집정정공지XML재열람.원바이트는기존JSONbatch3에영구내장.
  - 수집시각 정확초기시각미기록 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: the relative risk should read 0.83 (95% confidence interval 0.79 to 0.88)

- **chili-reopened** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jacc.2019.09.068%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/edda638827db3ce65f50.json` / SHA256 `a3a27d4290375b707c0c283f3057339a0f305f15cb1ca3dadc6289ca11483a35`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님.
  - 수집시각 2026-10-18T20:50:06.349978+09:00 / 재열람UTC 2026-10-18T14:11:53.156694+00:00
  - 원문발췌: regular (>4 times/week)

NHS응급진료문장은신규HTTPS본문에서확인했고원RAW UTF8은JSON해당source에내장했습니다. 영국응급전화번호를한국독자권고에옮기지않습니다. 도입부나제40항현행국내규격미확인을해결했다고승인하지않았으며별도frozen제안검토가필요합니다. 모든승인은개별필드/정확SHA범위이며전체절최종승인·정식KR-FIT가아닙니다.

## 사실 수정안 배치4와제40항별도연산검토

**fullentryapprove6(34/36/38/40/41/42), revise1(39).** 별도40쉽게style와intro한줄교체는각exactSHA로approve했습니다. 검토UTC 2026-10-18T14:16:48.392742+00:00.현재국내식용유규격확인이해결됐다는판정이아니며국내전면기피권고를검증된범위로제한한수정안을승인합니다.

### 배치4-34: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-034-cb01/publication-entry-proposal.md` / SHA256 `39ecad1caee8a72af982c7e297156cc3f305b16ecea24da39e27260ee2488598`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-034-cb01/publication-entry-changes.json` / SHA256 `921537f091696dd05bbff66423d8a022381d513b3aa68520ea4c3d009f8c8558`
- 이유: 우유·요거트·치즈를합친totaldairy의>2servings/day대전혀안먹음이라는실제원초록의분모/노출을복원하고두잔·1~2잔권고로환원하지않았습니다.136,384명·21개국6,796사망·HR.83(.72~.96)는일치하며9.1년을미검증평균/중앙값으로지정하지않았습니다.노출정의와HR/누적확률차이를독자본문에고지합니다.

### 배치4-36: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-036-3a64/publication-entry-proposal.md` / SHA256 `0634fb43ab776e6e3fcf981d1b0bd36171838fe41b96941f2a6449111cae01a0`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-036-3a64/publication-entry-changes.json` / SHA256 `e50858dedf3d6d9edcabd9d00e51d172ae7caa934ae8dc46411b6f816a621073`
- 이유: 1차논문PDF의40~59세30,076명·CVD/암병력없음·1990~2009·거의매일대0~2회및HR.72/.65/.74/.54를대조했습니다.두번미만오류를고치고30분안전입욕처방을삭제했으며발생과사망을구분하고샤워대비인과효과/고령·심혈관주의한계를보존했습니다.

### 배치4-38: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-038-17c4/publication-entry-proposal.md` / SHA256 `cf0b2721e241acfb095dd6f9eb4d673910da33b416cd667a622c3bc917778e26`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-038-17c4/publication-entry-changes.json` / SHA256 `3e233701a0deba602f5a80dade90eee276a3c0aa9c35a3f892da91b3febe93ec`
- 이유: 수면부족밤≥2.5시간·연속부족기간누적평균2.5~3.5/심한경우>3.5·기간직후첫보충밤및초과수면평균>0정의는원문방법에맞습니다.85,618명·중앙8년·HR1.15/1.42와보충군CI미검출을대조했습니다.완전밤샘만의연구가아님을본문에명시하고위험소멸보장을피했습니다.

### 배치4-39: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-039-006e/publication-entry-proposal.md` / SHA256 `a5471cc96826e2b62df9c27ec85986a3f2651c544ec59ac2358db66025aeba8b`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-039-006e/publication-entry-changes.json` / SHA256 `4460e2f04a05bff27f733d3ee706cbb2d9b43c1453b37310c142ce4c3f0450d9`
- 이유: 원문RR1.13/1.27·5년당1.07와1.05대4%불일치를독자본문에고지했고8명빛+암막복합실험으로각요소필수/유일성을단정하던오류도고쳤습니다.다만RR정의를‘상대적위험차이’라고쓴문장은차이(RD)와비율(RR)혼동을낳으므로‘두집단의위험을나눈비율’로고쳐야합니다.현재exactSHA는revise,나머지수정범위는적합합니다.

### 배치4-40: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-entry-proposal.md` / SHA256 `363f3b18d23cc346e2e72c23112c28fa1952ec5ab0a2da428604b93d31eee964`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-entry-changes.json` / SHA256 `81d4c801e5bb6b1d9ca4f3fadbdc5268a3e740e7b2b763faaee0ccd619d3727b`
- 이유: 중국광저우PR.650과광시직접효과모형aOR1.9/1.8을원문에대조하고확률90/80%로치환하지않게정정했습니다.국내방앗간전면기피권고를포장/제조정보확인으로제한하며현재국내규격미확인·포장이검사합격보장아님을독자에게밝혔습니다.국내규격확인에성공한승인이아니라미검증일괄금지를제거한범위승인입니다.해결되지않은tail기준TODO는유지합니다.

### 배치4-41: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-041-488c/publication-entry-proposal.md` / SHA256 `b5b54663ba886d168af9c8269a137d4b8279eb6cadab79285b5ce99ba1e242d0`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-041-488c/publication-entry-changes.json` / SHA256 `2a4bace660d9199ba93a4032ac460d2919b01e7a57df423e8bf82eec79223f14`
- 이유: 포화지방전체15시험56,675명/심혈관사건12시험53,758명,omega6 19시험6,461명,omega3전체86시험162,796명과ALA총사망5시험19,327명/CHD4시험19,061명을각원초록에대조했습니다.전체분모를ALA분모로쓰던오류와모든심장보호효과없음단정을고쳤고ALA부정맥RR.73및CVD가능성을불확실성등급과함께보존했습니다.국내조리유일일량미확인은그대로이며섭취량을검증한승인아닙니다.

### 배치4-42: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-042-69a7/publication-entry-proposal.md` / SHA256 `db7c25aa3bb2a73c4f123dda28640f7505fba8bd0bcfa857d0e4decccafc535d`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-042-69a7/publication-entry-changes.json` / SHA256 `fd857bb0522f0e49ad60d87b4336077d867f754bde7e281f27351962e07a60f1`
- 이유: Xue연기10연구와후드4연구를별도분석으로구분하고13/14전체개수불일치를본문에고지했습니다.Chen누적요리지표>10·1일끼니수×연수·방법의.33/.67경계와표4표기차이를직접대조했고실제경력10년오기를삭제했습니다.표4의107+226+510=843환자와41+144+374=559대조분모도대조했습니다.OR.49/1.74/2.11을발생확률로바꾸지않고상하이HR비교군을분리했습니다.새BioC원문으로상하이숫자/연료·환기조건을확인했습니다.

### 제40항별도style: approve

- 파일: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-style-corrections.json` / SHA256 `626cf5577fa1a637054e934c7039b37d0fc36bf7e57e44701dde6b4f73fc6a4f`
- before: 중국 광저우에서 자가압착 땅콩기름 작업장 관리 뒤 간 기능 이상이 약 35% 낮게 나타났습니다. 간암·사망을 조사한 결과는 아닙니다. 한국에 그대로 적용하기는 어렵습니다.
- after: 중국 광저우에서 자가압착 땅콩기름 작업장을 관리했습니다. 관리 뒤 간 기능 이상이 약 35% 낮게 나타났습니다. 간암·사망을 조사한 결과는 아닙니다. 한국에 그대로 적용하기는 어렵습니다.
- 원intro SHA256: `None` / 교체뒤예상intro SHA256: `None`
- 판단: 기승인쉽게첫문장을두문장으로나눠한문장50자기준에맞춘동일사실분리입니다.중국/간기능35%연관·사망미조사·한국적용한계를모두보존합니다.두연구의인과효과입증으로변경하지않습니다.

### 제40항별도intro: approve

- 파일: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-intro-correction.json` / SHA256 `217a28b6eb5a2df1b2ce9abee711c72e01b0b1cc6cbbc71f1e2b47c08d428259`
- before: **주방의 기름과 연기**: 연탄·장작 태우지 않기(제29항), 소규모 자가압착 땅콩기름 사지 않기(제40항), 돼지기름 대신 식물성 기름(제41항), 요리할 때 레인지후드 켜기(제42항).
- after: **주방의 기름과 연기**: 연탄·장작 태우지 않기(제29항), 식용유의 밀폐 포장과 제조 정보 확인(제40항), 돼지기름 대신 식물성 기름(제41항), 요리할 때 레인지후드 켜기(제42항).
- 원intro SHA256: `b63dc987b6f5ba59df31cae92501c3f1ceb9348c508719d12570908cb4094f6a` / 교체뒤예상intro SHA256: `c441f77b230c951c3a0754c2576193b40140c6c50fb62bf774b0ce2052bf3279`
- 판단: 제40항기존국내일괄기피문구와새검증범위제한이충돌하므로같은제40항요약만포장/제조정보확인으로바꾸는한줄교체입니다.다른항목요약·제40항번호·다른intro바이트를보존함을명령으로확인했습니다.국내규격/오염검사합격을확인한뜻아닙니다.

### 실제읽은근거

이번배치에서는신규HTTP라고주장하지않고기존자체원문응답·작성자가보존한PDF/BioC/법령조문·제공된원초록의해당주장을직접재열람했습니다. 작성자검색의정정연결미확인은제한검색이며정정문절대부재증거아닙니다. Xue/Chen내부불일치는독자본문에고지했고OR근거는본문계산기준으로대조했습니다.

- **pure-dairy** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS0140-6736%2818%2931812-9%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d3719f3370e6ea4aeb80.json` / SHA256 `9483b43657373b922c4751cdbde4c30acc93336b9859388095d828e1f79828aa`
  - 범위: 제공된원초록RAW재열람.이번독립검토자의신규HTTP/전체원문아님.
  - 원수집시각 2026-10-18T20:50:06.473360+09:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: Higher intake of total dairy (>2 servings per day compared with no intake)

- **bathing-pdf** <https://heart.bmj.com/content/heartjnl/106/10/732.full.pdf>
  - raw: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-036-3a64/source-evidence/bathing036.pdf` / SHA256 `064cb6720f94fd2a87d52809391ae0da31f7d98e4bef19821ea9fcc906c8c284`
  - 범위: 작성자가보존한실제1차PDF와추출본문을재열람해대상/비교/발생결과대조.검토자신규HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 30 076 participants aged 40–59 years … followed up from1990to2009; almost daily versus0–2/week HR0.72(0.62–0.84); intracerebralhaemorrhage0.54(0.40–0.73)

- **sleep-rebound** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13121452/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC13121452.body` / SHA256 `93f3132994eb309f16a8692d710905ed763f6d813db42a5627f080f7c13b4266`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: Restriction nights were defined as nights with sleep duration at least 2.5

- **shift-cvd** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12506678/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12506678.body` / SHA256 `1f235c900688aa383ab846c1c6f8a91f4f1f2e410e009d6a88362c2c5621775e`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: a 4% increased risk of CVD mortality

- **shift-breast** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12794909/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12794909.body` / SHA256 `3047297cd609fbdf53d208c81f186e68a0f334c2838d3fe6834ebb3c59cd61f0`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 1.25 (95% CI 1.01–1.55

- **shift-cancer** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13344439/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC13344439.body` / SHA256 `99508cac0aa1a5a317477de4dc313ccf685bf1ab88f2835057c45884b4d9ad26`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: HR 1.59, 95% CI 1.09–2.31

- **shift-light** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJM199005033221801%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/cf5aca00940d2def4af9.json` / SHA256 `991aef2c8b702207971b123061c5ea9ffddd677a2c6f9d202b0dd6e9067d568a`
  - 범위: 제공된원초록RAW재열람.이번독립검토자의신규HTTP/전체원문아님.
  - 원수집시각 2026-10-18T20:50:10.297125+09:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: eight normal young men

- **shift-correction-check** <https://www.ebi.ac.uk/europepmc/webservices/rest/search>
  - raw: `/tmp/ch39-correction-search.json` / SHA256 `1270c3045da337c6618273e11e0b91f5682abd6fbbe5dc1c041d228a7e54c86f`
  - 범위: 작성자의실제조회RAW를재열람했지만제한검색결과로서정정문부재증명아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 읽은제한적검색응답에연결된정정문은확인되지않음.쿼리전체는원작성자changes sources correction-search.url에기록.

- **guangzhou-afb** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11695283/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC11695283.body` / SHA256 `0b5ddee335848553d1a4decbd07e03b021db27fbe85662c6106f0ddff4e0185f`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: PR = 0.650, 95% CI: 0.469–0.902

- **guangxi-birth** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11025407/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC11025407.body` / SHA256 `992536cea2251c57346c2f52360585bcfe24491b02e305cee4f9f878e6ac733a`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: aORs of 1.9 (95% CI 1.1–3.2) and 1.8 (95% CI 1.1–3.0)

- **decree-article** <https://www.law.go.kr/LSW/lsSideInfoP.do?lsiSeq=288767&joNo=0021&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR>
  - raw: `/tmp/ch02e40-sources/decree-article.raw` / SHA256 `9f4dcce6cb8e433245c8f52da33774436a5a158ed51c37ed48543d2c9509afdc`
  - 범위: 작성자보존실제law.go.kr조문HTML재열람.별표15품목목록/최신부칙전체와식용유아플라톡신공전규격은미확인.
  - 원수집시각 2026-10-18T14:03:23.788980+00:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: : 식품을 제조ㆍ가공하는 영업 2. 즉석판매제조ㆍ가공업: 총리령 으로 정하는 식품을 제조ㆍ가공업소에서 직접 최종소비자에게 판매하는 영업 3. 식품첨가물제조업 가. 감미료ㆍ착색료ㆍ표백제 등의 화학적 합성품을 제조ㆍ가공하는 영업 나. 천연 물질로부터 유용한 성분을 추출하는 등의 방법으로 얻은 물질을 제조ㆍ가공하는 영업 다. 식품첨가물의 혼합제재를 제조ㆍ가공하는 영업 라. 기구 및 용기ㆍ포장을 살균ㆍ소독할 목적으로 사용되어 간접적으로 식품에 이행(移行)될 수 있는 물

- **rule-article** <https://www.law.go.kr/LSW/lsSideInfoP.do?lsiSeq=289161&joNo=0037&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR>
  - raw: `/tmp/ch02e40-sources/rule-article.raw` / SHA256 `ba7622598b0608ce0c1efc3641e82f3a33a8f260cabdb4902ad7641f7e9d5839`
  - 범위: 작성자보존실제law.go.kr조문HTML재열람.별표15품목목록/최신부칙전체와식용유아플라톡신공전규격은미확인.
  - 원수집시각 2026-10-18T14:03:23.789837+00:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 719-2854, 2865 제37조(즉석판매제조ㆍ가공업의 대상) 영 제21조 제2호 에서 “총리령으로 정하는 식품”이란 별표 15 와 같다. <개정 2010. 3. 19., 2013. 3. 23.> 위로 아래로 검색조문선택 화면내검색 입력 폼 검색어 입력 모드 전체저장 목록저장 닫기 파일형식 XLS(엑셀) TXT(텍스트) 저장 닫기 모드 전체저장 목록저장 닫기 파일형식 XLS(엑셀) TXT(텍스트) 한글(본문) 저장 닫기 내용저장 닫기 파일형식 한글(HWP) P

- **satfat2020** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD011737.pub3%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/fed4ecd055021a77a46b.json` / SHA256 `4665f498502896d9c8084583aa9efb0a269062caf4172c4abe0f7929f979f920`
  - 범위: 제공된원초록RAW재열람.이번독립검토자의신규HTTP/전체원문아님.
  - 원수집시각 2026-10-18T20:50:10.664925+09:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 12 trials, 53,758 participants

- **omega6-2018** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD011094.pub4%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/73fe7c4149bcd3f2f4d2.json` / SHA256 `7973b982a12eab20b6ea0dbd3d44028aad360f6813863877c040961e38a88644`
  - 범위: 제공된원초록RAW재열람.이번독립검토자의신규HTTP/전체원문아님.
  - 원수집시각 2026-10-18T20:50:10.745904+09:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 19 RCTs in 6461 participants

- **ala2020** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD003177.pub5%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/2a6d4461b4b4fe0070fb.json` / SHA256 `0600539dd10dd358c91611976c86ffec6be279bfa23c37bcccf7c1fd9d9493b9`
  - 범위: 제공된원초록RAW재열람.이번독립검토자의신규HTTP/전체원문아님.
  - 원수집시각 2026-10-18T20:50:10.874912+09:00 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 19,327 participants; 459 deaths in 5 RCTs

- **xue-fumes** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4881732/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC4881732.body` / SHA256 `24db7cdcadae14155d2e469002f6e1b85093e6f85d5dc8aaff287220584be476`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: The main characteristics of 14 case–control studies

- **chen-hood** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7174336/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC7174336.body` / SHA256 `6e7c194d15335eb57bde985296f1e50f249c85302c16025f7efd9655ff0077c9`
  - 범위: 초기자체수집XML의해당방법·결과·한계/표재열람.정확초기HTTP시각미기록.새HTTP아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: Only participants who were exposed to COFs (cooking time-years >10)

- **shanghai-bioc** <https://www.ncbi.nlm.nih.gov/research/bionlp/RESTful/pmcoa.cgi/BioC_xml/PMC4232458/unicode>
  - raw: `/tmp/ch02e42-shanghai-bioc.xml` / SHA256 `639bf4e9f9d0ccb47868eacd55e8ccb9269e6b82858515ef6eb4e9f13177369d`
  - 범위: 작성자가신규HTTPS로보존한실제BioC원문/표를이번에재열람.검토자신규HTTP아님.PMC본문/EuropePMC실패를논문무효로세지않음.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: Ever poor kitchen ventilation HR1.49(1.15–1.95); evercoal1.03(.84–1.26);≥20yearscoalwithpoorventilationHR2.03(1.35–3.05).

- **fumes-correction-check** <https://www.ebi.ac.uk/europepmc/webservices/rest/search>
  - raw: `/tmp/ch02e42-current-core.json` / SHA256 `02ba43357f68c71c8152402e9cdabb76bb202061737697e0177b7739f46060aa`
  - 범위: 작성자보존실제core응답재열람.정정문이전혀없다는증명아님.
  - 원수집시각 정확시각미기록또는작성자기록에별도보존 / 이번열람UTC 2026-10-18T14:16:48.392742+00:00
  - 확인문장: 세DOI현재core응답의correction/comment관계검토범위내정정연결을확인하지못함.

국내즉석판매업종의조문정의는작성자보존실제제21조제2호/규칙37조를읽었지만별표15품목·최신부칙전부나아플라톡신공전규격은검증하지못했습니다. 원문실패를규격부재로판정하지않습니다.40tail TODO는유지합니다. 제40항외intro의차/커피/고추/유제품수량요약도새fullentry의검증범위와대조해별도제안검토가필요하다고ROOT에알렸습니다.원intro또는strict후보를수정하지않았습니다.

## intro전체11span·39항r2·배치5검토

검토UTC 2026-10-18T14:28:11.308490+00:00. **intro11span전부approve**, **제39항r2approve**, **배치5approve2(2/21),revise3(16/28/37)**.기존모든승인/반려variant이력은보존했습니다.

### intro11span정확승인

- 파일: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/publication-intro-proposal.json`
- 파일SHA256: `4c501ece7436bb42c0698982c0a0e8a0ed9b9066a7e26652cd139972ebbc262e`
- 원intro SHA256: `b63dc987b6f5ba59df31cae92501c3f1ceb9348c508719d12570908cb4094f6a`
- 원intro에11span만적용한예상SHA256: `4f3905381cda78671ab273cb0e834a384f05d668fe52237f50d3c0f237c3e4a1`

- intro-01 **approve**
  - before: 나머지 숫자는 기록만 따라간 연구에서 나왔습니다. 무리를 나누지 않고 추적만 했습니다.
  - after: 관찰 연구의 숫자도 함께 실었습니다. 이런 연구는 생활에 개입하지 않고 기록을 비교합니다.
  - 이유: 무작위시험이외수치를모두추적연구라하던전면일반화를제거하고관찰설계설명으로한정합니다.실제본문은사례대조·추적·개입등여러설계이므로새문장이맞습니다.

- intro-02 **approve**
  - before: 일주일에 세 차례 이상 차(제25항)
  - after: 차 마시기(제25항)
  - 이유: 미검증차섭취빈도를처방처럼반복하지않고차주제만안내합니다.

- intro-03 **approve**
  - before: 하루 3~4잔 커피(제26항)
  - after: 커피와 사망 위험(제26항)
  - 이유: 커피3~4잔관찰노출을증량처방으로바꾸지않고사망위험주제로안내합니다.

- intro-04 **approve**
  - before: 일주일에 네 번 이상 고추(제33항)
  - after: 고추와 사망 위험(제33항)
  - 이유: 원문>4회관찰군을≥4회섭취처방으로오인할문구를제거하고고추주제를보존합니다.

- intro-05 **approve**
  - before: 하루 1~2잔 우유·요거트(제34항)
  - after: 유제품과 사망 위험(제34항)
  - 이유: 우유·요거트·치즈totaldairy의serving관찰을우유/요거트잔수처방으로바꾸지않습니다.

- intro-06 **approve**
  - before: 하루 7000~8000보 걷기(제11항)
  - after: 걷기(제11항)
  - 이유: 걸음수와활동시간정확등가/연령구간최적처방을주장하지않는탐색용걷기주제입니다.

- intro-07 **approve**
  - before: 일주일에 근력 운동(제16항)
  - after: 근력 운동(제16항)
  - 이유: 관찰운동량과주당운동빈도지침을혼합하지않는근력운동주제안내입니다.

- intro-08 **approve**
  - before: 밤 7시간 자기(제13항)
  - after: 수면 시간과 규칙성(제13항)
  - 이유: 수면시간과규칙성을함께다루는본문의범위를보존하고7시간을모든개인의필수량으로제시하지않습니다.

- intro-09 **approve**
  - before: 낮잠은 30분 안으로(제37항)
  - after: 낮잠(제37항)
  - 이유: 인지/운동시험과질병/사망관찰연관을하나의30분임계량으로묶지않고낮잠주제로안내합니다.

- intro-10 **approve**
  - before: 밤샌 다음 날 밤 바로 보충하기(제38항)
  - after: 부족한 잠 보충하기(제38항)
  - 이유: 실제연구가완전밤샘만의연구가아닌점을반영해부족한잠보충으로안내합니다.다음밤/주말조건은항목본문에그대로남습니다.

- intro-11 **approve**
  - before: 소규모 자가압착 땅콩기름 사지 않기(제40항)
  - after: 식용유의 밀폐 포장과 제조 정보 확인(제40항)
  - 이유: 기승인40한줄과동일결과를하나의span으로포함하여국내방앗간전체금지와본문범위제한의충돌을없앱니다.규격/검사합격보장은하지않습니다.

11개span이원intro에서각한번이며서로겹치지않음을검사했습니다.상태배너·원문링크·주제그룹과순서·모든제N항번호순서·HTML주석을보존했고참조된승인fullentry파일SHA도맞습니다.기존40단독introafter와동일한결과가정확히한번나옵니다.구40한줄연산은승인이력으로남기되새11span과함께중복적용하지않습니다.예상4f3905는원intro에대한값이며helper가추가한승인DOI주석까지포함한최종전체해시로오인하면안됩니다.ROOT는별도후보에서각exactspan/그밖의바이트보존검사후새해시를기록해야합니다.아직통합/정식KR-FIT승인아닙니다.

### 제39항r2approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-039-006e/publication-entry-proposal-r2.md` / SHA256 `7449125c9f9a2e9a3e9e15d8af0da38215998cf016b4b6eb2ed638da0487f7cf`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-039-006e/publication-entry-changes-r2.json` / SHA256 `c88890f0cb0b4b08fe837a4897e86d30d533baee1df9f351ed3eecb9dfd75602`
- 이유: RR의위험차이(RD)와비율(RR)혼동을나눈비율로정정했습니다.그한문장외전체바이트가이전검토안과일치합니다.기존1.05/4%고지·빛복합실험한계등은그대로보존합니다.

### 배치5-2: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-002-4b65/publication-entry-proposal.md` / SHA256 `5e44f647b991ececbc55b1e669e3c8560a5a260adf51ec0753cf0ec783ffa0a1`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-002-4b65/publication-entry-changes.json` / SHA256 `59d90e41a0bb31328103c6a5d7e130452b78f317fd4f7cc6d6cbe7135e5f17ab`
- 이유: 2004세계603,000·아동28%를복원하고3명중1명/OR를발생확률로동일시하던표현을고쳤습니다.57연구질환별OR및CI는원초록일치.집노출대비집이외노출을실내대실외직접인과비교로확정하지않고대상·노출조건미확인한계를독자에게고지합니다.

### 배치5-16: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/publication-entry-proposal.md` / SHA256 `07b184706861db697b5178adf31e9a79d75dda2613b746058764119df87a6182`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/publication-entry-changes.json` / SHA256 `0bacc58b0ba3cd5650ad47b15f5c0e5798460be372f72a34f3eb7f67ef0c4d1f`
- 이유: 고용량확정상한은불확실성으로정정했고쉽게/빈도지침구별은적합합니다.하지만추가원문표1/사망절대조에서10~17%는여러결과의초록요약범위이지사망한결과의범위가아님을확인했습니다.사망두집단분석은7연구263,058명42,133사망RR.85(.79~.93),약15%입니다.이득의사망10~17%를이정확값이나여러결과귀속으로고쳐야합니다.초기검토에서이귀속을명확히지적하지못한부분을추가로보완합니다.

### 배치5-21: approve

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-021-e337/publication-entry-proposal.md` / SHA256 `4c16dc23d46a2e4ceccfeacd4af00faa05c5b44b80ca71a0e1c60f93a1fc15a1`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-021-e337/publication-entry-changes.json` / SHA256 `f5274f38312f2d9f28405b9e8c72cfdd3b1cba61e148cfb410fc041f77e370ef`
- 이유: 34시험15,197명·1년주20g상담효과와122RCT+1코호트22,803명검토전체분모를원초록에대조했습니다.약별NNT분석인원과전체검토규모를구분하고≥12주선정·음주재발/폭음재발조건을보존했습니다.무료상담보장을제거하고날트렉손의사처방/7~10일아편사용확인조건은이전실제의약품안전나라원문과대조했습니다.모든심리사회중재세부프로토콜·모든부록을검증했다는뜻아닙니다.

### 배치5-28: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/publication-entry-proposal.md` / SHA256 `14ed897a9a8cf9515e8441ac47006486f2e6f639401e086d4d73b48b2b54fd28`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/publication-entry-changes.json` / SHA256 `4f2eb06afe82504239d4ad6982e147d5cabe541fc4ef16dba84d84510e75d86b`
- 이유: RR1.21/1.50과GRADE낮음/매우낮음구별및전세계반대연구부재문장삭제는적합합니다.다만classI/II는연관성효과크기강도가아니라연관성을뒷받침하는근거의분류입니다.‘연관성의강도’를‘연관성을뒷받침하는근거를분류한기준’으로정확히해야합니다.

### 배치5-37: revise

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/publication-entry-proposal.md` / SHA256 `d6ccec9847acfbfe472b8982408ed522b206c2428c2c6e4e4a0d51f3cde5ae36`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/publication-entry-changes.json` / SHA256 `b5ef554f994aa7f756f2633102b8a8e11a2b51192b000e0e6e8382e9a01c83bc`
- 이유: 관찰설계일괄오류를수정하고18RCT인지효과·OR당뇨/비만·낮잠노출조건차이·초록/본문귀속차이를독자본문에상세히고지한점은적합합니다.그러나쉽게는새로고지한>60분대본문napping전체의조건충돌을숨긴채‘1시간넘게잔사람30%높음’을확정합니다.이새fullentry의쉽게에서는해당부차수치를생략하거나귀속이불확실함을제한해야합니다.기존쉽게필드승인이력을지우지않고새본문맥락에대한revise로기록합니다.

### 실제근거재열람

- **shs2004** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS0140-6736%2810%2961388-8%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4419084fca5878740fdb.json` / SHA256 `5e4528bb7aee2f65e253e198f9bcf284bf556616a3f5ab41eaf3eb27fab8e871`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: 28% in children

- **shs-cvd** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Fntr%2Fntaf111%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c8c171be347ded2a2f52.json` / SHA256 `bcf32eae0519c003336e6c04ab80e011ad47a990e14ebaea692ae6df1ea6e6f7`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: Home exposure has a higher risk of CVD than non-home exposure.

- **momma-mortality15** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9209691/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC9209691.body` / SHA256 `ffe5462b860ed16387503b573c56b65debce95491864b1900fdc387496625c8a`
  - 범위: 기존직접수집XML의해당표/본문재열람.정확초기수집시각미기록,새HTTP아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: Muscle-strengthening activities were associated with a 15% lower risk of all-cause mortality (RR 0.85; 95% CI 0.79 to 0.93

- **kaner** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD004148.pub4%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5f4aff456ae7268e9379.json` / SHA256 `1a2faa368551ebedb724a94c23fd6c28f47eecd9893ad297454cd7fc98dee9a7`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: 34 studies (15,197 participants)

- **jonas** <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2014.3628%22&format=json&resultType=core&pageSize=10>
  - raw: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/52ab8a5eff9189bb5042.json` / SHA256 `cde67e843082b2ecd9a615cc80496394b912133b639b1f2ab3b28f882a58b5a5`
  - 범위: 제공된원초록RAW재열람.새HTTP/전체원문아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: We included 122 RCTs and 1 cohort study (total 22,803 participants).

- **lane-evidence** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10899807/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC10899807.body` / SHA256 `45154cac70401515cd7f07cff88d9fdcd460a92d6ebc23fed3d28aa4d56da184`
  - 범위: 기존직접수집XML의해당표/본문재열람.정확초기수집시각미기록,새HTTP아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: pre-specified evidence classification criteria were applied

- **nap-rct** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML의해당표/본문재열람.정확초기수집시각미기록,새HTTP아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: One meta-analysis of 18 randomized controlled trials (RCTs)

- **nap-chd** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML의해당표/본문재열람.정확초기수집시각미기록,새HTTP아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: napping is associated with an increased risk of CHD (RR = 1.30

- **nap-diabetes** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML의해당표/본문재열람.정확초기수집시각미기록,새HTTP아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: diabetes (OR = 1.20, 95% CI: 1.14–1.27

- **nap-obesity** <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML>
  - raw: `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`
  - 범위: 기존직접수집XML의해당표/본문재열람.정확초기수집시각미기록,새HTTP아님. / 열람UTC 2026-10-18T14:28:11.308490+00:00
  - 발췌: 1.22

제16항효과의결과별귀속은추가원문표대조에서확인한문제로초기감사에불충분했던부분을보완합니다.제37항은원문불일치를본문에고지한뒤쉽게에서단정하면독자에게다른메시지를주는문제입니다.이전필드승인을소급삭제하지않고새fullentry수정안의지적으로처리했습니다.제28항은유효한관찰연관과그근거의분류를구별하기위한한문장정정입니다.원작성자와ROOT에전달했습니다.

## 배치5 r2 독립 재검토

검토 UTC 2026-10-18T14:28:45.319822+00:00. 제16·28·37항 모두 **approve**. manifest SHA256 `66ac87d093df792bcd2b27099539566456f42618c792ae9ddd85277583e59268`. 각 변경 JSON의 exact before/after 한 번 치환만으로 r1→r2 전체 바이트를 재현했고 두 파일의 frozen SHA를 확인했습니다.

- 제16항: 전체 사망 7연구·263,058명·42,133사망의 RR0.85(0.79–0.93)에 맞게 약15%로 귀속했습니다. 다른 결과를 합친 10~17% 범위를 사망에만 적용한 오류를 해결했습니다.
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/publication-entry-proposal-r2.md` / SHA256 `2bb09014b52824face59aa70d32383d203137d55a426b25ac518a388d601a97b`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/publication-entry-changes-r2.json` / SHA256 `99111fcb5275354a3c8167be0ea8b787a28af7e4794c53bb55a6388573e35383`

- 제28항: 효과 크기의 강도와 근거 분류를 혼동하던 한 문장을 근거를 분류한 기준으로 수정했습니다. 원문의 분류 방법과 GRADE 구별을 보존합니다.
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/publication-entry-proposal-r2.md` / SHA256 `441857b58bd3091d1b7fefe3918361ee580b1016cc144636aef706f12af6a113`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/publication-entry-changes-r2.json` / SHA256 `8e2081a22ff7937ae2388d76f79c11086edb92c96fb179de9fe322844d968cc4`

- 제37항: 쉽게에서 조건 귀속이 충돌하는 >60분/30% 부차 수치를 제거했습니다. 이득의 원수치·초록/본문 차이 고지와 임상 점검 조건을 유지합니다. 이전 쉽게 승인은 이력으로 보존하고 이 fullentry의 쉽게가 대체합니다.
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/publication-entry-proposal-r2.md` / SHA256 `26fb0835ad22a247ab764fdb0d9b34249ae34120deb7dbecf93dc3c9b585873f`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/publication-entry-changes-r2.json` / SHA256 `661af6ea32205979762ac44cd6cdcf8168eed90198394415dc9824729418f4dd`

- 실제 재열람: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9209691/fullTextXML> / raw `/tmp/ch02-audit/full-PMC9209691.body` / SHA256 `ffe5462b860ed16387503b573c56b65debce95491864b1900fdc387496625c8a`; 기존 직접 수집 XML 해당 본문 재열람. 새 HTTP 아님. 초기 수집 시각 미기록. 발췌: 15% lower risk of all-cause mortality

- 실제 재열람: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10899807/fullTextXML> / raw `/tmp/ch02-audit/full-PMC10899807.body` / SHA256 `45154cac70401515cd7f07cff88d9fdcd460a92d6ebc23fed3d28aa4d56da184`; 기존 직접 수집 XML 해당 본문 재열람. 새 HTTP 아님. 초기 수집 시각 미기록. 발췌: evidence classification criteria

- 실제 재열람: <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12909254/fullTextXML> / raw `/tmp/ch02-audit/full-PMC12909254.body` / SHA256 `04084d998cb0e5120dfc3cd4431e257c73cd8ed74f4d52639986c5801e23a569`; 기존 직접 수집 XML 해당 본문 재열람. 새 HTTP 아님. 초기 수집 시각 미기록. 발췌: napping is associated with an increased risk of CHD (RR = 1.30

이 승인은 새 fullentry의 정확 SHA에 한정합니다. 이전 revise/필드 승인 이력은 보존하고 fullentry에 포함된 쉽게는 따로 중복 적용하지 않습니다. 전체 통합 승인이나 정식 KR-FIT가 아닙니다.

## 배치6 독립 원자료·편집 대조

검토 UTC 2026-10-18T14:31:48.296517+00:00. 1·9·11·22·27·35항 **6개 approve**. manifest SHA256 `2fecc70040142136e339aa097554cfbe8d7accdd566c7d573d6b892581b73433`. frozen 두 파일 SHA와 각 changes의 before/after를 strict에 적용한 전체 바이트 일치를 확인했습니다. 새 HTTP를 수행하지 않았으며 아래 실제 RAW 재열람만 근거로 기록합니다.

### 제1항 approve

농촌 mortality rate ratio 1.22를 22% 높음으로, 도시1.65를65% 높음으로 정확화했습니다. 미국 금연연령·회복수명과2004 세계간접흡연 추정치는 실제 원초록 일치. 개인 누적확률 계산 없음.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-001-1c88/publication-entry-proposal.md` / SHA256 `321498bb8e6b8851d7457f526a165a8a0b8ef2b3436362fed5b03cb25ec6e58a`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-001-1c88/publication-entry-changes.json` / SHA256 `835efec6b91698f5836337c8c1199fe094d3f0fda9f0198b86ce9150926c9da8`
- 보존 한계: 국내담뱃값/금단기간은 새 검증 아님. 중국은2006–14 추적의 중앙2010 자료; 원문 mortality rate ratio이며 개인 누적확률 아님.
- 대체: 이 정확 SHA fullentry의 모든 필드가 해당 번호의 이전 strict/별도 필드연산을 대체. 과거 승인/수정 이력 보존. 포함된 쉽게를 중복적용하지 않음.

### 제9항 approve

600마을 무작위배정·20,995명·평균4.74년·75/25소금 및 endpoint별1000인년 발생률과 rate ratio가 원초록 일치. PURE의 추정배설량 기준4.00–5.99g와 OR1.27/1.15를 확률증가로 쓰지 않습니다. 젊은층 이득이 작다는 미측정 단정을 제거하고 신장/약물 선상담을 보존합니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-009-bdd7/publication-entry-proposal.md` / SHA256 `7dad227071a15f0f727e2aadf52a0403519300d08bec42fe2ee53759daeaf479`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-009-bdd7/publication-entry-changes.json` / SHA256 `a08fcb254020247085128d5068ccf11aaa7ced1cc15e5ce562f14be7c7857fdd`
- 보존 한계: PURE 연결 정정문 본문 미열람. 정정무관/정정없음으로 판정하지 않음. 전체 논문/부록·국내제품 가격/맛·건강한젊은층효과 미확인.
- 대체: 이 정확 SHA fullentry의 모든 필드가 해당 번호의 이전 strict/별도 필드연산을 대체. 과거 승인/수정 이력 보존. 포함된 쉽게를 중복적용하지 않음.

### 제11항 approve

걸음수와 시간의 정확 등가·둘중하나 충족 논리를 제거하고 대략환산으로 한정했습니다. Paluch/Arem/Banach 원초록과 Ekelund XML 초록에서 분모·기간·HR·활동측정방법이 일치합니다. 이전 승인 쉽게를 fullentry에 포함하므로 별도 중복적용하지 않습니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/publication-entry-proposal.md` / SHA256 `732c9758957cda416b9d39f7592113351ac6145ab86c468bcbce6a4f51dc214d`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/publication-entry-changes.json` / SHA256 `1ae5b2883a8a9a558a609c07735b5fb53112bb068e57e19066c47780a3907409`
- 보존 한계: 한국 공식 지침 첨부의 권고문·기존비용의 시간환산은 새로 확인하지 않음. Banach 정정문/전체원문, Paluch/Arem 전체원문은 이번 열람범위 아님.
- 대체: 이 정확 SHA fullentry의 모든 필드가 해당 번호의 이전 strict/별도 필드연산을 대체. 과거 승인/수정 이력 보존. 포함된 쉽게를 중복적용하지 않음.

### 제22항 approve

사망20%낮음의 노출이 주7회이상임을 쉽게와 이득에 복원했습니다. BioC 원문에서76,464여성/42,498남성·3,038,853인년·1회28g·빈도별HR/CI·비흡연자만이 아닌 본분석/흡연자제외 민감도분석을 확인했습니다. 조리방법 미측정을 밝혔습니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-022-1d39/publication-entry-proposal.md` / SHA256 `176145c0e7e4737813aeb5f02b1a73c78a2234cd491680ad892bc866d3b0c37d`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-022-1d39/publication-entry-changes.json` / SHA256 `ea471271f7252f62e12688c781b554ad9ee20daf998d50e8014505b898cc3286`
- 보존 한계: 부록 전체와 국내제품 가격을 검증하지 않음. 소금없는 견과 권고가 이 연구의 조리방법별 효과 비교로 입증된 뜻 아님.
- 대체: 이 정확 SHA fullentry의 모든 필드가 해당 번호의 이전 strict/별도 필드연산을 대체. 과거 승인/수정 이력 보존. 포함된 쉽게를 중복적용하지 않음.

### 제27항 approve

Aune200g당RR.90/800g관찰과80g서빙을 Wang2미국코호트HR.87/26연구RR.87과 구분했습니다. 일괄400g환산과10%인과효과상한 단정을 제거하고 주스/감자/전분채소 범위를 고지합니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-027-f02c/publication-entry-proposal.md` / SHA256 `649540fae57294f96394b16479d1b3472124b91146a003d788c5111fa56e0fcf`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-027-f02c/publication-entry-changes.json` / SHA256 `1045dd7290b28cb2d381e8a9081d98c99f95cfd954f6af92096bd6f8a7f083aa`
- 보존 한계: Wang전체원문/식품별serving정의 미열람. 한국지침/일괄g환산은 확인완료 아님.
- 대체: 이 정확 SHA fullentry의 모든 필드가 해당 번호의 이전 strict/별도 필드연산을 대체. 과거 승인/수정 이력 보존. 포함된 쉽게를 중복적용하지 않음.

### 제35항 approve

실제원문521,120명/129,328사망·반개추가HR1.07(1.06–1.08)·가상식품대체모형을 구분했습니다. 반대연구 원초록의 주7개이상대1개미만 결과를 인용하고 하루1개 안전/3~4개위험 경계 단정을 제거했습니다. 새 반대근거 DOI의 정확한 제목/저자/연도도 원초록 응답에서 확인했습니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-035-64a3/publication-entry-proposal.md` / SHA256 `f358876385673f5162b9ce01a1888c4ad1396f701dcc4a442af5a9803c0216bf`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-035-64a3/publication-entry-changes.json` / SHA256 `c0056496117e767bb1d12f513158074d338aa9db6ac6007acc193dda16f4db9c`
- 보존 한계: 반대연구는 실제 원초록 범위; 현행미국지침·개인별 안전량 검증 아님. 주연구 초록median16년/결과mean16년 차이가 있어 새 추적기간 수치를 주장하지 않음.
- 대체: 이 정확 SHA fullentry의 모든 필드가 해당 번호의 이전 strict/별도 필드연산을 대체. 과거 승인/수정 이력 보존. 포함된 쉽게를 중복적용하지 않음.

- 제1항 실제근거 <https://doi.org/10.1056/NEJMsa1211128>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9a806d34dd9a22f88357.json`; SHA256 `91b0c8c51cf954ab9709b953adaab147f3d88dfef36355c2375c39931d7e160c`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: Life expectancy was shortened by more than 10 years among the current smokers, as compared with those who had never smoked.

- 제1항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4691901/fullTextXML>; raw `/tmp/ch02-audit/full-PMC4691901.body`; SHA256 `c8837ca1ac5c79f5d15a2fc59eb5e37d5961772f7a3f881e0bd4c6ad90b3c198`; 기존 직접 수집 XML 해당 초록/방법/결과 실제 재열람. 전체 문장/부록 재검증 아님; 새 HTTP 아님.
  - 발췌: urban: RR 1·32 [95% CI 1·24–1·41]  vs  1·65 [1·53–1·79]; rural: RR 1·13 [1·09–1·17]  vs  1·22 [1·16–1·29]

- 제1항 실제근거 <https://doi.org/10.1016/S0140-6736(10)61388-8>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4419084fca5878740fdb.json`; SHA256 `5e4528bb7aee2f65e253e198f9bcf284bf556616a3f5ab41eaf3eb27fab8e871`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: 603,000 deaths were attributable to second-hand smoke in 2004, which was about 1·0% of worldwide mortality.

- 제9항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa2105675%22&format=json&resultType=core&pageSize=10>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/f471019f1972c206279f.json`; SHA256 `5cc708e6b4b037197a0f66ca56455188907290b0d75f4d790c77fdde96e72404`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: <h4>Background</h4>Salt substitutes with reduced sodium levels and increased potassium levels have been shown to lower blood pressure, but their effects on cardiovascular and safety outcomes are uncertain.<h4>Methods</h4>We conducted an open-label, cluster-randomized trial involving persons from 600 villages in rural China. The participants had a history of stroke or were 60 years of age or older and had high blood pressure. The villages were randomly assigned in a 1:1 ratio to the intervention group, in which the participants used a salt substitute (75% sodium chloride and 25% potassium chloride by mass), or to the control group, in which the participants continued to use regular salt (100% sodium chloride). The primary outcome was stroke, the secondary outcomes were major adverse cardiovascular events and death from any cause, and the safety outcome was clinical hyperkalemia.<h4>Results</h4>A total of 20,995 persons were enrolled in the trial. The mean age of the participants was 65.4 years, and 49.5% were female, 72.6% had a history of stroke, and 88.4% a history of hypertension. The mean duration of follow-up was 4.74 years. The rate of stroke was lower with the salt substitute than with regular salt (29.14 events vs. 33.65 events per 1000 person-years; rate ratio, 0.86; 95% confidence interval [CI], 0.77 to 0.96; P = 0.006), as were the rates of major cardiovascular events (49.09 events vs. 56.29 events per 1000 person-years; rate ratio, 0.87; 95% CI, 0.80 to 0.94; P<0.001) and death (39.28 events vs. 44.61 events per 1000 person-years; rate ratio, 0.88; 95% CI, 0.82 to 0.95; P<0.001). The rate of serious adverse events attributed to hyperkalemia was not significantly higher with the salt substitute than with regular salt (3.35 events vs. 3.30 events per 1000 person-years; rate ratio, 1.04; 95% CI, 0.80 to 1.37; P = 0.76).<h4>Conclusions</h4>Among persons who had a history of stroke or were 60 years of age or older and had high blood pressure, the rates of stroke, major cardiovascular events, and death from any cause were lower with the salt substitute than with regular salt. (Funded by the National Health and Medical Research Council of Australia; SSaSS ClinicalTrials.gov number, NCT02092090.).

- 제9항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1311889%22&format=json&resultType=core&pageSize=10>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/262bccdaabbcd9a9ee70.json`; SHA256 `1f9db29e7ca73a5a3caf6c7308e7a17cc7907a74288066ca03d72888e809dc80`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: <h4>Background</h4>The optimal range of sodium intake for cardiovascular health is controversial.<h4>Methods</h4>We obtained morning fasting urine samples from 101,945 persons in 17 countries and estimated 24-hour sodium and potassium excretion (used as a surrogate for intake). We examined the association between estimated urinary sodium and potassium excretion and the composite outcome of death and major cardiovascular events.<h4>Results</h4>The mean estimated sodium and potassium excretion was 4.93 g per day and 2.12 g per day, respectively. With a mean follow-up of 3.7 years, the composite outcome occurred in 3317 participants (3.3%). As compared with an estimated sodium excretion of 4.00 to 5.99 g per day (reference range), a higher estimated sodium excretion (≥ 7.00 g per day) was associated with an increased risk of the composite outcome (odds ratio, 1.15; 95% confidence interval [CI], 1.02 to 1.30), as well as increased risks of death and major cardiovascular events considered separately. The association between a high estimated sodium excretion and the composite outcome was strongest among participants with hypertension (P=0.02 for interaction), with an increased risk at an estimated sodium excretion of 6.00 g or more per day. As compared with the reference range, an estimated sodium excretion that was below 3.00 g per day was also associated with an increased risk of the composite outcome (odds ratio, 1.27; 95% CI, 1.12 to 1.44). As compared with an estimated potassium excretion that was less than 1.50 g per day, higher potassium excretion was associated with a reduced risk of the composite outcome.<h4>Conclusions</h4>In this study in which sodium intake was estimated on the basis of measured urinary excretion, an estimated sodium intake between 3 g per day and 6 g per day was associated with a lower risk of death and cardiovascular events than was either a higher or lower estimated level of intake. As compared with an estimated potassium excretion that was less than 1.50 g per day, higher potassium excretion was associated with a lower risk of death and cardiovascular events. (Funded by the Population Health Research Institute and others.).

- 제11항 실제근거 <https://doi.org/10.1016/s2468-2667(21)00302-9>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/683bb7799e08f8155c9f.json`; SHA256 `ccb7302a069be66d449768e66f5fe7773e66cfaf7005bd9a1b816ed088aade31`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: <h4>Background</h4>Although 10 000 steps per day is widely promoted to have health benefits, there is little evidence to support this recommendation. We aimed to determine the association between number of steps per day and stepping rate with all-cause mortality.<h4>Methods</h4>In this meta-analysis, we identified studies investigating the effect of daily step count on all-cause mortality in adults (aged ≥18 years), via a previously published systematic review and expert knowledge of the field. We asked participating study investigators to process their participant-level data following a standardised protocol. The primary outcome was all-cause mortality collected from death certificates and country registries. We analysed the dose-response association of steps per day and stepping rate with all-cause mortality. We did Cox proportional hazards regression analyses using study-specific quartiles of steps per day and calculated hazard ratios (HRs) with inverse-variance weighted random effects models.<h4>Findings</h4>We identified 15 studies, of which seven were published and eight were unpublished, with study start dates between 1999 and 2018. The total sample included 47 471 adults, among whom there were 3013 deaths (10·1 per 1000 participant-years) over a median follow-up of 7·1 years ([IQR 4·3-9·9]; total sum of follow-up across studies was 297 837 person-years). Quartile median steps per day were 3553 for quartile 1, 5801 for quartile 2, 7842 for quartile 3, and 10 901 for quartile 4. Compared with the lowest quartile, the adjusted HR for all-cause mortality was 0·60 (95% CI 0·51-0·71) for quartile 2, 0·55 (0·49-0·62) for quartile 3, and 0·47 (0·39-0·57) for quartile 4. Restricted cubic splines showed progressively decreasing risk of mortality among adults aged 60 years and older with increasing number of steps per day until 6000-8000 steps per day and among adults younger than 60 years until 8000-10 000 steps per day. Adjusting for number of steps per day, comparing quartile 1 with quartile 4, the association between higher stepping rates and mortality was attenuated but remained significant for a peak of 30 min (HR 0·67 [95% CI 0·56-0·83]) and a peak of 60 min (0·67 [0·50-0·90]), but not significant for time (min per day) spent walking at 40 steps per min or faster (1·12 [0·96-1·32]) and 100 steps per min or faster (0·86 [0·58-1·28]).<h4>Interpretation</h4>Taking more steps per day was associated with a progressively lower risk of all-cause mortality, up

- 제11항 실제근거 <https://doi.org/10.1001/jamainternmed.2015.0533>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a3967d4d88be84683f13.json`; SHA256 `549f6f8bbe29be27c99c840e6ca2bac9ddff082ea42d3ffaa8f33baae4ae4c71`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: <h4>Importance</h4>The 2008 Physical Activity Guidelines for Americans recommended a minimum of 75 vigorous-intensity or 150 moderate-intensity minutes per week (7.5 metabolic-equivalent hours per week) of aerobic activity for substantial health benefit and suggested additional benefits by doing more than double this amount. However, the upper limit of longevity benefit or possible harm with more physical activity is unclear.<h4>Objective</h4>To quantify the dose-response association between leisure time physical activity and mortality and define the upper limit of benefit or harm associated with increased levels of physical activity.<h4>Design, setting, and participants</h4>We pooled data from 6 studies in the National Cancer Institute Cohort Consortium (baseline 1992-2003). Population-based prospective cohorts in the United States and Europe with self-reported physical activity were analyzed in 2014. A total of 661,137 men and women (median age, 62 years; range, 21-98 years) and 116,686 deaths were included. We used Cox proportional hazards regression with cohort stratification to generate multivariable-adjusted hazard ratios (HRs) and 95% CIs. Median follow-up time was 14.2 years.<h4>Exposures</h4>Leisure time moderate- to vigorous-intensity physical activity.<h4>Main outcomes and measures</h4>The upper limit of mortality benefit from high levels of leisure time physical activity.<h4>Results</h4>Compared with individuals reporting no leisure time physical activity, we observed a 20% lower mortality risk among those performing less than the recommended minimum of 7.5 metabolic-equivalent hours per week (HR, 0.80 [95% CI, 0.78-0.82]), a 31% lower risk at 1 to 2 times the recommended minimum (HR, 0.69 [95% CI, 0.67-0.70]), and a 37% lower risk at 2 to 3 times the minimum (HR, 0.63 [95% CI, 0.62-0.65]). An upper threshold for mortality benefit occurred at 3 to 5 times the physical activity recommendation (HR, 0.61 [95% CI, 0.59-0.62]); however, compared with the recommended minimum, the additional benefit was modest (31% vs 39%). There was no evidence of harm at 10 or more times the recommended minimum (HR, 0.69 [95% CI, 0.59-0.78]). A similar dose-response relationship was observed for mortality due to cardiovascular disease and to cancer.<h4>Conclusions and relevance</h4>Meeting the 2008 Physical Activity Guidelines for Americans minimum by either moderate- or vigorous-intensity activities was associated with nearly the maximum longevity benefit. We obser

- 제11항 실제근거 <https://doi.org/10.1093/eurjpc/zwad229>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e1b1009e2c926ca207f0.json`; SHA256 `5523d4aa18ed226cc1c10f5e679f800e5646dcc1bedf5820067782f6619ca3d3`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: <h4>Aims</h4>There is good evidence showing that inactivity and walking minimal steps/day increase the risk of cardiovascular (CV) disease and general ill-health. The optimal number of steps and their role in health is, however, still unclear. Therefore, in this meta-analysis, we aimed to evaluate the relationship between step count and all-cause mortality and CV mortality.<h4>Methods and results</h4>We systematically searched relevant electronic databases from inception until 12 June 2022. The main endpoints were all-cause mortality and CV mortality. An inverse-variance weighted random-effects model was used to calculate the number of steps/day and mortality. Seventeen cohort studies with a total of 226 889 participants (generally healthy or patients at CV risk) with a median follow-up 7.1 years were included in the meta-analysis. A 1000-step increment was associated with a 15% decreased risk of all-cause mortality [hazard ratio (HR) 0.85; 95% confidence interval (CI) 0.81-0.91; P < 0.001], while a 500-step increment was associated with a 7% decrease in CV mortality (HR 0.93; 95% CI 0.91-0.95; P < 0.001). Compared with the reference quartile with median steps/day 3867 (2500-6675), the Quartile 1 (Q1, median steps: 5537), Quartile 2 (Q2, median steps 7370), and Quartile 3 (Q3, median steps 11 529) were associated with lower risk for all-cause mortality (48, 55, and 67%, respectively; P < 0.05, for all). Similarly, compared with the lowest quartile of steps/day used as reference [median steps 2337, interquartile range 1596-4000), higher quartiles of steps/day (Q1 = 3982, Q2 = 6661, and Q3 = 10 413) were linearly associated with a reduced risk of CV mortality (16, 49, and 77%; P < 0.05, for all). Using a restricted cubic splines model, we observed a nonlinear dose-response association between step count and all-cause and CV mortality (Pnonlineraly < 0.001, for both) with a progressively lower risk of mortality with an increased step count.<h4>Conclusion</h4>This meta-analysis demonstrates a significant inverse association between daily step count and all-cause mortality and CV mortality with more the better over the cut-off point of 3867 steps/day for all-cause mortality and only 2337 steps for CV mortality.

- 제11항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6699591/fullTextXML>; raw `/tmp/ch02-audit/full-PMC6699591.body`; SHA256 `1e613b7b86b407b39d02859e9febf6f661090b486fa634596a500fd182f52e70`; 기존 직접 수집 XML 해당 초록/방법/결과 실제 재열람. 전체 문장/부록 재검증 아님; 새 HTTP 아님.
  - 발췌: Abstract Objective To examine the dose-response associations between accelerometer assessed total physical activity, different intensities of physical activity, and sedentary time and all cause mortality. Design Systematic review and harmonised meta-analysis. Data sources PubMed, PsycINFO, Embase, Web of Science, Sport Discus from inception to 31 July 2018. Eligibility criteria Prospective cohort studies assessing physical activity and sedentary time by accelerometry and associations with all cause mortality and reported effect estimates as hazard ratios, odds ratios, or relative risks with 95% confidence intervals. Data extraction and analysis Guidelines for meta-analyses and systematic reviews for observational studies and PRISMA guidelines were followed. Two authors independently screened the titles and abstracts. One author performed a full text review and another extracted the data. Two authors independently assessed the risk of bias. Individual level participant data were harmonised and analysed at study level. Data on physical activity were categorised by quarters at study level, and study specific associations with all cause mortality were analysed using Cox proportional hazards regression analyses. Study specific results were summarised using random effects meta-analysis. Main outcome measure All cause mortality. Results 39 studies were retrieved for full text review; 10 were eligible for inclusion, three were excluded owing to harmonisation challenges (eg, wrist placement of the accelerometer), and one study did not participate. Two additional studies with unpublished mortality data were also included. Thus, individual level data from eight studies (n=36 383; mean age 62.6 years; 72.8% women), with median follow-up of 5.8 years (range 3.0-14.5 years) and 2149 (5.9%) deaths were analysed. Any physical activity, regardless of intensity, was associated with lower risk of mortality, with a non-linear dose-response. Hazards ratios for mortality were 1.00 (referent) in the first quarter (least active), 0.48 (95% confidence interval 0.43 to 0.54) in the second quarter, 0.34 (0.26 to 0.45) in the third quarter, and 0.27 (0.23 to 0.32) in the fourth quarter (most active). Corresponding hazards ratios for light physical activity were 1.00, 0.60 (0.54 to 0.68), 0.44 (0.38 to 0.51), and 0.38 (0.28 to 0.51), and for moderate-to-vigorous physical activity were 1.00, 0.64 (0.55 to 0.74), 0.55 (0.40 to 0.74), and 0.52 (0.43 to 0.61). For sedentary time, hazards 

- 제22항 실제근거 <https://www.ncbi.nlm.nih.gov/research/bionlp/RESTful/pmcoa.cgi/BioC_xml/PMC3931001/unicode>; raw `/tmp/ch02e22-evidence/bioc.xml`; SHA256 `0072168569a94ce25fe912fc3e845ae0fcab87680c391de3e8ee718bb57e7514`; 작성자 보존 BioC 원문 실제 재열람: 방법·결과·민감도분석·한계. 부록 전체 아님; 검토자의 새 HTTP 아님.
  - 발췌: During 3,038,853 person-years of follow-up, 16,200 women and 11,229 men died. Nut consumption was inversely associated with total mortality among both women and men, after adjustment for other known or suspected risk factors. The pooled multivariate hazard ratios for death among participants who ate nuts, as compared with those who did not, were 0.93 (95% confidence interval [CI], 0.90 to 0.96) for the consumption of nuts less than once per week, 0.89 (95% CI, 0.86 to 0.93) for once per week, 0.87 (95% CI, 0.83 to 0.90) for two to four times per week, 0.85 (95% CI, 0.79 to 0.91) for five or six times per week, and 0.80 (95% CI, 0.73 to 0.86) for seven or more times per week (P<0.001 for trend). Significant inverse associations were also observed between nut consumption and deaths due to cancer, heart disease, and respiratory disease.

- 제27항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5837313/fullTextXML>; raw `/tmp/ch02-audit/full-PMC5837313.body`; SHA256 `0024f5772491aad3188ddc13676eb74dc2b13654ecbf69251144ac2e1fe0cfff`; 기존 직접 수집 XML 해당 초록/방법/결과 실제 재열람. 전체 문장/부록 재검증 아님; 새 HTTP 아님.
  - 발췌: Consistent with previous meta-analyses, we used 80 g as a serving size for fruit and vegetable intake.

- 제27항 실제근거 <https://doi.org/10.1161/CIRCULATIONAHA.120.048996>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/931785f9c2296f3d6d44.json`; SHA256 `1544c4c428468f2718619db887178e3ab38633b2c6c9101392864c5380959937`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: <h4>Background</h4>The optimal intake levels of fruit and vegetables for maintaining long-term health are uncertain.<h4>Methods</h4>We followed 66 719 women from the Nurses' Health Study (1984-2014) and 42 016 men from the Health Professionals Follow-up Study (1986-2014) who were free from cardiovascular disease (CVD), cancer, and diabetes at baseline. Diet was assessed using a validated semiquantitative food frequency questionnaire at baseline and updated every 2 to 4 years. We also conducted a dose-response meta-analysis, including results from our 2 cohorts and 24 other prospective cohort studies.<h4>Results</h4>We documented 33 898 deaths during the follow-up. After adjustment for known and suspected confounding variables and risk factors, we observed nonlinear inverse associations of fruit and vegetable intake with total mortality and cause-specific mortality attributable to cancer, CVD, and respiratory disease (all <i>P</i><sub>nonlinear</sub><0.001). Intake of ≈5 servings per day of fruit and vegetables, or 2 servings of fruit and 3 servings of vegetables, was associated with the lowest mortality, and above that level, higher intake was not associated with additional risk reduction. In comparison with the reference level (2 servings/d), daily intake of 5 servings of fruit and vegetables was associated with hazard ratios (95% CI) of 0.87 (0.85-0.90) for total mortality, 0.88 (0.83-0.94) for CVD mortality, 0.90 (0.86-0.95) for cancer mortality, and 0.65 (0.59-0.72) for respiratory disease mortality. The dose-response meta-analysis that included 145 015 deaths accrued in 1 892 885 participants yielded similar results (summary risk ratio of mortality for 5 servings/d=0.87 [95% CI, 0.85-0.88]; <i>P</i><sub>nonlinear</sub><0.001). Higher intakes of most subgroups of fruits and vegetables were associated with lower mortality, with the exception of starchy vegetables such as peas and corn. Intakes of fruit juices and potatoes were not associated with total and cause-specific mortality.<h4>Conclusions</h4>Higher intakes of fruit and vegetables were associated with lower mortality; the risk reduction plateaued at ≈5 servings of fruit and vegetables per day. These findings support current dietary recommendations to increase intake of fruits and vegetables, but not fruit juices and potatoes.

- 제35항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC7872242/fullTextXML>; raw `/tmp/ch02-audit/full-PMC7872242.body`; SHA256 `9aef53398a20e6b10b5b25f2e1cc3e2c9a88020b78c4e2923d511c7b3325f031`; 기존 직접 수집 XML 해당 초록/방법/결과 실제 재열람. 전체 문장/부록 재검증 아님; 새 HTTP 아님.
  - 발췌: There were 129,328 deaths including 38,747 deaths from CVD during a median follow-up of 16 years.

- 제35항 실제근거 <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1007/s00394-018-1692-3&format=json&resultType=core>; raw `/tmp/ch02-e35-meta.json`; SHA256 `722278687ef99b40453a9f7ea65fbb6973cb2f02884b6a9534fbe3266d00dee3`; 기존 원초록 JSON 실제 재열람. 전체 원문/부록 아님; 새 HTTP 아님.
  - 발췌: The updated meta-analyses including our results showed that 7+ eggs/week was not associated with all-cause mortality (HR 1.09, 95% CI 0.997-1.200) or IHD (HR 0.97, 95% CI 0.90-1.05), but associated with a small reduction in stroke (HR 0.91. 95% CI 0.85-0.98).

이는 개별 고정안 승인입니다. 미확인 현행 지침·가격·정정문을 확인 완료로 세지 않으며, 전체42항 finding closure와 최종 통합 승인·정식KR-FIT는 별도로 판단합니다.

## 배치7 독립 검토와 비full 항목 closure 점검

검토UTC 2026-10-18T14:33:46.898496+00:00. 제8·18·29항 **approve**. manifest SHA256 `b5aace14840ee8ef25ae2a74879db165f3cc88fd66331108d5a43b1b509972aa`. 모든 frozen SHA 및 strict→changes→fullentry 전체바이트 재현 확인.

### 제8항 approve

주노출이 빈랑 열매를 포함한 혼합물임을 구분했습니다. 원문 17연구388,134명, 사망4연구179,582명/5.5–12.1년, 남성당뇨2연구51,412명, 대사증후군3연구23,291명 및 원문 RR값/CI를 대조했습니다. 원자료 risk ratio/HR/OR 혼합을 고지하고 개인확률로 변환하지 않습니다. 인용분석 밖의 암·용량/기간·금연후효과 단정을 제거해 실제 확인범위로 제한했습니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-008-5b8c/publication-entry-proposal.md` / SHA256 `c085fa447776ed3f497fc56fd14ab8d767195a368540ae7e6915afc06f44e3eb`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-008-5b8c/publication-entry-changes.json` / SHA256 `e2dd9a7ba6ac3ddf153db03d0f57ea092b1578d3e4e973605102ed104a335dff`
- 미확인: No independent primary cancer source read; no numerical cancer risk or cessation benefit endorsed. Constituent studies and all supplementary data not independently reanalysed. Article itself inconsistently labels non-cohort designs; no unsupported single design label added. No Korean prevalence or market price verified; no invented current price. Existing abstention cost statement preserved.
- 대체: 해당번호 latest fullentry 전체필드 승인. 이전 필드승인 이력보존, fullentry에 포함된 쉽게 연산은 중복적용하지 않음.

### 제18항 approve

2014 최고대최저 비교와2017 하루serving증가 비교를 나눴습니다. 2014 미가공육RR1.10 CI.98–1.22와2017RR1.10 CI1.04–1.18이 다른 점을 반영해 유의차없음을2014에 한정했습니다. 미확인 식품별그램을 임의추정하지 않고 한국식당인분 환산불가를 독자에게 고지했습니다. NutriRECS 낮은확실성/약한권고를 원초록 범위로 보존합니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-018-d3c8/publication-entry-proposal.md` / SHA256 `cd4bcd0c91516919908d5013c0e48bb4a7a74229aa93ef21b7c80ae9ea8b9d96`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-018-d3c8/publication-entry-changes.json` / SHA256 `a5bb1dabe4d53f988db52244e22d666b2a8075e11bac5e413d3f6f96b225b36f`
- 미확인: 2017 full text and food-specific serving gram definitions not read. DOI HTTPS fetch failed with tunnel 403; no g value inferred. Reader explicitly warned that research serving cannot be converted to Korean restaurant serving. Original abstracts report pooled RR, not personal absolute risks or an intervention effect. No HR or OR converted. 2014 unprocessed meat CI 0.98–1.22 includes 1; 2017 red meat CI 1.04–1.18 excludes 1. The old blanket no-statistical-difference statement is restricted to 2014. NutriRECS abstract signals corrected article; full text and correction not checked. Proposal uses only recommendations present in the cached abstract.
- 대체: 해당번호 latest fullentry 전체필드 승인. 이전 필드승인 이력보존, fullentry에 포함된 쉽게 연산은 중복적용하지 않음.

### 제29항 approve

공기청정기 사망연구가 전세계에 없다는 주장을 인용한 실외PM연구가 그 효과를 검증하지 않았다는 범위로 제한했습니다. 중국농촌271,217명·평균7.2년·15,468사망, 조리/난방 하위분모, 연료정의 및 각HR이 원초록 일치. PM종합107연구/104추적연구를 PM2.5자연사분모로 동일시하지 않고 RR1.08/10µg/m³와 구분했습니다. 한국보급률/교체비·인과효과 미확인을 밝혔습니다.

- proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-029-255c/publication-entry-proposal.md` / SHA256 `d1dfc6d1be584d79a51583d4f83913b7ee31ff929c9989773935af477cc8e292`
- changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-029-255c/publication-entry-changes.json` / SHA256 `bcda13cebc7b5b0834e5fc9a4d73e4cef44661f3ec37b0b7099558845254c99b`
- 미확인: Both primary abstracts fully reread, not full text or supplements. Domestic replacement prices and fuel penetration remain unverified. No claim that worldwide air-cleaner mortality literature is absent. PM2.5 natural-cause pooled analysis exact study count not available in abstract. Ventilation is retained as a general safety condition; abstracts do not establish a specific ventilation regimen for clean fuels.
- 대체: 해당번호 latest fullentry 전체필드 승인. 이전 필드승인 이력보존, fullentry에 포함된 쉽게 연산은 중복적용하지 않음.

- 실제근거 제8항 <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3734295/fullTextXML>; raw `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-008-5b8c/source-evidence/PMC3734295.fullTextXML.xml`; SHA256 `26ab7ce51abbf9ed2593bf0faafc36dea683bbc895f51c65df665cb5519c05de`; 기존 수집 원문XML 실제 해당 방법/대상별결과/노출정의 재열람. 새HTTP·모든부록 검증 아님.
  - 발췌: the relative risk (risk ratio, hazard ratio, or odds ratio) of events

- 실제근거 제18항 <https://doi.org/10.1093/aje/kwt261>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6d999285da35006e915f.json`; SHA256 `d83722c33e32a177fd6a2ea7fc1dd1338faeb47e8529d63bc5cbfed8cc742fbc`; 기존 원초록 JSON 실제 전체 초록 재열람. 새HTTP·전체원문/정정문 열람 아님.
  - 발췌: High consumption of red meat and processed meat has been associated with increased risk of several chronic diseases. We conducted a meta-analysis to summarize the evidence from prospective studies on red meat and processed meat consumption in relationship to all-cause mortality. Pertinent studies were identified by searching PubMed through May 2013 and by reviewing the reference lists of retrieved articles. Prospective studies that reported relative risks with 95% confidence intervals for the association of red meat or processed meat consumption with all-cause mortality were eligible. Study-specific results were combined by using a random-effects model. Nine prospective studies were included in the meta-analysis. The summary relative risks of all-cause mortality for the highest versus the lowest category of consumption were 1.10 (95% confidence interval (CI): 0.98, 1.22; n = 6 studies) for unprocessed red meat, 1.23 (95% CI: 1.17, 1.28; n = 6 studies) for processed meat, and 1.29 (95% CI: 1.24, 1.35; n = 5 studies) for total red meat. In a dose-response meta-analysis, consumption of processed meat and total red meat, but not unprocessed red meat, was statistically significantly positively associated with all-cause mortality in a nonlinear fashion. These results indicate that high consumption of red meat, especially processed meat, may increase all-cause mortality.

- 실제근거 제18항 <https://doi.org/10.3945/ajcn.117.153148>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4b7da62d583d8e829ddf.json`; SHA256 `78c1aa2d6eb0a605813a7b92792a1b65df45cad47ac7b116ff2abb36ac2ada6c`; 기존 원초록 JSON 실제 전체 초록 재열람. 새HTTP·전체원문/정정문 열람 아님.
  - 발췌: <b>Background:</b> Suboptimal diet is one of the most important factors in preventing early death and disability worldwide.<b>Objective:</b> The aim of this meta-analysis was to synthesize the knowledge about the relation between intake of 12 major food groups, including whole grains, refined grains, vegetables, fruits, nuts, legumes, eggs, dairy, fish, red meat, processed meat, and sugar-sweetened beverages, with risk of all-cause mortality.<b>Design:</b> We conducted a systematic search in PubMed, Embase, and Google Scholar for prospective studies investigating the association between these 12 food groups and risk of all-cause mortality. Summary RRs and 95% CIs were estimated with the use of a random effects model for high-intake compared with low-intake categories, as well as for linear and nonlinear relations. Moreover, the risk reduction potential of foods was calculated by multiplying the RR by optimal intake values (serving category with the strongest association) for risk-reducing foods or risk-increasing foods, respectively.<b>Results:</b> With increasing intake (for each daily serving) of whole grains (RR: 0.92; 95% CI: 0.89, 0.95), vegetables (RR: 0.96; 95% CI: 0.95, 0.98), fruits (RR: 0.94; 95% CI: 0.92, 0.97), nuts (RR: 0.76; 95% CI: 0.69, 0.84), and fish (RR: 0.93; 95% CI: 0.88, 0.98), the risk of all-cause mortality decreased; higher intake of red meat (RR: 1.10; 95% CI: 1.04, 1.18) and processed meat (RR: 1.23; 95% CI: 1.12, 1.36) was associated with an increased risk of all-cause mortality in a linear dose-response meta-analysis. A clear indication of nonlinearity was seen for the relations between vegetables, fruits, nuts, and dairy and all-cause mortality. Optimal consumption of risk-decreasing foods results in a 56% reduction of all-cause mortality, whereas consumption of risk-increasing foods is associated with a 2-fold increased risk of all-cause mortality.<b>Conclusion:</b> Selecting specific optimal intakes of the investigated food groups can lead to a considerable change in the risk of premature death.

- 실제근거 제18항 <https://doi.org/10.7326/m19-1621>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/3b5f25797f64d4d98130.json`; SHA256 `e791029afc9f2746e94aed4e75fe7e5a6ca276dd86815efe8f854a4516fcdee3`; 기존 원초록 JSON 실제 전체 초록 재열람. 새HTTP·전체원문/정정문 열람 아님.
  - 발췌: This article has been corrected. The original version (PDF) is appended to this article as a Supplement.<h4>Description</h4>Dietary guideline recommendations require consideration of the certainty in the evidence, the magnitude of potential benefits and harms, and explicit consideration of people's values and preferences. A set of recommendations on red meat and processed meat consumption was developed on the basis of 5 de novo systematic reviews that considered all of these issues.<h4>Methods</h4>The recommendations were developed by using the Nutritional Recommendations (NutriRECS) guideline development process, which includes rigorous systematic review methodology, and GRADE methods to rate the certainty of evidence for each outcome and to move from evidence to recommendations. A panel of 14 members, including 3 community members, from 7 countries voted on the final recommendations. Strict criteria limited the conflicts of interest among panel members. Considerations of environmental impact or animal welfare did not bear on the recommendations. Four systematic reviews addressed the health effects associated with red meat and processed meat consumption, and 1 systematic review addressed people's health-related values and preferences regarding meat consumption.<h4>Recommendations</h4>The panel suggests that adults continue current unprocessed red meat consumption (weak recommendation, low-certainty evidence). Similarly, the panel suggests adults continue current processed meat consumption (weak recommendation, low-certainty evidence).<h4>Primary funding source</h4>None. (PROSPERO 2017: CRD42017074074; PROSPERO 2018: CRD42018088854).

- 실제근거 제29항 <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2018.2151%22&format=json&resultType=core&pageSize=10>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9a9a5095d6eb444aa465.json`; SHA256 `132bac2eacaa72b23b9b4f4d121d639652edda923daa3015f618c5ecb2135275`; 기존 원초록 JSON 실제 전체 초록 재열람. 새HTTP·전체원문/정정문 열람 아님.
  - 발췌: <h4>Importance</h4>When combusted indoors, solid fuels generate a large amount of pollutants such as fine particulate matter.<h4>Objective</h4>To assess the associations of solid fuel use for cooking and heating with cardiovascular and all-cause mortality.<h4>Design, setting, and participants</h4>This nationwide prospective cohort study recruited participants from 5 rural areas across China between June 2004 and July 2008; mortality follow-up was until January 1, 2014. A total of 271 217 adults without a self-reported history of physician-diagnosed cardiovascular disease at baseline were included, with a random subset (n = 10 892) participating in a resurvey after a mean interval of 2.7 years.<h4>Exposures</h4>Self-reported primary cooking and heating fuels (solid: coal, wood, or charcoal; clean: gas, electricity, or central heating), switching of fuel type before baseline, and use of ventilated cookstoves.<h4>Main outcomes and measures</h4>Death from cardiovascular and all causes, collected through established death registries.<h4>Results</h4>Among the 271 217 participants, the mean (SD) age was 51.0 (10.2) years, and 59% (n = 158 914) were women. A total of 66% (n = 179 952) of the participants reported regular cooking (at least weekly) and 60% (n = 163 882) reported winter heating, of whom 84% (n = 150 992) and 90% (n = 147 272) used solid fuels, respectively. There were 15 468 deaths, including 5519 from cardiovascular causes, documented during a mean (SD) of 7.2 (1.4) years of follow-up. Use of solid fuels for cooking was associated with greater risk of cardiovascular mortality (absolute rate difference [ARD] per 100 000 person-years, 135 [95% CI, 77-193]; hazard ratio [HR], 1.20 [95% CI, 1.02-1.41]) and all-cause mortality (ARD, 338 [95% CI, 249-427]; HR, 1.11 [95% CI, 1.03-1.20]). Use of solid fuels for heating was also associated with greater risk of cardiovascular mortality (ARD, 175 [95% CI, 118-231]; HR, 1.29 [95% CI, 1.06-1.55]) and all-cause mortality (ARD, 392 [95% CI, 297-487]; HR, 1.14 [95% CI, 1.03-1.26]). Compared with persistent solid fuel users, participants who reported having previously switched from solid to clean fuels for cooking had a lower risk of cardiovascular mortality (ARD, 138 [95% CI, 71-205]; HR, 0.83 [95% CI, 0.69-0.99]) and all-cause mortality (ARD, 407 [95% CI, 317-497]; HR, 0.87 [95% CI, 0.79-0.95]), while for heating, the ARDs were 193 (95% CI, 128-258) and 492 (95% CI, 383-601), and the HRs were 0.57 (95% CI, 0.42-0.77) and 0.67 (95% CI, 0.57-0.79), respectively. Among solid fuel users, use of ventilated cookstoves was also associated with lower risk of cardiovascular mortality (ARD, 33 [95% CI, -9 to 75]; HR, 0.89 [95% CI, 0.80-0.99]) and all-cause mortality (ARD, 87 [95% CI, 20-153]; HR, 0.91 [95% CI, 0.85-0.

- 실제근거 제29항 <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.envint.2020.105974%22&format=json&resultType=core&pageSize=10>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/da2b073459b6bda06a19.json`; SHA256 `1c445ab674c519656ca34bb51cd07865da50878595b30aeca0387272adfa3d72`; 기존 원초록 JSON 실제 전체 초록 재열람. 새HTTP·전체원문/정정문 열람 아님.
  - 발췌: As new scientific evidence on health effects of air pollution is generated, air quality guidelines need to be periodically updated. The objective of this review is to support the derivation of updated guidelines by the World Health Organization (WHO) by performing a systematic review of evidence of associations between long-term exposure to particulate matter with diameter under 2.5 µm (PM<sub>2.5</sub>) and particulate matter with diameter under 10 µm (PM<sub>10</sub>), in relation to all-cause and cause-specific mortality. As there is especially uncertainty about the relationship at the low and high end of the exposure range, the review needed to provide an indication of the shape of the concentration-response function (CRF). We systematically searched MEDLINE and EMBASE from database inception to 9 October 2018. Articles were checked for eligibility by two reviewers. We included cohort and case-control studies on outdoor air pollution in human populations using individual level data. In addition to natural-cause mortality, we evaluated mortality from circulatory diseases (ischemic heart disease (IHD) and cerebrovascular disease (stroke) also specifically), respiratory diseases (Chronic Obstructive Pulmonary Disease (COPD) and acute lower respiratory infection (ALRI) also specifically) and lung cancer. A random-effect meta-analysis was performed when at least three studies were available for a specific exposure-outcome pair. Risk of bias was assessed for all included articles using a specifically developed tool coordinated by WHO. Additional analyses were performed to assess consistency across geographic region, explain heterogeneity and explore the shape of the CRF. An adapted GRADE (Grading of Recommendations Assessment, Development and Evaluation) assessment of the body of evidence was made using a specifically developed tool coordinated by WHO. A large number (N = 107) of predominantly cohort studies (N = 104) were included after screening more than 3000 abstracts. Studies were conducted globally with the majority of studies from North America (N = 62) and Europe (N = 25). More studies used PM<sub>2.5</sub> (N = 71) as the exposure metric than PM<sub>10</sub> (N = 42). PM<sub>2.5</sub> was significantly associated with all causes of death evaluated. The combined Risk Ratio (RR) for PM<sub>2.5</sub> and natural-cause mortality was 1.08 (95%CI 1.06, 1.09) per 10 µg/m<sup>3</sup>. Meta analyses of studies conducted at the low mean PM<sub>2.5</sub> levels (<25, 20, 15, 12, 10 µg/m<sup>3</sup>) yielded RRs that were similar or higher compared to the overall RR, consistent with the finding of generally linear or supra-linear CRFs in individual studies. Pooled RRs were almost identical for studies conducted in North America, Europe and Western Pacific

제3항은 기존 승인 쉽게에도 병용RR1.27을20%쯤으로 유지해 초기지적이 미해결입니다. A에게 약27%/약30% exactSHA후속과 사업 내 본인부담 환급 범위 명시를 요청했습니다. 제20항 r3는 쉽게에서 장기사망8%를 제거하고 본문에 진단후 장기경과라는 구분을 보존했으며 즉시응급 조건을 추가해 해당 설계/안전 지적을 해결합니다. 국내 진료비 세부범위 미확인은 그대로입니다. 아직 전체42항 closure·통합 승인·정식KR-FIT가 아닙니다.

## 배치8 독립 검토

검토 UTC 2026-10-18T14:35:18.120668+00:00. **제5·17항 fullentry approve**, **제5항 별도 쉽게 style approve**. manifest SHA256 `91a5e6ef13879ebe99289af14f58c8ad1cc3b4fc381d0473b0b83106740229ee`. frozen SHA와 strict→changes 전체바이트 재현을 검증했습니다.

- 제5항: 시험에서 계획한 행동지원4~8회/총30분초과~300분미만을 국내서비스 이용시간과 구분했습니다. 원초록52시험19,488명·최소6개월금연RR1.83/의료기관43시험1.97, 전화상담14시험32,484명RR1.38/65시험41,233명RR1.25와 중간확실성이 일치합니다. 공식 서비스 RAW에서 무료/17센터/4박5일/6개월9회이상을 실제 확인했고 공단사업 본인부담금 범위로 환급을 한정했습니다.
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/publication-entry-proposal.md` / SHA256 `e72d40f94747fb2628bd801bb8a4b2a284c8bb6509431430c4bba79690b9fa9f`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/publication-entry-changes.json` / SHA256 `c36008664aa543fad8fbf9f7bbaa48af5808b7100282890086a3e51e52d24bf8`
  - 한계: Primary review full texts not read; cached primary abstracts read independently. Official page/raw initial fetch timestamps unavailable; raw hashes and current reopening time recorded. The domestic service description does not guarantee identical effects to foreign trials; existing 비고 limitations retained.

- 제17항: 각사분위 비교 HR2.63/1.96의 노출을 총좌식/평균연속좌식으로 나눴습니다. 백만명분석의 최소활동+좌식>8시간HR1.59와 최고활동층>8시간HR1.04를 다른비교로 명시하고60~75분중강도는 최고활동층의 해석량임을 보존했습니다. TV시청3시간/최고활동층5시간을 총좌식과 구분하고 관찰결과가 개인위험소거 보장이 아님을 밝힙니다.
  - proposal: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-017-5e24/publication-entry-proposal.md` / SHA256 `8f5a54f45df14bbed85fbc73a041872a7fa738ad2652aff5e2fae298d0677628`
  - changes: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-017-5e24/publication-entry-changes.json` / SHA256 `72326a5fc21dc2a1f9a0dd2d73b1b956e0dacd2208d233f8c0dc3088912c7363`
  - 한계: 원초록 캐시만 읽었으며 전체 논문·부록을 검증하지 않았습니다. Ekelund 메타데이터에 Erratum DOI 10.1016/S0140-6736(16)31677-4가 있으나 정정문 내용은 열람하지 않았습니다. 수치에 대한 정정 여부는 추가 검토가 필요합니다.

- 제5항 style: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/publication-style-corrections.json` / SHA256 `a7460a9e9e3e848dd500d67de317f9f6c17c424668a3d33a09297c3f21d8c758`
  - before: 약과 정기 상담은 함께 이용하세요. 약과 전문가 상담을 병행한 금연 성공률은 일반 진료나 짧은 조언만 받은 경우의 1.83배입니다. 상담사가 먼저 건 전화 상담을 받은 경우는 약 25% 높았습니다.
  - after: 약과 정기 상담은 함께 이용하세요. 약과 전문가 상담을 병행한 금연 성공률은 1.83배입니다. 비교 대상은 일반 진료나 짧은 조언만 받은 경우입니다. 상담사가 먼저 건 전화 상담을 받은 경우는 약 25% 높았습니다.
  - 순서: fullentry 제5항 교체 후, 해당 before 한번을 치환. 기존 editorial 쉽게는 따로 적용하지 않음.
  - 예상 최종항목 SHA256 `ea726d7d04a7d01ea321992997fcd4818706e8e7eb0dd2f62c5b1670988db285`

- 실제근거 <https://doi.org/10.1002/14651858.CD008286.pub3>; raw `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/source-evidence/7dcf6573dc7c0df04b17.json`; SHA256 `db179f11877c10aa754474325532689faa163d6807dbfafbb6225c080cc286bd`; 기존 원초록 캐시 실제 재열람. 새HTTP/전체원문 아님.
  - 발췌: Behavioural support was typically provided by specialists in cessation counselling, who offered between four and eight contact sessions. The planned maximum duration of contact was typically more than 30 minutes but less than 300 minutes.

- 실제근거 <https://doi.org/10.1002/14651858.CD002850.pub4>; raw `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/source-evidence/d6469feb0a30d8a5cd20.json`; SHA256 `81fe29da624e8a2699637347fad2668f69be73ed7a342155c8fbee3101fe4d2f`; 기존 원초록 캐시 실제 재열람. 새HTTP/전체원문 아님.
  - 발췌: Among trials including smokers who contacted helplines (32,484 participants), quit rates were higher for smokers receiving multiple sessions of proactive counselling (risk ratio (RR) 1.38, 95% confidence interval (CI) 1.19 to 1.61; 14 trials, 32,484 participants; I<sup>2</sup> = 72%) compared with a control condition providing self-help materials or brief counselling in a single call. Due to the substantial unexplained heterogeneity between studies, we downgraded the certainty of the evidence to moderate.

- 실제근거 <https://www.nosmokeguide.go.kr/helpness/center>; raw `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/source-evidence/center.body`; SHA256 `7ee90ab102da1d79058c010adcf46adacabda07c51c087f95f194b0c7eb81579`; 보존된 공식기관 HTML 또는 PDF 추출문 해당서비스/사업조건 실제 재열람. 새HTTP아님; 최초수집시각 미기록.
  - 발췌: 4박 5일 간 대상자 집중 금연치료

- 실제근거 <https://www.nosmokeguide.go.kr/helpness/counsel>; raw `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/source-evidence/counsel.body`; SHA256 `1531c5cd72cff32e045de7a6f4568c9cc4c688d894802c7769573c338319b328`; 보존된 공식기관 HTML 또는 PDF 추출문 해당서비스/사업조건 실제 재열람. 새HTTP아님; 최초수집시각 미기록.
  - 발췌: 이용방법 1544-9030 직접전화, 카카오톡 채팅상담

- 실제근거 <https://www.nhis.or.kr/static/html/wbma/c/smkInfo_01.pdf>; raw `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/source-evidence/nhis-smk.body`; SHA256 `486e41ab5a3fe46ffc39c650c6d9ddefee7ae8b015a0a96fda38795ec422ff3a`; 보존된 공식기관 HTML 또는 PDF 추출문 해당서비스/사업조건 실제 재열람. 새HTTP아님; 최초수집시각 미기록.
  - 발췌: (3~6회) 본인부담 없음

- 실제근거 <https://doi.org/10.7326/m17-0212>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e068967c4a851dd421bf.json`; SHA256 `89e1cc99b7756659a5add3743d000870d75bfcae2649a53b129232b26ba5e652`; 기존 원초록 캐시 실제 재열람. 새HTTP/전체원문 아님.
  - 발췌: <h4>Background</h4>Excessive sedentary time is ubiquitous in Western societies. Previous studies have relied on self-reporting to evaluate the total volume of sedentary time as a prognostic risk factor for mortality and have not examined whether the manner in which sedentary time is accrued (in short or long bouts) carries prognostic relevance.<h4>Objective</h4>To examine the association between objectively measured sedentary behavior (its total volume and accrual in prolonged, uninterrupted bouts) and all-cause mortality.<h4>Design</h4>Prospective cohort study.<h4>Setting</h4>Contiguous United States.<h4>Participants</h4>7985 black and white adults aged 45 years or older.<h4>Measurements</h4>Sedentary time was measured using a hip-mounted accelerometer. Prolonged, uninterrupted sedentariness was expressed as mean sedentary bout length. Hazard ratios (HRs) were calculated comparing quartiles 2 through 4 to quartile 1 for each exposure (quartile cut points: 689.7, 746.5, and 799.4 min/d for total sedentary time; 7.7, 9.6, and 12.4 min/bout for sedentary bout duration) in models that included moderate to vigorous physical activity.<h4>Results</h4>Over a median follow-up of 4.0 years, 340 participants died. In multivariable-adjusted models, greater total sedentary time (HR, 1.22 [95% CI, 0.74 to 2.02]; HR, 1.61 [CI, 0.99 to 2.63]; and HR, 2.63 [CI, 1.60 to 4.30]; P for trend < 0.001) and longer sedentary bout duration (HR, 1.03 [CI, 0.67 to 1.60]; HR, 1.22 [CI, 0.80 to 1.85]; and HR, 1.96 [CI, 1.31 to 2.93]; P for trend < 0.001) were both associated with a higher risk for all-cause mortality. Evaluation of their joint association showed that participants classified as high for both sedentary characteristics (high sedentary time [≥12.5 h/d] and high bout duration [≥10 min/bout]) had the greatest risk for death.<h4>Limitation</h4>Participants may not be representative of the general U.S. population.<h4>Conclusion</h4>Both the total volume of sedentary time and its accrual in prolonged, uninterrupted bouts are associated with all-cause mortality, suggesting that physical activity guidelines should target reducing and interrupting sedentary time to reduce risk for deat

- 실제근거 <https://doi.org/10.1016/s0140-6736(16)30370-1>; raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e522d333f433d51fb64d.json`; SHA256 `ac3f7e3ebfa1388411fb6491d9e1a39cd263df03d329c88de532384b43a04606`; 기존 원초록 캐시 실제 재열람. 새HTTP/전체원문 아님.
  - 발췌: <h4>Background</h4>High amounts of sedentary behaviour have been associated with increased risks of several chronic conditions and mortality. However, it is unclear whether physical activity attenuates or even eliminates the detrimental effects of prolonged sitting. We examined the associations of sedentary behaviour and physical activity with all-cause mortality.<h4>Methods</h4>We did a systematic review, searching six databases (PubMed, PsycINFO, Embase, Web of Science, Sport Discus, and Scopus) from database inception until October, 2015, for prospective cohort studies that had individual level exposure and outcome data, provided data on both daily sitting or TV-viewing time and physical activity, and reported effect estimates for all-cause mortality, cardiovascular disease mortality, or breast, colon, and colorectal cancer mortality. We included data from 16 studies, of which 14 were identified through a systematic review and two were additional unpublished studies where pertinent data were available. All study data were analysed according to a harmonised protocol, which categorised reported daily sitting time and TV-viewing time into four standardised groups each, and physical activity into quartiles (in metabolic equivalent of task [MET]-hours per week). We then combined data across all studies to analyse the association of daily sitting time and physical activity with all-cause mortality, and estimated summary hazard ratios using Cox regression. We repeated these analyses using TV-viewing time instead of daily sitting time.<h4>Findings</h4>Of the 16 studies included in the meta-analysis, 13 studies provided data on sitting time and all-cause mortality. These studies included 1 005 791 individuals who were followed up for 2-18·1 years, during which 84 609 (8·4%) died. Compared with the referent group (ie, those sitting <4 h/day and in the most active quartile [>35·5 MET-h per week]), mortality rates during follow-up were 12-59% higher in the two lowest quartiles of physical activity (from HR=1·12, 95% CI 1·08-1·16, for the second lowest quartile of physical activity [<16 MET-h per week] and sitting <4 h/day; to HR=1·59, 1·52-1·66, for the lowest quartile o

제17항 연결 정정 DOI10.1016/S0140-6736(16)31677-4를 새 HTTPS EuropePMC 서지조회(HTTP200)로 찾았습니다. raw `/tmp/ch02-e17-correction.json`, SHA256 `568194e8c3bc1ae7338c6f005c8961df261a62a4e6aa877767871093d2f8fc53`, 요청UTC 2026-10-18T14:34:23.514917+00:00~2026-10-18T14:34:24.072424+00:00. 이는 서지·정정관계 확인뿐이며 원문 내용이 아닙니다. 출판사 HTTPS HTML/PDF 직접열람은 터널403으로 실패했고 `/tmp/ch02-e17-correction-fetch.json`에 실제 URL/시각/실패기록을 남겼습니다. 정정이 무관하다거나 수치검증이 끝났다고 주장하지 않습니다. 전체절 통합승인/정식KR-FIT는 별도입니다.

## 배치9 제3항 r1 독립 검토

**revise**. 검토UTC 2026-10-18T14:36:25.451640+00:00. proposal `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-003-4cea/publication-entry-proposal.md` SHA256 `311120d29ea648003e81945f359ba9f1751e10e739ff8c7cac17d902b279bfda`; changes `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-003-4cea/publication-entry-changes.json` SHA256 `a1ee33773fb38f0d25ef0ae8596df99efad9e3c4ec031c4adbdd69750454a3dc`. 27%/단일제형비교/최소6개월endpoint/공단사업본인부담환급·56/84일은실제원자료와일치.그러나제목은일반약물전체의성공률이두배넘게오른다고읽힙니다.2.32는바레니클린대위약에한정되며NRT1.55/병용1.27과혼동되므로약제·비교조건을명시하거나숫자를제거해야합니다.

원문 XML PMC10169257의 바레니클린 placebo2.32와 no-medication1.57 구별, PMC10278922의 combination versus single form1.27(일부 gum/inhaler등단독비교포함)을 실제 재열람했습니다. 보존된공단PDF/추출문에서사업이수·환급범위조건을재확인했습니다. RAW경로/SHA/URL은JSON이력의sources에각각고정했으며새HTTP아닙니다.

## 최종 고정안 지도와 42항 canonical finding closure

검토UTC 2026-10-18T14:39:22.731829+00:00. 제3항 r2 **approve**: proposal `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-003-4cea/publication-entry-proposal-r2.md` SHA256 `14a26ad6cd5220fd5eb8f3b06e43a16cf3336ec822419310e4728dbe07c011fa`; changes `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-003-4cea/publication-entry-changes-r2.json` SHA256 `c5f1b855a21bd364644b7403d549875248f7dff0bae10d0b2822b4b7cbe41c80`. 제목의 무범위 두배 표현만 삭제했으며 첫줄외 모든 바이트가 r1과 같습니다. 기존 r1 revise와 초기 쉽게 승인 이력은 보존합니다.

**정확 고정안의 기계적 통합만 승인합니다. 전체 절 출판 승인·정식KR-FIT·미확인 근거 해소가 아닙니다.** latest fullentry41개 + 제20항 쉽게r3 한필드 + 제5·40항 style + 도입부11span입니다. 전체42개 초기 finding와 후속 수정안의 연결을 JSON `canonical_finding_closure`에 빠짐없이 기록했습니다.

### 적용 순서와 중복 방지

1. 아래41개 latest fullentry를 해당 번호 전체에 한 번 교체합니다. 과거 쉽게/제목 제안은 이41항에 다시 적용하지 않습니다.
2. 제20항은 strict SHA guard 아래 쉽게r3 한필드만 적용합니다.
3. 제5·40항은 fullentry 후 승인된 쉽게 문장분할을 각 한 번 적용합니다.
4. 도입부11span 전체안을 사용합니다. 제40항 옛 단독 intro span은 이 안에 포함되므로 다시 적용하지 않습니다. helper DOI 주석을 보존하고 최종 전체 해시는 새로 계산합니다.
5. tail은 SHA `51db88f49130245dca7edc3001f2f71de26b648e1b3945b0dfb58aeeeb2733a0` 그대로 유지합니다. 제40항 국내현행독소기준 미확인 TODO는 해소되지 않았습니다. exact 최종 후보를 fresh 정식KR-FIT에서 검토해야 합니다.

### latest fullentry exact map

|항|proposal 경로 / SHA256|changes 경로 / SHA256|
|---|---|---|
|1|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-001-1c88/publication-entry-proposal.md` / `321498bb8e6b8851d7457f526a165a8a0b8ef2b3436362fed5b03cb25ec6e58a`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-001-1c88/publication-entry-changes.json` / `835efec6b91698f5836337c8c1199fe094d3f0fda9f0198b86ce9150926c9da8`|
|2|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-002-4b65/publication-entry-proposal.md` / `5e44f647b991ececbc55b1e669e3c8560a5a260adf51ec0753cf0ec783ffa0a1`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-002-4b65/publication-entry-changes.json` / `59d90e41a0bb31328103c6a5d7e130452b78f317fd4f7cc6d6cbe7135e5f17ab`|
|3|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-003-4cea/publication-entry-proposal-r2.md` / `14a26ad6cd5220fd5eb8f3b06e43a16cf3336ec822419310e4728dbe07c011fa`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-003-4cea/publication-entry-changes-r2.json` / `c5f1b855a21bd364644b7403d549875248f7dff0bae10d0b2822b4b7cbe41c80`|
|4|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-004-87e1/publication-entry-proposal-r2.md` / `e87a1c82e8c06fe72692141df370194afccdae2e6b8c48c8f01261fca9f3812b`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-004-87e1/publication-entry-changes-r2.json` / `fda0a14da0b2871adbe6a9ceda8189eccd04e238e48f36345ae8290891331010`|
|5|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/publication-entry-proposal.md` / `e72d40f94747fb2628bd801bb8a4b2a284c8bb6509431430c4bba79690b9fa9f`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/publication-entry-changes.json` / `c36008664aa543fad8fbf9f7bbaa48af5808b7100282890086a3e51e52d24bf8`|
|6|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-006-8fb2/publication-entry-proposal.md` / `c4c5f315f9efe395e90677b854948687d2e66d19490f0a992f58e1450dee8ece`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-006-8fb2/publication-entry-changes.json` / `977f11bfc8533974bc8eae6b60bc2a6ff2b07859586f38af36dfa77205a5bd9c`|
|7|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-007-a8ec/publication-entry-proposal.md` / `379ff6458fb73f6d3d27d62a37079b3ba7184f0e9552e2ee4137b4f4a0acc8eb`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-007-a8ec/publication-entry-changes.json` / `b5d934c1dd8e57293eef2fbff480e6905d057471e79bc26a7dad1f1e06ac9aa0`|
|8|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-008-5b8c/publication-entry-proposal.md` / `c085fa447776ed3f497fc56fd14ab8d767195a368540ae7e6915afc06f44e3eb`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-008-5b8c/publication-entry-changes.json` / `e2dd9a7ba6ac3ddf153db03d0f57ea092b1578d3e4e973605102ed104a335dff`|
|9|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-009-bdd7/publication-entry-proposal.md` / `7dad227071a15f0f727e2aadf52a0403519300d08bec42fe2ee53759daeaf479`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-009-bdd7/publication-entry-changes.json` / `a08fcb254020247085128d5068ccf11aaa7ced1cc15e5ce562f14be7c7857fdd`|
|10|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-010-2bba/publication-entry-proposal.md` / `e9d1fd2559055777dae3ca5e74cc4cb1da87673410832347e43fe08c0816f211`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-010-2bba/publication-entry-changes.json` / `b3c32fcc08a49ce90bbfb7eb4900767aa752760c4a7c18322c4f78a78644015d`|
|11|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/publication-entry-proposal.md` / `732c9758957cda416b9d39f7592113351ac6145ab86c468bcbce6a4f51dc214d`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/publication-entry-changes.json` / `1ae5b2883a8a9a558a609c07735b5fb53112bb068e57e19066c47780a3907409`|
|12|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-012-3296/publication-entry-proposal.md` / `bc01318e15559bd2d482d947d25e510894ad4971dd08e0a59769689960517129`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-012-3296/publication-entry-changes.json` / `e47f2618f9a4ee1ca383a11bc31f79dac6e86e05ddc5841c59e56c4d807e5360`|
|13|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-013-0d52/publication-entry-proposal.md` / `9639cea2bd2caa9bc28de840c4a2fad50f490357979aa7acae24c1190969e1b5`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-013-0d52/publication-entry-changes.json` / `bbc4b912c41f7a52b1e7141a407274b9f1b9380fd2127d87be272c4377b67ca8`|
|14|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/publication-entry-proposal-r2.md` / `9585db5f13dc584f87b8f1d3a6095ea73bf86b8e94c2c742712ee2f0894bd069`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-014-2e30/publication-entry-changes-r2.json` / `c6c588e231321735e35917457e2a6ebdf141c671348f6972828d660569adb06a`|
|15|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-015-901a/publication-entry-proposal.md` / `d559da9d859da3f4c42a4221707ff3bab94580c3498165c6f0124cf37025664c`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-015-901a/publication-entry-changes.json` / `2a639a7ab39813cd9c31d55705b74d9321441444343dacf7dde4b7f5e6260705`|
|16|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/publication-entry-proposal-r2.md` / `2bb09014b52824face59aa70d32383d203137d55a426b25ac518a388d601a97b`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-016-71f0/publication-entry-changes-r2.json` / `99111fcb5275354a3c8167be0ea8b787a28af7e4794c53bb55a6388573e35383`|
|17|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-017-5e24/publication-entry-proposal.md` / `8f5a54f45df14bbed85fbc73a041872a7fa738ad2652aff5e2fae298d0677628`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-017-5e24/publication-entry-changes.json` / `72326a5fc21dc2a1f9a0dd2d73b1b956e0dacd2208d233f8c0dc3088912c7363`|
|18|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-018-d3c8/publication-entry-proposal.md` / `cd4bcd0c91516919908d5013c0e48bb4a7a74229aa93ef21b7c80ae9ea8b9d96`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-018-d3c8/publication-entry-changes.json` / `a5bb1dabe4d53f988db52244e22d666b2a8075e11bac5e413d3f6f96b225b36f`|
|19|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-019-e80d/publication-entry-proposal-r2.md` / `b2a963b66f25a48485911b66cdc006d66a51a94c123f5e7fcf05e9ddcfd437ba`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-019-e80d/publication-entry-changes-r2.json` / `b14b238fc3747f41bb9473f72f871baf758a9f154edd7af33c84d181b8c4663b`|
|21|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-021-e337/publication-entry-proposal.md` / `4c16dc23d46a2e4ceccfeacd4af00faa05c5b44b80ca71a0e1c60f93a1fc15a1`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-021-e337/publication-entry-changes.json` / `f5274f38312f2d9f28405b9e8c72cfdd3b1cba61e148cfb410fc041f77e370ef`|
|22|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-022-1d39/publication-entry-proposal.md` / `176145c0e7e4737813aeb5f02b1a73c78a2234cd491680ad892bc866d3b0c37d`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-022-1d39/publication-entry-changes.json` / `ea471271f7252f62e12688c781b554ad9ee20daf998d50e8014505b898cc3286`|
|23|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-023-7dfd/publication-entry-proposal.md` / `19d9a03435718e4efccf7714c1dee0743f2b59e14ed96f0ef8bb561eb8becabf`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-023-7dfd/publication-entry-changes.json` / `fdd38064b700a689320f03b04f266f59c353763eb1bb53bb618ead58ddb77db3`|
|24|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-024-c727/publication-entry-proposal.md` / `f2cd0aeff8995ac5d5681535156539b47f1d0eb3fbc06255c7d73ac285387b08`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-024-c727/publication-entry-changes.json` / `f9bd91803a30cbe46cc959916866ae47b2d07aacd78b55a81f486a03f239554f`|
|25|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-025-1523/publication-entry-proposal-r2.md` / `c62bce7810d622172287eb78d74962441b4029d742a6a64675540a64ef531592`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-025-1523/publication-entry-changes-r2.json` / `c6838a1fb5b29f0176958a99d9dc49a2f93d09e28c45d741af41b38474f09d73`|
|26|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-026-c168/publication-entry-proposal-r2.md` / `f249d914ac9a2a7f73e358cf6b6f18915026edc4e9b5a263aa5604a840b51410`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-026-c168/publication-entry-changes-r2.json` / `1a7793885db6f0aebfb93d8c69183d138da49a7ae9f56c3a3da826d9a95cfa07`|
|27|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-027-f02c/publication-entry-proposal.md` / `649540fae57294f96394b16479d1b3472124b91146a003d788c5111fa56e0fcf`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-027-f02c/publication-entry-changes.json` / `1045dd7290b28cb2d381e8a9081d98c99f95cfd954f6af92096bd6f8a7f083aa`|
|28|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/publication-entry-proposal-r2.md` / `441857b58bd3091d1b7fefe3918361ee580b1016cc144636aef706f12af6a113`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-028-ff01/publication-entry-changes-r2.json` / `8e2081a22ff7937ae2388d76f79c11086edb92c96fb179de9fe322844d968cc4`|
|29|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-029-255c/publication-entry-proposal.md` / `d1dfc6d1be584d79a51583d4f83913b7ee31ff929c9989773935af477cc8e292`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-029-255c/publication-entry-changes.json` / `bcda13cebc7b5b0834e5fc9a4d73e4cef44661f3ec37b0b7099558845254c99b`|
|30|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-030-4d4a/publication-entry-proposal.md` / `f68f58d4a8673cdeb7837a4d237df408016e4a1d1a95674abba94c664a445891`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-030-4d4a/publication-entry-changes.json` / `07b8a5912a07976c51c4b4f1e12063a3a975f3d5aaa69791369a9f6bec9b6a6c`|
|31|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-031-7734/publication-entry-proposal.md` / `22aa1a574c1bd5718a803ceec52ba9985e6dda8e4baa202f021aa1c53b6e3ab7`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-031-7734/publication-entry-changes.json` / `6f93322ad013cdee80a863e767f17bfa34075a1eb6155757f1616c8e5a93cc75`|
|32|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-032-d167/publication-entry-proposal.md` / `d3f3cc50ea0982a6f273ee780efc8fdb4949f1f4e0a946712423dfb060f0c603`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-032-d167/publication-entry-changes.json` / `9b0b6ac6bb3f1af05cda89608e88272f1f308329c8779c5df316117e4ce4ec92`|
|33|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-033-866b/publication-entry-proposal-r2.md` / `0efc29aa9c2efaa27768057c55d0a489e46d6ed891e9834762c99ca831d540e9`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-033-866b/publication-entry-changes-r2.json` / `94b4abdcbb514b7d49d8526c925e474c4d32e16904131e19b4c514ec777f8a16`|
|34|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-034-cb01/publication-entry-proposal.md` / `39ecad1caee8a72af982c7e297156cc3f305b16ecea24da39e27260ee2488598`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-034-cb01/publication-entry-changes.json` / `921537f091696dd05bbff66423d8a022381d513b3aa68520ea4c3d009f8c8558`|
|35|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-035-64a3/publication-entry-proposal.md` / `f358876385673f5162b9ce01a1888c4ad1396f701dcc4a442af5a9803c0216bf`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-035-64a3/publication-entry-changes.json` / `c0056496117e767bb1d12f513158074d338aa9db6ac6007acc193dda16f4db9c`|
|36|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-036-3a64/publication-entry-proposal.md` / `0634fb43ab776e6e3fcf981d1b0bd36171838fe41b96941f2a6449111cae01a0`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-036-3a64/publication-entry-changes.json` / `e50858dedf3d6d9edcabd9d00e51d172ae7caa934ae8dc46411b6f816a621073`|
|37|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/publication-entry-proposal-r2.md` / `26fb0835ad22a247ab764fdb0d9b34249ae34120deb7dbecf93dc3c9b585873f`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-037-bf31/publication-entry-changes-r2.json` / `661af6ea32205979762ac44cd6cdcf8168eed90198394415dc9824729418f4dd`|
|38|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-038-17c4/publication-entry-proposal.md` / `cf0b2721e241acfb095dd6f9eb4d673910da33b416cd667a622c3bc917778e26`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-038-17c4/publication-entry-changes.json` / `3e233701a0deba602f5a80dade90eee276a3c0aa9c35a3f892da91b3febe93ec`|
|39|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-039-006e/publication-entry-proposal-r2.md` / `7449125c9f9a2e9a3e9e15d8af0da38215998cf016b4b6eb2ed638da0487f7cf`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-039-006e/publication-entry-changes-r2.json` / `c88890f0cb0b4b08fe837a4897e86d30d533baee1df9f351ed3eecb9dfd75602`|
|40|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-entry-proposal.md` / `363f3b18d23cc346e2e72c23112c28fa1952ec5ab0a2da428604b93d31eee964`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-entry-changes.json` / `81d4c801e5bb6b1d9ca4f3fadbdc5268a3e740e7b2b763faaee0ccd619d3727b`|
|41|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-041-488c/publication-entry-proposal.md` / `b5b54663ba886d168af9c8269a137d4b8279eb6cadab79285b5ce99ba1e242d0`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-041-488c/publication-entry-changes.json` / `2a4bace660d9199ba93a4032ac460d2919b01e7a57df423e8bf82eec79223f14`|
|42|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-042-69a7/publication-entry-proposal.md` / `db7c25aa3bb2a73c4f123dda28640f7505fba8bd0bcfa857d0e4decccafc535d`|`/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-042-69a7/publication-entry-changes.json` / `fd857bb0522f0e49ad60d87b4336077d867f754bde7e281f27351962e07a60f1`|

### 별도 field/style exact map

- 제20항 쉽게 / order 2: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-020-e74f/editorial-proposal-r3.json` SHA256 `2e9daf0df5d2719deaa1e17b958cda00373f288bca40a708d6f3e8cc1c40d9d6`
  - before: 매일 많이 마시다가 갑자기 끊으면 금단 증상이 나타납니다. 가벼운 증상으로는 손 떨림과 땀이 있습니다. 가슴이 두근거리거나 잠이 안 오기도 합니다. 심하면 경련이나 진전섬망이 나타납니다. 진전섬망은 생명을 위협하는 급성 질환입니다. 노르웨이에서 3만여 명을 추적했습니다. 진전섬망을 앓았던 집단에서는 이후 해마다 8%가 사망했습니다. 술을 끊고 싶으면 먼저 병원에 가세요. 하루에 얼마나 마시는지 말하세요.
  - after: 매일 많이 마시다 갑자기 끊거나 크게 줄이면 손 떨림 등이 생길 수 있습니다. 끊으려면 병원 도움을 받으세요. 온몸이 떨리거나 심하게 혼란스러우면 생명이 위험할 수 있습니다. 바로 응급진료를 받으세요.
  - 예상 항목 SHA256 `50ca8ca70d49ff8f8dfd0472a5f253c81d9511a34695e41729b993e0d2c82a42`

- 제5항 쉽게 / order 3: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-005-6d11/publication-style-corrections.json` SHA256 `a7460a9e9e3e848dd500d67de317f9f6c17c424668a3d33a09297c3f21d8c758`
  - before: 약과 정기 상담은 함께 이용하세요. 약과 전문가 상담을 병행한 금연 성공률은 일반 진료나 짧은 조언만 받은 경우의 1.83배입니다. 상담사가 먼저 건 전화 상담을 받은 경우는 약 25% 높았습니다.
  - after: 약과 정기 상담은 함께 이용하세요. 약과 전문가 상담을 병행한 금연 성공률은 1.83배입니다. 비교 대상은 일반 진료나 짧은 조언만 받은 경우입니다. 상담사가 먼저 건 전화 상담을 받은 경우는 약 25% 높았습니다.
  - 예상 항목 SHA256 `ea726d7d04a7d01ea321992997fcd4818706e8e7eb0dd2f62c5b1670988db285`

- 제40항 쉽게 / order 3: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-040-ec55/publication-style-corrections.json` SHA256 `626cf5577fa1a637054e934c7039b37d0fc36bf7e57e44701dde6b4f73fc6a4f`
  - before: 중국 광저우에서 자가압착 땅콩기름 작업장 관리 뒤 간 기능 이상이 약 35% 낮게 나타났습니다. 간암·사망을 조사한 결과는 아닙니다. 한국에 그대로 적용하기는 어렵습니다.
  - after: 중국 광저우에서 자가압착 땅콩기름 작업장을 관리했습니다. 관리 뒤 간 기능 이상이 약 35% 낮게 나타났습니다. 간암·사망을 조사한 결과는 아닙니다. 한국에 그대로 적용하기는 어렵습니다.
  - 예상 항목 SHA256 `a47e5a257b8b1f19164e1e71fcbe34eda4333dfcc6e359ac8779fc441e69e779`

### 실제 DOI 증감

균형괄호 DOI 추출기를 현재 helper에서 그대로 AST로 분리해 메모리상 합성안에 적용했습니다. helper 실행/공개본문 변경/최종 후보 SHA 생성은 하지 않았습니다. add4, drop0입니다.

- add 제4항 `10.1002/14651858.cd013183.pub2` / 승인 proposal SHA256 `e87a1c82e8c06fe72692141df370194afccdae2e6b8c48c8f01261fca9f3812b`

- add 제35항 `10.1007/s00394-018-1692-3` / 승인 proposal SHA256 `f358876385673f5162b9ce01a1888c4ad1396f701dcc4a442af5a9803c0216bf`

- add 제32항 `10.1136/bmj.j4849` / 승인 proposal SHA256 `d3f3cc50ea0982a6f273ee780efc8fdb4949f1f4e0a946712423dfb060f0c603`

- add 제26항 `10.1136/bmj.k194` / 승인 proposal SHA256 `f249d914ac9a2a7f73e358cf6b6f18915026edc4e9b5a263aa5604a840b51410`

### 초기42 finding의 해결·범위제한·보존한계

각 초기 원문 finding는 JSON에 원문 그대로 보존하고 정확 제안 SHA에 연결했습니다. 아래 한계는 승인 범위를 넓히지 않으며, 접근 실패는 근거 무효와 구별합니다.

|항|수정·범위제한 승인 / 남아 있는 확인 한계|
|---|---|
|1|국내담뱃값·금단기간 새검증아님.|
|2|집노출 대 비집노출을 실내 대 실외의 독립인과효과로 확정하지 않음.|
|3|기존공단PDF 재열람; 실시간정책현행성·임상모든문장 재검증아님.|
|4|2016개별시험과2019종합의 범위를 구별. NRT시험조건을 일괄자가처방으로 확대하지 않음.|
|5|국내서비스가 외국시험과 동일효과 보장아님. 원리뷰전체본문 미열람.|
|6|법12조직접열람/정의공식발표 범위. 모든광고·유통세부조항/장기안전검증아님.|
|7|단음료/제로 각각 관찰비교이며 직접교체효과 미확인.|
|8|암원자료 별도미열람; 암수치/용량기간/중단효과를확정하지않도록범위축소.|
|9|PURE연결정정본문미열람; 국내가격/맛·건강한젊은층/신장질환안전성 미확인.|
|10|예방목적단독스케일링과치주치료급여구분; 모든치과행위비용확인아님.|
|11|국내활동지침첨부해당권고·시간비용환산·Banach정정문미열람.|
|12|처방약마다 복용횟수다름; 모든개인의목표혈압/LDL처방을정한것아님.|
|13|역인과가능성·다른짧은수면정의구분; 모든사람에게7시간필수량보장아님.|
|14|실제현재출판사결과HR.44/토론59%차이고지; 국내코트비미확인/주3회45분최적량미확인.|
|15|비운동인과운동인별분석구분; 관찰활동을강제개입효과로확정하지않음.|
|16|사망약15%로결과귀속수정; 높은운동량효과/한국빈도지침과시간량구분.|
|17|정정DOI서지조회성공/출판사HTTPS터널403;정정내용미확인. 원초록범위.|
|18|식품별serving그램 원문미열람을한국식당환산불가고지로제한. NutriRECS연결정정미열람.|
|19|실제GBD초록week/본문day차이고지;두연결정정은다른내용이고현재XML에도차이존재.현행전연령지침확정아님.|
|20|급성자가금주치사율아닌진단후장기경과. 국내진료/입원비세부급여범위 미확인.|
|21|처방·아편사전확인보존;모든심리사회중재부록/국내수가검증아님.|
|22|조리법별비교미조사·국내가격미검증;열량주의보존.|
|23|독립섭취증가관찰HR를동량대체모형효과로해석하지않음.|
|24|통곡물식품중량과마른곡물/조리밥중량구분;절반교체로최대이득보장없음.|
|25|섭취조건별독소위험평가와미검출구분;섭취빈도를미검증처방으로쓰지않음.|
|26|bmj.k194정정이RR.83 CI.79–.88을해결.설탕크림효과상쇄/고정잔수처방근거아님.|
|27|Wang식품별serving전체원문미열람/국내권고량미확인;일괄400g환산삭제.|
|28|evidenceclass와GRADE구별;전세계반대연구부재주장삭제.관찰근거불확실성보존.|
|29|한국교체비/보급률미확인.인용PM연구는공기청정기사망시험이아님으로한정.|
|30|IARC65도초과분류확인;2~3분대기로안전보장아님.사례대조OR를확률비로변환금지.|
|31|관찰스웨덴여성수명을한국개인햇볕십수분처방/흡연상쇄로확정하지않음.|
|32|감량RCT부재오류수정;BMI관찰연관과비만성인개입/한국진단기준구별.|
|33|원문>4회관찰군과처방구별;위장관예외보존.|
|34|totaldairy>2servings와우유요거트잔수구분;추적9.1년mean/median독립미확인으로단정회피.|
|35|반대논문원초록범위;현행미국지침/개인안전량미확인.안전1개/위험3~4개삭제.|
|36|직접PDF0~2회기준확인;30분안전입욕처방삭제·고령/심혈관주의보존.|
|37|초록/본문의운동최적시간·질환낮잠조건차이고지;쉽게불확실30%삭제.모든하위리뷰부록미검증.|
|38|누적수면제한/다음첫밤보충조건구분;완전밤샘/주말보충/위험소거보장아님.|
|39|CVD본문1.05/초록4%차이고지;복합빛실험으로유일방법/구성요소필수성입증아님.연결정정검색비포괄.|
|40|국내아플라톡신현행기준미확인미해결.한국방앗간전면금지를포장/제조정보확인으로제한했으나검사합격보증아님.기존tailTODO유지.|
|41|ALA하위분모/부정맥가능성구별;국내조리유일일권장량미확인.|
|42|time-years/후드방법대표라벨/초록대본문연구수차이고지.모든부록·노출지표정정전수확인아님.|

미확인 국내 규격·가격·현행지침·연결정정 본문은 새 사실 확인으로 세지 않았습니다. 제26항 커피 CI는 실제 정정공지로 해결된 것으로 처리하고, 제14·19·37·39·42항의 실제 읽은 자료간 차이는 그 범위와 독자 고지를 유지했습니다. 최초 status/count/verdict는 초기감사 이력으로 남기며 새 통합허용을 과거판정의 소급승인으로 바꾸지 않습니다.

제3항 제목 incoming 참조 추가 재현: 원작성자목록6개의 실제 파일/정확행을 독립 대조했고 book-kr에서 제3항 참조를 rg로 재검색했습니다. 금연약/금연은약부터 주제와 제3항번호가 새 짧은제목에서도 보존됩니다. 참조파일은 수정하지 않았습니다.
