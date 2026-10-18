# 제5절 출판 원자료 독립 감사

검토일: 2026-10-18 UTC. 상태: **pending_candidate_review**. 후보가 없어 최종 승인하지 않았습니다. 이 기록은 정식 KR-FIT 승인이 아닙니다.

검토 대상: source.md 및 manifest의 45개 entry_snapshot.md. source SHA256: 6f34f5dbe2095e729683aad99ee62cb9bac6f3ca15c2ad205befcbcb2fa1d44a

AGENTS.md, CLAUDE.md, KR-GUIDE.md, 출판 CONTRACT, kr-fit-review, humanize-kr, humanize-korean 규칙과 기존 조사기록을 읽었습니다. 기존 조사기록의 2026-10-10 확인 주장은 이번 직접 열람으로 간주하지 않았습니다.

## 직접 HTTPS 열람 원시자료

```json
[
  {
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=282793&type=XML",
    "checked_at": "2026-10-18T12:36:08.073438+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "f970ec9e84bae3c139fe8e190c9dda527662a64b9353daa0ee5dd3e7934250f7",
    "bytes": 191964,
    "cache_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/282793.xml"
  },
  {
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288143&type=XML",
    "checked_at": "2026-10-18T12:36:52.026513+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "754355c0b0ab2b7a5b5d9662afa9c3ed681d9557ce9ea179daef883b1c84fd67",
    "bytes": 218170,
    "cache_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/288143.xml"
  }
]
```

두 응답은 화면 wrapper가 아니라 실제 조문 XML입니다. 기본 시행일 20260721을 확인했습니다. 전자상거래법 제20조의5는 기본정보에 20270121 별도 시행으로 표시되므로 현재 조언 근거로 사용하지 않았습니다. 아래 검토한 제13·17·18·20·20조의2·21조의2 및 시행령 제20조의2·21·21조의2를 직접 읽었습니다.

## 실제 열람한 논문 캐시

새 HTTP가 아닙니다. Crossref의 서지·초록만으로 원문 세부표가 검증됐다고 판단하지 않았습니다. Europe PMC 무검색 결과는 논문 내용 오류가 아닙니다.

```json
[
  {
    "doi": "10.1086/605298",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1086%2F605298%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.238550+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "addc3c400fc0ee997560145db2904d905e61e434ec495464e83689a17897e334",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/8fea7a93be8c7b6e624c.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "addc3c400fc0ee997560145db2904d905e61e434ec495464e83689a17897e334",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1001/jama.2008.758",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2008.758%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.431204+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2beb441c3da9f2e438804e0071fd739f0ce17cab811e9043d553618f207c7445",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/03708d6fbb728c000a08.json",
    "hit_count": 1,
    "abstract_present": true,
    "actual_sha256": "2beb441c3da9f2e438804e0071fd739f0ce17cab811e9043d553618f207c7445",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00226",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2F0022-1082.00226%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.603010+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "a5f928b0c5ae2668ff50bac7bbd5df430d9ea65f3762c99192fc43cb1101c6d5",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e9245621627a6c47e93a.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "a5f928b0c5ae2668ff50bac7bbd5df430d9ea65f3762c99192fc43cb1101c6d5",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1016/j.jmoneco.2022.01.001",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jmoneco.2022.01.001%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.776718+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "33b0427cd65993395e278699663475f8ed657fb198e50cf7fb674edc2bbc328a",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/72bc57c7e64443ceb097.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "33b0427cd65993395e278699663475f8ed657fb198e50cf7fb674edc2bbc328a",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.2010.01598.x",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1540-6261.2010.01598.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.944387+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "9cf420c4023763ef3f0d8687b19d6cf5535550a101015982a625f26cbcd1b414",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/89d1d2bf43e3d7525279.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "9cf420c4023763ef3f0d8687b19d6cf5535550a101015982a625f26cbcd1b414",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/jofi.13123",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fjofi.13123%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:34.116807+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "33eb9360ae7c5f0b6f783dd667bb3006ed7ad6521331f7817d0a719932e306e3",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c74e417ec3df3bf06482.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "33eb9360ae7c5f0b6f783dd667bb3006ed7ad6521331f7817d0a719932e306e3",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1126/science.185.4157.1124",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1126%2Fscience.185.4157.1124%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:36.568113+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "4f7b159653b480c6f31bb689a0e5aee3940d09724c8ceb41267c4b601a2db4d6",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7b6ce6858cf5196e5c2b.json",
    "hit_count": 1,
    "abstract_present": true,
    "actual_sha256": "4f7b159653b480c6f31bb689a0e5aee3940d09724c8ceb41267c4b601a2db4d6",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00072",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2F0022-1082.00072%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:36.906223+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "1bd437864ac4b8c923b59ea96ae079caff8c6f4e892787a6c902dfc04f87d0e3",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ffe728acb2e556b8ae51.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "1bd437864ac4b8c923b59ea96ae079caff8c6f4e892787a6c902dfc04f87d0e3",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.1952.tb01525.x",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1540-6261.1952.tb01525.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:34.275094+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "807329e0a537135ffac0dea6fad970153ecf2e12508ed93a5ffb74fac35c661c",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/494ab1d4ec1600edd8e8.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "807329e0a537135ffac0dea6fad970153ecf2e12508ed93a5ffb74fac35c661c",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1257/aer.96.3.694",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1257%2Faer.96.3.694%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:34.913440+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "1b6da8953e4270a5d5e9eb2c5e38e6ed18eae7199d84c1726d23030861cf513f",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c9aa7405844b418a36c5.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "1b6da8953e4270a5d5e9eb2c5e38e6ed18eae7199d84c1726d23030861cf513f",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1086/605298",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1086%2F605298",
    "fetched_at": "2026-10-18T20:52:29.868543+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "fc1e03d54eeb298417d28bb93a2888287ed30bc9041e173fa3a272be47432baa",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/8fea7a93be8c7b6e624c.json",
    "actual_sha256": "fc1e03d54eeb298417d28bb93a2888287ed30bc9041e173fa3a272be47432baa",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00226",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2F0022-1082.00226",
    "fetched_at": "2026-10-18T20:52:30.094395+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "0431658cbcc4a4a0dc6902d4249f517130cc07c1b7e6d3e9c211795ada3d8efd",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/e9245621627a6c47e93a.json",
    "actual_sha256": "0431658cbcc4a4a0dc6902d4249f517130cc07c1b7e6d3e9c211795ada3d8efd",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1016/j.jmoneco.2022.01.001",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1016%2Fj.jmoneco.2022.01.001",
    "fetched_at": "2026-10-18T20:52:30.251697+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "310604266d958d7b40c7ffeb948808641253f57a7f6030ba83746933090759d1",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/72bc57c7e64443ceb097.json",
    "actual_sha256": "310604266d958d7b40c7ffeb948808641253f57a7f6030ba83746933090759d1",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.2010.01598.x",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2Fj.1540-6261.2010.01598.x",
    "fetched_at": "2026-10-18T20:52:30.275829+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "f92a91db382af317b9f4dca21f8a3d21db263d11d9f529f342501d964432e84b",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/89d1d2bf43e3d7525279.json",
    "actual_sha256": "f92a91db382af317b9f4dca21f8a3d21db263d11d9f529f342501d964432e84b",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/jofi.13123",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2Fjofi.13123",
    "fetched_at": "2026-10-18T20:52:30.382708+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "ea3f6abbc94d06f947fd17e1c8714471c927a217857be4d50b5900d9e665cab9",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/c74e417ec3df3bf06482.json",
    "actual_sha256": "ea3f6abbc94d06f947fd17e1c8714471c927a217857be4d50b5900d9e665cab9",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00072",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2F0022-1082.00072",
    "fetched_at": "2026-10-18T20:52:30.637411+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "3dfcbc1029692e4bfa0ed4f418f728f253981705e8790e5ef1a7128b6540a93e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/ffe728acb2e556b8ae51.json",
    "actual_sha256": "3dfcbc1029692e4bfa0ed4f418f728f253981705e8790e5ef1a7128b6540a93e",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.1952.tb01525.x",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2Fj.1540-6261.1952.tb01525.x",
    "fetched_at": "2026-10-18T20:52:30.725328+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "55a79b78e8da1c6313b31c329e81af75d59c5cf231892c94932400cc4c07797e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/494ab1d4ec1600edd8e8.json",
    "actual_sha256": "55a79b78e8da1c6313b31c329e81af75d59c5cf231892c94932400cc4c07797e",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1257/aer.96.3.694",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1257%2Faer.96.3.694",
    "fetched_at": "2026-10-18T20:52:30.789353+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "0ea04e18ee5379bbe86f56595a1da0a2371606ba0fa2fc2f3e547bd387b43e08",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/c9aa7405844b418a36c5.json",
    "actual_sha256": "0ea04e18ee5379bbe86f56595a1da0a2371606ba0fa2fc2f3e547bd387b43e08",
    "review_mode": "cached_response_opened_2026-10-18"
  }
]
```

## 항목별 실제 확인 범위

후보 부재와 미확인 근거 때문에 적합/pass로 처리한 항목은 없습니다.

### 5-1
- 상태: pending_candidate_review
- 확인 범위: 수정 필요: 해지절차 금지의 "정당한 사유 없이"가 쉽게·이득에서 빠짐. 법21조의2제1항4호 직접 확인. 30일은 시행령20조의2와 일치. 방문판매 계속계약 통지·예외는 아직 원문 미확인.

### 5-2
- 상태: pending_candidate_review
- 확인 범위: 법137·73·70·45조의2 및 의료비 가족요건 원문 미확인. 5년 기산점·2개월 답변·합산 신고를 후속 확인.

