/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
        `./src/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        colors: {
            'scissors-gradient-start': 'hsl(39, 89%, 49%)',
            'scissors-gradient-end': 'hsl(40, 84%, 53%)',
            'paper-gradient-start': 'hsl(230, 89%, 62%)',
            'paper-gradient-end': 'hsl(230, 89%, 65%)',
            'rock-gradient-start': 'hsl(349, 71%, 52%)',
            'rock-gradient-end': 'hsl(349, 70%, 56%)',
            'lizard-gradient-start': 'hsl(261, 73%, 60%)',
            'lizard-gradient-end': 'hsl(261, 72%, 63%)',
            'spock-gradient-start': 'hsl(189, 59%, 53%)',
            'spock-gradient-end': 'hsl(189, 58%, 57%)',

            'dark-text': 'hsl(229, 25%, 31%)',
            'score-text': 'hsl(229, 64%, 46%)',
            'header-outline': 'hsl(217, 16%, 45%)',

            'radial-gradient-start': 'hsl(214, 47%, 23%)',
            'radial-gradient-end': 'hsl(237, 49%, 15%)',

            white: 'hsl(0, 100%, 100%)',
        },
        fontFamily: {
            barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
        },
        extend: {
            animation: {
                result: 'appear 0.5s ease-in-out',
                winner: 'pulse 1s ease-in-out infinite',
            },
            keyframes: {
                appear: {
                    '0%': { transform: 'scale(0)' },
                    '90%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            screens: {
                'big-screen': {
                    raw: 'only screen and (min-height: 500px)',
                },
                'mobile-landscape': {
                    raw: 'only screen and (max-height: 500px) and (orientation: landscape)',
                },
            },
        },
    },
    plugins: [],
};
