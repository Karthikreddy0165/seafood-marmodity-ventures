'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LogoImage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Image
      src="/logo.png"
      alt="Marmodity Ventures Logo"
      width={90}
      height={90}
      className=" rounded-lg"
      priority
    />
  );
}
