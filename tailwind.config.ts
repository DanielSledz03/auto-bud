import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      '2xs': ['var(--font-size-2xs)', { lineHeight: '1.2' }],
      xs: ['var(--font-size-xs)', { lineHeight: '1.4' }],
      sm: ['var(--font-size-sm)', { lineHeight: '1.45' }],
      base: ['var(--font-size-base)', { lineHeight: '1.5' }],
      lg: ['var(--font-size-lg)', { lineHeight: '1.55' }],
      xl: ['var(--font-size-xl)', { lineHeight: '1.4' }],
      '2xl': ['var(--font-size-2xl)', { lineHeight: '1.3' }],
      '3xl': ['var(--font-size-3xl)', { lineHeight: '1.25' }],
      '4xl': ['var(--font-size-4xl)', { lineHeight: '1.2' }],
      '5xl': ['var(--font-size-5xl)', { lineHeight: '1.1' }],
      '6xl': ['var(--font-size-6xl)', { lineHeight: '1.1' }],
      '7xl': ['var(--font-size-7xl)', { lineHeight: '1.1' }],
    },
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
    },
  },
  plugins: [],
};
export default config;
