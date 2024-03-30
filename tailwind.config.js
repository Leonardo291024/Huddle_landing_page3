/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('../svg/heroDesktop.svg')",
        'heroMobile': "url('../svg/heroMobile.svg)",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': 'hsl(322, 100%, 66%)',
        'secondary': 'hsl(193, 100%, 96%)',
        'terceary': 'hsl(192, 100%, 9%)',
        'cuaternary': 'hsl(208, 11%, 55%)'
      }),
      textColor:{
        'primary': 'hsl(322, 100%, 66%)',
        'secondary': 'hsl(193, 100%, 96%)',
        'terceary': 'hsl(192, 100%, 9%)',
        'cuaternary': 'hsl(208, 11%, 55%)'
      },
      fontFamily:{
        openSans:['Open Sans', 'sans-serif'],
        popins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

