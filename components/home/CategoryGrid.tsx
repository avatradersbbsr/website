import Link from "next/link";
import { Armchair, Activity, HeartPulse } from "lucide-react";
import { categories } from "@/data/categories";
import SectionHeading from "@/components/shared/SectionHeading";

const icons = {
  Armchair, Activity, HeartPulse,
} as const;

export default function CategoryGrid() {
  return (
    <section className="section-y container-wide">
      <SectionHeading
        eyebrow="Shop by Category"
        title="Everything for daily recovery, in one showroom"
        description="Three curated categories covering full-body relief, targeted therapy, and specialised health care — all available to try before you buy."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const Icon = icons[cat.icon as keyof typeof icons] || Armchair;
          return (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative flex flex-col gap-4 rounded-2xl border border-secondary-100 bg-white p-8 hover:border-primary hover:shadow-card transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                background: "linear-gradient(135deg, rgba(30,42,120,0.05), rgba(230,57,70,0.05))"
              }} />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="h-7 w-7" />
              </span>
              <div className="relative">
                <h3 className="font-display text-lg font-semibold text-secondary-700">{cat.name}</h3>
                <p className="mt-1 text-sm text-secondary-400 leading-relaxed">{cat.description}</p>
              </div>
              <span className="relative text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                Explore →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
