import type { FC } from 'react';

import type { ComponentProps } from '@/types';

const NotFound: FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
};

export default NotFound;
