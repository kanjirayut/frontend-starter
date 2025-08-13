import { Suspense } from 'react';
import Spinner from '@components/layout/Spinner';

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </>
  );
}
