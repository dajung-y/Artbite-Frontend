/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        white: {
          DEFAULT: "#FFFFFF",
          100: "#FFFFFF",
        },
        black: {
          DEFAULT: "#141414",
          100: "#000000",
        },
        'primary': '#BEEA3A',
        'secondary' : '#2A2A2A',
        'kakao-yellow': '#FADF4B',
        'naver-green': '#5AC451',
        'google-black': '#131314',
        'google-border' : '#3A3A3A'
      },
      // 폰트 추가
    },
  },
  plugins: [],
}

