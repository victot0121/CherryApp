/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: "#356C9D",
        white: "#FFFFFF",
        grayOne: "#122434",
        grayTwo: "#3A4956",
        greyThree: "#D0D3D6",
        red: "#B3261E",
        navy: "#B2C3B6",
        green: "#178D57",
        teal: "#36D1DC",
        navyBlue: "#002B36",
        navyBlueTwo: "#003A4A",

      }
    },
  },
  plugins: [],
}

