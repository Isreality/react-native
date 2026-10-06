const { Colors } = require("./src/constants/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/(auth)/**/*.{js,jsx,ts,tsx}", 
    "./src/app/(tabs)/**/*.{js,jsx,ts,tsx}" 
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#E60023',
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
      //   // Direct mappings to your theme.ts palette
      //   primary: Colors.light.primary,
      //   buttonText: Colors.light.buttonText,

      //   background: {
      //     DEFAULT: Colors.light.background, 
      //     dark: Colors.dark.background,     
      //   },

      //   text: {
      //     DEFAULT: Colors.light.text,       
      //     dark: Colors.dark.text,           
      //   },

      //   textSecondary: {
      //     DEFAULT: Colors.light.textSecondary,       
      //     dark: Colors.dark.textSecondary,           
      //   },

      //   activeText: {
      //     DEFAULT: Colors.light.activeText,       
      //     dark: Colors.dark.activeText,           
      //   },

      //   backgroundElement: {
      //     DEFAULT: Colors.light.backgroundElement,       
      //     dark: Colors.dark.backgroundElement,           
      //   },

      //   backgroundSelected: {
      //     DEFAULT: Colors.light.backgroundSelected,       
      //     dark: Colors.dark.backgroundSelected,           
      //   },

      //   navBackground: {
      //     DEFAULT: Colors.light.navBackground,       
      //     dark: Colors.dark.navBackground,           
      //   },

      //   iconColor: {
      //     DEFAULT: Colors.light.iconColor,       
      //     dark: Colors.dark.iconColor,           
      //   },

      //   iconColorFocused: {
      //     DEFAULT: Colors.light.iconColorFocused,       
      //     dark: Colors.dark.iconColorFocused,           
      //   },
        
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

