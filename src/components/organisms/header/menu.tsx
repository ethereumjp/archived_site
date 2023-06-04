'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin as Hamburger } from 'hamburger-react';

import { mq } from '@/themes/settings/breakpoints';

export const NavMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const Bar = styled.nav({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
    padding: '2vh 4vw',
    position: 'relative',

    [mq.tablet]: {
      flexDirection: 'row',
      visibility: 'visible',
    },
  });

  const MainNav = styled.ul({
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    listStyleType: 'none',

    [mq.tablet]: {
      display: 'flex !important',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });

  const NavLi = styled.li({
    margin: '14px auto',
  });

  const BurgerWrapper = styled.div({
    [mq.tablet]: {
      visibility: 'hidden',
    },
  });

  const menuItem = css({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.2rem',
    letterSpacing: '1.5px',
    listStyleType: 'none',

    [mq.tablet]: {
      margin: '0 10px',
    },

    [mq.laptop]: {
      fontSize: '1.4rem',
      margin: '0 20px',
    },
  });

  const Item: FC<{
    id: string;
    href: string;
    text: string;
    newpage?: boolean;
  }> = ({ id, href, text, newpage }) => {
    const ItemLink = styled(Link)({
      fontWeight: 500,
    });
    return (
      <ItemLink
        id={id}
        href={href}
        passHref={true}
        target={newpage ? '_blank' : '_self'}
        css={menuItem}
      >
        {text}
      </ItemLink>
    );
  };

  return (
    <Bar>
      <BurgerWrapper>
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
      </BurgerWrapper>
      <MainNav>
        <NavLi>
          <Item id='home' href='/' text='Home' />
        </NavLi>
        <NavLi>
          <Item id='about' href='/about' text='About' />
        </NavLi>
      </MainNav>
    </Bar>
  );
};
