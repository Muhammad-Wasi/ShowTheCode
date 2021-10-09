// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };
module.exports = {
  root: true,
  extends: ['@react-native-community'],
  globals: {
    jest: 'readonly',
    JSX: 'readonly',
  },
  ignorePatterns: ['coverage'],
  rules: {
    'no-empty-function': 'error',
    'no-nested-ternary': 'warn',
    'no-unused-expressions': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
