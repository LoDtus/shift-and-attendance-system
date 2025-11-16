import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const apiUrl = `${env.VITE_HOST}:${env.VITE_API_PORT}`;

    return {
        plugins: [
            react(),
            tailwindcss(),
        ],
        build: {
            sourcemap: process.env.VITE_ENV !== 'production',
        },
        server: {
            port: parseInt(env.VITE_PORT || "5173", 10),
            host: '0.0.0.0'
        },
        define: {
            'process.env': {
                VITE_API_URL: apiUrl,
            }
        }
    };
});