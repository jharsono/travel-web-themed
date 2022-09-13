/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gandalf": "#c1bec1",
      "flamingo": "#ffaeb3",
      "tulip": "#fe7e9b",
      "dark-liver": "#554d56",
      "purpley-grey": "#979197",
      "white": "#ffffff",
      "white-smoke": "#f7f7f7"
    },
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
