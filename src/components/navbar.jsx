'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

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
      <nav>
          {routes
            .filter((route) => route.show === true)
            .map((route) => (
              <Fragment key={uuidv4()}>
                <Link
                  href={route.path}
                  className={
                    pathName === route.path
                      ? 'active'
                      : 'inactive'
                  }>
                  {route.title}
                </Link>
              </Fragment>
            ))}
      </nav>
  );
}
