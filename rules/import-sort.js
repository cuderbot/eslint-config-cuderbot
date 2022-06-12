module.exports = {
  rules: {
    // Enforce a convention in the order of require() / import statements.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': 'off',

    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/exports': 'error',

    // https://github.com/lydell/eslint-plugin-simple-import-sort/#custom-grouping
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000[^.]', '^\\u0000\\.'],
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require('module').builtinModules.join('|')})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages that start with "$" ex: $services or $routes i use this for separate from scope libs like nestjs.
          ['^($)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],

    // Enforces sorted import declarations within modules.
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',
  },
}
