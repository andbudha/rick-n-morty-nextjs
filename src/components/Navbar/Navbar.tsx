'use client';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navbar_main_box}>
      <ul className={styles.navbar_link_box}>
        <Link
          className={`${styles.navbar_link} ${
            pathname === '/' && styles.active_link
          }`}
          href={'/'}
        >
          Home
        </Link>
        <Link
          className={`${styles.navbar_link} ${
            pathname.includes('characters') && styles.active_link
          }`}
          href={'/characters/1'}
        >
          Characters
        </Link>
        <Link
          className={`${styles.navbar_link} ${
            pathname === '/episodes' && styles.active_link
          }`}
          href={'/episodes'}
        >
          Episodes
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
