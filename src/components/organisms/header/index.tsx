import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { css } from '@emotion/react';

import { NavMenu } from './menu';
import ethjp_logo from '/public/logo/ej.png';
import type { ComponentProps } from '@/types';

const header = css`
  align-items: center;
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
      {/*Logo*/}
      <Link href='/' passHref={true}>
        <Image
          alt='Ethereum Japan'
          src={ethjp_logo}
          css={css`
            border-radius: 50%;
            cursor: pointer;
            height: auto;
            max-width: 80px;
          `}
        />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
