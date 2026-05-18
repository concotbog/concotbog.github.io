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
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
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
