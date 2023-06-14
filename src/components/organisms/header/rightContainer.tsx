import { SearchInput } from '@/components/molecules/searchInput';
import { ServiceMenu } from '@/components/molecules/serviceMenu';
import { mq } from '@/themes/settings/breakpoints';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

export const HeaderRightContainer: FC = () => {
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
