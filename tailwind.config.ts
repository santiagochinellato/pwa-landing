import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand colors
                "deep-void": "#030305",
                "holographic": "#66FCF1",
                "holographic-dim": "#45A29E",
                
                // Light mode specific (Explicit classes requested)
                "light-bg": "#f8fafc",
                "light-fg": "#0f172a",
                "light-primary": "#14b8a6",
                "light-muted": "#64748b",
                "light-surface": "#ffffff",
                "light-border": "#e2e8f0",
                
                // Semantic Colors (mapped to CSS variables)
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "primary-dim": "var(--primary-dim)",
                surface: "var(--surface)",
                border: "var(--border)",
                muted: "var(--muted)",
                accent: "var(--accent)",
                success: "var(--success)",
                warning: "var(--warning)",
            },
            backgroundImage: {
                "holographic-gradient": "linear-gradient(135deg, #66FCF1 0%, #45A29E 100%)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
