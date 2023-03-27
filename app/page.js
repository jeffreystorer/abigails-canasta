import Image from 'next/image';
import { PLAYERS_URL } from '@/app/constants';
import { v4 as uuidv4 } from 'uuid';

async function getData() {
  const res = await fetch(PLAYERS_URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) return []; /* {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  } */

  return res.json();
}

export const revalidate = 60;

export default async function Home() {
  const data = await getData();
  if (data.length === 0)
    return (
      <>
        <div className='-center'>
          <h1>Next Friday&apos;s list will be available on Monday</h1>
        </div>
      </>
    );
  const values = data.values;
  const ths = values[0];
  values.shift();
  const tds = values;
  const playerCount = tds.length;
  let colorCount;
  switch (true) {
    case playerCount < 5:
      colorCount = playerCount;
      break;
    case playerCount < 8:
      colorCount = 4;
      break;
    case playerCount >= 8:
      colorCount = 8;
    default:
      break;
  }

  return (
    <>
      <div className='-center'>
        <ol className='-ol'>
          {tds.map((td, index) => (
            <li
              key={uuidv4()}
              className='-li'
              style={{
                color: index < colorCount ? 'limegreen' : 'red',
                fontWeight: 'bold',
              }}>
              {'   '}
              {td[1]} {td[2]}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
