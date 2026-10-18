"""Production CLI regressions for lexical C11 noun classification."""
import sys,json,subprocess,tempfile,unittest
from pathlib import Path
ROOT=Path('/workspace/HowToLiveBetter-KR')
SKILL=Path('/workspace/.cache/howtolivebetter/publication/footnote-identity-implementation-r1/candidate/.claude/skills/humanize-korean')
sys.path[:0]=[str(SKILL/'references'),str(SKILL/'scripts')]
import metrics,checks
class EndingNoun(unittest.TestCase):
 def gate(self,before,after):
  with tempfile.TemporaryDirectory() as d:
   p=Path(d);(p/'before').write_text(before);(p/'after').write_text(after)
   r=subprocess.run([sys.executable,str(SKILL/'scripts/verify_gates.py'),'--before',str(p/'before'),'--after',str(p/'after'),'--genre','essay','--json'],capture_output=True,text=True)
   return r.returncode,json.loads(r.stdout[r.stdout.index('{'):])
 def sample(self):
  p=ROOT/'kr-harness/publication/2026-10-18/ch13';e=next(e for e in json.loads((p/'manifest.json').read_text())['entries'] if e['number']==14);r=p/e['run_dir'];return (r/'01_input.txt').read_text()
 def test_actual_identity(self):
  text=self.sample()
  code,report=self.gate(text,text);self.assertEqual(code,0,report);self.assertFalse(report['s1_targets'])
 def test_nouns_in_varied_contexts(self):
  for noun in metrics._NONCONNECTIVE_GO_NOUNS:
   for text in (f'{noun}, 준비물, 기록을 확인하세요.',f'새 {noun} , 다른 물건을 확인합니다.',f'「{noun}, 준비물」을 챙기세요.'):
    self.assertEqual(metrics.ending_comma_rate(text),0,text)
 def test_ambiguous_forms_still_detected(self):
  for word in ('사고','보고','참고','신고','재고','하고','읽고','먹고','쓰고','듣고','살고','광고하고','경고하고','연고이고','간단하며','하지만','하면서','좋아서','없어서'):
   self.assertEqual(metrics.ending_comma_rate(word+', 다음에 합니다.'),1,word)
 def test_shared_denominator_and_numerator(self):
  self.assertEqual(metrics.ending_comma_rate('연고, 가져오고 보관합니다.'),0)
  self.assertEqual(metrics.ending_comma_rate('연고 가져오고, 바르고 보관합니다.'),.5)
  self.assertEqual(metrics.ending_comma_rate('원고, 경고, 읽고, 씁니다.'),1)
 def test_author_connectives_still_warn(self):
  text='설명은 간단하며, 조건은 그대로입니다. '*8
  code,report=self.gate(text,text);self.assertEqual(code,1,report);self.assertTrue(report['s1_targets'])
 def test_fidelity_checks_unchanged(self):
  a=self.sample()
  code,report=self.gate(a,a.replace('20분','21분'));self.assertNotEqual(code,0);self.assertIn('number_injected',{f['code'] for f in report['golden']})
  quote='기관은 "조건은 복잡하며, 절차는 간단합니다"라고 설명했다.'
  code,report=self.gate(quote,quote.replace('복잡하며,','간단하며,'));self.assertNotEqual(code,0);self.assertIn('quote_altered',{f['code'] for f in report['golden']})
  code,report=self.gate(a,'');self.assertNotEqual(code,0)
 def test_change_and_modality_safety(self):
  a=self.sample()
  code,report=self.gate(a,'완전히 다른 글입니다.');self.assertEqual(code,2,report)
  before='환자는 기다려야 합니다. 상처를 씻어야 합니다. 의사는 확인해야 합니다.'
  after='환자는 기다립니다. 상처를 씻습니다. 의사는 확인합니다.'
  code,report=self.gate(before,after);self.assertNotEqual(code,0,report)
  self.assertTrue(report['modality']['lost_pairs'],report)

if __name__=='__main__':unittest.main()
