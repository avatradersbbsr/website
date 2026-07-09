import Link from "next/link";
import { Armchair, Footprints, Zap, PersonStanding, Activity, Dumbbell, HeartPulse } from "lucide-react";
import { categories } from "@/data/categories";
import SectionHeading from "@/components/shared/SectionHeading";

const icons = {
  Armchair, Footprints, Zap, PersonStanding, Activity, Dumbbell, HeartPulse,
} as const;

export default function CategoryGrid() {
  return (
    <section className="section-y container-wide">
      <SectionHeading
        eyebrow="Shop by Category"
        title="Everything for daily recovery, in one showroom"
        description="Seven curated categories covering full-body relief, targeted therapy, and low-impact fitness — all available to try before you buy."
      />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => {
          const Icon = icons[cat.icon as keyof typeof icons] || Armchair;
          return (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative flex flex-col gap-3 rounded-2xl border border-secondary-100 bg-white p-5 hover:border-primary hover:shadow-card transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-semibold text-secondary-700">{cat.shortName}</h3>
              <p className="text-xs text-secondary-400 line-clamp-2">{cat.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
