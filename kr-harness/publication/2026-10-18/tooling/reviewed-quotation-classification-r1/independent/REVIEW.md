# Independent implementation review: REVISE

Reviewed immutable candidate.patch SHA256 `4674ed5cc58708efc4071fd56d58df0a73acc22ee7e0a6038ac77b6af0e77e24`; REPORT.md SHA256 `f09897b5ce6f66be025e7715a10d03433fef8eefe1fa848cf6bb4e57b732981b`; exact SPEC-R3 SHA256 `ede7ecf4a7f7f2c35a3065a9ee90263df03d799146a1b89eeb6bed0edbfe2496`.

**Do not adopt this exact candidate yet.** Three independently reproduced issues require correction. The substantive architecture is sound and the supplied passing results largely reproduce, but they do not cover the failure cases below. This is not source/translation approval or permission to release either hold.

All work used separate review copies and temporary TEST-ONLY fixtures. No operational runtime, real book/run/input/final/gate/finalizer/registry, original evidence or repository Git state was changed. The real root-selected source registry was consumed only after copying the chapter into this review directory. I am not its source approver.

## Required corrections

### R1 — High: classified assembly accepts an explicitly rejected finalizer

`candidate/kr-harness/publication/scripts/humanize_publication.py:197` decides acceptance by searching serialized JSON for the substrings `accept` or `corrected`. It does not check the actual decision/status field. A valid exact classification_context plus this synthetic record passes:

`{"status":"reject","reason":"Do not accept this final; rejected by independent finalizer.","classification_context":<exact current context>}`

Independently executed assembly returns normally and creates **both candidate.md and assembly.json**, reporting upstream gates accepted. The quote gate itself genuinely passes in this test; the problem is bypassing the separately required accepting fresh finalizer. No forged registry, altered program or threshold change is needed. This is a data-validation failure, not the out-of-scope attack of a fully privileged actor replacing gate code.

Reproduction: `PYTHONDONTWRITEBYTECODE=1 python3 adversarial.py`, case `explicit_rejected_finalizer_with_accept_word` in adversarial-results.json. It uses TEST-ONLY synthetic source approvals and the actual candidate helper on a disposable chapter.

Require a defined explicit accepting enum in the intended finalizer decision field, and reject absent/wrong-type/rejected/hold/conflicting decisions. Do not infer status from reasons, findings, unrelated nested fields or arbitrary substrings. Preserve the exact classification_context comparison as a separate requirement. Add a regression with an explicit rejected decision whose prose contains both accepting words, and assert that neither successful assembly evidence nor a candidate is emitted. The historical legacy helper has similar substring logic; copying it into this new classified approval boundary does not satisfy the new fresh-finalizer contract.

### R2 — Medium: failure paths leave success-shaped evidence and candidates

Three independently isolated cases violate SPEC §9's failure-only/no-success-evidence-on-error rule:

1. `assemble_classified` writes classified gate context at lines186–187 before checking fresh finalizer context at199. With a stale finalizer, assembly correctly raises, but leaves `context.json` containing `completed:true` and `gate_exit_code:0`.
2. At lines212–217 candidate.md is committed before assembly.json. Injecting OSError when opening assembly.json raises, but leaves candidate.md and already completed gate evidence.
3. `quote_context.write_evidence` lines412–417 creates the completion marker before its final fsync succeeds. Injecting failure on that third fsync raises but leaves a parseable `context.json` with `completed:true`/gate0. This also affects direct gate evidence creation, not just helper assembly.

Reproductions are in adversarial.py/adversarial-results.json and evidence_fsync_failure.py/evidence-fsync-failure.json. These are standard injected filesystem errors and valid-but-stale finalizer data; no production filesystem was touched.

The operations do return errors, and `approved_for_publication:false` avoids a direct publication claim. I do **not** claim these partial-write cases themselves publish a public file. Nevertheless, completed markers/candidates on a failed invocation contradict the exact reviewed contract and are unsafe evidence for later root/finalizer work.

Validate all required finalizers, invariants and gates before exposing successful assembly artifacts. Stage the output and commit success/completion only after every required write/fsync succeeds, or reliably remove success-shaped artifacts on error while retaining at most bounded failure evidence in the exclusively new invocation directory. Cover a later-entry rejection, a stale finalizer, and failures during every output/completion write. No cleanup may delete historical or unrelated files.

### R3 — Low, required schema fix: source URL control characters are accepted

`quote_context.py:351` checks only `ord(c)<33`. Source URLs containing DEL U+007F or C1 U+0085 therefore load successfully, despite SPEC §4's no-control URL condition. Both exact schema-valid, newly hash-bound TEST-ONLY payload/review/registry fixtures were accepted by ChapterContext.

Reproduction: adversarial-results.json cases `source_url_control_0x7f` and `source_url_control_0x85` both show `loaded:true`. Reject the full intended control-character set, including DEL/C1, before URL approval. Keep URL validation separate from genuine source authenticity review. No network request occurs in this candidate; the finding is deterministic schema incompleteness, not remote execution or proof of false source approval.

