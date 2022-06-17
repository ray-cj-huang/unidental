const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/1': '100%'
     },
    extend: {
      colors: {
        'primary': '#0c4ec4',
        'secondary': '#67dbb4',
        'link': '#0645AD',
      },
      backgroundColor: {
        'primary': '#0c4ec4',
        'secondary': '#67dbb4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
