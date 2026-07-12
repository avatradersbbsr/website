"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <div>
      <div
        className="relative aspect-square rounded-2xl overflow-hidden border border-secondary-100 cursor-zoom-in"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        <div
          className={cn("h-full w-full transition-transform duration-200", zoom && "scale-[1.8]")}
          style={zoom ? { transformOrigin: `${pos.x}% ${pos.y}%` } : undefined}
        >
          <ProductImageWithFallback
            src={product.images[active]}
            alt={`${product.name} - View ${active + 1}`}
            category={product.category}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {product.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "aspect-square rounded-xl overflow-hidden border-2 transition-colors",
              active === i ? "border-primary" : "border-transparent"
            )}
            aria-label={`View image ${i + 1} of ${product.name}`}
          >
            <ProductImageWithFallback
              src={product.images[i]}
              alt={`${product.name} Thumbnail ${i + 1}`}
              category={product.category}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
