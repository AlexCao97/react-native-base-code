module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          scenes: './src/scenes',
          navigator: './src/navigator',
          appRedux: './src/appRedux/',
          configs: './src/configs/',
          components: './src/components/',
          assets: './src/assets/',
          utils: './src/utils/',
          hooks: './src/hooks/',
          helpers: './src/helpers/',
          constants: './src/constants/',
          apis: './src/apis/',
          translations: './src/translations',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
};
