import { css } from '@emotion/react';

import { SocialIcon } from 'react-social-icons';

export const Socials = () => {
  const container = css`
    display: flex;
    gap: 16px;
    justify-content: end;
    padding: 16px;
  `;

  return (
    <div css={container}>
      <SocialIcon
        url='https://github.com/ethereumjp'
        bgColor='transparent'
        fgColor='#000000'
        label='Github'
        target='_blank'
        rel='noreferrer'
      />
      <SocialIcon
        url='https://twitter.com/Ethereum_JP'
        bgColor='transparent'
        fgColor='#1DA1F2'
        label='Twitter'
        target='_blank'
        rel='noreferrer'
      />
      <SocialIcon
        url='https://discord.gg/Tm5jU3DSCE'
        bgColor='white'
        fgColor='#7289DA'
        label='Discord'
        target='_blank'
        rel='noreferrer'
      />
    </div>
  );
};
