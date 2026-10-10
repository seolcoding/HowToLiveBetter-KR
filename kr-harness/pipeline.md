# 한국 현지화 파이프라인 하네스

34절 전체를 한국 현지화 완역하기 위한 다단계 파이프라인. **각 단계는 격리된 서브에이전트(독립 컨텍스트)에서 돈다.** 단계 사이는 파일로만 통신한다.

```
S1 분석 → S2 조사 → S3 초역 → S4 문체(convert-b.mjs) → S5 검증(verify.mjs) → S6 윤문(kr-polisher) → S7 항목별 개선(kr-entry-refiner × 항목 수) → S8 조립+보고
```

**원칙(2026-10-06 사용자 확정): 개별 항목은 항상 개별 서브에이전트가 작업한다.** `/kr-refine <ID>`는 `entries.mjs split`으로 항목을 나눈 다음 항목마다 kr-entry-refiner 에이전트를 하나씩 띄운다(한 번에 최대 8개). `entries.mjs check`로 구조를 검사하고, 실패하면 한 번 다시 시도한다. 그래도 실패하면 원문을 유지한다. 출력은 `7-refined.md`다(verify 우선순위 최상위, book-kr 조립 소스).

**실행(2026-10-07부터)**: 단계 전체는 `/kr-pipeline N` 스킬 하나로 돈다. 스킬·에이전트·스크립트는 모두 `.claude/` 아래에 있다. codex·orca·opencode에는 의존하지 않는다. 로컬, claude.ai/code 클라우드 세션, routines에서 같고, API 키 없이 구독 로그인으로만 돈다. 클라우드 설정은 [CLOUD.md](CLOUD.md)에 있다. 진행 상태는 `node .claude/skills/kr-pipeline/scripts/pipeline.mjs status`로 본다.

레슨런과 운영 노하우: [LESSONS.md](LESSONS.md). 윤문 대기열(1차 기록): [polish-queue.md](polish-queue.md).

**실행 ID(2026-10-10부터)**: `R` + 절 번호 두 자리 + 절 안 순번 글자다(제18절이면 `R18a`, `R18b`…). 절 번호가 들어 있어 여러 세션이 다른 절을 동시에 돌려도 겹치지 않는다. 옛 `R01`~`R14`는 그대로 두고 함께 읽는다. 규칙은 `.claude/skills/kr-pipeline/scripts/run-id.mjs` 머리말과 [CLOUD.md](CLOUD.md) 「병렬 세션」.

## 디렉토리 구조

```
kr-harness/
  pipeline.md          # 이 문서
  chapters/N/          # 절 단위 제작 산출물 (분석→조사→초역)
    1-analysis.md      # 항목 인벤토리 + 치환 등급
    2-research.md      # 한국 대응 조사 (출처 URL + 확인일)
    3-draft.md         # 중립 문체 초역 (뜻 보존)
  runs/<ID>-절-문체/    # 실행 단위 (예: R18a-18-styleB, 옛 R13-04-styleB)
    config.json        # 실행 설정
    4-styled.md        # 문체 패치 완료본
    5-verify.md        # 독립 검증 결과
    meta.json          # 상태·통계
    6-polished.md      # S6 윤문본
    entries/           # S7 항목별 입력·출력(e-NN-in.md, e-NN.md, jobs.json)
    7-refined.md       # S7 조립본
  report.html          # 비교 보고서 (.claude/skills/kr-verify/scripts/report.mjs가 main에서만 다시 만든다)
```

## 단계 정의 (격리 컨텍스트)

| 단계 | 컨텍스트 | 입력 | 출력 | 금지 |
|---|---|---|---|---|
| S1+S2 제작 | 절당 1개 에이전트 | 원문 book/N + 규칙 | chapters/N/{1,2,3}.md | 문체 다듬기, book/ 수정 |
| S4 문체 | 결정론적 변환기(`pipeline.mjs new-run`) | 3-draft + 문체 지정 | runs/R/4-styled.md | 숫자·출처·구조 변경 |
| S5 검증 | 스크립트(verify.mjs) | 4-styled(또는 6-polished) + 원문 + 체크리스트 | runs/R/5-verify.md + meta.json | 직접 수정 (목록만) |
| S6 윤문 | 실행당 1개 에이전트(kr-polisher, `/kr-polish <ID>`) | 4-styled.md + humanize-kr + 코퍼스 | runs/R/6-polished.md | 숫자·출처·구조·필드 변경, 사실 추가 |
| S7 항목별 개선 | 항목당 1개 에이전트(kr-entry-refiner, `/kr-refine <ID>`) | entries/e-NN-in.md | entries/e-NN.md → 7-refined.md | 제목·필드·근거등급·출처·숫자·URL 변경 |
| S8 조립 | 스크립트(`pipeline.mjs assemble <ID>`) | 7-refined > 6-polished > 4-styled | book-kr/NN-*.md + README 표 ✅ | 반려 실행 조립 |

