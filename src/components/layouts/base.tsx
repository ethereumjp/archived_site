import Footer from '@/components/footer';
import Header from '@/components/header';
import { globalStyles } from '@/themes/global';
// import { mq } from '@/themes/settings/breakpoints';
// import { themeDark, themeLight } from '@/themes/settings/color';
import type { PageProps } from '@/types';

// import createCache from '@emotion/cache';
import { CacheProvider, Global, ThemeProvider, css } from '@emotion/react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

export const metadata = {
  title: {
    template: '%s | Ethereum Japan',
    default: 'Ethereum Japan',
  },
  description: 'Everything Ethereum in Japan',
  keywords: ['Ethereum', 'Japan', 'Blockchain'],
  category: 'technology',
  authors: [{ name: 'Ethereum Japan', url: 'https://github.com/ethereumjp' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ethereum Japan',
    description: 'Everything Ethereum in Japan',
    url: 'https://ethereumjapan.org',
    siteName: 'ethereumjapan.org',
    images: [
      {
        url: 'https://ethereumjapan.org/logo/ej.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethereum Japan',
    description: 'Everything Ethereum in Japan',
    siteId: '1511737631948034048',
    creator: '@zsh0x',
    creatorId: '1511737631948034048',
    images: ['https://ethereumjapan.org/ej.png'],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#B8FAF6' },
    { media: '(prefers-color-scheme: dark)', color: '#C9B3F5' },
  ],
  icons: {
    icon: '/logo/ej.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

const fontInter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// const styleCache = createCache({ key: 'next' });

const RootLayout: FC<PageProps> = ({ pageTitle, children }) => {
  const siteTitle = 'Ethereum Japan';

  return (
    <>
      {/* <CacheProvider value={styleCache}> */}
      {/* <ThemeProvider theme={<Global styles={globalStyles} />}> */}
      <Global styles={globalStyles} />

      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
      </Head>

      <body className={fontInter.className}>
        <Header />
        <main
          css={css`
            background-color: #B8FAF6;
          `}
        >
          {children}
        </main>
        <Footer />
      </body>
      {/* </ThemeProvider> */}
      {/* </CacheProvider> */}
    </>
  );
};

export default RootLayout;
