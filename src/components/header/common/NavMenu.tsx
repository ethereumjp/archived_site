'use client';

import { mq } from '@/themes/settings/breakpoints';
import { themeLight } from '@/themes/settings/color';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin as Hamburger } from 'hamburger-react';
import { wrap } from 'module';
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
    display: block;

    ${mq.laptop} {
      display: none;
    }
  `;

  const wrapperStyle = css`
    background-color: ${isMenuOpen ? 'blue' : 'inherit'};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    text-align: end;

    ${mq.laptop} {
      flex-direction: row;
    }
  `;

  const movingContainer = css`
    display: flex;
    position: absolute;
    top: 1rem;
    transform: ${isMenuOpen ? 'translateX(-9rem)' : 'translateX(-2rem)'};
    transition-duration: 150ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
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
          font-size: 1.125rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.75rem;

          ${mq.desktop}{
            font-size: 1.5rem;
            line-height: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;

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
        <div css={movingContainer}>
          <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
          <div css={css`position: relative`}>
            <div css={wrapperStyle}>
              <MenuItem id='home' href='/' text='Home' />
              <MenuItem id='events' href='/event' text='Events' />
              <MenuItem id='about' href='/about' text='About' />
              <MenuItem id='contact' href='/contact' text='Contact' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
