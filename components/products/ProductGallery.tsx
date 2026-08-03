"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const activeSrc = product.images[active];
  const isActiveVideo = activeSrc?.match(/\.(mp4|webm)$/i);

  return (
    <div>
      <div
        className={cn(
          "relative aspect-square rounded-2xl overflow-hidden border border-secondary-100 bg-white",
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
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
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
