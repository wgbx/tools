import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  build: {
    minify: false,
    target: 'es2021',
    rollupOptions: {
      plugins: [
        visualizer({
          filename: './dist/stats.html',
          title: 'My App Bundle Report',
        })
      ]
    }
  },
  plugins: [vue()]
})
