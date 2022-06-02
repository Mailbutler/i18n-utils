import path from 'path';

export const srcFiles = path.resolve(__dirname, './src-files/**/*.?(js|vue)');
export const srcFilesArray = [
  path.resolve(__dirname, './src-files/**/*.vue'),
  path.resolve(__dirname, './src-files/**/*.js')
];
export const languageFiles = path.resolve(__dirname, './lang/**/*.?(js|json|yml|yaml)');
export const languageFilesArray = [
  path.resolve(__dirname, './lang/**/*.js'),
  path.resolve(__dirname, './lang/**/*.yml'),
  path.resolve(__dirname, './lang/**/*.?(json|yaml)')
];