### 5-3
- 상태: pending_candidate_review
- 확인 범위: 총급여8천/종합소득7천, 15/17%, 1천만원 한도와 주택요건 법령 직접 미확인. 쉽게에는 소득·주택·세액한도 조건 축약 위험. 주택공적금은 한국에 없음을 명시한 비교이므로 기계 경고 자체를 오류로 보지 않음.

### 5-4
- 상태: pending_candidate_review
- 확인 범위: 전기통신사업법·시행령·기관명·스마트초이스 직접 미확인. 할인반환금 경고 보존 필요.

### 5-5
- 상태: pending_candidate_review
- 확인 범위: 판매액 절반의 기대값 계산은 1000×0.5=500으로 확인. 확률·세율·동행복권 현재 1차 원문은 미확인. 비고 "반드시"는 개인 실현손실 보장으로 오독될 수 있어 기대값 표현 권장.

### 5-6
- 상태: pending_candidate_review
- 확인 범위: 유사수신·손실보전·부당권유 조문 원문 미확인. 합법 예금과 투자 구분은 보존.

### 5-7
- 상태: pending_candidate_review
- 확인 범위: 20%·60% 계약무효·미등록 원금/이자·비용 예외 적용범위 및 시행일 원문 미확인. 쉽게의 "모두20%"와 이득의 미등록0% 관계 후속 검토.

### 5-8
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법17조2항5호 직접 확인. 가분적 콘텐츠 미제공 부분 예외가 존재. 미성년 예외는 민법 원문 미확인.

### 5-9
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법13조3항 취소가능 고지 직접 확인. 민법 나이·처분허락·속임수·최고·시효는 원문 미확인. 쉽게의 1개월 이상·속임수 예외 보존 검토.

### 5-10
- 상태: pending_candidate_review
- 확인 범위: 112·1394·지급정지 요건·양도처벌 조문 직접 미확인. "신고와 지급정지로만"은 민사 구제 배제처럼 읽힐 수 있어 단정 완화 검토.

### 5-11
- 상태: pending_candidate_review
- 확인 범위: Crossref 제목·DOI 확인만 완료, 본문 없음. 10~50%·18배·BestBuy 이익 수치는 논문 실측 아닌 업계 인용으로 구분됨. 법정 보증기간 직접 미확인.

### 5-12
- 상태: pending_candidate_review
- 확인 범위: JAMA 초록 직접 캐시 열람. 47편·9계열·38RCT·효과크기−0.03/CI−0.15~0.08·사설23/43=53% 일치. 837명 통합분모를 필요시 명시 가능. 한국 대체조제·90%CI/80~125% 조문 미확인. 쉽게에는 의사 대체불가 임상사유 예외 누락 위험.

### 5-13
- 상태: pending_candidate_review
- 확인 범위: 연2000만원·사업소득·재산5.4/9억·형제1.8억·90일 및 상실일 직접 미확인. 중국 개인계좌는 한국 부재 명시한 비교.

### 5-14
- 상태: pending_candidate_review
- 확인 범위: 620원/1000L=0.62원, 500/0.62≈806 계산 확인. 인천 요금·수질기준 직접 미확인. 끓여도 화학오염 제거 안 된다는 경고 보존.

### 5-15
- 상태: pending_candidate_review
- 확인 범위: Barber/Odean Crossref 저자 초록 직접 캐시: 66465가구(계좌수와 구분), 1991~1996, 11.4/17.9/16.4%, 회전율75% 일치. 중국 4천만·28/31%·18개월 원문 미확인. 관찰자료를 인과로 단정하지 않도록 검토.

### 5-16
- 상태: pending_candidate_review
- 확인 범위: 140%·추가담보·다음영업일 반대매매·즉시처분 약정 예외 감독규정 직접 미확인.

### 5-17
- 상태: pending_candidate_review
- 확인 범위: Fama/French와 Harvey/Liu DOI·서지 확인. Harvey/Liu 초록의 undersampling 반론 일치. SPIVA65/64%·15년 범주·중국60.5/69.6/50.8% 원문표 미확인.

### 5-18
- 상태: pending_candidate_review
- 확인 범위: 0.99^20=81.79%, 0.99^30=73.97% 직접 계산과 일치. 0%/−1% 가정과 수수료 별도 조건 보존 필요. 투자 수익 보장으로 바꾸면 안 됨.

### 5-19
- 상태: pending_candidate_review
- 확인 범위: 수정 검토 필요: "나눠 두어도 기대수익은 그대로"는 임의의 분산에 대한 일반 명제로 성립하지 않음. 동일 기대수익 포트폴리오 비교 등 조건 필요. Markowitz 캐시는 서지뿐, 원문 미확인으로 근거판정 보류.

### 5-20
- 상태: pending_candidate_review
- 확인 범위: 600/900만원·12/15%·연금55세/5년·연1500·지방세·과세제외 원금·이연퇴직소득 예외 법령 미확인. 산식900만×12/15%=108/135만원 일치.

### 5-21
- 상태: pending_candidate_review
- 확인 범위: 저자 Crossref 초록: 미국3곳·7752명·3년·70달러 초과·4.3회·17달러 초과·10달러·600달러·17% 일치. 17%는 상대적 잔류확률 차이로 %포인트 전환 금지. 한국 환급기준·항변권 원문 미확인.

### 5-22
- 상태: pending_candidate_review
- 확인 범위: 계속거래10만원/3개월·언제든 해지의 법정/별도약정 예외·할부20만원/2개월3회·철회7일 직접 미확인. 쉽게 항변권에 결제횟수·기간 조건 누락 위험.

### 5-23
- 상태: pending_candidate_review
- 확인 범위: 수정 필요 확정: 주문제작 철회제한은 개별생산+회복불가 중대한 피해 예상+사전 별도고지+서면동의 조건 모두 필요(시행령21조). 쉽게·이득의 주문제작 일반 금지는 과도. 법17조1항의 주소 미고지/방해 후 기산 특례·가분적 미제공 부분·더 긴 약정 보존 검토. 반품비/위약금/3개월30일 원문 확인.

### 5-24
- 상태: pending_candidate_review
- 확인 범위: Tversky/Kahneman 초록의 anchoring 일반 개념 확인, 특정 할인표시와 손실액 실증 아님. 한국20일 고시 직접 미확인.

### 5-25
- 상태: pending_candidate_review
- 확인 범위: 최저보증이율·사업비·변액 보호 예외 감독규정 직접 미확인. 제목 환급 전부 비보장으로 읽히지 않게 보증/비보증 구분 필요.

### 5-26
- 상태: pending_candidate_review
- 확인 범위: 사망1.5억·부상3천·대물2천·과태료·형량 원문 미확인. 한도/피해자별/사고별 단위 유지.

### 5-27
- 상태: pending_candidate_review
- 확인 범위: 3~6개월은 경험칙 표시됨. 보호예금1억원·소정이자·금융회사별 한도 시행일 원문 미확인.

### 5-28
- 상태: pending_candidate_review
- 확인 범위: 대출금리만큼 확정이득은 수수료·세금공제·유동성 고려 전 비교임을 분명히 할 필요. 3년/법정예외·비용범위 감독규정 직접 미확인.

### 5-29
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법20조·20조의2 원문으로 사업자 신원정보·고지없음 연대책임·신원정보 상당주의 면책 범위 확인. 표시광고·추천보증·계약금·위약금감액은 원문 미확인.

### 5-30
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법20조2항 사업자 신원정보 및20조의2제2항 면책 확인. 개인판매자 정보는20조의4 별도절차이므로 "사업자 판매자" 제한 보존 필요.

### 5-31
- 상태: pending_candidate_review
- 확인 범위: 교환환급은 합의·권고 기준임을 이득에서 구분. 치료비 인과관계·제조물3배 조건 및1372 조정 권한 원문 미확인.

### 5-32
- 상태: pending_candidate_review
- 확인 범위: 대상제품 제한·중개예외·효율등급 법령 및 SafetyKorea 실제 기능 직접 미확인. 모든 상품 KC 의무로 확대 금지.

### 5-33
- 상태: pending_candidate_review
- 확인 범위: 개소세는 소매표시가격 전체가 아닌 법정과세가격 초과분이라고 비고 구분됨. 500/200만원·20% 및 대부이자 원문 미확인.

### 5-34
- 상태: pending_candidate_review
- 확인 범위: 보증서와 감정서 구분·환급기준의 권고성·배상 인과관계 및1개월/1년 직접 미확인. 한국 법정 감정자격 미확인을 존재부정으로 바꾸면 안 됨.

### 5-35
- 상태: pending_candidate_review
- 확인 범위: 수정 필요 확정: 법17조6항 단서는 디지털콘텐츠 철회불가 "표시와 함께" 시험사용 제공 등 요구. "표시하거나 맛보기"는 조건 오류. 시행령21조의2는 미리보기/기간체험/기능제한/곤란시 정보제공 중 하나 이상. 3배배상 게임법 및 소규모 적용예외는 원문 미확인.

### 5-36
- 상태: pending_candidate_review
- 확인 범위: 즉석판매 게시 대체·선식/택배예외·얼음제외중량 고시 직접 미확인. 2026시행판 근거인지 후속 확인.

### 5-37
- 상태: pending_candidate_review
- 확인 범위: Odean 캐시는 DOI/서지만 확인. PGR/PLR·0.135/0.094·3.4%p·세후4.4% 본문표 미확인. 미국세제와 한국세제를 분리한 경고 보존.

### 5-38
- 상태: pending_candidate_review
- 확인 범위: 국외주식 신고·5만달러·20억원 처벌·월말5억·6월·250만22% 조문 원문 미확인. 해외계좌신고 면제대상·월말 합산을 쉽게에 보존 검토.

### 5-39
- 상태: pending_candidate_review
- 확인 범위: 보험료 구조·보험지수 정의·공시 원문 미확인. 개인별 보장 우선순위는 C 경험칙으로 유지.

