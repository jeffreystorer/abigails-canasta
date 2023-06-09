'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import HStack from '@/app/components/hstack';
import styles from '@/app/styles/NavBar.module.css';

export default function NavBar({ data }) {
  const pathName = usePathname();
  let showWait = false;
  if (data.length > 1) showWait = true;
  const routes = [
    {
      path: '/',
      title: 'This Friday',
      show: true,
    },
    {
      path: '/wanttoplay',
      title: 'Want to Play',
      show: true,
    },
    {
      path: '/waitlistlastweek',
      title: 'Wait Last Week',
      show: showWait,
    },
    {
      path: '/host',
      title: 'Host',
      show: true,
    },
    {
      path: '/playerinfo',
      title: 'Player Info',
      show: true,
    },
  ];

  return (
    <>
      <nav className={styles['-topNav']}>
        <HStack spacing={1}>
          {routes
            .filter((route) => route.show === true)
            .map((route) => (
              <div key={uuidv4()} className={styles['-topNav a']}>
                <Link
                  href={route.path}
                  className={
                    pathName === route.path
                      ? styles['-active']
                      : styles['-nonActive']
                  }>
                  {route.title}
                </Link>
              </div>
            ))}
        </HStack>
      </nav>
    </>
  );
}
