from pathlib import Path
import sys,importlib.util,tempfile,json,contextlib,io,copy
B=Path(__file__).resolve().parent;C=B/'candidate';P=C/'kr-harness/publication/scripts/tests/test_reviewed_quote_classification.py';spec=importlib.util.spec_from_file_location('fixtures',P);t=importlib.util.module_from_spec(spec);spec.loader.exec_module(t);q=t.q
results=[]
def namespace(root,f):
 helper=C/'kr-harness/publication/scripts/humanize_publication.py';code=helper.read_text();ns={'__file__':str(helper),'__name__':'independent_helper'};exec(compile(code[:code.index('parser=argparse.ArgumentParser')],str(helper),'exec'),ns);ns['ROOT']=root;ns['SKILL']=t.SKILL
 (root/'book-kr').mkdir();source='TEST intro\n\n### 1. TEST fixture\n'+f.before;intro,entries,tail=ns['split'](source);entry=entries[0][1]
 for rel,text in [('book-kr/01-test.md',source),('source.md',source),('intro.md',intro),('tail.md',tail)]: (root/rel).write_text(text)
 (f.run/'entry_snapshot.md').write_text(entry);f.manifest.update({'source':'book-kr/01-test.md','source_sha256':ns['sha'](source)});f.manifest['entries'][0].update({'number':1,'entry_sha256':ns['sha'](entry)});(root/'manifest.json').write_bytes(t.encode(f.manifest));chapter=f.load();ctx=chapter.contexts[f.path];chapter.snapshot.close();return ns,ctx
for char in ('\x7f','\x85'):
 with tempfile.TemporaryDirectory(dir=B,prefix='TEST-url-') as d:
  f=t.Fixture(Path(d));f.payload['quotations'][0]['source']['url']='https://test.invalid/source'+char+'suffix';f.write();loaded=False
  try:c=f.load();c.snapshot.close();loaded=True
  except Exception as e:error=repr(e)
  results.append({'case':'source_url_control_'+hex(ord(char)),'loaded':loaded})
with tempfile.TemporaryDirectory(dir=B,prefix='TEST-finalizer-') as d:
 root=Path(d);f=t.Fixture(root);ns,ctx=namespace(root,f)
 (f.run/'09_finalize.json').write_bytes(t.encode({'status':'reject','reason':'Do not accept this final; rejected by independent finalizer.','classification_context':ctx.report()}))
 error=None
 try:
  with contextlib.redirect_stdout(io.StringIO()):ns['assemble'](root,False,'TEST-ONLY-registry.json',f.sha,'TEST-rejected-finalizer')
 except Exception as e:error=repr(e)
 results.append({'case':'explicit_rejected_finalizer_with_accept_word','raised':error,'candidate_created':(root/'TEST-rejected-finalizer/candidate.md').exists(),'assembly_created':(root/'TEST-rejected-finalizer/assembly.json').exists()})
 (f.run/'09_finalize.json').write_bytes(t.encode({'status':'accept'}))
 error=None
 try:
  with contextlib.redirect_stdout(io.StringIO()):ns['assemble'](root,False,'TEST-ONLY-registry.json',f.sha,'TEST-stale-finalizer')
 except Exception as e:error=repr(e)
 completion=root/'TEST-stale-finalizer/test-only/context.json';results.append({'case':'stale_finalizer_failure_leaves_gate_success_context','raised':error,'context':json.loads(completion.read_text()) if completion.exists() else None,'assembly_exists':(root/'TEST-stale-finalizer/assembly.json').exists()})
 # Valid finalizer but second assembly output write fails: do not hide artifact left by failure.
 (f.run/'09_finalize.json').write_bytes(t.encode({'status':'accept','classification_context':ctx.report()}))
 from unittest.mock import patch
 import os
 original_open=os.open
 def fail_second(path,*args,**kw):
  if path=='assembly.json':raise OSError('TEST-ONLY simulated assembly.json write failure')
  return original_open(path,*args,**kw)
 error=None
 try:
  with patch.object(os,'open',side_effect=fail_second),contextlib.redirect_stdout(io.StringIO()):ns['assemble'](root,False,'TEST-ONLY-registry.json',f.sha,'TEST-partial-write')
 except Exception as e:error=repr(e)
 results.append({'case':'partial_assembly_output_failure','raised':error,'candidate_created':(root/'TEST-partial-write/candidate.md').exists(),'assembly_created':(root/'TEST-partial-write/assembly.json').exists()})
(B/'adversarial-results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2));print(json.dumps(results,ensure_ascii=False,indent=2))
