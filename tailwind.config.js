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
        primary: '#Eb1c26',
        buttonText: '#ffffff',
        
        text: {
          DEFAULT: '#646464', 
          dark: '#ffffff',    
        },
        background: {
          DEFAULT: '#ffffff', 
          dark: '#000000',  
        },
        backgroundElement: {
          DEFAULT: '#F0F0F3',
          dark: '#212225',
        },
        backgroundSelected: {
          DEFAULT: '#fafafa',
          dark: '#2E3135',
        },
        textSecondary: {
          DEFAULT: '#60646C',
          dark: '#B0B4BA',
        }
      },
      // colors: {
      //   primary: '#E60023',
      //   buttonText: '#ffffff',
      //   // Light variant definitions
      //   light: {
      //     text: '#646464',
      //     activeText: '#E60023',
      //     background: '#ffffff',
      //     backgroundElement: '#F0F0F3',
      //     backgroundSelected: '#fafafa',
      //     navBackground: '#e8e7ef',
      //     iconColor: '#686477',
      //     iconColorFocused: '#201e2b',
      //     textSecondary: '#60646C',
      //   },
      //   // Dark variant definitions
      //   dark: {
      //     text: '#ffffff',
      //     activeText: '#E60023',
      //     background: '#000000',
      //     backgroundElement: '#212225',
      //     backgroundSelected: '#2E3135',
      //     navBackground: '#201e2b',
      //     iconColor: '#e5e5e5',
      //     iconColorFocused: '#ffffff',
      //     textSecondary: '#B0B4BA',
      //   }
      // },
      fontFamily: {
        satoshi: ["Satoshi-Regular"],
        "satoshi-medium": ["Satoshi-Medium"],
        "satoshi-bold": ["Satoshi-Bold"],
        "satoshi-black": ["Satoshi-Black"],
      },
    },
  },
  plugins: [],
}

