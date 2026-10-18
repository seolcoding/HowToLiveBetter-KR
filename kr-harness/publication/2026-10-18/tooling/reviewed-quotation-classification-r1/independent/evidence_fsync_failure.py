from pathlib import Path
import tempfile,sys,importlib.util,contextlib,io,json
from unittest.mock import patch
B=Path(__file__).resolve().parent;P=B/'candidate/kr-harness/publication/scripts/tests/test_reviewed_quote_classification.py';spec=importlib.util.spec_from_file_location('fixture_fsync',P);t=importlib.util.module_from_spec(spec);spec.loader.exec_module(t);q=t.q
with tempfile.TemporaryDirectory(dir=B,prefix='TEST-fsync-') as d:
 f=t.Fixture(Path(d));chapter=f.load();ctx=chapter.contexts[f.path]
 with contextlib.redirect_stdout(io.StringIO()):code,report=t.verify_gates.evaluate_gate(ctx.before_bytes,ctx.after_bytes,'essay',ctx)
 real=q.os.fsync;calls=0
 def fail(fd):
  global calls
  calls+=1
  if calls==3:raise OSError('TEST-ONLY context fsync failure')
  return real(fd)
 error=None
 try:
  with patch.object(q.os,'fsync',side_effect=fail):q.write_evidence(chapter.snapshot,'TEST-derived-fsync',ctx,report)
 except Exception as e:error=repr(e)
 p=Path(d)/'TEST-derived-fsync/context.json';obj={'raised':error,'completion_marker_exists':p.exists(),'completion':json.loads(p.read_text()) if p.exists() else None};(B/'evidence-fsync-failure.json').write_text(json.dumps(obj,indent=2));print(error,'completion marker exists:',p.exists());chapter.snapshot.close()
