# 제27절 제4항 CDC 금연 인용 독립 출처·번역 검토

판정: 승인. SPEC v1의 해당 인용 출처·번역 및 원본/정확 final 귀속만 승인한다. ROOT의 registry 선택이나 편집·출판 승인이 아니다.

- 검토 UTC: 2026-10-18T18:28:39.955380+00:00
- 검토자: /root/publication_review_09. 제안자 root-mechanical-payload와 별도 역할이다.
- payload: quote-attribution/payload-04-r1.json · SHA `e46d446b2957e5207dff8f8174130159f25e4daf79433948122b7ee6e16f0fe6`.
- original: _workspace/2026-10-18-004-a722/01_input.txt · 1963bytes · SHA `076d81ff359bf1030cc1f883fec3995d28c64a176106d997f341fd8a0946cdfe`. manifest 제4항 input SHA와 같다.
- final body: 같은 run의 final.md에서 유일한 줄 시작 HUMANIZE-SUMMARY 앞 전체 bytes · 1961bytes · SHA `dfc485bcc7181184b9205391b67c0d5c6df5be383f4d8dd6e1cdba96cf0e3796`. 공백·개행 정규화 없음.
- 출처: https://www.cdc.gov/tobacco/campaign/tips/diseases/pregnancy.html
- 보존 raw: quote-attribution/source-review/cdc-pregnancy-r1.raw.html · 118427bytes · SHA `a6c3a243747f11254a73359201c92ec58c2b3932f5a51e03e821b7ae8aeea5bf`.
- 실제 취득: proposal-provenance-r1.json의 HTTPS200/UTC2026-10-18T17:23:42.490387+00:00. 이번 검토는 기존 raw 열람이며 새 HTTP 요청이 아니다. 보존 raw와 명시된 원캐시가 bytes 단위로 같다.

## 직접 대조한 문장과 문맥

원시 HTML [25283,25429), SHA `d4c2892ad8afcf38580445aa30cc9b84a46b6f71a0cb758a9d2dd7fde86a460b`:

> The best time to quit smoking is before you get pregnant, but quitting at any time during pregnancy can help your baby get a better start on life.

원본 이득 필드의 완전 인용 [1176,1271), SHA `cfdc959661e785a9a6516b622e9e4df423f129e91e1a842ecaaf3cf4b283cf08`:

> 임신 전에 끊는 것이 가장 좋지만, 이미 임신했어도 끊으면 도움이 된다

원문은 quitting-help 절에서 CDC가 직접 말한 권고다. 앞쪽 환자 경험담은 별도 카드에 끝나며 선택 문장으로 귀속이 이어지지 않는다. 뒤에는 임신 중 금연 방법을 의사와 상의하라는 문장과 아기의 산소·성장·조산 등 금연 이점 목록이 이어진다. 선택 excerpt는 태그·entity·추출을 거치지 않은 연속 원시 UTF-8 문장이다.

한국어는 임신 전이 최적이라는 조건과 이미 임신했어도 금연의 이점이 남는다는 대비를 보존한다. better start on life는 도움이 된다로 자연스럽게 풀었다. 아기라는 대상은 같은 문단의 아기·임신 설명에 귀속된다. 이는 건강한 출생이나 특정 질환 예방을 보장하는 번역이 아니며 수치·새 대상·새 효과를 더하지 않는다. 임신 중 금연 시점을 어느 한 주수로 제한하거나 늦었다는 부정을 만들지 않았다. 해당 정성적 금연 권고의 번역으로 의미가 충분히 충실하다.

## bytes·귀속 확인

opening/content/closing 및 source_anchor/source excerpt의 모든 half-open 범위와 slice SHA를 실제 bytes로 확인했다. 원본 content의 완전 따옴표 occurrence는 이득 ordinal4다. `CDC는 ` 앵커는 해당 필드에 유일하며 인용보다 앞선다. 정확 final body에도 같은 앵커와 완전 인용이 같은 이득 필드에 각각1회 남는다. 원본과 final의 네 물리 필드, 해당 귀속 문맥을 직접 읽었으며 원본/최종 경로의 하위 구성요소에 symlink가 없음을 확인했다.

폐·뇌 인용과 다음 금연 인용은 payload에 없으므로 이번 승인에 포함하지 않는다. 다른 본문 주장의 타당성도 이번 결과로 승인하지 않는다. 게이트 수치·route·summary의 자가판정은 출처·번역 승인 근거로 사용하지 않았다. raw·original·final·metrics·registry·git·공개 본문은 수정하지 않았다.
