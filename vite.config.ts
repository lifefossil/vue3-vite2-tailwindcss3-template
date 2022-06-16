import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, 'src'),
    "@pages": path.resolve(__dirname, 'src/pages'),
    "@comps": path.resolve(__dirname, 'src/components'),
    "@router": path.resolve(__dirname, 'src/router'),
    "@store": path.resolve(__dirname, 'src/store'),
    "@styles": path.resolve(__dirname, 'src/assets/styles'),
  },
  plugins: [vue()]
})
