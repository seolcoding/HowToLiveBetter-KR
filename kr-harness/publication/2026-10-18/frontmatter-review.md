# 독립 독자 안내 검토 — 2026-10-18

최종 판정: **pass (block 0, warn 0)**. FM-W01은 아래 후속 검토에서 해소했다. 최초 검토는 pass/block0/warn1이었다. 이번 안내 변경을 막을 사실·고지 누락은 없다. 작성자와 별도 컨텍스트에서 실제 git diff, 현재 파일, 생성 HTML을 검토했다. 이 검토는 전체 본문 사실 검증 완료나 새 전자책 배포 승인을 뜻하지 않는다.

## 구체 findings

- **FM-W01 / 낮음 / 기존 표시 문제** — `kr-harness/ebook/lib.mjs`의 frontFacts.progress/entryLine은 실제로 `원문 665항목 중 667항목 공개(100%)`, `공개한 항목: 667/665항목(100%)`를 반환한다. 생성 HTML에도 같은 분모가 사용된다. 서로 다른 구성인 원문과 한국어판을 부분집합 진행률처럼 읽게 한다. 이번 diff가 만든 회귀는 아니지만 독자 안내 정리의 후속 후보다. 한국어판 667항목과 원문 665항목을 별도로 표시하고 추가4/제외2를 설명하면 명확하다. README의 구성 설명은 정확하다.

## 통과 근거

- 과거 목표 2단계의 비공식 현지화판·원문 우선·원본 링크 요구를 보존했다. NOTICE의 기존 우선 문장 뒤에 원저자의 설명과 취지를 확인하는 기준임을 명시하고, 한국 법·제도의 실제 적용은 한국 공식 출처에서 확인하도록 구분했다. README와 PDF 표지의 표현도 같은 뜻이다. 중국 법이 한국 법보다 우선한다는 안내로 읽을 근거가 없다.
- 의학 수치를 원문 그대로 복제했다는 잘못된 보장은 제거됐다. 연구 대상·수치의 범위를 확인하고 한국 지침과 확인한 근거로 수정한다는 과정 설명은 이번 원문 오류 교정과 맞는다. 모든 임상 주장을 검증 완료했다는 표현은 없다. TODO의 미확인 의미도 명시한다.
- README는 공개 본문 34절·667항목과 새 출판 품질 개선 진행 중·새 작업 미배포를 구분한다. ✅가 TODO 전부 확인을 뜻하지 않는다는 설명은 적절하다. 미배포 사실은 로컬 git diff/진행 기록과 일치하며 외부 서비스 배포 상태는 이 검토에서 조회하지 않았다.
- `readKrBook()` 실제 실행: 현재 해시 게이트 34/34 통과, 공개34절, 대기0절, 한국어667항목, 원문665항목. 본문 `kr-add`4개/`kr-omit`2개를 별도 재계수해 665+4-2=667을 확인했다.
- 실제 `/tmp/kr-frontmatter-audit.html`을 HTMLParser로 읽어 article34개, 항목 h3 667개, TODO절33개를 확인했다. 새 법적용 안내2곳(머리말/푸터), 옛 의학 원문복제 문구0개, 삭제 대상 중복 strong 고지0개다. 단어 TODO는 HTML에121회 있지만 목차·검색 등을 포함하므로 원고 미확인 건수와 동일시하지 않았다.
- 현재 원고 집계: TODO 단어54개(본문47·목록본문7), TODO 목록268건. 감사 기록과 일치한다. cleanChapter와 렌더러는 TODO를 지우지 않는다. 미확인을 완료로 바꾸거나 숨기는 변경은 diff에 없다.
- EPUB·PDF 머리말의 중복 도입 삭제 뒤에도 NOTICE 자체가 남는다. template.typ 표지는 원문 우선과 한국 공식 출처 안내를 함께 유지한다. PDF/EPUB 전체 빌드와 시각 화면 검사는 이번 최소 문구 검토에서 실행하지 않았다.

## 실제 검토 파일 SHA-256

아래는 검토 시점 실제 바이트의 SHA-256이다. 이후 파일이 바뀌면 해당 부분은 다시 검토해야 한다.

