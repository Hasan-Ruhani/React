
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens:{
      tab: '640px',
      desk: '1024px',
    },
    extend: {},
  },
  plugins: [],
}