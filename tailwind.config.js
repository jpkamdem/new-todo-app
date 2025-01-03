/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': "#f1d4b3",
        'header-color': '#fbf5ed',
        'btn-color': '#aba599',
        'search-field-color': '#fefdf8'
      }
    },
    gridTemplateColumns: {
      'main': '1.4fr 1fr'
    }
  },
  plugins: [],
}