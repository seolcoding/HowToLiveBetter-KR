# 제6절 안정 교차참조 두안 독립 검토 r1

정확 manifest `fb973ba4aff6f7b788ddb97034be4eec4774c3196f507d6612609da1e46fe725`의 제8·25항을 승인한다. 적용 전 current whole guard는 `6746d07a3b0158c91141dc949b70892117f6fdfc3c9d62a1fc5572fdc51fdc85`다. 승인 범위는 해당 before/after 연결 문장군뿐이며, 공개 본문·이전 canonical·stable 보고서는 변경하지 않았다. 정식 또는 출판 승인이 아니다.

## 제8항 — approve

감량 문맥의 효과 단정을 일반 운동 안내로 낮췄다. 현재 제2절 운동 항목의 사망 관찰 관련성과 감량 직접 근거를 구별한다. 제32항 식이±운동 감량 시험 전체를 무효화하는 문장이 아니라 운동 항목의 수치를 한정한다.

- proposal SHA: `c12e0340d8dccc6aa6b4698470c86617ebc6add1512d939e395a779169c68f4b`
- changes SHA: `ad0d0fbb33040c294844e9f1284a0e2355c2a337020ecabe0a4a94aaff01269e`
- current entry SHA: `d3f2a1dbf98d324d4af27dd51e0d11fff78cb67cb387f9f5c4abdf276d50cc0e`
- effective after SHA: `c12e0340d8dccc6aa6b4698470c86617ebc6add1512d939e395a779169c68f4b`
- before: 운동 자체는 효과가 있습니다. 제2절(천천히 죽지 않기)을 보세요.
- after: 일반적인 운동 안내는 제2절(천천히 죽지 않기)을 보세요. 운동 항목의 수치는 주로 활동량과 사망의 연관입니다. 감량 효과를 직접 보여 주는 수치는 아닙니다.

## 제25항 — approve

음식 거리·가용성 시험으로 범위를 한정하고 휴대폰·게임 직접 효과를 입증하지 않는다고 명시한다. 실행 의도/목표 달성은 별도의 제4절1항 일반 안내로 보존하며, 사전 준비가 의지력을 보존한다는 주장은 추가하지 않았다.

- proposal SHA: `f4e48c40700e0bb6abceafcb6a47eb1ee629d8d1f350be597315b0046bfbe8d2`
- changes SHA: `f7dc43f670fdb24cad4e5610cb7724b81ea4171e80fb76574c0a2f4a22befaa9`
- current entry SHA: `c2c9aae84dbaba83e14dc54292bba9458416d5255865c32b232797fe93af270b`
- effective after SHA: `f4e48c40700e0bb6abceafcb6a47eb1ee629d8d1f350be597315b0046bfbe8d2`
- before: 환경과 문장을 바꾸는 방법은 무작위시험이 뒷받침합니다. 제4절 제10항(만지고 싶은 것은 멀리 두기)을 보세요.
- after: 음식의 거리와 가용성을 바꾼 무작위시험이 있습니다. 휴대폰과 게임의 효과를 직접 입증한 근거는 아닙니다. 제4절 제10항(만지고 싶은 것은 멀리 두기)을 보세요.

## 검증과 적용 예상

Current actual chapter02 relevant full entries11/14/15/16/17/32 and chapter04 entries1/10 directly read. No primary raw cache reopened and no new HTTP; no new numerical/source claim is added. This is semantic scope review, not a new source audit.

두 안 모두 실제 snapshot/manifest/변경 파일의 해시와 유일 변경 범위를 독립 확인했다. 비고 외 다섯 필드, 제목·tag·grade·DOI 및 수치는 불변이다. literal50(괄호 포함), easy2~4문장·120자, 제목70자와 생산 단일행 구조를 통과했다. production split의 원래 구분자를 보존한 가상 문자열만 메모리에서 계산했다. 항목29개, 순서, intro/tail/TODO 경계, 다른 모든 항목 bytes가 그대로다.

두 안 통합 예상 whole SHA: `c4dc139bf0af5889953784e7c5d6e9214ebecbbf0938b5fbe4496e4320cf96e4`

- #8: whole `6746d07a3b0158c91141dc949b70892117f6fdfc3c9d62a1fc5572fdc51fdc85` → `d65d3f64bd3a95f5aada91e0c56625ccdb7eae3fabf562fe19f79db1969fefe8`
- #25: whole `d65d3f64bd3a95f5aada91e0c56625ccdb7eae3fabf562fe19f79db1969fefe8` → `c4dc139bf0af5889953784e7c5d6e9214ebecbbf0938b5fbe4496e4320cf96e4`

JSON SHA: `37af301d5826e8544dd9440e71d792fcaa7e154172bc8c732a8e700b5434e991`
