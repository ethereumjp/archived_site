import { mq } from './settings/breakpoints';
import { colorScheme } from './settings/color';
import { zIndex } from './settings/zindex';

export const themes = (mode: 'light' | 'dark') =>
  mode === 'light' ? colorScheme.themeLight : colorScheme.themeDark;

export const theme = {
  breakpoint: mq,
  zindex: zIndex,
} as const;
