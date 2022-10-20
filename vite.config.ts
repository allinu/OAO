import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api/repos_info": {
        target: "https://api.github.com/users/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/repos_info/, ""),
        autoRewrite: true,
      },
    },
  },
});
