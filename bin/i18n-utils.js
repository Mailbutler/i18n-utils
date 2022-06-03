#!/usr/bin/env node
// vim: set filetype=javascript:
/* eslint-disable */
'use strict';
const cli = require('cac')();
const { createI18NReport, initCommand, resolveConfig } = require('../dist/i18n-utils.umd.js');

cli
  .command('', 'Create a report from a glob of your source files and your language files.')
  .option(
    '--srcFiles <srcFiles>',
    '[string] The file(s) you want to extract i18n strings from. It can be a path to a folder or to a file. It accepts glob patterns. (ex. *, ?, (pattern|pattern|pattern)'
  )
  .option(
    '--languageFiles <languageFiles>',
    '[string] The language file(s) you want to compare your file(s) to. It can be a path to a folder or to a file. It accepts glob patterns (ex. *, ?, (pattern|pattern|pattern) '
  )
  .option(
    '--output [output]',
    '[string] Use if you want to create a json file out of your report. (ex. --output output.json)'
  )
  .option('--add', '[boolean] Use if you want to add missing keys into your json language files.')
  .option('--remove', '[boolean] Use if you want to remove unused keys from your json language files.')
  .option('--normalize', '[boolean] Use if you want to sort keys in your json language files.')
  .option(
    '--ci',
    '[boolean] The process will exit with exitCode=1 if at least one translation-key is missing (useful expecially if it is part of a CI pipeline).'
  )
  .option(
    '--detect-duplicates',
    '[boolean] The process will exit with exitCode=1 if at least one translation-key is found in multiple language files for the same locale.'
  )
  .option(
    '--separator <separator>',
    'Use if you want to override the separator used when parsing locale identifiers. Default is `.`'
  )
  .action((options) => {
    createI18NReport(resolveConfig(options));
  });

cli.command('init', 'Create a default i18n-utils config file.').action(initCommand);

cli.help();
cli.version(require('../package.json').version);
cli.parse();
