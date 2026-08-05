"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-y bg-primary-50/40 overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Customer Stories"
          title="What our customers say"
          description="Real feedback from people who've visited our Bhubaneswar showroom."
        />

        {/* Carousel Wrapper */}
        <div className="relative mt-6 max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 md:p-10 border border-secondary-100 shadow-soft">
            <div className="min-h-[160px] flex flex-col justify-between">
              
              {/* Current Testimonial Slide */}
              <div key={activeIndex} className="animate-fade-in flex flex-col gap-4">
                <div className="flex gap-0.5" aria-label={`${testimonials[activeIndex].rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4.5 w-4.5 ${
                        i < testimonials[activeIndex].rating
                          ? "fill-accent text-accent animate-pulse"
                          : "text-secondary-200"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-base sm:text-lg text-secondary-600 italic leading-relaxed font-medium">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <cite className="not-italic font-display font-bold text-secondary-800 text-sm sm:text-base block">
                      {testimonials[activeIndex].name}
                    </cite>
                    <span className="text-xs text-secondary-400">
                      {testimonials[activeIndex].location}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary-200 text-secondary-500 hover:border-primary hover:text-primary transition-colors bg-white shadow-sm"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4.5 w-4.5" />
                    </button>
                    <button
                      onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary-200 text-secondary-500 hover:border-primary hover:text-primary transition-colors bg-white shadow-sm"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Dot Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-accent w-6" : "bg-secondary-200 w-2.5 hover:bg-secondary-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
