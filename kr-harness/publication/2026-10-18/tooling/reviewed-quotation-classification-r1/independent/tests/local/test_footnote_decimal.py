"""Regression checks against the locally vendored production gate runtime."""
import json
from pathlib import Path
import subprocess
import sys
import unittest

ROOT=Path('/workspace/HowToLiveBetter-KR')
SCRIPTS=Path('/workspace/.cache/howtolivebetter/publication/quote-attribution-code-review/candidate/.claude/skills/humanize-korean/scripts')
sys.path.insert(0,str(SCRIPTS))
import checks

class FootnoteDecimalRegression(unittest.TestCase):
    def test_actual_ch01_entry27_identity_gate(self):
        folder=ROOT/'kr-harness/publication/2026-10-18/ch01'
        manifest=json.loads((folder/'manifest.json').read_text())
        entry=next(entry for entry in manifest['entries'] if entry['number']==27)
        source=folder/entry['run_dir']/'01_input.txt'
        text=source.read_text()
        self.assertIn('2.5~3.1)',text)
        self.assertIn('1.2~2.1)',text)
        self.assertEqual(checks.extract_inline_markers(text),[])
        result=subprocess.run([sys.executable,str(SCRIPTS/'verify_gates.py'),'--before',str(source),'--after',str(source),'--genre','essay','--json'],capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stdout+result.stderr)

    def test_actual_ch03_entry22_leading_zero_omitted_identity_gate(self):
        folder=ROOT/'kr-harness/publication/2026-10-18/ch03'
        manifest=json.loads((folder/'manifest.json').read_text())
        entry=next(entry for entry in manifest['entries'] if entry['number']==22)
        source=folder/entry['run_dir']/'01_input.txt'
        text=source.read_text()
        self.assertIn('.11~.29)',text)
        self.assertIn('.08~.29)',text)
        self.assertEqual(checks.extract_inline_markers(text),[])
        result=subprocess.run([sys.executable,str(SCRIPTS/'verify_gates.py'),'--before',str(source),'--after',str(source),'--genre','essay','--json'],capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stdout+result.stderr)

    def test_omitted_zero_decimals_keep_real_sentence_attached_footnotes(self):
        self.assertEqual(checks.extract_inline_markers('r=.29) CI (.08~.29), [.29) 값 -.29)'),[])
        self.assertEqual([n for n,_ in checks.extract_inline_markers('값은 .29였다.29) 비율은 20%.30)')],['29','30'])
        original='값은 .29였다.29) 비율은 20%.30)'
        missing='값은 .29였다.29) 비율은 20%.'
        duplicate='값은 .29였다.29) 비율은 20%.29)'
        self.assertIn('footnote_count',{failure.code for failure in checks.check_footnotes(original,missing)})
        self.assertIn('footnote_numbers',{failure.code for failure in checks.check_footnotes(original,duplicate)})

    def test_decimal_tails_excluded_but_sentence_markers_retained(self):
        self.assertEqual(checks.extract_inline_markers('CI (2.5~3.1), (1,2~2,1), (0.6~12.31)'),[])
        self.assertEqual([number for number,_ in checks.extract_inline_markers('성장률 3.1%였다.1) 물가 2.4%였다.2)')],['1','2'])

    def test_real_missing_footnote_still_rejected(self):
        original='성장률 3.1%였다.1) 물가 2.4%였다.2)'
        codes={failure.code for failure in checks.check_footnotes(original,'성장률 3.1%였다.1) 물가 2.4%였다.')}
        self.assertTrue({'footnote_count','footnote_numbers'}<=codes)

    def test_real_duplicate_replacing_marker_still_rejected(self):
        original='성장률 3.1%였다.1) 물가 2.4%였다.2)'
        output='성장률 3.1%였다.1) 물가 2.4%였다.1)'
        codes={failure.code for failure in checks.check_footnotes(original,output)}
        self.assertIn('footnote_numbers',codes)

if __name__=='__main__':
    unittest.main()
