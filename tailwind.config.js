// const { Colors } = require("./src/constants/theme");

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
        primary: '#E60023',
        buttonText: '#ffffff',
        // Light variant definitions
        light: {
          text: '#000000',
          activeText: '#E60023',
          background: '#ffffff',
          backgroundElement: '#F0F0F3',
          backgroundSelected: '#fafafa',
          navBackground: '#e8e7ef',
          iconColor: '#686477',
          iconColorFocused: '#201e2b',
          textSecondary: '#60646C',
        },
        // Dark variant definitions
        dark: {
          text: '#ffffff',
          activeText: '#E60023',
          background: '#000000',
          backgroundElement: '#212225',
          backgroundSelected: '#2E3135',
          navBackground: '#201e2b',
          iconColor: '#e5e5e5',
          iconColorFocused: '#ffffff',
          textSecondary: '#B0B4BA',
        }
      },
      fontFamily: {
        satoshi: ["Satoshi-Regular"],
        "satoshi-medium": ["Satoshi-Medium"],
        "satoshi-bold": ["Satoshi-Bold"],
      },
    },
  },
  plugins: [],
}

