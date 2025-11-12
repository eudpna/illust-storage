module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f5f0e9',
          600: '#b5a181',
          700: '#a69277',
          800: '#523309'
        }
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ['visited'],
    }
  },
}
