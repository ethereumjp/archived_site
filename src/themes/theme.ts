import { mq } from './settings/breakpoints';
import { colorScheme } from './settings/color';
import { zIndex } from './settings/zindex';

export const theme = (mode: 'light' | 'dark') =>
  mode === 'light'
    ? {
        breakpoint: mq,
        zindex: zIndex,
        colorScheme: colorScheme.themeLight,
      }
    : {
        breakpoint: mq,
        zindex: zIndex,
        colorScheme: colorScheme.themeDark,
      };
