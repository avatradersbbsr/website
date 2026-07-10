import { Armchair, Activity, HeartPulse, Package } from "lucide-react";
import { CategorySlug } from "@/types/product";
import { cn } from "@/lib/utils";

const iconMap: Record<CategorySlug, React.ElementType> = {
  "massage-chairs": Armchair,
  "leg-massagers": Activity,
  "health-care-products": HeartPulse,
};

/**
 * Placeholder product visual. AVA Traders should replace this component's
 * usage with next/image pointing to real product photography saved under
 * /public/images/products/. Kept as an SVG/icon tile so the catalog never
 * ships with broken <img> links before real photos are uploaded.
 */
export default function ProductImagePlaceholder({
  category,
  className,
}: {
  category: CategorySlug;
  className?: string;
}) {
  const Icon = iconMap[category] || Package;
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 via-white to-gold-50",
        className
      )}
    >
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 30% 20%, rgba(15,26,60,0.12), transparent 55%), radial-gradient(circle at 80% 80%, rgba(197,168,128,0.12), transparent 55%)",
      }} />
      <Icon className="relative h-16 w-16 text-primary-400" strokeWidth={1.5} aria-hidden />
    </div>
  );
}
