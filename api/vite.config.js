import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import viteReact from '@vitejs/plugin-react'; //importamos la libreria para react
import React from 'react';


export default defineConfig({
    plugins: [
        react(), //ponemos libreria
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
