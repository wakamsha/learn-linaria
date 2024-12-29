// @ts-check
import { essentials, react, typescript } from '@wakamsha/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/dist/**', '**/vitest.setup.*', '**/bin/*'],
  },

  ...essentials,
  ...react,
  ...typescript,

  {
    rules: {
      'import/no-extraneous-dependencies': ['off'],
    },
  },

  {
    files: ['**/*.config.*'],
    rules: {
      'import/no-default-export': ['off'],
      'unicorn/filename-case': ['off'],
    },
  },

  /* prettier */
  eslintConfigPrettier,
];
