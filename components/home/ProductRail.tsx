import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/shared/SectionHeading";

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
  // Enforce symmetry: slice to a multiple of 4 (maximum of 4 or 8 items)
  const displayLimit = products.length >= 8 ? 8 : 4;
  const displayProducts = products.slice(0, displayLimit);

  return (
    <section className="section-y container-wide">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" className="mx-0" />
        <Link href={viewAllHref} className="text-sm font-semibold text-accent hover:text-accent-600 hover:underline shrink-0 transition-colors">
          View all →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
