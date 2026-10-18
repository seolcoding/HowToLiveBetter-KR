# R2: root-controlled quotation classification under the existing procedural trust model

## Assessment

The proposed root-controlled registry is a reasonable general tool improvement **under the same procedural role-trust model already used by reviewed integration**. It need not add cryptographic signatures or OS permission partitions to be internally consistent. CONTRACT already relies on a root-authored approval plan, independent reviewed artifacts and exact hashes in a shared workspace. Applying that same trust level to original quotation classification does not inherently weaken the rules.

The distinction is substantive: the reviewer adjudicates whether an already existing, exact original quote is a source-attributed direct quotation covered by quick-rules Do-NOT. That decision supplies classification data. It does not approve a metric value, waive a P1 target, allow an arbitrary sentence exclusion, or authorize gate1 assembly. All gates must still execute, and strict assembly must still require exit0.

This registry is **not a currently documented/implemented allowed route**. A reviewed general implementation and CONTRACT update are prerequisites. This R2 is design assessment only; it approves no actual quotation, registry, existing final or publication. Independently verified source/translation reviews must precede any root registry approval. Current e24/e38 holds remain in force.

## Threat model: two different boundaries

**In scope:** malicious original/final text, instructions embedded in prose, HUMANIZE-SUMMARY comments, author-created proposals, stale or edited sidecars, accidental file mix-ups, path escapes, ambiguous spans, invalid review references and output-driven eligibility changes. Deterministic validation and explicit root-selected configuration should resist these without trusting document text or unapproved proposals.

**Procedurally trusted actors:** root follows the role contract and approves only independently reviewed classification data; reviewers perform the actual source and translation work; authors/finalizers do not write approval registries or select them for production assembly. A filesystem file is not intrinsically trusted merely because its filename says root or approved. Its provenance is the explicit root action recorded under that process.

**Outside the existing guarantee:** a malicious agent with full tool authority deliberately changing gate code, forging root actions, replacing trusted program files or bypassing the entire publication tool. The present shared-workspace pipeline cannot cryptographically prevent that either. This design must state that limit candidly, but need not solve it as a special prerequisite for quotation classification. Role separation plus SHA bindings provides procedural integrity and auditability, not a sandbox against all agents.

An ordinary author proposal cannot gain authority by naming a registry, setting approved=true or including an exact digest. The root must explicitly promote it only after independent review. The registry's root-controlled selection is as important as its contents.

## Proposed approval workflow

1. Preserve exact immutable source-derived 01_input.txt and its manifest digest. Authors or finalizers may write unapproved proposals identifying an original quoted occurrence and suspected source, but cannot modify the original, gate evidence or approval registry.
2. An independent reviewer receives the original input and complete source context, exact primary-source artifacts and a neutral attribution task. Review must decide whether this is direct source wording or a faithful translated direct quotation, identify its speaker/institution, delimit the exact original quote and explain source-to-translation alignment. It must reject rhetorical author quotes and paraphrases presented as literal source wording. Review should not be tasked with producing enough exclusions to obtain convergence.
3. The review artifact binds input digest, exact quote occurrence, source-artifact digest/excerpt and translation analysis. A different actor from the author performs it; the artifact identity and its relationship to roles are recorded. Reusing an old unrelated audit is insufficient.
4. Root independently checks that evidence and writes the classification registry with explicit approval and review hashes. This is the sole approval-producing step. An `accept` finalizer record, this design report and a proposed registry are never substitutes.
5. Root invokes preparation/gating/assembly with the exact registry path and expected digest. The pipeline receives this configuration through explicit tool arguments, not from input, output, summaries, front matter, auto-discovered neighbour files or an author-chosen metadata field.
6. Fresh classification metrics and routes are recorded separately; required roles run for the resulting route. Finalizer and assembly use the same pinned classification context. Strict assembly revalidates everything and accepts only actual current exit0.

