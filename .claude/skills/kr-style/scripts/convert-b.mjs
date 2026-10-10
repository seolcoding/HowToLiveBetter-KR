// .claude/skills/kr-style/scripts/convert-b.mjs — 평어체(S3/A) 초안의 문장 종결을 합니다체(B)로 변환.
// 사용: node .claude/skills/kr-style/scripts/convert-b.mjs <입력.md> <출력.md>
// 변환 대상: 서문·본문 문단, - 비용/쉽게/이득/비고 필드의 "문장 끝" 어미만.
// 불변: ### 제목, 비용태그 주석, - 출처/- 근거등급, ## TODO 섹션, 링크·DOI, 직접 인용, 기존 합니다체.
// 규칙(자모 처리): 는다→습니다, 받침 ㄴ/ㄹ→ㅂ니다(간다→갑니다, 알다→압니다), 받침 없음→ㅂ니다(하다→합니다, 이다→입니다), 그 외 받침→습니다(먹다→먹습니다).
import { readFileSync, writeFileSync } from 'node:fs';

const [inPath, outPath] = process.argv.slice(2);
if (!inPath || !outPath) { console.error('사용: node convert-b.mjs <입력.md> <출력.md>'); process.exit(1); }

const FIN_B = 17;
const comp = (o, v, f) => String.fromCharCode(0xac00 + o * 588 + v * 28 + f);
const decomp = (ch) => { const c = ch.charCodeAt(0) - 0xac00; return [Math.floor(c / 588), Math.floor((c % 588) / 28), c % 28]; };
const isSyl = (ch) => /[\uac00-\ud7a3]/.test(ch);

function convStem(stem) {
  const last = stem[stem.length - 1];
  if (!isSyl(last)) return null;
  if (last === '는') return stem.slice(0, -1) + '습니'; // 먹는다→먹습니(다)
  const [o, v, f] = decomp(last);
  if (f === 4 || f === 8) return stem.slice(0, -1) + comp(o, v, FIN_B) + '니'; // 간다→갑니, 알다→압니
  if (f === 0) return stem.slice(0, -1) + comp(o, v, FIN_B) + '니'; // 하다→하니(ㅂ 결합=합니다), 이다→입니
  return stem + '습니'; // 낫다→낫습니, 있다→있습니, 았다→았습니
}

