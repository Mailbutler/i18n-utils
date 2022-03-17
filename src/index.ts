export * from './config-file';
export * from './create-report';
export * from './types';

process.on('uncaughtException', (err) => {
  console.error('[i18n-utils]', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('[i18n-utils]', err);
  process.exit(1);
});
