import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '360px',
      'mdx': '460px',
      'mdl': '550px',
      'slg': '750px',
      'lg': '900px',
      'xl': '1000px',
      '2xl': '1100px',
      '3xl': '1440px',
    },
    extend: {
      colors: {
        Main: '#E1AF93',
        'Main-70': '#EAC7B4',
        'Main-40': '#F3DFD4',
        'Main-120': '#B48C76',
        MainText: '#333333',
        'MainText-60': '#858585',
        'MainText-20': '#D6D6D6',
        Red: '#E2211C',
        modalBg: 'rgba(0, 0, 0, 0.6)',
      },
      height: {
        'screen-minus-80': 'calc(100vh - 80px)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;