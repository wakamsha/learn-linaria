import { createUserConfig } from '@learn-linaria/builder';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig(
  (): UserConfig =>
    createUserConfig({
      basePath: import.meta.dirname,
      port: 3001,
    }),
);
