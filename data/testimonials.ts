export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

// Sample testimonials reflecting common, realistic feedback for this category
// of business. Replace with verified customer reviews as they come in.
export const testimonials: Testimonial[] = [
  {
    name: "Debasish Patra",
    location: "Bhubaneswar",
    rating: 5,
    quote:
      "Bought a massage chair for my father after his knee surgery. The team at AVA Traders spent almost an hour with us in the showroom explaining every model before we decided. No pressure to buy the expensive one.",
  },
  {
    name: "Rashmita Sahoo",
    location: "Patia, Bhubaneswar",
    rating: 5,
    quote:
      "I use the foot massager every night after my hospital shifts. Delivery was quick and they called a week later just to check if everything was working fine.",
  },
  {
    name: "Amit Kumar Behera",
    location: "Cuttack",
    rating: 4,
    quote:
      "Good range of massage guns to compare in person rather than guessing online. Picked the mid-range one on their recommendation and it's been solid for six months now.",
  },
  {
    name: "Sunita Mohapatra",
    location: "Badagada, Bhubaneswar",
    rating: 5,
    quote:
      "We've bought two massage chairs from them over the years for our clinic waiting area. Reliable after-sales support whenever we've needed a technician visit.",
  },
];
