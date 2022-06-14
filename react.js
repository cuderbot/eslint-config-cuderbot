module.exports = {
  extends: [
    './rules/best-practices',
    './rules/error',
    './rules/es6',
    './rules/import-sort',
    './rules/import',
    './rules/react',
    './rules/react-hooks',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  plugins: ['import', 'simple-import-sort', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
