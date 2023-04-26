import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { NavMenu } from './menu';
import ethjp_logo from '/public/logo/ej.png';

const Header: FC = () => {
  return (
    <header className="header desktop:px-8">
      {/*Logo*/}
      <Link href="/" passHref={true}>
        <Image alt="Ethereum Japan" src={ethjp_logo} width={240} height={100} />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
