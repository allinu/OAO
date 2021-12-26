import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { injectHtml } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        injectHtml({
            injectData: {
                title: "OAO",
            },
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 3000,
        proxy: {
            "/api": {
                target: "http://liona.fun:3000",
                ws: true,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    resolve: {
        alias: {
            "@/": `${path.resolve(__dirname, "./src")}/`,
        },
    },
    proxy: {
        "/api": {
            target: "http://liona.fun:3000",
            ws: true,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
    },
    publicDir: "src/public",
    
});