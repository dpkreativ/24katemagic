import '../styles/globals.css';
import { Gloria_Hallelujah } from '@next/font/google';
import { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader';
import { Analytics } from '@vercel/analytics/react';

const gh = Gloria_Hallelujah({ subsets: ['latin'], weight: '400' });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={gh.className}>
          <Component {...pageProps} />
          <Analytics />
        </div>
      )}
    </>
  );
}

export default MyApp;
