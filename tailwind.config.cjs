/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'hsl(180, 66%, 49%)',
          700: 'hsl(257, 27%, 26%)',
        },
        secondary: 'hsl(0, 87%, 67%)',
        neutral: {
          200: 'hsl(0, 0%, 75%)',
          400: 'hsl(257, 7%, 63%)',
          700: 'hsl(255, 11%, 22%)',
          900: 'hsl(260, 8%, 14%)',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
