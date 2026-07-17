export const siteConfig = {
  name: "AVA Traders",
  tagline: "Complete Solution For Your Health & Fitness",
  description:
    "AVA Traders is Bhubaneswar's trusted showroom for premium massage chairs, leg massagers, and health care products. Visit our Puri Bypass Road showroom or shop with confidence online.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.avatraders.in",
  ogImage: "/images/og-default.jpg",
  keywords: [
    "massage chair Bhubaneswar",
    "leg massager Odisha",
    "health care products Bhubaneswar",
    "massage chair showroom Odisha",
    "AVA Traders",
    "body massager showroom Odisha",
    "massage chair India",
    "leg massager India",
  ],
  contact: {
    phonePrimary: process.env.NEXT_PUBLIC_PHONE_PRIMARY || "+917008636254",
    phoneSecondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+919348359190",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917008636254",
    email: process.env.NEXT_PUBLIC_EMAIL || "avatraders.in@gmail.com",
    address:
      process.env.NEXT_PUBLIC_ADDRESS ||
      "Padmabati Complex, #3068/10236, Puri Bypass Road, Badagada, Bhubaneswar - 751018, Odisha, India",
    gstin: process.env.NEXT_PUBLIC_GSTIN || "21AHAPJ2875R1Z2",
    mapsEmbedSrc:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
      "https://maps.google.com/maps?q=20.248739,85.8613237&z=17&output=embed",
    hours: [
      { day: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
      { day: "Sunday", time: "10:00 AM – 2:00 PM" },
    ],
    social: {
      facebook: "https://facebook.com/",
      instagram: "https://instagram.com/",
      youtube: "https://youtube.com/",
    },
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  legalNav: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return & Refund Policy", href: "/return-refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encoded}`;
}

export function telLink(number: string) {
  return `tel:${number.replace(/\s+/g, "")}`;
}
