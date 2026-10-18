"""TEST-ONLY synthetic approvals. No real institution/source adjudication."""
from pathlib import Path
import contextlib,copy,hashlib,io,json,os,subprocess,sys,tempfile,unittest
BASE=Path(__file__).resolve().parents[1];CANDIDATE=BASE/'candidate';SKILL=CANDIDATE/'.claude/skills/humanize-korean'
sys.path[:0]=[str(SKILL/'scripts'),str(SKILL/'references')]
import quote_context as q
import checks,verify_gates,metrics_v2,prepare_monolith_input as prep

def encode(obj):return json.dumps(obj,ensure_ascii=False,allow_nan=False).encode()
def br(data,a,b):return {'start':a,'end':b,'sha256':q.digest(data[a:b])}
class Fixture:
 def __init__(self,root,before=None,afterbody=None):
  self.root=Path(root);self.run=self.root/'_workspace/test-only';self.run.mkdir(parents=True)
  self.before=before or '- 비용: 돈은 들지 않습니다.\n- 쉽게: 문을 확인하세요.\n- 이득: TEST 기관의 원문을 소개합니다. 다른 설명입니다. "조건은 간단하며, 절차는 안전합니다".\n- 비고: 확인하세요.\n'
  self.body=afterbody or self.before
  self.after=self.body+'<!-- HUMANIZE-SUMMARY\nTEST-ONLY synthetic fixture\n-->\n'
  self.path='_workspace/test-only/01_input.txt';self.original=self.before.encode();self.final=self.after.encode()
  (self.run/'01_input.txt').write_bytes(self.original);(self.run/'final.md').write_bytes(self.final)
  metrics=metrics_v2.compute_all_v2(self.before);metrics['_text']=self.before;metrics.update(prep.compute_route_hint(metrics));metrics.pop('_text')
  (self.run/'00_metrics.json').write_bytes(encode(metrics))
  self.manifest={'genre':'essay','entries':[{'run_dir':'_workspace/test-only','input_sha256':q.digest(self.original),'route':metrics['route_hint']}]}
  (self.root/'manifest.json').write_bytes(encode(self.manifest))
  occ=next(o for o in q.occurrences(self.before) if o.field=='이득');bm=q.byte_map(self.before)
  occurrence={'field':occ.field,'ordinal':occ.ordinal}
  for key,pair in [('opening',occ.opening),('content',occ.content),('closing',occ.closing)]:occurrence[key]=br(self.original,bm[pair[0]],bm[pair[1]])
  a=self.before.index('TEST 기관의 원문을 소개합니다.');b=a+len('TEST 기관의 원문을 소개합니다.')
  source=self.before[occ.content[0]:occ.content[1]].encode();(self.root/'TEST-ONLY-source.txt').write_bytes(source)
  self.payload={'schema_version':1,'original':{'path':self.path,'sha256':q.digest(self.original),'byte_length':len(self.original)},'final_body':{'sha256':q.digest(self.body.encode()),'byte_length':len(self.body.encode())},'quotations':[{'occurrence':occurrence,'source_anchor':br(self.original,bm[a],bm[b]),'source':{'url':'https://test.invalid/TEST-ONLY','artifact':{'path':'TEST-ONLY-source.txt','sha256':q.digest(source)},'artifact_byte_length':len(source),'excerpt':br(source,0,len(source)),'language':'ko','rendering':'native_verbatim'}}]}
  self.review={'schema_version':1,'payload_sha256':'','decision':'approved','reviewer_role':'independent_source_reviewer','reviewer_id':'TEST-ONLY-independent-fixture','proposer_id':'TEST-ONLY-proposer-fixture','reviewed_original_sha256':q.digest(self.original),'reviewed_final_body_sha256':q.digest(self.body.encode()),'assessments':[{'field':'이득','occurrence_ordinal':occ.ordinal,'source_authenticity':'verified','direct_quotation':'verified','translation_or_verbatim_fidelity':'verified','original_attribution':'verified','final_attribution':'verified','reason':'TEST-ONLY synthetic semantic approval, not source verification.'}]}
  self.write()
 def write(self):
  payload=encode(self.payload);(self.root/'TEST-ONLY-payload.json').write_bytes(payload);self.review['payload_sha256']=q.digest(payload)
  review=encode(self.review);(self.root/'TEST-ONLY-review.json').write_bytes(review)
  self.registry={'schema_version':1,'status':'approved','records':[{'payload':{'path':'TEST-ONLY-payload.json','sha256':q.digest(payload)},'review':{'path':'TEST-ONLY-review.json','sha256':q.digest(review)}}]}
  self.write_registry()
 def write_registry(self):
  raw=encode(self.registry);(self.root/'TEST-ONLY-registry.json').write_bytes(raw);self.sha=q.digest(raw)
 def load(self):return q.ChapterContext(self.root/'manifest.json','TEST-ONLY-registry.json',self.sha)
 def cli(self,**flags):
  args=[sys.executable,str(SKILL/'scripts/verify_gates.py'),'--before',str(self.run/'01_input.txt'),'--after',str(self.run/'final.md'),'--json','--quote-registry','TEST-ONLY-registry.json','--quote-registry-sha256',self.sha,'--publication-manifest',str(self.root/'manifest.json'),'--classification-evidence-dir','TEST-ONLY-derived']
  return subprocess.run(args,capture_output=True,text=True)
