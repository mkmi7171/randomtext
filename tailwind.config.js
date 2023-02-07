/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainOrange: "#F15B29",
      lightGray: "#D9D9D9",
      blueBackground: "#121546",
      white: "#fff"
    },
    extend: {
      keyframes: {
        moveLetter: {
          "0%": { transform: "translate-x-0" },
        },
      },
      animation: {
        moveLetter: 'moveLetter 2s steps(10)'
      }
    },
  },
  plugins: [],
};
