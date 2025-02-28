/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px'
      }
    },
  },
  plugins: [],
}