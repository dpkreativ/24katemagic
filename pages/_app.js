import '../styles/globals.css';
import { Gloria_Hallelujah } from '@next/font/google';
import { useEffect, useState } from 'react';
import Loader from '../components/ui/Loader';

const gh = Gloria_Hallelujah({ subsets: ['latin'], weight: '400' });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={gh.className}>
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}

export default MyApp;
