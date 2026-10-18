# 제3절 정식 검토 후 최소수정 독립 승인
검토일: 2026-10-19 KST. 현재공개 raw SHA `097b24b2d1d5e2b697e9d48f5e8d07db73d6002ebddbd6fa34e60c07ecbde654`. 정식 KR-FIT 파일은 변경하지 않았습니다.
현재 전체본문을 읽고 각 frozen 제안과 before 필드·entry snapshot·전체본문 SHA를 실제 대조했습니다. 아래 세 제안은 각 유일 span만 바꿉니다. 다른 바이트·6필드구조·출처/DOI/URL·수치/조건/부정은 보존됩니다. 각 변경문장은 27/43/39자로50자 이하입니다.

## 제17항: approved
제안: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch03/_workspace/2026-10-18-017-3089/publication-formal-scope-correction-r1.json`
정확 SHA256: `5a1aa024d306695687eb3dde396e0ce7f7f59c9c88dc30d2e4768ed4233abb78`
`자신을 모욕한 사람을` → `잘못한 상대를`

## 제20항: approved
제안: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch03/_workspace/2026-10-18-020-f47e/publication-formal-reference-correction-r1.json`
정확 SHA256: `f7cd0caa16eaf1139eb570c167d3d6062ea89145c1e715835967d8322c7f0d89`
`기분이 가라앉았을 때 먼저 할 일은 이 절 제18항을 보세요.` → `기분이 가라앉으면 이 절 제18항(기분이 가라앉을 때 먼저 할 일)을 보세요.`

## 제22항: approved
제안: `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch03/_workspace/2026-10-18-022-d098/publication-formal-reference-correction-r1.json`
정확 SHA256: `9b7dd7966f299764cf01f4c7c2df93eaf3e37868b5b91a2e2d7925dc1a67b0b7`
`제15항의 비관적 예측도 확정된 미래로 받아들이지 마세요.` → `제15항(비관적 예측을 확정된 미래로 받아들이지 마세요)도 참고하세요.`

17항은 DOI10.1037/a0012165의 정확일치 기존캐시 원저자초록을 다시 읽었습니다. offender라는 표현과3실험·벌한뒤반추를 확인했습니다. 구체적 모욕장면은 확인하지 않았으므로 “잘못한 상대”가 확인범위에 더 맞습니다. 신규 HTTP나 실험 전체본문 검증을 주장하지 않습니다.
20항 앵커는 실제18항 제목 “기분이 가라앉을 때 먼저 할 일”과 일치합니다.22항 앵커는 실제15항 전체제목과 일치합니다. 원래 권고·인과한계·위기조건은 그대로입니다.
**세 제안 모두 exact-hash approved_for_guarded_integration.** 이것은 적용후 새본문의 정식 KR-FIT 승인이 아닙니다. root가 현재전체/entry/field 해시를 다시검사해 적용한 뒤17·20·22항을 새로 읽고 실제CLI로 최종해시를 얻어 정식검토를 갱신해야 합니다.
