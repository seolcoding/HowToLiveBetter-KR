# SPEC R3 — reviewed original quotation classification, late-classification v1

Status: proposed executable specification for independent review. No implementation, registry approval, source/translation approval or publication approval is provided. Existing e24/e38 holds remain. This file is the only artifact created for this R3 task.

## 1. Scope and invariants

This is a root-selected, independently reviewed classification of complete quotations already present in immutable original input. It is not a threshold waiver. No registry field may name a metric, entry number, skip condition, replacement text, executable command or regular expression. Every normal gate executes and assembly still requires actual exit0.

V1 supports late classification only: existing manifest, original input, 00_metrics and route remain immutable. New derived metrics/route evidence is stored separately. If the derived route differs from the manifest route, the operation fails closed; v1 neither overrides routes nor provides route upgrades/downgrades. A future route-reconciliation feature would require its own specification.

Manual classification is restricted to original complete, balanced, standalone, non-nested quotation occurrences inside the four physical editable field lines 비용/쉽게/이득/비고. Both original and exact final body receive independent source-attribution/translation review. Automatic quotation classification keeps its existing eligibility grammar and nested-quotation support. Shared fidelity is deliberately strengthened from string membership to complete-occurrence multiplicity, including when no registry is selected. This P3 hardening is a separately declared behavior change; no claim of byte-for-byte no-registry gate-result equivalence is permitted.

Original full text continues feeding P0, number, URL, footnote, golden and P5 checks. Existing threshold/baseline/sample-guard values do not change. The registry changes only protected-quote eligibility and makes quote fidelity stricter. Existing semantic preservation obligations remain; P5 does not cover every form of negation.

## 2. Procedural authority and non-circular hash graph

The existing integration trust model applies: root alone writes an approved registry after a distinct reviewer approves exact payload bytes and directly checks source provenance and translation. Author/finalizer proposals are unapproved and cannot select production configuration. CLI flags identify selected configuration, not cryptographic root identity. Shared workspace/tool authority does not prevent a malicious code-writing actor from replacing the whole pipeline; the same limitation already exists for integration plans. In-scope malicious text, metadata and unapproved proposals must not influence configuration selection.

Hash graph, with every edge covering exact complete file bytes:

`primary artifact + original bytes + exact final body + original occurrences/anchors -> payload file -> independent review file -> root registry file -> explicit expected registry SHA in root invocation`.

A review contains the payload SHA and its decision. Registry contains payload path/SHA and review path/SHA. Payload contains neither review identity/hash nor registry identity/hash; review contains no registry hash; registry contains no own hash. There is no canonicalization or self-reference convention: hashes are lowercase SHA256 over exact bytes. Any payload-byte change requires a new independent review and new root registry digest.

The independent reviewer may emit the strict JSON review file below and include its substantive reasoning in it. No registry is approved on the basis of finalizer `accept`, historical audit, this specification, or the observation that exclusions would make P1 converge.

## 3. Exact serialization and resource rules

All JSON, original/final files, review files and source artifacts are strict UTF-8 without BOM. Do not normalize Unicode, newlines, whitespace or escapes before hashing or offset validation. CRLF bytes are allowed and retained; JSON string values use decoded Unicode, and content/anchor/source excerpt hashes cover original UTF-8 slices. Reject NUL in JSON string values and text artifacts. Filenames containing NUL are invalid by construction.

Strict JSON loader: reject duplicate keys at every object depth, NaN/Infinity/-Infinity, unknown keys, missing keys, floats anywhere, and non-object top levels. Integer fields require `type(value) is int`, rejecting booleans. Enum values require exact strings. No scalar coercion. Maximum JSON nesting depth 12, maximum string length 16,384 Unicode code points, except review reasons which remain at most 8,192. Enforce raw-file size before decoding/parsing and depth/string bounds immediately after strict parsing. A standard JSON parser RecursionError/MemoryError is an execution error, never fallback.

