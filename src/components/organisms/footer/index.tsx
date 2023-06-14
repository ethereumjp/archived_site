import type { ComponentProps } from '@/types';

import { css } from '@emotion/react';
import { FC } from 'react';

const Footer: FC<ComponentProps> = ({ children }) => {
  const footer = css`
    width: 100%;
  `;

  return <footer css={footer}>hi</footer>;
};

export default Footer;
