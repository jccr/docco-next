import js from '@eslint/js'
import globals from 'globals'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import importPlugin from 'eslint-plugin-import'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        Polymer: 'readonly'
      }
    },
    plugins: {
      n: nPlugin,
      promise: promisePlugin,
      import: importPlugin
    },
    rules: {
      'indent': ['error', 2, { 'ignoreComments': true }],
      'no-var': 'error',
      'require-atomic-updates': 'off',
      'brace-style': 'off',
      'new-cap': ['error', { 'capIsNewExceptions': ['Polymer', 'LabelsMixin', 'NativeReflectorMixin', 'FormElementMixin', 'StyleableMixin', 'InputMixin', 'ThemeableMixin', 'AddHasValueAttributeMixin'] }],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single']
    }
  }
]
