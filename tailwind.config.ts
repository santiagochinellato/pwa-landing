import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "deep-void": "#0B0C10", // Darker, rich black/blue
                "holographic": "#66FCF1", // Cyan neon
                "holographic-dim": "#45A29E",
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
