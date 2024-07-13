import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.scss';
import Navbar from '../components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'firstnext.jsapp',
  description: 'trial next.js app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inter.className}`}>
        <Navbar />
        <main className={styles.main_box}>{children}</main>
      </body>
    </html>
  );
}