Limits: registry/payload/review each <=256 KiB; original and final file <=2 MiB each; each source artifact <=8 MiB; at most 128 registry records, 32 quotations per payload, 8 distinct artifacts per payload, 128 distinct artifacts and 64 MiB total distinct retained bytes per registry invocation. Original/manual quote contents must meet existing MIN_QUOTE_LEN=8 after the existing strip-length check; manual content <=64 KiB. Anchor nonempty <=8 KiB; source excerpt nonempty <=64 KiB. These are parser resource/scope limits, not metric thresholds or eligibility scores; oversize inputs error rather than gain exemption.

SHA strings: exactly 64 lowercase ASCII hexadecimal characters. Length fields must equal observed raw byte lengths. Byte ranges are half-open `[start,end)` represented by the exact range object defined below; require 0<=start<end<=len(bytes), valid UTF-8 start/end boundaries, and matching slice hashes. No negative indices, numeric strings, booleans, overflow values or zero-length ranges.

## 4. Exact schemas

Every object has exactly the listed keys, in any JSON key order. Arrays are ordered; duplicate records/paths/occurrence identities are rejected. No optional keys in v1. Text evidence is in review reasons, never an executable instruction.

### Shared objects

`FileRef = {"path": string, "sha256": SHA}`.

`ByteRange = {"start": int, "end": int, "sha256": SHA}`.

`OriginalIdentity = {"path": string, "sha256": SHA, "byte_length": int}`.

Paths are chapter-evidence-root-relative POSIX paths, with 1..1,024 characters. Reject absolute paths, backslashes, empty segments, `.`/`..` segments, URL schemes, drive syntax and NUL. Path handling is defined in section 5.

### Registry

`{"schema_version": 1, "status": "approved", "records": [RegistryRecord, ...]}`.

`RegistryRecord = {"payload": FileRef, "review": FileRef}`.

At least one record. Each payload original path must identify exactly one run's manifest-selected 01_input.txt inside this chapter, and match that manifest input SHA. Reject duplicate original paths, duplicate original-path/SHA identities, duplicate payload paths and review reuse across records. No cross-chapter registry in v1. Root-selected registry applies to all its listed records; unlisted manifest runs retain automatic-only classification but carry the same chapter registry digest in assembly context. Unknown or non-manifest original paths error; no string matching by quote contents or entry ID selects a record.

### Payload

`{"schema_version": 1, "original": OriginalIdentity, "final_body": {"sha256": SHA, "byte_length": int}, "quotations": [Quotation, ...]}`.

At least one quotation. `final_body` binds the run's fixed manifest-derived final.md body; payload cannot supply an alternative after path. Original path is dataset identity validated against the manifest, never a conditional exception in code.

`Quotation = {"occurrence": Occurrence, "source_anchor": ByteRange, "source": Source}`.

`Occurrence = {"field": Field, "ordinal": int, "opening": ByteRange, "content": ByteRange, "closing": ByteRange}`.

`Field` is exactly one of 비용/쉽게/이득/비고. Ordinal is zero-based document order of all complete quote occurrences in that field, including short/non-protected occurrences, sorted by opening byte offset then descending closing-end offset. V1 manual occurrences cannot be nested or overlapping, so ordinal is unambiguous. Opening/closing ranges must be adjacent to content and have the exact UTF-8 bytes of a supported paired delimiter.

`Source = {"url": string, "artifact": FileRef, "artifact_byte_length": int, "excerpt": ByteRange, "language": string, "rendering": Rendering}`.

URL is an absolute HTTPS URL, <=2,048 characters, no username/password, fragment or control characters; it is evidence identity, not a fetch instruction. `language` matches `[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*`, <=35 characters. Rendering enum is `native_verbatim` or `reviewed_translation`. For native_verbatim, decoded excerpt must equal exact quote content; translated cases require substantive independent alignment review and no machine equivalence claim.

### Independent review

`{"schema_version": 1, "payload_sha256": SHA, "decision": "approved", "reviewer_role": "independent_source_reviewer", "reviewer_id": string, "proposer_id": string, "reviewed_original_sha256": SHA, "reviewed_final_body_sha256": SHA, "assessments": [Assessment, ...]}`.

