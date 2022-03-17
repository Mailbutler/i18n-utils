import { initCommand, resolveConfig } from '@/config-file';
import defaultConfig from '@/config-file/i18n-utils.config';
import rimraf from 'rimraf';

describe('file: config-file/index', () => {
  it('Init and Read the config file.', (done) => {
    initCommand();

    const config = resolveConfig();

    expect(config).toEqual(
      expect.objectContaining({
        srcFiles: defaultConfig.srcFiles,
        languageFiles: defaultConfig.languageFiles
      })
    );

    rimraf('./i18n-utils.config.js', () => {
      done();
    });
  });
});
