module.exports = {
  plugins: ['import', 'simple-import-sort', 'security-node'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['rules/bestPractices'].map(require.resolve),
}
