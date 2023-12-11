/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'darker-cyan': 'hsl(158, 36%, 17%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif']
      },
    },
  },
  plugins: [],
}