### 5-40
- 상태: pending_candidate_review
- 확인 범위: 15세미만 사망보험 무효 조문 및 예외 직접 미확인. "아이가 아파도 소득 줄지 않음"은 돌봄 휴직/실직 가능성을 배제하여 단정 완화 검토.

### 5-41
- 상태: pending_candidate_review
- 확인 범위: 15일/30일·더긴약정·발송효력·3영업일·사고발생인지 예외·90일·건강진단·저축/변액 적용범위·3개월취소·1년/5년 해지 법령 직접 미확인. 반드시 원문 후속 대조.

### 5-42
- 상태: pending_candidate_review
- 확인 범위: 방카슈랑스 고지·분리창구·대출끼움·변액 예금보호 예외 원문 미확인. 중국65세 규칙 미적용이 명시됨.

### 5-43
- 상태: pending_candidate_review
- 확인 범위: 부당승환1개월/6개월·자필예외·비교고지·부활6개월·조정30/60일·해지3개월 등 원문 미확인. "보험 깨면 즉시" 보장종료는 철회/해지/승환 구분 유지.

### 5-44
- 상태: pending_candidate_review
- 확인 범위: 수익자 미지정/사망별 귀속·판례 고유재산·상속세 별개·3년 시효 원문 미확인. 쉽게의 단일 귀속 문장이 세부경우를 혼동하지 않는지 후속 확인.

### 5-45
- 상태: pending_candidate_review
- 확인 범위: 가상자산 분리보관·유사수신·미신고처벌·FBI권한 사기 경보 원문 미확인. 신고사업자 거래 가능과 시세손실 미보장 구분은 보존; 불공정거래 손해배상 가능성까지 부정 금지.

## 기계 경고와 후속 검토

기계 검사 block0·warn13 재확인. 중국 기준·주택공적금 등은 중국 비교 또는 한국에 없다는 명시 문맥입니다. 단어만으로 오류로 판단하지 않았습니다. 실증 중국 자료의 수치는 원자료 검증이 별도로 필요합니다.

후속: candidate.md와 모든 editorial-proposal.json 생성 후 현재 SHA와 before를 필드별 대조하고 approve/revise/reject를 결정합니다. 현재는 최종 편집 승인 및 KR-FIT pass 없음.

## 2차 핵심 한국 법·제도 검증 (후보 전, 2026-10-18)

아래는 초기의 미확인 기록을 대체하는 실제 원문 검토입니다. 공식 원문 캐시를 직접 열었으며, 루트 수집을 새 실시간 요청으로 표현하지 않습니다. 신규 요청한 국세기본법·행정규칙·판례는 요청 메타데이터를 별도 표시합니다. 후보가 없어 편집 승인 상태는 계속 pending_candidate_review입니다.

```json
[
  {
    "mst": "284389",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284389&type=XML",
    "requested_at": "2026-10-18T12:37:54.994541+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "조세특례제한법",
    "effective_date": "20260918",
    "law_id": "001584",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284389.xml",
    "sha256": "c4d88fcbc2ad79526866b2614a30b2c610079a672d2105c429ce497670dc5569",
    "bytes": 2499475,
    "article_count": 493,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "c4d88fcbc2ad79526866b2614a30b2c610079a672d2105c429ce497670dc5569",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "288915",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288915&type=XML",
    "requested_at": "2026-10-18T12:38:15.765851+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "조세특례제한법 시행령",
    "effective_date": "20260918",
    "law_id": "004920",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/288915.xml",
    "sha256": "b96a47d5b7a0de512c2e92b1be6d46fa346940a34089220b39e8838061345e8b",
    "bytes": 3459081,
    "article_count": 484,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "b96a47d5b7a0de512c2e92b1be6d46fa346940a34089220b39e8838061345e8b",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "284415",
    "chapters": [
      5,
      8,
      13,
      27,
      30
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284415&type=XML",
    "requested_at": "2026-10-18T12:37:55.111996+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "민법",
    "effective_date": "20260317",
    "law_id": "001706",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284415.xml",
    "sha256": "cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df",
    "bytes": 1098134,
    "article_count": 1337,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "285273",
    "chapters": [
      5,
      13,
      16,
      24,
      27
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285273&type=XML",
    "requested_at": "2026-10-18T12:37:57.198257+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국민건강보험법",
    "effective_date": "20261008",
    "law_id": "001971",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285273.xml",
    "sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7",
    "bytes": 353154,
    "article_count": 159,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "290599",
    "chapters": [
      5,
      24,
      27
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290599&type=XML",
    "requested_at": "2026-10-18T12:38:31.753739+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국민건강보험법 시행규칙",
    "effective_date": "20260928",
    "law_id": "006696",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290599.xml",
    "sha256": "dcea033f138d9ece7311e9ee3aa216c8edd0b36674038c8081d60a11a3ab0982",
    "bytes": 1743459,
    "article_count": 77,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "dcea033f138d9ece7311e9ee3aa216c8edd0b36674038c8081d60a11a3ab0982",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "280405",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280405&type=XML",
    "requested_at": "2026-10-18T12:37:33.260388+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "소득세법",
    "effective_date": "20260101",
    "law_id": "001565",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280405.xml",
    "sha256": "c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87",
    "bytes": 1209440,
    "article_count": 393,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "290841",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290841&type=XML",
    "requested_at": "2026-10-18T12:38:41.683888+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "소득세법 시행령",
    "effective_date": "20261001",
    "law_id": "003956",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290841.xml",
    "sha256": "402597aa7e96fb8486e32088133f02e36277bebbe20588426c81490eb6b3fd71",
    "bytes": 2964601,
    "article_count": 507,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "402597aa7e96fb8486e32088133f02e36277bebbe20588426c81490eb6b3fd71",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "289683",
    "chapters": [
      5,
      24
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289683&type=XML",
    "requested_at": "2026-10-18T12:38:20.200347+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "자동차손해배상 보장법 시행령",
    "effective_date": "20260915",
    "law_id": "004594",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/289683.xml",
    "sha256": "7f3d9d16dc237b41a5c0bcb099d6710ad1514c537d0ce120522f3e0f00b91c0e",
    "bytes": 379438,
    "article_count": 92,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "7f3d9d16dc237b41a5c0bcb099d6710ad1514c537d0ce120522f3e0f00b91c0e",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "290659",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290659&type=XML",
    "requested_at": "2026-10-18T12:38:38.241396+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "자동차손해배상 보장법",
    "effective_date": "20261002",
    "law_id": "001746",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290659.xml",
    "sha256": "ee654142ff8b01f80acb71ae0cace8e68fc734d3c3a97d91ccbe8923fa42387e",
    "bytes": 193352,
    "article_count": 98,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "ee654142ff8b01f80acb71ae0cace8e68fc734d3c3a97d91ccbe8923fa42387e",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "277247",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277247&type=XML",
    "requested_at": "2026-10-18T12:37:24.892526+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "금융소비자 보호에 관한 법률",
    "effective_date": "20260102",
    "law_id": "013704",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277247.xml",
    "sha256": "df88739da5899708ec4c7cb5a254e4794b9cef8f9680b97c7ce376200d21e8bf",
    "bytes": 234457,
    "article_count": 87,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "df88739da5899708ec4c7cb5a254e4794b9cef8f9680b97c7ce376200d21e8bf",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "273629",
    "chapters": [
      5,
      8
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=273629&type=XML",
    "requested_at": "2026-10-18T12:37:16.807462+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "상법",
    "effective_date": "20260910",
    "law_id": "001702",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/273629.xml",
    "sha256": "48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22",
    "bytes": 1408341,
    "article_count": 1304,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "285715",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285715&type=XML",
    "requested_at": "2026-10-18T12:38:04.757104+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "금융소비자 보호에 관한 법률 시행령",
    "effective_date": "20260428",
    "law_id": "014044",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285715.xml",
    "sha256": "f4cc2ef36e09e278b9bb1b55e121b9a1520a8a68f292bab94e267f07eefb7ab1",
    "bytes": 266248,
    "article_count": 53,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "f4cc2ef36e09e278b9bb1b55e121b9a1520a8a68f292bab94e267f07eefb7ab1",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "280389",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML",
    "requested_at": "2026-10-18T12:37:32.710780+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국제조세조정에 관한 법률",
    "effective_date": "20260101",
    "law_id": "000603",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280389.xml",
    "sha256": "0a598740eeba1fe889df5afd3396a517810a72545b07b212c0e34fc1c59a8770",
    "bytes": 367030,
    "article_count": 128,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "0a598740eeba1fe889df5afd3396a517810a72545b07b212c0e34fc1c59a8770",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "283629",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML",
    "requested_at": "2026-10-18T12:37:48.665826+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국제조세조정에 관한 법률 시행령",
    "effective_date": "20260227",
    "law_id": "002942",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283629.xml",
    "sha256": "1b715ee17c00ac659c9a729aeeac644fb05e9dbd37fd36b526087ce741f6f90a",
    "bytes": 648841,
    "article_count": 194,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "1b715ee17c00ac659c9a729aeeac644fb05e9dbd37fd36b526087ce741f6f90a",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "276137",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276137&type=XML",
    "requested_at": "2026-10-18T12:37:18.097008+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "외국환거래법",
    "effective_date": "20260102",
    "law_id": "001525",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/276137.xml",
    "sha256": "c264929821722c913d423fb7c57c7ff80ac4b7ab2364e1dfeb7bce5adf199c9c",
    "bytes": 134246,
    "article_count": 43,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "c264929821722c913d423fb7c57c7ff80ac4b7ab2364e1dfeb7bce5adf199c9c",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "285607",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285607&type=XML",
    "requested_at": "2026-10-18T12:38:04.297042+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "외국환거래법 시행령",
    "effective_date": "20260428",
    "law_id": "004273",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285607.xml",
    "sha256": "b8b5d36ac0b1d2073ebb28dc3a6b73ab2393bbbe9f89badc41be5a92ab93338e",
    "bytes": 291351,
    "article_count": 71,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "b8b5d36ac0b1d2073ebb28dc3a6b73ab2393bbbe9f89badc41be5a92ab93338e",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "id": "289999",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289999&type=XML",
    "requested_at": "2026-10-18T12:40:35.998305+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "7bef4053b5934f73d35d857f594ff58e8eaf94214d7b622289f983c9dd1eb603",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/289999.xml",
    "bytes": 549231
  },
  {
    "id": "2100000285140",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285140&type=XML",
    "requested_at": "2026-10-18T12:40:35.999182+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "1ca8fc0af06bd5fcf36fbac9f07e5f23c76c8cbe44cb3a0aa6e5c1ad612b5688",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/2100000285140.xml",
    "bytes": 764297
  },
  {
    "id": "2100000285608",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285608&type=XML",
    "requested_at": "2026-10-18T12:40:35.999638+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "61db1d0e49a62348ea47b2d8516133c6b94e71905f38c84815a68836fa67fd08",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/2100000285608.xml",
    "bytes": 265754
  },
  {
    "id": "83347",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=83347&type=XML",
    "requested_at": "2026-10-18T12:41:42.388361+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "780d3977383ce2832b03e4e8e1dca6d69ab8c3861fae2d49d693bf05a44caa66",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/prec-83347.xml",
    "bytes": 11985
  },
  {
    "id": "191837",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=191837&type=XML",
    "requested_at": "2026-10-18T12:41:42.389171+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "c8ddb723f0a114ebd4fcee7620c2b85f6517128d3dd1f62a2613e9dec5aef285",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/prec-191837.xml",
    "bytes": 2755
  }
]
```

