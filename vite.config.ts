import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "@astrojs/sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "16578c91d84e.ngrok-free.app",
      ".ngrok-free.dev", // This allows any ngrok-free.dev subdomain
    ],
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    mode === "development" && componentTagger(),
    sitemap({
      filter: (page) => !page.includes("admin") && !page.includes("private"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip'
          ],
          'form-vendor': ['@hookform/resolvers', 'react-hook-form', 'zod'],
          'animation-vendor': ['framer-motion'],
          'chart-vendor': ['recharts'],
          'date-vendor': ['date-fns', 'react-day-picker'],
        },
        // Increase chunk size limit and enable chunk size reporting
        chunkSizeWarningLimit: 1000,
      },
    },
    // Enable source maps for production (optional)
    sourcemap: true,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable CSS minification
    cssMinify: true,
  },
}));
