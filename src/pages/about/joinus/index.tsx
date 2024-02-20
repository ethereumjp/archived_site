import { NextPage } from "next";

import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import Link from "next/link";

const Wanted: NextPage<PageProps> = ({ params, searchParams }) => {
  const titleStyle = css`
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.25rem;
    padding-top: 4rem;
    text-align: center;

    ${mq.laptop} {
      font-size: 3rem;
      padding-top: 6rem;
    }
  `;

  const wrapperStyle = css`
    margin-left: auto;
    margin-right: auto;
    padding-top: 2rem;

    ${mq.laptop} {
      width: 75%;
    }
  `;

  return (
    <Layout pageTitle="participate">
      <h1 css={titleStyle}>JOIN US</h1>
      <div css={wrapperStyle}>
        <section id="hiring">
          <div css={css`margin-bottom: 4rem;`}>
            <p>Ethereum Japanでは現在協力者を若干名募集しています。</p>
            <p>
              人員の募集は、不定期で更新され、Twitterまたは本websiteにて告知を行います。
            </p>
            <p>
              Ethereum
              Japanは有志団体であり、基本的に有償での対価は発生しません。
              <Link href="/about">私たちの主旨</Link>
              に賛同いただける方を募集しています。
            </p>
          </div>

          <ul
            css={css`
              margin-bottom: 4rem;
              padding-left: 0px;

              ${mq.laptop} {
                display: flex;

              }
            `}
          >
            <li css={css`flex: 1; list-style-type: none;`}>
              <h3>グラフィックデザイナー</h3>
              <ul>
                <li>
                  コンセプトから実行まで、強力なビジュアルコミュニケーションスキルを持つ方
                </li>
                <li>
                  UI/UX設計の基本原則を理解し、それらを効果的に適用できる方
                </li>
                <li>
                  印刷物とデジタルを横断的に活用し、多様な媒体や材質に適したデザインの作成経験がある方
                </li>
              </ul>
            </li>

            <li css={css`flex: 1; list-style-type: none;`}>
              <h3>税務アドバイザー</h3>
              <ul>
                <li>税理士資格を有する方</li>
                <li>会計、税務に関する実務経験を持つ方</li>
              </ul>
            </li>
          </ul>
        </section>

        <p>
          <Link href="/contact">問い合わせページ</Link>よりご連絡ください。
        </p>
      </div>
    </Layout>
  );
};

export default Wanted;