### 5-2 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 소득세법137조(2월정산, 미신고 본인·표준공제),70조(다음해5/1~31),73조(복수근로소득 합산예외),59조의4②(의료비 나이·소득제한 제외)를 조문 확인했습니다. 국세기본법45조의2①·③·⑤는 연말정산/원천징수 세액 납부기한이 지난 뒤5년, 청구후2개월 통지를 명시합니다.⑤에는 원천징수의무자의 지급명세서 기한내 제출 등의 전제도 있어 단순히 모든 미신고자에게 동일 권리로 확대하지 않습니다.③·④상2개월 내 결정을 못 하면 진행상황 및 불복가능 통지도 규정하므로 2개월 안 환급 보장이라는 뜻이 아닙니다.289999법률21987 부칙2026.10.2시행 확인; 280405의 2026.7.1별도시행은 외국납부세액공제 관련으로 이 검토 조문과 구분했습니다.

### 5-3 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 조특법95조의2①: 총급여8000만원이하/종합소득7000만원초과 제외,15%; 총급여5500만원이하/종합소득4500만원초과 제외17%; 월세연1000만원 한도·신청주의 일치. 소득세법61조① 산출세액 초과분 소멸도 일치. 수정필요: 세대원은 세대주가 월세공제뿐 아니라 법87조②·소득세법52조④⑤ 주택공제도 받지 않아야 합니다. 시행령95조②는 기본공제 대상 자녀·손자녀3명이상일 때100㎡이하 특례(또는 기준시가4억원)를 규정하는데 본문에 빠졌습니다. 임대차계약 본인/기본공제대상자 명의·주소일치·부속토지배율 요건도 확인했습니다. 법95조의2②와령95조⑤는 다른 시군구 거주 배우자 추가공제를 부부 월세합계1000만원내 허용합니다. 법21223부칙1·17조는2026.1.1이후 월세지급 적용, 령36127은2026.2.27공포시행(95조 유예목록 아님)으로 현재 적용범위 확인. 쉽게에도 소득·주택요건을 생략해 모든 무주택근로자 공제로 단정하지 않도록 수정 요청.

### 5-9 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 민법4조19세,5조동의없는행위취소,6조범위를정해처분허락한재산,15조①②최고기간1개월이상·법정대리인이기간내확답을발송하지않으면추인간주,17조속임수예외,140조취소권자,141조현존이익,146조추인할수있는날3년/행위날10년 원문 일치. 법15조③ 특별절차가 필요한 행위는 미회신 취소간주여서 모든 경우의 침묵을 추인으로 일반화하지 않아야 합니다. 민법21454부칙 공포시행, 해당 기본조문은 표기된 이전개정이며 미래시행 없음. 부모는 법정대리인 자격으로 취소하는 것이므로 부모라는 사실만으로 자동권한이 있다는 뜻으로 확대하지 않습니다.

### 5-13 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 국민건강보험법5조②가 배우자/직계존속·배우자직계존속/직계비속·배우자직계비속과그배우자/형제자매를 열거하며 주로생계의존 요건을 둠. 규칙2조·별표1·1의2 직접 확인: 연2000만원·사업소득없음/미등록500만원예외와주택임대제외·장애인/상이자예외·기혼부부둘다충족·재산세과표5.4억/5.4초과9억이하+연소득1000만원·형제1.8억 일치. 별표1형제30세미만/65세이상/장애인·상이자 및 동거별부양요건 확인. 수정필요: 90일후신고는일반적으로신고일부터이나천재지변·질병사고등본인무책임부득이사유는소급가능(2조②3단서). 비고 자격상실일도 일반적확인다음날 외 소득조정·정산대상사업소득등특례③10·11호(발생월다음월말/발생월말)가 있어 예외를남겨야함. 거짓취득은취득일상실③12호일치.법21522시행2026.10.8/규칙1202공포2026.9.28시행·최근개정은서식1 확인.

### 5-20 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 소득세법59조의3① 600/900만원·12/15%·종합소득4500/근로5500만원기준,61조②③산출세액한도·초과분미공제취급,129조①5의2호70세미만5/80세미만4/80세이상3%·종신계약3%,기타소득15% 확인. 령40조의2③55세·가입5년·수령한도,40조의3②4호미공제납입액확인후과세제외,118조의3미공제금액해당연도전환신청 원문일치. 보강필요: 5년가입요건은이연퇴직소득있는계좌에예외. 부득이인출은사유확인6개월내증빙제출이필요하고요양·재난인출은한도존재(령20조의2). 납입공제는근로소득뿐인경우5500만원기준임을쉽게에도보존. ISA만기전환시전환금액10%/300만원중작은액추가공제한도 특례가있으므로900만원은일반한도로표현. 사적연금1500만원은법14조③9호해당소득한정이며퇴직연금전체수령액기준아님. 법21221부칙2026.1.1원칙·7.1외국납부세액공제조문별시행 구분, 령36737부칙2026.10.1시행 확인.

### 5-26 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 자동차손배법3·5·8·46③2·48③1 및령3조·별표1/2 직접확인. 사망피해자1명1.5억원한도/손해2000만원미만이면2000만원; 부상1급3000/2급1500/7급500만원; 후유1급1.5억원; 대물사고1건2000만원 일치. 령3②는부상후사망·후유장애시합산등을규정하므로 전체한도하나로읽지않게유지. 무보험운행1년이하/1000만원이하·미가입300만원이하과태료 일치. 법5조④특정자동차·비도로전용차량예외/5조의2승인된운행중지가입면제도있어모든차를무조건동일의무로확대금지. 법21490시행2026.10.2·령36689공포2026.9.15시행확인.

### 5-38 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 외국환거래규정(2026-103)7-33①대상외화증권제한없음·④일반투자자중개위탁·⑤인정취득해외증권해외매도예외,7-34①전용외화계정,7-31①신고예외열거/②그외한국은행신고,7-11①해외예금예외/②지정은행/③동일자동일인건당5만달러초과은행신고대상확인. 외국환법18·32①4의1억과태료와령40①2의자본거래20억원형사기준확인. 수정필요: 법29①단서는목적물가액3배가1억원을넘으면벌금상한을3배이하로규정하므로본문1억원이하벌금일률단정오류. 국제조세법53·54/령92③으로월말해외계좌합산5억원초과·다음해6/1~30·재외국민182일등면제확인. 쉽게에월말/합산/면제조건보강필요. 직접계좌개설자체가곧신고대상이라는제목은거래별신고예외확인으로수정권장. 외국환규정기본2026.9.16시행/2026-88부칙은제1-2조7호만2027.1.1유예로검토조문과구분. 세율20%/지방2%·연공제250만원은소득세법기본조문확인,지방세원문재시도중.

### 5-41 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 금소법46①1일반금융소비자·대상상품은증권수령15일/청약30일중먼저기한·더긴약정우선,②발송효력,③접수3영업일반환,④위약금불가,⑤보험사고이미발생시원칙철회무효/사실알고철회면예외 원문일치. 령37①보증보험제3자동의필요/자동차책임보험(동종타보험있으면예외)/감독규정30의90일이내·법률상가입의무/건강진단지원제외 확인. 령37④발송사실지체없이통지. 법47/령38②는위반인지1년·계약5년내위법해지확인. 상법638의3약관교부·중요설명의무위반3개월취소·649사고전해지·736적립금반환확인. 타인을위한보험계약해지는상법649①단서동의/증권소지조건이있어무조건언제든은대상제한필요. 법21065시행2026.1.2/령36287공포2026.4.28/감독고시2026-40부칙2026.10.2시행확인. 제목기한은더긴약정예외를본문에서보존할것.

