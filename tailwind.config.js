/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1200px',
    },
    colors: {
      'pink': '#FFDBDB',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}

