import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [tailwindcss()],
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Local dev proxy to avoid CORS when calling the Google Places Web Service
      "/api/google-reviews": {
        target: "https://maps.googleapis.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/google-reviews/,
            "/maps/api/place/details/json",
          ),
      },
    },
  },
});
