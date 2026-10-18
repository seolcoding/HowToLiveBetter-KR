# Independent implementation r2 review: PASS

Approved exact **candidate.patch SHA256 `facfa1f6a468c71b11ede2431af3ad47c8fd13e36a0c0aa45a52ee3ee5eb6854`** for root-controlled tooling adoption. REPORT.md SHA256 is `00ff1f838c6a530955b393442f22e18cec4329692b5dff395eaa82ccf86c9f9c`. Artifact index SHA256 is `772e1e16b93a9d68b9616f740302fa31bc75e6988cd2e12545b90f59cdb2005d`; candidate-files.json SHA256 is `e4c14795998bf4e82abcc16955b685e3e0a3d4c8aff5d4d213a051cca83ecd87`. Root clarified the initial index-label mix-up; the actual pins all match.

**R1–R3 are resolved. No new blocking issue found.** This approval is for this exact code/CI candidate and its documented limits. It does not approve any source/translation, whole-entry factual content, fresh finalizer, hold release, assembled book or publication. Root must perform and record atomic operating adoption separately, reconcile candidate-only documentation status, and obtain fresh actual finalizer/regating evidence before using classification for adoption. Classified --publish remains disabled.

Only new external review copies and TEST-ONLY temporary fixtures were written. R1 candidate, original independent REVISE report/reproducers, operational runtime, actual run inputs/finals/gates/finalizers/registry, book/public files and repository Git were not modified.

## Identity and code review

Verified every artifact index digest and all ten candidate file hashes/lengths; independently applied the full patch to a separate baseline and reproduced all ten expected file hashes. Full tree differences match the declared ten-file index. Independently rechecked immutable R1 artifact and candidate hashes. Old adversarial.py and evidence_fsync_failure.py were copied byte-for-byte from the original independent review and executed without editing them.

Read the full r1-to-r2 executable/document/test changes. Explicit finalizer enum validation is scoped to classified assembly; matching fresh classification_context remains independently required. New InvocationOutput reserves only a newly created output name, stages owned bytes in a private sibling, validates all assembly entries before commit, fsyncs files/directories, atomically renames the staged tree and fsyncs its parent. Abort tracks inode identities, removes only owned files/directories and writes bounded failure-only diagnostics. Source URL rejection now covers C0/space, DEL and C1. CONTRACT/PROVENANCE document these changes, persistent-error limits, continued candidate status and CI. Exact SPEC-R3 remains unchanged.

The new CI step runs the portable permanent test directly; no old step/assertion is removed. Executed that exact extracted CI command from the candidate repository directory: all35 tests run and pass (ci-step35.log). This is local execution of the CI step, not a claim that the remote full GitHub workflow ran.

## Original blocking findings retested

- **R1:** the unchanged rejected-finalizer reproduction now raises explicit accepting status/decision required; no candidate.md or assembly.json is created. Top-level status/decision must be accepting strings and agree if both exist; accepting words in reasons/nested data do not grant acceptance. Permanent regressions cover rejected/hold/missing/wrong-type/conflicting records plus valid combinations and stale context.
- **R2:** unchanged stale-finalizer, assembly-output error and third-fsync reproductions now leave no successful context/candidate/assembly. Whole-invocation evidence is withheld until checks and writes succeed. New permanent fault cases inspect the entire failed invocation and require only bounded failure.json.
- **R3:** unchanged DEL/C1 fixtures now reject. Permanent tests exercise all66 C0/space/DEL/C1 characters. Hash binding or synthetic reviewer status cannot bypass URL validation.

See adversarial-results.json and evidence-fsync-failure.json, produced here by the unchanged original scripts.

## Additional independent boundary tests

Independently authored independent_transactions.py, beyond merely re-running the author's new tests:

- Direct rename failure leaves only failure.json and no pending success files.
- Every observed direct fsync position (five, including directory and final parent commit fsync) fails with failure-only output; no context/partial metrics remain.
- Assembly rename failure and later-entry finalizer/gate/invariant failures leave only failure.json for the whole invocation, including the earlier valid classified entry.
- Existing historical output and a symlink to it are rejected without adoption/cleanup; unrelated sentinel bytes remain unchanged.
- Injected foreign data inside the private stage is preserved rather than recursively deleted. The invocation's own metric/context files are removed. Only the foreign sentinel may remain in a hidden pending directory, which is not auto-discovered or acceptable evidence. This deliberately distinguishes safe preservation of unknown data from ordinary fault cases, where no pending directory remains.

See independent-transactions-results.json. The author's35-test suite additionally injects every assembly file open/partial write, observed assembly file/directory/final-parent fsync position, staging/child-directory open failure and stale/later-entry failures; these assertions executed successfully in the independent copy.

The error-handling guarantee is ordinary caught exceptions with cleanup operations available. Persistent I/O failure, process death/power loss, or a fully privileged actor replacing program/filesystem state are not claimed solved. Hidden pending trees cannot authorize later work. This limitation is explicit and consistent with the reviewed procedural trust model.

## Independent regression results

| Check | Result |
|---|---|
| Permanent suite, independent review copy | 35 run,35 pass (permanent35.log) |
| Exact new CI step | 35 run,35 pass (ci-step35.log) |
| Existing six local suites against r2 | 33 run,33 pass (local33.log) |
| Full upstream with documented ten-module installer/strengthened fixture port | 397 run:395 pass,2 existing skips,0 failures/errors (upstream397.log) |
| Clean minimal ten-module runtime plus four metric/baseline references, python -I -B | identity0, quote mutation1/quote_altered, numeric injection1/number_injected (standalone-results.json) |
| Frozen original corpus | 667 routes644 light/23 standard, zero differences;444 available finals442 exit0/2 exit1,223 missing |
| Frozen original/final hashes, automatic spans and full gate reports | identical to previously independently checked original baseline (independent-preservation.json) |

Original upstream nine-module packaging remains insufficient. Its two genuine packaging failures were independently reproduced and preserved in R1 review; r2 does not pretend that unsupported installer suddenly passes. The explicit tenth-module port is unchanged, not a silent skip. The two pre-existing skipped tests remain unavailable live Claude CLI and missing measured live workspace data. All candidate runtime modules used by the full harness are the r2 versions.

checks.py, verify_gates.py, v1/v2 metrics and both baselines are byte-identical to R1. Thus R1's independently inspected unchanged P0/P5/number/footnote/URL full-text axes, threshold/sample guards, occurrence/field/cap logic, exact context binding, explicit flags/no discovery, descriptor snapshot and route-equality policy remain in force. R2 changes no metric formula or original data. The intentional no-registry P3 multiplicity hardening and fail-closed P1 execution-error change remain honestly declared.

The667 comparison above uses the immutable444-final point-in-time dataset, not ongoing authors' changing output count. Root also reported a separate later485-final read-only comparison; that is supplementary root evidence, not substituted for or claimed as my independent485 execution.

## Actual approved data compatibility, copy only

After explicit authorization, copied the actual chapter and root-selected registry, verified registry SHA `fcaea69ba82f916d15ea8f96d26b58c53af2407dcb82f2d0e5100de78102c89c`, and invoked isolated r2 CLI on copied e24/e38 with explicit flags. Both return0 (actual-registry-results.json), with exact reviewed input/body/source/review context and unchanged manifest routes. No real finalizer/registry/public file was changed. This confirms code/data compatibility only; I did not perform or approve source/translation adjudication, and it is not a whole-entry or publication verdict.

**Final disposition: PASS for the exact r2 patch SHA above. Root-controlled atomic tooling adoption may proceed; fresh finalizers, current classified assembly/regating, content checks and publication approval remain separate.**
