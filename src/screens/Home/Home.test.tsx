import 'react-native';
import React from 'react';
import {navigationMock} from '../../utils/testUtils';
import {render} from '@testing-library/react-native';
import Home from './Home';
import {Provider as ProductProvider} from '../../context/productContext';

describe('Home.tsx', () => {
  it('Home.tsx renders correctly', () => {
    const {getByTestId} = render(<Home navigation={navigationMock} />, {
      wrapper: ProductProvider,
    });
    expect(getByTestId('home-container')).toBeTruthy();
  });
});
