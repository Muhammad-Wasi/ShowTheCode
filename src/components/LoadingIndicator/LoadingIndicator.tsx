import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants';

const LoadingIndicator = () => (
  <ActivityIndicator size={25} color={COLORS.secondary} />
);

export default LoadingIndicator;
