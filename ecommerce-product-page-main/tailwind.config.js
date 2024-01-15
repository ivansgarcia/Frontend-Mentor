/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'orange-btn': 'hsl(26, 100%, 55%)',
                'pale-orange': 'hsl(25, 100%, 94%)',
                'very-dark-blue': 'hsl(220, 13%, 13%)',
                'dark-grayish-blue': 'hsl(219, 9%, 45%)',
                'grayish-blue': 'hsl(220, 14%, 75%)',
                'light-grayish-blue': 'hsl(223, 64%, 98%)',
                white: 'hsl(0, 0%, 100%)',
                'black-lightbox-bg': 'hsl(0, 0%, 0%)',
            },
            fontFamily: {
                'kumbh-sans': ['Kumbh Sans', 'sans'],
            },
            animation: {
                'scale-in-center':
                    'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
            },
            keyframes: {
                'scale-in-center': {
                    '0%': {
                        transform: 'scale(0.5)',
                        opacity: '1',
                    },
                    '80%': {
                        transform: 'scale(1.1)',
                        opacity: '1',
                    },
                    to: {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
};
