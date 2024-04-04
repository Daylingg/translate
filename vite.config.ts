///<reference types='vitest'/>    
//para poner la referencia de los tipos <reference types='vitest'/>


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  }
})
