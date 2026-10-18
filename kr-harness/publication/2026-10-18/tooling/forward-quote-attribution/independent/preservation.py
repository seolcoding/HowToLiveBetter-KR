from pathlib import Path
import subprocess,sys,json
B=Path(__file__).resolve().parent
base='기관은 내용을 이렇게 설명합니다. "조건은 복잡하며, 절차는 간단합니다" 비용은 30원입니다. 안전을 위해 확인해야 합니다. 결과가 달라질 수 있습니다. '
cases=[('numbers',base,base.replace('30원','31원'),'golden'),('quote',base,base.replace('복잡하며,','복잡합니다.'),'golden'),('P0',base,'완전히 다른 결론입니다.','change_rate'),('P5',base,base.replace('확인해야 합니다','확인합니다'),'modality')]
results=[]
for name,before,after,key in cases:
 p=B/'preservation'/name;p.mkdir(parents=True,exist_ok=True);(p/'before.txt').write_text(before);(p/'after.txt').write_text(after)
 proc=subprocess.run([sys.executable,str(B/'skill/scripts/verify_gates.py'),'--before',str(p/'before.txt'),'--after',str(p/'after.txt'),'--genre','essay','--json'],capture_output=True,text=True)
 (p/'stdout.txt').write_text(proc.stdout);d=json.loads(proc.stdout[proc.stdout.index('{'):]);assert proc.returncode!=0,(name,d)
 if key=='golden':assert d[key]
 if key=='change_rate':assert d[key]['rate']>.5
 if key=='modality':assert d[key]['lost_pairs'],d
 results.append(dict(name=name,exit=proc.returncode,evidence=d[key]))
(B/'preservation-results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2));print('P0, P3 numbers/quotes, P5 rejection verified')
