import { FC } from 'react';

import type { ComponentProps } from '@/components/types';

const Loading: FC<ComponentProps> = ({ children }) => {
  const LoadingSkeleton = () => {
    return <div />;
  };
  return <LoadingSkeleton />;
};

export default Loading;
