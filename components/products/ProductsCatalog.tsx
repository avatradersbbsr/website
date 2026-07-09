"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { CategorySlug } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under ₹5,000", min: 0, max: 5000 },
  { label: "₹5,000 – ₹15,000", min: 5000, max: 15000 },
  { label: "₹15,000 – ₹50,000", min: 15000, max: 50000 },
  { label: "Above ₹50,000", min: 50000, max: Infinity },
];

export default function ProductsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategorySlug | null;

  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    initialCategory || "all"
  );
  const [priceRange, setPriceRange] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (priceRange !== null) {
        const r = priceRanges[priceRange];
        if (p.price < r.min || p.price >= r.max) return false;
      }
      if (query.trim()) {
        const q = query.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.shortDescription.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, priceRange, query]);

  const grouped = activeCategory === "all";

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-8">
      {/* Filters sidebar */}
      <aside className={cn("lg:block", filtersOpen ? "block" : "hidden")}>
        <div className="rounded-2xl border border-secondary-100 bg-white p-5 sticky top-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-secondary-700">Filters</h2>
            <button className="lg:hidden text-secondary-400" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6">
            <label className="text-xs font-semibold uppercase tracking-wide text-secondary-400">Search</label>
            <div className="mt-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-secondary-200 pl-9 pr-3 py-2.5 text-sm focus:border-primary outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary-400 mb-2">Category</p>
            <div className="flex flex-col gap-1">
              <FilterButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
                All Categories
              </FilterButton>
              {categories.map((c) => (
                <FilterButton
                  key={c.slug}
                  active={activeCategory === c.slug}
                  onClick={() => setActiveCategory(c.slug)}
                >
                  {c.shortName}
                </FilterButton>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary-400 mb-2">Price</p>
            <div className="flex flex-col gap-1">
              <FilterButton active={priceRange === null} onClick={() => setPriceRange(null)}>
                Any Price
              </FilterButton>
              {priceRanges.map((r, i) => (
                <FilterButton key={r.label} active={priceRange === i} onClick={() => setPriceRange(i)}>
                  {r.label}
                </FilterButton>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-secondary-400">{filtered.length} products found</p>
          <button
            className="lg:hidden inline-flex items-center gap-2 text-sm font-semibold text-primary"
            onClick={() => setFiltersOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-secondary-200 py-16 text-center text-secondary-400">
            No products match these filters. Try widening your search.
          </div>
        ) : grouped ? (
          categories.map((cat) => {
            const items = filtered.filter((p) => p.category === cat.slug);
            if (items.length === 0) return null;
            return (
              <div key={cat.slug} className="mb-12">
                <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">{cat.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left px-3 py-2 rounded-lg text-sm transition-colors",
        active ? "bg-primary text-white font-medium" : "text-secondary-500 hover:bg-primary-50"
      )}
    >
      {children}
    </button>
  );
}
