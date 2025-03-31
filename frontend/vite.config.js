import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mern-product-app-server.onrender.com",
        changeOrigin: true,
        secure: false, // <- Disable SSL verification
      },
    },
  },
});
