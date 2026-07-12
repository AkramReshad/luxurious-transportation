import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "Geist", "Avenir Next", "system-ui", "sans-serif"],
        display: ["Cabinet Grotesk", "Satoshi", "Avenir Next", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "SFMono-Regular", "monospace"]
      },
      colors: {
        ink: "#11110f",
        coal: "#151311",
        obsidian: "#080907",
        bone: "#f3eee3",
        champagne: "#d7ad53"
      },
      boxShadow: {
        glass: "inset 0 1px 0 rgba(255,255,255,0.14), 0 24px 80px rgba(0,0,0,0.28)"
      }
    }
  },
  plugins: []
};

export default config;
