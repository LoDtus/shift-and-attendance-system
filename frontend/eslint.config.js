import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off", // Tắt lỗi dùng any
            "@typescript-eslint/no-unused-vars": [ // Cảnh báo các biến chưa được sử dụng
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                }
            ],
            "no-unused-vars": "off", // Tắt rule gốc tránh conflict
            "react-hooks/exhaustive-deps": "warn", // Cảnh báo khi thiếu dependencies
            "no-console": ["warn", { allow: ["warn", "error"] }], // Cho phép dùng console.warn, console.error...
            "prefer-const": "warn", // Ưu tiên dùng const
            "@typescript-eslint/ban-ts-comment": "off", // Cho phép dùng @ts-ignore, @ts-expect-error...
        },
    },
]);