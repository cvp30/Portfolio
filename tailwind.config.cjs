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
      dropShadow:{
        'icon': '0px 2px 1px #2d4059',
        'iconDark': '0px 2px 3px white',
      },
      aspectRatio: {
        '2/3': '9 / 9',
        '20/9':'20 / 9',
        '22/9':'22 / 9'
      },
      backgroundImage: {
        'card' : "url('https://hrkit.rometheme.pro/steven/wp-content/uploads/sites/54/2022/08/landingpage-1.jpg')",
        'contact': "url('https://colorlib.com/etc/cf/ContactFrom_v18/images/bg-01.jpg')",
      },

    },
    colors: {
      'transparent': 'rgba(0,0,0,0)',
      'light': '#eeeeee',
      'red': 'red',
      'darkblue': '#2d4059',
      'dark': '#222831',
      'white': 'white',
    }
  },
  plugins: [],
}


// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     container: {},
//     extend: {
//       spacing: {
//         '112': '28rem',
//         '108': '27rem',
//       }
//     },
//     colors:{
//       'principal': '#222831',
//       'orange': '#FE661F',
//       'background': '#f3f4f6',
//       'white': '#ffffff',
//       'slate': '#737B87',
//       'star': '#ffd105',
//       'card': '#fbb65c'
//     },
//   },
//   plugins: [
//     // require('flowbite/plugin')
//   ],
// }