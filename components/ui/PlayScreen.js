import useSound from 'use-sound';
import { PlayIcon } from '../assets/Icons';

export default function PlayScreen() {
  const [play] = useSound(`/audio/audio.mp3`);

  return (
    <div className="flex flex-col space-y-48">
      <div>Put on your headphones</div>
      <div className="flex flex-col space-y-6 items-center justify-center">
        <div>Tap this</div>
        <div className="relative w-max" onClick={play}>
          <PlayIcon />
          <div className="absolute top-0 left-0 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10">
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
