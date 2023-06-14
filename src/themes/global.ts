import { mq } from './settings/breakpoints';
import {} from './settings/color';
import {} from './settings/spaces';

import { css } from '@emotion/react';

export const globalStyles = css({
  'html, body': {},

  h1: {
    [mq.desktop]: {
      fontSize: '4.5rem',
      lineHeight: 1.1,
    },
  },

  h2: {
    [mq.desktop]: {
      fontSize: '3rem',
      lineHeight: 1.15,
    },
  },

  h3: {
    [mq.desktop]: {
      fontSize: '2.25rem',
      lineHeight: 1.25,
    },
  },

  h4: {
    [mq.desktop]: {
      fontSize: '1.1rem',
      lineHeight: 1.1,
    },
  },

  p: {},

  a: {
    textDecoration: 'none',
  },

  '*': {},
});
