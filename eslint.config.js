module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: false,
      },
    },
    plugins: ['@angular-eslint', '@typescript-eslint', 'import'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@angular-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@angular-eslint/no-empty-lifecycle-method': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      '@angular-eslint/component-selector': ['error', { 'type': 'element', 'prefix': 'app', 'style': 'kebab-case' }],
      '@angular-eslint/directive-selector': ['error', { 'type': 'attribute', 'prefix': 'app', 'style': 'camelCase' }],
    },
  };
  