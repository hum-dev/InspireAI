import { defineConfig } from "vite";
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
}));
