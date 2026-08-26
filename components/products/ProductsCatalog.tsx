"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { CategorySlug } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under ₹5,000", min: 0, max: 5000 },
  { label: "₹5,000 – ₹15,000", min: 5000, max: 15000 },
  { label: "₹15,000 – ₹50,000", min: 15000, max: 50000 },
  { label: "₹50,000 – ₹2,00,000", min: 50000, max: 200000 },
  { label: "Above ₹2,00,000", min: 200000, max: Infinity },
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
        if (!p.name.toLowerCase().includes(q) && !p.shortDescription?.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, priceRange, query]);

  const hasActiveFilters = activeCategory !== "all" || priceRange !== null || query.trim() !== "";

  const resetFilters = () => {
    setActiveCategory("all");
    setPriceRange(null);
    setQuery("");
  };

  const grouped = activeCategory === "all" && priceRange === null && !query.trim();

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
      {/* Filters sidebar */}
      <aside className={cn("lg:block", filtersOpen ? "block" : "hidden")}>
        <div className="rounded-2xl border border-secondary-100 bg-white p-5 sticky top-24 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-secondary-800">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-accent font-semibold hover:underline flex items-center gap-1"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            )}
            <button className="lg:hidden text-secondary-400 p-1" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
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
                placeholder="Search models..."
                className="w-full rounded-xl border border-secondary-200 pl-9 pr-3 py-2.5 text-sm focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary-400 mb-2">Category</p>
            <div className="flex flex-col gap-1">
              <FilterButton active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
                All Categories ({products.length})
              </FilterButton>
              {categories.map((c) => {
                const count = products.filter((p) => p.category === c.slug).length;
                return (
                  <FilterButton
                    key={c.slug}
                    active={activeCategory === c.slug}
                    onClick={() => setActiveCategory(c.slug)}
                  >
                    {c.shortName} ({count})
                  </FilterButton>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary-400 mb-2">Price Range</p>
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

      {/* Product List Content */}
      <div className="min-w-0">
        {/* Mobile Category Quick Pills Strip */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0",
              activeCategory === "all"
                ? "bg-primary text-white shadow-soft"
                : "bg-white border border-secondary-200 text-secondary-600 hover:border-primary"
            )}
          >
            All ({products.length})
          </button>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.slug).length;
            return (
              <button
                key={c.slug}
                onClick={() => setActiveCategory(c.slug)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0",
                  activeCategory === c.slug
                    ? "bg-primary text-white shadow-soft"
                    : "bg-white border border-secondary-200 text-secondary-600 hover:border-primary"
                )}
              >
                {c.shortName} ({count})
              </button>
            );
          })}
        </div>

        {/* Header Count & Filter Trigger */}
        <div className="flex items-center justify-between mb-6 bg-white p-3.5 rounded-xl border border-secondary-100 shadow-xs">
          <p className="text-xs sm:text-sm font-semibold text-secondary-600">
            Showing <span className="text-primary font-bold">{filtered.length}</span> {filtered.length === 1 ? "product" : "products"}
          </p>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="hidden sm:inline-flex text-xs text-accent font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
            <button
              className="lg:hidden inline-flex items-center gap-1.5 text-xs font-bold bg-secondary-50 text-secondary-700 border border-secondary-200 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all"
              onClick={() => setFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-secondary-200 py-16 text-center text-secondary-400 bg-white p-6">
            <p className="text-base font-semibold text-secondary-600">No products match these filters</p>
            <p className="text-sm text-secondary-400 mt-1">Try clearing your search keyword or selected price range.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-600 transition-all shadow-soft"
            >
              Reset All Filters
            </button>
          </div>
        ) : grouped ? (
          categories.map((cat) => {
            const items = filtered.filter((p) => p.category === cat.slug);
            if (items.length === 0) return null;
            return (
              <div key={cat.slug} className="mb-12">
                <div className="flex items-center justify-between mb-4 border-b border-secondary-100 pb-2">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-secondary-800">{cat.name}</h2>
                  <span className="text-xs font-semibold text-secondary-400">{items.length} items</span>
                </div>
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
        "text-left px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-between",
        active ? "bg-primary text-white font-semibold" : "text-secondary-600 hover:bg-primary-50"
      )}
    >
      {children}
    </button>
  );
}
