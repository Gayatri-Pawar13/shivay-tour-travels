"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ScannerImage({
  src,
  alt,
  className,
  width = 320,
  height = 320,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-auto w-full", className)}
      onError={() => setCurrentSrc("/images/scanner-placeholder.svg")}
    />
  );
}

