import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:"https://91e0acf938eb.ngrok-free.app",
    allowedHosts:true,
  }
  
  
})
