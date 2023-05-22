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

  const Bar = styled.nav`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    min-height: 10vh;
    padding: 2vh 4vw;
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
    }
  `;

  const NavLi = styled.li`
    margin: 14px auto;
    text-align: end;
  `;

  const BurgerWrapper = styled.div`
    ${mq.tablet} {
      visibility: hidden;
    }
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
        text-decoration: underline;
      }
    `;
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
