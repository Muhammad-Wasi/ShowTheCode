// Add Jest mocks here
import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

// @ts-ignore
global.window = {};
// @ts-ignore
global.window = global;

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = jest.fn();

  return Reanimated;
});

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
