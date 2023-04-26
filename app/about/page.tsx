import { NextPage } from 'next';

import type { PageProps } from '@/components/types';

export const metadata = {
  title: 'About',
};

const About: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1 className="text-info">About</h1>
    </div>
  );
};

export default About;
