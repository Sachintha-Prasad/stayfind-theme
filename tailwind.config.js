/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                jost: "'Jost', sans-serif",
            },

            colors: {
                blue: 'hsl(216, 100%, 29%)',
                yellow: 'hsl(38, 100%, 50%)',
            },

            container: {
                center: true,
                padding: '1.5em',
                screens: {
                    '2xl': '1400px',
                },
            },
        },
    },
    plugins: [],
}
