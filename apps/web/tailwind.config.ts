import type { Config } from "tailwindcss";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/my-docusaurus/web" : "";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  prefix: "",
  important: false,
  // GitHub Pages用のパス設定を追加
  assetPrefix: basePath,
  publicPath: basePath,
} satisfies Config;
