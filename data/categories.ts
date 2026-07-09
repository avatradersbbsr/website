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
    slug: "foot-massagers",
    name: "Foot Massagers",
    shortName: "Foot Massagers",
    description:
      "Shiatsu and air-compression foot massagers that target the soles, arches and calves to relieve standing fatigue and improve circulation.",
    icon: "Footprints",
    heroImage: "/images/categories/foot-massagers.jpg",
  },
  {
    slug: "massage-guns",
    name: "Massage Guns",
    shortName: "Massage Guns",
    description:
      "Percussion therapy devices for athletes and desk workers alike — deep tissue relief, multiple speeds and interchangeable heads.",
    icon: "Zap",
    heroImage: "/images/categories/massage-guns.jpg",
  },
  {
    slug: "neck-shoulder-massagers",
    name: "Neck & Shoulder Massagers",
    shortName: "Neck & Shoulder",
    description:
      "Kneading and heat-therapy massagers built for the neck, shoulders and upper back — the most common pain points from screen time and driving.",
    icon: "PersonStanding",
    heroImage: "/images/categories/neck-shoulder.jpg",
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
    slug: "fitness-equipment",
    name: "Fitness Equipment",
    shortName: "Fitness Equipment",
    description:
      "Compact fitness machines — vibration platforms, mini exercise cycles and steppers — made for consistent, low-impact home workouts.",
    icon: "Dumbbell",
    heroImage: "/images/categories/fitness-equipment.jpg",
  },
  {
    slug: "health-care-devices",
    name: "Health Care Devices",
    shortName: "Health Care",
    description:
      "Everyday wellness devices — BP monitors, nebulizers, posture correctors and more — chosen for reliability and ease of use at home.",
    icon: "HeartPulse",
    heroImage: "/images/categories/health-care.jpg",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
