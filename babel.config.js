module.exports = function (api) {
  api.cache(true);

  return {
    presets: [['babel-preset-expo'], 'nativewind/babel'],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],

          alias: {
            '@': './src',
            '@assets': './assets',
            // '@images': './assets/images',   
            'tailwind.config': './tailwind.config.js',
          },
        },
      ],
      // 'react-native-worklets/plugin',
      // "react-native-reanimated/plugin",
    ],
  };
};
