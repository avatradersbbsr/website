import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Testimonials() {
  return (
    <section className="section-y bg-primary-50/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Customer Stories"
          title="What our customers say"
          description="Real feedback from people who've visited our Bhubaneswar showroom."
        />

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl bg-white p-6 shadow-soft border border-secondary-100 flex flex-col gap-4 hover:shadow-card transition-shadow duration-300"
            >
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-accent text-accent" : "text-secondary-200"}`}
                  />
                ))}
              </div>
              <blockquote className="text-sm text-secondary-500 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="font-semibold text-secondary-700 text-sm">{t.name}</p>
                <p className="text-xs text-secondary-400">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
