import vue from "@vitejs/plugin-vue"
import * as path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tailwindcss from "tailwindcss"

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "modeUi",
      fileName: "mode-ui"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
