/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        'very-dark-blue-main': 'hsl(217, 54%, 11%)',
        'very-dark-blue-card': 'hsl(216, 50%, 16%)',
        'very-dark-blue-line': 'hsl(215, 32%, 27%)',
        'equilibrium': '#00fff8',
        'gray-text': '#8faedc'
      },
    },
  },
  plugins: [],
}

