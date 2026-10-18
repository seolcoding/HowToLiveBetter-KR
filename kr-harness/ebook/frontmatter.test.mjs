import test from 'node:test';
import assert from 'node:assert/strict';
import { frontFacts } from './lib.mjs';
import { progressBars } from './html.mjs';

for (const [name, now, original, ready, pending] of [
  ['동일 구성 완료',10,10,2,[]],
  ['추가·제외로 원문보다 많은 항목',12,10,2,[]],
  ['일부 절 공개와 다른 항목 구성',4,10,1,[{num:2}]],
]) {
  test(name,()=>{
    const book={progress:{chapters:{now:ready,total:2,pct:ready*50},entries:{now,total:original,pct:Math.round(now/original*100)}},pending,stamp:'2026-10-18',commit:''};
    const facts=frontFacts(book), html=progressBars(book);
    assert.ok(facts.entryLine.includes(`한국어판 공개 항목: ${now}개`));
    assert.ok(facts.entryLine.includes(`원문 전체: ${original}개`));
    assert.doesNotMatch(facts.entryLine,/%|\//);
    assert.doesNotMatch(facts.progress,/원문 \d+항목 중/);
    assert.equal((html.match(/class="bar"/g)||[]).length,1);
    assert.ok(html.includes(`원문 전체 ${original}개`));
    assert.ok(html.includes(`${ready}/2절`));
    assert.equal(Boolean(facts.pendingLine),pending.length>0);
    if(pending.length) assert.match(facts.pendingLine,/공개 예정 1절: 2/);
  });
}
