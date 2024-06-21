import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ModuleFederation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