### 5-44 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 상법662조보험금청구권3년·보험료반환/적립금반환3년(보험료청구2년과구분),733①지정변경권/②미지정계약자사망피보험자/③수익자선사망후계약자미재지정사망수익자상속인/④미지정전보험사고피보험자또는수익자상속인,734①보험자통지 원문확인. 보강필요:734②는731①의타인의사망보험피보험자서면동의를수익자지정변경에도준용하므로회사통지만이면충분하다고읽히지않게하기. 비고한국은항상상속인이수익자라는단정은733세부상황에맞춰범위를제한해야함. 두판례2003다29463·2000다31502의공식판시사항/판결요지를신규HTTPSXML에서읽어상속인고유재산일치확인(상속세면제판결아님). 상법21044부칙2026.9.10시행은주주총회집중투표관련,검토보험조문미래시행없음.

### 확인된 수정 요청의 조문 인용

- 3항: 시행령95조②1가 "기본공제대상자에 해당하는 자녀 ... 및 손자녀가 3명 이상 ... 주거전용면적이 100제곱미터 이하 ... 기준시가 4억원 이하". 법95조의2② "그 배우자도 ... 공제를 추가로 적용 ... 월세액의 합계액이 1천만원을 초과하면".
- 13항: 규칙2조②3단서 "천재지변, 질병ㆍ사고 등 ... 본인의 책임이 없는 부득이한 사유".③10·11호는 소득발생월 기준의 상실일 특례.
- 20항: 시행령40조의2③2 "이연퇴직소득 ... 이 연금계좌에 있는 경우에는 그러하지 아니한다".20조의2①1 "해당 사유가 확인된 날부터 6개월 이내 ... 서류".
- 38항: 외국환거래법29①단서 "목적물 가액의 3배가 1억원을 초과하는 경우에는 ... 가액의 3배 이하". 법53① "매월 말일 중 어느 하루 ... 각 해외금융계좌 잔액을 합산".
- 44항: 상법734② "제731조제1항의 규정은 제1항의 지정 또는 변경에 준용한다". 731① "계약체결시에 그 타인의 서면 ... 동의".

의견은 humanize_a에 항목별로 전달했습니다. 미확인 세부사항을 적합 판정으로 바꾸지 않았으며, 후보에 반영된 정확한 필드와 before/SHA는 아직 승인하지 않았습니다.

### 지방세 원문 접근 기록 및 현재 제안

```json
{
  "local_tax_access_records": [
    {
      "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=282559&type=XML",
      "requested_at": "2026-10-18T12:42:25.431135+00:00",
      "tls_verification": true,
      "status": "access_failed",
      "error": "<urlopen error Tunnel connection failed: 502 Bad Gateway>"
    },
    {
      "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=282559&efYd=20260701&type=XML",
      "requested_at": "2026-10-18T12:44:08.447295+00:00",
      "tls_verification": true,
      "retry_reason": "Cited MST request failed with transient proxy tunnel 502; request dated effective-law endpoint.",
      "status": "access_failed",
      "error": "<urlopen error Tunnel connection failed: 502 Bad Gateway>"
    }
  ],
  "current_proposals": [
    {
      "path": "_workspace/2026-10-18-004-aad2/editorial-proposal.json",
      "sha256": "ec868f02b9ec5c7919e3e9d037b3a844570d463bcd1d8aca371fffa1f90bbd34",
      "entry": 4,
      "status": "pending_candidate_review",
      "field_decisions": [
        {
          "field": "쉽게",
          "decision": "pending_candidate_review",
          "before_matches_snapshot": true,
          "reason": "Candidate absent; before matched source snapshot. Claim verification scope is recorded separately per entry; no final field approval."
        }
      ]
    },
    {
      "path": "_workspace/2026-10-18-002-5644/editorial-proposal.json",
      "sha256": "325b590d03203eab7d20633addc7afaa6f325935c8b3deab7dca2c98eff25b8a",
      "entry": 2,
      "status": "pending_candidate_review",
      "field_decisions": [
        {
          "field": "쉽게",
          "decision": "pending_candidate_review",
          "before_matches_snapshot": true,
          "reason": "Candidate absent; before matched source snapshot. Claim verification scope is recorded separately per entry; no final field approval."
        }
      ]
    }
  ]
}
```

제2항 쉽게 제안은 현재 source snapshot의 before와 일치합니다. 새 후보가 없어 최종 approve/revise/reject는 아직 부여하지 않았습니다. 지방세 원문 접근 실패는 내용 오류로 판정하지 않습니다.

## 현재 후보 및42편집제안 독립 필드 검토

검토시각 UTC: 2026-10-18T14:05:05.904071+00:00

- candidate SHA256: `08e1b59d4b051cfa40bbd21401b773cfbe9c1b3e4b1b95d8f72223d7f3667095` (실제 바이트와 frozen manifest 일치).
- review-manifest SHA256: `07d5f056d7867711751e14180ccb39355e5ba6f6e17fc845b7cccfd17bd02e4d`.
- 45항목 전체 candidate/source 대조,42제안 파일 전부 열람·정확SHA 확인.
- 결정 수: {"approve": 41, "revise": 15}. 별도35항 사실교정 문구1개 포함.
- 최종 출판 승인과 정식 KR-FIT 승인은 부여하지 않았습니다. source사실오류가 남은 절을 통과로 보지 않습니다.

### 신규 요청 및 캐시 열람 근거

```json
[
  {
    "id": "odean1998",
    "url": "https://onlinelibrary.wiley.com/doi/pdf/10.1111/0022-1082.00072",
    "requested_at": "2026-10-18T13:58:19.986206+00:00",
    "tls_verification": true,
    "http_status": 403,
    "sha256": "c1a26489f78ef17a58a929820c2fb1f05a1cb889feb7d56696b143911d5f5758",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/odean1998-http-error.raw",
    "error": "HTTP Error 403: Forbidden"
  },
  {
    "id": "chen2009",
    "url": "https://academic.oup.com/jcr/article-pdf/36/4/611/19296706/36-4-611.pdf",
    "requested_at": "2026-10-18T13:58:19.986943+00:00",
    "tls_verification": true,
    "http_status": 403,
    "sha256": "6455f68c9cfd713bc70b1f37c1455d47047eadba1f5f07680b82c76777687e62",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/chen2009-http-error.raw",
    "error": "HTTP Error 403: Forbidden"
  },
  {
    "id": "anlou2021",
    "url": "https://personal.lse.ac.uk/loud/AnLouShi.pdf",
    "requested_at": "2026-10-18T13:58:19.987551+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "73f35efe405933a5ba2eed8ce2ee34261db015c2419a20c1376aa5016abaad1f",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/anlou2021.pdf",
    "bytes": 1525520,
    "pdf_magic": true
  },
  {
    "mst": "268659",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=268659&type=XML",
    "requested_at": "2026-10-18T14:00:46.233927+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "cbd6c690649b0d02b22f7832b8e39c99b9c066f9d3f10da236497dc9bcb70e9f",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/268659.xml",
    "bytes": 70804
  },
  {
    "mst": "265389",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=265389&type=XML",
    "requested_at": "2026-10-18T14:00:46.234673+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "5d3d5e9b22d1fad26158da529677b362f06f623d9030872beb822a73c37c09b7",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/265389.xml",
    "bytes": 502813
  },
  {
    "mst": "265811",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=265811&type=XML",
    "requested_at": "2026-10-18T14:00:46.235344+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "6e41f58c5b0a9b4dca3fc1a474e8ad4d600878703f40b13eade5201456752c61",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/265811.xml",
    "bytes": 227333
  },
  {
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&ID=010196&efYd=20261018&type=XML",
    "requested_at": "2026-10-18T14:01:50.341462+00:00",
    "tls_verification": true,
    "status": "access_failed",
    "error": "HTTP Error 500: Internal Server Error"
  },
  {
    "mst": "260861",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=260861&type=XML",
    "requested_at": "2026-10-18T12:36:24.140354+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "유사수신행위의 규제에 관한 법률",
    "effective_date": "20240528",
    "law_id": "002035",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/260861.xml",
    "sha256": "48c79028c2f10530016ea5dbcba209713636fb0080bcd85cccf421f11a6fd957",
    "bytes": 13203,
    "article_count": 8,
    "review_mode": "existing_official_xml_cache_opened",
    "actual_sha256": "48c79028c2f10530016ea5dbcba209713636fb0080bcd85cccf421f11a6fd957"
  },
  {
    "mst": "288615",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288615&type=XML",
    "requested_at": "2026-10-18T12:38:14.794832+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "자본시장과 금융투자업에 관한 법률",
    "effective_date": "20261002",
    "law_id": "010513",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/288615.xml",
    "sha256": "f636a6a9449a6c03608e624496c2d52182179a166150dadd964507262c26ebb3",
    "bytes": 2150996,
    "article_count": 685,
    "review_mode": "existing_official_xml_cache_opened",
    "actual_sha256": "f636a6a9449a6c03608e624496c2d52182179a166150dadd964507262c26ebb3"
  },
  {
    "mst": "285341",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285341&type=XML",
    "requested_at": "2026-10-18T12:37:57.972600+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "약사법",
    "effective_date": "20261008",
    "law_id": "001783",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285341.xml",
    "sha256": "77072a350394f9389186cc95430e677173d0883c8540728c23b84e476c9aa0e4",
    "bytes": 687098,
    "article_count": 246,
    "review_mode": "existing_official_xml_cache_opened",
    "actual_sha256": "77072a350394f9389186cc95430e677173d0883c8540728c23b84e476c9aa0e4"
  },
  {
    "mst": "290239",
    "chapters": [
      1,
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290239&type=XML",
    "requested_at": "2026-10-18T12:38:27.696486+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "방문판매 등에 관한 법률",
    "effective_date": "20261002",
    "law_id": "000354",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290239.xml",
    "sha256": "4044d5ecce3aa9332ae7d0a1576e170aae0c11e2bb50de55d781fbf90bd8e2a1",
    "bytes": 201395,
    "article_count": 83,
    "review_mode": "existing_official_xml_cache_opened",
    "actual_sha256": "4044d5ecce3aa9332ae7d0a1576e170aae0c11e2bb50de55d781fbf90bd8e2a1"
  },
  {
    "mst": "290735",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290735&type=XML",
    "requested_at": "2026-10-18T12:38:39.260883+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "가상자산 이용자 보호 등에 관한 법률",
    "effective_date": "20261002",
    "law_id": "014474",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290735.xml",
    "sha256": "e500174ae43e28c185b6272a99032c3cfc300d006193d9284a8810894c7f3b3c",
    "bytes": 62261,
    "article_count": 27,
    "review_mode": "existing_official_xml_cache_opened",
    "actual_sha256": "e500174ae43e28c185b6272a99032c3cfc300d006193d9284a8810894c7f3b3c"
  }
]
```

