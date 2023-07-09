/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Chela: ['Chela One', "sans-serif"],
       },
    },
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar-hide')],
}