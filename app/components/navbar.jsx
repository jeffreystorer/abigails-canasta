'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/app/styles/NavBar.module.css';

export default function NavBar() {
  const segment = useSelectedLayoutSegment();
  let currentRoute = '/';
  if (segment) currentRoute = '/' + segment;
  const routes = [
    {
      path: '/',
      title: 'Players for This Friday',
    },
    {
      path: '/wanttoplay',
      title: 'Want to Play',
    },
    {
      path: '/waitlistlastweek',
      title: 'Wait List Last Week',
    },
    {
      path: '/host',
      title: 'Host',
    },
    {
      path: '/playerinfo',
      title: 'Player Info',
    },
  ];

  return (
    <>
      <nav className={styles['-topNav']}>
        {routes.map((route) => (
          <Link
            key={uuidv4()}
            href={route.path}
            className={
              currentRoute === route.path
                ? styles['-active']
                : styles['-nonActive']
            }>
            {route.title}
          </Link>
        ))}
      </nav>
    </>
  );
}
