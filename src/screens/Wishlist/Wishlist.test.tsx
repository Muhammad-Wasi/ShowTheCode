import 'react-native';
import React from 'react';
import {navigationMock} from '../../utils/testUtils';
import {render} from '@testing-library/react-native';
import Wishlist from './Wishlist';
import {Provider as ProductProvider} from '../../context/productContext';

describe('Wishlist.tsx', () => {
  it('Wishlist.tsx renders correctly', () => {
    const {getByTestId} = render(<Wishlist navigation={navigationMock} />, {
      wrapper: ProductProvider,
    });
    expect(getByTestId('wishlist-container')).toBeTruthy();
  });
});
