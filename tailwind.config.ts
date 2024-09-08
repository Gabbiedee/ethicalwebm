import { Sarabun } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sarabun: ["Sarabun", "sans-serif"]
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #0FFD4E, #EE9104)',
        'gradient-tob': 'linear-gradient( #68D585, #0F8A30)',
        'gradient-tob2': 'linear-gradient(180deg, #D1E2D1 0%, #BED6BD 100%)',
        'gradient-tob3': 'linear-gradient(180deg, #000 29%, #23390A 100%)'

      },
      colors: {
        "customGreen": "#0F8A30"
      }
    },
  },
  plugins: [],
};
export default config;
