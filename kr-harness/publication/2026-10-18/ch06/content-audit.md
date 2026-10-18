# 제6절 독립 내용 감사

- 상태: `pending_candidate_review` · 검토일: 2026-10-18 · source raw SHA256: `5235f6ff782071306bf53638ad962e7e4a612fe09670eaba256517ebb6ae7dd3`
- 대상: source.md와 전29개 entry_snapshot.md. 29개 스냅샷을 실제 읽고 source 항목과 대조했으며 바깥 구분공백을 제외한 본문이 모두 일치했습니다. 순수윤문 후보가 아직 확정되지 않아 출판·편집 최종승인은 하지 않습니다. 정식 KR-FIT 승인이 아닙니다.
- 기존 의료캐시는 DOI 일치 메타데이터/초록을 읽었습니다. 원문 XML은 지정 섹션만 확인했습니다. 신규 HTTP200 challenge 페이지는 원문 열람으로 세지 않았습니다. 법령의 기본시행일과 개별조문/부칙 적용일을 동일시하지 않습니다.

## 전29항 판정

### 제1항 — 수정 권장/범위 유의
- warn / 비고: “수치는 0.86–0.998” → HR 0.92의 95% 신뢰구간임을 명시하세요. 암 사망도 HR 0.88와 신뢰구간을 구별하세요.
  근거: `10.1001/jama.2012.14641`. 짧은 대조문: “hazard ratio [HR], 0.92; 95% CI, 0.86-0.998”.

### 제2항 — 근거 범위 대조
VITAL/ASCEND/REDUCE-IT 대상·용량과 일반 건강기능식품 구분 유지. ASCEND는 심혈관병 없는 당뇨환자. 소비자원 페이지는 HTTP200이나 비용표 첨부수치 별도 대조 필요.

### 제3항 — 수정 필요
- block / 쉽게: “비타민 D가 부족하지 않은 사람이 5년간 보충했습니다.” → 결핍이 없는 사람만 모집한 시험으로 쓰지 마세요. 결핍 여부로 선별하지 않은 성인 대상 시험이며 결핍 치료에 일반화할 수 없다고 구분하세요.
  근거: `10.1016/S2213-8587(21)00345-4`. 짧은 대조문: “supplementing unscreened adults”.

### 제4항 — 수정 필요
- block / 쉽게: “시험 78건에 참여한 약 30만 명을 합쳐 분석했습니다. 항산화 보충제를 먹은 사람의 사망률이 오히려 조금 높았습니다.” → 전체 78시험의 무작위효과 합산은 유의하지 않음. 왜곡 위험이 낮은 56시험 분석에서 증가했다고 한정하세요. CARET는 베타카로틴+비타민 A 병용이라는 조건도 보존하세요.
  근거: `10.1002/14651858.CD007176.pub2`. 짧은 대조문: “78 trials, relative risk (RR) 1.02, 95% confidence interval (CI) 0.98 to 1.05”.

### 제5항 — 수정 필요
- block / 비고: “저자는 데이터를 사후에 뒤져 찾은 결과라고 적었습니다.” → 초록은 기저 통증중증도에 따른 층화 배정과 exploratory analyses를 명시합니다. 사후에 뒤졌다는 단정 대신 중등도~중증 통증 하위집단의 탐색적 결과라고 쓰세요. 초기 통증이 심했던 사람으로만 쓰면 중등도가 빠집니다. 통증 호전은 20% 이상 감소 기준입니다.
  근거: `10.1056/NEJMoa052771`. 짧은 대조문: “Assignment was stratified according to the severity of knee pain (mild [N=1229] vs. moderate to severe [N=354])”.

### 제6항 — 수정 권장/범위 유의
- warn / 쉽게: “한 번 감기에 반나절 정도 덜 아픈 셈입니다.” → 8%를 반나절로 바꾸려면 기준 감기기간이 필요합니다. 원문이 제공한 상대적 기간 단축만 쓰거나 계산의 가정을 밝히세요.
  근거: `10.1002/14651858.CD000980.pub4`. 짧은 대조문: “In adults the duration of colds was reduced by 8%”.

### 제7항 — 수정 필요
- block / 이득: “USPSTF는 증상 없는 여성을 평가했습니다.” → 고위험 유전성 암증후군이 알려지지 않은 무증상 여성이라는 적용대상을 덧붙이세요. 쉽게의 사망비율 조금 높음도 통계적으로 유의하지 않다는 점을 바로 붙이세요. 전신CT 결과를 PET-CT 직접시험처럼 쓰지 마세요.
  근거: `10.1001/jama.2017.21926`. 짧은 대조문: “applies to asymptomatic women who are not known to have a high-risk hereditary cancer syndrome”.

### 제8항 — 수정 필요
- block / 이득: “차이는 웨어러블 기기 착용 여부뿐이었습니다.” → 공통 행동중재 뒤 6개월째부터 표준군은 웹 자기기록, 기기군은 기기와 별도 웹도구를 사용한 비교라고 쓰세요. 비고의 손목 팔찌라는 특정 부위는 원문 전문 확인 전 일반 웨어러블 기기로 좁히세요.
  근거: `10.1001/jama.2016.12858`. 짧은 대조문: “At 6 months, participants randomized to the standard intervention group initiated self-monitoring ... using a website”.

### 제9항 — 수정 필요
- block / 비용: “같은 종류의 일반 식품 가격의 1~3배입니다.” → 한국 가격의 직접 근거가 없습니다. 한국 1차 가격조사 근거를 추가하거나 제품과 판매처에 따라 더 비싸다는 정성표현으로 고치세요. 유기농 여부는 건강효과를 바꾸지 않는다는 문장도 우월성이 입증되지 않았다는 수준으로 완화하세요.
  근거: `10.7326/0003-4819-157-5-201209040-00007`. 짧은 대조문: “Studies were heterogeneous and limited in number”.

