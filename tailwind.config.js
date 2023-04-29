/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow : {
        'custom-shadow':"0px 2px 9px #E8E8E8",
        'img-shadow' :'2px 2px 29px #E8E8E8'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']},
      borderRadius: {
        '10xl': '40px', // or '160px'
      },
      rotate: {
        'first': '62deg',
        'second':"55deg"
      },
      height: {
        '680': '680px',
      },
      width:{
        'ok':'1350px'
      },
    },
    fontFamily:{
      heading:["'Schibsted Grotesk', sans-serif"]
    },
  },
  plugins: [],
}