import useSound from 'use-sound';
import { PlayIcon } from '../assets/Icons';
import { StaggeredText } from './Animations';

export default function PlayScreen() {
  const [play] = useSound(`/audio/audio.mp3`);

  return (
    <div className="flex flex-col space-y-10 items-center">
      <div className="relative w-max animate-bounce" onClick={play}>
        <PlayIcon />
        <div className="absolute top-0 left-0 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-10">
          <PlayIcon />
        </div>
      </div>

      <div className="flex flex-col space-y-6 items-center justify-center">
        <StaggeredText text={`Tap to start`} className={`text-3xl`} />
        <StaggeredText
          text={`Put on your headphones`}
          split={' '}
          className={`text-xs`}
        />
      </div>
    </div>
  );
}
