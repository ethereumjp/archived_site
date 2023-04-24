import './style.linaria.global';
import { Inter } from 'next/font/google';

const fontInter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={fontInter.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
