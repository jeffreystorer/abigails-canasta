import Hero from '@/app/components/hero';
import NavBar from '@/app/components/navbar';
import VStack from '@/app/components/vstack';
import '@/app/globals.css';
import { WAIT_URL } from '@/app/constants';
import { v4 as uuidv4 } from 'uuid';

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
        <VStack spacing={3}>
          <Hero />
          <NavBar data={data} />
          {children}
        </VStack>
      </body>
    </html>
  );
}
