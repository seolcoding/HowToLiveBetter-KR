"""Production CLI regressions for source introductions and adjacent quotations."""
import json,sys,subprocess,tempfile,unittest
from pathlib import Path
R=Path('/workspace/HowToLiveBetter-KR');S=Path('/workspace/.cache/howtolivebetter/publication/quote-attribution-implementation/candidate/.claude/skills/humanize-korean');sys.path[:0]=[str(S/'scripts'),str(S/'references')]
import checks,metrics_v2
class Passage(unittest.TestCase):
 def gate(self,a,b,name='case'):
  with tempfile.TemporaryDirectory() as temporary:
   folder=Path(temporary);(folder/'before').write_text(a);(folder/'after').write_text(b)
   p=subprocess.run([sys.executable,str(S/'scripts/verify_gates.py'),'--before',str(folder/'before'),'--after',str(folder/'after'),'--genre','essay','--json'],capture_output=True,text=True)
   return p.returncode,json.loads(p.stdout[p.stdout.index('{'):])
 def sample(self,n):
  p=R/'kr-harness/publication/2026-10-18/ch13';e=next(e for e in json.loads((p/'manifest.json').read_text())['entries'] if e['number']==n);r=p/e['run_dir'];return (r/'01_input.txt').read_text()
 def test_actual_e30(self):
  a=self.sample(30)
  code,report=self.gate(a,a,'e30-identity');self.assertEqual(code,0,report)
  spans=[a[x:y] for x,y in checks.protected_quote_spans(a)];self.assertEqual(len(spans),3,spans)
  for i,q in enumerate(spans):
   code,report=self.gate(a,a.replace(q,q.replace('고,','고는,',1)),'e30-altered-'+str(i));self.assertNotEqual(code,0);self.assertIn('quote_altered',{f['code'] for f in report['golden']})
 def test_actual_e24_honest_hold(self):
  a=self.sample(24)
  code,report=self.gate(a,a,'e24-identity');self.assertEqual(code,1,report)
  spans=[a[x:y] for x,y in checks.protected_quote_spans(a)];self.assertNotIn('멈추고, 엎드리고, 구른다',spans)
 def test_adjacent_sequence_and_styles(self):
  for op,cl in [('"','"'),('「','」'),('“','”')]:
   text=f'기관의 원문은 이렇습니다. {op}몸을 보호하고, 기다립니다.{cl} {op}문을 닫고, 기다립니다.{cl}'
   self.assertEqual(len(checks.protected_quote_spans(text)),2,text)
   code,report=self.gate(text,text);self.assertEqual(code,0,report)
 def test_attribution_grammar(self):
  for suffix in ('고 합니다.','고 한다.','라고 합니다.'):
   text='기관은 「문을 닫고, 기다리세요」'+suffix
   self.assertTrue(checks.protected_quote_spans(text),text)
  text='기관은 다음과 같이 권합니다. 「문을 닫고, 기다리세요」'
  self.assertTrue(checks.protected_quote_spans(text))
 def test_intervening_author_prose_breaks_sequence(self):
  prefix='기관의 원문은 이렇습니다. "문을 닫고, 기다리세요." '
  for bridge in ('나는 생각합니다. ','기관은 말했다. 나는 생각합니다. ','하지만 나는 다르게 생각합니다. '):
   text=prefix+bridge+'"설명은 간단하며, 조건은 그대로입니다."'
   spans=[text[a:b] for a,b in checks.protected_quote_spans(text)]
   self.assertEqual(spans,['문을 닫고, 기다리세요.'],text)
 def test_wrapper_attacks(self):
  author='설명은 간단하며, 조건은 그대로입니다. '*8
  original='기관의 원문은 이렇습니다. "문을 닫고, 기다리세요." '+author
  for name,before,after in [('new',author,'기관의 원문은 이렇습니다. "'+author+'"'),('expanded',original,'기관의 원문은 이렇습니다. "문을 닫고, 기다리세요. '+author+'"'),('repeat',original,original+' 기관의 원문은 이렇습니다. "'+author+'"')]:
   code,report=self.gate(before,after,'wrapper-'+name);self.assertNotEqual(code,0);self.assertTrue(report['s1_targets'])
 def test_author_safety_and_preservation(self):
  a='설명은 간단하며, 조건은 그대로입니다. '*8
  self.assertEqual(self.gate(a,a,'author')[0],1)
  self.assertEqual(self.gate(a,'다른 글입니다.','p0')[0],2)
  a='환자는 20분 기다려야 합니다. 상처를 씻어야 합니다. 의사는 확인해야 합니다.'
  code,report=self.gate(a,a.replace('20분','21분'),'numbers');self.assertNotEqual(code,0);self.assertIn('number_injected',{f['code'] for f in report['golden']})
  code,report=self.gate(a,a.replace('야 합니다','니다'),'p5');self.assertNotEqual(code,0);self.assertTrue(report['modality']['lost_pairs'])
if __name__=='__main__':unittest.main()
