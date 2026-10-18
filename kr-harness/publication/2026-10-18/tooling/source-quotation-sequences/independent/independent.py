from pathlib import Path
import sys,re,json,hashlib,difflib,collections,importlib.util,unittest
B=Path(__file__).resolve().parent;R=Path('/workspace/HowToLiveBetter-KR');S=B/'skill';sys.path[:0]=[str(S/'scripts'),str(S/'references')];import checks,metrics_v2,prepare_monolith_input as prep
q='문을 닫고, 안전하게 기다리세요.';z='설명은 간단하며, 조건은 그대로입니다.';prefix='기관의 원문은 이렇습니다. '
cases=[('mixed',prefix+'「'+q+'」 “'+z+'”',2),('short-first',prefix+'"예." "'+q+'"',1),('short-middle',prefix+'"'+q+'" "예." "'+z+'"',2),('nested',prefix+'「그는 “'+q+'”라고 말했다」 "'+z+'"',2),('bare-adjacency','"'+q+'" "'+z+'"',0),('prose-between',prefix+'"'+q+'" 내 생각은 "'+z+'"',1),('heading-between',prefix+'"'+q+'"\n# 내 생각\n"'+z+'"',1),('new-paragraph-prose',prefix+'"'+q+'"\n\n나는 생각합니다. "'+z+'"',1),('blank-paragraph-adjacency',prefix+'"'+q+'"\n\n"'+z+'"',2),('colon-break',prefix+'"'+q+'": "'+z+'"',1),('semicolon-break',prefix+'"'+q+'"; "'+z+'"',1),('negative-source-original','기관의 원문은 다릅니다. "'+q+'"',0),('unattributed-source-original','원문은 이렇습니다. "'+q+'"',0),('authority-recommend','기관은 이렇게 권합니다. 『'+q+'』',1)]
res=[]
for name,text,expected in cases:
 spans=checks.protected_quote_spans(text);assert len(spans)==expected,(name,spans);res.append(dict(name=name,text=text,spans=spans))
for op,cl in [('"','"'),('「','」'),('『','』'),('“','”')]:
 for suffix in ('고 합니다.','고 한다.','고 했다.','고 했습니다.','라고 합니다.'):
  text=op+q+cl+suffix;assert checks.protected_quote_spans(text),(text,checks.protected_quote_spans(text))
  assert checks.check_quotes(text,text.replace('닫고,','닫습니다.'))
old=R/'.claude/skills/humanize-korean/scripts/checks.py';new=S/'scripts/checks.py';patch=''.join(difflib.unified_diff(old.read_text().splitlines(True),new.read_text().splitlines(True),fromfile='a/.claude/skills/humanize-korean/scripts/checks.py',tofile='b/.claude/skills/humanize-korean/scripts/checks.py'));assert patch==(B.parent/'quote-passage-fix/candidate.patch').read_text()
diffs=[]
for p in S.rglob('*'):
 if p.is_file() and '__pycache__' not in p.parts:
  rel=p.relative_to(S);other=R/'.claude/skills/humanize-korean'/rel
  if p.read_bytes()!=other.read_bytes():diffs.append(str(rel))
assert set(diffs)=={'PROVENANCE.md','scripts/checks.py'},diffs
suite_results={}
for name in ('test_golden','test_metrics_v2'):
 spec=importlib.util.spec_from_file_location(name,'/workspace/.cache/im-not-ai/tests/'+name+'.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod);x=unittest.TextTestRunner(verbosity=0).run(unittest.defaultTestLoader.loadTestsFromModule(mod));assert x.wasSuccessful();suite_results[name]=x.testsRun
counts=collections.Counter();changes=[]
for p in sorted((R/'kr-harness/publication/2026-10-18').glob('ch*/manifest.json')):
 for e in json.loads(p.read_text())['entries']:
  text=(p.parent/e['run_dir']/'01_input.txt').read_text();obj=metrics_v2.compute_all_v2(text,genre='essay');obj['_text']=text;route=prep.compute_route_hint(obj)['route_hint'];counts[route]+=1
  if route!=e['route']:changes.append((p.parent.name,e['number'],e['route'],route))
(B/'independent-results.json').write_text(json.dumps(dict(cases=res,suffix_fidelity_cases=20,skill_diffs=diffs,upstream=suite_results,routes=dict(counts),route_changes=changes,patch_sha256=hashlib.sha256(patch.encode()).hexdigest()),ensure_ascii=False,indent=2));print(dict(routes=dict(counts),route_changes=changes))
