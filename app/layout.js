import Hero from '@/app/components/hero';
import '@/app/styles/App.css';
import { WAIT_URL } from '@/app/constants';
import { v4 as uuidv4 } from 'uuid';

async function getData() {
  const res = await fetch(WAIT_URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) return []; /* {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  } */

  return res.json();
}

export const metadata = {
  title: 'Abigails Canasta',
  description: 'Abigails Canasta Tables',
};

export default async function RootLayout({ children }) {
  const data = await getData();
  return (
    <html lang='en'>
      <body>
        <Hero data={data} />
        <br />
        {children}
      </body>
    </html>
  );
}
