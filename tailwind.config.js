/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        '3xl':'28px',
        '2xl':'24px'
      },
      fontFamily:{
        
      },
      colors: {
        'accent':'#51C779',
        'primary':'#141616',
        'secondary': '#181A1B'

      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  plugins: [],
  }
}
