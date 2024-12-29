import { createUserConfig } from '@learn-linaria/builder';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig(({ mode }): UserConfig => {
  console.info({ mode });

  return createUserConfig({
    basePath: import.meta.dirname,
  });
});
