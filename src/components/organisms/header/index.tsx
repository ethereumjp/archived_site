import { HeaderLeftContainer } from './leftContainer';
import { HeaderRightContainer } from './rightContainer';
import type { ComponentProps } from '@/types';

import { css } from '@emotion/react';
import { FC } from 'react';

const header = css`
  align-items: start;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const Header: FC<ComponentProps> = ({ children }) => {
  return (
    <header css={header}>
      {/* Header Left */}
      <HeaderLeftContainer />
      <HeaderRightContainer />
    </header>
  );
};

export default Header;
