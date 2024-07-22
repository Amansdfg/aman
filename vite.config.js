// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: '/aman/',
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aman/', // Replace <repository-name> with your actual GitHub repository name
  plugins: [react()],
  // build: {
  //   outDir: 'dist'
  // }
});
