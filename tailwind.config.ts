import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
const { fontFamily } = defaultTheme;

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
        customPuntagaleaBlue: '#014AA8',
        customPuntagaleaOrange: '#FF7D01',
        customPuntagaleaDarkOrange: '#E65C00',
        customPuntagaleaDarkerOrange: '#C44A00',
        customblue: '#3984C8',
        customDarkBlue: '#21486C',
        customDarkerBlue: '#18344e',
        customGray: '#BCC3CA',
        customDarkBlueSession: '#001f5f'

      },
      fontFamily: {
        fredoka: ['Fredoka', ...fontFamily.sans],
      },
      fontWeight: {
        semibold: '500',
        semibold600: '600',
      },
      height: {
        74: '18.5rem',
        86: '21.5rem',
        21: '5.30rem',
        29: '7.45rem',
        65: '17.438rem',
        83: '20.75rem',
        100: '27rem',
        105: '28rem',
        112: '35rem',
        110: '26.5rem',
        116: '29.25rem',
        130: '35.5rem',
        131: '36.5rem',
      },
      width: {
        18: '4.5rem',
        50: '12.5rem',
        86: '22.0rem',
        97: '24.5rem',
        100: '27rem',
        105: '29rem',
        112: '28rem',
        110: '26.5rem',
        111: '27.5rem',
        130: '32.5rem',
      },
      margin: {
        33: '8.25rem',
      }
    },
  },
  plugins: [],
};
export default config;
