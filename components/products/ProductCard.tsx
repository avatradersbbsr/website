"use client";

import Link from "next/link";
import { Share2, MessageCircle } from "lucide-react";
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
    <div className="group flex flex-col rounded-2xl bg-white border border-secondary-100 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden hover:border-primary-200">
      <Link href={`/products/${product.slug}`} className="block relative overflow-hidden bg-secondary-50/20">
        <ProductImageWithFallback
          src={product.images[0]}
          alt={product.name}
          category={product.category}
          className="aspect-square w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-accent text-white text-xs font-bold px-2.5 py-1">
            {discount}% OFF
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute top-3 right-3 rounded-full bg-primary text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1">
            Best Seller
          </span>
        )}
      </Link>

      <div className="flex flex-col gap-2 p-4 flex-1">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display font-semibold text-secondary-700 leading-snug hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-secondary-400 line-clamp-2">{product.shortDescription}</p>

        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-lg font-bold text-secondary-700">{formatINR(product.price)}</span>
          {discount > 0 && (
            <span className="text-sm text-secondary-300 line-through">{formatINR(product.mrp)}</span>
          )}
        </div>

        <p
          className={`text-xs font-medium ${
            product.availability === "in-stock" ? "text-primary" : "text-accent-600"
          }`}
        >
          {product.availability === "in-stock" ? "In Stock — Ready to Ship" : "Limited Stock"}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center rounded-full border border-secondary-200 text-secondary-700 text-sm font-semibold py-2 hover:border-primary hover:text-primary transition-colors"
          >
            View Details
          </Link>
          <a
            href={whatsappLink(`Hi, I'm interested in the ${product.name} (${formatINR(product.price)}). Please share more details.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white hover:brightness-95 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            onClick={handleShare}
            aria-label={`Share ${product.name}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary-200 text-secondary-500 hover:border-primary hover:text-primary transition-colors"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
