import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#0E5BFF',
  secondary: '#02B65E',
  white: '#fff',
  black: '#000000',
  washedOutBlue: '#F4F7FB',
  error: '#EB0505',
  light1: '#EAEDF1',
  light2: '#FFFFFF',
  light3: '#F4F7FB',
  lightPurple: '#7B789F',
  purple: '#595683',
  white1: '#F1E6D8',
  red: '#D84035',
  lightGray2: '#707070',
  lightGray4: '#CCC',
  lightGray5: '#F2F2F2',
};
export const SIZES = {
  largeTitle: 40,
  title: 18,
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 11,
  body7: 10,
  // app dimensions
  width,
  height,
};

const SPACING_UNIT = 8;
const RADIUS_UNIT = 4;
export const Theme = {
  spacing: (value: number) => value * SPACING_UNIT,
  radius: (value: number) => value * RADIUS_UNIT,
};

const appTheme = {COLORS, SIZES, Theme};

export default appTheme;
