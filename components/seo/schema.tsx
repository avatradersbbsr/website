import { Product } from "@/types/product";
import { siteConfig } from "@/lib/site-config";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductSchema({ product }: { product: Product }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((i) => `${siteConfig.url}${i}`),
    sku: product.id,
    brand: { "@type": "Brand", name: "AVA Traders" },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability:
        product.availability === "in-stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      seller: { "@type": "Organization", name: "AVA Traders" },
    },
  };
  return <JsonLd data={data} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.contact.phonePrimary,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Padmabati Complex, #3068/10236, Puri Bypass Road, Badagada",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751018",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
  };
  return <JsonLd data={data} />;
}
