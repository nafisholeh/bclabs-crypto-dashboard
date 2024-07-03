import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto )'],
      },
      fontSize: {
        '8xl': '4.25rem',
        '7xl': '3.125rem',
        '6xl': '3rem',
        '5xl': '2.25rem',
        '4xl': '1.875rem',
        '3xl': '1.5rem',
        '2xl': '1.125rem',
        xl: '0.875rem',
      },
      letterSpacing: {
        tight: '0.68px',
      },
      colors: {
        white: '#FFFFFF',
        primary: '#FAFAFA',
        secondary: '#666666',
        accent: '#3980FF',
        negative: '#FF5454',
        positive: '#6DFFDC',
        neutral: '#666666',
        action: '#00554B',
        currency: '#868686',
      },
      backgroundColor: {
        'black-80': 'rgba(0, 0, 0, 0.8)',
        'button-primary': '#9945FF',
        'button-secondary': '#6DFF8B',
        placeholder: '#1E1E1E',
      },
      borderColor: {
        primary: '#464646',
        secondary: '#4F4F4F',
      },
      lineHeight: {
        loose: '3.6rem',
      },
    },
  },
  plugins: [],
};
export default config;
