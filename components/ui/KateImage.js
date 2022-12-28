import Image from 'next/image';

export default function KateImage({
  alt = 'kate',
  className,
  src = '/images/loading.gif',
}) {
  return (
    <div className={`${className} relative`}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  );
}
