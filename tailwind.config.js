/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'x-bg': 'url("https://www.xavier.edu/athletics/images/bigeast.jpg")'
      }
    },
  },
  plugins: [],
}
