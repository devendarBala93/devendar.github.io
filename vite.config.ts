import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project site: https://devendarbala93.github.io/devendar.github.io/
export default defineConfig({
  base: '/devendar.github.io/',
  plugins: [react(), tailwindcss()],
})
