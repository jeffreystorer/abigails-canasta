import TableBody from '@/app/components/tablebody';
import TableHeader from '@/app/components/tableheader';

import { WANT_URL, WAIT_URL, HOST_URL, PLAYERINFO_URL } from '@/app/constants';

async function getData(url, { cache: 'no-store' }) {
  const res = await fetch(url);
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
  console.log('😊😊 data', data);

  return (
    <div className='-center'>
      <table className='-table'>
        <thead>
          <TableHeader type={type} data={data} />
        </thead>
        <tbody>
          <TableBody type={type} data={data} />
        </tbody>
      </table>
    </div>
  );
}
