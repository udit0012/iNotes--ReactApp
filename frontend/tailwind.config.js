module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '800px',
        lg: '1400px',
        xl: '1580px',
        '2xl': '1700px',
      },
      fontFamily: {
        serif: ['"Montserrat Alternates"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
