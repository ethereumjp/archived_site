import { Glyph } from '@/components/atoms/glyph';
import { NavMenu } from '@/components/molecules/navMenu';
import { mq } from '@/constants';

import { css } from '@emotion/react';
import { FC } from 'react';

export const HeaderLeftContainer: FC = () => {
  const leftContainerStyle = css`
    align-items: center;
    display: flex;
    justify-content: space-between;
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
