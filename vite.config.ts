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
      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
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
