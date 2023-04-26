'use client';

import { FC, useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

// rome-ignore lint/suspicious/noShadowRestrictedNames: This is a nextjs error boundary component
const Error: FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default Error;
