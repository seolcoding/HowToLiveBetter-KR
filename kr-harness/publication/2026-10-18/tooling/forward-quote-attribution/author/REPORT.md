# Quote-prefix candidate

Operational repository files, source/input/final files and gate evidence were not changed.

## Diagnosis and proposed change

Actual ch13 entry10 has its only C11 connective comma in the quote immediately introduced by `노인의학 고찰에서는 증상을 이렇게 설명합니다.`. Existing classification cuts away that completed sentence and lacks 설명합니다 in its speech lexicon. Its quote is thus incorrectly eligible despite the Do-NOT direct attributed quotation rule.

candidate.patch adds a separate anchored introduction grammar, leaving the old neighbouring-sentence boundary protection intact. A source/subject particle, forward pointer `이렇게` or `다음과 같이`, reporting predicate, full stop and immediately following opening quotation mark are required. It does not expand the generic 30-character speech window or exempt any entry ID. No metric formula, sample guard, baseline, threshold, fidelity check, frozen after-text occurrence restriction or acceptance behavior changes.

## Validation

External copied production verify_gates.py: actual e10 identity and existing final exit 0; altered quote exits 1 with quote_altered; absent introduction and neighbouring rhetorical quote remain warned. Newly introduced wrappers, expanded original wrappers and repeated wrapper occurrences remain warned. Existing seven production quote regression tests pass. Upstream test_golden.py all 38 tests pass, including nearby-speech rhetorical-quotation regression.

All 667 original inputs were recomputed read-only using candidate metrics and original route logic: 644 light, 23 standard, zero changed manifest routes. No 00_metrics.json was written. Detailed fresh production evidence is in cases/, results.json and validate.py.

## Separate e14 cause and limits

Actual ch13 e14 identity and existing final both still exit 1. `로션이나 연고, 기름` has the noun 연고 incorrectly counted as a connective ending 고 in metrics.py. Its direct quotation contains no C11 connective comma. Existing final summary itself describes this lexical error while recording gate1; it cannot be adopted under strict acceptance.

No e14 patch is included. Bare suffix regexes cannot generally distinguish nominal 고 from verbal 고; e.g. 사고/보고/참고 have ambiguous nominal/verbal readings. A broad exclusion dictionary could suppress true author connectives, and a sentence- or entry-specific exclusion would violate the task constraints. A justified morphology-aware classification needs separate investigation and regression evidence.

The prefix grammar intentionally recognizes explicit forward introductions only. It does not infer quotation ownership from general research context such as `연구 7개를 합친 분석도 같은 결과였습니다.`.