LSE 저자2021작업논문 PDF 실제본문 pp2–4,9–10 및 관련 수치 구간을 읽었습니다.28/31%의 분모는 초기 주식자산이며,40M은 전체 투자자 계좌입니다. 분류변수는 현금과 상해/심천 보유주식을 포함한 계좌가치이고, 기존계좌는2013.7~2014.6 최대가치로 분류합니다. 미국66,465는 저자초록의 가구 수입니다. source 이득에 남은 계좌수/분류기준 문구는 저자에 교정 요청했습니다. OUP/Wiley403은 접근불가로 기록하며 수치 오류라고 단정하지 않았습니다.

새 게임법265811XML은20241022기본판으로33조 표시의무를 읽었으나33조의2가 없습니다. 이를2025/2026현행 배상조문 검증으로 사용하지 않았고, 날짜지정 eflaw는HTTP500으로 접근하지 못했습니다. 보험업법265389(20250131)97·100과 표시광고법268659(20250121)10은 실제 조문과 부칙을 읽었습니다. 더 최신법령 전부를 확인한 주장은 하지 않습니다.

### 비율·효과·출처 충돌 원칙 적용

이 절의 요약 제안에서 OR을 RR/절대확률로 치환한 새 주장은 없습니다.15항의28/31%는 buy-and-hold대비 초기주식가치 비율이며,37항3.4는 시장대비수익의 퍼센트포인트입니다. 계좌수와 가구수, 분류변수와 손실분모, 보험사고별·피해자별 단위를 구분했습니다. 확인하지 못한 원문표/현재판은 pass로 처리하지 않았습니다. 확인된 source 오류는 묵시적으로 수치를 바꾸지 않고 별도 교정안 재심 대상으로 남깁니다.

### 제안별 결정

#### 5-2 · `_workspace/2026-10-18-002-5644/editorial-proposal.json`
제안 SHA256: `325b590d03203eab7d20633addc7afaa6f325935c8b3deab7dca2c98eff25b8a` — 일치.
- easy / 쉽게: **approve**. 5년의 연말정산 납부기한 기산점과 복수 월급 미합산 신고 의무가 실제 세법과 일치합니다. 106자·3문장입니다.
  before: source=True, candidate=True. after=106자·3문장.

#### 5-4 · `_workspace/2026-10-18-004-aad2/editorial-proposal.json`
제안 SHA256: `ec868f02b9ec5c7919e3e9d037b3a844570d463bcd1d8aca371fffa1f90bbd34` — 일치.
- easy / 쉽게: **approve**. 사용량에 맞춘 선택·정당한 이유 없는 해지 방해·중요 조건 거짓 설명의 범위를 보존합니다. 법령 전체의 현행성 승인과 구분합니다.
  before: source=True, candidate=True. after=110자·3문장.

#### 5-5 · `_workspace/2026-10-18-005-7f82/editorial-proposal.json`
제안 SHA256: `a1573c36c382357a76dca0d1a51cf7deb295055f36a47662d9dcc6627261be53` — 일치.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=34자.

#### 5-6 · `_workspace/2026-10-18-006-1972/editorial-proposal.json`
제안 SHA256: `03e362a9b7fe27af621e42e9b065a2da9a7e8addfa84e6cace852f8b31f37afd` — 일치.
- easy / 쉽게: **revise**. 자본시장법55조에는103조③ 및 건전한 거래질서를 해할 우려 없는 정당사유 예외가 있습니다. 금융회사 손실보전/이익보장은 원칙적 금지로 쓰세요. 유사수신은 무인가·불특정다수·업으로모집 조건도 보존해야 합니다.
  before: source=True, candidate=True. after=117자·3문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=61자.

#### 5-7 · `_workspace/2026-10-18-007-56d5/editorial-proposal.json`
제안 SHA256: `7b6e1f1573056d137b01d5d54946b7176c75eb05aea20eddbdf29dc54bbda752` — 일치.
- easy / 쉽게: **approve**. 리볼빙의 부채·이자와 비교 행동으로 범위를 좁히며 연20%의 일률적 요약은 제거합니다. 이득의 상세 이자 예외를 승인한 것은 아닙니다.
  before: source=True, candidate=True. after=94자·3문장.

#### 5-8 · `_workspace/2026-10-18-008-a5e5/editorial-proposal.json`
제안 SHA256: `e17b70b029779980d3ddde55ac1e7509b7cb877006a8976c2f0a39f38c239f0c` — 일치.
- easy / 쉽게: **approve**. 성인이 스스로 결제했다는 범위와 제공 개시 후 철회 제한 가능성 유보를 보존합니다. 법정 예외가 없다는 단정으로 바꾸지 않았습니다.
  before: source=True, candidate=True. after=110자·4문장.

#### 5-9 · `_workspace/2026-10-18-009-dea2/editorial-proposal.json`
제안 SHA256: `77e357c75b0540b058de0abee460206515c20d7412acf0f490672adb4ad8473a` — 일치.
- easy / 쉽게: **revise**. 미회신 추인간주는 법정대리인에게1개월이상의 기한으로 확답을 요구한 경우입니다. 임의의 업체 기한으로 읽히지 않게 대상과 최소기간을 명시하세요. 길이133자 예외 자체보다 법정 조건 누락이 문제입니다.
  before: source=True, candidate=True. after=133자·4문장.

#### 5-10 · `_workspace/2026-10-18-010-203e/editorial-proposal.json`
제안 SHA256: `b301beaa5a70648f85a399846cde9b1dd17a91aaf25ae16adc6c92df4c61e485` — 일치.
- easy / 쉽게: **approve**. 신고·지급정지와 회수할 잔액의 필요조건을 보존합니다. 지급정지만이 유일한 구제라는 source 비고 문장은 별도 수정 검토가 남습니다.
  before: source=True, candidate=True. after=102자·4문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=34자.

#### 5-11 · `_workspace/2026-10-18-011-5dc5/editorial-proposal.json`
제안 SHA256: `3f71fe242b975dbaf5b7dfa10bcf6195e692702cfe52f155a270db876116142f` — 일치.
- easy / 쉽게: **revise**. 10~50%의 정확한 원문 및 업계 추정 인용 범위를 아직 확인하지 못했습니다. 공식 OUP PDF가403이므로 내용 오류로 단정하지 않고 수치 근거 확인 또는 검증된 비수치 요약 뒤 재심합니다. 가격 비교·수리비 감당 예외 보존은 적절합니다.
  before: source=True, candidate=True. after=149자·4문장.

#### 5-12 · `_workspace/2026-10-18-012-6337/editorial-proposal.json`
제안 SHA256: `1e05dafef1e363e23c57729d4227b3efeb8fb426d77de6af915c871a62eaf7f7` — 일치.
- easy / 쉽게: **revise**. 대체조제 주체를 약사로 명시하고 같은 성분·함량·제형 조건을 보존하세요. 임상 사유가 적힌 대체불가 예외 및 즉시 환자통보는 정확합니다.143자 예외는 의학 조건 보존을 위한 합리적 예외이나 주체/동등성 범위는 수정 필요합니다.
  before: source=True, candidate=True. after=143자·4문장.

#### 5-13 · `_workspace/2026-10-18-013-1bd0/editorial-proposal.json`
제안 SHA256: `b4430547c27717bfeb83fba6d880268d41969b0c54ca793031f12f39b0780415` — 일치.
- easy / 쉽게: **revise**. 핵심 소득·재산·사업소득·부부 조건은 확인됐지만181자·최장51자로 압축이 부족합니다. 조건을 삭제하지 않고 대상/혜택과 요건 문장을 더 간단히 구성하세요. 이득90일예외와 비고 상실일특례는 별도 사실 교정 필요합니다.
  before: source=True, candidate=True. after=181자·4문장.

#### 5-14 · `_workspace/2026-10-18-014-cbd8/editorial-proposal.json`
제안 SHA256: `bcdc4005c14b2bfd1030418f4469f90855047a5265251b2afde7696fc69c59f1` — 일치.
- easy / 쉽게: **approve**. 인천 사용요금/생수 가정가격/제외비용의 범위와 이상 물 음용 금지 경고를 보존합니다. 약800배는500/0.62≈806의 예시 계산입니다. 지역 요금의 최신성 전체를 확인한 것으로 보지 않습니다.
  before: source=True, candidate=True. after=115자·4문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=43자.

#### 5-15 · `_workspace/2026-10-18-015-5516/editorial-proposal.json`
제안 SHA256: `ef604ea9149ab8213881ce37524acd0c34f43883c558627e474ebedc76495238` — 일치.
- easy / 쉽게: **approve**. LSE 저자 원문을 새로 열어 하위85%의 buy-and-hold 대비 초기 주식가치28% 손실과 상위0.5%31% 이익을 확인했습니다. 요약의 약3할·중국·비교 기준이 맞습니다. 본문 분류기준 오류는 별도 교정 필요합니다.
  before: source=True, candidate=True. after=95자·3문장.

