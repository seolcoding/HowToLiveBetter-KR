# Reviewed original-quotation attribution: design assessment only

## Decision

A hash-bound sidecar alone cannot prove source attribution. Hashes establish byte identity, not that a quotation belongs to FEMA or CDC, that a Korean rendering is faithful to an English source, or that a reviewer was independent. A gate that trusts arbitrary `approved: true`, a review filename, or a self-supplied review hash would introduce an author-controlled exemption and violate the publication contract.

A general, independently adjudicated annotation mechanism is possible in principle: trusted source-attribution decisions become original-input classification data, shared by stylistic eligibility and stricter quotation fidelity. This is compatible with quick-rules Do-NOT **only if** the review establishes an actual attributed direct quotation, and compatible with gate0-only **only if** every ordinary gate is rerun unchanged and returns 0. It would not be a currently authorized operational route. It changes the trusted inputs and invocation contract of the gate, requires independent design/code review and explicit workflow governance, and cannot be smuggled into a finalizer's `accept` decision.

Without a trust boundary outside the rewriting actor's control, reject the mechanism and retain hold. This report proposes no code, sidecar approval, acceptance, or publication change.

## Actual cases inspected

Read each current 01_input.txt, final.md, publication-gates.json, 09_finalize.json and entry_snapshot.md from ch13 manifest-selected runs.

**e24**, run `2026-10-18-024-9635`: input SHA256 `e35406db9b7597853b3be829d042373bf269db9070afe66e389c4cbaf0984c4c`. Literal quoted content `멈추고, 엎드리고, 구른다` occupies Unicode code-point half-open interval [485,499), UTF-8 byte interval [1136,1170), excluding ASCII quotation delimiters. The FEMA introduction occurs several sentences earlier; another attributed quotation and author narration intervene. The snapshot cites https://www.ready.gov/home-fires. Current final removes two author connective commas and preserves the quoted content. Stored gate is 1, ending_comma_rate z 4.56 → 2.02; finalizer labels accept while expressly retaining the warning. That editorial decision does not authorize strict assembly.

**e38**, run `2026-10-18-038-eea4`: input SHA256 `c28be01c207caeb56676cf81cd6f9f3060d49334a522179b278d147ad24c4081`. Literal quoted content `빨리 시작할수록 좋고, 한 시간 한 시간이 중요하다` occupies code points [338,366), UTF-8 bytes [760,828), excluding delimiters. The CDC introduction is separated from the quote by a dosage/timing sentence. The snapshot cites https://www.cdc.gov/hiv/prevention/pep.html and transcribes `the sooner you start PEP, the better. Every hour counts.` Current final removes the author comma after 말고 and preserves the quote. Stored gate is 1, z 5.84 → 2.66; finalizer also accepts editorially while retaining gate1.

These spans and hashes were obtained from exact original files, not rewritten output. Primary-source websites were **not fetched during this design investigation**. The snapshot source labels and earlier finalizer claims are useful review leads, not newly independently verified primary-source evidence. The two quotations are Korean translations; literal Korean substring matching against an English primary document would not prove fidelity.

## Trust boundary required for a viable system

1. The producer/rewriter may propose annotations but cannot approve them, register trusted review digests, choose a permissive validator, or alter the immutable original-input registry. Its final.md and embedded comments are untrusted data.
2. A distinct reviewer must inspect the exact original quoted occurrence, its original attribution context, the original primary-source excerpt and translation alignment. A status from the author, an unrelated factual audit, or a hash-only check is insufficient. A fresh independent reviewer role should explicitly record attribution, direct-quotation status, translation support and boundaries; not whether excluding the span makes the metric pass.
3. A trusted coordinator or CI release process pins the exact approved sidecar and review digests in a registry unavailable to the rewriting actor. An alternative is a signature verified with a public key fixed in trusted deployment configuration. A public key included by the sidecar proves nothing. A signature proves approval origin and integrity, not semantic correctness; reviewer competence remains an explicit trust assumption.
4. Publication assembly resolves annotations by the exact immutable original-input hash and trusted registry, and passes the selected bytes explicitly to the gate. The gate must not auto-discover arbitrary neighbouring JSON, follow author-provided symlinks, trust final.md metadata, fetch mutable remote approval documents, or accept command-line claims as approval.
5. The same verified annotation set must be used during preparation/route computation, finalizer gating and final strict assembly. Otherwise route/metric discrepancies become hidden. Original saved inputs and metrics remain immutable historical evidence; any newly reviewed classification requires separate fresh evidence, with route differences reconciled under the normal role contract.