If independent review finds that the Korean quote materially departs from its primary source, classification approval must be rejected. Any needed factual/translation correction belongs in the separately reviewed content-correction workflow; the registry cannot repair the wording by relabelling it.

## Strict schema proposal

Use a versioned object with a fixed exact field set; reject unknown/missing keys, duplicate JSON keys, coercions and non-finite numbers. No arbitrary command, regex, code fragment, metric name, threshold, exclusion category or after-text span is allowed.

Registry header:

- `schema_version`: one supported integer.
- `status`: exact approved enum, written only by root through the above process.
- `original`: exact SHA256 of original UTF-8 bytes and exact byte length, plus a path reference confined to the selected publication run. These values must match the manifest independently; the registry cannot redefine the expected original.
- `review`: confined existing independent-review path and exact SHA256, with declared reviewer role and author/proposer identity for procedural independence checks. Role strings support audit; they do not cryptographically prove independence.
- `quotations`: nonempty list of exact original occurrence records. Each record has content and delimiter half-open UTF-8 offsets, exact literal quoted-content digest, quote style, full original source-attribution context offsets/digest, source-artifact path/digest, canonical primary-source URL, exact source excerpt locator/digest, explicit translated/native classification, and the approved review-artifact reference covering that record.

Paths must resolve inside the explicitly allowed evidence root with no escaping symlink or `..` traversal. Artifacts must be readable local snapshots, not live mutable URLs fetched during gating. URL authority and artifact retrieval provenance are reviewed facts, not a gate inference from filename/domain alone. A source artifact copied by the author has no independent authority without review.

UTF-8 must decode strictly; spans must end on code-point boundaries and match an actual complete, pre-existing balanced quote occurrence in the original shared parser. The record cannot select unquoted prose or a fraction/expansion of a quote. Minimum quote length remains unchanged. Exact duplicate records, partial overlaps and conflicting nested ownership fail closed; supported nesting uses one canonical merged interval model.

Every approved record must match an independently reviewed occurrence. A root-approved empty registry or an unrelated valid approval cannot authorize unlisted spans. Annotations cannot be selected or enlarged based on after-text warnings. Revocation or changed evidence requires a new registry digest and fresh validation, while historical evidence remains retained.

## Minimal runtime change boundary

1. Add a small stdlib-only loader/validator that turns the explicitly selected, hash-pinned registry into verified original quote occurrence intervals and provenance. Keep parsing/validation separate from numerical metrics and source-language reasoning. No web fetch or new morphology/runtime service is required.
2. Extend the shared original protected-occurrence representation to combine automatic grammar classification with verified reviewed classification. Both style eligibility and quotation fidelity consume that representation. Make the original occurrence set immutable for the paired before/after gate run.
3. Add explicit optional registry path/digest arguments to preparation and verify_gates, and a root-only production assembly configuration path under CONTRACT. A missing registry means the existing automatic classifier, not a hidden fallback to arbitrary proposals. A requested but invalid registry causes execution error and blocks assembly.
4. Assembly itself loads and verifies the configured registry/review/input bindings and passes a verified context to its actual gate invocation. It cannot accept a previously cached gate0 from another registry or read the registry choice from final.md. Record selected registry digest, protected counts and artifact hashes in fresh machine evidence.
5. Do not add per-entry conditionals or disable any metric/sample guard. A generic registry may bind different original file digests, as an integration plan binds different source digests; that is dataset identity, not a special-case code branch. No registry field can request acceptance.

The registry does not change original text, source snapshot, after-text quote wording, publication assembly layout, P0/P3/P5 inputs, numerical/URL checks, thresholds or baselines. It changes the justified attribution label for exact original quoted data. The code diff should remain auditable around that single responsibility.

## Shared freeze and fidelity requirements

Represent original protected quotes as occurrences, not a set of string values. Before-style exclusion uses those exact approved/automatic intervals. After-style exclusion may consume only exact original protected literal content, with a cap equal to its original eligible occurrence multiplicity. New/expanded wrappers and repeated after-text occurrences cannot create new exclusions.

