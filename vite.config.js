import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Entry point: index.html -> /src/main.tsx (TSX được hỗ trợ mặc định)
export default defineConfig({
  plugins: [react()],
})