IDs are nonempty 1..128 printable Unicode code points with no control characters; reviewer_id must differ from proposer_id. This detects obvious self-declaration mistakes but does not establish real independence; root checks role provenance procedurally. The reviewed hashes must equal payload fields. No `accept_with_warning` state exists in a registry-consumable review; rejected/incomplete reviews may exist as proposals but cannot enter approved registry.

`Assessment = {"occurrence_ordinal": int, "field": Field, "source_authenticity": "verified", "direct_quotation": "verified", "translation_or_verbatim_fidelity": "verified", "original_attribution": "verified", "final_attribution": "verified", "reason": string}`.

Exactly one assessment for every payload quotation, no extra/duplicate assessment; field+ordinal key must match. Reason length 1..8,192 and must describe source retrieval/provenance, exact excerpt alignment, qualifier/negation/condition fidelity and ownership in both original and final body. Machine validation checks completeness/hash binding, not truth or quality of the explanation. Root must read it. A string that merely says a metric passes is not a substantively approvable review even if schema-valid.

## 5. File safety, manifest binding and byte ownership

The allowed evidence root is the selected chapter directory computed from the actual publication manifest location, not a path supplied by original/final text or registry. Root invocation may choose a chapter manifest, but assembly uses its existing fixed chapter path. All registry, payload, review, original, final and source-artifact files must be inside that root and regular nonsymlink files. Every path component from the evidence root downward must be nonsymlink; reject symlinked directories as well as symlinked leaves. Do not accept FIFOs, devices, sockets or directory paths. No network fetch occurs during validation.

Implementation on the supported Linux cloud runtime uses directory-relative descriptor traversal (`dir_fd`, O_DIRECTORY/O_NOFOLLOW for directories, O_NOFOLLOW and fstat regular-file checks for leaves). Hold the trusted evidence-root descriptor through the operation. Read bounded bytes once from each opened descriptor, inspect fstat before/after and reject observed size/mtime/inode changes during the read. Cache each unique relative path as immutable bytes; all digest validation, parsing, offset conversion, metrics, fidelity and assembly for the invocation use those retained bytes, never a hash-then-reread path. Refuse path aliases/hardlink aliases across different evidence roles by duplicate (device,inode) detection; no evidence file can simultaneously masquerade as review and payload/artifact.

Manifest and source snapshot follow the existing assembly checks, augmented by the same regular-file/retained-bytes policy when registry mode is selected. The manifest's expected input digest is authoritative; registry OriginalIdentity cannot replace it. Check exact original bytes against manifest first, then against payload. Payload final_body must match the exact current final body extracted from retained final.md bytes. The helper must expose an in-memory gate core so assembly can gate the already validated original/final bytes; a subprocess reopening paths would violate the byte-ownership rule.

Input files can change after this invocation; that does not mutate retained bytes. Any later finalizer/assembly invocation reloads and revalidates current bytes and registry SHA. No previous gate report authorizes later publication. Record actual retained input/final/registry/source hashes in new evidence. Do not write source files from the validator. Generated evidence uses create-exclusive filenames in a root-selected new derived-evidence directory, never existing metrics or gates; partial write failures block the operation.

## 6. Exact final body and summary contract

Registry mode requires exactly one trailing HUMANIZE-SUMMARY block in final.md, beginning at a physical line start with exact ASCII `<!-- HUMANIZE-SUMMARY` followed by LF or CRLF. Exactly one such marker and exactly one terminating `-->` for that block must exist; after the terminator only ASCII whitespace is allowed. Reject embedded body markers, malformed/unclosed summary or additional HTML comment terminators inside the block. The body is **all raw bytes before the opening marker**, including its existing trailing line break(s). No strip/rstrip/newline/Unicode normalization is performed for payload body SHA or length. Body must be nonempty and end in LF, so summary is on a distinct line.

Independent review reads that exact body, not summary assertions. Summary contents may subsequently change without new review, provided the body prefix bytes and length remain identical and the summary remains structurally valid. Changing body punctuation, whitespace, labels, line endings or quote placement requires a new payload/review/root registry. The existing metric/assembly formatting treatment may remain as before after this exact raw-body check; do not silently redefine legacy P0 inputs. Store both raw reviewed body SHA and final whole-file SHA in fresh evidence.

