"""Regression checks against the locally vendored production gate runtime."""
import json
from pathlib import Path
import subprocess
import sys
import unittest

ROOT=Path(__file__).resolve().parents[4]
SCRIPTS=ROOT/'.claude/skills/humanize-korean/scripts'
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
