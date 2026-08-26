"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Share2, MessageCircle, ShieldCheck, Star, Truck } from "lucide-react";
import { Product, discountPercent } from "@/types/product";
import { formatINR, cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site-config";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";

export default function ProductCard({ product }: { product: Product }) {
  const discount = discountPercent(product.mrp, product.price);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startImageCycle = () => {
    if (product.images.length <= 1) return;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 2800);
  };

  const stopImageCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleShare = async () => {
    const url = `${window.location.origin}/products/${product.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const isMassageChair = product.category === "massage-chairs";
  const primaryFeature = product.features?.[0];

  return (
    <div
      onMouseEnter={startImageCycle}
      onMouseLeave={stopImageCycle}
      className={cn(
        "group flex flex-col rounded-2xl bg-white transition-all duration-300 overflow-hidden hover-lift border",
        isMassageChair
          ? "border-gold/60 glow-gold-pulse hover:border-primary ring-1 ring-gold/20 shadow-soft"
          : "border-secondary-100 shadow-soft hover:shadow-card hover:border-primary-200"
      )}
    >
      {/* Product Image Area */}
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden bg-gradient-to-b from-secondary-50/40 to-white">
        <ProductImageWithFallback
          src={product.images[currentImageIndex]}
          alt={product.name}
          category={product.category}
          className="aspect-square w-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {discount > 0 && (
            <span className="rounded-full bg-accent text-white text-[11px] font-extrabold px-2.5 py-0.5 shadow-sm">
              {discount}% OFF
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
          {isMassageChair ? (
            <span className="rounded-full bg-gradient-to-r from-gold-600 to-gold-700 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-sm border border-gold-400/20">
              ★ Flagship Series
            </span>
          ) : product.bestSeller ? (
            <span className="rounded-full bg-primary text-white text-[9px] font-bold uppercase tracking-wide px-2.5 py-0.5 shadow-sm">
              Best Seller
            </span>
          ) : null}
        </div>

        {/* Live Showroom Tested Pill */}
        <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-secondary-600 border border-secondary-100 shadow-xs">
          <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
          <span>4.9 Showroom Tested</span>
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex flex-col p-4 sm:p-5 flex-1 justify-between gap-3">
        <div>
          {/* Category Tag */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
            {product.category === "massage-chairs" ? "Massage Chair" : product.category === "leg-massagers" ? "Leg Massager" : "Healthcare Device"}
          </span>

          {/* Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-display font-bold text-secondary-800 text-sm sm:text-base leading-snug hover:text-primary transition-colors line-clamp-2 mt-1">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          {product.shortDescription && (
            <p className="text-xs text-secondary-500 line-clamp-2 mt-1.5 leading-relaxed">
              {product.shortDescription}
            </p>
          )}

          {/* Key Highlight Chips */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {product.warranty && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary-700 bg-secondary-50 border border-secondary-100 rounded-md px-2 py-0.5">
                <ShieldCheck className="h-3 w-3 text-accent shrink-0" />
                {product.warranty}
              </span>
            )}
            {product.airbags && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary-50 border border-primary-100 rounded-md px-2 py-0.5">
                {product.airbags} Airbags
              </span>
            )}
            {!product.airbags && primaryFeature && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary-600 bg-secondary-50 border border-secondary-100 rounded-md px-2 py-0.5 line-clamp-1 max-w-[200px]">
                {primaryFeature}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-secondary-100 flex flex-col gap-2.5">
          {/* Price Block */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-extrabold text-secondary-800">{formatINR(product.price)}</span>
              {discount > 0 && (
                <span className="text-xs sm:text-sm text-secondary-400 line-through font-medium">{formatINR(product.mrp)}</span>
              )}
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
              Free Delivery*
            </span>
          </div>

          {/* Delivery & Demo Note */}
          <p className="text-[10px] text-secondary-400 flex items-center gap-1">
            <Truck className="h-3 w-3 text-primary shrink-0" />
            <span>Showroom Demo & Ready to Dispatch in Odisha</span>
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-1 flex items-center gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 text-center rounded-xl bg-primary text-white text-xs sm:text-sm font-bold py-2.5 hover:bg-primary-600 transition-all shadow-xs hover:shadow-soft flex items-center justify-center"
            >
              View Details
            </Link>
            <a
              href={whatsappLink(`Hi, I'm interested in the ${product.name} (${formatINR(product.price)}). Please share more details.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white hover:brightness-95 transition-all shadow-xs"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              onClick={handleShare}
              aria-label={`Share ${product.name}`}
              className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-secondary-200 text-secondary-500 hover:border-primary hover:text-primary transition-colors"
              title="Share product"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