### 제10항 — 수정 필요
- block / 이득: “한국에서는 경고 문구를 붙이는 대신 특정 표현을 금지합니다.” → 제8조는 부당광고 금지 규정이며 경고문구가 없거나 대체된다는 근거가 아닙니다. 해당 비교를 삭제하고 질병 예방·치료 또는 의약품 오인 광고 금지라고 정확히 쓰세요. 혈압 관련 모든 표현의 일률금지는 제8조 자체에서 도출되지 않으므로 암 예방처럼 명백한 질병표현만 예시로 남기세요.
  근거: `foodlaw-full`. 짧은 대조문: “질병의 예방ㆍ치료에 효능이 있는 것으로 인식할 우려가 있는 표시 또는 광고”.

### 제11항 — 수정 권장/범위 유의
- warn / 쉽게: “복용을 끊으면 장 안 세균은 원래대로 돌아갑니다.” → 지속적 변화 근거 부족을 모든 사람의 완전 원상복귀로 단정하지 마세요. 일부 면역반응·장 증상 개선을 보고한 고찰이므로 장건강 전체의 무효로 넓히지 마세요.
  근거: `10.1038/s41430-018-0135-9`. 짧은 대조문: “failed to support the ability of probiotics to cause persistent changes in gut microbiota”.

### 제12항 — 근거 범위 대조
냉수 샤워 시험은 중증 동반질환 없는18~65세; 30일 시행+60일 추적. 병가29%와 질병일수 무차이를 구분. 2025고찰 원문표와 즉시/1시간 면역 지표를 구별할 것.

### 제13항 — 근거 범위 대조
디톡스 고찰 당시 무작위시험 부재를 현재 영구무효로 단정하지 않음. 알칼리수 검토가 암예방/치료 대상임을 유지.

### 제14항 — 수정 권장/범위 유의
- warn / 이득: “'8x8'을 뒷받침하는 과학적 연구는 찾지 못했습니다.” → 2002년 고찰의 결론임을 명시하세요. 온화한 기후에서 주로 앉아서 지내는 건강한 성인 대상이라는 적용범위를 보존하세요.
  근거: `10.1152/ajpregu.00365.2002`. 짧은 대조문: “limited to healthy adults in a temperate climate leading a largely sedentary existence”.

### 제15항 — 근거 범위 대조
형법347·350 실제 XML 확인. 점술 자체 범죄화 금지. 사기/공갈의 개별 구성요건 충족은 수사·법원 판단. Forer/Carlson 전문 표 현재 독립재확인은 남음.

### 제16항 — 수정 필요
- block / 비고: “며칠 사이에 시신경이 손상될 수 있습니다.” → 급성 눈통증·충혈·시력저하·두통·구역은 즉시 응급진료로 명확히 쓰세요. 단순 화면피로와 강한 빛의 손상, 급성녹내장 메커니즘에는 현재 인용한 렌즈 고찰 외 직접 의학 근거가 필요합니다. 레이저/자외선/아크광을 모두 영구손상으로 일률 단정하지 마세요.
  근거: `10.1002/14651858.CD013244.pub2`. 짧은 대조문: “렌즈 고찰의 평가범위는 일반 화면시청의 영구손상·응급질환 기전이 아님”.

### 제17항 — 근거 범위 대조
대한적십자사 현재공식HTML에서 나이·체중·8주·과거1년5회·헌혈증서 본인부담 면제 직접 확인. FeAST는 말초동맥질환 환자 치료적 철감소; 일반헌혈 효능시험으로 넓히지 않음. 철결핍빈혈 여성의 체온시험을 빈혈 없는 철저장감소에 그대로 적용하지 않음.

### 제18항 — 근거 범위 대조
Cochrane 11/9/8개시험 분모와 사망건수 일치. NHIS/NRC 공식페이지의 검진대상·주기·항목 확인; 일반검진과 암검진 비용은 구분. 회사부담이면 모두 받으라는 단정은 유해추가검사까지 권하지 않도록 수정 권장.

### 제19항 — 수정 필요
- block / 쉽게: “발작을 한 번이라도 겪은 뒤에 치료를 시작하세요.” → 첫 발작이면 무조건 약을 시작한다는 뜻을 제거하세요. 통풍결절·통풍성 영상손상·잦은 발작은 치료권고, 첫 발작은 CKD3이상·요산>9·요로결석 등의 예외와 의사 판단으로 구분해야 합니다.
  근거: `10.1002/acr.24180`. 짧은 대조문: “Strong recommendations ... tophaceous gout, radiographic damage due to gout, or frequent gout flares”.
- block / 비고: “중국 한족 인구의 약 7.4%” → ACR 지침은 Han Chinese, Korean, Thai를 포함한 집단의 높은 유병빈도 7.4%를 서술합니다. 한국 빈도를 별도로 확인하지 못했다면 한족만의 값으로 확정하지 마세요. 알로푸리놀 전 HLA검사 권고는 동남아계(예:한족·한국인·태국인)와 아프리카계 미국인 대상 조건부 권고입니다. 전문접근이 실패해 이 수치의 정확집단 판정은 재검토 필요합니다.
  근거: `10.1002/acr.24180`. 짧은 대조문: “전문 XML500/PMC HTML challenge/BioC429: 초록은 HLA 빈도 미포함”.

### 제20항 — 수정 권장/범위 유의
- warn / 쉽게: “담낭 절제도 위험이 따릅니다. 약 1.5%에서 담관이 다칩니다.” → 스웨덴 2005~2010년 전국등록의 경미한 수술후 담즙누출까지 포함한 정의임을 한정하세요. 한국 현재수술의 일반발생률로 읽히지 않게 하세요. 무증상 정상담낭·정상담도와 총담관 결석 예외는 유지하세요.
  근거: `10.1136/bmj.e6457`. 짧은 대조문: “entire range of injury severities, from minor ductal lesions to complete transections”.

### 제21항 — 근거 범위 대조
시험은 재발성 옥살산칼슘결석·특발성 고칼슘뇨 남성120명. 정상칼슘+저염+저동물단백 복합중재의 RR0.49; 칼슘 단독효과로 쓰지 않음.

