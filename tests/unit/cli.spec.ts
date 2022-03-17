import path from 'path';
import { exec, ExecException } from 'child_process';
import rimraf from 'rimraf';

function runCLI(args: string[] = []): Promise<{
  code: number;
  error: ExecException | null;
  stdout: string;
  stderr: string;
}> {
  return new Promise((resolve) => {
    exec(
      `node ${path.resolve(__dirname + '../../../bin/i18n-utils.js')} ${args.join(' ')}`,
      { cwd: '.' },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr
        });
      }
    );
  });
}

describe('i18n-utils CLI', () => {
  it('Fail with no arugments, and give a hint.', async () => {
    const result = await runCLI();

    expect(result.code).not.toBe(0);
    expect(result.stderr).toContain(`Required configuration srcFiles is missing.`);
  });

  it('Show help', async () => {
    const result = await runCLI(['--help']);
    expect(result.code).toBe(0);
    expect(result.stdout).toContain('Usage:');
    expect(result.stdout).toContain('$ i18n-utils.js');
    expect(result.stdout).toContain(`Create a report from a glob of your source files and your language files.`);
    expect(result.stdout).toContain(`init`);
  });

  describe('Report Command', () => {
    it('Run the command with defined options', async () => {
      rimraf.sync('./i18n-utils.config.js');

      expect((await runCLI(['--srcFiles', `'./tests/fixtures/src-files/**/*.?(vue|js)'`])).code).not.toBe(0); // we expect a fail if there's no languageFiles option

      expect(
        (
          await runCLI([
            '--srcFiles',
            `'./tests/fixtures/src-files/**/*.?(vue|js)'`,
            '--languageFiles',
            `'./tests/fixtures/lang/**/*.?(json|yml|yaml)'`
          ])
        ).code
      ).toBe(0);

      expect(
        (
          await runCLI([
            '--srcFiles',
            `'./tests/fixtures/src-files/**/*.?(vue|js)'`,
            '--languageFiles',
            `'./tests/fixtures/lang/**/*.?(json|yml|yaml)'`,
            '--output',
            `'/dev/null'`
          ])
        ).code
      ).toBe(0);

      // The --add option literally adds keys to our fixtures, which breaks further tests.
      // expect((await runCLI([
      //   '--srcFiles',
      //   `'./tests/fixtures/src-files/**/*.?(vue|js)'`,
      //   '--languageFiles',
      //   `'./tests/fixtures/lang/**/*.?(json|yml|yaml)'`,
      //   '--output',
      //   `'/dev/null'`,
      //   '--add',
      // ])).code).toBe(0);

      // The --remove option literally remove keys from our fixtures, which breaks further tests.
      // expect((await runCLI([
      //   '--srcFiles',
      //   `'./tests/fixtures/src-files/**/*.?(vue|js)'`,
      //   '--languageFiles',
      //   `'./tests/fixtures/lang/**/*.?(json|yml|yaml)'`,
      //   '--output',
      //   `'/dev/null'`,
      //   '--remove',
      // ])).code).toBe(0);

      expect(
        (
          await runCLI([
            '--srcFiles',
            `'./tests/fixtures/src-files/**/*.?(vue|js)'`,
            '--languageFiles',
            `'./tests/fixtures/lang/**/*.?(json|yml|yaml)'`,
            '--output',
            `'/dev/null'`,
            '--ci'
          ])
        ).code
      ).not.toBe(0); // We expect this to fail if CI is true, because there's missing and unused keys
    });
  });

  describe('Init Command', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.resetAllMocks();
    });

    it('creates a config file', async () => {
      expect((await runCLI(['init'])).code).toBe(0);

      rimraf.sync('./i18n-utils.config.js');
    });
  });
});
