import Hero from '@/components/hero';
import NavBar from '@/components/navbar';
import '@/app/globals.css';
import { WAIT_URL } from '@/constants';

async function getData() {
  const res = await fetch(WAIT_URL, { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) return []; /* {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  } */

  return res.json();
}

export const revalidate = 10;

export const metadata = {
  title: 'Abigails Canasta',
  description: 'Abigails Canasta Tables',
};

export default async function RootLayout({ children }) {
  const data = await getData();
  return (
    <html lang='en'>
      <body>
          <Hero />
          <NavBar data={data} />
          {children}
      </body>
    </html>
  );
}