문체 프로파일 (2026-10-06 사용자 확정):
- **B 표준(합니다체)**: 공문·안내문형 `~합니다/~하세요` 통일. **기본 문체.**
- **A 변형(뉴스·공문형 평어체)**: 서술 `~다`, 권고 `~하세요`. 비교 대조용 유지.
- **C 해요체**: 폐기. 새 실행에 쓰지 않는다(R03 결과는 보관).

## 10회 실행 매니페스트 (비교 실험, 2026-10-06 1차 완료)

| 실행 | 절 | 등급 | 문체 | 목적 | 상태 |
|---|---|---|---|---|---|
| R01 | 22 푹 쉬는 법 | 🟢 | A | 문체 비교 기준 | 완료 |
| R02 | 22 | 🟢 | B | 문체 비교 — **승자** | 완료 |
| R03 | 22 | 🟢 | C | 문체 비교 — 폐기됨 | 완료(보관) |
| R04 | 04 시간 낭비 줄이기 | 🟢 | A | 표준 커버리지 | 완료(S4는 B 재패치 대상) |
| R05 | 03 기력 낭비 줄이기 | 🟢 | A | 표준 커버리지 | 완료(S4는 B 재패치 대상) |
| R06 | 02 천천히 죽지 않기 | 🟢 | A | 표준 커버리지 (최대절) | 완료(S4는 B 재패치 대상) |
| R07 | 06 함정 목록 | 🟢 | A | 표준 커버리지 | 완료(S4는 B 재패치 대상) |
| R08 | 14 계정과 정보 보안 | 🟡 | A | 조사 단계 시험 | 완료(S4는 B 재패치 대상) |
| R09 | 14 | 🟡 | B | 문체 비교 2차 | 2차 실행 |
| R10 | 22 | 🟢 | B | 재현성 (R02와 동일 설정 재실행) | 2차 실행 |

2차 실행 (B 기본 확정 후):
- R09: 14절 B · R10: 22절 B 재현성
- R11-R14: 02·03·04·06절 B 재패치 (S3 초역은 그대로, S4만 B로)
- 다음 절 제작(18·17·16·28…)은 B 기준, A는 비교 샘플용 소수 유지. 2026-10-10부터 새 실행 ID는 R15부터 잇지 않고 절 번호를 넣는다(제18절 R18a, R18b…).

## 검증 체크리스트 (S5가 전부 실행)

1. 중국 잔재 grep: `人民币|医保|社保|公积金|低保|劳动仲裁|淘宝|微信|12356|12315|12378|96110`
2. 전화번호 한국 대조 (kr-sources.md 치환표)
3. 항목 수 원본 일치, 필드 누락 없음 (비용/쉽게/이득/근거등급/출처/비고 + 비용태그 줄)
4. DOI·HR/RR/OR 원문과 동일
5. 50자 초과 문장 목록화
6. 번역테·AI腔 스캔 (humanize-kr.md 백과 항목)
7. TODO 목록 절 끝에 모임
8. 판정: 통과 / 조건부 통과(경미) / 반려(구조적 문제)

## 조사 규칙 (S2)

- 1차 출처 직접 열기: law.go.kr, KOSIS, 공단·부처 사이트
- 발견용 검색: 네이버(`https://search.naver.com/search.naver?query=...`), 구글 — 힌트만, 인용은 1차로 승격된 것만
- 원본 CLAUDE.md의 언론 보도 5조건 계승
- 못 찾으면 `TODO 확인 필요` — 찾은 척 금지, 중국 수치 한국어 이식 금지
