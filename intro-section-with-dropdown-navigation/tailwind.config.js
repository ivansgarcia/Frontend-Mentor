/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    
    theme: {
        extend: {
            colors: {
                'almost-white': 'hsl(0, 0%, 98%)',
                'medium-gray': 'hsl(0, 0%, 41%)',
                'almost-black': 'hsl(0, 0%, 8%)',
            },
            backgroundImage: {
                'hero-desktop': "url('../images/image-hero-desktop.png')",
                'mobile-desktop': "url('../images/image-hero-mobile.png')",
                'icon-menu': "url('../images/icon-menu.svg')",
                'icon-close-menu': "url('../images/icon-close-menu.svg')",
                'down-arrow': "url('../images/icon-arrow-down.svg')",
                'up-arrow': "url('../images/icon-arrow-up.svg')",
            }
        },
    },
    plugins: [],
};
