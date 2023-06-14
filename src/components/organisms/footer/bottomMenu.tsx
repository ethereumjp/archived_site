import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

export const BottomMenu = () => {
  const MenuWrapper = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  `;

  const NavLink: FC<{ id: string; href: string; text: string }> = ({
    id,
    href,
    text,
  }) => {
    const listStyle = css`
      list-style-type: none;
      margin: 12px 0;
    `;

    const linkStyle = css`
      color: #646464;
      &:hover {
        opacity: 0.6;
      }
    `;

    return (
      <li css={listStyle}>
        <a id={id} href={href} css={linkStyle}>
          {text}
        </a>
      </li>
    );
  };

  return (
    <MenuWrapper>
      <section id='use_ethereum'>
        <h4>触ってみる</h4>
        <NavLink id='a' href='#' text='リンク' />
      </section>

      <section id='learn_ethereum'>
        <h4>理解する</h4>
        <NavLink
          id='whitepaper'
          href='https://ethereum.org/en/whitepaper/'
          text='Ethereum Whitepaper'
        />
      </section>

      <section id='develop_on_ethereum'>
        <h4>開発する</h4>
        <NavLink id='c' href='#' text='リンク' />
      </section>

      <section id='ethereum_ecosystem'>
        <h4>参加する</h4>
        <NavLink id='d' href='#' text='リンク' />
      </section>

      <section id='for_enterprise'>
        <h4>事業者の皆さん</h4>
        <NavLink id='e' href='#' text='リンク' />
      </section>

      <section id='about_ethereum_jp'>
        <h4>Ethereum JPについて</h4>
        <NavLink id='about' href='/about' text='Ethereum JPとは' />
      </section>
    </MenuWrapper>
  );
};
