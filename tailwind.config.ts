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
        customDarkerBlue:'#18344e',
      },
      fontFamily: {
        fredoka: ['Fredoka', ...fontFamily.sans],
      },
      fontWeight: {
        semibold: '500', 
      },
      height: {
        86: '21.5rem',
        21: '5.30rem',
        65: '17.438rem',
        100: '27rem',
        105: '28rem',
        112: '35rem',
        110: '26.5rem',
        130: '35.5rem',
      },
      width: {

        100: '27rem',
        105: '29rem',
        112: '28rem',
        110: '26.5rem',
        130: '32.5rem', 
      },
    },
  },
  plugins: [],
};
export default config;
