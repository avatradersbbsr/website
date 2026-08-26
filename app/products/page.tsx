import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsCatalog from "@/components/products/ProductsCatalog";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Massage Chairs, Leg Massagers & Health Care Products",
  description:
    "Browse AVA Traders' full catalogue of massage chairs, leg massagers, and health care products — back massagers, knee massagers, massage guns, sauna steam baths and more.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }]} />

      <section className="bg-secondary-700 py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/30 to-transparent" aria-hidden />
        <div className="container-wide relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-300">Catalogue</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white">
            All Products
          </h1>
          <p className="mt-2 text-secondary-300 max-w-xl">
            26 products across 3 categories — filter by type, price, or search directly.
          </p>
        </div>
      </section>

      <section className="section-y container-wide">
        <Suspense fallback={<div className="text-secondary-400 text-sm">Loading products…</div>}>
          <ProductsCatalog />
        </Suspense>

        {/* Static HTML fallback links for search engine crawlers to discover all dynamic product pages */}
        <div className="hidden" aria-hidden="true">
          {products.map((p) => (
            <a key={p.id} href={`/products/${p.slug}`}>
              {p.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
