import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ammoo.lk/', // set to '/<repo-name>/' for GitHub Pages repo site; use '/' for user/org site
})
