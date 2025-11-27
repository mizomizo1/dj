"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  fill,
  width = 800,
  height = 800,
}: Props) {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? "/images/fallback.png" : src}
      alt={alt}
      className={className}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      onError={() => setError(true)}
      unoptimized={false}
    />
  );
}
