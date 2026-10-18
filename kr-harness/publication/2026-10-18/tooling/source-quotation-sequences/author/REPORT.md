# Quote-passage partial candidate: e30 resolves, e24 remains held

The candidate is isolated under this folder. No operational skill, publication input/output, gate, manifest, public chapter or Git file was modified by this work. Base checks.py SHA256 was 3220de721c2556760f853d67de336d53b8e89bd1a3ed7b9b2971fe393441a9bd. The copied metrics.py already includes the independently reviewed noun patch, SHA256 c17ef0bbb25f24fc1695068a319d421d35e4cffd9a8c277da3ad6a30ea96b8e3; this task does not modify it.

## Independent diagnosis

Actual e30 has two immediately consecutive attributed source quotations after `행정안전부 국민안전24 지진 행동요령의 원문은 이렇습니다.` and one FEMA quotation after `다음과 같이 권합니다.`. The old grammar recognizes neither original-text introductions nor 권합니다. The suffix attribution grammar also misses Korean quotation closing marks and the short predicate `고 합니다`. These are local syntactic classification gaps.

Actual e24 introduces FEMA source-original wording, but its C11 quotation `멈추고, 엎드리고, 구른다` occurs after intervening author narration, another quotation, and another sentence. The quote is semantically from FEMA, yet the available markup has no explicit endpoint for an attributed passage. The same field later switches sources. Extending source scope through arbitrary intervening prose would also protect unrelated neighbouring rhetorical quotations. No safe general passage-boundary rule was established; this candidate intentionally leaves that distant quotation eligible and e24 held.

## Minimal candidate grammar

1. Recognize an immediately following quotation introduced by an explicit preceding source phrase plus `원문은 이렇습니다` or `원문은 다음과 같습니다`.
2. Add 권합니다 to the existing subject + forward-pointer + reporting-predicate grammar.
3. Correct after-quotation structural attribution to accept all existing closing quote styles and short predicates `고 합니다/한다/했다/했습니다`.
4. Carry an already established attribution across immediately adjacent quoted units, allowing only sentence punctuation and whitespace between them. Any intervening author prose breaks the chain. Nested ranges still merge as before.

Original frozen quotation texts and occurrence limits continue governing after-text style exclusions. No quote wrapper in a rewritten output can acquire a new exemption. All quote fidelity, number fidelity, change-rate, modality, thresholds, baselines and sample guards are unchanged.

## Executed evidence

- test_quote_passage.py: 7 meaningful regressions pass, including actual e30 identity/final exit0, deliberate alteration of each of its three protected spans rejected with quote_altered, and actual e24 identity/final exit1 retained.
- Regressions cover three quotation styles, adjacent sequences, prose-interrupted sequences, nearby rhetorical quotations, genuine author connective commas, new/expanded/repeated-wrapper attacks, P0 abort, numerical injection rejection, and tracked P5 deontic-loss rejection.
- Current repository quote regression suite: all 11 tests pass against candidate.
- Upstream golden: 38 pass; upstream v2 metrics: 69 pass.
- All 667 original inputs recomputed read-only: 644 light / 23 standard, zero changed routes. No saved 00_metrics.json was written.

CLI evidence is in cases/; test source in test_quote_passage.py; route and upstream counts in validation.json. Existing production hold evidence remains untouched. This candidate cannot support a claim that both e24 and e30 converge. A root-controlled fresh finalizer decision is still needed after independent review and any application.

## Remaining limits

This patch recognizes explicit local source grammar and contiguous quote sequences, not general discourse attribution. It does not infer source ownership across intervening author prose or detect source switches semantically. e24 remains an honest unresolved attribution-boundary case. Existing P5 coverage is also unchanged; the prior noun-classifier report documents that `지 마세요` negation is not covered by its deontic lexicon.
