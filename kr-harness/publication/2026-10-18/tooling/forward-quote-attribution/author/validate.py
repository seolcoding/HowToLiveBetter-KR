import json,sys,subprocess,hashlib,collections
from pathlib import Path
B=Path(__file__).resolve().parent
R=Path('/workspace/HowToLiveBetter-KR')
S=B/'skill/scripts'
sys.path[:0]=[str(S),str(B/'skill/references')]
import checks,metrics_v2,prepare_monolith_input as prep
results=[]
def gate(name,before,after,expected=None):
 d=B/'cases'/name;d.mkdir(parents=True,exist_ok=True)
 (d/'before.txt').write_text(before);(d/'after.txt').write_text(after)
 p=subprocess.run([sys.executable,str(S/'verify_gates.py'),'--before',str(d/'before.txt'),'--after',str(d/'after.txt'),'--genre','essay','--json'],capture_output=True,text=True)
 (d/'stdout.json').write_text(p.stdout);(d/'stderr.txt').write_text(p.stderr)
 rep=json.loads(p.stdout[p.stdout.index('{'):]);results.append({'name':name,'exit':p.returncode,'golden':rep['golden'],'targets':rep['s1_targets']})
 if expected is not None:assert p.returncode==expected,(name,rep)
 return rep
p=R/'kr-harness/publication/2026-10-18/ch13';m=json.loads((p/'manifest.json').read_text())
for n in (10,14):
 e=next(x for x in m['entries'] if x['number']==n);r=p/e['run_dir'];v=(r/'01_input.txt').read_text();gate(f'e{n}-identity',v,v,0 if n==10 else 1);gate(f'e{n}-final',v,(r/'final.md').read_text(),0 if n==10 else 1)
 if n==10:
  rep=gate('e10-altered',v,v.replace('포함하며,','포함합니다.'));assert any(x['code']=='quote_altered' for x in rep['golden'])
  for name,mutation in [('no-source',v.replace('노인의학 고찰에서는 증상을 이렇게 설명합니다.','그렇게 생각합니다.')),('neighbour-rhetorical',v.replace('노인의학 고찰에서는 증상을 이렇게 설명합니다.','노인의학 고찰에서는 말했다. 나는 생각합니다.'))]:gate(name,mutation,mutation,1)
author='설명은 간단하며, 조건은 그대로입니다. '*8
intro='기관은 내용을 이렇게 설명합니다. '
quoted='"조건은 복잡하며, 절차는 간단합니다"'
before=intro+quoted+' '+author
gate('prefix-identity',intro+quoted,intro+quoted,0)
gate('new-wrapper',author,intro+'"'+author+'"',1)
rep=gate('expanded-wrapper',before,intro+'"조건은 복잡하며, 절차는 간단합니다 '+author+'"');assert rep['s1_targets']
rep=gate('repeated-wrapper',before,before+' '+intro+quoted);assert rep['s1_targets']
counts=collections.Counter();changes=[];total=0
for manifest in sorted((R/'kr-harness/publication/2026-10-18').glob('ch*/manifest.json')):
 for e in json.loads(manifest.read_text())['entries']:
  text=(manifest.parent/e['run_dir']/'01_input.txt').read_text();obj=metrics_v2.compute_all_v2(text,genre='essay');obj['_text']=text;route=prep.compute_route_hint(obj)['route_hint'];counts[route]+=1;total+=1
  if route!=e['route']:changes.append({'chapter':manifest.parent.name,'entry':e['number'],'old':e['route'],'new':route})
(B/'results.json').write_text(json.dumps({'cases':results,'route':dict(counts),'total':total,'changes':changes},ensure_ascii=False,indent=2))
print(json.dumps({'cases':[(x['name'],x['exit']) for x in results],'route':dict(counts),'total':total,'changes':changes},ensure_ascii=False))
