import { NextPage } from 'next';

import RootLayout from '@/components/layouts/base';
import type { PageProps } from '@/types';

const About: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <RootLayout pageTitle="about">
      <div>
        <h1 className="text-info">About</h1>
      </div>
    </RootLayout>
  );
};

export default About;