## 7. Fields, shared complete occurrences and manual anchors

Manual original and final bodies must each contain exactly the existing four editable physical lines in order, recognized by exact prefixes `- 비용: `, `- 쉽게: `, `- 이득: `, `- 비고: ` (existing empty-value policy must not be broadened). No continuation lines, duplicate labels, extra prose lines or field migration. An optional final line terminator is not a fifth field. The manual occurrence, content and anchor must lie wholly within one field value, excluding label and line terminator. Existing structural assembly checks remain independent.

Shared quote parser supports paired `"..."`, `“...”`, `「...」`, `『...』`. It returns complete opening/content/closing ranges, field identity where applicable, byte and code-point offsets, ordinal, parent relation and ambiguity flags. Strict UTF-8 conversion is centralized in this parser: map code-point boundaries to accumulated UTF-8 byte offsets once; reverse lookups must land on exact boundaries.

Straight quotes pair sequentially only if their count in the parsing scope is even; same-delimiter nesting is not supported. Curly/CJK different delimiter styles may nest properly. Manual scope rejects any unmatched delimiter, crossing pairing, nesting involving the selected occurrence, or backslash-escaped quote delimiter in its field; escapes are not interpreted as authorizing a quote. Complete parser never searches an enlarged quote for a smaller protected content substring. Automatic grammar classification still uses existing candidate/pairing behavior and preserves correctly nested cases; ambiguous/crossing structures cannot be manually repaired by registry. Automatic-only parser compatibility must be established with existing fixtures before adoption; supported nested automatic spans canonicalize to their containing complete outer occurrence, not two exclusions.

Exact automatic/manual duplicate occurrence: allow a single canonical occurrence with both provenance labels; never double count. Duplicate manual declarations reject. Manual/automatic partial overlap or manual selection nested in/containing another occurrence rejects in v1. The automatic existing nested merge remains supported for automatic-only occurrences.

Source anchor must be a nonempty exact original same-field slice ending at or before the quote opening. Its decoded text must occur exactly once in that original field value. Payload anchor hash/range defines that occurrence; semantic adequacy is independently reviewed, not inferred from `机构名` pattern rules. In exact final body the same literal anchor must occur exactly once in the same field and precede the matching protected quotation. Non-contiguous, fuzzy or normalized anchor matching is forbidden. An anchor can be shared by several approved same-field quotes only if independently reviewed; they remain separately identified original occurrences. A late source switch or contradictory sentence cannot be ruled out by anchors alone, hence mandatory exact-final semantic review.

## 8. Frozen representation, after caps and P3 strengthening

`FrozenQuote` is immutable data: canonical original occurrence range, original field (or document scope for automatic generic CLI input), exact content bytes, exact complete quote shape, provenance and any manual source anchor. `FrozenQuoteContext` contains retained original/final bytes, original/body/registry/payload/review digests, canonical protected original occurrences and reviewed field/anchor constraints. No arbitrary code, mutable Counter or file path that can be reread is stored as authority.

For before-style scoring, exclude only canonical protected content ranges. For after-style scoring, parse complete quote occurrences and match exact protected content in the same field/document scope; consume at most the original protected count for that key. Wrapper delimiter style may differ only among the four supported styles; content bytes, original scope, source-anchor constraints and final reviewed hash remain exact. Added/expanded wrappers containing the old content as a substring do not match. Excess repeated complete occurrences remain eligible author text. For selection determinism, candidates consume caps in ascending after opening offset. Nested automatic candidates canonicalize before counting and cannot consume a protected occurrence twice.

For P3 quote fidelity, require after complete-occurrence count for every protected (scope, content) key to be **at least** its frozen original count. Deleting one of two identical protected originals must fail quote_altered even if another survives. Extra repetition is not itself quote loss; it receives no extra style exemption and all normal gates run. Do not claim all output duplication necessarily produces nonzero if unrelated axes do not cross thresholds. Manual exact-final review/hash separately rejects an unreviewed duplicate final even when content cap alone would be sufficient for automatic scope.

