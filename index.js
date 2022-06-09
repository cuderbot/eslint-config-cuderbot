module.exports = {
  extends: [
    './rules/best-practices',
    './rules/error',
    './rules/es6',
    './rules/import-sort',
    './rules/import',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  plugins: ['import', 'simple-import-sort', 'security-node', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
