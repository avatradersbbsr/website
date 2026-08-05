export type CategorySlug =
  | "massage-chairs"
  | "leg-massagers"
  | "health-care-products";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: string; // lucide icon name
  heroImage: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  shortDescription: string;
  description: string[]; // paragraphs
  images: string[]; // placeholder paths, admin replaces with real photos
  mrp: number;
  price: number;
  availability: "in-stock" | "limited-stock" | "pre-order";
  warranty: string;
  features: string[];
  specifications: ProductSpec[];
  benefits: string[];
  faqs: ProductFAQ[];
  bestSeller?: boolean;
  featured?: boolean;
  airbags?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export function discountPercent(mrp: number, price: number) {
  if (mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}
