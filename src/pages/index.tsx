import { NextPage } from 'next';
import Link from 'next/link';

import type { PageProps } from '@/types';

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <div>
      <h1 className="text-info">
        Typography {'<'}h1{'>'}
      </h1>
      <h2 className="text-blue-500">
        Typography {'<'}h2{'>'}
      </h2>
      <h3 className="text-indigo-500">
        Typography {'<'}h3{'>'}
      </h3>
      <p className="text-violet-500">
        Typography {'<'}p{'>'}
      </p>
      <Link href="/about">Jump</Link>
    </div>
  );
};

export default Page;
