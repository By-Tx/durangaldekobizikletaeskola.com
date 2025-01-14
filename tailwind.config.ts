import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customblue:'#3984C8',
        customDarkBlue:'#21486C',
      },
      fontFamily: {
        fredoka: ['Fredoka', ...fontFamily.sans],
      },
      fontWeight: {
        semibold: '500', 
      },
    },
  },
  plugins: [],
};
export default config;
