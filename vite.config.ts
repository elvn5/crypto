import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    proxy: {
      // Matches requests that start with '/api'
      '/api': {
        // Target URL for the proxy
        target: 'https://user26614.requestly.tech/test',
        // Change origin to match the target server
        changeOrigin: true,
        // Allow insecure connections for development
        secure: false,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
})
