"use client";

import Link from "next/link";
import { Share2, MessageCircle, ArrowUpRight } from "lucide-react";
import { Product, discountPercent } from "@/types/product";
import { formatINR } from "@/lib/utils";
import { whatsappLink } from "@/lib/site-config";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";

export default function ProductCard({ product }: { product: Product }) {
  const discount = discountPercent(product.mrp, product.price);

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

  return (
    <div className="group flex flex-col rounded-3xl bg-white border border-secondary-100/80 shadow-soft hover:shadow-card hover:border-accent/20 transition-all duration-500 overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden bg-gradient-to-b from-secondary-50/20 to-transparent pt-6 px-6">
        <div className="relative aspect-square w-full rounded-2xl bg-secondary-50/40 border border-secondary-100/30 flex items-center justify-center p-4 overflow-hidden group-hover:bg-white transition-colors duration-500">
          <ProductImageWithFallback
            src={product.images[0]}
            alt={product.name}
            category={product.category}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {discount > 0 && (
          <span className="absolute top-8 left-8 rounded-full bg-accent text-white text-[10px] font-extrabold px-3 py-1 shadow-sm uppercase tracking-wider">
            {discount}% OFF
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute top-8 right-8 rounded-full bg-primary text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 shadow-sm">
            Top Seller
          </span>
        )}
      </Link>

      <div className="flex flex-col gap-2 p-5 flex-1">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent/80">
            {product.category.replace("-", " ")}
          </span>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-1 font-display font-bold text-secondary-700 text-[15px] sm:text-base leading-snug hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <p className="text-xs text-secondary-400/90 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="flex items-baseline gap-2 mt-auto pt-3 border-t border-secondary-100/50">
          <span className="text-lg font-extrabold text-secondary-700">{formatINR(product.price)}</span>
          {discount > 0 && (
            <span className="text-xs text-secondary-300 line-through font-semibold">{formatINR(product.mrp)}</span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary-900 text-white text-xs font-bold py-3 hover:bg-accent transition-colors duration-300"
          >
            Explore <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={whatsappLink(`Hi, I'm interested in the ${product.name} (${formatINR(product.price)}). Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="h-4.5 w-4.5" />
          </a>
          <button
            onClick={handleShare}
            aria-label={`Share ${product.name}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary-200 text-secondary-500 hover:bg-secondary-50 hover:text-primary transition-all duration-300"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
