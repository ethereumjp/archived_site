'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin as Hamburger } from 'hamburger-react';

import { mq } from '@/constants';

export const NavMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const BurgerWrapper = styled.div`
    ${mq.tablet} {
      visibility: hidden;
    }
  `;

  const Bar = styled.nav`
    align-items: flex-end;
    display: ${isMenuOpen ? 'flex' : 'flex'};
    flex-direction: column;
    position: relative;

    ${mq.tablet} {
      flex-direction: row;
      visibility: visible;
    }
  `;

  const MainNav = styled.ul`
    display: ${isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    list-style-type: none;

    ${mq.tablet} {
      display: flex !important;
      flex-direction: row;
      justify-content: flex-end;
      text-align: end;
    }
  `;

  const NavLi = styled.li`
    margin: 12px 0;
    text-align: end;
  `;

  const menuItem = css`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    list-style-type: none;

    ${mq.tablet} {
      margin: 0 10px;
    }
    ${mq.laptop} {
      font-size: 1.4rem;
      margin: 0 20px;
    }
  `;

  const Item: FC<{
    id: string;
    href: string;
    text: string;
    newpage?: boolean;
  }> = ({ id, href, text, newpage }) => {
    const ItemLink = styled(Link)`
      font-weight: 500;
      text-decoration: none;

      &:hover {
        opacity: 0.6;
      }
    `;
    return (
      <NavLi>
        <ItemLink
          id={id}
          href={href}
          passHref={true}
          target={newpage ? '_blank' : '_self'}
          css={menuItem}
        >
          {text}
        </ItemLink>
      </NavLi>
    );
  };

  return (
    <Bar>
      <BurgerWrapper>
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
      </BurgerWrapper>
      <MainNav>
        <Item id='home' href='/' text='Home' />
        <Item id='events' href='/events' text='Events' />
        <Item id='about' href='/about' text='About' />
      </MainNav>
    </Bar>
  );
};
