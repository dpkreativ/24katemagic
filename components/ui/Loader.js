import Image from 'next/image';

export default function Loader() {
  return (
    <div className="h-screen w-full relative flex flex-col space-y-48 items-center justify-center">
      <Image
        src={`/images/loading.gif`}
        fill
        style={{ objectFit: 'contain' }}
        alt={`loading`}
      />
    </div>
  );
}