class Classification(unittest.TestCase):
 def setUp(self):self.temp=tempfile.TemporaryDirectory(prefix='TEST-ONLY-quote-',dir=BASE);self.root=Path(self.temp.name);self.f=Fixture(self.root)
 def tearDown(self):self.temp.cleanup()
 def error(self,fragment):
  with self.assertRaisesRegex((ValueError,OSError),fragment):self.f.load()
 def gate(self,a,b,ctx=None):
  with contextlib.redirect_stdout(io.StringIO()):return verify_gates.evaluate_gate(a,b,'essay',ctx)
 def test_valid_cli_and_derived_evidence(self):
  p=self.f.cli();self.assertEqual(p.returncode,0,p.stdout+p.stderr)
  evidence=self.root/'TEST-ONLY-derived';self.assertTrue((evidence/'derived-metrics.json').is_file());self.assertTrue(json.loads((evidence/'context.json').read_text())['completed'])
  self.assertEqual((self.f.run/'01_input.txt').read_bytes(),self.f.original)
 def test_retained_bytes_and_argument_binding(self):
  chapter=self.f.load();ctx=chapter.context_for(self.f.run/'01_input.txt',self.f.run/'final.md','essay')
  (self.f.run/'final.md').write_bytes(b'changed after snapshot')
  self.assertEqual(self.gate(ctx.before_bytes,ctx.after_bytes,ctx)[0],0)
  with self.assertRaisesRegex(ValueError,'argument mismatch'):self.gate(ctx.before_bytes,b'other',ctx)
  with self.assertRaisesRegex(ValueError,'argument mismatch'):verify_gates.evaluate_gate(ctx.before_bytes,ctx.after_bytes,'blog',ctx)
  chapter.snapshot.close();self.error('summary|body')
 def test_body_whitespace_invalid_summary_only_valid(self):
  (self.f.run/'final.md').write_bytes(self.f.final.replace(b'TEST-ONLY synthetic fixture',b'only summary edited'))
  c=self.f.load();c.snapshot.close()
  (self.f.run/'final.md').write_bytes(b' '+self.f.final);self.error('final body')
 def test_duplicate_unknown_keys_nan_boolean_and_bom(self):
  for raw in (b'{"x":1,"x":2}',b'{"x":NaN}',b'{"x":1.0}',b'\xef\xbb\xbf{}'):
   with self.assertRaises(ValueError):q.strict_json(raw)
  for mutate in ('unknown','bool','negative','half','bad_sha'):
   p=copy.deepcopy(self.f.payload)
   if mutate=='unknown':p['skip']=True
   if mutate=='bool':p['quotations'][0]['occurrence']['content']['start']=True
   if mutate=='negative':p['quotations'][0]['occurrence']['content']['start']=-1
   if mutate=='half':p['quotations'][0]['occurrence']['content']['start']+=1
   if mutate=='bad_sha':p['original']['sha256']='A'*64
   old=self.f.payload;self.f.payload=p;self.f.write()
   with self.assertRaises((ValueError,UnicodeError)):self.f.load()
   self.f.payload=old;self.f.write()
 def test_stale_sha_and_duplicate_registry_records(self):
  (self.root/'TEST-ONLY-source.txt').write_text('changed');self.error('SHA mismatch')
  self.f=Fixture(self.root/'new');self.root=self.f.root
  self.f.registry['records']*=2;self.f.write_registry();self.error('duplicate registry ref')
 def test_field_anchor_and_original_manifest_mutations(self):
  self.f.payload['quotations'][0]['occurrence']['field']='비고';self.f.write();self.error('ordinal|complete')
  self.f=Fixture(self.root/'second');self.f.payload['quotations'][0]['source_anchor']['start']=0;self.f.write();self.error('slice SHA|same-field')
  self.f=Fixture(self.root/'third');(self.f.run/'01_input.txt').write_bytes(self.f.original+b' ');self.error('manifest/original')
 def test_route_mismatch_and_saved_history_untouched(self):
  old=(self.f.run/'00_metrics.json').read_bytes();self.f.manifest['entries'][0]['route']='heavy';(self.root/'manifest.json').write_bytes(encode(self.f.manifest));self.error('route mismatch');self.assertEqual((self.f.run/'00_metrics.json').read_bytes(),old)
 def test_source_excerpt_and_translation_review_fields(self):
  self.f.payload['quotations'][0]['source']['excerpt']['sha256']='0'*64;self.f.write();self.error('slice SHA')
  self.f=Fixture(self.root/'translated');self.f.payload['quotations'][0]['source']['rendering']='reviewed_translation';self.f.write();c=self.f.load();c.snapshot.close()
  self.f.review['assessments'][0]['final_attribution']='unverified';self.f.write();self.error('assessment decision')
 def test_symlink_fifo_path_and_inode_alias(self):
  for value in ('../x','/tmp/x','a//b','a/./b','a\\b','https://x'):
   with self.assertRaises(ValueError):q.relative_path(value)
  source=self.root/'TEST-ONLY-source.txt';source.unlink();source.symlink_to('TEST-ONLY-payload.json');self.error('Too many|symbolic')
  source.unlink();os.mkfifo(source);self.error('not regular')
  source.unlink();os.link(self.root/'TEST-ONLY-payload.json',source);self.error('inode alias')
 def test_unapproved_metadata_and_requested_invalid_no_fallback(self):
  (self.root/'TEST-ONLY-registry.json').write_bytes(b'{}');p=self.f.cli();self.assertEqual(p.returncode,3,p.stdout);self.assertIn('registry SHA',p.stderr);self.assertFalse((self.root/'TEST-ONLY-derived/context.json').exists())
 def test_manual_nested_ambiguous_and_source_artifact_reuse(self):
  text=self.f.before.replace('"조건은 간단하며, 절차는 안전합니다"','"조건은 「간단하며, 절차는 안전합니다」"')
  self.f=Fixture(self.root/'nested',text);self.error('nested|native')
  self.assertTrue(checks.protected_quote_spans('기관은 「그는 “조건은 복잡하며, 절차는 간단합니다”라고 말했다」라고 설명했다.'))
  snap=q.Snapshot(self.root);a=snap.read('TEST-ONLY-source.txt','source');self.assertEqual(a,snap.read('TEST-ONLY-source.txt','source'));snap.close()
 def test_no_registry_complete_multiplicity_and_wrapper_axes(self):
  quote='기관은 "조건은 복잡하며, 절차는 간단합니다"라고 설명했다.'
  original=quote+' '+quote+' '+('변경하지 않는 설명입니다. '*50)
  after=quote+' '+('변경하지 않는 설명입니다. '*50)
  code,report=self.gate(original.encode(),after.encode());self.assertLess(report['change_rate']['rate'],.5);self.assertIn('quote_altered',{f['code'] for f in report['golden']})
  self.assertTrue(checks.check_quotes(quote,quote.replace('"조건은','"추가 조건은')))
  repeated=quote+' '+quote
  frozen=q.frozen_keys(quote);self.assertEqual(len(q.capped_spans(repeated,frozen)),1)
  self.assertFalse(q.capped_spans(quote.replace('"조건은','"추가 조건은'),frozen))
 def test_original_two_reviewed_after_one_fidelity_not_body_error(self):
  # Deliberately semantically invalid TEST-ONLY review: hash binds an exact final
  # that drops one original occurrence; P3 must independently catch that loss.
  quote='"조건은 간단하며, 절차는 안전합니다"'
  a=self.f.before.replace(quote,quote+' '+quote)
  b=self.f.before
  self.f=Fixture(self.root/'bad-semantic-fixture',a,b)
  second=copy.deepcopy(self.f.payload['quotations'][0]);occ=q.occurrences(a)[1];bm=q.byte_map(a);second['occurrence']['ordinal']=occ.ordinal
  for name,span in [('opening',occ.opening),('content',occ.content),('closing',occ.closing)]:second['occurrence'][name]=br(a.encode(),bm[span[0]],bm[span[1]])
  self.f.payload['quotations'].append(second);assessment=copy.deepcopy(self.f.review['assessments'][0]);assessment['occurrence_ordinal']=occ.ordinal;self.f.review['assessments'].append(assessment);self.f.write()
  chapter=self.f.load();ctx=chapter.context_for(self.f.run/'01_input.txt',self.f.run/'final.md','essay');code,report=self.gate(ctx.before_bytes,ctx.after_bytes,ctx);self.assertIn('quote_altered',{f['code'] for f in report['golden']});chapter.snapshot.close()
 def test_preservation_full_text_axes(self):
  text='환자는 20분 기다려야 합니다. 상처를 씻어야 합니다. 의사는 확인해야 합니다.'
  _,report=self.gate(text.encode(),text.replace('20분','21분').encode());self.assertIn('number_injected',{x['code'] for x in report['golden']})
  _,report=self.gate(text.encode(),text.replace('야 합니다','니다').encode());self.assertTrue(report['modality']['lost_pairs'])
  code,report=self.gate((text*10).encode(),'다른 글입니다.'.encode());self.assertEqual(code,2);self.assertEqual(report['change_rate']['verdict'],'ABORT — 강제 중단. 윤문본 채택 금지')