Independence is procedural, not cryptographic: two files written by the same actor are not independent. Separate role provenance and restricted approval registration are needed. This shared writable workspace cannot itself enforce a security boundary against all collaborating agents; a convention alone must not be represented as tamper resistance.

## Proposed annotation content, not an implemented schema

An approval would bind all of the following, with a versioned canonical serialization and strict rejection of unknown fields:

- Exact original file SHA256, byte length, encoding UTF-8, and an externally pinned immutable-input identity. No chapter or entry ID confers eligibility.
- Exact half-open UTF-8 byte offsets of quotation content and delimiters, exact content SHA256 and literal bytes, quote style and occurrence ordinal. Offsets must be valid UTF-8 boundaries and form a real pre-existing balanced quote occurrence under the shared parser. No newly inserted wrappers, unquoted author prose, partial words, arbitrary sentences, or spans expanded outside the quote are admissible. Existing minimum quote length and syntax requirements remain unchanged.
- Source identity, original attribution context offsets and hashes, authoritative source URL, retrieval time, retained primary-source artifact digest and exact excerpt locator/transcription. The artifact must contain the supplied excerpt; a URL string alone is insufficient. Retrieval provenance must be established separately from an author's local copy.
- For translations, a review binding the original Korean bytes to exact source-language excerpt bytes, including negation, scope, conditions and numbers. This is semantic review; the validator cannot infer equivalence from hashes.
- Exact review-document hash, independently established reviewer identity/role, adjudication rationale, approval time and trusted registry/signature reference. Review binds the full annotation, not just the input hash. A changed source excerpt, offset, interpretation or review invalidates approval.

Conflicting duplicate annotations, invalid signatures, missing evidence, stale hashes, unavailable reviewed artifacts, path escapes/symlinks, unexpected overlapping ranges, and ambiguous quote pairing must fail closed with execution/error status and block publication. Avoid silently ignoring a requested invalid annotation and producing a superficially ordinary gate result.

## Gate semantics and preservation

Validate trusted annotations against **original full bytes first**. Form one immutable non-overlapping protected original occurrence set by combining automatic syntax classification with approved original quotation annotations. Explicitly reject ambiguous partial overlap; exact duplicate declarations should fail rather than count twice. Nested quotations need one documented canonical merge rule shared by fidelity and style scoring.

Use that exact original set for before-text style exclusions and quotation fidelity. After-text exclusions can consume only exact original literal quote content with at most the original eligible occurrence count. The after-text parser must find real quote occurrences; new wrappers, enlarged wrappers, arbitrary selected substrings and repetitions cannot gain additional exclusions. Do not let a sidecar describe after-text spans.

Quote fidelity must enforce verbatim contents and original protected occurrence multiplicity, including annotated spans; the present membership-only fidelity loop is not by itself enough to reject loss of one of two identical protected occurrences. This is a required hardening design point, not a claim that current code already enforces it. The shared exclusion cap prevents excess after-text exemptions, but does not independently prove original repeated quotations survived.

Retaining quotation text does not prove its attribution was preserved after editing. Require the original source-identifying anchor to remain in the same editable field, and an independent final semantic review of quotation attribution at the exact final hash. Anchor checks alone cannot rule out contradictory new prose or a source switch; this is another explicit human-review dependency. If that dependency cannot be established, no convergence/adoption claim is justified.

