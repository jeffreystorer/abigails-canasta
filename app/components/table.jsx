import TableBody from '@/app/components/tablebody';
import TableHeader from '@/app/components/tableheader';

import { BASE_URL, SHEET_ID, BATCH_KEY } from '@/app/constants';

const BATCH_URL =
  BASE_URL +
  SHEET_ID +
  '/values:batchGet?ranges=Want%20to%20Play&ranges=Wait%20List%20Last%20Week&ranges=Host&ranges=Player%20Info' +
  BATCH_KEY;

async function getData() {
  const res = await fetch(BATCH_URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Table({ type }) {
  const data = await getData();

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
