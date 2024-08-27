/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'gold': '#B68C5A',
                'desc-color': '#707070',
                'dark-2': '#414040',
            },
            fontFamily: {
                'garamond': 'EB Garamond',
                'poppins': 'Poppins',
            },
            backgroundImage: {
                'banner': "url('./images/banner.png')",
            },
        },
    },
    plugins: [],
}