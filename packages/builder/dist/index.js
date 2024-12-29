import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import path from 'node:path';
export function createUserConfig({ basePath, port = 3000, define = {}, build = {}, alias = {} }) {
    return {
        define,
        root: path.resolve(basePath, './'),
        build: {
            sourcemap: true,
            ...build,
        },
        server: {
            port,
            host: true,
            open: true,
        },
        resolve: {
            alias,
        },
        plugins: [
            react(),
            wyw({
                babelOptions: {
                    presets: ['@babel/preset-typescript'],
                },
            }),
        ],
    };
}
