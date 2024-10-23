import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        red: '#E20015',
        darkGray: '#292929',
        lightGray: '#F4F4F4',
        lightGray2: '#EBEBEB',
        mediumGray: '#969696',
        blue: '#4C90CD',
        darkBlue: '#00304B',
        lightGray3: '#BDBDBD',
        lightGray4: '#E0E0E0',
        lightGray5: '#FBFBFB',
        lightGray6: '#E1E1E1',
        lightGray7: '#F5F5F5',
        mediumGray2: '#717171',
        black65: 'rgba(0, 0, 0, 0.65)',
        black: '#000000',
        lightGray8: '#EEEEEE',
        mediumGray3: '#C9C9C9',
        lightGray9: '#F7F7F7',
        black40: 'rgba(0, 0, 0, 0.4)',
        lightGray10: '#BEBEBE',
        lightGray11: '#F3F3F3',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
