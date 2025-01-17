export const expectedFromParsedSrcFiles = [
  {
    path: 'header.paragraphs.p_1',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/js-component.js',
    line: 2
  },
  {
    path: 'dynamic_${object?.code?.toUpperCase()}_key',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/js-component.js',
    line: 2
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/folder1/folder2/Deep.vue',
    line: 2
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/folder1/Nested.vue',
    line: 2
  },
  {
    path: "single \\' quote",
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 2
  },
  {
    path: 'single \\" quote',
    previousCharacter: '"',
    nextCharacter: '"',
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 3
  },
  {
    path: 'back \\` tick',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 4
  },
  {
    path: 'Early ',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 5
  },
  {
    path: 'parentheses',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 7
  },
  {
    path: 'square brackets',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 8
  },
  {
    path: 'curly brackets',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 9
  },
  {
    path: 'colon',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 10
  },
  {
    path: 'concatenation',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 12
  },
  {
    path: 'leading tab',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 13
  },
  {
    path: '${dynamicKey}',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/edge-cases.js',
    line: 16
  },
  {
    path: 'missing.english',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Missing.vue',
    line: 3
  },
  {
    path: 'missing.german',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Missing.vue',
    line: 4
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/InCode.vue',
    line: 8
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/InCode.vue',
    line: 14
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/InCode.vue',
    line: 33
  },
  {
    path: 'content.paragraph.p_1',
    previousCharacter: '"',
    nextCharacter: '"',
    file: './tests/fixtures/src-files/InCode.vue',
    line: 34
  },
  {
    path: 'content.paragraph.p.2',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/InCode.vue',
    line: 35
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 3
  },
  {
    path: 'header.title2',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 4
  },
  {
    path: 'content.paragraph.p_1',
    previousCharacter: '"',
    nextCharacter: '"',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 5
  },
  {
    path: 'Key used as default translation. Second sentence.',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 6
  },
  {
    path: 'content.paragraph.p.2',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 7
  },
  {
    path: 'content.link.b',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 9
  },
  {
    path: 'content.link.b',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 12
  },
  {
    path: 'content.link.b',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 15
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 18
  },
  {
    path: 'content.img.src_${var}',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 19
  },
  {
    path: 'CONTINENT_NAME_${this.origin.country_code}',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 20
  },
  {
    path: 'AUTO_bcc_${fieldName.toUpperCase()}_${mode.toUpperCase()}',
    previousCharacter: '`',
    nextCharacter: '`',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 21
  },
  {
    path: 'content.link.a',
    previousCharacter: '"',
    nextCharacter: '"',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 8
  },
  {
    path: 'content.link.a',
    previousCharacter: '"',
    nextCharacter: '"',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 11
  },
  {
    path: 'content.link.a',
    previousCharacter: '"',
    nextCharacter: '"',
    file: './tests/fixtures/src-files/Basic.vue',
    line: 14
  },
  {
    path: 'header.title',
    previousCharacter: "'",
    nextCharacter: "'",
    file: './tests/fixtures/src-files/Basic.vue',
    line: 17
  }
];

export const expectedFromParsedLanguageFiles = {
  de_DE: [
    {
      path: 'header.title',
      file: './tests/fixtures/lang/de_DE.js',
      line: 0
    },
    {
      path: 'header.title2',
      file: './tests/fixtures/lang/de_DE.js',
      line: 1
    },
    {
      path: 'content.paragraph.p.2',
      file: './tests/fixtures/lang/de_DE.js',
      line: 2
    },
    {
      path: 'content.link.a',
      file: './tests/fixtures/lang/de_DE.js',
      line: 3
    },
    {
      path: 'content.link.b',
      file: './tests/fixtures/lang/de_DE.js',
      line: 4
    },
    {
      path: 'Key used as default translation. Second sentence.',
      file: './tests/fixtures/lang/de_DE.js',
      line: 5
    },
    {
      path: 'missing.english',
      file: './tests/fixtures/lang/de_DE.js',
      line: 6
    },
    {
      path: 'unused_js',
      file: './tests/fixtures/lang/de_DE.js',
      line: 7
    },
    {
      path: 'duplicated_key',
      file: './tests/fixtures/lang/de_DE.js',
      line: 8
    },
    {
      path: 'content.paragraph.p_1',
      file: './tests/fixtures/lang/de_DE.yaml',
      line: 0
    },
    {
      path: 'unused_yaml',
      file: './tests/fixtures/lang/de_DE.yaml',
      line: 1
    },
    {
      path: 'duplicated_key',
      file: './tests/fixtures/lang/de_DE.yaml',
      line: 2
    }
  ],
  en_EN: [
    {
      path: 'header.title',
      file: './tests/fixtures/lang/en_EN.json',
      line: 0
    },
    {
      path: 'header.title2',
      file: './tests/fixtures/lang/en_EN.json',
      line: 1
    },
    {
      path: 'content.paragraph.p_1',
      file: './tests/fixtures/lang/en_EN.json',
      line: 2
    },
    {
      path: 'content.paragraph.p.2',
      file: './tests/fixtures/lang/en_EN.json',
      line: 3
    },
    {
      path: 'content.link.a',
      file: './tests/fixtures/lang/en_EN.json',
      line: 4
    },
    {
      path: 'content.link.b',
      file: './tests/fixtures/lang/en_EN.json',
      line: 5
    },
    {
      path: 'content.img.src_A',
      file: './tests/fixtures/lang/en_EN.json',
      line: 6
    },
    {
      path: 'Key used as default translation. Second sentence.',
      file: './tests/fixtures/lang/en_EN.json',
      line: 7
    },
    {
      path: 'missing.german',
      file: './tests/fixtures/lang/en_EN.json',
      line: 8
    },
    {
      path: 'unused_json',
      file: './tests/fixtures/lang/en_EN.json',
      line: 9
    },
    {
      path: 'dynamic_abc_key',
      file: './tests/fixtures/lang/en_EN.json',
      line: 10
    },
    {
      path: 'CONTINENT_NAME_AF',
      file: './tests/fixtures/lang/en_EN.json',
      line: 11
    },
    {
      path: 'AUTO_BCC_RECIPIENT_EQUAL',
      file: './tests/fixtures/lang/en_EN.json',
      line: 12
    }
  ]
};

