import Hero from '@/app/components/hero';
import '@/app/styles/App.css';

export const metadata = {
  title: 'Abigails Canasta',
  description: 'Abigails Canasta Tables',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Hero />
        <br />
        {children}
      </body>
    </html>
  );
}
