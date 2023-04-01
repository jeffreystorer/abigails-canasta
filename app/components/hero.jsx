import Link from 'next/link';
import Image from 'next/image';
import VStack from '@/app/components/vstack';
import NavBar from '@/app/components/navbar';
import Banner from '@/public/abigails-banner.png';
export default function Hero() {
  return (
    <header className='-center -header'>
      <VStack spacing={0}>
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
