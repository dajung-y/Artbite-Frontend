/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#008CFF',
        primaryDark: '#003159',
      },
      // 폰트 추가
    },
  },
  plugins: [],
}

