import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" className="h-10 w-10" height={50} width={50} alt="Logo" />
      <p className="text-xl font-semibold tracking-tight">Youtube</p>
    </div>
  );
}
