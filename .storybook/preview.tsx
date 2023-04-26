import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/iFsEDE9jCVe1mANQZVrcOD',
  },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <Story />
      </>
    );
  },
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
