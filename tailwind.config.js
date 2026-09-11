const { Colors } = require("./src/constants/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: Colors.primary,
        dark: {
          ...Colors.dark
        },
        ...Colors.light,
      },

    },
  },
  plugins: [],
}

