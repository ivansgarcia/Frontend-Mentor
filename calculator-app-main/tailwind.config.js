/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
      colors: {
        'main-bg': 'hsl(var(--color-main-bg))',
        'toggle-keypad-bg': 'hsl(var(--color-toggle-keypad-bg))',
        'screen-bg': 'hsl(var(--color-screen-bg))',
        'del-key-bg': 'hsl(var(--color-del-key-bg))',
        'del-key-shadow': 'hsl(var(--color-del-key-shadow))',
        'equal-key-toggle-bg': 'hsl(var(--color-equal-key-toggle-bg))',
        'equal-key-shadow': 'hsl(var(--color-equal-key-shadow))',
        'normal-key-bg': 'hsl(var(--color-normal-key-bg))',
        'normal-key-shadow': 'hsl(var(--color-normal-key-shadow))',
        'key-text': 'hsl(var(--color-key-text))',
        'equal-key-text': 'hsl(var(--color-equal-key-text))',
        'text': 'hsl(var(--color-text))',
        'white': 'hsl(var(--color-white))',
      }, 
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
}
