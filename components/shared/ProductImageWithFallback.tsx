"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ProductImagePlaceholder from "./ProductImagePlaceholder";
import { CategorySlug } from "@/types/product";

interface ProductImageWithFallbackProps {
  src?: string;
  alt: string;
  category: CategorySlug;
  className?: string;
  priority?: boolean;
}

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export default function ProductImageWithFallback({
  src,
  alt,
  category,
  className,
  priority = false,
}: ProductImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [attemptIndex, setAttemptIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setAttemptIndex(0);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (!src) return;

    const extMatch = src.match(/(\.(jpg|jpeg|png|webp))$/i);
    if (extMatch && attemptIndex < EXTENSIONS.length - 1) {
      const currentExt = extMatch[0];
      const baseSrc = src.substring(0, src.length - currentExt.length);

      let nextIndex = attemptIndex + 1;
      if (nextIndex < EXTENSIONS.length && EXTENSIONS[nextIndex] === currentExt.toLowerCase()) {
        nextIndex++;
      }

      if (nextIndex < EXTENSIONS.length) {
        setAttemptIndex(nextIndex);
        setCurrentSrc(`${baseSrc}${EXTENSIONS[nextIndex]}`);
        return;
      }
    }

    setFailed(true);
  };

  if (!currentSrc || failed) {
    return <ProductImagePlaceholder category={category} className={className} />;
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={600}
      height={600}
      className={className}
      onError={handleError}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  );
}
