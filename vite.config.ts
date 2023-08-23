import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/random": "https://api.quotable.io",
    },
  },
  plugins: [react()],
});
