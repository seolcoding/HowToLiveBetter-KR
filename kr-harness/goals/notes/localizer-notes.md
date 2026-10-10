## 이번 실행의 추가 지시 (2026-10-10, 오케스트레이터)

1. **다른 절 참조 표준**(새로 정함. kr-localize SKILL.md에 아직 반영 전일 수 있다):
   - 다른 절: `제N절(주제)` — N은 0을 붙이지 않은 절 번호, 주제는 book-kr/README.md 표의 「한국어 제목」 칸 글자 그대로. 예: `제13절(응급상황)`, `제8절(법적 말썽에 휘말리지 않기)`.
   - 다른 절의 특정 항목: `제N절 제M항(앵커어)`. 대상 절이 이미 공개된 절(book-kr/에 본문이 있는 절)일 때만 항목 번호를 쓴다. 그 파일에서 번호와 제목을 확인한다. 공개 안 된 절은 항목 번호 없이 `제N절(주제)`만 쓴다.
   - 「(준비 중)」「다룰 예정」처럼 대상 절의 공개 여부를 본문에 적지 않는다. 전자책 빌드가 공개 여부를 판단해 링크 또는 「공개 예정」 표시로 바꾼다.
   - 조사는 괄호 앞 낱말에 맞춘다: 「제2절(천천히 죽지 않기)을 보세요」.
2. **조사 네트워크 요령**(2026-10-10 이 VM에서 잰 사실):
   - law.go.kr은 연결이 자주 끊긴다. curl은 `curl -sS --retry 5 --retry-all-errors --retry-delay 2 -m 30 "<URL>"`처럼 다시 시도한다. `https://www.law.go.kr/법령/…` 한글 주소는 자바스크립트 화면이라 본문이 안 나온다. `https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=…`, `LSW/lsInfoR.do?…`, `LSW/lsBdyPrint.do?…`, 조문 단위 `LSW/lsSideInfoP.do?lsiSeq=…&joNo=0060&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR`를 쓴다. lsiSeq는 WebSearch나 law.go.kr 검색 결과에서 얻는다. WebFetch로도 시도해 본다.
   - 공단·부처 사이트(nhis.or.kr, moel.go.kr, hira.or.kr, bokjiro.go.kr, gov.kr 등)는 curl이 거의 실패하지만 WebFetch로는 열린다. 기관 사이트는 WebFetch를 먼저 쓴다.
   - europepmc.org 화면은 403이다. REST API `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&format=json&resultType=core`를 쓴다. doi.org, pubmed.ncbi.nlm.nih.gov는 정상이다.
   - web.archive.org는 막혀 있다. 한국어판은 보관 링크를 요구하지 않는다.
   - WebSearch는 다른 에이전트들과 함께 쓰는 자원이다. 꼭 필요할 때만 쓴다.
   - 끝내 원문을 열지 못하면 지어내지 않고 `TODO 확인 필요`로 남긴다. 법 조문은 law.go.kr에서 원문을 연 것만 쓴다. 중국 수치를 옮기거나 위안을 원화로 환산하지 않는다.
3. **확인일**은 2026-10-10으로 적는다.
4. **금지**: kr-harness/chapters/NN/ 밖의 파일을 만들거나 고치지 않는다. git 상태를 바꾸는 명령(commit, stash, checkout, reset, push)을 쓰지 않는다. tools/의 스크립트(sync-stats, check-refs, check-links)를 돌리지 않는다. 다른 절도 동시에 다른 에이전트가 처리 중이다.
5. **자체 검증**: `node .claude/skills/kr-verify/scripts/kr-fit.mjs kr-harness/chapters/NN/3-draft.md --check`가 block 0이어야 한다. 항목 수(`grep -c '^### '`)가 원문과 다르면 1-analysis.md에 항목별 사유(한국에 대응 제도가 없음 등)를 적는다.
6. **보고**는 짧게: 항목 수(원문/초역), 뺀 항목과 사유, 바꾼 주요 한국 제도·조문(확인 URL), TODO 건수와 목록, kr-fit 결과 줄.

7. **의도적 차이 표시**(2026-10-10 추가, KR-GUIDE·kr-localize SKILL에도 반영됨): 원문과 항목 수나 DOI가 달라지면 3-draft.md 도입부(첫 `### ` 줄 앞)에 HTML 주석을 한 줄씩 단다. 없으면 S5 검증이 반려한다.
   - 항목을 뺐으면 `<!-- kr-omit: N — 사유 -->`(N은 원문 `### N.` 번호). 가능하면 빼기보다 항목을 남기고 「한국에는 이 제도가 없다」고 쓰는 쪽을 먼저 검토한다. 빼면 뒤 항목 번호를 당기지 말지 1-analysis.md에 적는다(번호는 한국어판에서 1부터 연속이어야 한다).
   - 원문에 없는 DOI를 보강했으면 `<!-- kr-doi-add: <DOI> — 사유 -->`, 원문 DOI를 의도적으로 뺐으면 `<!-- kr-doi-drop: <DOI> — 사유 -->`.
   - 한국에만 있는 위험·제도라서 원문 절 주제 안에서 항목을 새로 붙였으면 `<!-- kr-add: N — 사유 -->`(N은 한국어판 번호). 꼭 필요할 때만.
   - 출처 줄에서 DOI를 여러 개 이을 때는 세미콜론보다 「 · 」나 쉼표를 쓴다.
8. **전화번호**: kr-fit 허용 목록(`.claude/skills/kr-verify/references/kr-fit-rules.json`의 `phones.allow`) 밖의 번호는 warn이 난다. 공식 누리집에서 확인한 번호면 그대로 쓰고, 보고에 「허용 목록 추가 필요: 번호, 기관, 확인 URL」을 적는다. 규칙 파일은 고치지 않는다.

9. **임시 파일**: scratchpad는 여러 에이전트가 함께 쓴다. 임시 파일은 scratchpad 아래 `chNN-loc/`(NN은 절 번호) 하위 폴더에만 둔다. 다른 폴더의 파일은 건드리지 않는다.
