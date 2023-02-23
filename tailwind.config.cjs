/** @type {import('tailwindcss').Config} */
module.exports = {
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
      rotate: {
        '8': '8deg'
      },
      opacity:{
        
      },
      spacing: {
        '112': '38rem',
        '200': '50rem',
        '250': '62.5rem',
        '320': '80rem',
      }
    },
    colors: {
      'black': 'black',
      'silver': '#cccaca',
      'primary': 'rgb(9,198,255)',
      'white': '#ffffff'
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