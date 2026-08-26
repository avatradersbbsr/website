"use client";

import { useState, useRef, useCallback } from "react";
import { Product } from "@/types/product";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";
import { cn } from "@/lib/utils";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  // Touch swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      // Swiped left → next image
      setActive((prev) => (prev + 1) % product.images.length);
    } else {
      // Swiped right → previous image
      setActive((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  }, [product.images.length]);

  const goNext = () => setActive((prev) => (prev + 1) % product.images.length);
  const goPrev = () => setActive((prev) => (prev - 1 + product.images.length) % product.images.length);

  const activeSrc = product.images[active];
  const isActiveVideo = activeSrc?.match(/\.(mp4|webm)$/i);

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden">
      {/* Main image with touch swipe */}
      <div
        className={cn(
          "relative aspect-square rounded-2xl overflow-hidden border border-secondary-100 bg-white touch-pan-y",
          !isActiveVideo && "cursor-zoom-in"
        )}
        onMouseMove={(e) => {
          if (isActiveVideo) return;
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
        onMouseEnter={() => {
          if (!isActiveVideo) setZoom(true);
        }}
        onMouseLeave={() => setZoom(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isActiveVideo ? (
          <video
            src={activeSrc}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain"
          />
        ) : (
          <div
            className={cn("h-full w-full transition-transform duration-200", zoom && "scale-[1.8]")}
            style={zoom ? { transformOrigin: `${pos.x}% ${pos.y}%` } : undefined}
          >
            <ProductImageWithFallback
              src={activeSrc}
              alt={`${product.name} - View ${active + 1}`}
              category={product.category}
              priority
              className="h-full w-full object-contain p-4"
            />
          </div>
        )}

        {/* Navigation arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border border-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-white shadow-sm transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border border-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-white shadow-sm transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Dot indicators on mobile */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 sm:hidden">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active === i ? "w-5 bg-primary" : "w-1.5 bg-secondary-300/60"
                )}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails — hidden on mobile (dots used instead), visible on sm+ */}
      <div className="mt-4 hidden sm:flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {product.images.map((img, i) => {
          const isVideo = img.match(/\.(mp4|webm)$/i);
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-colors bg-white relative",
                active === i ? "border-primary" : "border-secondary-100"
              )}
              aria-label={`View media ${i + 1} of ${product.name}`}
            >
              {isVideo ? (
                <div className="relative h-full w-full flex items-center justify-center bg-secondary-900 text-white">
                  <span className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </span>
                  <video src={img} muted className="h-full w-full object-cover opacity-80" />
                </div>
              ) : (
                <ProductImageWithFallback
                  src={img}
                  alt={`${product.name} Thumbnail ${i + 1}`}
                  category={product.category}
                  className="h-full w-full object-contain p-1"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