Strengthen quote fidelity to require the protected original content's complete multiplicity to survive inside actual quote occurrences. Current membership-only `q in output` logic does not reject loss of one of two identical protected occurrences. That strengthening should be shared for all protected quotes, not only reviewed ones. Track nested canonical spans so one nested duplicate is not counted twice.

Original full-text number/URL/footnote fidelity and all existing P0/P3/P5 checks remain active. Quote preservation includes exact punctuation and whitespace under the current verbatim rule; a normalization transform must not silently create equivalence. Existing modality limits, including incomplete machine coverage of `지 마세요`, must remain explicit rather than claiming universal negation checking.

Content identity and occurrence caps do not prove semantic ownership in the final prose. The independent final content review must still verify that the quote has not moved under a conflicting source or lost its attributed meaning. A mechanical same-field/source-anchor guard can reject obvious moves but cannot replace that review. Any required source-anchor guard must be general and conservatively preserve the original attribution rather than accepting author-added context.

## Route and metric reconciliation

Classification affects eligible style features and potentially route selection. Recompute all original metrics with the approved original registry context, saving new evidence alongside historical metrics. Never overwrite original 00_metrics/input evidence just to make routes appear consistent.

Compare every original manifest route to the newly computed route across all 667 inputs. If routes change, follow the new route's role requirements and retain earlier evidence. An unchanged route is a measured outcome, not an assumption or override. Ensure gate, preparation and assembly all expose the same registry digest; reject inconsistent classification contexts.

Recompute actual final gates for all affected outputs and distinguish absent finals, execution errors, retained warnings and convergence. Report every changed metric and gate status. Annotation approval must be based on source evidence before observing whether the candidate now converges; unresolved author findings still require normal rewriting/finalization.

## Regression plan and acceptance prerequisites

Required meaningful regressions include:

- Accurate approved native and translated direct quotation occurrences, including distant attribution cases after real independent review; automatic-only behavior unchanged without registry.
- Wrong source, mistranslated qualifier/negation, paraphrase, rhetorical author quote and merely topic-related source: rejected by the review procedure; validator does not pretend to solve semantic truth.
- Unapproved author proposal, final.md embedded approval, input instruction, output-selected registry, self-declared reviewer, bad/missing digest, stale source/input, duplicate JSON key, unknown exemption field, invalid byte offsets, quote expansion, unquoted span, path escape and symlink: blocked deterministically.
- Original protected quote altered/deleted, one of two repeated originals deleted, extra repeated quote added, new wrapper, expanded wrapper and reordered/conflicting attribution: exercise fidelity, capped after eligibility and final semantic review separately.
- P0 abort, numerical/URL/footnote rejection, P5 tracked deontic/hedge-loss rejection, current quote/golden/metrics suites, all 667 route comparisons and actual affected final gate checks.
- Classification context mismatch across preparation, gate and assembly, revoked approval and stale cached gate0: blocked. Strict assembly never accepts exit1 or error3 merely because review says accept.

Independent design/code review must inspect the approval boundary, schema and occurrence-accounting implementation. Independent source/translation review must then approve each actual classification record before root writes a real approved registry. CONTRACT and PROVENANCE should document the root-only process, procedural trust limitation, evidence bindings, exact invocation and fresh-finalizer requirements before operational use.

## Recommendation

Proceed to independent review of this general design if desired. It is consistent with the existing root-plan/independent-artifact procedural trust model and can satisfy both source-quote Do-NOT and strict gate0-only rules without treating the current warning as waived. Cryptographic signatures would be optional hardening, not a necessary special condition absent from reviewed integration.

Do not approve e24/e38 classifications from existing finalizer assertions alone. Keep them held until genuine independent source/translation adjudication, reviewed implementation, documented root registry workflow and fresh actual gate0 evidence exist. No runtime change or approval artifact was created by this investigation; only REPORT-R2.md was written.
