import { LeftContainer } from './LeftContainer';
import { RightContainer } from './RightContainer';
import type { ComponentProps } from '@/types';

import { css } from '@emotion/react';
import { FC } from 'react';

const Header: FC<ComponentProps> = ({ children }) => {
  const header = css`
    align-items: start;
    display: flex;
    height: 5rem;
    justify-content: space-between;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 50
  `;

  return (
    <header css={header}>
      <LeftContainer />
      <RightContainer />
    </header>
  );
};

export default Header;
