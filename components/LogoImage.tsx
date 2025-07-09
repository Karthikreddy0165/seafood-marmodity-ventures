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
      src="/logo.jpeg"
      alt="Marmodity Ventures Logo"
      width={64}
      height={64}
      className="rounded-lg"
      priority
    />
  );
}
