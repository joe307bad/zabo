const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    // TODO could potentially have this point to a
    // react-native-styles.ts (and same with react)
    // in order to generate tailwind.css files for each
    // platform
    content: ['./libs/design/tailwind/src/index.ts']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
