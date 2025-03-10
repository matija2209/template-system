import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: 'dev',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: '../dist-dev',
    },
    css: {
        postcss: './postcss.config.js',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname),
        },
    },
});
