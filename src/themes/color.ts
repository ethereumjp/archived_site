/* Color Pallet */

export const neutral = {
  White: '#FFFFFF',
  Grey1: '#F7F7F7', // body background
  Grey2: '#D4D4D4', // lines, mouse over, lists or tables
  Grey3: '#B0B0B0', // disable (light theme)
  Grey4: '#646464', // supporting text, disable (dark theme)
  Grey5: '#222222', // dark theme background
  Grey6: '#141414', // default text color
  Black: '#000000',
} as const;

export const theme = (mode: 'light' | 'dark') =>
  mode === 'light' ? themeLight : themeDark;

export const themeLight = {
  Primary: '#1C1CFF',
  PrimaryHighContrast: '#0B0B66',
  PrimaryLowContrast: '#DEDEFF',
  PrimaryHover: '#ABABFE',
  PrimaryVisited: '#090990',
  Body: neutral.Grey5,
  BodyLight: neutral.Grey4,
  Disable: neutral.Grey2,
  Background: neutral.White,
  BackgroundHighlight: neutral.Grey1,
} as const;

export const themeDark = {
  Primary: '#FF7324',
  PrimaryHighContrast: '#FFE3D3',
  PrimaryLowContrast: '#6A3301',
  PrimaryHover: '#FFB991',
  PrimaryVisited: '#C95D20',
  Body: neutral.Grey1,
  BodyLight: neutral.Grey2,
  Disable: neutral.Grey4,
  Background: neutral.Grey5,
  BackgroundHighlight: neutral.Grey6,
} as const;

export const info = {
  Success: '#0A7146', // success message, success border
  SuccessLight: '#DDF4E4', // success background
  Error: '#B80000', // error message, error border
  ErrorLight: '#F7C8C8', // error background
  Attention: '#BD8400', // notifications, announcement border
  AtteiontionLight: '#FFF8DF', // notifications background,  announcement background
} as const;

export const green = {
  100: '#92F2E1',
  200: '#4FE2C8',
  400: '#1AC5A6',
} as const;

export const red = {
  100: '#FF9696',
  200: '#FF6363',
  400: '#FF1717',
} as const;

export const blue = {
  100: '#BFF0F3',
  200: '#80E1E7',
  400: '#00C3CF',
} as const;

// pinkGradで表現しづらい箇所で代替色として使う
// pinkGradのグラデーション終始2色の中間色
export const pink = {
  100: '#EDC1E3',
  200: '#DB83C7',
  400: '#B60890',
} as const;

export const orange = {
  100: '#F9DBC0',
  200: '#F9B475',
  400: '#F99A43',
};

export const lightPurple = {
  100: '#F1CEFF',
  200: '#E39CFF',
  400: '#C839FF',
} as const;

export const bluePurple = {
  100: '#E2E6FE',
  200: '#C4CDFC',
  400: '#7A77FF',
} as const;

export const peach = {
  100: '#FFCEDA',
  200: '#FF99B1',
  400: '#FF537C',
} as const;

export const gradient =
  'linear-gradient(102.7deg, rgba(185, 185, 241, 0.2) 0%, rgba(84, 132, 234, 0.2) 51.56%, rgba(58, 142, 137, 0.2) 100%);' as const;

export const modalShadow = {
  default: 'rgba(0, 0, 0, 0.21)',
  dark1: 'rgba(0, 0, 0, 0.32)',
  dark2: 'rgba(0, 0, 0, 0.6)',
} as const;

/* Box Shadow */
export const dropShadow = {
  panelDefault: '0px 0px 40px rgba(153, 153, 153, 0.32)',
  glow: '0px 0px 40px rgba(255, 255, 255, 0.21)',
  simpleIcon: '0px 0px 20px rgba(0, 0, 0, 0.15)',
  colorIcon: '0px 0px 15px rgba(92, 1, 148, 0.25)',
  modalHighlight: '0px 0px 20px rgba(238, 238, 238, 0.5)',
  textHighlight: '0px 1px 3px rgba(57, 255, 172, 0.5)',
} as const;

export const lightDropShadow = {
  10: '0px 0px 20px rgba(0, 0, 0, 0.15)',
  20: '0px 0px 40px rgba(153, 153, 153, 0.32)',
  30: '0px 4px 25px rgba(0, 4, 38, 0.25)',
} as const;

export const darkDropShadow = {
  10: '0px 0px 40px rgba(255, 255, 255, 0.3)',
} as const;

/* Background */
export const background =
  'linear-gradient(85.19deg, rgba(233, 255, 172, 0.9) 13.45%, rgba(255, 181, 205, 0.9) 57.73%, rgba(179, 187, 255, 0.9) 87.89%)';

/* ColorScheme */
export type ColorScheme =
  | 'brand'
  | 'primary'
  | 'secondly'
  | 'tertiary'
  | 'alert'
  | 'info'
  | 'primaryLight';

// do not use for UI elements
export const brand = {
  BabyPink: '#F0CDC2',
  CelesteGreen: '#B8FAF6',
  JordyBlue: '#88AAF1',
  BluePantone: '#1616B4',
  VodkaLightPurple: '#C9B3F5',
};
