import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // <--- ESTA ES LA MÁS IMPORTANTE
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "duo-black": "#0a0a0a",
        "duo-green": "#c1ff72",
        "duo-blue": "#00d1ff",
        "duo-card": "#141414",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
