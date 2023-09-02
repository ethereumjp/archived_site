import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import pandaHero from 'public/images/hero-panda.png';

import Layout from '@/components/layouts/base';
import type { PageProps } from '@/types';
import { css } from '@emotion/react';

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  const introStyle = css`
    text-align: center;


  `;
  return (
    <Layout pageTitle='landing'>
      <Image
        src={pandaHero}
        alt='image of Ethereum'
        style={{
          width: '100%',
          height: 'auto',
        }}
        priority
      />

      <div>
        <section css={introStyle}>
          <h1 className=''>イーサリアム・ジャパンへようこそ</h1>
          <p
            css={css`
              font-size: 1.3rem;
            `}
          >
            イーサリアムは、暗号通貨Ether
            (ETH)、何千もの分散型アプリを可能にするコミュニティにより運用されているテクノロジーです。
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Page;
