from pathlib import Path
import json,hashlib,shutil,subprocess,sys
B=Path(__file__).resolve().parent;R=Path('/workspace/HowToLiveBetter-KR');root=R/'kr-harness/publication/2026-10-18/ch13';copy=B/'actual-registry-ch13';shutil.copytree(root,copy,symlinks=True)
reg='quote-attribution/root-registry-r1.json';sha='fcaea69ba82f916d15ea8f96d26b58c53af2407dcb82f2d0e5100de78102c89c';assert hashlib.sha256((copy/reg).read_bytes()).hexdigest()==sha
script=B/'candidate/.claude/skills/humanize-korean/scripts/verify_gates.py';manifest=json.loads((copy/'manifest.json').read_text());out=[]
for n in (24,38):
 e=next(e for e in manifest['entries'] if e['number']==n);run=copy/e['run_dir'];cmd=[sys.executable,'-I',str(script),'--before',str(run/'01_input.txt'),'--after',str(run/'final.md'),'--genre','essay','--json','--quote-registry',reg,'--quote-registry-sha256',sha,'--publication-manifest',str(copy/'manifest.json'),'--classification-evidence-dir','REVIEW-ONLY-derived-'+str(n)]
 p=subprocess.run(cmd,capture_output=True,text=True);(B/('actual-registry-'+str(n)+'.stdout')).write_text(p.stdout);(B/('actual-registry-'+str(n)+'.stderr')).write_text(p.stderr);obj=json.loads(p.stdout[p.stdout.index('{'):]);out.append({'entry':n,'exit':p.returncode,'report':obj})
(B/'actual-registry-results.json').write_text(json.dumps(out,ensure_ascii=False,indent=2));print([(x['entry'],x['exit']) for x in out])
