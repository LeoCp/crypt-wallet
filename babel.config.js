module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@assets': './src/assets',
          '@components': './src/components',
          '@core': './src/core',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@storage': './src/storage',
        },
      },
    ],
  ],
};
