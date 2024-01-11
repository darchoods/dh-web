module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false,
    },
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': 'off',
    'no-tabs': 'off',
    'global-require': 'off',
    'handle-callback-err': [
      'error',
      '^(err|error)$',
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'no-catch-shadow': 'error',
    'no-continue': 'off',
    'no-div-regex': 'warn',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    // enable console for this project
    'no-console': 'off',
    'no-multi-assign': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
        },
      },
    ],
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'quote-props': [
      1,
      'as-needed',
      {
        unnecessary: true,
      },
    ],
    semi: [
      'error',
      'always',
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'func-names': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      functions: 'never',
      arrays: 'always-multiline',
      imports: 'always-multiline',
      exports: 'never',
      objects: 'always-multiline',
    }],
    'no-extra-semi': 'off',
    complexity: 'off',
    'no-prototype-builtins': 'off',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/no-unused-properties': ['error', {
      groups: ['props'],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1,
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/html-indent': ['error', 2, {
      baseIndent: 1,
    }],
    'vue/order-in-components': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/no-v-html': ['off'],
  },
};