P3 multiplicity strengthening also applies with no registry. This is an intentional fix of the existing membership-only weakness, must have a separate changelog/provenance paragraph and regression, and may reject formerly passing duplicate-loss outputs. Automatic eligibility grammar is not broadened by that hardening. Numerical/footnote/URL golden checks and P0/P5 remain full-text and independent; fidelity cannot be validated merely because P0 happened to fail first.

## 9. Smallest API and CLI surface

New stdlib module responsibilities:

- `read_verified_chapter_inputs(...) -> VerifiedBytesBundle`: regular-file bounded snapshot reads, strict manifest binding and explicit root-selected registry SHA validation.
- `load_quote_context(bundle, original_run_identity) -> FrozenQuoteContext`: strict schema, review/payload/artifact/occurrence/anchor/body validation; no disk discovery or network operations.
- `parse_quote_occurrences(text_bytes, field_mode) -> tuple[QuoteOccurrence,...]`: shared parser and centralized byte/code-point mapping.
- `compute_classified_metrics(original_text, genre, frozen_context)`: consumes verified intervals only; no file loading/approval decisions in metrics.
- `evaluate_gate(before_bytes, after_bytes, genre, frozen_context=None) -> GateReport`: in-memory core used by CLI and assembly; ordinary check thresholds and exit-code semantics retained.

Existing production commands gain only paired optional `--quote-registry PATH --quote-registry-sha256 SHA`. In direct verify_gates CLI registry mode also requires `--publication-manifest PATH` so authority comes from an existing manifest; before/after paths must resolve to its exact selected run input/final. No caller-supplied expected original hash can replace manifest authority. Assembly already knows its chapter manifest. A registry argument without its SHA, SHA without path, or registry mode without manifest/context is execution error3. Generic no-registry gate CLI remains usable as before, with the declared P3 hardening.

Late-classification evidence is computed during registry-enabled gate invocation, not through the mutating upstream prepare shim. It includes derived original metrics and compute_route_hint from the exact original text with frozen eligibility, original manifest route, checked equality, original saved 00_metrics SHA, registry/payload/review/body hashes, current runtime code hashes and actual full gate report. Existing `_text` route inputs and genre are unchanged. Existing 00_metrics route must still equal manifest route; derived route must also equal it. Any mismatch error3, no override. The finalizer reads this new evidence alongside historical inputs and follows the unchanged original route. Fresh finalizer invocation may update summary only; body edits invalidate reviewed final hash and require renewed review.

Expose `--classification-evidence-dir PATH` in registry mode for direct gate calls; assembly provides its own new root-selected invocation directory. It must be a new regular directory under allowed chapter evidence root, nonsymlink, created exclusively. Do not overwrite publication-gates, manifest, 00_metrics or old finalizer evidence. Output filenames are fixed inside that new directory (derived-metrics.json, classified-gates.json, context.json). On error write only a bounded failure report to that new invocation directory; no success evidence or assembly candidate. Gate exit/error status remains authoritative.

Root-selected expected registry SHA is the required context token for a classified production invocation. Fresh finalizer evidence records it and the reviewed raw body SHA. Assembly requires matching fresh finalizer context for registry-listed runs regardless of light route; it revalidates all bytes and regates in memory. No registry-listed run can substitute cached no-registry gate0 or an older body. Unlisted runs retain their existing route/finalizer requirements. Root must use the same paired flags for the classified assembly call; omitting them cannot be inferred from output metadata. The procedural root workflow requires them once root elects classified adoption, and assembly checks any explicitly supplied finalizer context against the selected configuration. A forged root omission by a fully privileged actor remains outside the procedural trust guarantee, as with existing integration plan bypasses.

## 10. CONTRACT and provenance changes required before use

Document root-only registry promotion/selection, independent payload-original/final/source/translation review, exact schemas and evidence-root restrictions, explicit CLI pair and error behavior, immutable historical metrics, derived-route equality requirement, fresh finalizer plus actual assembly regating, and exit0-only acceptance. Document raw body summary split, same-field anchors, complete-occurrence scope, no PDF extraction in v1, and procedural role-trust limitations.