### 제22항 — 근거 범위 대조
표시광고법 현재XML 제3·7조 직접 확인. 구체 적발사례·1372 공식페이지는 추가확인 필요. Forer를 크리스털 효능 실험처럼 쓰지 않음.

### 제23항 — 수정 필요
- block / 이득: “응답자 모두 물건보다 경험에 쓴 돈이 더 기뻤다고 답했습니다.” → 다양한 인구집단의 응답자들이 대체로 경험소비의 행복을 더 높게 평가했다고 쓰세요. 원문 various demographic groups를 전원 응답으로 읽으면 안 됩니다.
  근거: `10.1037/0022-3514.85.6.1193`. 짧은 대조문: “respondents from various demographic groups indicated that experiential purchases ... made them happier”.

### 제24항 — 근거 범위 대조
미국 관찰패널 분석을 한국인 또는 무작위 이사실험으로 쓰지 않음. 가난한 동네로의 이동 등 대체설명을 완전히 배제했다고 단정하지 말 것. NBER 전문 현재독립확인 남음.

### 제25항 — 수정 권장/범위 유의
- warn / 이득: “사전등록된 다른 반복연구도 같은 방식을 썼습니다.” → 2021연구는 새로운 paradigmatic replication approach와 두 절차 중 하나를 사용했습니다. 같은 순차과제 틀이라고만 쓰고 동일설계로 단정하지 마세요. 부재입증/모형전체 폐기보다 해당 사전등록 분석에서 효과를 확인하지 못한 것으로 한정하세요.
  근거: `10.1177/0956797621989733`. 짧은 대조문: “a novel replication method ... Each laboratory implemented one of two procedures”.

### 제26항 — 수정 필요
- block / 비고: “담석 검출 비율이 약 5% 높았습니다.” → 검사로 발견한 비율이 아니라 과거 의사에게 담석 진단을 받았다는 자기보고입니다. OR1.05와 OR1.49를 유병비율5%·49% 증가로 바꾸지 마세요. 오즈의 증가로 쓰거나 단순 양의 관련이라고 쓰세요. 심혈관 OR1.17·1.49도 같은 주의가 필요합니다.
  근거: `10.3389/fnut.2024.1521707`. 짧은 대조문: “diagnosis of gallstones is based on self-reported data from a questionnaire”.

### 제27항 — 수정 권장/범위 유의
- warn / 비고: “정신건강의학과나 임상심리과에 가세요.” → 한국 독자에게 정신건강의학과 진료 또는 임상심리 전문가 상담으로 쓰세요. 임상심리과는 통상적인 법정 진료과목명으로 단정할 수 없습니다. 사정빈도 관찰결과를 자위 자체의 예방효과로 넓히지 마세요.
  근거: `10.1016/j.eururo.2016.03.027`. 짧은 대조문: “사정빈도 자가보고 관찰연구; 자위만의 개입시험 아님”.

### 제28항 — 수정 필요
- block / 쉽게: “교정 경험자는 자살을 생각했다는 응답이 90% 가까이 많았습니다.” → 오즈비1.92는 응답률 또는 위험92% 증가가 아닙니다. 교정경험과 자살생각 사이에 관련이 있었다고 쓰고 이득에 보정 오즈비를 남기세요. nontransgender 성소수자 성인이라는 표본범위와 회상식 단면조사임을 보존하세요.
  근거: `10.2105/AJPH.2020.305637`. 짧은 대조문: “nationally representative sample of 1518 nontransgender sexual minority adults”.
- block / 쉽게: “이런 '교정'은 성적 지향을 바꾸지 못합니다.” → 본문이 인용한 APA 판단 성공가능성이 낮고 해 위험이 있다와 맞추어 효과가 입증되지 않았다고 쓰세요. 불가능이라는 절대명제로 강화하지 마세요. 정신건강법 시행일 표기는 현재2026-10-08 버전과 대조하여 갱신 검토하세요.
  근거: `law-versions/285345.xml`. 짧은 대조문: “제41조 자의퇴원 즉시 / 제43조제2항 각 호 모두 해당”.

### 제29항 — 수정 필요
- block / 쉽게: “위험은 각각 10% 안팎씩 증가했습니다.” → OR1.11/1.09는 위험비와 구분하세요. 정확한 위험증가로 번역하지 말고 오즈 또는 관련방향을 쓰세요. 낮은 질의 굽힘연구에서 효과부재를 확정하지 말고 위험증가 근거를 찾지 못했다고 쓰세요.
  근거: `10.1136/oemed-2014-102346`. 짧은 대조문: “ORs of 1.11 (1.05 to 1.18) per 10 kg lifted and 1.09 ... per 10 lifts/day”.
- block / 비고: “허리통증은 죽음과도 연결되지 않습니다.” → 인용한 예방시험은 사망을 평가한 근거가 아닙니다. 사망감소를 확인한 결과가 아니라 허리통증 발생을 다룬 결과라고 바꾸세요. 병가도 효과없음 확정 대신 유의한 감소를 확인하지 못함으로 쓰세요.
  근거: `10.1001/jamainternmed.2015.7431`. 짧은 대조문: “primary outcome ... episode of LBP ... secondary ... sick leave”.

## 남은 검증과 후보 대조
- 기존 TODO 8개를 완료로 바꾸지 않습니다. 공식사례 유무, 한국 HLA빈도, 한국 담석지침, 세부시세는 확인수준을 따로 표시해야 합니다.
- 제1항 USPSTF 9시험51,550명은 인용 DOI가 권고문이고 초록이 없어 해당 근거고찰 또는 공식원문 재대조가 필요합니다.
- APA PDF는 HTTP200 HTML 응답으로 실제PDF 미열람. ACR/IDEA 전문은 EPMC500, PMC challenge, NCBI429로 실패했습니다. 초록으로 확인된 부분만 수정근거로 인정합니다.
- 제목축약 시 절 도입부 incoming anchor를 보존해야 합니다. 쉽게 2~4문장120자는 목표이며 필수 예외·유보·응급안내를 삭제할 이유가 아닙니다.
- candidate.md와 전 editorial-proposal.json이 준비되면 후보 SHA, before 전체필드·항목 해시, 모든 after 사실 및 제목 anchor를 다시 대조합니다. 현재 원자료 수정요청은 최종 편집 승인과 다릅니다.

