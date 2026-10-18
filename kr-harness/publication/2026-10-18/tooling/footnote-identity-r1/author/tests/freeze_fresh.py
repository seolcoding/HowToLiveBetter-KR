"""Point-in-time read-only source audit snapshot; no registry/approval data."""
from pathlib import Path
import json,hashlib
B=Path(__file__).resolve().parents[1];R=Path('/workspace/HowToLiveBetter-KR');target=B/'fresh-snapshot';target.mkdir(exist_ok=False);entries=[]
for manifest in sorted((R/'kr-harness/publication/2026-10-18').glob('ch*/manifest.json')):
 for e in json.loads(manifest.read_text())['entries']:
  run=manifest.parent/e['run_dir'];directory=target/(manifest.parent.name+'-e'+str(e['number']));directory.mkdir()
  raw=(run/'01_input.txt').read_bytes();sha=hashlib.sha256(raw).hexdigest();assert sha==e['input_sha256']
  (directory/'before').write_bytes(raw)
  final=run/'final.md';after=final.read_bytes() if final.is_file() else None
  if after is not None:(directory/'after').write_bytes(after)
  entries.append({'chapter':manifest.parent.name,'entry':e['number'],'route':e['route'],'path':directory.name,'input_sha256':sha,'final_sha256':hashlib.sha256(after).hexdigest() if after is not None else None})
(target/'snapshot.json').write_text(json.dumps(entries,ensure_ascii=False,indent=2));print(len(entries),'inputs',sum(e['final_sha256'] is not None for e in entries),'finals')
