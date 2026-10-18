# 도입·장말 r3 경계 독립 검토

승인. after 장말 제목 한 줄만 원래 `## TODO 확인 필요`로 복원했다. 나머지9개 intro 구간·장말문구·최신45 map·근거/미확인 제한은 같다.

실제 production split 함수를 AST로 읽어 r2 제목은 장말을45항에 합치는 실패를 재현했다. r3에서는45개 항목 본문이 지역작업 전과 전부 바이트 단위로 같고 장말은 별도로 분리된다. helper코드는 바꾸지 않았다.

가상 최종 SHA: `800a48b1226f6ed74680a995913eec124208674214dee38d1eaae855a7892433`. 원proposal/effective-after SHA와55개 단계는 별도 canonical 갱신에 연결한다. 정식KR-FIT·출판 승인이 아니다.