// 문장 끝(구두점·여는 괄호 직전/줄 끝)의 …다 를 변환. 보호 구간은 아래에서 먼저 가린다.
// 여는 괄호 포함: "있다(법 제16조)." → "있습니다(법 제16조)." 괄호 인용이 뒤따르는 종결도 변환.
const convLine = (line) =>
  line.replace(/([가-힣]{1,12})다(?=[.?!…(]|$)/g, (m, stem) => {
    const c = convStem(stem);
    return c ? c + '다' : m; // 습니+다 → 습니다
  });

// 후처리: 명사+이다 축약 오변환 교정, 숫자·기호+다는 입니다로, 명령형 평어는 존대로.
const FIXES = [
  [/([0-9A-Za-z%.])다(?=[.?!…(]|$)/g, '$1입니다'],
  [/\)다(?=[.?!…(]|$)/g, ')입니다'],
  [/가집니다/g, '가지입니다'], [/(것 하|하)납니다/g, '$1나입니다'], [/뱁니다/g, '배입니다'],
  [/제37좁니다/g, '제37조입니다'], [/탁굽니다/g, '탁구입니다'], [/비굡니다/g, '비교입니다'],
  [/연굽니다/g, '연구입니다'], [/정집니다/g, '정지입니다'], [/근겁니다/g, '근거입니다'],
  [/예욉니다/g, '예외입니다'], [/부텁니다/g, '부터입니다'], [/그대롭니다/g, '그대로입니다'],
  [/자쳅니다/g, '자료입니다'], [/기깁니다/g, '기계입니다'], [/정돕니다/g, '정도입니다'],
  [/짜립니다/g, '짜리입니다'], [/윕니다/g, '위입니다'], [/까집니다/g, '까지입니다'],
  [/는집니다/g, '는 것입니다'], [/옮기깁니다/g, '옮기기입니다'], [/먼접니다/g, '먼저입니다'],
  [/보라\./g, '보세요.'], [/두자\./g, '두세요.'], [/요구하자\./g, '요구하세요.'],
  [/지켜라\./g, '지키세요.'], [/확인해라\./g, '확인하세요.'], [/벌려라\./g, '벌리세요.'],
  [/찾아라\./g, '찾으세요.'], [/계산해 보라\./g, '계산해 보세요.'], [/시차차는/g, '시차는'],
];
const fixLine = (line) => FIXES.reduce((l, [re, to]) => l.replace(re, to), line);

// 변환과 FIXES 모두에서 보호한다. 인용은 여러 줄·이스케이프된 큰따옴표도
// 포함하며, 닫히지 않은 인용은 문서 끝까지 보수적으로 보존한다.
const input = readFileSync(inPath, 'utf8').replace(/\r\n/g, '\n');
let marker = '\uE000';
while (input.includes(marker)) marker += '\uE000';
const protectedText = [];
const tokenRE = new RegExp(`${marker}(\\d+)${marker}`, 'g');
const protect = (text) => text.replace(
  /"(?:\\[\s\S]|[^"\\])*(?:"|$)|「[^」]*(?:」|$)|“[^”]*(?:”|$)|https?:\/\/[^\s<>"「」“”]+|\b10\.\d{4,9}\/[^\s<>"「」“”]+|[가-힣]*니다/g,
  (span) => {
    // ~ㅂ니다/습니다만 보호한다. 평어체 아니다의 니다는 여기에 해당하지 않는다.
    if (/^[가-힣]*니다$/.test(span) && (span.length < 3 || decomp(span.at(-3))[2] !== FIN_B)) return span;
    return span.split('\n').map((part) => {
      protectedText.push(part);
      return `${marker}${protectedText.length - 1}${marker}`;
    }).join('\n');
  },
);
const restore = (text) => text.replace(tokenRE, (_, i) => protectedText[Number(i)]);

const SKIP = /^(###|<!--|- 출처:|- 근거등급:|\[←|#|>)/;
const out = [];
let inTodo = false;
let changed = 0;
for (const masked of protect(input).split('\n')) {
  const line = restore(masked);
  if (/^## TODO/.test(line)) inTodo = true;
  if (inTodo || SKIP.test(line) || !line.trim()) { out.push(line); continue; }
  const conv = restore(fixLine(convLine(masked)));
  if (conv !== line) changed++;
  out.push(conv);
}
writeFileSync(outPath, out.join('\n'), 'utf8');

// 남은 평어체 종결 리포트(수동 수정 대상) — 「」 내부·괄호 링크 제외하고 문장 끝 '…다.'
const allLines = protect(out.join('\n')).split('\n');
const todoStart = allLines.findIndex((l) => /^## TODO/.test(l));
const leftover = allLines
  .map((l, i) => [i + 1, l])
  .filter(([n, l]) => (todoStart === -1 || n < todoStart + 1) && /^(?!###|<!--|- 출처:|- 근거등급:|\[←|#|>)/.test(l) && l.trim())
  .filter(([_, l]) => {
    const clean = l.replace(tokenRE, ' ').replace(/\([^)]*\)/g, '');
    return /(?<![니랃])다(?=[.?!…(]|$)/.test(clean); // ~니다(합니다·습니다·입니다)는 제외
  });
console.log(`${outPath}: 변환 라인 ${changed}, 남은 평어체 종결 라인 ${leftover.length}${leftover.length ? ' → ' + leftover.map(([n]) => 'L' + n).slice(0, 20).join(',') : ''}`);
