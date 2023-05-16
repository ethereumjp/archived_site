import Image from 'next/image';
import Link from 'next/link';

import { css } from '@linaria/core';
import { FC } from 'react';

import { NavMenu } from './menu';
import ethjp_logo from '/public/logo/ej.png';
import { header } from '@/styles';
import type { ComponentProps } from '@/types';

const logoLink = css`
  position: relative;
`;

const Header: FC<ComponentProps> = ({ children }) => {
  return (
    <header className={header}>
      {/*Logo*/}
      <Link href="/" passHref={true} className={logoLink}>
        <Image alt="Ethereum Japan" src={ethjp_logo} sizes='100vw' />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
