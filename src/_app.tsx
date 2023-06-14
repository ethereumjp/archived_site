// import createCache from '@emotion/cache';
// import { CacheProvider, Global, ThemeProvider, css } from '@emotion/react';
import type { AppProps } from 'next/app';

// import { themeDark, themeLight } from '@/themes/settings/color';

// const styleCache = createCache({ key: 'next' });

const EthJpSite = ({ Component, pageProps }: AppProps) => {
  return (
    // <CacheProvider value={styleCache}>
    //   <ThemeProvider theme={true ? themeDark : themeLight}>
    //     <Global styles={css``} />
    <Component {...pageProps} />
    //   </ThemeProvider>
    // </CacheProvider>
  );
};

export default EthJpSite;
