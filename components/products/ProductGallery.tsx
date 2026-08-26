"use client";

import { useState, useRef, useCallback } from "react";
import { Product } from "@/types/product";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";
import { cn } from "@/lib/utils";
import { Play, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [lightbox, setLightbox] = useState(false);

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
      setActive((prev) => (prev + 1) % product.images.length);
    } else {
      setActive((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  }, [product.images.length]);

  const goNext = () => setActive((prev) => (prev + 1) % product.images.length);
  const goPrev = () => setActive((prev) => (prev - 1 + product.images.length) % product.images.length);

  const activeSrc = product.images[active];
  const isActiveVideo = activeSrc?.match(/\.(mp4|webm)$/i);

  return (
    <>
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
          onClick={() => {
            if (!isActiveVideo) setLightbox(true);
          }}
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
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border border-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-white shadow-sm transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border border-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-white shadow-sm transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Zoom hint icon */}
          {!isActiveVideo && (
            <div className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm border border-secondary-100 flex items-center justify-center text-secondary-500 pointer-events-none">
              <ZoomIn className="h-4 w-4" />
            </div>
          )}

          {/* Image counter badge */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/50 text-white text-[10px] font-semibold px-2.5 py-1 backdrop-blur-sm">
              {active + 1} / {product.images.length}
            </div>
          )}
        </div>

        {/* Thumbnail strip — visible on all screens, smaller on mobile */}
        <div className="mt-3 flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-none">
          {product.images.map((img, i) => {
            const isVideo = img.match(/\.(mp4|webm)$/i);
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-colors bg-white relative",
                  "h-14 w-14 sm:h-20 sm:w-20",
                  active === i ? "border-primary ring-1 ring-primary/30" : "border-secondary-100"
                )}
                aria-label={`View media ${i + 1} of ${product.name}`}
              >
                {isVideo ? (
                  <div className="relative h-full w-full flex items-center justify-center bg-secondary-900 text-white">
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                      <Play className="h-4 w-4 sm:h-6 sm:w-6 text-white fill-white" />
                    </span>
                    <video src={img} muted className="h-full w-full object-cover opacity-80" />
                  </div>
                ) : (
                  <ProductImageWithFallback
                    src={img}
                    alt={`${product.name} Thumbnail ${i + 1}`}
                    category={product.category}
                    className="h-full w-full object-contain p-0.5 sm:p-1"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 z-[110] h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image counter */}
          <div className="absolute top-5 left-5 z-[110] text-white/80 text-sm font-medium">
            {active + 1} / {product.images.length}
          </div>

          {/* Product name */}
          <div className="absolute bottom-20 sm:bottom-6 left-0 right-0 z-[110] text-center px-6">
            <p className="text-white/90 text-sm font-medium line-clamp-2">{product.name}</p>
          </div>

          {/* Main lightbox image */}
          <div
            className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <ProductImageWithFallback
              src={product.images[active]}
              alt={`${product.name} - Fullscreen View ${active + 1}`}
              category={product.category}
              className="max-h-full max-w-full object-contain"
            />

            {/* Lightbox nav arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox thumbnail strip */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto scrollbar-none">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActive(i); }}
                className={cn(
                  "h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all bg-white/10",
                  active === i ? "border-white ring-1 ring-white/40 opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                )}
              >
                <ProductImageWithFallback
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  category={product.category}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
