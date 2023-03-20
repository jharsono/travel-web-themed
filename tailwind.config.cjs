/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./src/theme/colors.cjs');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontFamily: {
      "body": ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
