from pathlib import Path
import sys,importlib.util,tempfile,contextlib,io,json,os
from unittest.mock import patch
B=Path(__file__).resolve().parent;P=B/'candidate/kr-harness/publication/scripts/tests/test_reviewed_quote_classification.py';spec=importlib.util.spec_from_file_location('independent_r2_fixtures',P);t=importlib.util.module_from_spec(spec);spec.loader.exec_module(t);q=t.q;results=[]
def fixture(root):
 f=t.Fixture(root);chapter=f.load();ctx=chapter.contexts[f.path]
 with contextlib.redirect_stdout(io.StringIO()):_,report=t.verify_gates.evaluate_gate(ctx.before_bytes,ctx.after_bytes,'essay',ctx)
 return f,chapter,ctx,report
with tempfile.TemporaryDirectory(dir=B,prefix='TEST-independent-transaction-') as d:
 root=Path(d);f,c,ctx,report=fixture(root);(root/'unrelated.txt').write_bytes(b'KEEP unrelated');old=root/'historical';old.mkdir();(old/'candidate.md').write_bytes(b'KEEP historical candidate')
 real_rename=q.os.rename
 def rename_failure(*a,**kw):raise OSError('INDEPENDENT rename failure')
 with patch.object(q.os,'rename',side_effect=rename_failure):
  try:q.write_evidence(c.snapshot,'direct-rename-failure',ctx,report)
  except OSError:pass
 path=root/'direct-rename-failure';assert [p.name for p in path.iterdir()]==['failure.json'];assert not list(root.glob('.quote-pending-*'))
 results.append({'case':'direct_rename_failure','files':[p.name for p in path.iterdir()]})
 # Capture actual fsync sequence, then inject failure at each position independently.
 real_sync=q.os.fsync;events=[]
 def track(fd):events.append(os.readlink('/proc/self/fd/'+str(fd)));return real_sync(fd)
 with patch.object(q.os,'fsync',side_effect=track):q.write_evidence(c.snapshot,'direct-success-count',ctx,report)
 for ordinal in range(1,len(events)+1):
  calls=[0]
  def fail(fd):
   calls[0]+=1
   if calls[0]==ordinal:raise OSError('INDEPENDENT fsync '+str(ordinal))
   return real_sync(fd)
  name='direct-sync-'+str(ordinal)
  with patch.object(q.os,'fsync',side_effect=fail):
   try:q.write_evidence(c.snapshot,name,ctx,report)
   except OSError:pass
  files=[p.relative_to(root/name).as_posix() for p in (root/name).rglob('*') if p.is_file()];assert files==['failure.json'],(ordinal,files)
  assert not list(root.glob('.quote-pending-*'))
 results.append({'case':'each_direct_fsync_position','positions':len(events),'all_failure_only':True})
 # Existing path, including a symlink, is never adopted or cleaned.
 for name in ('historical','historical-link'):
  if name.endswith('link'):(root/name).symlink_to('historical',target_is_directory=True)
  try:q.write_evidence(c.snapshot,name,ctx,report)
  except FileExistsError:pass
  else:raise AssertionError('existing output accepted')
 assert (old/'candidate.md').read_bytes()==b'KEEP historical candidate';assert (root/'historical-link').is_symlink()
 # An unrelated addition inside a private stage must survive cleanup; owned metrics do not.
 stage_names=[]
 def add_foreign_then_fail(src,dst,*a,**kw):
  stage=root/src;stage_names.append(src);(stage/'FOREIGN-sentinel.txt').write_bytes(b'KEEP foreign staged data');raise OSError('INDEPENDENT rename failed with foreign file')
 with patch.object(q.os,'rename',side_effect=add_foreign_then_fail):
  try:q.write_evidence(c.snapshot,'foreign-stage-case',ctx,report)
  except OSError:pass
 for name in stage_names:
  stage=root/name;assert (stage/'FOREIGN-sentinel.txt').read_bytes()==b'KEEP foreign staged data';assert sorted(p.name for p in stage.iterdir())==['FOREIGN-sentinel.txt']
 assert sorted(p.name for p in (root/'foreign-stage-case').iterdir())==['failure.json']
 results.append({'case':'unknown_staged_file_preserved_owned_success_removed','foreign_hidden_stage_not_auto_consumed':True})
 assert (root/'unrelated.txt').read_bytes()==b'KEEP unrelated';assert (old/'candidate.md').read_bytes()==b'KEEP historical candidate';c.snapshot.close()
# Whole assembly rename failure and later-entry rejection, checked independently of old test assertions.
for kind in ('rename','finalizer','gate','invariants'):
 with tempfile.TemporaryDirectory(dir=B,prefix='TEST-independent-assembly-') as d:
  root=Path(d);f=t.Fixture(root);ns,_=t.prepare_test_helper(root,f,second=None if kind=='rename' else kind);sentinel=root/'HISTORICAL';sentinel.write_bytes(b'KEEP')
  error=None
  try:
   with contextlib.redirect_stdout(io.StringIO()):
    if kind=='rename':
     with patch.object(q.os,'rename',side_effect=OSError('INDEPENDENT assembly rename failure')):ns['assemble'](root,False,'TEST-ONLY-registry.json',f.sha,'assembly-failure')
    else:ns['assemble'](root,False,'TEST-ONLY-registry.json',f.sha,'assembly-failure')
  except (OSError,ValueError) as e:error=repr(e)
  assert error;files=[p.relative_to(root/'assembly-failure').as_posix() for p in (root/'assembly-failure').rglob('*') if p.is_file()];assert files==['failure.json'],files;assert sentinel.read_bytes()==b'KEEP';assert not list(root.glob('.quote-pending-*'))
  results.append({'case':'assembly_'+kind,'error':error,'files':files})
(B/'independent-transactions-results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2));print(json.dumps(results,ensure_ascii=False))
