import { BottomMenu } from './BottomMenu';
import { Socials } from './Socials';
import type { ComponentProps } from '@/types';

import { css } from '@emotion/react';
import { FC } from 'react';

const Footer: FC<ComponentProps> = ({ children }) => {
  const footerStyle = css`
    padding: 2rem 0;
    width: 100%;
  `;

  return (
    <footer css={footerStyle}>
      <Socials />
      <BottomMenu />
    </footer>
  );
};

export default Footer;
