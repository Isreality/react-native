export default function (api: any) {
  api.cache.forever(); 
  return {
    presets: ['babel-preset-expo'],
  };
}
