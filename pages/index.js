import Head from 'next/head';
import { useState } from 'react';
import useSound from 'use-sound';
import BirthdayMessage from '../components/ui/BirthdayMessage';
import PlayScreen from '../components/ui/PlayScreen';

export default function Home() {
  const [viewContent, setViewContent] = useState(false);
  // const [play] = useSound(`/audio/audio.mp3`);

  return (
    <>
      <Head>
        <title>Happy Birthday, Katherine!</title>
        <meta name="description" content="Happy Birthday, Katherine!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home Layout */}
      <div className="h-screen flex items-center justify-center">
        {viewContent ? (
          <BirthdayMessage />
        ) : (
          <div onClick={() => setViewContent(true)}>
            <PlayScreen />
          </div>
        )}
      </div>
    </>
  );
}
