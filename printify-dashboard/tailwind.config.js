module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
    maxHeight: {
          '0': '0',
             '1/4': '25%',
             '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
            }
         },
  variants: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']
  ,
  plugins: [],
}
