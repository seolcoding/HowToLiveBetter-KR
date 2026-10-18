from pathlib import Path
import json,subprocess,re,sys
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
qpath=BASE/'global-coordinator-queue.json'
d=json.loads(qpath.read_text())
for r in d['entries']:
 p=Path(r['run_dir']); f=p/'final.md';g=p/'publication-gates.json'
 if f.exists() and (not g.exists() or f'--regate={r["chapter"]}:{r["number"]}' in sys.argv) and '--gate-ready' in sys.argv:
  z=subprocess.run(['python3',str(ROOT/'.claude/skills/humanize-korean/scripts/verify_gates.py'),'--before',str(p/'01_input.txt'),'--after',str(f),'--genre','essay','--json'],capture_output=True,text=True)
  (p/'publication-gates.txt').write_text(z.stdout+z.stderr)
  try:g.write_text(json.dumps(json.loads(z.stdout[z.stdout.find('{'):]),ensure_ascii=False,indent=2)+'\n')
  except ValueError:print('GATE PARSE ERROR',r['chapter'],r['number'])
  print('gate',r['chapter'],r['number'],z.returncode)
 r['gate']=json.loads(g.read_text()).get('gate') if g.exists() else None
 r['proposal_exists']=(p/'editorial-proposal.json').exists()
 r['publication_proposal_exists']=(p/'publication-entry-proposal.md').exists()
 r['publication_changes_exists']=(p/'publication-entry-changes.json').exists()
 if r['gate'] and r['gate'].get('exit_code')==0 and not (p/'strict-entry.md').exists():
  body=re.sub(r'<!--\s*HUMANIZE-SUMMARY\b.*','',f.read_text(),flags=re.S).rstrip();lines=body.splitlines()
  if len(lines)==4 and all(re.match(r'^- (비용|쉽게|이득|비고):',x) for x in lines):
   replacements=iter(lines)
   assembled=re.sub(r'^- (?:비용|쉽게|이득|비고):.*$',lambda m:next(replacements),(p/'entry_snapshot.md').read_text(),flags=re.M)
   (p/'strict-entry.md').write_text(assembled)
 if f.exists() and not r.get('worker_id'):r['worker_id']=f'/root/humanize_a/ch{r["chapter"]}e{r["number"]:02d}'
qpath.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('accepted',sum(r['gate'] is not None and r['gate'].get('exit_code')==0 for r in d['entries']))
print('proposals',sum(r['proposal_exists'] for r in d['entries']))
print('editorial backlog',[(r['chapter'],r['number']) for r in d['entries'] if r['gate'] and r['proposal_issues'] and not r['proposal_exists']])
