# 제5절 출판 독립 감사 — 최종 편집 closure

상태: **approved_for_integration**. 최신45개 full 및 intro9구간·tail 전체를 ROOT 통합용으로 승인했다. 공개 본문은 바꾸지 않았다. 정식KR-FIT·출판 승인이 아니다.

초기 감사와56개 field 판정은 [보존본](canonical-before-final-r1/ROOT-ARCHIVE.json)에 남겼다. 기존 승인 SHA와 과거 수정 판정은 소급 변경하지 않는다. 현재 선택은 full45 map `ecb549ad6fb2bf028f3d2193bf07ccc9b98bcc723bbaf241fc569ce24cc09ee7`다.

모든 전필드·번호·6labels·등급·태그·literal50/쉽게120·2~4문장/제목70을 재대조했다. DOI 실제 add/drop은0이며 기존 주석을 보존한다. 전체 entry 교체45개는 proposal.rstrip()+원strictentry 끝공백을 사용한다. 원proposal SHA와 effective-after SHA를 구분한다. 이어 intro/tail10개를 적용하는55개 exact operation과 각 단계 전체 SHA가 decisions에 고정돼 있다. 가상 최종 SHA: `3d9cb93280c3994c39995c98b61e85baaa89854fc26eaeaac2c727f42287f59d`. 가상 결과는 파일로 쓰지 않았다.

실제 helper45항 결과와 독립 재현45항 결과 SHA가 `ca416e08ca69ccf20f4fd0019aafc61ec7ea659b80c3aeaaa80e2384fb3d131b`로 같고 바이트도 완전히 같다. 이전r2 예상값은 proposalEOF 복사 오류였으며 canonical-approved-r2 보존본의 이력이다. 승인본문·기준·helper코드는 바꾸지 않았다.

## 전항목 finding 종결과 실제 확인 범위

### 5-1

