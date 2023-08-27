/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#E0B577",
                secondary: "#6F5740",
                terciary: "#AD0B04",
                quaternary: "#850600",
                foreground: "#303139",
            },
            backgroundImage: {
                'hero': "url('/images/bkg.png')"
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem'
                }
            }
        },
    },
    plugins: [],
};
