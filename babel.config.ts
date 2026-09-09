export default function (api: any) {
  api.cache.forever(); 
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-iconify/babel',
        {
          'mdi:heart':
          'mdi:home',
          'mdi:account':
          'feather:activity',
          icons: [], 
        },
      ],
    ],
  };
}
