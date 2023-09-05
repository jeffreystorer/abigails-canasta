import TableBody from '@/components/tablebody';
import TableHeader from '@/components/tableheader';

import { WANT_URL, WAIT_URL, HOST_URL, PLAYERINFO_URL } from '@/constants';

async function getData(url) {
  const res = await fetch(url, { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) return [];

  return res.json();
}

export const revalidate = 10;

export default async function Table({ type }) {
  const url = {
    want: WANT_URL,
    wait: WAIT_URL,
    host: HOST_URL,
    playerinfo: PLAYERINFO_URL,
  };
  const data = await getData(url[type]);

  return (
      <table id={type}>
        {type !== 'playerinfo' && (
          <thead>
          <TableHeader data={data} />
        </thead>)}
        <tbody>
          <TableBody type={type} data={data} />
        </tbody>
      </table>
  );
}
