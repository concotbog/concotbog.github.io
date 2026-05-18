import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteImagemin({
      optipng: {
        optimizationLevel: 7,
      },
      jpegTran: {
        progressive: true,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
        ],
      },
      gifsicle: {
        optimizationLevel: 3,
      },
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: false,
  },
});
