import linaria from '@linaria/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const alias = {
  '@learn-linaria/core': resolve(__dirname, '../core/src'),
};

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias,
  },
  plugins: [
    react(),
    linaria({
      sourceMap: true,
      babelOptions: {
        plugins: [
          // linaria にエイリアスパスを認識させるための措置。
          [
            'module-resolver',
            {
              alias,
            },
          ],
        ],
        // linaria のスタイル定義内で外部ファイルから import した値が型情報ついてるとパースエラーになるので追加
        presets: ['@babel/preset-typescript'],
      },
    }),
  ],
});
