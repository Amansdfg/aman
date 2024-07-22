// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  base: '/aman/', // Replace <repository-name> with your actual repository name
  build: {
    outDir: 'dist'
  }
});
