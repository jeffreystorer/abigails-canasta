import Image from 'next/image';
import Banner from '/public/abigails-banner.png';
export default function Hero() {
  return (
    <header>
        <Image
          priority='true'
          height='105'
          width='381'
          src={Banner}
          alt='Skidaway Abigails'
        />
        <h1>Canasta</h1>
    </header>
  );
}
