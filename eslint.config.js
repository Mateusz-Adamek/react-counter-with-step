import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'build', 'coverage'] },

  js.configs.recommended,
  react.configs.flat.recommended,
  // Vite's React plugin uses the automatic JSX runtime, so React does not
  // need to be in scope for JSX. This turns off the rules that demand it.
  react.configs.flat['jsx-runtime'],

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      // This project does not use the prop-types package, and the rule would
      // otherwise demand a declaration for every prop in every component.
      // Turning it off rather than adding a dependency and boilerplate.
      'react/prop-types': 'off',
    },
  },

  // Vitest injects its API as globals (see `globals: true` in vite.config.js).
  {
    files: ['**/*.test.{js,jsx}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
      },
    },
  },

  // Config files run in Node, not the browser.
  {
    files: ['*.config.js'],
    languageOptions: { globals: globals.node },
  },
];
