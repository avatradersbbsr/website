import { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "massage-chairs",
    name: "Massage Chairs",
    shortName: "Massage Chairs",
    description:
      "Full-body 3D/4D massage chairs with zero-gravity recline, heat therapy and airbag compression — built for daily recovery at home or in the office.",
    icon: "Armchair",
    heroImage: "/images/categories/massage-chairs.jpg",
  },
  {
    slug: "leg-massagers",
    name: "Leg Massagers",
    shortName: "Leg Massagers",
    description:
      "Air-compression leg and calf massagers designed to ease swelling, boost circulation and speed up recovery after long days on your feet.",
    icon: "Activity",
    heroImage: "/images/categories/leg-massagers.jpg",
  },
  {
    slug: "health-care-products",
    name: "Health Care Products",
    shortName: "Health Care",
    description:
      "Targeted therapy devices — back massagers, knee massagers, scalp massagers, facial guns, sauna steam baths and more — chosen for reliability and ease of use at home.",
    icon: "HeartPulse",
    heroImage: "/images/categories/health-care-products.jpg",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