| 파일 | SHA-256 |
|---|---|
| `AGENTS.md` | `d44e5b25d3bb280a93ff697f67b68aac55dbc93e0c71fe7872141f5749ce9c19` |
| `KR-GUIDE.md` | `18f1176b05d290245fee056b6bc18efbb27847b65434a59f9779a6d8ce6ff9be` |
| `kr-harness/goals/2026-10-10-gate-ebook.md` | `2a5378b34facd1c49728a9421516d82b1395a3d739971ca7cdd29be86c6ba7b8` |
| `kr-harness/goals/2026-10-publication-quality.progress.md` | `0c83f82471134d036bfdb822017e0887eb63b212c2acd2fa98654075816f2361` |
| `kr-harness/publication/2026-10-18/frontmatter-audit.md` | `951ea92651d7cc2588e1ad4b6af25b47bf0e4a07015aa9506b80b3cd4306c873` |
| `book-kr/README.md` | `0b12d3412f2f04d03a0c1d10b44365eb2da11a7da1a31b10756688f834dbf64e` |
| `kr-harness/ebook/lib.mjs` | `078b5501f97fb7b5d2944a5afa23ca70443d084ddd21270dd935ed1c2d0d7184` |
| `kr-harness/ebook/html.mjs` | `9283dd80a0c4a18f0f211329c6c75a34001879c8be766376fdbe5c93331967f5` |
| `kr-harness/ebook/epub.mjs` | `50de9d033e5bb59c523a56ef2e097f51e8df4cead41e44c0d086258e7a3a4a13` |
| `kr-harness/ebook/pdf.mjs` | `ec930df281e8a8375346e285ffa057174eb43e6b7b3d53a478d9e404d0570ca1` |
| `kr-harness/ebook/template.typ` | `1536fc4332b90847df9ca2a674573a6926f0c0313963f71bad541bf2f00039d9` |
| `/tmp/kr-frontmatter-audit.html` | `697e963c7886a6513c8dbc61cbc0b16701bc21b88f03ca8362ea2e33ce96f8f1` |

## FM-W01 수정 후 독립 재검토

실제 diff와 감사 후속 기록을 읽고 수정된 frontFacts 및 progressBars와 출력물을 대조했다. 한국어판 공개 항목과 원문 전체 항목은 이제 별도 수로 표시되고 항목 분수·백분율은 없다. 실제 파서의 수를 사용하며 상수 667/665를 넣지 않는다. 절 진행률과 pending 안내 경로는 유지한다. **FM-W01 해소, 최종 pass/block0/warn0.**

- 직접 실행한 `node --test kr-harness/ebook/frontmatter.test.mjs`: 3/3 통과. 동일 구성·한국어판 항목이 더 많은 구성·일부 절 공개 fixture에서 항목 비율 부재와 절 막대 및 pending 보존을 확인한다.
- 다시 생성된 `/tmp/kr-frontmatter-audit.html`과 `/tmp/kr-frontmatter-audit.epub`의 XHTML/OPF를 직접 읽었다. 양쪽 모두 `667/665` 및 `665항목 중667` 표기0개, 한국어판 공개 항목·원문 전체 비교 표시 존재, 법적용 구분 안내 존재. EPUB 내부 XML까지 확인했으며 PDF 조판은 다시 실행하지 않았다.
- 기존 원문 우선 고지와 의학 수정 안내/TODO 의미는 유지된다. 아래 SHA는 이 재검토의 현재 바이트이며 위 최초 SHA를 대체한다.

| 파일 | 재검토 SHA-256 |
|---|---|
| `kr-harness/ebook/lib.mjs` | `541f779e0677bb1680a90252f1077e158e6946bef484fbb64d17dce81bba228d` |
| `kr-harness/ebook/html.mjs` | `d23183b59cf2ccb7369ccb76925a7e3e57f007f5b797955271c0f7eb1ea9a272` |
| `kr-harness/ebook/epub.mjs` | `50de9d033e5bb59c523a56ef2e097f51e8df4cead41e44c0d086258e7a3a4a13` |
| `kr-harness/ebook/pdf.mjs` | `ec930df281e8a8375346e285ffa057174eb43e6b7b3d53a478d9e404d0570ca1` |
| `kr-harness/ebook/template.typ` | `1536fc4332b90847df9ca2a674573a6926f0c0313963f71bad541bf2f00039d9` |
| `kr-harness/ebook/frontmatter.test.mjs` | `13188d9005ea6521fd58317fcc3d0977d01cfa4481953e1fa8ee53ad7b3acb75` |
| `book-kr/README.md` | `0b12d3412f2f04d03a0c1d10b44365eb2da11a7da1a31b10756688f834dbf64e` |
| `kr-harness/publication/2026-10-18/frontmatter-audit.md` | `f53da335b3ffb17b81056cf4b8cfb2f512d534a42347a90850ef9cb65580f41a` |
| `/tmp/kr-frontmatter-audit.html` | `990717cbc3b02836a3086bf8a8700a607866e73400b6449431a871af97352caf` |
| `/tmp/kr-frontmatter-audit.epub` | `cbb1a642f77d2eae637a13e967accbc7baec9fc82424f9040dde5dbdc223c572` |