## Independently verified evidence

- Verified every one of the 15 artifact-sha256 entries and all nine candidate-files hashes and lengths. Full candidate-vs-baseline difference set matches the nine declared paths. Applied the exact patch to a separate baseline copy and obtained all nine expected file hashes. See identity-verification.json and patch-apply.log.
- Read the new module, every executable diff, permanent test source, proposed CONTRACT/PROVENANCE, exact SPEC and prior independent R3 review. No entry-specific branch or metric/threshold waiver was found. Private eligible spans originate in verified/frozen context rather than prose metadata.
- New permanent suite: **25 executed, all pass** (new25.log). Existing six local suites: **33 executed, all pass** (local33.log). Their success is genuine but does not cover R1–R3.
- Full upstream with original nine-script installer and original packaging fixtures: **397 run, 2 packaging failures, 2 existing skips**, reproduced in upstream-original-nine.log. quote_context.py is a real added runtime dependency; the original nine-module allowlist is insufficient.
- Full upstream with the explicitly strengthened tenth-module installer/fixture port and byte-identical candidate runtime: **397 run, 395 pass, 2 existing skips**, no failures/errors (upstream-full-adapted-symlink-correct.log). No tests were silently disabled. The two skips remain the pre-existing unavailable live Claude CLI and missing measured live workspace. An initial review-copy run accidentally dereferenced the upstream reference-directory symlink; its one unrelated path-identity failure is retained in upstream-full-adapted.log. Restoring the original symlink structure produced the authoritative successful run; no assertion was weakened.
- Independent clean minimal deployment: exactly **10 runtime Python modules plus metrics.py/metrics_v2.py and two baseline JSONs**, using `python -I -B` with no checkout/PYTHONPATH dependency. Identity succeeds; deliberate numeric injection and quote mutation fail their specific P3 axes. See standalone.py/standalone-results.json.
- Independently reprocessed the exact frozen corpus through baseline and candidate: **667 inputs, routes644 light/23 standard, no changes; 444 finals available,442 exit0 and2 exit1,223 missing**. Input/final bytes, automatic spans and full gate reports match for every record (independent-frozen-preservation.json). Verified all667 input hashes and routes against current immutable manifests and all444 frozen final hashes against snapshot metadata (snapshot-identity.json). This is a point-in-time frozen comparison, not a claim that ongoing authors' current final count cannot change.
- v1 metrics.py and both baseline JSONs are byte-identical. Independently compared preserved register/heading/number/footnote functions, P1 judgment/P4/P5 helpers and assembly numeric/URL/layout invariants by AST. P0 and P5 still receive full text; manual P3 replacement replaces only quote_altered findings with the shared occurrence result. No-registry P3 multiplicity strengthening and fail-closed P1 execution errors are honestly documented intentional changes.
- Copied the actual chapter/registry after explicit authorization, verified registry SHA `fcaea69ba82f916d15ea8f96d26b58c53af2407dcb82f2d0e5100de78102c89c`, and invoked the actual isolated candidate CLI with explicit flags on copied e24/e38. Both classified gates return0 (actual-registry-results.json). This verifies compatibility of those exact reviewed data bytes with the candidate, **not** their source truth, independent finalizer acceptance, code adoption or publication. Real old gate/finalizer evidence remains untouched and no hold is released here.

## Boundaries that appear correctly implemented

Strict key/shape/hash binding, duplicate-key/type/range checks, manifest-selected original paths, exact raw body/summary binding, same-field anchors, context before/after/genre binding, root-selected explicit flags and no auto-discovery are present. Descriptor-relative nonsymlink bounded regular-file reads, immutable byte caching, same-path source reuse and cross-role/alias checks implement the intended snapshot boundary. Existing tests meaningfully exercise stale data, summary-only versus body edits, path/symlink/FIFO/inode failures, observed mutation during read and retained bytes after mutation.

Shared exact complete occurrences/caps detect duplicate loss independently of P0 and preserve automatic nesting. Parser scope restrictions stricter than v1 minimum are declared conservative refusals. Derived/saved route equality is checked rather than overridden. Source/translation truth and real role independence remain procedural human-review duties; the candidate does not pretend hashes establish them. Classified --publish is disabled.

These positive findings do not cancel the explicit rejected-finalizer acceptance in R1 or the failure-evidence/schema violations in R2–R3.

## Adoption prerequisites

Correct R1–R3 in a new separately hashed candidate, add focused regressions, and obtain follow-up independent review. Root has stated the new25 suite will be added as an independent kr-check.yml step during adoption; that connection is required and is not present in this nine-file candidate. Do not silently skip any old or new tests. Reconcile candidate-only CONTRACT/PROVENANCE status with an exact reviewed adoption record rather than treating this report or source approval as deployment approval.

**Final disposition: REVISE for the exact patch SHA above. No operating adoption or hold/publication approval.**
