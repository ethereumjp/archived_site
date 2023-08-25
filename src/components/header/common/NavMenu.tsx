'use client';

import { mq } from '@/themes/settings/breakpoints';
import { themeLight } from '@/themes/settings/color';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

export const NavMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const BurgerWrapper = styled.div`
    ${mq.tablet} {
      visibility: hidden;
    }
  `;

  const Bar = styled.nav`
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    ${mq.tablet} {
      flex-direction: row;
      visibility: visible;
    }
  `;

  const MainNav = styled.ul`
    display: ${isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    list-style-type: none;
    padding: 0;

    ${mq.tablet} {
      display: flex !important;
      flex-direction: row;
    }
  `;

  const NavLi = styled.li`
    background-color: ${themeLight.PrimaryLowContrast};
    border: 1px solid ${themeLight.PrimaryHighContrast};
    border-radius: 4px;
    padding: 12px 20px;
    text-align: end;

    &:hover {
      background-color: ${themeLight.PrimaryHover};
    }

    ${mq.tablet} {
      background-color: transparent;
      border: none;
      &:hover {
        background-color: transparent;
      }
    }
  `;

  const menuItem = css`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    list-style-type: none;

    ${mq.laptop} {
      font-size: 1.4rem;
    }
  `;

  const Item: FC<{
    id: string;
    href: string;
    text: string;
    newpage?: boolean;
  }> = ({ id, href, text, newpage }) => {
    const ItemLink = styled(Link)`
      font-weight: 400;
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
        <Item id='events' href='/event' text='Events' />
        <Item id='about' href='/about' text='About' />
        <Item id='contact' href='/contact' text='Contact' />
      </MainNav>
    </Bar>
  );
};
