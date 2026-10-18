from pathlib import Path
import json,hashlib,ast
B=Path(__file__).resolve().parent;R=Path('/workspace/HowToLiveBetter-KR');S=B.parent/'footnote-identity-implementation-r1'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
expected={'REPORT.md':'9262dad217201d8ab99e2e3f50d5115838de0187670859f00943080cd2e2a9c8','candidate.patch':'a3515c1133123ace3ae96743ea3357addcea7a561e6e7a337e966e225b966543','candidate-files.json':'e7d7b0b9876f51be90a239bf21d6a6a418958aaae5bd86bffb928447f9d9788b','artifact-sha256.json':'eca90ad89010762b91d0d5749a7f5bcfcad4deb69caec6ca3899c83d48fe79e8'}
assert all(sha(S/n)==v for n,v in expected.items())
changes=[]
for p in (B/'baseline').rglob('*'):
 if p.is_file() and '__pycache__' not in str(p):
  rel=p.relative_to(B/'baseline');c=B/'candidate'/rel
  if c.exists() and p.read_bytes()!=c.read_bytes():changes.append(str(rel))
assert sorted(changes)==['.claude/skills/humanize-korean/scripts/checks.py','.github/workflows/kr-check.yml']
# Every existing check function except the two intentional footnote routines stays exact.
rel=Path('.claude/skills/humanize-korean/scripts/checks.py')
a=(B/'baseline'/rel).read_text();b=(B/'candidate'/rel).read_text()
def funcs(t):return {n.name:ast.get_source_segment(t,n) for n in ast.parse(t).body if isinstance(n,(ast.FunctionDef,ast.AsyncFunctionDef))}
f,g=funcs(a),funcs(b);changed=[n for n in f if f[n]!=g[n]]
assert sorted(changed)==['check_footnotes','extract_inline_markers']
comparisons={}
for dataset in ['actual-snapshot','fresh-snapshot']:
 x=json.loads((B/f'baseline-{dataset}-audit.json').read_text());y=json.loads((B/f'candidate-{dataset}-audit.json').read_text())
 diffs=[dict(chapter=i['chapter'],entry=i['entry'],before=i['status'],after=j['status']) for i,j in zip(x['records'],y['records'],strict=True) if i!=j]
 assert all(i['input_sha256']==j['input_sha256'] and i.get('final_file_sha256')==j.get('final_file_sha256') for i,j in zip(x['records'],y['records']))
 if dataset=='actual-snapshot':assert diffs==[]
 else:assert diffs==[dict(chapter='ch26',entry=6,before='1',after='0')],diffs
 comparisons[dataset]=dict(baseline=x['gate_counts'],candidate=y['gate_counts'],routes=y['routes'],route_changes=y['route_changes'],differences=diffs)
 for row in y['records']:
  if row['chapter']=='ch13' and row['entry'] in [24,38]:assert row['status']=='1' and row['gate']['golden']==[]
result=dict(decision='PASS',blockers=[],frozen_artifact_sha256=expected,changed_existing_functions=changed,corpus=comparisons,tests=dict(identity=16,classification=35,local=33,upstream_run=397,upstream_pass=395,upstream_skip=2),notes=['운영 미적용','P3-only identity와 full gate identity를 구분','기존 ch13 no-registry hold 유지','새 runtime에서 기존09 context 재사용 불가'])
(B/'review-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(json.dumps(comparisons,ensure_ascii=False))
