import Image from 'next/image';

export default function KateImage({
  alt = 'kate',
  className,
  src = '/images/eight.jpg',
}) {
  return (
    <div className={`${className} relative border-8 border-white shadow-xl`}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  );
}
