'use client';

import Link from 'next/link';

import { css } from '@linaria/core';
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import type { FC } from 'react';

import { menuItem } from '@/styles';

const menu = css`
  position: absolute;
`;

const Item: FC<{
  id: string;
  href: string;
  text: string;
  newpage?: boolean;
}> = ({ id, href, text, newpage }) => {
  return (
    <Link
      id={id}
      href={href}
      passHref={true}
      target={newpage ? '_blank' : '_self'}
      className={menuItem}
    >
      {text}
    </Link>
  );
};

export const NavMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const MenuItems = (props: { open: boolean }) => {
    return (
      <div
        id="nav menu"
        className={menu}
        // className={`${
        //   props.open ? '' : 'hidden '
        // }absolute inset-y-16 right-4 flex flex-col items-end space-y-2 laptop:relative laptop:inset-y-0 laptop:flex-row laptop:space-y-0 laptop:space-x-6`}
      >
        {/* Portal */}
        <Item id="start" href="https://app.unchain.tech/" text="Start" />
        <Item id="news" href="/news" text="News" />

        {/* contact */}
        <Item
          id="contact"
          href="https://shiftbase.xyz/contact"
          text="Contact"
          newpage
        />
      </div>
    );
  };

  return (
    <div className="mx-2 items-center desktop:mx-12">
      <div id="laptopmenu" className="hidden laptop:block">
        <MenuItems open />
      </div>
      <div id="mobilemenu" className="block laptop:hidden">
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
        <MenuItems open={isMenuOpen} />
      </div>
    </div>
  );
};