#### 5-16 · `_workspace/2026-10-18-016-d3f4/editorial-proposal.json`
제안 SHA256: `461b9725b754d1d09f0acc1bfb39dee59c8b23f7b688b38cb596ed07fe3beb91` — 일치.
- easy / 쉽게: **approve**. 담보 보충 미이행·다음영업일 처분과 사전 합의 급변시 처분 조건을 보존합니다. 신용거래의 구체 담보비율 검증 전체를 이 승인에 포함하지 않습니다.
  before: source=True, candidate=True. after=107자·3문장.

#### 5-17 · `_workspace/2026-10-18-017-a298/editorial-proposal.json`
제안 SHA256: `39ba87a6b548b83c4909f0e4ad9711a0b92e09294da94028ec609aed36177af6` — 일치.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=28자.

#### 5-18 · `_workspace/2026-10-18-018-4a6d/editorial-proposal.json`
제안 SHA256: `f324699241405d97fa6fed543fc77c2de604695cd81343255d352cb8b45cc518` — 일치.
- easy / 쉽게: **approve**. 보수 차감 전 수익률 동일·차감 후0/−1%·기간20년 가정을 명시하며 1−0.99^20≈18.2% 계산과 일치합니다. 일반 시장 수익 보장으로 바꾸지 않았습니다.
  before: source=True, candidate=True. after=113자·4문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=41자.

#### 5-19 · `_workspace/2026-10-18-019-e28a/editorial-proposal.json`
제안 SHA256: `00fdd99ad71ca8936ef059f31bcdb803f4687e57cf447a8ab2168d8dc7053149` — 일치.
- easy / 쉽게: **approve**. 평균/기대수익이 항상 같다는 단정을 제거하고 변동 감소 가능성과 손실 보장 없음만 요약합니다. 이득에 남은 기대수익 동일 단정은 아직 수정 필요하며 이 필드 승인으로 해결되지 않습니다.
  before: source=True, candidate=True. after=90자·3문장.

#### 5-20 · `_workspace/2026-10-18-020-1e07/editorial-proposal.json`
제안 SHA256: `0dc71419fdbf180bfc6b2fca6604a7ad207b963d70c644b602c701249a1c9d85` — 일치.
- easy / 쉽게: **revise**. 600/900만원·종합소득4500/근로5500·12/15%·산출세액한도는 세법과 맞지만192자·최장52자라 다시 간결하게 다듬어야 합니다. 이득에서 부득이인출 예외를 확인하라고 보내기 전에6개월 증빙 및5년계좌 예외 등 실제 조건을 보강해야 합니다.
  before: source=True, candidate=True. after=192자·4문장.

#### 5-21 · `_workspace/2026-10-18-021-5639/editorial-proposal.json`
제안 SHA256: `415b5561615a6f3c96eff31bf44b8baf42d67670c80aada63f6c779e4f9ac7fc` — 일치.
- easy / 쉽게: **approve**. 저자 초록의 월70달러초과/회당17달러초과/10회권회당10달러와 일치합니다. 미국 자료 하나의 범위와 실제1년이용기록에 따른 선택 조건을 보존합니다.
  before: source=True, candidate=True. after=110자·3문장.

#### 5-22 · `_workspace/2026-10-18-022-0bc9/editorial-proposal.json`
제안 SHA256: `b28c806bc833f6dfe767f0eea79911148a8829dada54203dfcfee7c72a3fc1d9` — 일치.
- easy / 쉽게: **revise**. 방문판매법31조는 중도해지 원칙에 다른 법률 및 대통령령 예외를 둡니다. 단순히 한 달 넘는 모든 서비스에 일반화하지 말고 계속거래 계약의 원칙적 권리와 해지 조건을 남기세요.
  before: source=True, candidate=True. after=93자·3문장.

#### 5-23 · `_workspace/2026-10-18-023-3d19/editorial-proposal.json`
제안 SHA256: `e25df11d0cd3a0330c7f86353a5b425f91cbb8461bb2234bddf09b8fe60c1bb6` — 일치.
- easy / 쉽게: **revise**. 일반7일의 기산점이 사라졌습니다. 계약내용 서면 수령일·공급이 늦으면 수령일이라는 핵심 조건을 유지하세요. 저자도 명시했듯 이득 주문제작 배제의 중대피해·별도고지·서면동의 교정안이 아직 없어 이득과 함께 재심해야 합니다.
  before: source=True, candidate=True. after=110자·4문장.

#### 5-25 · `_workspace/2026-10-18-025-efee/editorial-proposal.json`
제안 SHA256: `c7be02ed6a16973517dae049dcf86670fe6979208ac3f86132e5b7658d14cabc` — 일치.
- easy / 쉽게: **approve**. 사업비 차감·최저보증과 변동분 구별·중도해지 손실의 핵심 범위를 보존합니다. 개별 상품 수익이나 보험료 절감의 정량 효과는 주장하지 않습니다.
  before: source=True, candidate=True. after=113자·4문장.

#### 5-26 · `_workspace/2026-10-18-026-69d5/editorial-proposal.json`
제안 SHA256: `e28bde37d773326818b7e531630ee4ee4923823cf028959036ec84a30419786a` — 일치.
- easy / 쉽게: **approve**. 원문 법령과 별표에서 사망피해자1명1.5억/부상등급최대3000만원/대물사고1건2000만원을 대조했습니다. 단위와 초과액 부담을 보존합니다.
  before: source=True, candidate=True. after=91자·3문장.

#### 5-27 · `_workspace/2026-10-18-027-f062/editorial-proposal.json`
제안 SHA256: `19eb960ef7cdcf92cc6be092948fcf9e877ea81f39b66a6a0777505ba3bb0cd7` — 일치.
- easy / 쉽게: **approve**. 3~6개월을 경험칙으로 명시하고 고정지출·즉시인출·비상시 자금 필요 조건을 보존합니다. 예금보호 한도는 이득의 별도 주장으로 남습니다.
  before: source=True, candidate=True. after=113자·4문장.

#### 5-28 · `_workspace/2026-10-18-028-d213/editorial-proposal.json`
제안 SHA256: `24f6e261e437bed0a033e1b634230a3217a278fac06ac187f0c1dc9a8fa8f8eb` — 일치.
- easy / 쉽게: **approve**. 세후 수익의 불확실성·비상금·중도상환수수료3년 원칙과 법정예외를 보존합니다.130자는 조건 보존을 위한 명시적 길이예외로 인정합니다. before는 baseline과 일치하나 strict의 쉼표 삭제로 candidate와 불일치하므로 baseline에만 적용 가능합니다.
  before: source=True, candidate=False. after=130자·4문장.

#### 5-29 · `_workspace/2026-10-18-029-09a7/editorial-proposal.json`
제안 SHA256: `3d300a349573725cf07a551db54541b376aa3caf4f8ff7a1f648b29b42c57f8f` — 일치.
- easy / 쉽게: **revise**. 205자·최장63자로 요약 목적을 충분히 달성하지 못합니다. 중개 의무 위반 유형과 면책을 간결하게 쓰되, 당사자아님 미고지 책임의 경우 판매자의 고의·과실 조건과 정보오류 책임의 인과관계를 구분하세요. 상당주의 면책을 모든 책임으로 확대하지 마세요.
  before: source=True, candidate=True. after=205자·4문장.

#### 5-30 · `_workspace/2026-10-18-030-4334/editorial-proposal.json`
제안 SHA256: `a87a0819ae269d198e71210e4e08e259d38faef6d29d3a7dadd00245e91a5a84` — 일치.
- easy / 쉽게: **approve**. 사업자 판매자·중개 플랫폼·신원정보 누락/오류로 인한 손해·상당주의 면책을 실제 전자상거래법20/20조의2와 대조했습니다.
  before: source=True, candidate=True. after=101자·3문장.

#### 5-31 · `_workspace/2026-10-18-031-3235/editorial-proposal.json`
제안 SHA256: `283393cbe33a73a53c286e6299a4e60c442119ce01940e91354f65db99c60e02` — 일치.
- easy / 쉽게: **approve**. 합의·권고에 쓰는 기준이라는 성격을 드러내고 환급·손해 항목을 보존합니다. 치료 손해의 인과관계 및 고시 세부사항 검증 완료를 뜻하지 않습니다.
  before: source=True, candidate=True. after=117자·4문장.

#### 5-32 · `_workspace/2026-10-18-032-8322/editorial-proposal.json`
제안 SHA256: `f0843d4bed236027470dbae7262c688a8d363dfa1e3ed7663813a1f7d75d9800` — 일치.
- easy / 쉽게: **approve**. 안전인증/효율표시 대상이라는 제한을 유지하고 구매 전 확인 행동으로 좁혔습니다. 모든 물건의 KC 의무나 불량품 감소 효과를 새로 주장하지 않습니다.
  before: source=True, candidate=True. after=103자·3문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=42자.

#### 5-33 · `_workspace/2026-10-18-033-8e2f/editorial-proposal.json`
제안 SHA256: `a7dc8d02705cbcf6c46cbc25a4cea95f61f9327a99817871d3deaa05fef376bd` — 일치.
- easy / 쉽게: **approve**. 소매 판매가격 전체가 아닌 과세가격200만원 초과분이라는 범위를 보존한 고급 시계·가방의 부분 요약입니다. 보석·담보대출의 별도 조건은 이득에서 지우지 않습니다. 세법 원문 전체 확인 완료와 구분합니다.
  before: source=True, candidate=True. after=94자·3문장.

