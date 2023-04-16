/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.tsx",
    "./Components/**/*.tsx",
  ],
  theme: {
    extend: {
      height: {
        '120': '30rem',
      }
    },
  },
  plugins: [],
}

