/** @type {import('tailwindcss').Config} */

const Module = require('module');
const originalRequire = Module.prototype.require;

Module.prototype.require = function (id) {
  if (id === 'react-native') {
    return {
      Platform: {
        select: (obj) => obj.default || obj.ios || {},
      },
    };
  }
  return originalRequire.apply(this, arguments);
};

const { Colors } = require('./constants/theme');

const generatedColors = {
  primary: Colors.primary, 
};


Object.keys(Colors.light).forEach((key) => {
  generatedColors[key] = Colors.light[key];
});


Object.keys(Colors.dark).forEach((key) => {
  generatedColors[`${key}-dark`] = Colors.dark[key];
});


module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: generatedColors,
    },
  },
  plugins: [],
}

