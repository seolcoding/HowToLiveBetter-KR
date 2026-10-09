// .claude/skills/kr-refine/scripts/entry-format.mjs — book-kr 항목(### 블록) 형식의 공통 정의와 구조 검사.
// 기준은 KR-GUIDE.md 「항목 형식 (book-kr/ 표준)」. entries.mjs(S7 항목 검사)와 kr-fit.mjs(KF-STRUCT)가 같이 쓴다.
// 부작용 없는 모듈이다(가져와도 CLI가 돌지 않는다).

// 표준 칸과 순서. KR-GUIDE의 필드 대응: 成本→비용 / 说人话→쉽게 / 收益→이득 / 证据等级→근거등급 / 来源→출처 / 备注→비고
export const FIELDS6 = ['- 비용:', '- 쉽게:', '- 이득:', '- 근거등급:', '- 출처:', '- 비고:'];
// KR-GUIDE에서 선택 사항인 칸(없어도 warn). 지금은 없음 — 여섯 칸 모두 필수.
export const OPTIONAL_FIELDS = [];

const NAMES = FIELDS6.map((f) => f.slice(2, -1)).join('|');
// 줄 머리가 아닌 자리에 낀 칸 머리(앞 칸 끝에 붙은 경우). 앞에 공백이 없어도 잡는다(예: …pub5>- 비고:).
const INLINE_HEAD = new RegExp(`(?<=.)- (?:${NAMES}):`, 'g');
export const TAG_RE = /<!--\s*成本标签:[^>]*-->/;

export const splitEntries = (md) => {
  const todoIdx = md.search(/^## TODO/m);
  const body = todoIdx === -1 ? md : md.slice(0, todoIdx);
  const tail = todoIdx === -1 ? '' : md.slice(todoIdx);
  const parts = body.split(/^(?=### )/m);
  return { intro: parts[0], entries: parts.slice(1), tail };
};

// 항목 하나(첫 줄이 ### 제목인 줄 배열)의 구조 검사. 반환: [{ i(블록 안 줄 번호, 0부터), severity, msg, match? }]
export function structureIssues(lines) {
  const out = [];
  const add = (i, severity, msg, match) => out.push({ i, severity, msg, ...(match ? { match } : {}) });
  if (!/^### /.test(lines[0] ?? '')) add(0, 'block', '첫 줄이 ### 제목이 아님');
  const tagAt = lines.findIndex((l) => TAG_RE.test(l));
  if (tagAt === -1) add(0, 'block', '비용태그 주석 줄(<!-- 成本标签: … -->) 없음');
  else if (tagAt !== 1) add(tagAt, 'warn', '비용태그 주석 줄이 제목 바로 다음 줄이 아님');
  for (const f of FIELDS6) {
    const at = lines.map((l, i) => (l.startsWith(f) ? i : -1)).filter((i) => i >= 0);
    if (at.length === 0) add(0, OPTIONAL_FIELDS.includes(f) ? 'warn' : 'block', `${f} 칸이 줄 머리에 없음`, f);
    else if (at.length > 1) add(at[1], 'block', `${f} 칸 ${at.length}회(정확히 1회여야 함)`, f);
  }
  const order = FIELDS6.map((f) => lines.findIndex((l) => l.startsWith(f)));
  const present = order.filter((i) => i >= 0);
  if (present.some((v, k) => k && v < present[k - 1])) add(0, 'block', `칸 순서가 표준(${FIELDS6.map((f) => f.slice(2, -1)).join('→')})과 다름`);
  lines.forEach((l, i) => {
    const t = l.trimStart();
    if (t !== l && FIELDS6.some((f) => t.startsWith(f))) add(i, 'block', '칸 머리가 들여쓰여 있음(줄 머리에서 시작해야 함)', t.slice(0, 12));
    INLINE_HEAD.lastIndex = 0;
    let m;
    while ((m = INLINE_HEAD.exec(l))) {
      if (t !== l && m.index === l.length - t.length) continue; // 들여쓰기 경우는 위에서 보고
      add(i, 'block', `줄 중간에 다른 칸 머리 「${m[0]}」가 붙어 있음(줄바꿈 누락)`, l.slice(Math.max(0, m.index - 20), m.index + m[0].length));
    }
  });
  return out;
}
