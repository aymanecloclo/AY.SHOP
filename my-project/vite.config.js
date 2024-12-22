import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //   server: {
  //   https: {
  //     key: fs.readFileSync('./path/to/your/private-key.pem'),
  //     cert: fs.readFileSync('./path/to/your/certificate.pem')
  //   },
  //   open: true, // Ouvre automatiquement le navigateur à l'URL
  //   port: 3000
  // }
})
