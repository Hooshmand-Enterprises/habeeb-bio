module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:lit/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'lit/no-invalid-html': 'warn',
    quotes: [2, 'single', 'avoid-escape'],
  },
};
