import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/core/scripts.js"),
      fileName: "core/scripts.js",
    },
  },
  plugins: [
    react(),
    VitePluginSvgSpritemap("./src/core/icons/*.svg", {
      output: "core/sprites.svg",
    }),
  ],
});
