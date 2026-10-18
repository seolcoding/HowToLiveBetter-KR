"""Review-bound full-entry folding through the production integration CLI."""
import hashlib
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT = Path('/workspace/HowToLiveBetter-KR')
SCRIPT = Path('/workspace/.cache/howtolivebetter/publication/footnote-identity-implementation-r1/candidate/kr-harness/publication/scripts/humanize_publication.py')


def sha(text):
    return hashlib.sha256(text.encode()).hexdigest()


class IntegrationContinuations(unittest.TestCase):
    def test_reviewed_folding_and_protected_structure(self):
        with tempfile.TemporaryDirectory(prefix='integration-fold-') as temporary:
            root = Path(temporary)
            public = root / 'book-kr/01-test.md'
            public.parent.mkdir()
            folder = root / 'kr-harness/publication/2026-10-18/ch01'
            folder.mkdir(parents=True)
            script = root / 'runner.py'
            script.write_text(SCRIPT.read_text().replace(
                'ROOT = Path(__file__).resolve().parents[3]', f'ROOT = Path({str(root)!r})'))
            entry = ('### 1. 검사받으세요\n<!-- 成本标签: 钱=少 -->\n'
                     '- 비용: 1분 듭니다.\n- 쉽게: 감염된 사람은\n'
                     '  상대에게 한 건도 옮기지 않았습니다.\n'
                     '- 이득: 진단 비율은 2.8%입니다.\n- 근거등급: A\n'
                     '- 출처: https://example.org/study\n- 비고: 검사에는\n'
                     '  예외가 있습니다.\n  의사에게 물어보세요.\n\n')
            replacement = entry.replace('\n  ', ' ')
            review = '독립 리뷰가 전체 항목과 줄 합치기를 승인했습니다.\n'
            (folder / 'review.md').write_text(review)
            ref = {'path': 'review.md', 'sha256': sha(review)}
            (folder / 'changes.json').write_text('{"fold": "쉽게와 비고의 모든 사실 보존"}')
            changes = {'path': 'changes.json', 'sha256': sha((folder / 'changes.json').read_text())}

            def check(before=entry, after=replacement, mutate=None, accepted=False):
                source = '# 검사\n\n' + before
                public.write_text(source)
                (folder / 'source.md').write_text(source)
                (folder / 'candidate.md').write_text(source)
                (folder / 'proposal.md').write_text(after)
                (folder / 'manifest.json').write_text(json.dumps({
                    'source': 'book-kr/01-test.md', 'source_sha256': sha(source), 'entries': [1]}))
                (folder / 'assembly.json').write_text(json.dumps({
                    'source_sha256': sha(source), 'candidate_sha256': sha(source),
                    'upstream_gates': 'accepted', 'entries': 1}))
                plan = {'status': 'approved', 'review': ref.copy(),
                        'source_sha256': sha(source), 'candidate_sha256': sha(source),
                        'operations': [{'status': 'approved', 'review': ref.copy(), 'entry': 1,
                                        'base': 'baseline', 'before_sha256': sha(before),
                                        'replacement': {'path': 'proposal.md', 'sha256': sha(after)},
                                        'changes': changes.copy()}]}
                if mutate:
                    mutate(plan)
                (folder / 'integration-plan.json').write_text(json.dumps(plan))
                output = folder / 'reviewed-candidate.md'
                output.unlink(missing_ok=True)
                result = subprocess.run(['python3', str(script), 'integrate', '1', '--date', '2026-10-18'],
                                        capture_output=True, text=True)
                self.assertEqual(result.returncode, 0 if accepted else 1, result.stdout + result.stderr)
                self.assertEqual(public.read_text(), source)
                self.assertEqual((folder / 'candidate.md').read_text(), source)
                if accepted:
                    self.assertEqual(output.read_text(), '# 검사\n\n' + after)
                    for fact in ('상대에게 한 건도 옮기지 않았습니다.', '예외가 있습니다.', '의사에게 물어보세요.'):
                        self.assertIn(fact, output.read_text())
                else:
                    self.assertFalse(output.exists())

            check(accepted=True)
            for label, after in {
                'unindented prose': replacement.replace('- 이득:', '추가 문장입니다.\n- 이득:'),
                'new continuation': replacement.replace('- 이득:', '  새 문장입니다.\n- 이득:'),
                'missing label': replacement.replace('- 이득: 진단 비율은 2.8%입니다.\n', ''),
                'duplicate label': replacement.replace('- 이득:', '- 비용: 중복입니다.\n- 이득:'),
                'reordered labels': replacement.replace('- 비용:', '- 임시:').replace('- 쉽게:', '- 비용:').replace('- 임시:', '- 쉽게:'),
                'tag': replacement.replace('钱=少', '钱=多'),
                'grade': replacement.replace('근거등급: A', '근거등급: B'),
                'number': replacement.replace('### 1.', '### 2.'),
                'heading': replacement + '## 새 제목\n',
                'unknown label': replacement.replace('- 이득:', '- 다른칸: 내용\n- 이득:'),
                'comment': replacement.replace('- 이득:', '<!-- 추가 -->\n- 이득:'),
                'inline comment': replacement.replace('1분 듭니다.', '1분 듭니다. <!-- 추가 -->'),
            }.items():
                with self.subTest(after=label):
                    check(after=after)
            for line in ('추가 문장입니다.', '  - 알수없음: 내용', '  <!-- 보호 -->',
                         '  ## 보호 제목', '  1. 목록입니다.', '  알수없음: 내용'):
                with self.subTest(before=line):
                    check(before=entry.replace('- 이득:', line + '\n- 이득:'))
            check(before=entry.replace('- 비용:', '  범위 밖 문장입니다.\n- 비용:'))
            check(before=entry.replace('1분 듭니다.', '1분 듭니다. <!-- 보호 -->'))
            check(before=entry.replace('  상대에게', '\n  상대에게'))
            for key in ('review', 'replacement', 'changes'):
                with self.subTest(stale=key):
                    check(mutate=lambda p, key=key: p['operations'][0][key].update(sha256='0' * 64))
            check(mutate=lambda p: p['operations'][0].update(status='pending'))
            check(mutate=lambda p: p['operations'][0].update(before_sha256='0' * 64))
            check(mutate=lambda p: p.update(candidate_sha256='0' * 64))


if __name__ == '__main__':
    unittest.main()
