"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Armchair, Activity, HeartPulse } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";

const icons = {
  Armchair,
  Activity,
  HeartPulse,
} as const;

export default function CategoryGrid() {
  const [offset, setOffset] = useState(0);

  // Cycle the preview models every 5 seconds (longer gap as requested)
  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCategoryPreviews = (slug: string) => {
    const catProds = products.filter((p) => p.category === slug);
    if (catProds.length === 0) return [];
    
    // Group start index shifts by 3 items on each step
    const startIndex = (offset * 3) % catProds.length;
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(catProds[(startIndex + i) % catProds.length]);
    }
    return items;
  };

  return (
    <section className="section-y container-wide">
      <SectionHeading
        eyebrow="Curated Solutions"
        title="Everything for daily recovery, in one showroom"
        description="Three dedicated product lines covering full-body zero-gravity relief, targeted foot & leg therapy, and specialized health care devices."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const Icon = icons[cat.icon as keyof typeof icons] || Armchair;
          const previewItems = getCategoryPreviews(cat.slug);
          const startIndex = (offset * 3) % (products.filter((p) => p.category === cat.slug).length || 1);

          return (
            <div
              key={cat.slug}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 md:p-5 lg:p-6 xl:p-8 border border-secondary-100 shadow-soft hover:shadow-glow hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 hover:border-primary/45 overflow-hidden min-h-[510px]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Premium glowing background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/5 via-transparent to-accent-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-radial-gradient from-accent-200/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-all duration-700 pointer-events-none" />

              <div>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-primary group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <Icon className="h-7 w-7 transition-transform duration-500" />
                </span>
                
                <Link href={`/products?category=${cat.slug}`}>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-secondary-700 hover:text-primary transition-colors flex items-center gap-1.5">
                    {cat.name}
                  </h3>
                </Link>
                
                <p className="mt-2.5 text-sm text-secondary-400 leading-relaxed min-h-[64px] sm:min-h-[48px] md:min-h-[84px] lg:min-h-[80px] xl:min-h-[64px]">
                  {cat.description}
                </p>

                {/* Products Preview Showcase */}
                {previewItems.length > 0 && (
                  <div className="mt-6 border-t border-secondary-100 pt-5">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-secondary-400 mb-3">
                      Popular Models
                    </p>
                    
                    {/* Slide transition container */}
                    <div key={startIndex} className="flex gap-2.5 animate-slide-in-right">
                      {previewItems.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.slug}`}
                          className="group/prod flex flex-col items-center gap-2 flex-1 p-2 rounded-2xl border border-secondary-100 bg-secondary-50/30 hover:bg-white hover:border-primary-400 hover:shadow-card transition-all duration-300 min-w-0"
                        >
                          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-xl overflow-hidden bg-white border border-secondary-100 flex items-center justify-center p-1.5 shrink-0 shadow-sm transition-transform duration-300 group-hover/prod:scale-[1.04]">
                            <ProductImageWithFallback
                              src={prod.images[0]}
                              alt={prod.name}
                              category={prod.category}
                              priority={true}
                              className="w-full h-full object-contain group-hover/prod:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-[11px] font-bold text-secondary-600 truncate w-full text-center group-hover/prod:text-primary transition-colors px-0.5">
                            {prod.name.replace(/Massage Chair|Leg Massager/i, "").trim().split(" ")[0]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={`/products?category=${cat.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors relative overflow-hidden"
              >
                <span>Explore Collection</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
