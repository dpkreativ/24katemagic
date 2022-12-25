import '../styles/globals.css';
import { Gloria_Hallelujah } from '@next/font/google';

const gh = Gloria_Hallelujah({ subsets: ['latin'], weight: '400' });

function MyApp({ Component, pageProps }) {
  return (
    <div className={gh.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
