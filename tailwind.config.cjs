/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing:{
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
    },
    extend: {
      spacing: {
        '120':'30rem',
      },
      dropShadow:{
        'icon': '0px 2px 5px white',
        'iconDark': '0px 2px 3px white',
      },
      aspectRatio: {
        '2/3': '9 / 9',
        '20/9':'20 / 9',
        '22/9':'22 / 9'
      },
      backgroundImage: {
        'contact': "url('https://colorlib.com/etc/cf/ContactFrom_v18/images/bg-01.jpg')",
        'homeImg': "url('https://static.vecteezy.com/system/resources/previews/008/440/572/original/abstract-red-speed-neon-light-effect-on-black-background-illustration-free-vector.jpg')",
      },

    },
    colors: {
      'transparent': 'rgba(0,0,0,0)',
      'light': '#eeeeee',
      'red': 'red',
      'dark': '#222831',
      'white': 'white',
    }
  },
  plugins: [],
}