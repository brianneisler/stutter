module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['prettier'],
  globals: {
    example: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'import',
    'prettier',
    'sort-destructure-keys',
    'sort-imports-es6-autofix',
    'sort-keys-fix'
  ],
  root: true,
  rules: {
    'array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: false,
        objectsInArrays: false
      }
    ],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'comma-dangle': ['error', 'never'],
    curly: 'error',
    'eol-last': 'error',
    'for-direction': 'error',
    'func-names': 'off',
    'getter-return': 'error',
    'id-length': [
      'error',
      {
        exceptions: ['e', 'i', 'n', 't', 'x', 'y', 'z', '_', '$'],
        max: 50,
        min: 2,
        properties: 'never'
      }
    ],
    'import/default': 'error',
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'no-alert': 'error',
    'no-async-promise-executor': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'error',
    'no-empty': 'off',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-shadow': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-curly-newline': 'off',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: false, object: true }],
    'prettier/prettier': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'spaced-comment': 'error',
    strict: ['error', 'never']
  }
}
