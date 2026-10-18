# Quotation classification implementation r2 — independent re-review candidate

**Not adopted.** This revision addresses the three reproduced findings in `quote-attribution-code-review/REVIEW.md`. No operational source/run/input/final/gate/00_metrics/manifest/public/Git file, real registry or payload was modified or assessed. No real attribution or translation approval was created or consumed. All approval fixtures in tests are explicitly synthetic TEST-ONLY. Classified publication remains disabled.

R1's candidate, patch, reports, tests and evidence remain byte-identical. `r1-identity-preserved.json` verifies its 14 indexed artifacts, nine candidate files and independently pinned patch/report/index SHA values. This directory is a separate r2 copy; no R1 correction was made in place.

## Corrections

### R1 finding: explicit required accepting finalizer

Classified assembly now checks only the intended top-level `status` and/or `decision` fields. At least one must exist and each present value must be exactly the string `accept` or `corrected`. If both are present they must be identical. Missing, reject, hold, hold_and_report, wrong-type and conflicting values fail even when reasons contain both `accept` and `corrected`. Matching exact classification_context remains a separate requirement. Reasons and unrelated/nested strings do not confer acceptance.

Permanent tests cover 11 invalid records, three valid enum combinations and a stale matching-status/wrong-context record. The original independent `adversarial.py`, copied unchanged and run against r2, now reports the explicit reject as rejected with no candidate/assembly output.

### R2 finding: failure-only invocation output

`InvocationOutput` reserves only a new root-selected invocation directory and stages all bytes in a newly created private sibling. Classified assembly validates every entry's invariants, actual gates, routes and required finalizers before calling commit. It retains evidence in memory until then. Commit writes and fsyncs every staged file and directory, atomically renames the staged tree over the still-empty owned reserve, then fsyncs the parent. Completed output is not gradually exposed in the requested directory.

Any caught validation/write/fsync failure removes only recorded files/directories whose inode identities still match this invocation, including rollback after the final parent fsync fails. It preserves at most bounded `failure.json` under the new invocation; no completed context, candidate, assembly or partial metrics from that failed invocation remains in the tested cases. Existing output directories are rejected without adoption or cleanup. No recursive deletion of historical or unknown data is performed. Same-path staged directory-open failures are cleaned as well. Direct gate warnings retain failure-only diagnostics with their actual nonzero gate exit.

Persistent filesystem failures can prevent even durable diagnostics or cleanup; they do not authorize success. New hidden staging directories are never an approved evidence input and are not auto-discovered. The guarantee tested here covers injected ordinary open/partial-write/fsync failures with available cleanup operations, not process death, power-loss recovery or a malicious fully privileged actor replacing filesystem/program state.

Focused permanent regressions cover stale finalizer, later-entry finalizer/gate/invariant failures, existing/historical preservation, every direct evidence file open, every assembly file open and partial write, all observed direct file/directory/final-parent fsync positions (including the third completion-file fsync), all assembly file/directory/final-parent fsync positions, and staging/child-directory open failures. Failed output assertions inspect the whole new invocation tree and permit only bounded failed diagnostics, not merely absence of assembly.json.

The unchanged independent `evidence_fsync_failure.py` now reports no completion marker after the injected third fsync failure. The unchanged independent assembly-output failure reproduction now reports no candidate or assembly file. The stale-finalizer reproduction reports no context.

### R3 finding: complete intended source URL control set

URL validation now rejects ASCII C0 controls/space, DEL and C1 controls: U+0000–U+0020 and U+007F–U+009F. NUL is already rejected by the strict string parser; remaining members fail URL validation. The permanent suite tests all 66 characters. The independent DEL U+007F and C1 U+0085 reproductions both change from loaded=true to loaded=false. This is syntactic validation, not source-authenticity approval.

### CI

The candidate includes `.github/workflows/kr-check.yml` with a separate mandatory step running:

`python3 kr-harness/publication/scripts/tests/test_reviewed_quote_classification.py`

No old step/assertion is removed, skipped or weakened. That exact portable entry point executes all 35 tests locally. The entire remote GitHub workflow was not executed here.

## Executed results

| Evidence | Result |
|---|---|
| `permanent-regressions.log` | **35 passed**: unchanged original 25 plus 10 new grouped regressions with numerous fault/enum/control subcases |
| `local-regressions.log` | **33 passed**, all six existing local suites against r2 runtime/helper |
| `independent-reproductions/adversarial-results.json` | DEL/C1 rejected; explicit rejected finalizer blocked; stale context absent; failed assembly leaves no candidate/assembly |
| `independent-reproductions/evidence-fsync-failure.json` | third fsync raises; completion marker absent |
| `upstream-adapted-result.json` / `.log` | **397 total: 395 pass, 2 existing skips**, zero errors/failures |
| `frozen-comparison.json` | all **667** original routes **644 light /23 standard**, no change; all bytes/automatic spans/full gate reports unchanged |
| Frozen available outputs | **444 finals:442 exit0, e24/e38 exit1;223 missing**, identical to original baseline |
| `preservation-audit.json` | primitive metrics/baselines unchanged; register/number/footnote/modality helpers and assembly invariants preserved; checks.py/verify_gates.py/metrics.py/metrics_v2.py/baselines byte-identical to R1 |
| `patch-identity.json` / `patch-apply.log` | full patch applied to a separate baseline copy and reproduced all 10 indexed candidate files exactly |
| `r1-identity-preserved.json` | original R1 artifacts and candidate files remain unchanged |

The original nine-runtime upstream installer still lacks the added tenth module; its two packaging failures are preserved in immutable R1 `upstream-full.log`. R2 does not rerun that already understood unsupported deployment mode. Fresh r2 full-upstream execution uses the explicitly documented tenth-dependency installer/runtime-boundary/Codex fixture port (`upstream-runtime-port.patch`), without assertion weakening. The two skips remain unavailable live Claude CLI and missing measured live workspace data. The original 25 include the isolated `python -I` full ten-module deployment regression; it remains passing in this 35-test suite. No new runtime module beyond the original added tenth module is introduced.

The no-registry corpus comparison uses R1's immutable point-in-time frozen dataset, copied into r2, rather than ongoing authors' changing current final counts. All 667 original hashes and 444 final hashes compare identically. No actual reviewed classification context was fabricated or applied to those book entries; no source verdict or hold release is claimed. Actual registry/source data was not read by this r2 task.

## Change boundaries and review artifacts

`candidate.patch` is the complete proposed patch against the original baseline, now **10 files including CI**. `r1-to-r2.patch` is an incremental review aid against R1; its workflow base is the unchanged original operational workflow, which was not part of R1's limited candidate-copy tree. `candidate-files.json` provides file lengths and SHA256; `artifact-sha256.json` pins the patch, report and executed evidence. `candidate/` contains the full standalone skill, helper, permanent tests and proposed CONTRACT/PROVENANCE/SPEC/CI files.

No metric formula, baseline, sample guard, threshold, original input, route policy or full-text preservation input changed in r2. R1's intentional no-registry complete-occurrence P3 hardening and fail-closed metric-error behavior remain declared. Derived-route mismatch still errors rather than overriding the immutable manifest. Exact original/final-body/source/review/hash binding and the procedural root-selected trust boundary are unchanged. The original conservative manual-parser/assembly-path/Linux scope limitations and disabled classified --publish remain.

CONTRACT and PROVENANCE now explicitly document enum validation, whole-invocation staging/rollback, URL controls and CI. Their proposed/candidate status is retained. Independent re-review and root adoption remain required; neither this report, a successful synthetic fixture nor a source approval substitutes for code adoption or fresh production finalizer/regating.
