module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['11px', '18px'],
      base: ['16px', '24px'],
      lg2: ['18px', '28px'],
      lg: ['18px', '40px'],
      xl: ['24px','32px'],
      xxl: ['32px', '40px'],
      xxxl: ['62px', '62px']
     },
    extend: {
      colors: {
        orange: '#F6931E',
        gray: {
          dark: '#373F41',
          body: '#737B7D',
          DEFAULT: '#C4C4C4',
          light: '#E5E5E5',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
       '8': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
