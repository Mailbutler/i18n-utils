export type ReportOptions = {
  srcFiles: string | string[];
  languageFiles: string | string[];
  output?: string;
  add?: boolean;
  remove?: boolean;
  normalize?: boolean;
  ci?: boolean;
  separator?: string;
  detectDuplicates?: boolean;
};

export type SimpleFile = {
  fileName: string;
  path: string;
  content: string;
};

export type I18NItem = {
  line?: number;
  path: string;
  file?: string;
  language?: string;
};

export type I18NDuplicatedItem = {
  path: string;
  language: string;
  files: string[];
};

export type I18NItemWithBounding = I18NItem & {
  previousCharacter: string;
  nextCharacter: string;
};

export type I18NLanguage = {
  [language: string]: I18NItem[];
};

export type I18NReport = {
  missingKeys: I18NItem[];
  unusedKeys: I18NItem[];
  duplicatedKeys: I18NDuplicatedItem[];
  maybeDynamicKeys: I18NItem[];
};
