import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import './Foo.js' // should be './foo.js'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
})