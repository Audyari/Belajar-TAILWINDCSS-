/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
    fontFamily: {
      'playwrite': ['Playwrite BE VLG', 'sans-serif'],
    }
  },
  plugins: [],
}