## 출처 접근 장부
아래 JSON의 URL·시각·HTTP상태·SHA·cache_file은 해당 raw 또는 기존캐시를 재현하는 식별자입니다. 기존캐시 재사용은 신규 HTTP 조회가 아닙니다.
```json
[
  {
    "doi": "10.1007/s10508-018-1248-x",
    "chapters": [
      3,
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1007%2Fs10508-018-1248-x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:16.562583+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "787daa18ae32fa10e82ff4a58bf1a7c5e9a541de58a4a242458c41cc52b0b642",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/cb802f53bfa103c005f5.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jama.2012.14805",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2012.14805%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:37.080515+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "800850daa700eef4b2ce51dd71192a42f5c444dede9d9f26fe5728f887b67ce5",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6565b1e6355f8f75c034.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jama.2012.14641",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2012.14641%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:37.736461+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "a17128977aa0dc25b78d7165e4dd608647e807537815008e606e74b201ed8292",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c52b251a128a63acc627.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jama.2022.8970",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2022.8970%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:37.258985+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "28c7a010b6e00797503dde6f4ea09a9e87fda214f5befcccb0a4d91fbd4e4859",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/724d9044602172289280.json",
    "hit_count": 2,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": false
  },
  {
    "doi": "10.1056/NEJMoa1804989",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1804989%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:38.502302+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "1cb648f61ea0d1993a96e3fb622e4fc774c5295b1a36bcd742923c6badbffb92",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/714ca2252b158db83f59.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa1809944",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1809944%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:38.707920+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "7dae1a2942a1219a0ce19c6c8cb1b2f5473ad7be3fe3f4dc7a6fd9e7e7d5f670",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9747d128c0ef4c0928bb.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1016/S2213-8587(21)00345-4",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS2213-8587%2821%2900345-4%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:38.904193+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2ed5b9a597d1f028c3dce9b9776282cc686c296afe32fd771094d5710b0a8005",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7fae5f036002c7159805.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1002/14651858.CD007176.pub2",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD007176.pub2%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:39.117844+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "43ebb275f9fdba722faaca97443b0ded743563a890a15b6eb34773af28d33a33",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/10beb94933609f04f89c.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJM199404143301501",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJM199404143301501%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:39.310351+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "5b0444a211bcb530fb7871dea4ce7f4cee23c79667ab1e1ef230a4afa98e223b",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/61ca7e91b43e9463c0a8.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJM199605023341802",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJM199605023341802%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:39.493772+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "7cb693c97e2e8d6c60ada09d4f62554fb88f31bad99beea80b37d7fcc4d6e2fa",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/71828782d4c121ce19e3.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa1811403",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1811403%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:37.936284+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2bce296f871cf934034d03a7dd0dd7ab766d4d8e57ae580c382a75564027b041",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ddb022746956221807e7.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1002/14651858.CD000980.pub4",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD000980.pub4%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:42.153480+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "58f8a06a205c4df73bbc7e869be667bc460c3ddef2836befa70277dcb0f582f7",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/1966e93f8770c5f10e1f.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa1812792",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1812792%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:38.549701+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "d78b9ed36f15cd5eaf74ce3e350b2e4a0c0b733485717ff14c029a90cbcfd564",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/88942079c7deaa9d8629.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jama.2017.21926",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2017.21926%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:42.567002+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2491b7d94911821dc8190947eaff1ba0096cbd81e14f874f8633ecde44861992",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ad94e380c0a4ebb551da.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1148/radiol.2372041741",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1148%2Fradiol.2372041741%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:42.722958+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "9cd10c22b4022566085d1c79e3e24ee1576050138e61df933cc3ff2b09c530c2",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7929719e1b0f7473d23a.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jama.2016.12858",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2016.12858%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:42.888395+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "0390e6833524cbf0604ef6eed7b842e4973146651cdd82574feee78a5dd82f1c",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/2493cd912afbfccc8225.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.7326/0003-4819-157-5-201209040-00007",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.7326%2F0003-4819-157-5-201209040-00007%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:43.022914+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "39b004d7be4595199ca4ecc087fa052362b69a87bd3fb45edfcdc6b74c753bb2",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b539e74081e1092f18ad.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1038/s41430-018-0135-9",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1038%2Fs41430-018-0135-9%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:43.195253+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "7abf55affceede302d7654b8ae977cdc0270c14175a55d9b0284392c9f456db0",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/0e35801c78f097f4197a.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa052771",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa052771%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:39.670972+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "0cf3de07de1b07e186cf566e4f24861002632f624d2792ccf5c3440c2e1e8cb9",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b3e60fcfe3e9821ee0ad.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1371/journal.pone.0161749",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1371%2Fjournal.pone.0161749%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:43.565786+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "4efbb9a35df9de85b77ddd9ca37619b054949c7b0b8a2cf6af827f62bcf15928",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/345d516fbc3888a35c47.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1111/jhn.12286",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fjhn.12286%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:43.647519+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "3863d51de91bed77d6ed685a0adf31ad387ef95ad794810f6cb6579de29d2350",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/8b02fbacd7eb1568aa92.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1136/bmjopen-2015-010438",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1136%2Fbmjopen-2015-010438%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:43.894336+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "9032962a5b9988fe7c425834a9f99e5c98fe8b90339e748b6652be37cb2a13c7",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/8d74b36c9117d02cdc0e.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1152/ajpregu.00365.2002",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1152%2Fajpregu.00365.2002%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:44.013846+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "4244cbcd6ada7bb25ebf088ce4b8790de5daf3bdff37d108618de79044b10d7b",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/1977fb61e79fba94c5ad.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1037/h0059240",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1037%2Fh0059240%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:44.386871+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2f62037581b43a837cc71598a4305a51c13f524627e6e10cc0b5eaabbbcac640",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/af21fc372b7dca0b6ff1.json",
    "hit_count": 1,
    "abstract_present": false,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": false
  },
  {
    "doi": "10.1038/318419a0",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1038%2F318419a0%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:44.394656+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "58fd4dd6613a0a2c832092084252ef59a913ef346644b026d6eca45fc67b491b",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a2cd3971a9171c0a3035.json",
    "hit_count": 0,
    "abstract_present": false,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": false
  },
  {
    "doi": "10.1002/14651858.CD013244.pub2",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD013244.pub2%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:44.677461+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "6e2ee5fed190d38122aee3a24f83dec95c44b39df202ca2c3c1b70709578d141",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/573f6471c57338f53ce0.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1093/oxfordjournals.aje.a009669",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Foxfordjournals.aje.a009669%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:44.786401+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "103695431b3ef5606e89ecf642cb503f938dca595dea5c90d3d094f54335a1d2",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5b86931fcd489f75cfb5.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jama.297.6.603",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.297.6.603%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:45.028513+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "f6a7a5ca2e61d98da2d273cdb40a4ef42402b00d951db860405d60e74d482d0a",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/f4bc9cb618e2afd10765.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1111/trf.13205",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Ftrf.13205%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:44.914616+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "af48111a8af66d2d442422ad4c23ebedb3610856f2d1ce9c7650e1daa282cd21",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/895aa5462da3774baf70.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1016/S0140-6736(17)31928-1",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2FS0140-6736%2817%2931928-1%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:45.208735+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "84c20cf83423a34ef450fd8b07026cded767f8b12055d74e3a1a6046f142ee97",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/2376e42370c056609732.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1002/14651858.CD009009.pub3",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD009009.pub3%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:45.456075+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "ced618db16e1d331ae65fd0c1ba4ee36fd6989cef7e76ae558db6544f7f4350e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4ec8fef72bc40fc44bd6.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1371/journal.pone.0317615",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1371%2Fjournal.pone.0317615%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:43.576491+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "62ce833dbf9592961070d6bf7c76eb8318a021d557eb16f9c520108c1da151cb",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d2dc15054e2a414428da.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa1915833",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1915833%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:48.052794+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "84aac9efbf8f3ccaef5658cf5470d71cbc9e04ed3700385d1d04ced78bca2ef4",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/391c44cac0a50f9550ea.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa1916624",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa1916624%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:48.268358+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "671b63b74f8a5cf05f2349be31639279336dec94d0be5ab6a8cd302c6a6e2f22",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/06d12ed94b1629a8649e.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1111/j.1440-1746.2009.06146.x",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1440-1746.2009.06146.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:48.539551+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "e57647e0c82b47390f3ebdfa56f1b73c2bc0bb1983add71fccd3c976a4cf1f99",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/34ab36452f00da039795.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1097/00000658-198507000-00009",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1097%2F00000658-198507000-00009%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:48.752123+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "dce630aacd9172050cc80f03a9dd307833a78adeae1f17ca2d7d81e9fb0fe005",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/87d6d9e371b27e1a5c37.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1016/j.jhep.2016.03.005",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jhep.2016.03.005%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:48.944915+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "c05f26946a38dbc5233806c819b6a02d0f853971a51f7db3f5743acf7ee1ee0a",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/f97afec48e764148b684.json",
    "hit_count": 1,
    "abstract_present": false,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": false
  },
  {
    "doi": "10.1093/ajcn/52.5.813",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Fajcn%2F52.5.813%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:45.374766+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2fef122ffcba64c65a7bc3a07d4539cf8b6e7514c07260115f16fea983f23905",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/91dcf6857d48afc4fc36.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1002/acr.24180",
    "chapters": [
      6,
      16
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2Facr.24180%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:45.750779+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "e21d9a2e7d30e9fb0c4d33fb14572d2bb710b032e8c4ae800748ff3afea908b7",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/d424930cd29debd75379.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1002/14651858.CD006230.pub2",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD006230.pub2%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:50.018827+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "ae737d6c5a5f674c9b45c22158c4eacad5f578d7f73c3f428f8eecef5612f0e4",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ec74655efb315f62ef53.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1111/j.1572-0241.2005.00317.x",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1572-0241.2005.00317.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:50.199905+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "44bbc38404b2fd05497bdd3d22da8b6832217472591067b2506b0d5c4eb11a0e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/145027236543a9be7315.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.3760/cma.j.cn112139-20210811-00373",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.3760%2Fcma.j.cn112139-20210811-00373%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:50.385598+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "886b20adc7545d4df40bf11cf7293d902ccf3bd69e62b8d7139a0acdb614f224",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/233723f507943321f7bd.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.3760/cma.j.cn112139-20220119-00031",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.3760%2Fcma.j.cn112139-20220119-00031%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:50.565234+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "9eb79720052a74c453159f82ebae858c2dbb98bf0e3554aed8762a9e367b6d31",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/74870df121a77d420780.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa010369",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa010369%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:50.749675+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "39406792504a8257c1590aabd22442e5c447fa5e0ca70970bbebd58f3d2286d2",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/71ef7cea76eab28e3f41.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1037/a0037409",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1037%2Fa0037409%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:50.929273+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "be270e5915c4a50ee1b3c890ea5cc5308a525652f0c3ab0afc03c9ce52aa8bcf",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/4a591efefcbcde67f5c1.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1037/0022-3514.85.6.1193",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1037%2F0022-3514.85.6.1193%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:51.132577+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "d1eed46b6e773a0942a851781e45c0118c388c03b81253da852d266110152f89",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/23082ec2318697369864.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1093/qje/120.3.963",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Fqje%2F120.3.963%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:51.327279+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "0e5fcd9e7dd34f774b491ea7e4394121708d931a5b89974c8702368a2c2a8fcd",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/aaf599f473564f5b5c54.json",
    "hit_count": 0,
    "abstract_present": false,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": false
  },
  {
    "doi": "10.1177/1745691616652873",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1177%2F1745691616652873%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:51.536392+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "3e6d82149cb898d582d7d2c83e8b5bfc06162d057c8ee82bb01180ace3aa6c13",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5ad7cf2187fe044c7a87.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1177/0956797621989733",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1177%2F0956797621989733%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:51.724881+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "e1acf79ccf1033edae5cde94cd0437590d1325022bc76f4ac4bd5ff65ee6c863",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/70e76d00f88d9012320b.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1136/bmj.l42",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1136%2Fbmj.l42%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:51.913638+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "c95ce7f03dd69d878e4df6c839a9e6a43d37e4d0096e9202ef314b3cd1df9c6d",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9d5f37375edf77fdcd9d.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jamainternmed.2020.4153",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjamainternmed.2020.4153%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.082406+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "7e9d83d4fbd73948ad0bb68e01b100731864c54968df6e52e573e70864f99a2a",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a95c3e5bd96b5fe12bfe.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1136/bmj.e6457",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1136%2Fbmj.e6457%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:49.155743+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "7a895b30fe08286be713e6fd7ed88efe284f823ce1e39572fd552496f186d9a9",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/3223c89df446097b2583.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.7326/0003-4819-99-2-199",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.7326%2F0003-4819-99-2-199%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:49.296448+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "a3a0b737b8b0a78db4228b758294f6aed9bb8b57f97bbc23c34fc34a90fb790e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/1a6f54686c090e75c32e.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.3389/fcvm.2025.1565806",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.3389%2Ffcvm.2025.1565806%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.260420+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "7038b794bf863f8b1a8d303daee04f42ccc2684e8dd7abec5e4e0422c9fa3928",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c04ee2671b3f4d8013a9.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1016/j.jacc.2019.01.065",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jacc.2019.01.065%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.365552+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "69cc8d851ef436f042847e9e65c4ecbad139cc000355a6f30d3ea28413a0c67b",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/afd354b2e3a193d3645c.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.3389/fnut.2024.1521707",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.3389%2Ffnut.2024.1521707%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.620384+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "9ab60c3b28bfbeb2fdfa62a3f5cd3c64d58116cf46ce760091573929dd34421d",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/db3e9a43c49b2799e774.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1093/nutrit/nuaf053",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1093%2Fnutrit%2Fnuaf053%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.452905+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "a0e9d3d8c6961428a2b5c4dbd0560be7253ea90429cd9062cac7c68eae32a4f1",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/82183c9894a90ce35f32.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1007/s11606-023-08094-7",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1007%2Fs11606-023-08094-7%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.832625+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "965be1a704d73f9d600e79cf4011f128fd6edfc0c9e600ac77cb7a3017a62b50",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/92bc9883495b8644c390.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1016/j.eururo.2016.03.027",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.eururo.2016.03.027%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.966649+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "ca71db06aed89a4b9c9f0422111a340c2cdc3afff2f2baa8781648b221fed905",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/61899516627b1139394a.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1111/j.1464-410x.2008.08030.x",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1464-410x.2008.08030.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.029394+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "64321a7e2cc06b959e70669017d33a005683dc1729eea92c400f7be553d2d069",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/37b200f972c6ce1078ea.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.2105/AJPH.2020.305637",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.2105%2FAJPH.2020.305637%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.176258+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "c1fbc1ef48a0bebaec0a97e3b479a7039bc36812f3e9d26167c5b7e11da1e6d9",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/1c3317031879209f8439.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1080/00918369.2018.1538407",
    "chapters": [
      6,
      30
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1080%2F00918369.2018.1538407%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.299740+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "fc7ae9e4588f3f160777b4792a6fbd3d17e9ae1ae2cfba40612d552da06874c4",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6c682b55c19551c9da45.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1007/s10508-022-02408-2",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1007%2Fs10508-022-02408-2%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.349952+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "c4d537680fd0cc3bf8a168d84bbb0f41fbb58f2dd9a843322605ec8d3c6f0c5f",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/99e26407154cfc0c2adb.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1007/s10508-022-02521-2",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1007%2Fs10508-022-02521-2%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.472416+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "bcb013efd99cfcd80175019c8e149c04d9a78e3a975dfa1fcbe47e75c992214c",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/01376528cd648658578e.json",
    "hit_count": 1,
    "abstract_present": false,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": false
  },
  {
    "doi": "10.1002/14651858.CD005958.pub3",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1002%2F14651858.CD005958.pub3%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.596066+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "a2c6bf99335308c23591c19fd066ae38a35c492971069e09fb0d3928dd19ffee",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/a1a25f6fa05eea60a0ad.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.2519/jospt.2020.9218",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.2519%2Fjospt.2020.9218%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.709707+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "1342c5f18fc126857089460fda014662479efb1b050c5b3631977c50dd6fdc20",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6017ced472d3d15c9201.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1001/jamainternmed.2015.7431",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjamainternmed.2015.7431%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.975337+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "f5872168888e83d25ad5bf0806abab930af181cb55a796aa45372b290b0505ec",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/6a26694c442a96a15042.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1016/j.spinee.2010.03.033",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.spinee.2010.03.033%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:54.262178+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "0cacaec160ff1d3255084d82496bb705786da5877f4b0bc88a0d2e0589b07299",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/9fafe6e732666ab4cce5.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1056/NEJMoa2114833",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1056%2FNEJMoa2114833%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:52.254604+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "beabbee02ee720ecc3fc8727715c915eb73995fe4072111d73b60285642354b4",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/b4f8b45880d4bb6c611b.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "doi": "10.1136/oemed-2014-102346",
    "chapters": [
      6
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1136%2Foemed-2014-102346%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:53.884705+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "a71f6c4ef9af01a355c575bc52c29cb80b1030344548ed6463d90fa631c7df87",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/5d5fd32efc63f2ce7951.json",
    "hit_count": 1,
    "abstract_present": true,
    "access_method": "existing_cache_read",
    "sha256_verified": true,
    "review_scope": "abstract/metadata only; abstract absent means no substantive confirmation",
    "abstract_present_actual": true
  },
  {
    "id": "idea",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5480209/fullTextXML",
    "fetched_at": "2026-10-18T12:48:04.423808+00:00",
    "status": "access_failed",
    "error": "HTTP Error 500: Internal Server Error",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "acr",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10563586/fullTextXML",
    "fetched_at": "2026-10-18T12:48:04.424457+00:00",
    "status": "access_failed",
    "error": "HTTP Error 500: Internal Server Error",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "blood",
    "url": "https://www.bloodinfo.net/knrcbs/cm/cntnts/cntntsView.do?mi=1048&cntntsId=1124",
    "fetched_at": "2026-10-18T12:48:04.424945+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/blood.raw",
    "sha256": "756ddb2a138e8b6efbf97f2b7d8b7a63d0071777fb0578a4f93221ca96bdd9b1",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "certificate",
    "url": "https://www.bloodinfo.net/knrcbs/cm/cntnts/cntntsView.do?mi=1142&cntntsId=1022",
    "fetched_at": "2026-10-18T12:48:04.425488+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/certificate.raw",
    "sha256": "74934f0f47007c475b5366602fdf2ac5d37dd3b956b2612136a5c8080539fcd4",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "nhis",
    "url": "https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do",
    "fetched_at": "2026-10-18T12:48:04.426034+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/nhis.raw",
    "sha256": "0089cd779d956f5eb304f79a184b2239a12c97912b2b127aa0844fb32b7623d1",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "nice",
    "url": "https://www.nice.org.uk/guidance/cg188/chapter/Recommendations",
    "fetched_at": "2026-10-18T12:48:04.426464+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/nice.raw",
    "sha256": "31c01c1ead5dccfd343634010b3548e37e804e542440ed9f62e29bbadf334c2e",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "foodlaw",
    "url": "https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%8B%9D%ED%92%88%20%EB%93%B1%EC%9D%98%20%ED%91%9C%EC%8B%9C&display=10&nw=1",
    "fetched_at": "2026-10-18T12:48:04.427083+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/foodlaw.raw",
    "sha256": "e3661dc3b88ff1b37e5a2906ff9842e2dcbbb8820d21180413dbf9fb1286b510",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "adlaw",
    "url": "https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%ED%91%9C%EC%8B%9C%E3%86%8D%EA%B4%91%EA%B3%A0%EC%9D%98%20%EA%B3%B5%EC%A0%95%ED%99%94&display=10&nw=1",
    "fetched_at": "2026-10-18T12:48:04.427893+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/adlaw.raw",
    "sha256": "cc264098452c9289d805cdc305faab8695a697def23bdb292d91bbe20b6413d9",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "foodlaw-full",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=269957&type=XML",
    "fetched_at": "2026-10-18T12:48:31.406969+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/foodlaw-full.raw",
    "sha256": "9fb95b63ffa6113ff0b33eac3b281a5b75c68f07289c76b1a7308eb87148056a",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "adlaw-full",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=268659&type=XML",
    "fetched_at": "2026-10-18T12:48:31.408846+00:00",
    "status": "access_failed",
    "error": "<urlopen error Tunnel connection failed: 502 Bad Gateway>",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "idea-html",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5480209/",
    "fetched_at": "2026-10-18T12:48:31.413327+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/idea-html.raw",
    "sha256": "db1c212f8f67d7654ef2c897f874b2ebc906eaac303ef710f6ef6adbc8e08038",
    "access_method": "new_https_request_tls_verified",
    "substantive_status": "HTTP200 challenge/HTML, not article or PDF; not fulltext verified"
  },
  {
    "id": "acr-html",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/",
    "fetched_at": "2026-10-18T12:48:31.414502+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/acr-html.raw",
    "sha256": "2b0d244318c29109da68820b17d3e3ec2f32846955507d0b87d1ef4c9f79ebfd",
    "access_method": "new_https_request_tls_verified",
    "substantive_status": "HTTP200 challenge/HTML, not article or PDF; not fulltext verified"
  },
  {
    "id": "apa",
    "url": "https://www.apa.org/pi/lgbt/resources/therapeutic-response.pdf",
    "fetched_at": "2026-10-18T12:48:31.415230+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/apa.raw",
    "sha256": "d02032286070b4dd9d8fbd985a7bdca8af8edf52b89ff177db3bfcb2c8a9c43d",
    "access_method": "new_https_request_tls_verified",
    "substantive_status": "HTTP200 challenge/HTML, not article or PDF; not fulltext verified"
  },
  {
    "id": "nrc",
    "url": "https://www.nrc.go.kr/checkup/html/content.do?depth=nc&menu_cd=03_01_01",
    "fetched_at": "2026-10-18T12:48:31.415844+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/nrc.raw",
    "sha256": "ea5b36558bbc4e0ba3cd6856d70973b09bbba11092a5015f3cc6771e16cd1b31",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "consumer",
    "url": "https://www.consumer.go.kr/user/ftc/consumer/cnsmrBBS/79/selectInfoRptDetail.do?infoId=A1079183",
    "fetched_at": "2026-10-18T12:48:31.418097+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/consumer.raw",
    "sha256": "515241b350c2b317e2a037d6fedcbbab9d34f5c33a10dc1897c573cefd5b7788",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "adlaw-retry",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=268659&type=XML",
    "fetched_at": "2026-10-18T12:48:55.339729+00:00",
    "http_status": 200,
    "status": "retrieved",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch06-audit/adlaw-retry.raw",
    "sha256": "cbd6c690649b0d02b22f7832b8e39c99b9c066f9d3f10da236497dc9bcb70e9f",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "acr-bioc",
    "url": "https://www.ncbi.nlm.nih.gov/research/bionlp/RESTful/pmcoa.cgi/BioC_xml/PMC10563586/unicode",
    "fetched_at": "2026-10-18T12:48:55.341342+00:00",
    "status": "access_failed",
    "error": "HTTP Error 429: Too Many Requests",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "id": "idea-bioc",
    "url": "https://www.ncbi.nlm.nih.gov/research/bionlp/RESTful/pmcoa.cgi/BioC_xml/PMC5480209/unicode",
    "fetched_at": "2026-10-18T12:48:55.341892+00:00",
    "status": "access_failed",
    "error": "HTTP Error 429: Too Many Requests",
    "access_method": "new_https_request_tls_verified"
  },
  {
    "mst": "285345",
    "chapters": [
      8
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285345&type=XML",
    "requested_at": "2026-10-18T12:37:58.840465+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률",
    "effective_date": "20261008",
    "law_id": "000222",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285345.xml",
    "sha256": "104f6e8ceb1e5d4f0c35b5bffa866b09a38e4b8c72047452d6ba6d8d40c8f35b",
    "bytes": 274174,
    "article_count": 110,
    "access_method": "existing_cache_read",
    "review_scope": "41/43 or 347/350 article text; not blanket commencement audit"
  },
  {
    "mst": "290185",
    "chapters": [
      5,
      8,
      11,
      13,
      30
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290185&type=XML",
    "requested_at": "2026-10-18T12:38:25.603245+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "형법",
    "effective_date": "20261002",
    "law_id": "001692",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290185.xml",
    "sha256": "391f3c2bb7173fff4040eda9ae2259674b616e58aeadf4371206b63c70f1c89b",
    "bytes": 390555,
    "article_count": 463,
    "access_method": "existing_cache_read",
    "review_scope": "41/43 or 347/350 article text; not blanket commencement audit"
  },
  {
    "doi": "10.1007/s11606-023-08094-7",
    "chapters": [
      6
    ],
    "pmcid": "PMC10465444",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10465444/fullTextXML",
    "fetched_at": "2026-10-18T12:15:49.993603+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1007/s11606-023-08094-7"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC10465444.xml",
    "sha256": "68f65a6a3f19c2f3cd0fcd6c468ea249894e3f063aded8d6698d5c093fd7458c",
    "bytes": 107342,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.1016/S0140-6736(17)31928-1",
    "chapters": [
      6
    ],
    "pmcid": "PMC5714430",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5714430/fullTextXML",
    "fetched_at": "2026-10-18T12:15:46.331882+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1016/S0140-6736(17)31928-1"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC5714430.xml",
    "sha256": "d747ceaaa87f04b60ad488342671553280244f3c2710deea564860beaaccb0f9",
    "bytes": 143698,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.1136/bmj.e6457",
    "chapters": [
      6
    ],
    "pmcid": "PMC3469410",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3469410/fullTextXML",
    "fetched_at": "2026-10-18T12:15:48.349317+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1136/bmj.e6457"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC3469410.xml",
    "sha256": "33d3519a32db9ea659db7950835f969a3e0aeeb094603092de9c88464a1ee9da",
    "bytes": 69998,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.1136/bmj.l42",
    "chapters": [
      6
    ],
    "pmcid": "PMC6352874",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6352874/fullTextXML",
    "fetched_at": "2026-10-18T12:15:47.602781+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1136/bmj.l42"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC6352874.xml",
    "sha256": "bef68625d0c3aed90a20c59f99e35cbd5014dbdda111f8450cfd7dc0429e6967",
    "bytes": 148276,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.1136/bmjopen-2015-010438",
    "chapters": [
      6
    ],
    "pmcid": "PMC4916623",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4916623/fullTextXML",
    "fetched_at": "2026-10-18T12:15:44.648914+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1136/bmjopen-2015-010438"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC4916623.xml",
    "sha256": "d56524db52e9334f21ec13a3d92bcadaac2f7357b77a72f34dff0b67d335b7aa",
    "bytes": 71012,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.1371/journal.pone.0161749",
    "chapters": [
      6
    ],
    "pmcid": "PMC5025014",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC5025014/fullTextXML",
    "fetched_at": "2026-10-18T12:15:44.051883+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1371/journal.pone.0161749"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC5025014.xml",
    "sha256": "fbddac10dc9af09fedb54a8a705f2cb462224f083343ae75df32673cf036b985",
    "bytes": 119539,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.1371/journal.pone.0317615",
    "chapters": [
      6
    ],
    "pmcid": "PMC11778651",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11778651/fullTextXML",
    "fetched_at": "2026-10-18T12:15:47.162572+00:00",
    "http_status": 200,
    "article_dois": [
      "10.1371/journal.pone.0317615"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC11778651.xml",
    "sha256": "f7a72dfc563dbf48cb95095ec911e6e8c4cf68102728d29768a11bdf20a2d8aa",
    "bytes": 129814,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.3389/fcvm.2025.1565806",
    "chapters": [
      6
    ],
    "pmcid": "PMC12702892",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12702892/fullTextXML",
    "fetched_at": "2026-10-18T12:15:48.869259+00:00",
    "http_status": 200,
    "article_dois": [
      "10.3389/fcvm.2025.1565806"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC12702892.xml",
    "sha256": "5bc463443b6ea9fe77586748ee5076680699510f3aa45a4979114d4cfc71cd91",
    "bytes": 134642,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  },
  {
    "doi": "10.3389/fnut.2024.1521707",
    "chapters": [
      6
    ],
    "pmcid": "PMC11684388",
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11684388/fullTextXML",
    "fetched_at": "2026-10-18T12:15:49.272692+00:00",
    "http_status": 200,
    "article_dois": [
      "10.3389/fnut.2024.1521707"
    ],
    "exact_article_doi_match": true,
    "status": "fulltext_xml_cached",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/pmc-fulltext/PMC11684388.xml",
    "sha256": "fa89a40373ddacc888ea32343c8c65db3829017da907d93c3204a80aba882ef2",
    "bytes": 95537,
    "access_method": "existing_cache_read",
    "review_scope": "XML parsed; selected extracted abstract/methods/results only; not cover-to-cover or all supplements"
  }
]
```