export const expectedI18NReport = {
  missingKeys: [
    {
      path: 'header.paragraphs.p_1',
      file: './tests/fixtures/src-files/js-component.js',
      line: 2,
      language: 'de_DE'
    },
    {
      path: "single \\' quote",
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 2,
      language: 'de_DE'
    },
    {
      path: 'single \\" quote',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 3,
      language: 'de_DE'
    },
    {
      path: 'back \\` tick',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 4,
      language: 'de_DE'
    },
    {
      path: 'Early ',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 5,
      language: 'de_DE'
    },
    {
      path: 'parentheses',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 7,
      language: 'de_DE'
    },
    {
      path: 'square brackets',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 8,
      language: 'de_DE'
    },
    {
      path: 'curly brackets',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 9,
      language: 'de_DE'
    },
    {
      path: 'colon',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 10,
      language: 'de_DE'
    },
    {
      path: 'concatenation',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 12,
      language: 'de_DE'
    },
    {
      path: 'leading tab',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 13,
      language: 'de_DE'
    },
    {
      path: 'missing.german',
      file: './tests/fixtures/src-files/Missing.vue',
      line: 4,
      language: 'de_DE'
    },
    {
      path: 'header.paragraphs.p_1',
      file: './tests/fixtures/src-files/js-component.js',
      line: 2,
      language: 'en_EN'
    },
    {
      path: "single \\' quote",
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 2,
      language: 'en_EN'
    },
    {
      path: 'single \\" quote',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 3,
      language: 'en_EN'
    },
    {
      path: 'back \\` tick',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 4,
      language: 'en_EN'
    },
    {
      path: 'Early ',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 5,
      language: 'en_EN'
    },
    {
      path: 'parentheses',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 7,
      language: 'en_EN'
    },
    {
      path: 'square brackets',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 8,
      language: 'en_EN'
    },
    {
      path: 'curly brackets',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 9,
      language: 'en_EN'
    },
    {
      path: 'colon',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 10,
      language: 'en_EN'
    },
    {
      path: 'concatenation',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 12,
      language: 'en_EN'
    },
    {
      path: 'leading tab',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 13,
      language: 'en_EN'
    },
    {
      path: 'missing.english',
      file: './tests/fixtures/src-files/Missing.vue',
      line: 3,
      language: 'en_EN'
    }
  ],
  unusedKeys: [
    {
      path: 'unused_js',
      file: './tests/fixtures/lang/de_DE.js',
      line: 7,
      language: 'de_DE'
    },
    {
      path: 'duplicated_key',
      file: './tests/fixtures/lang/de_DE.js',
      line: 8,
      language: 'de_DE'
    },
    {
      path: 'unused_yaml',
      file: './tests/fixtures/lang/de_DE.yaml',
      line: 1,
      language: 'de_DE'
    },
    {
      path: 'duplicated_key',
      file: './tests/fixtures/lang/de_DE.yaml',
      line: 2,
      language: 'de_DE'
    },
    {
      path: 'unused_json',
      file: './tests/fixtures/lang/en_EN.json',
      line: 9,
      language: 'en_EN'
    }
  ],
  duplicatedKeys: [
    {
      path: 'duplicated_key',
      files: ['./tests/fixtures/lang/de_DE.js', './tests/fixtures/lang/de_DE.yaml'],
      language: 'de_DE'
    }
  ],
  maybeDynamicKeys: [
    {
      path: 'dynamic_${object?.code?.toUpperCase()}_key',
      file: './tests/fixtures/src-files/js-component.js',
      line: 2
    },
    {
      path: '${dynamicKey}',
      file: './tests/fixtures/src-files/edge-cases.js',
      line: 16
    },
    {
      path: 'content.img.src_${var}',
      file: './tests/fixtures/src-files/Basic.vue',
      line: 19
    },
    {
      path: 'CONTINENT_NAME_${this.origin.country_code}',
      file: './tests/fixtures/src-files/Basic.vue',
      line: 20
    },
    {
      path: 'AUTO_bcc_${fieldName.toUpperCase()}_${mode.toUpperCase()}',
      file: './tests/fixtures/src-files/Basic.vue',
      line: 21
    }
  ]
};
