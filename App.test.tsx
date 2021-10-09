// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from './App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('App.tsx renders correctly', () => {
//   renderer.create(<App />);
// });
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from './App';

describe('App.tsx', () => {
  it('App.tsx renders correctly', () => {
    const {getByTestId} = render(<App />);
  });
});
