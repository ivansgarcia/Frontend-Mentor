/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'dark-elements': 'hsl(209, 23%, 22%)',
      'dark-background': 'hsl(207, 26%, 17%)',
      'light-text': 'hsl(200, 15%, 8%)',
      'light-input': 'hsl(0, 0%, 52%)',
      'light-background': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'nunito-sans': ["'Nunito Sans', sans-serif"]
    },
    extend: {
      boxShadow: {
        'shad': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
      aspectRatio: {
        'flag': '1.6'
      }
    },
  },
  plugins: [],
}
