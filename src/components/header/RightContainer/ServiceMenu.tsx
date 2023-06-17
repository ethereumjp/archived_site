import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { NavMenu } from '@/components/header/common/NavMenu';
import { mq } from '@/themes/settings/breakpoints';

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
      {/* <ThemeToggle />
      <LanguageToggle /> */}

      <div css={navMenuStyle}>
        <NavMenu />
      </div>
    </>
  );
};
