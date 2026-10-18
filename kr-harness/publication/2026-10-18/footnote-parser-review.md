# 각주·통계 토큰 분류 독립 검토 — 2026-10-18

판정: **pass (block 0, warn 0)**. 변경은 숫자 경계에서 시작하는 소수 `.29)`를 통계 토큰으로 식별하는 국소 필터다. 실제 문장에 붙은 `.29)` 및 `20%.30)` 참조의 소실·번호 대체·앵커 이동은 계속 거부된다. 코드/본문/순수 산출물은 수정하지 않았다.

## 코드와 출처 기록

- 실제 git diff에서 checks.py의 변경은 `_LEADING_DECIMAL_PREFIX`와 extract_inline_markers의 skip 2줄뿐이다(주석 포함5줄 추가). 줄 시작/공백/여는 괄호·대괄호/등호·콜론/수학 기호·범위 기호 뒤의 점은 생략된 선행0 소수로 분류한다. `결과였다.29)`의 점 앞 글자는 경계가 아니므로 실제 각주로 남고, `20%.30)`도 `%`가 경계가 아니므로 남는다.
- `ANCHOR_WINDOW=50`, marker count/number-set/definition/nearest-number anchor 검사 및 verify_gates 정책/임계값은 이번 diff에서 바뀌지 않았다. 게이트 스크립트의 P0 WARN30/ABORT50와 golden 실패 처리도 유지된다.
- PROVENANCE는 기존 소수·범위 오탐 수정과 새 leading-zero-omitted decimal 구분, 실제 ch03e22 사례 및 회귀6건을 설명한다. 코드 범위와 일치한다. 단, 이 검토는 문맥상 점 뒤 숫자가 항상 소수인지 의미를 판단하는 NLP 검증을 주장하지 않는다.

## 직접 실행한 검증

1. `python3 kr-harness/publication/scripts/tests/test_footnote_decimal.py`: 6/6 통과. 실제 ch01e27 통계값과 ch03e22의 `.11~.29)`/`.08~.29)` identity를 production gate로 검증하고 실제 각주 보존·누락·중복을 검사한다.
2. 실제 ch03e22 run `_workspace/2026-10-18-022-d098`: 같은 vendored verify_gates.py에 `--before 01_input.txt --after 01_input.txt --genre essay --json` 실행해 exit0/변경률0%; `--after final.md` 실행해 exit0/변경률0.2%. P3 golden PASS. 출력은 메모리로만 읽고 기존 실행 산출물·게이트 증거를 덮어쓰지 않았다.
3. 독립 임시 fixture `값은 .29였다.29) 비율은 20%.30)`에서 두 실제 marker29/30을 추출했다. identity production gate exit0. 30번 누락은 footnote_count+footnote_numbers 및 gate exit1, 30→29 중복 대체는 footnote_numbers 및 gate exit1, 29/30 자리 교환은 footnote_anchor2건 및 gate exit1이었다. 따라서 이번 오탐 제외가 실제 참조 소실·중복·위치 보존을 우회하지 않는다.
4. 현재 DOI CLI 회귀와 앞부분 Node fixture가 연결된 CI를 직접 읽었다. setup-python이 Python 회귀 명령보다 앞에 있고 Python 도구는 stdlib만 사용한다. setup-node22 뒤 ebook npm ci가 frontmatter test 앞에 있어 marked 설치 순서도 맞는다. 새 CI 원격 실행 결과는 이번 검토에서 확인하지 않았다.

## 검토 시점 파일 SHA-256

| 파일 | SHA-256 |
|---|---|
| `.claude/skills/humanize-korean/scripts/checks.py` | `d361c5f2e683dd7530de81d88a47140e04cbce4dc2ff18cf2771536f9321fd88` |
| `.claude/skills/humanize-korean/scripts/verify_gates.py` | `675b4b4995997b654c7ad5826348258d3420fdaf6e130a44898398064133794c` |
| `.claude/skills/humanize-korean/PROVENANCE.md` | `445f1e08ccf7e862fd5c745dbab643f6bf3e888d9c8d31a4322b54f91b2cf48b` |
| `kr-harness/publication/scripts/tests/test_footnote_decimal.py` | `d742acba745364e3cd2dd7e3fb25c1cad0c2498f768fb2d2524b8c45d3fa7a6a` |
| `.github/workflows/kr-check.yml` | `a14a49c010db93d2b34fb83001bc748f48dc42486ee270a8de2713c3cfa92358` |
| `kr-harness/publication/2026-10-18/ch03/_workspace/2026-10-18-022-d098/01_input.txt` | `8cd5276e168f7317a422baaf54d2b6322e6c7e43f780d4e924d7318792d64865` |
| `kr-harness/publication/2026-10-18/ch03/_workspace/2026-10-18-022-d098/final.md` | `a18caa4ea533dc1155ea69064832265c40691a0aeb36db548d359c13b2f5e84a` |
