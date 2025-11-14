/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      // 색상
      colors:{
        white: {
          DEFAULT: "#FFFFFF",
          100: "#FFFFFF",
        },
        black: {
          DEFAULT: "#141414",
          100: "#000000",
        },
        greyscale: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#C2C2C2",
          400: "#A0A0A0",
          500: "#585858",
          600: "#3C3C3C",
          700: "#2A2A2A",
          800: "#1E1E1E",
          900: "#121212"
        },
        green: {
          100: "#F6FCDD",
          200: "#EAF9B2",
          300: "#D9F47D",
          400: "#BEEA3A",
          500: "#506F25",
          600: "#32451A",
          700: "#1F2B10",
          800: "#141A0B",
          900: "#0D1008",
        },
        red: {
          400: "#FE4848",
          500: "#D83A3A"
        },
        'primary': '#BEEA3A',
        'secondary' : '#2A2A2A',
        'kakao-yellow': '#FADF4B',
        'naver-green': '#5AC451',
        'google-black': '#131314',
        'google-border' : '#3A3A3A'
      },

      // 폰트
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // title1 : 24px / SemiBold / line height 34px
        title1: [
          '1.5rem',
          {
            fontWeight: '600',
            lineHeight: '2.125rem'
          }
        ],
        // title2 : 22px / SemiBold / line height 32px
        title2: [
          '1.375rem',
          {
            fontWeight: '600',
            lineHeight: '2rem'
          }
        ],
        // title3 : 18px / SemiBold / line height 26px
        title3: [
          '1.125rem',
          {
            fontWeight: '600',
            lineHeight: '1.625rem'
          }
        ],
        // title4 : 16px / Medium / line height 24px
        title4 : [
          '1rem',
          {
            fontWeight: '500',
            lineHeight: '1.5rem'
          }
        ],
        // body1 : 16px Light / line height 24px / letter spacing -0.2px
        body1 : [
          '1rem',
          {
            fontWeight: '300',
            lineHeight: '1.5rem',
            letterSpacing: '-0.0125rem'
          }
        ],
        // body1-long : 16px Light / line height 30px / letter spacing -0.2px
        'body1-long' : [
          '1rem',
          {
            fontWeight: '300',
            lineHeight: '1.875rem',
            letterSpacing: '-0.0125rem'
          }
        ],
        // body2 : 14px / Medium / line height 22px
        body2: [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '1.375rem',
          }
        ],
        // caption : 14px / Light / line height 20px / letter spacing -0.2px
        caption: [
          '0.875rem',
          {
            fontWeight: '300',
            lineHeight: '1.25rem',
            letterSpacing: '-0.0125rem'
          }
        ]
      }
    },
  },
  plugins: [],
}

