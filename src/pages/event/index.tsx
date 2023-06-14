import { NextPage } from 'next';

import RootLayout from '@/components/layouts/base';
import type { PageProps } from '@/types';

const Events: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <RootLayout pageTitle='events'>
      <div>
        <h1>Events</h1>
      </div>
    </RootLayout>
  );
};

export default Events;