#### 5-34 · `_workspace/2026-10-18-034-9bb5/editorial-proposal.json`
제안 SHA256: `33915d9b9ddc17491d122ee560e75f8b863b008d290799c2008036b6978913d6` — 일치.
- easy / 쉽게: **revise**. 표시광고법10조는 부당 광고로 피해가 생긴 경우의 배상책임입니다. 판매자가 거짓임을 몰랐어도 무조건 배상한다는 문장 대신 거짓 광고로 손해가 생겼다는 인과조건을 명시하세요.
  before: source=True, candidate=True. after=113자·3문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=47자.

#### 5-35 · `_workspace/2026-10-18-035-2355/editorial-proposal.json`
제안 SHA256: `239ee7a66ed5f8cfae3562d8afb780283b90c2a0e23b527aeaaeedd6c712f355` — 일치.
- easy / 쉽게: **approve**. 표시의무를 중심으로 요약하고3배배상이나 돈을 반드시 잃는다는 단정은 넣지 않습니다. 이번에 실제 읽은265811XML의33조는 종류/확률·게임/홈페이지/광고를 확인하지만 기본시행20241022판이므로 이후 개정의 현행성·소규모 예외 검토는 별도입니다. 이득의 디지털 OR오류는 함께 고쳐야 합니다.
  before: source=True, candidate=True. after=87자·3문장.
- required_factual_corrections[0] / 이득의 지정 문장: **approve**. 전자상거래법17조⑥단서 및령21조의2 직접검토로 고지 AND 해당 시험사용 제공 등 조치가 필요함을 확인했습니다. 제공개시·가분적 미제공부분·적용범위의 주변 문장도 보존해야 합니다.
  before: source=True, candidate=True.

#### 5-36 · `_workspace/2026-10-18-036-2880/editorial-proposal.json`
제안 SHA256: `bbed7f534bb591eb485f596011d97750bf68f3d7e9f8b539e7ec9698b74a7703` — 일치.
- easy / 쉽게: **approve**. 즉석판매의 조건부 게시대체와 선식/우편/택배 예외, 얼음막 제외중량을 유지합니다. 해당 식약처 고시의 새 직접 검증 완료를 뜻하지 않습니다.
  before: source=True, candidate=True. after=104자·4문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=87자.

#### 5-37 · `_workspace/2026-10-18-037-bfaa/editorial-proposal.json`
제안 SHA256: `727a94d3d207f5def29fdbd410797dd269cc8e29d52686ae04ad204653512b7d` — 일치.
- easy / 쉽게: **revise**. 3.4%포인트의 정확한 원문 표/본문을 아직 열지 못했습니다. Wiley 공식 PDF403을 기록했으며 실제 내용 오류와 구분합니다. 시장대비수익·미국범위·이후1년 조건은 적절하지만 수치 확인 뒤 재심합니다.
  before: source=True, candidate=True. after=90자·3문장.

#### 5-38 · `_workspace/2026-10-18-038-df3d/editorial-proposal.json`
제안 SHA256: `e248ed6162d92b01fbd341a84a6c95ea94a34c96d4c53f62c42d7edf54adee5f` — 일치.
- easy / 쉽게: **approve**. 국내 증권사 권고·거래별 신고예외·어느 달말 해외계좌 잔액 합계5억 초과·다음해6월·면제 조건이 확인한 외국환/국제조세 법령과 일치합니다. 제목과 이득 벌금 상한은 별도 수정 필요합니다.
  before: source=True, candidate=True. after=108자·4문장.
- title / title: **revise**. 51자로 제목 길이는 맞지만 incoming anchor 해외 주식이 after에 없습니다. 해외 주식·해외 자산·국내 증권사 세 앵커와 거래별 신고예외를 모두 보존하세요.
  before: source=True, candidate=True. after=51자.

#### 5-39 · `_workspace/2026-10-18-039-de91/editorial-proposal.json`
제안 SHA256: `0b659707b48cc80c693ce452e916ed4c87df8c4bd48fd9ebe080538c2a475b3e` — 일치.
- easy / 쉽게: **approve**. 감당 가능한 작은 손실/감당 못할 큰 손실을 구분하고 국민건강보험 제외를 드러냅니다. 경험칙을 실증 효과나 법정 보험가입 권리로 바꾸지 않습니다.
  before: source=True, candidate=True. after=109자·4문장.

#### 5-40 · `_workspace/2026-10-18-040-bee1/editorial-proposal.json`
제안 SHA256: `78853cf20620770ff2a1d7a899cab6f3f0c04c3f9896574148c0a228b287bf54` — 일치.
- easy / 쉽게: **approve**. 정해진 기간·사망보장·소득의존 가족과15세미만 사망보험 무효의 기존 범위를 보존합니다. 필요/불필요 판단은 원문의 C등급 권고이며 법정 필수 가입이라는 뜻으로 승인하지 않습니다.
  before: source=True, candidate=True. after=120자·4문장.

#### 5-41 · `_workspace/2026-10-18-041-439b/editorial-proposal.json`
제안 SHA256: `421a91b27fff4104846e4ff3c5ae9ca386a0128baf19e0865eb87fc5bb09d9c0` — 일치.
- easy / 쉽게: **revise**. 금소법46조①은 당사자가 더 긴 철회 기간을 약정했으면 그 기간이 우선합니다.15일/30일을 절대 기한으로 읽지 않도록 더긴약정 예외도 쉽게에 보존하세요. 대상과3영업일 반환은 원문과 일치합니다.
  before: source=True, candidate=True. after=116자·3문장.
- title / title: **approve**. 63자이고 청약철회 앵커·보험 대상확인·증권수령15일/청약30일중먼저라는 주제를 유지합니다. 더긴약정 등 이득의 예외는 삭제할 수 없습니다.
  before: source=True, candidate=True. after=63자.

#### 5-42 · `_workspace/2026-10-18-042-7b88/editorial-proposal.json`
제안 SHA256: `fac4b8a568ef07ed344a2ba173f761751039e4e2fdabadcd33fd73b9357cad37` — 일치.
- easy / 쉽게: **approve**. 보험을 모집하는 은행의 대리/중개 지위·보험회사 지급책임·보험 미가입에 따른 대출 영향 없음 고지는 보험업법100조②와 일치합니다. 보험을 팔지 않는 모든 은행업무가 대리점이라는 뜻으로 읽지 않도록 제목 문맥을 유지합니다.
  before: source=True, candidate=True. after=119자·4문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=32자.

#### 5-43 · `_workspace/2026-10-18-043-8784/editorial-proposal.json`
제안 SHA256: `d6ad570aa4505659a440e95082ee2a5dbf893a2bda897f9e09d2f347e115702b` — 일치.
- easy / 쉽게: **approve**. 보험업법97조의 부당승환·유사 새보험·기존 계약 회복·소멸후6개월의 요약으로 확인했습니다. 중개사 제외 등 상세조건과 새계약취소는 이득에 보존해야 합니다.
  before: source=True, candidate=True. after=118자·3문장.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=52자.

#### 5-44 · `_workspace/2026-10-18-044-5111/editorial-proposal.json`
제안 SHA256: `624dfcd9c493eae3fa4323202b945ca8c700e04788241581c437d8f3b3eb6723` — 일치.
- easy / 쉽게: **revise**. 회사 통지만으로 수익자 변경 요건이 끝나는 것으로 읽힙니다. 상법734조②가 준용하는731조①의 타인 사망보험 피보험자 서면동의 조건도 함께 보존하세요. 청구권3년 및 회사에 대한 대항요건 자체는 확인했습니다.
  before: source=True, candidate=True. after=101자·4문장.

#### 5-45 · `_workspace/2026-10-18-045-52d1/editorial-proposal.json`
제안 SHA256: `526996c625a03f8ba1ec92a27cfefe65f4d2c8d8bd7ecbe06f43de52a6478450` — 일치.
- easy / 쉽게: **revise**. 가상자산으로 원금이상 약속하며 돈을 모으면 모두 유사수신이라는 단정은 과도합니다. 유사수신법2조의 무인가·불특정다수·업으로모집 조건을 남기세요. 분리보관은 확인한 가상자산법6·7조와 일치합니다.
  before: source=True, candidate=True. after=120자·4문장.
- title / title: **approve**. 64자이며 비트코인·테더·가상자산 및 매수/동참 만류를 보존합니다. 누구도 메워주지 않는다는 일반화를 시세손실 보전조항 부재로 한정합니다. 분리보관법의 맥락과 별도 손해배상권은 이득에서 유지해야 합니다.
  before: source=True, candidate=True. after=64자.
- todo / 비고의 TODO 문장: **approve**. 미확인 상태를 독자용 문장으로 유지하며 TODO 작업표지만 제거합니다. 확인 완료를 주장하거나 미해결 제한을 숨기지 않습니다. 장말 TODO 대조는 별도 승인 사항입니다.
  before: source=True, candidate=True. after=52자.

### 제안이 없는 항목과 남은 전체절 제한

1·3·24항은 현재 후보를 읽었지만 초기 편집제안이 없습니다.1항 정당사유 예외,3항2026월세특례와 필수요건은 별도 사실교정 필요합니다.13·20·23·35·38·41·44의 기존 사실교정 큐 및19항 기대수익 단정은 개별 요약 승인과 별개로 남습니다.11·37항 원문 정량 검증도 미완료입니다.35항 지정문구 승인과 모든 TODO 부분문구 승인은 전체필드/전체항목 통합승인이 아니며 CONTRACT에 맞는 정확한 전체필드 또는 전체항목 교정안이 필요합니다.28항 before는baseline에만 일치합니다.

71자 이상 제목을 새로 승인하지 않았습니다.38항 제목은51자이나 incoming 해외 주식 누락으로revise,41·45항은 앵커 보존을 확인했습니다.28항130자쉽게는 조건보존상 길이예외를 인정했습니다.13·20·29항의181/192/205자 및50자 초과문장은 재작성 요청했습니다. 장말TODO의 동기화는 별도저작안·독립승인 뒤 처리해야 합니다.
