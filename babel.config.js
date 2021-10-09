module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  };
};
