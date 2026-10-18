from pathlib import Path
import sys,json,contextlib,io,hashlib
B=Path(__file__).resolve().parent;mode=sys.argv[1];S=B/mode/'.claude/skills/humanize-korean'
sys.path[:0]=[str(S/'scripts'),str(S/'references')]
import checks,verify_gates
assert Path(checks.__file__).is_relative_to(S)
rows=[]
def case(name,a,b,expected):
 codes=[f.code for f in checks.check_footnotes(a,b)]
 ok=(not codes) if expected=='pass' else expected in codes
 rows.append(dict(name=name,codes=codes,expected=expected,ok=ok));assert ok,rows[-1]
if mode=='candidate':
 for tail in ['제22조의6)','제95조의2 제1호의2)','제3항)','제44조의12·제44조의14)']:
  assert checks.extract_inline_markers(tail)==[],tail
 for a in ['과제22조의6)','X제22조의6)','제22조의6).1)','법 제22조의6)1)']:
  assert checks.extract_inline_markers(a),a
 case('distinct-repeat identity','값 10이다.1) 값 20이다.1)','값 10이다.1) 값 20이다.1)','pass')
 case('reorder pairs','값 10이다.1) 값 20이다.1)','값 20이다.1) 값 10이다.1)','pass')
 case('swap labels','값 10이다.1) 값 20이다.2)','값 10이다.2) 값 20이다.1)','footnote_anchor')
 case('delete one duplicate','값 10이다.1) 값 10이다.1)','값 10이다.1)','footnote_count')
 case('duplicate pair redistribution','값 10이다.1) 값 10이다.1) 값 20이다.1)','값 10이다.1) 값 20이다.1) 값 20이다.1)','footnote_anchor')
 case('same-label added','값 10이다.1)','값 10이다.1) 값 10이다.1)','footnote_count')
 case('anchor changed','값 10이다.1)','값 20이다.1)','footnote_anchor')
 case('unanchored deleted','설명이다.1)','설명이다.','footnote_count')
 case('unanchored multiplicity','설명이다.1)\n'+('가'*80)+'.1)','설명이다.1)','footnote_count')
 case('bibliography deletion','값 10이다.1)\n1) DOI original','값 10이다.1)','footnote_def')
 case('bibliography mutation','값 10이다.1)\n1) DOI original','값 10이다.1)\n1) DOI changed','footnote_def')
 case('statute plus real marker loss','법 제22조의6).1)','법 제22조의6).','footnote_count')
 for v in ['(2.5~3.1)','(.08~.29)','12~33)','(2024)']:
  assert checks.extract_inline_markers(v)==[],v
# Independent actual before/identity/full final tests.
for folder in ['hold-snapshot','ch27-e2-snapshot']:
 raw=(B/folder/'01_input.txt').read_bytes();final=(B/folder/'final.md').read_bytes()
 for kind,after in [('identity',raw),('final',final)]:
  with contextlib.redirect_stdout(io.StringIO()):code,report=verify_gates.evaluate_gate(raw,after,'essay')
  rows.append(dict(name=folder+'-'+kind,code=code,golden=report['golden']))
  assert code==(0 if mode=='candidate' else 1),(folder,kind,code)
(B/(mode+'-adversarial.json')).write_text(json.dumps(dict(module_paths={m.__name__:m.__file__ for m in [checks,verify_gates]},records=rows),ensure_ascii=False,indent=2))
print(mode,len(rows),'verified')
