"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { ProductSpec, ProductFAQ } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductDetailsTabsProps {
  description: string[];
  specifications: ProductSpec[];
  benefits: string[];
  faqs: ProductFAQ[];
}

type TabType = "description" | "specifications" | "benefits" | "faqs";

export default function ProductDetailsTabs({
  description,
  specifications,
  benefits,
  faqs,
}: ProductDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  const tabs: { id: TabType; label: string }[] = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "benefits", label: "Benefits" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="w-full">
      {/* Tabs list container */}
      <div className="flex border-b border-secondary-100 overflow-x-auto gap-2 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "whitespace-nowrap px-6 py-3.5 text-sm font-bold border-b-2 -mb-[2px] transition-all duration-300",
              activeTab === tab.id
                ? "border-accent text-primary"
                : "border-transparent text-secondary-400 hover:text-secondary-600 hover:border-secondary-200"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-8">
        
        {/* Description Tab */}
        {activeTab === "description" && (
          <div className="space-y-4 text-secondary-500 leading-relaxed text-sm animate-fade-up">
            {description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <div className="animate-fade-up">
            <dl className="rounded-2xl border border-secondary-100 overflow-hidden">
              {specifications.map((s, i) => (
                <div
                  key={s.label}
                  className={`grid grid-cols-2 px-6 py-4 text-sm ${
                    i % 2 === 0 ? "bg-canvas" : "bg-white"
                  }`}
                >
                  <dt className="text-secondary-400 font-bold">{s.label}</dt>
                  <dd className="text-secondary-700">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === "benefits" && (
          <ul className="grid sm:grid-cols-2 gap-4 animate-fade-up">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-sm text-secondary-600 bg-primary-50/50 border border-primary-50 rounded-2xl p-5 hover-lift"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* FAQs Tab */}
        {activeTab === "faqs" && (
          <div className="animate-fade-up">
            <FAQAccordion faqs={faqs} />
          </div>
        )}

      </div>
    </div>
  );
}
