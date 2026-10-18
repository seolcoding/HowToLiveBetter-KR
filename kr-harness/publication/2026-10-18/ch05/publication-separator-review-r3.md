# 제5절 원구분자 보존 재검토 r3

승인. 기존 예상값 계산은 제안 파일 EOF를 복사해 구분자 보존 정책과 달랐다. 원본문/의미 승인과 helper는 바꾸지 않고 독립 계산을 고쳤다.

45개 effective-after는 `proposal.rstrip() + 원strictentry 끝공백`이다. 18항목은 끝부분에1바이트씩 추가되고 마지막45항의 끝부분은1바이트 줄어 총17바이트가 늘며, 모든 비공백 내용은 같다. 각 원proposal SHA와 effective-after SHA를 별도로 고정했다. 독립45항 결과는 실제helper 출력 `ca416e08ca69ccf20f4fd0019aafc61ec7ea659b80c3aeaaa80e2384fb3d131b`와 완전히 같다.

그 뒤 승인한10개 지역작업을 적용한 가상 최종 SHA는 `3d9cb93280c3994c39995c98b61e85baaa89854fc26eaeaac2c727f42287f59d`다. 56개 필드의 full 대체·DOI 변화0·보호주석 유지·미확인 제한은 같다. 기존r2 canonical과 실패계획은 보존됐다. 공개 본문/실행파일/helper코드/git를 바꾸지 않았으며 정식KR-FIT·출판 승인이 아니다.
