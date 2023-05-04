/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
    },
    extend: {
      spacing: {
        '156': '39rem',

        '120': '30rem',
        '132': '33rem',
        '112': '28rem',
        '160': '40rem',
        '194': '48.5rem',
        '18': '4.5rem',
      },
      boxShadow: {
        'leftTop': '5px -5px 10px rgba(116,116,116,.2)',
        'rightBottom': '-5px 4px 10px #0099ff',
      },
      dropShadow: {
        'icon': '0px 2px 5px white',
        'iconDark': '0px 2px 3px white',
        'iconSky': '0px 2px 3px #0099ff',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        '9/10': '9 / 10',
      },
      backgroundImage: {
        'contact': "url('https://colorlib.com/etc/cf/ContactFrom_v18/images/bg-01.jpg')",
        'homeImg': "url('https://static.vecteezy.com/system/resources/previews/008/440/572/original/abstract-red-speed-neon-light-effect-on-black-background-illustration-free-vector.jpg')",
      },

    },
    colors: {
      'background': '#212428',
      'red': 'rgb(209,0,36)',
      'white': 'white',
      'black': 'black',
      'line': '#3c3c3c',
      'skyBlue': '#0099ff',

      'transparent': 'rgba(0,0,0,0)',
      'light': '#eeeeee',
      'dark': '#222831',
    }
  },
  plugins: [],
}