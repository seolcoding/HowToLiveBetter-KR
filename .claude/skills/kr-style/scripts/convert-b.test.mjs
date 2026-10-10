import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const cli = fileURLToPath(new URL('./convert-b.mjs', import.meta.url));
function convert(input) {
  const scratch = mkdtempSync(join(tmpdir(), 'kr-style-converter-regression-'));
  try {
    const source = join(scratch, 'input.md');
    const target = join(scratch, 'output.md');
    writeFileSync(source, input);
    const result = spawnSync(process.execPath, [cli, source, target], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return { text: readFileSync(target, 'utf8'), report: result.stdout };
  } finally {
    rmSync(scratch, { recursive: true, force: true });
  }
}

const cases = [
  ['plain 아니다 is distinguished from polite ~ㅂ니다',
    '이것은 답이 아니다.\n',
    '이것은 답이 아닙니다.\n'],
  ['plain prose and existing fixes',
    '먹는다. 간다! 알다? 하다… 있다(법 제16조).\n두 가지다. 1%다. 보라.\n',
    '먹습니다. 갑니다! 압니다? 합니다… 있습니다(법 제16조).\n두 가지입니다. 1%입니다. 보세요.\n'],
  ['existing polite prose, including words targeted by FIXES',
    '잡습니다. 확보합니다! 엑스레이입니다?\n책임을 가집니다. 합니다(설명).\n',
    '잡습니다. 확보합니다! 엑스레이입니다?\n책임을 가집니다. 합니다(설명).\n'],
  ['double quotes and corner quotes protect inner punctuation and fixes',
    '"엑스레이다. 보라. 1%다! 있다(설명)?"라고 하다.\n「먹는다. 가집니다. 보라.」라고 하다.\n',
    '"엑스레이다. 보라. 1%다! 있다(설명)?"라고 합니다.\n「먹는다. 가집니다. 보라.」라고 합니다.\n'],
  ['escaped quotes, curly quotes, and multiline quotations',
    '"하다. \\"먹는다.\\"\n보라." 하다.\n「하다.\n보라.」 하다.\n“하다. 보라.” 하다.\n',
    '"하다. \\"먹는다.\\"\n보라." 합니다.\n「하다.\n보라.」 합니다.\n“하다. 보라.” 합니다.\n'],
  ['unclosed quotations preserve the remainder conservatively',
    '하다. "먹는다.\n보라.\n',
    '합니다. "먹는다.\n보라.\n'],
  ['URLs and DOI suffixes with Korean endings and inner punctuation',
    'https://example.org/하다.보라. 10.1234/하다.보라. 하다.\n[자료](https://doi.org/10.1234/먹는다.) 하다.\n',
    'https://example.org/하다.보라. 10.1234/하다.보라. 합니다.\n[자료](https://doi.org/10.1234/먹는다.) 합니다.\n'],
  ['entry structure and skipped fields',
    '# 제목이다.\n\n### 1. 하다.\n<!-- 成本标签: 钱=少 时间=少 毅力=否 收益=中 口径=死亡率 -->\n- 비용: 하다.\n- 쉽게: 먹는다.\n- 이득: 14%다.\n- 근거등급: A 하다.\n- 출처: 하다. https://doi.org/10.1234/하다.\n- 비고: 있다.\n\n## TODO 확인 필요\n- 하다.\n',
    '# 제목이다.\n\n### 1. 하다.\n<!-- 成本标签: 钱=少 时间=少 毅力=否 收益=中 口径=死亡率 -->\n- 비용: 합니다.\n- 쉽게: 먹습니다.\n- 이득: 14%입니다.\n- 근거등급: A 하다.\n- 출처: 하다. https://doi.org/10.1234/하다.\n- 비고: 있습니다.\n\n## TODO 확인 필요\n- 하다.\n'],
  ['literal private-use marker cannot collide with protection tokens',
    '\uE0000\uE000 "하다." 하다.\n',
    '\uE0000\uE000 "하다." 합니다.\n'],
];

for (const [name, input, expected] of cases) {
  test(name, () => {
    const first = convert(input);
    assert.equal(first.text, expected);
    const second = convert(first.text);
    assert.equal(second.text, expected, 'supported conversion must be idempotent');
    assert.match(second.report, /변환 라인 0, 남은 평어체 종결 라인 0/);
  });
}
