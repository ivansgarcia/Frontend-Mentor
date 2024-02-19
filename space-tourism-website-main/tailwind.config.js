/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ["'Barlow Condensed', sans-serif"],
        'bellefair': ["'Bellefair', serif"],
        'barlow': ["'Barlow', sans-serif"],
      }, 
      colors: {
        'text-grey': '#D0D6F9',
        'separator': '#383B4B',
        'dark': '#0B0D17',
        'dark-bg': '#979797',
      },
      backgroundImage: {
        'home-mobile': "url('/images/background-home-mobile.jpg')",
        'home-tablet': "url('/images/background-home-tablet.jpg')",
        'home-desktop': "url('/images/background-home-desktop.jpg')",
        'destination-mobile': "url('/images/background-destination-mobile.jpg')",
        'destination-tablet': "url('/images/background-destination-tablet.jpg')",
        'destination-desktop': "url('/images/background-destination-desktop.jpg')",
        'crew-mobile': "url('/images/background-crew-mobile.jpg')",
        'crew-tablet': "url('/images/background-crew-tablet.jpg')",
        'crew-desktop': "url('/images/background-crew-desktop.jpg')",
        'technology-mobile': "url('/images/background-technology-mobile.jpg')",
        'technology-tablet': "url('/images/background-technology-tablet.jpg')",
        'technology-desktop': "url('/images/background-technology-desktop.jpg')",
        'technology1-portrait': "url('/images/image-launch-vehicle-portrait.jpg')",
        'technology1-landscape': "url('/images/image-launch-vehicle-landscape.jpg')",
        'technology3-portrait': "url('/images/image-space-capsule-portrait.jpg')",
        'technology3-landscape': "url('/images/image-space-capsule-landscape.jpg')",
        'technology2-portrait': "url('/images/image-spaceport-portrait.jpg')",
        'technology2-landscape': "url('/images/image-spaceport-landscape.jpg')",
      },
      keyframes: {
        appear: {
          '0%': { width: '0%' },
          '100%': { width: '66%' }
        },
        hide: {
          '0%': { width: '66%'},
          '100%': { width: '0%' }
        },
      },
      animation: {
        appear: 'appear 0.3s linear',
        hide: 'hide 0.3s linear',
      }
    },
  },
  plugins: [],
}
