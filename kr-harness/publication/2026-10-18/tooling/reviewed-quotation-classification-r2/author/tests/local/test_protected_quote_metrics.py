"""Production CLI regressions: attributed quotes are immutable, not style targets."""
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

ROOT=Path('/workspace/HowToLiveBetter-KR')
SCRIPTS=Path('/workspace/.cache/howtolivebetter/publication/quote-attribution-implementation-r2/candidate/.claude/skills/humanize-korean/scripts')
sys.path.insert(0,str(SCRIPTS))
import checks
sys.path.insert(0,str(SCRIPTS.parent/'references'))
import metrics_v2

class ProtectedQuoteMetrics(unittest.TestCase):
    def sample(self):
        folder=ROOT/'kr-harness/publication/2026-10-18/ch05'
        manifest=json.loads((folder/'manifest.json').read_text())
        entry=next(entry for entry in manifest['entries'] if entry['number']==5)
        return (folder/entry['run_dir']/'01_input.txt').read_text()

    def gate(self,before,after):
        with tempfile.TemporaryDirectory() as temporary:
            base=Path(temporary)
            (base/'before.txt').write_text(before);(base/'after.txt').write_text(after)
            result=subprocess.run([sys.executable,str(SCRIPTS/'verify_gates.py'),'--before',str(base/'before.txt'),'--after',str(base/'after.txt'),'--genre','essay','--json'],capture_output=True,text=True)
            report=json.loads(result.stdout[result.stdout.index('{'):])
            return result.returncode,report

    def test_actual_e5_protected_source_quote_identity_passes(self):
        text=self.sample()
        self.assertIn('50%이며, 40%',text)
        code,report=self.gate(text,text)
        self.assertEqual(code,0,report)
        self.assertFalse(report['s1_targets'])
        self.assertEqual(metrics_v2.compute_all_v2(text)['style_eligibility']['protected_quote_count'],1)

    def test_actual_source_quote_edit_still_rejected_by_golden(self):
        text=self.sample()
        code,report=self.gate(text,text.replace('50%이며, 40%','50%입니다. 40%'))
        self.assertNotEqual(code,0)
        self.assertIn('quote_altered',{failure['code'] for failure in report['golden']})

    def test_rhetorical_quote_and_unquoted_author_comma_still_targeted(self):
        text=self.sample().replace('됩니다(동행복권 로또6/45 소개)','됩니다(내 생각)')
        for name,value in [('rhetorical quotation',text),('author prose',text.replace('"',''))]:
            with self.subTest(name=name):
                code,report=self.gate(value,value)
                self.assertEqual(code,1,report)
                target=next(target for target in report['s1_targets'] if target['metric']=='ending_comma_rate')
                self.assertGreater(target['z_before'],2)
                self.assertEqual(metrics_v2.compute_all_v2(value)['style_eligibility']['protected_quote_count'],0)

    def test_same_comma_outside_attributed_quote_remains_targeted(self):
        value=self.sample()+'설명은 간단하며, 조건은 그대로입니다.\n'*8
        code,report=self.gate(value,value)
        self.assertEqual(code,1,report)
        self.assertTrue(any(target['metric']=='ending_comma_rate' and target['z_before']>2 for target in report['s1_targets']))

    def test_new_output_quote_wrapper_cannot_exempt_author_style(self):
        before='설명은 간단하며, 조건은 그대로입니다. '*8
        after='기관은 "'+before+'"라고 설명했다.'
        code,report=self.gate(before,after)
        self.assertEqual(code,1,report)
        target=next(target for target in report['s1_targets'] if target['metric']=='ending_comma_rate')
        self.assertGreater(target['z_after'],2)

    def test_output_cannot_expand_original_quote_to_absorb_author_style(self):
        before=self.sample()+'설명은 간단하며, 조건은 그대로입니다. '*8
        after=before.replace('"됩니다(동행복권 로또6/45 소개)','').replace('설명은 간단하며, 조건은 그대로입니다. '*8,'설명은 간단하며, 조건은 그대로입니다. '*8+'"됩니다(동행복권 로또6/45 소개)')
        code,report=self.gate(before,after)
        self.assertNotEqual(code,0,report)
        target=next(target for target in report['s1_targets'] if target['metric']=='ending_comma_rate')
        self.assertGreater(target['z_after'],2)

    def test_speech_attribution_and_nested_ranges_share_fidelity(self):
        value='기관은 "조건은 복잡하며, 절차는 간단합니다"라고 설명했다.'
        self.assertTrue(checks.protected_quote_spans(value))
        self.assertTrue(checks.check_quotes(value,value.replace('복잡하며,','복잡합니다.')))
        nested='기관은 「그는 “조건은 복잡하며, 절차는 간단합니다”라고 말했다」라고 설명했다.'
        spans=checks.protected_quote_spans(nested)
        self.assertEqual(len(spans),1)
        metrics_v2.compute_all_v2(nested)

    def forward_sample(self):
        folder=ROOT/'kr-harness/publication/2026-10-18/ch13'
        manifest=json.loads((folder/'manifest.json').read_text())
        entry=next(entry for entry in manifest['entries'] if entry['number']==10)
        return (folder/entry['run_dir']/'01_input.txt').read_text()

    def test_actual_e10_forward_introduction_identity_passes(self):
        text=self.forward_sample()
        self.assertIn('고찰에서는 증상을 이렇게 설명합니다.',text)
        code,report=self.gate(text,text)
        self.assertEqual(code,0,report)
        quotes=[text[start:end] for start,end in checks.protected_quote_spans(text)]
        self.assertTrue(any('졸림을 포함하며,' in value for value in quotes))

    def test_actual_forward_quote_edit_still_rejected(self):
        text=self.forward_sample()
        code,report=self.gate(text,text.replace('졸림을 포함하며,','졸림을 포함합니다.'))
        self.assertNotEqual(code,0,report)
        self.assertIn('quote_altered',{failure['code'] for failure in report['golden']})

    def test_forward_introduction_cannot_protect_a_neighbouring_rhetorical_quote(self):
        value='기관은 이렇게 설명합니다. 그는 돌아갔다. "조건은 복잡하며, 절차는 간단합니다"'
        self.assertFalse(checks.protected_quote_spans(value))
        similar='기관은 이렇게 생각합니다. "조건은 복잡하며, 절차는 간단합니다"'
        self.assertFalse(checks.protected_quote_spans(similar))

    def test_new_forward_introduction_cannot_exempt_original_author_style(self):
        before='설명은 간단하며, 조건은 그대로입니다. '*8
        after='기관은 이렇게 설명합니다. "'+before+'"'
        code,report=self.gate(before,after)
        self.assertEqual(code,1,report)
        target=next(target for target in report['s1_targets'] if target['metric']=='ending_comma_rate')
        self.assertGreater(target['z_after'],2)

if __name__=='__main__':unittest.main()
