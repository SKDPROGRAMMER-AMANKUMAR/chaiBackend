import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:3000' /*
        Explanation (Short and Simple)

        >>Proxy Setup: This tells Vite’s dev server to forward all requests starting with /api to http://localhost:3000.
        >>Why Use It?: Useful in development to avoid CORS (Cross-Origin Resource Sharing) issues by pretending both the frontend and backend are on the same origin.

        How It Works:-
        1. When you make a request like /api/users, Vite redirects it to http://localhost:3000/api/users.
        2. This allows the frontend and backend to communicate smoothly during local development.
        This approach ensures your frontend behaves correctly without needing direct CORS handling on the backend
      */
    },
  },
  plugins: [react()],
})
