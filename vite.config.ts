import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'image/ODOP.jpeg',
        'assets/images/carpet-weaving-loom.jpg',
        'assets/images/blue-pottery-artisan.jpg',
        'assets/images/woodcarving-tools.jpg',
        'assets/images/handloom-rug-detail.jpg',
        'assets/images/painted-plates.jpg',
        'assets/images/artisan-terracotta-woodcraft.jpg',
      ],
      manifest: {
        name: 'ODOP Bharat',
        short_name: 'ODOP Bharat',
        description: 'One District, One Product, Infinite Reach',
        theme_color: '#0B2A4A',
        background_color: '#F4F7FA',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/image/ODOP.jpeg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any',
          },
          {
            src: '/image/ODOP.jpeg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/commons\.wikimedia\.org\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'product-images',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});
