'use server';

import Link from 'next/link';
import Image from 'next/image';
import VStack from '@/app/components/vstack';
import Banner from '@/public/abigails-banner.png';
export default async function Header() {
  return (
    <header className='-center -header'>
      <VStack spacing={5}>
        <Image
          priority='true'
          height='105'
          width='381'
          src={Banner}
          alt='Skidaway Abigails'
        />
        <h1>Canasta</h1>
      </VStack>
    </header>
  );
}
