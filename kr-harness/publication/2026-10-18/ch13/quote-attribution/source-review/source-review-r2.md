# 독립 인용 검토 R2

기존 source-review.md/source-findings.json은 그대로 둡니다. R2는 root가 발견한 별도 공식 USFA HTML 원응답과 실제 요청 메타데이터를 직접 읽은 추가 판단입니다. 원본·정확 final body SHA와 기존 인용/기관 anchor byte 범위도 다시 대조해 모두 동일함을 확인했습니다. 상세 byte 범위와 SHA는 source-findings-r2.json에 있습니다.

## 24항 — 공식 대체 전거로 해당 인용 적합

직접 확인 URL: https://www.usfa.fema.gov/gallery/pictographs/stop-drop-roll.html

2026-10-18T16:08:35.059087+00:00 실제 요청은 HTTP 200이며 HTML 34270 bytes, SHA256 bb5693caaa8075944d814e770e8fefd86c2d084702f10bb1ff66f1faaf3d8969입니다. 공식 sitemap 200 원응답에서 발견된 실제 URL이라는 이력도 읽었습니다. 이 원응답을 usfa-stop-drop-roll-r2.raw.html에 바이트 그대로 복사했습니다.

실제 본문은 `If your clothes catch fire, stop, drop and roll. Stop, drop to the ground, and cover your face with your hands. Roll over and over or back and forth until the fire is out.`입니다. 첫 문장의 세 동작 `stop, drop and roll.`은 `멈추고, 엎드리고, 구른다`의 충실한 직접 번역입니다. 바로 뒤 drop to the ground 설명은 drop의 바닥 동작 의미를 명시합니다. 한국어의 평서형 표어와 쉼표는 의미 왜곡이 아닙니다. 원본과 정확 final은 인용 직전에 옷에 불이 붙으면이라는 조건을 모두 남겼습니다. 세 동작을 빠뜨리거나 부정을 반전하지 않았고, 기관·필드 이동도 없습니다.

같은 페이지의 다음 문단은 동작을 수행할 수 없는 사람에게 담요 등 대안을 제시합니다. 이는 별도 수행 불가 조건의 안내입니다. 세 동작 표어의 짧은 인용이 그 대안까지 전부 인용한다고 주장하는 것은 아니므로 번역 오류로 보지 않습니다. 다만 항목 전체의 접근성 안내가 충분한지 또는 누구나 동작할 수 있는지는 이번 판단으로 승인하지 않습니다.

사이트 footer의 `USFA.FEMA.gov` 및 `An official website of the ... Federal Emergency Management Agency`를 직접 확인했습니다. 따라서 USFA 자료를 상위기관 FEMA의 화재 행동 안내로 귀속하는 것은 정당합니다. 첫 FEMA anchor 아래이며 국민안전24로 기관이 전환되는 지점 이전이라는 원본/정확 final 문맥도 그대로입니다.

**전거의 한계:** 원래 출처 URL ready.gov/home-fires는 여전히 403입니다. 이 페이지를 직접 읽었다거나 USFA와 동일 문서라고 주장하지 않습니다. 직접 검증한 전거는 위 별도 FEMA 공식 USFA URL입니다. payload의 source URL/artifact는 실제 확인한 USFA 것을 사용해야 합니다. 나머지 ready.gov 인용 두 개, 대피 설명, 국내 법령 및 전체 항목의 출판 적합성은 별개입니다.

## 38항

기존 CDC 공식 HTML과 인용 번역 적합 판단을 유지합니다. 이번 재대조에서도 원본/정확 final body와 인용·기관 anchor bytes가 동일합니다.

R2도 raw findings이며 strict payload 승인이나 approved registry가 아닙니다. root가 구체적인 payload bytes를 만든 뒤 동일 독립 검토자가 원자료와 재대조해야 합니다. 기계 지표·게이트 통과 여부는 판단에 사용하지 않았습니다. 기존 findings와 운영 파일은 수정하지 않았습니다.
