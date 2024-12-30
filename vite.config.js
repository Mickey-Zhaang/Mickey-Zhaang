import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Mickey-Zhaang/", 
  build: {
    outDir: "dist", // Output directory for the build
    rollupOptions: {
      input: {
        main: "index.html", 
        projects: "projects.html", 
        contact: "contacts.html",
      },
    },
  },
});