import { LanguageToggle } from '@/components/molecules/languageToggle';
import { NavMenu } from '@/components/molecules/navMenu';
import { ThemeToggle } from '@/components/molecules/themeToggle';
import { mq } from '@/constants';

import { css } from '@emotion/react';

export const ServiceMenu = () => {
  const navMenuStyle = css`
    display: block;

    ${mq.tablet} {
        display: none;
    }
  `;
  return (
    <>
      <ThemeToggle />
      <LanguageToggle />

      <div css={navMenuStyle}>
        <NavMenu />
      </div>
    </>
  );
};
