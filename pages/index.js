import Head from 'next/head';
import { useState } from 'react';
import BirthdayMessage from '../components/ui/BirthdayMessage';
import PlayScreen from '../components/ui/PlayScreen';

export default function Home() {
  const [viewContent, setViewContent] = useState(false);

  const audio = new Audio(`/audio/audio.mp3`);

  function handleClick() {
    setViewContent(true);
    audio.play();
  }

  return (
    <>
      <Head>
        <title>Happy Birthday, Katherine!</title>
        <meta name="description" content="Happy Birthday, Katherine!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home Layout */}
      <div className="min-h-screen p-10 flex items-center justify-center">
        {viewContent ? (
          <BirthdayMessage />
        ) : (
          <div onClick={handleClick}>
            <PlayScreen />
          </div>
        )}
        {/* <BirthdayMessage /> */}
      </div>
    </>
  );
}
