'use client';

import { mq } from '@/themes/settings/breakpoints';
import { themeLight } from '@/themes/settings/color';
import { css } from '@emotion/react';

import { Spin as Hamburger } from 'hamburger-react';

import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

export const NavMenu: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navMenuStyle = css`
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    ${mq.desktop} {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  `;

  const laptopMenuStyle = css`
    display: none;

    ${mq.laptop} {
      display: block;
    }
  `;

  const mobileMenuStyle = css`
    display: flex;
    transform: ${isMenuOpen ? 'translateX(-10rem)' : 'translateX(0%)'};
    transition-duration: 150ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

    ${mq.laptop} {
      display: none;
    }
  `;

  const wrapperStyle = css`
    background-color: rgb(224 231 255);
    border-color: rgb(171 171 254);
    border-radius: 0.25rem;
    border-width: 4px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -10rem;
    text-align: end;

    ${mq.laptop} {
      background-color: inherit;
      flex-direction: row;
      position: relative;
      right: 0;
    }
  `;

  const MenuItem: FC<{
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
        css={css`
          border-color: rgb(171 171 254);
          border-style: solid;
          border-width: 1px;
          font-size: 1.125rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.75rem;
          padding: 0.5rem;
          padding-left: 1rem;
          padding-right: 1rem;

          ${mq.laptop}{
            border-width: 0;
            font-size: 1.5rem;
            line-height: 2rem;

            &:hover {
              opacity: 0.6;
            }
          }
        `}
      >
        {text}
      </Link>
    );
  };

  return (
    <div css={navMenuStyle}>
      <div css={laptopMenuStyle}>
        <div css={wrapperStyle}>
          <MenuItem id='home' href='/' text='Home' />
          <MenuItem id='events' href='/event' text='Events' />
          <MenuItem id='about' href='/about' text='About' />
          <MenuItem id='contact' href='/contact' text='Contact' />
        </div>
      </div>

      <div css={mobileMenuStyle}>
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />

        <div css={wrapperStyle}>
          <MenuItem id='home' href='/' text='Home' />
          <MenuItem id='events' href='/event' text='Events' />
          <MenuItem id='about' href='/about' text='About' />
          <MenuItem id='contact' href='/contact' text='Contact' />
        </div>
      </div>
    </div>
  );
};
