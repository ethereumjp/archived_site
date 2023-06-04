import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { css } from '@emotion/react';

import { NavMenu } from './menu';
import ethjp_logo from '/public/logo/ej.png';
import { mq } from '@/themes/settings/breakpoints';
import type { ComponentProps } from '@/types';

const Header: FC<ComponentProps> = ({ children }) => {
  const headerStyle = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 50,
  });

  const logoStyle = css({
    borderRadius: '50%',
    cursor: 'pointer',
    height: 'auto',
    maxWidth: '80px',
  });

  return (
    <header css={headerStyle}>
      {/*Logo*/}
      <Link href='/' passHref={true} css={css({})}>
        <Image alt='Ethereum Japan' src={ethjp_logo} css={logoStyle} />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
