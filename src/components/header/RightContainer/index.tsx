import { SearchInput } from './SearchInput';
import { ServiceMenu } from './ServiceMenu';

import { css } from '@emotion/react';
import { FC } from 'react';

export const RightContainer: FC = () => {
  const rightContainerStyle = css`
    align-items: start;
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
  `;

  return (
    <div css={rightContainerStyle}>
      {/* <SearchInput /> */}
      <ServiceMenu />
    </div>
  );
};
