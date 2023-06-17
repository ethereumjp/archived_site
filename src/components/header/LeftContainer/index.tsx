import { NavMenu } from '../common/NavMenu';
import { Glyph } from './Glyph';
import { mq } from '@/themes/settings/breakpoints';

import { css } from '@emotion/react';
import { FC } from 'react';

export const LeftContainer: FC = () => {
  const leftContainerStyle = css`
    align-items: center;
    display: flex;
    justify-content: space-between
  `;

  return (
    <div css={leftContainerStyle}>
      <Glyph />

      <div
        css={css`
          display: none;

          ${mq.tablet} {
            display: block;
          }
        `}
      >
        <NavMenu />
      </div>
    </div>
  );
};
