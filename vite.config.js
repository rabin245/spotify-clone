import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const env = loadEnv('', process.cwd());

  return ({
    plugins: [react()],
    server: {
      // server proxy didnot work with netlify
      // proxy: {
      //   '/api': {
      //     target: env.VITE_JSONSERVER_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    }
  })
})
