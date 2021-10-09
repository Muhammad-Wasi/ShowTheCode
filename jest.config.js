// module.exports = {
//   preset: 'react-native',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-gesture-handler|react-navigation|react-native-config|react-native-reanimated|react-native-safe-area-view|react-native-vector-icons|@react-native-community/async-storage|use-reducer-logger|@react-navigation/native-stack)/)',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
};
