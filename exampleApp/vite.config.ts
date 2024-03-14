import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  
  server:{
		// host true ensure that we can acess the app from outside container
    host:true,
    port:8000,
    // usePolling will ensure that node's auto reload gonna work.
    watch:{
      usePolling:true
    }
  },

  preview:{
    port:8000
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
