import { ReactNode } from 'react';

export interface PageProps {
  params: {
    id: string[];
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface ComponentProps {
  children?: ReactNode;
}
