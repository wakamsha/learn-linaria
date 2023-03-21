import { createUserConfig } from '@learn-linaria/builder';
import { resolve } from 'path';
import { defineConfig, UserConfig } from 'vite';

const alias = {
  '@learn-linaria/core': resolve(__dirname, '../core/src'),
};

// eslint-disable-next-line import/no-default-export
export default defineConfig(
  (): UserConfig =>
    createUserConfig({
      basePath: __dirname,
      alias,
      port: 3001,
    }),
);
