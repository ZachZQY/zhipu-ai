import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'custom-component',
      filename: 'remoteEntry.js',
      exposes: {
        './main': './src/components',
      },
      shared: [
        'classnames',
        'lodash',
        'moment',
        'react',
        'react-dom',
        'react-router-dom',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5819,
  },
  preview: {
    host: true,
    port: 6326,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
