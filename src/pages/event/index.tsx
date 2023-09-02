import { NextPage } from 'next';

import Layout from '@/components/layouts/base';
import type { PageProps } from '@/types';

const Events: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle='events'>
      <div>
        <h1>Events</h1>
      </div>
    </Layout>
  );
};

export default Events;
