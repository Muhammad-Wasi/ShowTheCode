import 'react-native';
import React from 'react';
import {navigationMock} from '../../utils/testUtils';
import {render} from '@testing-library/react-native';
import Bag from './Bag';
import {Provider as ProductProvider} from '../../context/productContext';

describe('Bag.tsx', () => {
  it('Bag.tsx renders correctly', () => {
    const {getByTestId} = render(<Bag navigation={navigationMock} />, {
      wrapper: ProductProvider,
    });
    expect(getByTestId('bag-container')).toBeTruthy();
  });
});
