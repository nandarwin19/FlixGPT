/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [require("daisyui")],
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
};
