const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0c4ec4',
        'secondary': '#67dbb4',
        'link': '#0645AD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
