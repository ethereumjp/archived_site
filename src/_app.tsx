import { AppProps } from 'next/app';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const styleCache = createCache({ key: 'next' });

const EthJpSite = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={styleCache}>
      {/* {globalStyles} */}
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default EthJpSite;
