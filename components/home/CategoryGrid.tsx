import Link from "next/link";
import { Armchair, Activity, HeartPulse } from "lucide-react";
import { categories } from "@/data/categories";
import SectionHeading from "@/components/shared/SectionHeading";

const icons = {
  Armchair,
  Activity,
  HeartPulse,
} as const;

export default function CategoryGrid() {
  return (
    <section className="section-y container-wide">
      <SectionHeading
        eyebrow="Curated Solutions"
        title="Everything for daily recovery, in one showroom"
        description="Three dedicated product lines covering full-body zero-gravity relief, targeted foot & leg therapy, and specialized health care devices."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => {
          const Icon = icons[cat.icon as keyof typeof icons] || Armchair;
          return (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 border border-secondary-100 shadow-soft hover-lift hover:border-primary-200 overflow-hidden min-h-[280px]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Subtle category gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-primary-100/10 rounded-full blur-2xl group-hover:bg-accent-100/20 transition-all duration-300 pointer-events-none" />

              <div>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-glow transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </span>
                
                <h3 className="mt-6 font-display text-xl font-bold text-secondary-700 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                
                <p className="mt-2 text-sm text-secondary-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                Explore Collection
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
