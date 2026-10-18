"""Repeated-footnote and Korean-statute identity regressions."""
from pathlib import Path
import contextlib,io,sys,unittest
ROOT=Path(__file__).resolve().parents[4]
SKILL=ROOT/'.claude/skills/humanize-korean'
sys.path[:0]=[str(SKILL/'scripts'),str(SKILL/'references')]
import checks,verify_gates
from test_reviewed_quote_classification import Fixture,prepare_test_helper
import tempfile,json,copy,hashlib
text=(ROOT/'kr-harness/publication/scripts/humanize_publication.py').read_text()
helper={'__file__':str(ROOT/'kr-harness/publication/scripts/humanize_publication.py'),'__name__':'identity_test_helper'}
exec(compile(text[:text.index('parser=argparse.ArgumentParser')],helper['__file__'],'exec'),helper)
class FootnoteIdentity(unittest.TestCase):
 def codes(self,a,b):return {f.code for f in checks.check_footnotes(a,b)}
 def test_repeated_label_identity_distinct_anchors(self):
  text='관찰 값은 10이었다.1) 다음 값은 20이었다.1)'
  self.assertEqual(checks.check_footnotes(text,text),[])
 def test_repeated_label_same_anchor_count_loss(self):
  a='관찰 값은 10이었다.1) 관찰 값은 10이었다.1)'
  self.assertIn('footnote_count',self.codes(a,'관찰 값은 10이었다.1)'))
  self.assertIn('footnote_anchor',self.codes(a,'관찰 값은 10이었다.1)'))
 def test_repeated_label_wrong_second_anchor(self):
  a='관찰 값은 10이었다.1) 다음 값은 20이었다.1)'
  self.assertIn('footnote_anchor',self.codes(a,a.replace('20','30')))
 def test_repeated_pair_redistribution_not_hidden_by_first(self):
  a='값은 10이었다.1) 값은 10이었다.1) 값은 20이었다.1)'
  self.assertIn('footnote_anchor',self.codes(a,a.replace('값은 10이었다.1)', '값은 20이었다.1)',1)))
 def test_repeated_label_sentence_reordering(self):
  self.assertEqual(checks.check_footnotes('값은 10이었다.1) 값은 20이었다.1)','값은 20이었다.1) 값은 10이었다.1)'),[])
 def test_explicit_statute_subdivisions_not_footnotes(self):
  self.assertEqual(checks.extract_inline_markers('법 제22조의6) 제30조의6) 제95조의2 제1호의2) 제3항) 제44조의2)'),[])
  self.assertEqual([n for n,p in checks.extract_inline_markers('과제22조의6)')],['6'])

 def test_statute_does_not_hide_following_true_marker(self):
  a='금액 10원입니다(법 제22조의6).1) 금액 20원입니다.2)'
  self.assertEqual([n for n,p in checks.extract_inline_markers(a)],['1','2'])
  self.assertIn('footnote_count',self.codes(a,a.replace('.2)','.')))
 def test_true_markers_and_statistical_values(self):
  a='CI (2.5~3.1), (.08~.29), 12~33), 값은 10이었다.1)'
  self.assertEqual([n for n,p in checks.extract_inline_markers(a)],['1'])
 def test_actual_hold_identity(self):
  source=(Path(__file__).parent/'fixtures/ch26-e6-input.txt').read_bytes()
  self.assertEqual(hashlib.sha256(source).hexdigest(),'8ff3752b5c1ae22f40fc5b021b36613299e38648f45048e408824d94562a9345')
  self.assertEqual(checks.extract_inline_markers(source.decode()),[])
  with contextlib.redirect_stdout(io.StringIO()):code,report=verify_gates.evaluate_gate(source,source,'essay')
  self.assertEqual(code,0,report);self.assertEqual(report['golden'],[])
 def test_actual_ch27_entry2_identity(self):
  source=(Path(__file__).parent/'fixtures/ch27-e2-input.txt').read_bytes()
  self.assertEqual(checks.extract_inline_markers(source.decode()),[])
  self.assertEqual(checks.check_footnotes(source.decode(),source.decode()),[])
  with contextlib.redirect_stdout(io.StringIO()):code,report=verify_gates.evaluate_gate(source,source,'essay')
  self.assertEqual(code,0,report)
 def test_publication_repeated_number_delete_rejected(self):
  for a,b in [('값 10원 10원','값 10원'),('값 10원','값'),('제22조의6 제22조의6','제22조의6')]:
   self.assertNotEqual(helper['invariants'](a)['numbers'],helper['invariants'](b)['numbers'])
 def test_publication_repeated_number_add_rejected(self):
  for a,b in [('값 10원','값 10원 10원'),('제22조의6','제22조의6 제22조의6')]:
   self.assertNotEqual(helper['invariants'](a)['numbers'],helper['invariants'](b)['numbers'])
 def test_repeated_marker_addition_and_redistribution_rejected(self):
  a='설명입니다.1) 설명입니다.1) 설명입니다.2)'
  self.assertIn('footnote_count',self.codes(a,a+' 설명입니다.1)'))
  self.assertIn('footnote_count',self.codes(a,a.replace('설명입니다.1)','설명입니다.2)',1)))
 def test_actual_publication_repeated_number_mutations_rejected(self):
  for before,after in [('10원 10원','10원'),('10원','10원 10원'),('10원','없음')]:
   with self.subTest(before=before,after=after),tempfile.TemporaryDirectory(prefix='TEST-ONLY-number-') as td:
    root=Path(td);plain='- 비용: '+before+'입니다.\n- 쉽게: 문을 확인하세요.\n- 이득: TEST 기관의 원문을 소개합니다. 다른 설명입니다. "조건은 간단하며, 절차는 안전합니다".\n- 비고: 확인하세요.\n'
    f=Fixture(root,plain);ns,ctx=prepare_test_helper(root,f)
    (f.run/'final.md').write_text(f.after.replace(before,after,1))
    with self.assertRaisesRegex(ValueError,'conservation failure.*numbers'):
     ns['assemble'](root,False)
    self.assertFalse((root/'candidate.md').exists());self.assertFalse((root/'assembly.json').exists())
 def test_old_runtime_finalizer_context_is_rejected(self):
  with tempfile.TemporaryDirectory(prefix='TEST-ONLY-stale-runtime-') as td:
   root=Path(td);f=Fixture(root);ns,ctx=prepare_test_helper(root,f)
   old=copy.deepcopy(ctx.report())
   old['runtime_sha256']['scripts/checks.py']='0'*64
   (f.run/'09_finalize.json').write_text(json.dumps({'status':'accept','classification_context':old}))
   with self.assertRaisesRegex(ValueError,'fresh finalizer context required'):
    with contextlib.redirect_stdout(io.StringIO()):
     ns['assemble'](root,False,'TEST-ONLY-registry.json',f.sha,'TEST-ONLY-stale-runtime')
   self.assertFalse((root/'TEST-ONLY-stale-runtime/candidate.md').exists())
   self.assertFalse((root/'TEST-ONLY-stale-runtime/assembly.json').exists())
 def test_statute_number_changed_remains_protected(self):
  a='제22조의6)';b='제22조의7)'
  self.assertIn('number_injected',{f.code for f in checks.run_checks(a,b)})
  self.assertNotEqual(helper['invariants'](a)['numbers'],helper['invariants'](b)['numbers'])
if __name__=='__main__':unittest.main()