- 결정: approve / approved_for_integration
- 최신 full SHA: `60c6521067aec4622a1b9d62325b5f48b76c90e02ab4522d08aa7b4a2ee2cc9c`
- 독립 판정: [publication-partial-review-r1.json](publication-partial-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 수정 필요: 해지절차 금지의 "정당한 사유 없이"가 쉽게·이득에서 빠짐. 법21조의2제1항4호 직접 확인. 30일은 시행령20조의2와 일치. 방문판매 계속계약 통지·예외는 아직 원문 미확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-2

- 결정: approve / approved_for_integration
- 최신 full SHA: `a5d4b51b34861cd134d1e60e703e9f35e9d678e00aecde150991af81d8ad6639`
- 독립 판정: [publication-partial-review-r1.json](publication-partial-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 법137·73·70·45조의2 및 의료비 가족요건 원문 미확인. 5년 기산점·2개월 답변·합산 신고를 후속 확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-3

- 결정: approve / approved_for_integration
- 최신 full SHA: `ce3be8f668dedffceeb3e80e9ac8240c6251a59d113b3cecdef87f5c5eee3340`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 총급여8천/종합소득7천, 15/17%, 1천만원 한도와 주택요건 법령 직접 미확인. 쉽게에는 소득·주택·세액한도 조건 축약 위험. 주택공적금은 한국에 없음을 명시한 비교이므로 기계 경고 자체를 오류로 보지 않음.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-4

- 결정: approve / approved_for_integration
- 최신 full SHA: `73f00af5e53c8c8cbd438437f5818bfecacc30c22534e24ec2b43fc3e3c4aba7`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 전기통신사업법·시행령·기관명·스마트초이스 직접 미확인. 할인반환금 경고 보존 필요.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-5

- 결정: approve / approved_for_integration
- 최신 full SHA: `0fa60d60525cbc0a376c0002663fe78413ded09958fd2bf67d8b28ba6a7fdf04`
- 독립 판정: [publication-partial-reassessment-review-r4.json](publication-partial-reassessment-review-r4.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 판매액 절반의 기대값 계산은 1000×0.5=500으로 확인. 확률·세율·동행복권 현재 1차 원문은 미확인. 비고 "반드시"는 개인 실현손실 보장으로 오독될 수 있어 기대값 표현 권장.
- 종결: 법8 실제원문 전체 직접읽음:발행액50%이상,미리확정불가시판매액기준. 공식동행복권 실제HTTP200에서 로또판매액50%/기금40%이상/1등1:8145060 확인.1000×.5=500원은 장기기대액이며 개인실측과 구별.소득세84② 건별200만원이하비과세·분할지급합계와129①6의20/초과3억원30% 조건 대조.앞서 실제읽은지방세103의13 소득세10%로22/33% 산술 일치.원문통화환산이나미검증연간판매액추가없음.

### 5-6

- 결정: approve / approved_for_integration
- 최신 full SHA: `8bb10ba9943641c1beb018b82a73877375539af2c16ac586c9dcbd7c37decf8f`
- 독립 판정: [publication-partial-reassessment-review-r4.json](publication-partial-reassessment-review-r4.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 유사수신·손실보전·부당권유 조문 원문 미확인. 합법 예금과 투자 구분은 보존.
- 종결: 법2의 인허가·불특정다수·업·원금이상·가상자산 조건 유지. 유사수신3/4/6 실제원문 추가열람으로 수신5년/5000만원과 광고2년/2000만원 구별 확인. 본문은 수신행위 벌칙으로 명시해 광고와 혼동하지 않음. 자본시장법55의 신탁/정당사유 예외는 앞선 직접읽음 유지. 금소법21①1과 령16① 직접 읽음: 시행령 예외는21제6호 행위에 관한 것이므로 본문 단정적권유 금지범위를 줄이지 않음. 금융감독원경보/중국수치 미열람은 독자한계로 유지.

### 5-7

- 결정: approve / approved_for_integration
- 최신 full SHA: `c58591505b54731aa65a1d0e622e117c0d1703e9b6e7b4326fc0ed34690dde8e`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 20%·60% 계약무효·미등록 원금/이자·비용 예외 적용범위 및 시행일 원문 미확인. 쉽게의 "모두20%"와 이득의 미등록0% 관계 후속 검토.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-8

- 결정: approve / approved_for_integration
- 최신 full SHA: `a7cf9ba37c957df742794caf5c12eb9f8555f4aa263ac15a052463a6707438fb`
- 독립 판정: [publication-partial-review-r2.json](publication-partial-review-r2.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 전자상거래법17조2항5호 직접 확인. 가분적 콘텐츠 미제공 부분 예외가 존재. 미성년 예외는 민법 원문 미확인.
- 종결: 민법5·6·17의 취소·처분허락·속임수 예외는 이전 직접읽은원문 재사용.전자상거래법17②5·⑥의 가분적미제공·표시 AND 시험제공조치와③의3개월 AND30일 보존.이미제공시무조건환불불가 단정을 피함.정기결제계약해지와결제수단삭제/지난환불 구별.실천조언과미확인한국통계는 독자한계 유지.

### 5-9

- 결정: approve / approved_for_integration
- 최신 full SHA: `3ddb2b861b6a30a63d926f95443d367e40dac73d40587c8372afc810b54a5e1e`
- 독립 판정: [publication-partial-reassessment-review-r5.json](publication-partial-reassessment-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 전자상거래법13조3항 취소가능 고지 직접 확인. 민법 나이·처분허락·속임수·최고·시효는 원문 미확인. 쉽게의 1개월 이상·속임수 예외 보존 검토.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-10

- 결정: approve / approved_for_integration
- 최신 full SHA: `145ae1b5c7b47bad5b23ba788ab324e780ae2026680ce3952bb54ed53b979214`
- 독립 판정: [publication-partial-review-r2.json](publication-partial-review-r2.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 112·1394·지급정지 요건·양도처벌 조문 직접 미확인. "신고와 지급정지로만"은 민사 구제 배제처럼 읽힐 수 있어 단정 완화 검토.
- 종결: 피해환급법2정의·3·4 실제원문 읽음.물품용역가장사기제외/대출사기포함·송금/사기계좌금융기관신청·의심사정시즉시정지 확인.이 절차의 잔액조건을 유일한 민사구제로 단정하지 않음.전자금융법6③·49④의양도/대가/범죄인지대여5년3000만원과통신법30·32의4①·97⑦의타인통신제공1년5000만원/법정예외를 확인.공식통합대응홈페이지1394 본문 확인.112는동일공식HTML 안내문구(주석에보존됨)와통상긴급신고를구별해기록.

### 5-11

- 결정: approve / approved_for_integration
- 최신 full SHA: `ea2fdc95c844e2c4f2161a0de1b64a13d1930f40173402b6e2a466e83fba1df0`
- 독립 판정: [publication-partial-reassessment-review-r5.json](publication-partial-reassessment-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: Crossref 제목·DOI 확인만 완료, 본문 없음. 10~50%·18배·BestBuy 이익 수치는 논문 실측 아닌 업계 인용으로 구분됨. 법정 보증기간 직접 미확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-12

- 결정: approve / approved_for_integration
- 최신 full SHA: `8e71c217e12995e3653fe3439f8a31eba6df5ea6f1af24139153432b8c0c0a4d`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: JAMA 초록 직접 캐시 열람. 47편·9계열·38RCT·효과크기−0.03/CI−0.15~0.08·사설23/43=53% 일치. 837명 통합분모를 필요시 명시 가능. 한국 대체조제·90%CI/80~125% 조문 미확인. 쉽게에는 의사 대체불가 임상사유 예외 누락 위험.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-13

- 결정: approve / approved_for_integration
- 최신 full SHA: `36a12daf36f0029e793e5613e159012a0112c3b75b4d68f1334f50a0c94347ce`
- 독립 판정: [publication-partial-reassessment-review-r5.json](publication-partial-reassessment-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 연2000만원·사업소득·재산5.4/9억·형제1.8억·90일 및 상실일 직접 미확인. 중국 개인계좌는 한국 부재 명시한 비교.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-14

- 결정: approve / approved_for_integration
- 최신 full SHA: `7fb3be05879b9683b7fc5a20895a684cb426d68cb0b83a4ba288cf6bcd82d77b`
- 독립 판정: [publication-partial-review-r8.json](publication-partial-review-r8.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 620원/1000L=0.62원, 500/0.62≈806 계산 확인. 인천 요금·수질기준 직접 미확인. 끓여도 화학오염 제거 안 된다는 경고 보존.
- 종결: r6 실제 CDC/인천요율/수도법·먹는물법 직접읽기 범위를 재사용했다. 새 r2 전문을 대조해 모든 화학·냄새 물질 일반화를 연료·유해화학·방사성 오염의 안전성으로 한정했고, 무조건 필터 권고를 수도사업자 문의 및 안전 확인 전 생수 사용으로 바꿨음을 확인했다. 약800배는 가정 생수가격/인천 사용요금만의 조건부 산술이며 실제 시장평균이나 전국 요율 주장이 아니다.

### 5-15

- 결정: approve / approved_for_integration
- 최신 full SHA: `0be75e5d5cc09498f2b17ee7cb51cdd955a8ad72e0beb54714ddc25465aa38a7`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: Barber/Odean Crossref 저자 초록 직접 캐시: 66465가구(계좌수와 구분), 1991~1996, 11.4/17.9/16.4%, 회전율75% 일치. 중국 4천만·28/31%·18개월 원문 미확인. 관찰자료를 인과로 단정하지 않도록 검토.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-16

- 결정: approve / approved_for_integration
- 최신 full SHA: `0f60fcdeb61a6a0271b5e7f2f4add1476408ad0e5501ca12bbc0506172b65e6d`
- 독립 판정: [publication-partial-review-r2.json](publication-partial-review-r2.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 140%·추가담보·다음영업일 반대매매·즉시처분 약정 예외 감독규정 직접 미확인.
- 종결: 공식XML과원PDF의4-25①·③과4-28①~③ 실제원문 직접읽음.주식신용매수로 범위한정하여140%와대주105%/매도·환매증권담보융자예외를 혼동하지 않음.추가담보요구·사전합의미징구·다음영업일현금우선/담보/기타필요수량·시세급변회수위험시합의즉시처분·지체없는통지 일치.2026-38 별도시행조건 미확인이라는 독자유보 유지.새current amendment전체확인으로승격하지 않음.

### 5-17

- 결정: approve / approved_for_integration
- 최신 full SHA: `aaa30c77092b137c75d4393dfa0e3a4d117352533073b95369e0ab4975fcf8da`
- 독립 판정: [publication-partial-review-r2.json](publication-partial-review-r2.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: Fama/French와 Harvey/Liu DOI·서지 확인. Harvey/Liu 초록의 undersampling 반론 일치. SPIVA65/64%·15년 범주·중국60.5/69.6/50.8% 원문표 미확인.
- 종결: SPIVA 실제PDF Report1a printed7의 한국/중국행과 printed15~16 분류/통화/지수/비용기준 직접읽음.한국23.9/49.5/43.4 및중국60.5/69.6/50.8%는1/3/5년이며YTD23.8/31.4와구별.아카이브미국gzip원바이트를해제해실제본문65/64%·24년연평균·2024말종료15년모든범주다수미달확인.두논문은Crossref 저자초록직접읽음;Fama/French전체포트폴리오근접/비용/부트스트랩과Harvey/Liu undersampling반론 일치.논문전문으로세지않음.

### 5-18

- 결정: approve / approved_for_integration
- 최신 full SHA: `493c4b5d88aaeb4f3345886a3b354dc63c95b13e558a7d90d513a3bc8656e300`
- 독립 판정: [publication-partial-review-r2.json](publication-partial-review-r2.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 0.99^20=81.79%, 0.99^30=73.97% 직접 계산과 일치. 0%/−1% 가정과 수수료 별도 조건 보존 필요. 투자 수익 보장으로 바꾸면 안 됨.
- 종결: 1−.99^20=18.209306% 및1−.99^30=26.029963% 독립계산.동일차감전수익률·차감후0/−1%·20/30년·세일즈/환매수수료별도조건 명시.한국평균보수미확인과미국연구수익비보장 유지.연구실측또는모든수익률에서동일18%라는단정없음.

### 5-19

- 결정: approve / approved_for_integration
- 최신 full SHA: `cecce88e0ef4d8755f0f5171bffecb3e8770443919bc4b2e6dd6313875127c51`
- 독립 판정: [publication-partial-review-r1.json](publication-partial-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 수정 검토 필요: "나눠 두어도 기대수익은 그대로"는 임의의 분산에 대한 일반 명제로 성립하지 않음. 동일 기대수익 포트폴리오 비교 등 조건 필요. Markowitz 캐시는 서지뿐, 원문 미확인으로 근거판정 보류.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-20

- 결정: approve / approved_for_integration
- 최신 full SHA: `1bfcb5dc54708a7b0ddf8d6b9d0e8206fd66b6d0e604a22b37bb959a9b603a30`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 600/900만원·12/15%·연금55세/5년·연1500·지방세·과세제외 원금·이연퇴직소득 예외 법령 미확인. 산식900만×12/15%=108/135만원 일치.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-21

- 결정: approve / approved_for_integration
- 최신 full SHA: `f0b19a3d84b1c0ab13bb8e7c5c6d2ebfaad8a6b28ecdd27142c6b0bf49c6fadb`
- 독립 판정: [publication-partial-review-r3.json](publication-partial-review-r3.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 저자 Crossref 초록: 미국3곳·7752명·3년·70달러 초과·4.3회·17달러 초과·10달러·600달러·17% 일치. 17%는 상대적 잔류확률 차이로 %포인트 전환 금지. 한국 환급기준·항변권 원문 미확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-22

- 결정: approve / approved_for_integration
- 최신 full SHA: `a7c6bb2eef26a061ad8718e79bbcf9d8abc8611db4e4cedd716fa7fabd4feff9`
- 독립 판정: [publication-partial-reassessment-review-r5.json](publication-partial-reassessment-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 계속거래10만원/3개월·언제든 해지의 법정/별도약정 예외·할부20만원/2개월3회·철회7일 직접 미확인. 쉽게 항변권에 결제횟수·기간 조건 누락 위험.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-23

- 결정: approve / approved_for_integration
- 최신 full SHA: `dfdc72a7076ab7ecbb53262a72f8d0afd898f65bb2a841286dfb125d6ff2b224`
- 독립 판정: [publication-partial-review-r1.json](publication-partial-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 수정 필요 확정: 주문제작 철회제한은 개별생산+회복불가 중대한 피해 예상+사전 별도고지+서면동의 조건 모두 필요(시행령21조). 쉽게·이득의 주문제작 일반 금지는 과도. 법17조1항의 주소 미고지/방해 후 기산 특례·가분적 미제공 부분·더 긴 약정 보존 검토. 반품비/위약금/3개월30일 원문 확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-24

- 결정: approve / approved_for_integration
- 최신 full SHA: `c42470180abfc7c239095a1be50310051edaec8b7bab6aeb2ebd1cc1ed1836d7`
- 독립 판정: [publication-partial-review-r5.json](publication-partial-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: Tversky/Kahneman 초록의 anchoring 일반 개념 확인, 특정 할인표시와 손실액 실증 아님. 한국20일 고시 직접 미확인.
- 종결: 종전거래가격과비교하는할인기준으로범위를명시해시가/권장소비자가격등다른허용비교를배제하지않음.20일정도/변동중최저/특별사유없는20일이상·과장목적·예시범위유지.앞서실제읽은고시나/라와일치하여이전남은요청해결.특정할인표시/쟁이기손실은실증아니라는연구한계유지.

### 5-25

- 결정: approve / approved_for_integration
- 최신 full SHA: `41c8f6289ac760b2c6f60877a4db52ab8fe19f50e340c02cbe0a41b8885168ac`
- 독립 판정: [publication-partial-review-r5.json](publication-partial-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 최저보증이율·사업비·변액 보호 예외 감독규정 직접 미확인. 제목 환급 전부 비보장으로 읽히지 않게 보증/비보증 구분 필요.
- 종결: 금리연동형생명보험으로한정한최저보증이율or금액설정은실제7-60제10호와일치.2026-16부칙제1조시행20260506직접읽음;제2/3조기초서류적용례/특례는7-63/7-73관련이며본문7-60설명을장래특례로바꾸지않음.금소감독12/별표3설명의무는기존실제읽음유지.예금보호모든예외는미검증으로독자한계를보존.약정최저보증과변동/배당구별·중도해지손실·비교대상조건보존.

### 5-26

- 결정: approve / approved_for_integration
- 최신 full SHA: `c90c07337e12cb101dfb9a44b4221d07df20b9af5bd9ed4dafab05c1ea6203fc`
- 독립 판정: [publication-partial-review-r4.json](publication-partial-review-r4.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 사망1.5억·부상3천·대물2천·과태료·형량 원문 미확인. 한도/피해자별/사고별 단위 유지.
- 종결: 일반자가용기본책임한도로범위한정하고추가보험없을때만초과액직접부담으로정정.법5③의여객운송/자동차대여/화물/건설기계대여/소화물배송인증대상과령4의피해자1명당1억원이상또는모든손해액추가의무보험을명시.이전어떤의무보험도라는절대문장해소.기존실제읽은법3·5·5의2·8·46/48,령3·4·별표의금액/단위/합산예외유지.

### 5-27

- 결정: approve / approved_for_integration
- 최신 full SHA: `e117af9c2bea8ccf582e5930047f07101adce86b031603595d1c21e534986388`
- 독립 판정: [publication-partial-review-r4.json](publication-partial-review-r4.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 3~6개월은 경험칙 표시됨. 보호예금1억원·소정이자·금융회사별 한도 시행일 원문 미확인.
- 종결: 법32전체·령18전체와법20717부칙/령35687부칙직접읽음.일반입출금/언제든찾을예금으로비상금범위를한정한맥락에서1인1금융회사1억원/소정이자이율한도/본인채무공제·보증채무공제제외일치.별도퇴직연금/연금저축/보험금한도는이항목비상금보관상품이아니므로동일한일반예금으로확대안함.보증채무등은령18①지급보류가능성이있어공제제외를즉시지급보장으로승인하지않음.20250901시행및이후보험사고적용일치.3~6개월은미검증경험칙으로표시.

### 5-28

- 결정: approve / approved_for_integration
- 최신 full SHA: `73f5e715b15e1787ae84584a8106f4ed9e3a754bc8bae0d2ec70be833c04241a`
- 독립 판정: [publication-partial-review-r1.json](publication-partial-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 대출금리만큼 확정이득은 수수료·세금공제·유동성 고려 전 비교임을 분명히 할 필요. 3년/법정예외·비용범위 감독규정 직접 미확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-29

- 결정: approve / approved_for_integration
- 최신 full SHA: `321af8111a367f4dff0d0263b7aed950e2da348f3fc623eddf4fdb2873451dac`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 전자상거래법20조·20조의2 원문으로 사업자 신원정보·고지없음 연대책임·신원정보 상당주의 면책 범위 확인. 표시광고·추천보증·계약금·위약금감액은 원문 미확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-30

- 결정: approve / approved_for_integration
- 최신 full SHA: `fc427cb22dbddeb57f94441b9fe4564f62820842d36cf67d4704e1f90b44763d`
- 독립 판정: [publication-partial-review-r4.json](publication-partial-review-r4.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 전자상거래법20조2항 사업자 신원정보 및20조의2제2항 면책 확인. 개인판매자 정보는20조의4 별도절차이므로 "사업자 판매자" 제한 보존 필요.
- 종결: 실제보존법XML20②/③·20의2②·20의4전체읽음.중개플랫폼/사업자판매자/주문전성명법인명대표주소전화신원확인제공·재산상손해연대배상·상당주의면책일치.분쟁원인/피해신속파악의무일치.개인판매자별도절차유지하여소비자아무나직접무조건신원공개받는다고확대안함.1372발신자부담은앞서실제공식홈페이지확인범위재사용.

### 5-31

- 결정: approve / approved_for_integration
- 최신 full SHA: `f1bfdd5c890cb1da91191a11b70caa8dbe047d31d7153d90d7fcb07b65d4734e`
- 독립 판정: [publication-entry31-r3-review.json](publication-entry31-r3-review.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 교환환급은 합의·권고 기준임을 이득에서 구분. 치료비 인과관계·제조물3배 조건 및1372 조정 권한 원문 미확인.
- 종결: r5/r7 direct primary 제조물책임법3②/4 and food criteria; exact statement now assigns weighted damages to3②. No new source/number/DOI or other byte change.

### 5-32

- 결정: approve / approved_for_integration
- 최신 full SHA: `415b2f3763f986bb3db002942a17b211a7c7e24f1a82f8591699c206ddbe345f`
- 독립 판정: [publication-partial-review-r5.json](publication-partial-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 대상제품 제한·중개예외·효율등급 법령 및 SafetyKorea 실제 기능 직접 미확인. 모든 상품 KC 의무로 확대 금지.
- 종결: 실제20251001법9/10전체와에너지법15전체직접읽음.안전인증대상·인증/면제/검사표시구별·표시없는제품의판매중개금지/통신중개세조치AND·법정매체광고/제품효율표시범위일치.모든제품KC의무·모든광고매체의무로확대하지않음.SafetyKorea새HTTPS200실제인증정보검색/리콜검색/제품사고신고메뉴확인.이후개정미확인·한국시장전체불량률효과미확인독자유보유지.

### 5-33

- 결정: approve / approved_for_integration
- 최신 full SHA: `d2cb4aaf9e41a65a79b62177a659374ee25e1940432519be90a896e27f6270ba`
- 독립 판정: [publication-partial-review-r5.json](publication-partial-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 개소세는 소매표시가격 전체가 아닌 법정과세가격 초과분이라고 비고 구분됨. 500/200만원·20% 및 대부이자 원문 미확인.
- 종결: 실제개소세법1②2가목/20과령4직접읽음.보석(공업다이아/원석/나석제외·나석제품포함),귀금속500만원/시계가방200만원초과의법정물품가격기준과20%일치.소매표시가격전체과표아님보존.중고재판매만으로환급되는것아님은20의수출/면세원료/환입등특수환급과혼동하지않음.개인대상대부20%/수수료포함·담보설정/법정조회비용예외는앞서읽은대부법8·령5범위유지.장기가격상승/등록가거래가추정은검증수치로추가안함.

### 5-34

- 결정: approve / approved_for_integration
- 최신 full SHA: `07235d414516313aa13b8913177ab13d5cc7fb22d6633b52b7d1a1645f979566`
- 독립 판정: [publication-partial-reassessment-review-r2.json](publication-partial-reassessment-review-r2.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 보증서와 감정서 구분·환급기준의 권고성·배상 인과관계 및1개월/1년 직접 미확인. 한국 법정 감정자격 미확인을 존재부정으로 바꾸면 안 됨.
- 종결: 변경은 비고의 두 incoming anchor를 두 문장으로 분할한 것. 귀금속 표 주장·책임 범위는 supplement에서 직접 읽은 동일값/조건.5행 중 함량중량/치수1개월/도금입힘1년/표시차이를 정확히 반영. 조립불량5행은 본문에 주장하지 않아 추가할 필요 없음. 공통기준과 품목의 다른 예외를 새로 확대하지 않음. 미확인 감정서 법정자격은 독자 유보 유지.

### 5-35

- 결정: approve / approved_for_integration
- 최신 full SHA: `4d39332f12562e3040206192f28f3b51c5f22329c0a3163a5a1b022542c596bd`
- 독립 판정: [publication-partial-reassessment-review-r5.json](publication-partial-reassessment-review-r5.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 수정 필요 확정: 법17조6항 단서는 디지털콘텐츠 철회불가 "표시와 함께" 시험사용 제공 등 요구. "표시하거나 맛보기"는 조건 오류. 시행령21조의2는 미리보기/기간체험/기능제한/곤란시 정보제공 중 하나 이상. 3배배상 게임법 및 소규모 적용예외는 원문 미확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-36

- 결정: approve / approved_for_integration
- 최신 full SHA: `bf0c07ae1b0991bb6167f1d9f27de0399e87dd654e463c4a35e6738befdc62b6`
- 독립 판정: [publication-partial-review-r6.json](publication-partial-review-r6.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 즉석판매 게시 대체·선식/택배예외·얼음제외중량 고시 직접 미확인. 2026시행판 근거인지 후속 확인.
- 종결: 실제법4전체·2025-27/2025-60/2026-37세고시의해당게시/중량조항과부칙직접읽음.즉석판매대상식품게시대체·선식/우편택배예외·얼음막및먹기전버리는액체중량제외·자연발생액체예외일치.2025-27시행20260101/일부즉시,2025-60발령즉시·시행후제조가공수입적용,2026-37본칙20280101/고시일즉시예외너8및표5는해당조항아님을구별.인산염허용량미검증/수치미수록제한유지.물많음만으로첨가물위법이라고단정안함.영양표시효과연구를주장하는항목이아니며주장범위는식품표시규정/중량안내.

### 5-37

- 결정: approve / approved_for_integration
- 최신 full SHA: `3157c81446c5b07572216a2b15cf9a32fa9db698f679f1a8892659a1acfe3208`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: Odean 캐시는 DOI/서지만 확인. PGR/PLR·0.135/0.094·3.4%p·세후4.4% 본문표 미확인. 미국세제와 한국세제를 분리한 경고 보존.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-38

- 결정: approve / approved_for_integration
- 최신 full SHA: `83d6309c40b710296b3c9ec8dc60c219c4091bf5079e027db498c4ef69ba114f`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 국외주식 신고·5만달러·20억원 처벌·월말5억·6월·250만22% 조문 원문 미확인. 해외계좌신고 면제대상·월말 합산을 쉽게에 보존 검토.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-39

- 결정: approve / approved_for_integration
- 최신 full SHA: `c60007d0336c0a9f9cc572273a580bf9f6882d833e88363587870cea0223d8c2`
- 독립 판정: [publication-partial-review-r7.json](publication-partial-review-r7.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 보험료 구조·보험지수 정의·공시 원문 미확인. 개인별 보장 우선순위는 C 경험칙으로 유지.
- 종결: 보험업법124 및 감독규정7-45⑦/⑪·7-46① 전체 관련 범위와 2026-3호 부칙1·2를 직접 읽었다. 일반손해보험/자동차/단체·특정단체 예외, 부가보험료지수 1.4배 예외와 외화/자동차 제외, 채널별 수수료 공시 제외, 20260301 시행 및 이후 최초 기초서류 작성·변경/판매개시 조건에 부합한다. 협회 실제 웹 공시는 미열람임을 독자에게 표시한다. 감당 가능한 소액손실·비상금·소득공백 판단은 C등급 저자 조언이며 실측 이익으로 제시하지 않는다.

### 5-40

- 결정: approve / approved_for_integration
- 최신 full SHA: `4140ff8a89c176ee64d258fcbaf1572aaa1068da965b1cd95cf2f8fec01e1f41`
- 독립 판정: [publication-partial-review-r7.json](publication-partial-review-r7.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 15세미만 사망보험 무효 조문 및 예외 직접 미확인. "아이가 아파도 소득 줄지 않음"은 돌봄 휴직/실직 가능성을 배제하여 단정 완화 검토.
- 종결: 상법730·731·732 원문 전체를 직접 읽었다. 사망/생존 보험금, 타인 사망의 계약 당시 서면·법정 전자문서 동의, 15세 미만/심신상실/심신박약 무효와 심신박약자 의사능력 예외가 맞다. 소득대체 필요액은 공식 법정 산식과 구분된 저자 조언이며 양육으로 인한 부모 소득 감소도 보존했다. 중국 아동 금액은 미검증·미채택임을 명시한다.

### 5-41

- 결정: approve / approved_for_integration
- 최신 full SHA: `902e2095803cc5a6e4519c073f958bd0fc7991644f5ec3cb6de0a6d8fcfbdd76`
- 독립 판정: [publication-entry41-r4-review.json](publication-entry41-r4-review.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 15일/30일·더긴약정·발송효력·3영업일·사고발생인지 예외·90일·건강진단·저축/변액 적용범위·3개월취소·1년/5년 해지 법령 직접 미확인. 반드시 원문 후속 대조.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-42

- 결정: approve / approved_for_integration
- 최신 full SHA: `f95d1be6a40ea3f4ac97cad4d7fdf57317d0a44425011523d0c819c8a41847d7`
- 독립 판정: [publication-partial-review-r8.json](publication-partial-review-r8.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 방카슈랑스 고지·분리창구·대출끼움·변액 예금보호 예외 원문 미확인. 중국65세 규칙 미적용이 명시됨.
- 종결: 보험업법100 전체·시행령40 전체·금소법21 전체·감독규정4-35조의2⑧ 전체와 관련 부칙을 직접 읽었다. 보험 미가입 대출 영향 없음 고지, 대리점/보험회사 책임 고지, 창구 분리, 미동의 보험료 대출 포함 금지가 일치한다. 사업비 운용·금리확정형 제외·법인/비경로우대 온라인 제외·변액 위험 및 예금보호 설명의무도 원문 범위다. 변액 최저보증 부분은 독자 본문에서 미확인임을 반복 표시하므로 모든 부분의 보호 여부가 확정됐다고 승인하지 않는다. 중국65세 규칙은 한국 적용 주장으로 옮기지 않았다.

### 5-43

- 결정: approve / approved_for_integration
- 최신 full SHA: `fafa2875756a91d03ef8666d3e29a104488dd860dd9d192e364f3dae3486d226`
- 독립 판정: [publication-partial-review-r8.json](publication-partial-review-r8.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 부당승환1개월/6개월·자필예외·비교고지·부활6개월·조정30/60일·해지3개월 등 원문 미확인. "보험 깨면 즉시" 보장종료는 철회/해지/승환 구분 유지.
- 종결: 보험업법97①5/11·③·④·⑤, 금소법36/47, 시행령38, 상법638의3/651을 직접 읽었다. 부당 유사계약 전환의1개월·6개월 기준과 자필 동의 예외, 중개사 제외·모집자 소속/위탁 회사에 소멸 후6개월 내 회복 및 새계약 취소,30일/회부 후60일 분쟁조정 및 예외가 보존된다. 위법계약은 안 날1년/계약일5년, 증빙서류·자동차 다른 동종책임보험·10일 회신·20210325 이후 계약 조건이 맞다. 상법 약관 미교부/중요설명 위반의 성립 후3개월 취소도 맞다. 중국 대리해지 경보를 한국 당국 경보로 바꾸지 않으며 한국 미확인 제한을 유지한다.

### 5-44

- 결정: approve / approved_for_integration
- 최신 full SHA: `730a7c920f1b46645a4dbe3a029d3a1c0b5a398a5bb84f17152c699fdb8a5264`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 수익자 미지정/사망별 귀속·판례 고유재산·상속세 별개·3년 시효 원문 미확인. 쉽게의 단일 귀속 문장이 세부경우를 혼동하지 않는지 후속 확인.
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

### 5-45

- 결정: approve / approved_for_integration
- 최신 full SHA: `c2a722c7337d799c8e31e543fe6717fc15abbd0503d89b768e4e9ee156f01ecd`
- 독립 판정: [publication-partial-reassessment-review-r1.json](publication-partial-reassessment-review-r1.json)
- 초기 지적: - 상태: pending_candidate_review - 확인 범위: 가상자산 분리보관·유사수신·미신고처벌·FBI권한 사기 경보 원문 미확인. 신고사업자 거래 가능과 시세손실 미보장 구분은 보존; 불공정거래 손해배상 가능성까지 부정 금지.  ## 기계 경고와 후속 검토  기계 검사 block0·warn13 재확인. 중국 기준·주택공적금 등은 중국 비교 또는 한국에 없다는 명시 문맥입니다. 단어만으로 오류로 판단하지 않았습니다. 실증 중국 자료의 수치는 원자료 검증이 별도로 필요합니다.  후속: candidate.md와 모든 editorial-proposal.json 생성 후 현재 SHA와 before를 필드별 대조하고 approve/revise/reject를 결정합니다. 현재는 최종 편집 승인 및 KR-FIT pass 없음.  ## 2차 핵심 한국 법·제도 검증 (후보 전, 2026-10-18)  아래는 초기의 미확인 기록을 대체하는 실제 원문 검토입니다. 공식 원문 캐시를 직접 열었으며, 루트 수집을 새 실시간 요청으로 표현하지 않습니다. 신규 요청한 국세기본법·행정규칙·판례는 요청 메타데이터를 별도 표시합니다. 후보가 없어 편집 승인 상태는 계속 pending_candidate_review입니다.  ```json [   {     "mst": "284389",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284389&type=XML",     "requested_at": "2026-10-18T12:37:54.994541+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "조세특례제한법",     "effective_date": "20260918",     "law_id": "001584",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284389.xml",     "sha256": "c4d88fcbc2ad79526866b2614a30b2c610079a672d2105c429ce497670dc5569",     "bytes": 2499475,     "article_count": 493,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "c4d88fcbc2ad79526866b2614a30b2c610079a672d2105c429ce497670dc5569",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "288915",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288915&type=XML",     "requested_at": "2026-10-18T12:38:15.765851+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "조세특례제한법 시행령",     "effective_date": "20260918",     "law_id": "004920",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/288915.xml",     "sha256": "b96a47d5b7a0de512c2e92b1be6d46fa346940a34089220b39e8838061345e8b",     "bytes": 3459081,     "article_count": 484,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "b96a47d5b7a0de512c2e92b1be6d46fa346940a34089220b39e8838061345e8b",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "284415",     "chapters": [       5,       8,       13,       27,       30     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284415&type=XML",     "requested_at": "2026-10-18T12:37:55.111996+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "민법",     "effective_date": "20260317",     "law_id": "001706",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284415.xml",     "sha256": "cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df",     "bytes": 1098134,     "article_count": 1337,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "285273",     "chapters": [       5,       13,       16,       24,       27     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285273&type=XML",     "requested_at": "2026-10-18T12:37:57.198257+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "국민건강보험법",     "effective_date": "20261008",     "law_id": "001971",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285273.xml",     "sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7",     "bytes": 353154,     "article_count": 159,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "290599",     "chapters": [       5,       24,       27     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290599&type=XML",     "requested_at": "2026-10-18T12:38:31.753739+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "국민건강보험법 시행규칙",     "effective_date": "20260928",     "law_id": "006696",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290599.xml",     "sha256": "dcea033f138d9ece7311e9ee3aa216c8edd0b36674038c8081d60a11a3ab0982",     "bytes": 1743459,     "article_count": 77,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "dcea033f138d9ece7311e9ee3aa216c8edd0b36674038c8081d60a11a3ab0982",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "280405",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280405&type=XML",     "requested_at": "2026-10-18T12:37:33.260388+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "소득세법",     "effective_date": "20260101",     "law_id": "001565",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280405.xml",     "sha256": "c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87",     "bytes": 1209440,     "article_count": 393,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "290841",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290841&type=XML",     "requested_at": "2026-10-18T12:38:41.683888+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "소득세법 시행령",     "effective_date": "20261001",     "law_id": "003956",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290841.xml",     "sha256": "402597aa7e96fb8486e32088133f02e36277bebbe20588426c81490eb6b3fd71",     "bytes": 2964601,     "article_count": 507,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "402597aa7e96fb8486e32088133f02e36277bebbe20588426c81490eb6b3fd71",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "289683",     "chapters": [       5,       24     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289683&type=XML",     "requested_at": "2026-10-18T12:38:20.200347+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "자동차손해배상 보장법 시행령",     "effective_date": "20260915",     "law_id": "004594",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/289683.xml",     "sha256": "7f3d9d16dc237b41a5c0bcb099d6710ad1514c537d0ce120522f3e0f00b91c0e",     "bytes": 379438,     "article_count": 92,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "7f3d9d16dc237b41a5c0bcb099d6710ad1514c537d0ce120522f3e0f00b91c0e",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "290659",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290659&type=XML",     "requested_at": "2026-10-18T12:38:38.241396+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "자동차손해배상 보장법",     "effective_date": "20261002",     "law_id": "001746",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290659.xml",     "sha256": "ee654142ff8b01f80acb71ae0cace8e68fc734d3c3a97d91ccbe8923fa42387e",     "bytes": 193352,     "article_count": 98,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "ee654142ff8b01f80acb71ae0cace8e68fc734d3c3a97d91ccbe8923fa42387e",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "277247",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277247&type=XML",     "requested_at": "2026-10-18T12:37:24.892526+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "금융소비자 보호에 관한 법률",     "effective_date": "20260102",     "law_id": "013704",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277247.xml",     "sha256": "df88739da5899708ec4c7cb5a254e4794b9cef8f9680b97c7ce376200d21e8bf",     "bytes": 234457,     "article_count": 87,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "df88739da5899708ec4c7cb5a254e4794b9cef8f9680b97c7ce376200d21e8bf",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "273629",     "chapters": [       5,       8     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=273629&type=XML",     "requested_at": "2026-10-18T12:37:16.807462+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "상법",     "effective_date": "20260910",     "law_id": "001702",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/273629.xml",     "sha256": "48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22",     "bytes": 1408341,     "article_count": 1304,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "285715",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285715&type=XML",     "requested_at": "2026-10-18T12:38:04.757104+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "금융소비자 보호에 관한 법률 시행령",     "effective_date": "20260428",     "law_id": "014044",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285715.xml",     "sha256": "f4cc2ef36e09e278b9bb1b55e121b9a1520a8a68f292bab94e267f07eefb7ab1",     "bytes": 266248,     "article_count": 53,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "f4cc2ef36e09e278b9bb1b55e121b9a1520a8a68f292bab94e267f07eefb7ab1",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "280389",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML",     "requested_at": "2026-10-18T12:37:32.710780+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "국제조세조정에 관한 법률",     "effective_date": "20260101",     "law_id": "000603",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280389.xml",     "sha256": "0a598740eeba1fe889df5afd3396a517810a72545b07b212c0e34fc1c59a8770",     "bytes": 367030,     "article_count": 128,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "0a598740eeba1fe889df5afd3396a517810a72545b07b212c0e34fc1c59a8770",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "283629",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML",     "requested_at": "2026-10-18T12:37:48.665826+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "국제조세조정에 관한 법률 시행령",     "effective_date": "20260227",     "law_id": "002942",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283629.xml",     "sha256": "1b715ee17c00ac659c9a729aeeac644fb05e9dbd37fd36b526087ce741f6f90a",     "bytes": 648841,     "article_count": 194,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "1b715ee17c00ac659c9a729aeeac644fb05e9dbd37fd36b526087ce741f6f90a",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "276137",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276137&type=XML",     "requested_at": "2026-10-18T12:37:18.097008+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "외국환거래법",     "effective_date": "20260102",     "law_id": "001525",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/276137.xml",     "sha256": "c264929821722c913d423fb7c57c7ff80ac4b7ab2364e1dfeb7bce5adf199c9c",     "bytes": 134246,     "article_count": 43,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "c264929821722c913d423fb7c57c7ff80ac4b7ab2364e1dfeb7bce5adf199c9c",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "mst": "285607",     "chapters": [       5     ],     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285607&type=XML",     "requested_at": "2026-10-18T12:38:04.297042+00:00",     "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",     "http_status": 200,     "status": "statutory_xml_cached",     "title": "외국환거래법 시행령",     "effective_date": "20260428",     "law_id": "004273",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285607.xml",     "sha256": "b8b5d36ac0b1d2073ebb28dc3a6b73ab2393bbbe9f89badc41be5a92ab93338e",     "bytes": 291351,     "article_count": 71,     "review_mode": "cached_xml_opened_2026-10-18",     "actual_sha256": "b8b5d36ac0b1d2073ebb28dc3a6b73ab2393bbbe9f89badc41be5a92ab93338e",     "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."   },   {     "id": "289999",     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289999&type=XML",     "requested_at": "2026-10-18T12:40:35.998305+00:00",     "tls_verification": true,     "http_status": 200,     "sha256": "7bef4053b5934f73d35d857f594ff58e8eaf94214d7b622289f983c9dd1eb603",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/289999.xml",     "bytes": 549231   },   {     "id": "2100000285140",     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285140&type=XML",     "requested_at": "2026-10-18T12:40:35.999182+00:00",     "tls_verification": true,     "http_status": 200,     "sha256": "1ca8fc0af06bd5fcf36fbac9f07e5f23c76c8cbe44cb3a0aa6e5c1ad612b5688",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/2100000285140.xml",     "bytes": 764297   },   {     "id": "2100000285608",     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285608&type=XML",     "requested_at": "2026-10-18T12:40:35.999638+00:00",     "tls_verification": true,     "http_status": 200,     "sha256": "61db1d0e49a62348ea47b2d8516133c6b94e71905f38c84815a68836fa67fd08",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/2100000285608.xml",     "bytes": 265754   },   {     "id": "83347",     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=83347&type=XML",     "requested_at": "2026-10-18T12:41:42.388361+00:00",     "tls_verification": true,     "http_status": 200,     "sha256": "780d3977383ce2832b03e4e8e1dca6d69ab8c3861fae2d49d693bf05a44caa66",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/prec-83347.xml",     "bytes": 11985   },   {     "id": "191837",     "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=191837&type=XML",     "requested_at": "2026-10-18T12:41:42.389171+00:00",     "tls_verification": true,     "http_status": 200,     "sha256": "c8ddb723f0a114ebd4fcee7620c2b85f6517128d3dd1f62a2613e9dec5aef285",     "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/prec-191837.xml",     "bytes": 2755   } ] ```
- 종결: Exact independent report contains the actual reading scope and retained limitations; reuse only that scope.

## 남은 범위와 통합 조건

자료 접근 실패·초록/서지·검색·HTML 프레임을 원문 검증으로 세지 않았다. 실제 열어 읽은 URL/HTTP/시각/원시 경로/SHA/범위는 각 exact 보고서와 초기 보존본에 있다. 이번 closure는 새 HTTP가 아니며 기존 직접읽기 범위만 재사용한다.

장말은 기존14개 주제를 보존하고 SPIVA 존재만 확인 범위로 갱신한다. 나머지13개 주제와 개별 본문 유보는 그대로 남긴다. 초기 실제 오류는 새 full에서 수정·조건 보완됐고, 미열람은 독자 범위를 제한했을 때만 종결로 표시했다. 5항을 연금으로 잘못 기술했던 초기 부분검토는 reassessment-r4의 명시적 정정이 우선한다.

내외 참조는 최신 대상 본문 및 범위로 대조했고 정확 경로/SHA를 decisions에 고정했다. 16절3항 연결은 수첩 기록에 한정하며 중복검사 비용 절감 보장을 승인하지 않는다. 타 절 변경 후 전체 참조를 ROOT가 다시 검사해야 한다.

ROOT는 before 전체 entry SHA와 각 단계 SHA를 확인해 별도 통합 후보를 만들고 실제 gate와 정식 최종 검토를 받아야 한다. field56개는 최신 full로 모두 대체돼 중복 적용하지 않는다.
