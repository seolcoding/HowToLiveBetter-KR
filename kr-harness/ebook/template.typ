$--
$-- 한국어판 PDF용 pandoc typst 템플릿. $body$와 -V 변수 몇 개만 쓴다(pdf.mjs 참고). pendingline은 공개 예정 절이 있을 때만 온다.
$-- 판면 규칙은 tools/pdf/template.typ(upstream)를 따르되 글꼴·언어만 한국어로 바꿨다. upstream 파일은 고치지 않는다.
$-- 처음부터 divider까지는 pandoc이 만든 본문이 쓰는 보조 정의(`pandoc -D typst`에서 옮김). 지우지 않는다.
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- 판면 ----------
#set document(title: "$booktitle$", author: "eternity4719 · HowToLiveBetter-KR")
#set text(
  // CI는 fonts-noto-cjk(Noto Serif/Sans CJK KR). 로컬 Windows는 맑은 고딕으로 물러난다.
  font: ("Noto Serif CJK KR", "Noto Serif KR", "Source Han Serif K", "Noto Sans CJK KR", "Malgun Gothic"),
  size: 10.5pt, lang: "ko", region: "kr",
)
// 한국어 줄바꿈은 띄어쓰기 단위(CSS word-break: keep-all). typst 0.15에는 이 옵션이 없고
// 한글 음절 사이마다 줄을 바꿀 수 있어 「나 / 왔습니다」처럼 어절이 쪼개진다.
// 한글이 든 어절(붙은 문장부호 포함)을 box에 넣어 어절 안에서는 줄이 바뀌지 않게 한다.
// 낫표(「」『』)는 box 밖에 둔다(안에 넣으면 앞뒤 공백이 텍스트 추출에서 사라진다). 낫표 앞뒤 줄바꿈 금지는 기본 규칙이 지킨다.
// '/', '；', '，'에서는 끊어 URL·출처 목록은 그 자리에서 줄을 바꿀 수 있게 남긴다.
// 아주 긴 덩어리(28자 초과)는 box에 넣지 않는다. 칸보다 넓은 box는 넘치지 않고 안에서 글자 단위로 줄을 바꾼다(표 셀 확인).
#show regex("[^\\s/；，、「」『』]*\\p{Hangul}[^\\s/；，、「」『』]*[/；，、]?"): it => {
  if it.text.clusters().len() <= 28 { box(it) } else { it }
}
#set par(justify: false, leading: 0.85em, spacing: 1em)
#set list(indent: 0.6em, spacing: 0.8em)
#show raw: set text(font: ("DejaVu Sans Mono", "Noto Sans Mono CJK KR", "Consolas"), size: 9pt)
#show link: set text(fill: rgb("#1a4fb4"))
#show heading: set text(font: ("Noto Sans CJK KR", "Noto Sans KR", "Source Han Sans K", "Malgun Gothic"))
#show heading: set block(sticky: true, above: 1.5em, below: 0.7em)
#show heading.where(level: 1): set text(19pt)
#show heading.where(level: 2): set text(14pt)
#show heading.where(level: 3): set text(11.5pt)
// 절마다 새 쪽. weak라서 앞쪽이 꽉 찼을 때 빈 쪽이 생기지 않는다.
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// 쪽머리: 왼쪽 책 이름, 오른쪽 지금 절 이름. 절의 첫 쪽에는 찍지 않는다.
#let running-head = context {
  let next = query(selector(heading.where(level: 1)).after(here())).at(0, default: none)
  if next != none and next.location().page() == here().page() { return }
  let seen = query(selector(heading.where(level: 1)).before(here()))
  if seen.len() == 0 { return }
  set text(8.5pt, fill: luma(110))
  grid(columns: (1fr, auto), align(left)[$booktitle$], align(right)[#seen.last().body])
  v(-7pt)
  line(length: 100%, stroke: 0.4pt + luma(215))
}

// ---------- 표지 ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #text(26pt, weight: "bold", font: ("Noto Sans CJK KR", "Noto Sans KR", "Malgun Gothic"))[$booktitle$]
  #v(0.8cm)
  #text(13pt, fill: luma(60))[$subtitle$]
  #v(0.6cm)
  #text(11pt, fill: luma(60))[$progress$]
  #v(2.2cm)
  #block(width: 85%)[#text(10pt, fill: luma(80))[
    비공식 현지화판입니다. 내용이 다를 때는 중국어 원문이 우선합니다. \
    원본: $upstream$ \
    만든 시각: $builddate$ (한국 시간) · 커밋 $commit$ \
    최신판: $site$ \
    한국어판 저장소: $repo$
  ]]
]

// ---------- 목차 ----------
#pagebreak()
#outline(title: [목차], depth: 1, indent: 1em)
$if(pendingline)$
// 공개 예정 절은 목차에 하나씩 싣지 않고 끝에 한 줄로 적는다(pdf.mjs가 -V pendingline으로 넘긴다).
#v(1.2em)
#text(9.5pt, fill: luma(90))[$pendingline$]
$endif$

// ---------- 본문 ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(110))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$
