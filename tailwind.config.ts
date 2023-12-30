import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  darkMode: "class",
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      base: "hsl(var(--base))",
      surface: "hsl(var(--surface))",
      overlay: "hsl(var(--overlay))",
      muted: "hsl(var(--muted))",
      subtle: "hsl(var(--subtle))",
      text: "hsl(var(--text))",
      love: "hsl(var(--love))",
      gold: "hsl(var(--gold))",
      rose: "hsl(var(--rose))",
      pine: "hsl(var(--pine))",
      foam: "hsl(var(--foam))",
      iris: "hsl(var(--iris))",
      highlight: {
        DEFAULT: "hsl(var(--highlight-md))",
        lo: "hsl(var(--highlight-lo))",
        hi: "hsl(var(--highlight-hi))",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-overpass)"],
        mono: ["var(--font-overpass-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
