/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-claro': '#005C6D',
        'cinza-claro' : '#E6E6E6',
        'cinzento' : '#DADADA'
      },
      boxShadow: {
        'border-shadow': '0px 3px 3px 0px rgba(0, 0, 0, 0.3) inset',
        'border-shadow2': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

      }
    },
  },
  plugins: [],
}