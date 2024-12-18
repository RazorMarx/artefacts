/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'af-whiteblue': '#EBF6FA',
        'af-paleblue': '#B4D8DC',
        'af-royalblue': '#132D46',
        'af-whitepurple': '#F1EBF6',
        'af-palepurple': '#C1B3D9',
        'af-royalpurple': '#321C45',
      },
      fontFamily: {
        'dream': ['"Dream Orpheans"', 'sans-serif'],
      },
      keyframes: {
        enter: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        enter: 'enter 0.5s ease-out',
      },
    },
  },
  plugins: [],
}