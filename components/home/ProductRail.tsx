"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductRail({
  eyebrow,
  title,
  description,
  products,
  viewAllHref = "/products",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  products: Product[];
  viewAllHref?: string;
}) {
  const displayLimit = products.length >= 8 ? 8 : 4;
  const displayProducts = products.slice(0, displayLimit);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  // Auto-scroll on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Only auto-scroll on small screens
    const mql = window.matchMedia("(max-width: 639px)");
    if (!mql.matches) return;

    let direction = 1;
    const interval = setInterval(() => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 2) direction = -1;
      if (el.scrollLeft <= 2) direction = 1;
      el.scrollBy({ left: direction * 1, behavior: "auto" });
    }, 30);

    // Stop auto-scroll when user touches
    const stop = () => clearInterval(interval);
    el.addEventListener("touchstart", stop, { once: true, passive: true });

    return () => {
      clearInterval(interval);
      el.removeEventListener("touchstart", stop);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth || 260;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 16 : cardWidth + 16, behavior: "smooth" });
  };

  return (
    <section className="section-y overflow-hidden">
      <div className="container-wide flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" className="mx-0" />
        <Link href={viewAllHref} className="text-sm font-semibold text-accent hover:text-accent-600 hover:underline shrink-0 transition-colors">
          View all →
        </Link>
      </div>

      {/* Mobile: Horizontal scroll carousel */}
      <div className="relative mt-6 sm:hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 pb-4 scrollbar-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {displayProducts.map((p) => (
            <div key={p.id} className="w-[75vw] max-w-[280px] flex-shrink-0 snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Scroll indicators */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/90 border border-secondary-100 shadow-md flex items-center justify-center text-secondary-600"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/90 border border-secondary-100 shadow-md flex items-center justify-center text-secondary-600"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Desktop/Tablet: Grid */}
      <div className="container-wide mt-6 hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
