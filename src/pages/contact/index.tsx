import ContactForm from '@/components/forms/ContactForm';
import RootLayout from '@/components/layouts/base';
import { mq } from '@/themes/settings/breakpoints';
import { css } from '@emotion/react';
import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <RootLayout pageTitle='Contact'>
      <div
        css={css`
          padding-left:2rem;
          padding-right: 2rem;
          padding-top: 6rem;
          text-align: center;

          ${mq.laptop} {
            padding-top: 10rem;
          }
        `}
      >
        <div
          css={css`
          font-size: 3rem;
          font-weight: 300;
          letter-spacing: 0.25rem;
        `}
        >
          CONTACT FORM
        </div>
        <div
          css={css`
            margin-left: auto;
            margin-right: auto;
            padding-top: 4rem;

            ${mq.laptop} {
              width: 75%;
            }
          `}
        >
          <ContactForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
