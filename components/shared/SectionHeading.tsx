import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-4 bg-primary" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-secondary-700 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-secondary-400 leading-relaxed text-balance">{description}</p>
      )}
    </div>
  );
}
