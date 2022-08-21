import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: [{ find: /^~/, replacement: '' }],
    },
    server: {
        host: true,
        open: false,
    },
});
