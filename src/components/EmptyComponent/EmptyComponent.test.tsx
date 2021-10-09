import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import EmptyComponent from './EmptyComponent';

describe('EmptyComponent.tsx', () => {
  it('EmptyComponent.tsx renders correctly', () => {
    const {getByTestId} = render(
      <EmptyComponent text={'string'} icon={'home'} />,
    );
    expect(getByTestId('empty-container')).toBeTruthy();
    expect(getByTestId('empty-text_label')).toBeTruthy();
  });
});
