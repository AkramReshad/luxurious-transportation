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
        serif: ["Canela", "Iowan Old Style", "Georgia", "serif"],
        mono: ["Geist Mono", "JetBrains Mono", "SFMono-Regular", "monospace"]
      },
      colors: {
        ink: "#11110f",
        coal: "#151311",
        obsidian: "#080907",
        bone: "#f3eee3",
        champagne: "#d7ad53",
        oxblood: "#790616",
        vermilion: "#d62816",
        amberline: "#e3a329",
        emeraldink: "#062018",
        glassgreen: "#143a2e"
      },
      boxShadow: {
        glass: "inset 0 1px 0 rgba(255,255,255,0.14), 0 24px 80px rgba(0,0,0,0.28)",
        paper: "0 22px 70px rgba(47,32,12,0.13)",
        redline: "0 28px 90px rgba(214,40,22,0.16)",
        emerald: "inset 0 1px 0 rgba(255,255,255,0.12), 0 32px 90px rgba(2,18,12,0.42)"
      }
    }
  },
  plugins: []
};

export default config;
