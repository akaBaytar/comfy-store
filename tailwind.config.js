import tailwindcssTypography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssTypography, daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#9a3412',

          secondary: '#c2410c',

          accent: '#994D1C',

          neutral: '#374151',

          'base-100': '#2c3443',

          info: '#113946',

          success: '#999944',

          warning: '#A64B2A',

          error: '#7f1d1d',
        },
        light: {
          primary: '#6B240C',

          secondary: '#D7A86E',

          accent: '#999944',

          neutral: '#71717a',

          'base-100': '#fffbf5',

          info: '#113946',

          success: '#994D1C',

          warning: '#A64B2A',

          error: '#7f1d1d',
        },
      },
    ],
  },
};
