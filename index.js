module.exports = {
  extends: [
    './rules/best-practices',
    './rules/error',
    './rules/es6',
    './rules/import-sort',
    './rules/import',
    './rules/node',
    './rules/react-a11y',
    './rules/react',
    './rules/react-hooks',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  plugins: ['import', 'simple-import-sort', 'security-node', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
