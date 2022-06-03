import fs from 'fs';
import { I18NDuplicatedItem, I18NItem, I18NItemWithBounding, I18NLanguage, I18NReport } from '../types';

function stripBounding(item: I18NItemWithBounding): I18NItem {
  return {
    path: item.path,
    file: item.file,
    line: item.line
  };
}

function mightBeDynamic(item: I18NItemWithBounding): boolean {
  return item.path.includes('${') && !!item.previousCharacter.match(/`/g) && !!item.nextCharacter.match(/`/g);
}

function dynamicRegex(item: I18NItem): RegExp {
  if (!item.path.match(/[\w\-]\$\{[^}]+\}/)) return new RegExp('^$'); // there must be more to the string then just the interpolated part

  return new RegExp(item.path.replace(/\$\{[^}]+\}/g, `\\w+`), 'i');
}

// Looping through the arays multiple times might not be the most effecient, but it's the easiest to read and debug. Which at this scale is an accepted trade-off.
export function extractI18NReport(i18nItems: I18NItemWithBounding[], languageFiles: I18NLanguage): I18NReport {
  const missingKeys: I18NItem[] = [];
  const unusedKeys: I18NItem[] = [];
  const duplicatedKeys: I18NDuplicatedItem[] = [];

  const maybeDynamicKeys: I18NItem[] = i18nItems
    .filter((item) => mightBeDynamic(item))
    .map((item) => stripBounding(item));

  const dynamicRegexes = maybeDynamicKeys.filter((item) => !!dynamicRegex(item)).map((item) => dynamicRegex(item));

  Object.keys(languageFiles).forEach((language) => {
    const languageItems = languageFiles[language];

    const duplicatedKeysInLanguage = languageItems.reduce((acc, languageItem) => {
      if (acc.find((item) => item.path === languageItem.path)) return acc;

      const duplicates = languageItems.filter((item) => item.path === languageItem.path);
      if (duplicates.length > 1) {
        acc.push({
          path: languageItem.path,
          files: duplicates.map(({ file }) => file ?? 'unknown'),
          language
        });
      }

      return acc;
    }, [] as { path: string; files: string[]; language: string }[]);

    const missingKeysInLanguage = i18nItems
      .filter((item) => !mightBeDynamic(item))
      .filter((item) => !languageItems.some((languageItem) => item.path === languageItem.path))
      .map((item) => ({ ...stripBounding(item), language }));

    const unusedKeysInLanguage = languageItems
      .filter(
        (languageItem) =>
          !i18nItems.some((item) => languageItem.path === item.path || languageItem.path.startsWith(item.path + '.')) &&
          !dynamicRegexes.some((regex) => regex.test(languageItem.path))
      )
      .map((languageItem) => ({ ...languageItem, language }));

    missingKeys.push(...missingKeysInLanguage);
    unusedKeys.push(...unusedKeysInLanguage);
    duplicatedKeys.push(...duplicatedKeysInLanguage);
  });

  return {
    missingKeys,
    unusedKeys,
    duplicatedKeys,
    maybeDynamicKeys
  };
}

export async function writeReportToFile(report: I18NReport, writePath: string): Promise<NodeJS.ErrnoException | void> {
  const reportString = JSON.stringify(report);
  return new Promise((resolve, reject) => {
    fs.writeFile(writePath, reportString, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}