Source artifacts are raw retained UTF-8 text or HTML whose quoted source excerpt exists as a **literal raw byte substring** at the declared offsets. V1 does not parse HTML into rendered text, strip tags, decode entities, normalize whitespace or extract PDF text. If source wording crosses tags/entities or exists only in a PDF, that artifact cannot support the selected excerpt in v1. A legitimate separate plain-text official artifact can be reviewed if available; an unsupported extraction cannot be relabelled raw primary text. URL authenticity, retrieval provenance, excerpt context and Korean translation accuracy are facts the independent reviewer directly verifies. Digests establish identity, not those semantic facts.

PROVENANCE must separately identify classification-loader extension and no-registry P3 multiplicity hardening, keeping thresholds/sample guards unchanged. No entry-specific acceptance path is added. All existing holds remain until implementation, independent code/design review, actual source/translation review, root approval and fresh real gate0 occur.

## 11. Required test matrix and exact expected axes

| Test group | Required outcome |
|---|---|
| Valid native/translated payload, root-pinned registry, direct/distant reviewed original quote and exact final | verified context; same-field exact ranges and evidence digests; ordinary gate result, never unconditional success |
| Registry/review/payload circular or unknown fields; entry/metric/skip/threshold/regex/command keys | schema error3 before eligibility changes |
| Duplicate JSON keys, booleans as offsets, floats/numeric strings, NaN/Infinity, bad enums/SHA, BOM/NUL, bad UTF-8, depth/string/file/count limits | deterministic validation error3 with specific reason |
| Root-unselected author proposal; approval comments/instructions in input/final/summary | no configuration discovery; ordinary text only; requested invalid registry never silently falls back |
| Stale manifest input, review/payload/artifact digest, other run/chapter, changed final body byte/space/line ending, altered source/span | exact identity error3; cached gate0 cannot authorize |
| Summary-only edit with exact raw body unchanged | still valid after summary structure validation; whole-file evidence SHA changes honestly |
| Half quote, new original wrapper, expanded/manual unquoted span, invalid byte boundary/range/ordinal, ambiguous/nested manual selection | occurrence/scope validation error3 |
| Supported automatic nesting; automatic/manual exact duplicate | existing nested protection preserved; duplicate provenance counted once |
| Missing/duplicated/moved anchor or quote field; unchanged anchor with contradictory final prose | mechanical scope error where detectable; otherwise independent exact-final review rejects before approval |
| Two protected original occurrences, one after occurrence | quote_altered specifically; test P0 remains below abort to isolate fidelity; run with and without registry |
| Original one quote, after exact repeated quote | cap consumes one only; extra occurrence remains style-eligible; manual reviewed-body mismatch error3 if unreviewed; no claim every automatic duplicate forces nonzero |
| Added/expanded wrapper or inner substring | no eligibility from noncomplete match; quote fidelity fails if original occurrence is no longer represented |
| Same-topic wrong source, mistranslated negation/conditions, paraphrase | independent semantic review rejects; machine never claims hash-proven meaning |
| Path traversal/absolute/backslash, leaf/directory symlink, FIFO, alias inode, file swapped during read | bounded regular-file or identity error3; no command/network execution |
| File changed after snapshot read | current invocation uses retained verified bytes consistently; later invocation detects changed current bytes; no unchecked reread |
| Derived route differs from original manifest in either direction; saved route differs; finalizer/assembly registry context differs/missing | error3 and assembly blocked; no route override or lower-route role exemption |
| P0 large change, numeric injection/loss assembly checks, real footnote loss/anchor movement, URL loss, tracked P5 deontic/hedge loss | same original full-text failure axes; do not let quote exclusions suppress them |
| Real author C11 outside protected quotes; rhetorical neighbouring quote | still measured/targeted under unchanged thresholds |
| Existing quote/footnote/golden/metrics suites; all 667 original route comparisons and affected actual finals | report counts and every intended P3 change; missing/error/warning/pass separate; no historical evidence overwritten |

Before code adoption, independent design review must confirm this exact specification, especially parser compatibility, CLI context selection and byte ownership. Before operational registry approval, independent source/translation review must approve exact payloads including final bodies. No such source review is performed or assumed by this specification.
