import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    ViteImageOptimizer({
      cache: true,
      includePublic: true,
      logStats: true,
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 70,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
          },
          "removeViewBox",
        ],
      },
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: false,
  },
});
