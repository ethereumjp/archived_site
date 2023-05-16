import { AppProps } from 'next/app';

import './style.linaria.global';

const EthJpSite = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default EthJpSite;
