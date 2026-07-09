"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteFAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";

export default function FAQAccordion({ faqs }: { faqs: SiteFAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-secondary-100 rounded-2xl border border-secondary-100 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-medium text-secondary-700">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-primary transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "px-5 overflow-hidden transition-all",
                isOpen ? "max-h-64 pb-5" : "max-h-0"
              )}
            >
              <p className="text-sm text-secondary-400 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