class MoreAdversarial(unittest.TestCase):
 setUp=Classification.setUp
 tearDown=Classification.tearDown
 error=Classification.error
 gate=Classification.gate
 def test_sizes_depth_types_ranges_and_summary_shapes(self):
  for raw in (b'{"x":'+b'['*14+b'0'+b']'*14+b'}',b'{' + b' '*262144+b'}',b'{"x":"\\u0000"}',b'\xff'):
   with self.assertRaises((ValueError,UnicodeError)):q.strict_json(raw)
  for bad in (True,1.0,'1',-1,2**64):
   with self.assertRaises(ValueError):q.integer(bad)
  for raw in (b'body\n<!-- HUMANIZE-SUMMARY no newline -->',b'body\n<!-- HUMANIZE-SUMMARY\n-->extra',b'body\n<!-- HUMANIZE-SUMMARY\n--> -->'):
   with self.assertRaises(ValueError):q.final_body(raw)
 def test_directory_symlink_and_changed_during_read(self):
  from unittest.mock import patch
  (self.root/'link').symlink_to('_workspace',target_is_directory=True)
  snap=q.Snapshot(self.root)
  with self.assertRaises(OSError):snap.read('link/test-only/01_input.txt','test')
  snap.close()
  snap=q.Snapshot(self.root);original_read=q.os.read;changed=False
  def mutate(fd,n):
   nonlocal changed
   data=original_read(fd,n)
   if not changed:
    changed=True
    with (self.f.run/'01_input.txt').open('ab') as f:f.write(b' ')
   return data
  with patch.object(q.os,'read',side_effect=mutate):
   with self.assertRaisesRegex(ValueError,'changed during read'):snap.read(self.f.path,'original')
  snap.close()
 def test_no_registry_nested_duplicate_not_substitute(self):
  nested='기관은 「그는 “조건은 복잡하며, 절차는 간단합니다”라고 말했다」라고 설명했다.'
  separate='기관은 “조건은 복잡하며, 절차는 간단합니다”라고 설명했다.'
  self.assertTrue(checks.check_quotes(nested+' '+separate,nested))
 def test_requested_cli_missing_flags_no_success_evidence(self):
  p=subprocess.run([sys.executable,str(SKILL/'scripts/verify_gates.py'),'--before',str(self.f.run/'01_input.txt'),'--after',str(self.f.run/'final.md'),'--quote-registry','TEST-ONLY-registry.json','--json'],capture_output=True,text=True)
  self.assertEqual(p.returncode,3);self.assertIn('all classification flags',p.stderr)
  p=subprocess.run([sys.executable,str(SKILL/'scripts/verify_gates.py'),'--before',str(self.f.run/'01_input.txt'),'--after',str(self.f.run/'final.md'),'--quote-registry','','--json'],capture_output=True,text=True)
  self.assertEqual(p.returncode,3);self.assertIn('all classification flags',p.stderr)
 def test_wrong_context_run_and_review_binding(self):
  chapter=self.f.load()
  with self.assertRaisesRegex(ValueError,'after must'):chapter.context_for(self.f.run/'01_input.txt',self.f.run/'other.md','essay')
  chapter.snapshot.close()
  self.f.review['reviewed_final_body_sha256']='0'*64;self.f.write();self.error('review binding')
 def test_no_registry_schema_metadata_has_no_effect(self):
  a=self.f.before.encode();code,report=self.gate(a,a)
  self.assertEqual(code,1);self.assertTrue(report['s1_targets']);self.assertNotIn('classification_context',report)
 def test_fresh_helper_assembly_and_registry_context(self):
  helper=CANDIDATE/'kr-harness/publication/scripts/humanize_publication.py'
  code=helper.read_text();namespace={'__file__':str(helper),'__name__':'candidate_helper'}
  exec(compile(code[:code.index('parser=argparse.ArgumentParser')],str(helper),'exec'),namespace)
  namespace['ROOT']=self.root;namespace['SKILL']=SKILL
  (self.root/'book-kr').mkdir()
  source='TEST intro\n\n### 1. TEST fixture\n'+self.f.before
  # Use the helper splitter to preserve its exact separator accounting.
  intro,entries,tail=namespace['split'](source);entry=entries[0][1]
  (self.root/'book-kr/01-test.md').write_text(source)
  (self.root/'source.md').write_text(source);(self.root/'intro.md').write_text(intro);(self.root/'tail.md').write_text(tail)
  (self.f.run/'entry_snapshot.md').write_text(entry)
  self.f.manifest.update({'source':'book-kr/01-test.md','source_sha256':namespace['sha'](source)})
  self.f.manifest['entries'][0].update({'number':1,'entry_sha256':namespace['sha'](entry)})
  (self.root/'manifest.json').write_bytes(encode(self.f.manifest))
  chapter=self.f.load();ctx=chapter.contexts[self.f.path];chapter.snapshot.close()
  (self.f.run/'09_finalize.json').write_bytes(encode({'status':'accept','classification_context':ctx.report()}))
  with contextlib.redirect_stdout(io.StringIO()):namespace['assemble'](self.root,False,'TEST-ONLY-registry.json',self.f.sha,'TEST-ONLY-assembly')
  result=json.loads((self.root/'TEST-ONLY-assembly/assembly.json').read_text());self.assertEqual(result['registry_sha256'],self.f.sha);self.assertFalse(result['published'])
  self.assertTrue((self.root/'TEST-ONLY-assembly/candidate.md').is_file())
  (self.f.run/'09_finalize.json').write_bytes(encode({'status':'accept'}))
  with contextlib.redirect_stdout(io.StringIO()),self.assertRaisesRegex(ValueError,'fresh finalizer context'):
   namespace['assemble'](self.root,False,'TEST-ONLY-registry.json',self.f.sha,'TEST-ONLY-stale-assembly')
  self.assertFalse((self.root/'TEST-ONLY-stale-assembly/assembly.json').exists())
 def test_ten_module_standalone_bundle_isolated_cli(self):
  import shutil
  with tempfile.TemporaryDirectory(prefix='TEST-ONLY-isolated-bundle-',dir=BASE) as temporary:
   isolated=Path(temporary);skill=isolated/'standalone';shutil.copytree(SKILL,skill,ignore=shutil.ignore_patterns('__pycache__'))
   names={p.name for p in (skill/'scripts').glob('*.py')}
   self.assertEqual(len(names),10);self.assertIn('quote_context.py',names)
   before='기관은 "조건은 복잡하며, 절차는 간단합니다"라고 설명했다. 환자는 20분 기다려야 합니다.'
   for name,after,expected,axis in [('identity',before,0,None),('number',before.replace('20분','21분'),1,'number_injected'),('quote',before.replace('복잡하며,','간단하며,'),1,'quote_altered')]:
    (isolated/'before').write_text(before);(isolated/'after').write_text(after)
    proc=subprocess.run([sys.executable,'-I',str(skill/'scripts/verify_gates.py'),'--before',str(isolated/'before'),'--after',str(isolated/'after'),'--json'],cwd=isolated,capture_output=True,text=True,env={k:v for k,v in os.environ.items() if k not in ('PYTHONPATH','PYTHONHOME')})
    self.assertEqual(proc.returncode,expected,proc.stdout+proc.stderr)
    report=json.loads(proc.stdout[proc.stdout.index('{'):])
    if axis:self.assertIn(axis,{x['code'] for x in report['golden']})
 def test_automatic_manual_exact_duplicate_and_field_scope(self):
  original=self.f.before.replace('다른 설명입니다. "','기관은 "').replace('안전합니다".','안전합니다"라고 설명했다.')
  self.f=Fixture(self.root/'auto-manual',original)
  chapter=self.f.load();ctx=chapter.contexts[self.f.path];self.assertEqual(len(ctx.keys),1);chapter.snapshot.close()
  a=original
  quoted='"조건은 간단하며, 절차는 안전합니다"'
  b=a.replace(quoted,'다른 설명').replace('- 비고: 확인하세요.','- 비고: 기관은 '+quoted+'라고 설명했다.')
  self.assertTrue(checks.check_quotes(a,b))
 def test_limits_overlap_anchor_and_incomplete_approval_axes(self):
  self.assertEqual(q.unique_position('aaaa','aa'),-1)
  bad=copy.deepcopy(self.f.payload);bad['quotations']*=33;self.f.payload=bad;self.f.write();self.error('quotation count')
  self.f=Fixture(self.root/'self-review');self.f.review['reviewer_id']=self.f.review['proposer_id'];self.f.write();self.error('self-review')
  self.f=Fixture(self.root/'unapproved');self.f.review['decision']='rejected';self.f.write();self.error('review status')
  self.f=Fixture(self.root/'unbalanced');text=self.f.before.replace('"조건은','“조건은');(self.f.run/'01_input.txt').write_bytes(text.encode());self.error('manifest/original')
if __name__=='__main__':unittest.main()
