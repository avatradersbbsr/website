import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsCatalog from "@/components/products/ProductsCatalog";
import { BreadcrumbSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Shop Massage Chairs, Massagers & Fitness Equipment",
  description:
    "Browse AVA Traders' full catalogue of massage chairs, foot massagers, massage guns, neck & shoulder massagers, leg massagers, fitness equipment and health care devices.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }]} />

      <section className="bg-secondary-700 py-14">
        <div className="container-wide">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-300">Catalogue</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-white">
            All Products
          </h1>
          <p className="mt-2 text-secondary-300 max-w-xl">
            36 products across 7 categories — filter by type, price, or search directly.
          </p>
        </div>
      </section>

      <section className="section-y container-wide">
        <Suspense fallback={<div className="text-secondary-400 text-sm">Loading products…</div>}>
          <ProductsCatalog />
        </Suspense>
      </section>
    </>
  );
}
