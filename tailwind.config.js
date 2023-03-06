/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                main: "rgb(var(--background-rgb))",
            },
            boxShadow: {
                header: "0px 1px 1px rgb(255 255 255 / 12%)",
            },
            colors: {
                mainRed: "rgb(var(--main-red-rgb))",
                grayTransparent: "rgba(255,255,255,0.12)",
            },
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
                source: ["var(--font-source)"],
            },
        },
    },
    plugins: [],
};
