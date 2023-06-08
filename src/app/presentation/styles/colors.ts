import styleJson from './tokens.json';

export const Colors = {
  Primary: styleJson.core.neutral[800].value,
  Secondary: styleJson.core.neutral[600].value,
  Blue1Additional: '#DFDFFC',
  FontHeader: '#222755',
  BlueGray: '#555f91',
  BlackGray: '#2E2E2E',
  White: '#FFFFFF',
  Paper: '#f2f2f2',
  Green: '#469B59',
  Green2: '#D7F7C2',
  GrayLine: '#E1E1E1',
  BgGray: '#F2F2F2',
  RedAlert: '#FF2055',
  Black: '#000000',
  ScrollBarColor: '#C7C7C7',
  Background: '#2f3c7a',
  BackgroundGray: '#f5f5f0',
  BackgroundFooter: '#222755',
  BackGroundHeader: 'linear-gradient(90deg,#222755,#2f3c7a)'
} as const;

export default Colors;
