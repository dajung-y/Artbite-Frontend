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
          DEFAULT: "#000000",
          100: "#000000",
        },
        'primary': '#006BFF',
        'kakao-yellow': '#FADF4B',
        'naver-green': '#5AC451'
      },
      // 폰트 추가
    },
  },
  plugins: [],
}

