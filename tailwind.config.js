/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      color: {
        emerald: {
          400: '#54BD95',
        },
        neutral: {
          400: '#A6A6A6',
        },
        stone: {
          900: '#191A15',
        },
        gray: {
          50: '#F8F8FA',
        },
        amber: {
          400: '#FFC728',
        },
        zinc: {
          400: '#BBBBBB',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '5xl': '50px',
      },
      maxWidth: {
        'screen-xl': '1196px',
      },
      content: {
        subtract: 'url("/assets/subtract-icon.svg")',
      },
    },
  },
  plugins: [],
}
