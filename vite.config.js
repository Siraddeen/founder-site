import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        forFreelanceAgencies: resolve(__dirname, "for-freelance-agencies/index.html"),
        buildingInPublic: resolve(__dirname, "building-in-public/index.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
});
