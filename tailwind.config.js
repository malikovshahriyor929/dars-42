/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        balck: "#000",
        white: "#fff",
        text: "#333",
        prime: " #ffcd11",
        prime1: " #ecba00",
        border: "#c0c0c0",
        dark: "#444",
        placeholder: "#aeaeae",
        border: "#d1d1d1",
        background: " #f2f2f2",
      },
      fontFamily:{
        sans:"Inter"
      }
    },
  },
  plugins: [],
};