P0 change rate, numerical/URL preservation, negative/conditional meaning obligations, P3 golden checks and P5 modality operate on original full text as before. Style exclusion changes only correct eligibility under the existing Do-NOT rule. Baselines, thresholds, sample guards and strict exit0-only acceptance are unchanged. The gate report must expose annotation provenance, protected occurrence counts and excluded character counts so classification changes remain reviewable. No metric-dependent approval condition is allowed.

The original quotation occurrence registry must be fixed before evaluating candidate outcomes. Choosing or enlarging protected spans because P1 remains high would be circular and function as a waiver.

## Regression/security plan before any implementation adoption

- Positive: independently approved original attributed quote separated by narrative; translated source with explicit aligned source excerpt; multiple contiguous and distant eligible occurrences; all supported quote styles and nested canonical cases. Test actual e24/e38 only after genuine primary-source verification and independent annotation approval.
- Negative semantics: rhetorical/self-question quotation, similar-looking author quotation without a source, wrong source document, only topical overlap with a source, mistranslated negation/condition/scope, and a quote introduced under a different source. Require independent review rejection, not a parser pretending it can infer meaning.
- Integrity: altered original byte or whitespace, stale input/sidecar/review/artifact digest, invalid byte boundary, changed span/delimiters, unquoted span, expanded quote span, duplicate/conflicting annotation, mismatched reviewer registry, self-supplied key, forged approval, path escape, symlink and mutable remote source. All must block.
- After-text attacks: altered quote, deleted occurrence, duplicate exact quote, extra wrappers, expanded wrappers, moving a quotation under a conflicting source, metadata embedded in final.md, output-selected sidecar and Unicode-normalization substitutions. Check both style eligibility caps and full quotation fidelity, not merely gate nonzero.
- Preservation: P0 abort remains effective; original number/URL and footnote checks reject mutations; tracked P5 deontic and hedge losses still reject; explicit semantic review checks prohibited-action negation. Existing P5 does not cover every `지 마세요` prohibition, so tests cannot claim universal machine negation preservation.
- Compatibility: all existing quote, footnote, golden and metrics regressions; compare all 667 original routes using approved classification, report every change and execute required upgraded roles rather than overriding the route. Recompute all current final gates with and without trusted annotations and explain every changed status. Missing/unapproved sidecar must never create an exemption.
- Repeatability: exact same pinned artifacts yield identical eligibility and reports; revocation and replaced-review behavior is explicit; archive old failed runs rather than overwriting evidence.

No implementation or test was executed for this proposed mechanism. This is a design and regression plan, not validation of an existing sidecar system.

## Alternatives and recommendation

**Retain hold:** the only immediately valid operational choice under current runtime/contracts for e24/e38. Preserves source quotations and avoids new trust assumptions.

**Broaden discourse regex:** rejected for now. Arbitrary multi-sentence lookback cannot reliably distinguish source passage from neighbour rhetoric or source changes. Thresholds and distance bounds would substitute a guess for attribution evidence.

**Edit attribution prose:** could make future source inputs unambiguous through a separately reviewed content correction, but changing current pure inputs/finals to solve gates violates the present task constraints. It must not be disguised as humanization or mutate the original baseline.

**Trusted original-attribution annotations:** a plausible general extension after explicit governance and independent design/code/source review. Prefer it over distance heuristics if this limitation recurs. Its meaning is a reviewed label about original quoted data, not an exemption from a failing threshold. However, it necessarily relies on trusted semantic adjudication and cannot deliver a purely mechanical proof of attribution.

Recommendation: keep existing holds now. If pursued, first review the trust/governance model and the shared original occurrence registry, then independently verify primary sources and translation alignment. Do not generate approvals merely to obtain gate0. No current finalizer `accept` or this design report supplies the missing approval.
