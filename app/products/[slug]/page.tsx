import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, MessageCircle, Phone, Truck, Download, Layers } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { discountPercent } from "@/types/product";
import { formatINR } from "@/lib/utils";
import { siteConfig, whatsappLink, telLink } from "@/lib/site-config";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCard from "@/components/products/ProductCard";
import EnquiryForm from "@/components/shared/EnquiryForm";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/schema";
import PageAnimate from "@/components/shared/PageAnimate";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.seo.metaTitle,
    description: product.seo.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seo.metaTitle,
      description: product.seo.metaDescription,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);
  const discount = discountPercent(product.mrp, product.price);

  let healthBenefits: { title: string; desc: string }[] = [];

  if (product.category === "massage-chairs") {
    healthBenefits = [
      { title: "Relieves Severe Back Pain", desc: "AI-driven mechanism mimics real chiropractic hands to target spinal soreness, release deep knots, and soothe lumbar pain." },
      { title: "Corrects & Improves Posture", desc: "Zero-Gravity position aligns spine and joints, distributing weight evenly to reduce structural strain and slouching." },
      { title: "Reduces Stress & Anxiety", desc: "Soothing massage strokes combined with mental relaxation help lower cortisol levels and release daily tension." },
      { title: "Enhances Full-Body Circulation", desc: "Rhythmic airbag compression combined with back heating delivers oxygen-rich blood flow to speed muscle healing." },
      { title: "Improves Deep Sleep Quality", desc: "Evening somatic relaxation therapy prepares the nervous system for deeper, uninterrupted, and restful sleep." },
      { title: "Soothes Muscle & Joint stiffness", desc: "Active ankle stretching and calf rollers relieve compression from joints, enhancing flexibility." },
    ];
  } else if (product.category === "leg-massagers") {
    healthBenefits = [
      { title: "Relieves Foot & Calf Pain", desc: "High-intensity kneading and sole rollers release deep plantar tension, target muscle knots, and soothe aches after standing." },
      { title: "Enhances Leg Circulation", desc: "Rhythmic air compression acts as a second heart, pumping blood upward to reduce swelling and varicose veins." },
      { title: "Speeds Up Muscle Recovery", desc: "Targets achilles tendon stiffness and calf cramps, helping athletes and active professionals bounce back fast." },
      { title: "Reduces Foot Fatigue", desc: "Reflexology sole scraping stimulates vital pressure points, bringing deep relaxation and energy." },
    ];
  } else {
    healthBenefits = [
      { title: "Targeted Pain Relief", desc: "Specialized deep-tissue compression and therapy pinpoint focal muscle stiffness, aches, and soreness instantly." },
      { title: "Reduces Muscular Tension", desc: "Relieves localized knots, spasms, and strain, restoring natural range of motion and flexibility." },
      { title: "Soothing Heat Therapy", desc: "Promotes localized blood flow to deliver vital nutrients and oxygen, accelerating cellular recovery." },
      { title: "Daily Wellness Support", desc: "Compact and easy-to-use devices designed to maintain peak physical comfort and vitality at home." },
    ];
  }

  return (
    <PageAnimate>
      <ProductSchema product={product} />
      <FAQSchema faqs={product.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: category?.name || "Category", href: `/products?category=${product.category}` },
          { name: product.name, href: `/products/${product.slug}` },
        ]}
      />

      <div className="container-wide py-6 text-sm text-secondary-400">
        <Link href="/products" className="hover:text-primary">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-primary">
          {category?.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-secondary-600">{product.name}</span>
      </div>

      <section className="container-wide grid lg:grid-cols-2 gap-8 lg:gap-12 pb-16 overflow-hidden">
        <ProductGallery product={product} />

        <div>
          {product.bestSeller && (
            <span className="inline-block mb-3 rounded-full bg-accent-50 text-accent-600 text-xs font-semibold uppercase tracking-wide px-3 py-1">
              Best Seller
            </span>
          )}
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-secondary-700">
            {product.name}
          </h1>
          <p className="mt-3 text-secondary-500">{product.shortDescription}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-secondary-700">{formatINR(product.price)}</span>
            {discount > 0 && (
              <>
                <span className="text-lg text-secondary-300 line-through">{formatINR(product.mrp)}</span>
                <span className="rounded-full bg-primary-50 text-primary text-sm font-semibold px-2.5 py-1">
                  Save {discount}%
                </span>
              </>
            )}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary-50 border border-secondary-100 text-secondary-700 font-semibold shadow-soft">
              <span className={`h-2 w-2 rounded-full shrink-0 ${product.availability === "in-stock" ? "bg-primary" : "bg-accent"}`} />
              <span>{product.availability === "in-stock" ? "In Stock" : "Limited Stock"}</span>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent-50 border border-accent-100 text-accent font-bold shadow-soft">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span className="leading-tight">{product.warranty} Warranty</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary-50 border border-primary-100 text-primary font-bold shadow-soft">
              <Truck className="h-4 w-4 shrink-0" />
              <span className="leading-tight">Free Delivery & Installation*</span>
            </div>

            {product.airbags && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 border border-red-100 text-red-700 font-bold shadow-soft">
                <Layers className="h-4 w-4 shrink-0" />
                <span className="leading-tight">{product.airbags} Airbags</span>
              </div>
            )}
          </div>
          <p className="mt-2 text-[10px] text-secondary-400 italic">
            *Free delivery and custom home installation available across major cities in Odisha. T&C Apply.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hi, I'm interested in the ${product.name} (${formatINR(product.price)}). Please share more details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 font-semibold hover:brightness-95 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
            <a
              href={telLink(siteConfig.contact.phonePrimary)}
              className="inline-flex items-center gap-2 rounded-full bg-secondary-700 text-white px-6 py-3.5 font-semibold hover:bg-secondary-600 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            {(product.id === "z-91-ultra-luxury" || product.id === "z-90-economic-premium-ultra-luxury" || product.id === "z-plus-100-premium-luxury") && (
              <a
                href={
                  product.id === "z-91-ultra-luxury"
                    ? "/Z91 MASSAGE CHAIR.pdf"
                    : product.id === "z-90-economic-premium-ultra-luxury"
                    ? "/Z90 MASSAGE CHAIR.pdf"
                    : "/Z100 MASSAGE CHAIR.pdf"
                }
                download={
                  product.id === "z-91-ultra-luxury"
                    ? "Z91 MASSAGE CHAIR.pdf"
                    : product.id === "z-90-economic-premium-ultra-luxury"
                    ? "Z90 MASSAGE CHAIR.pdf"
                    : "Z100 MASSAGE CHAIR.pdf"
                }
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3.5 font-bold hover:bg-primary hover:text-white transition-all w-full sm:w-auto justify-center"
              >
                <Download className="h-4 w-4" /> Download Specification
              </a>
            )}
          </div>

          <div className="mt-8">
            <h2 className="font-display font-semibold text-secondary-700 mb-3">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-secondary-500">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-wide pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">Description</h2>
            <div className="space-y-3 text-secondary-500 leading-relaxed text-sm">
              {product.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">Specifications</h2>
            <dl className="rounded-2xl border border-secondary-100 overflow-hidden">
              {product.specifications.map((s, i) => (
                <div
                  key={s.label}
                  className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-canvas" : "bg-white"}`}
                >
                  <dt className="text-secondary-400 font-medium">{s.label}</dt>
                  <dd className="text-secondary-700">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">Benefits</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-secondary-500 bg-primary-50 rounded-xl p-4">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {product.category === "massage-chairs" && (
            <div>
              <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">
                Key Functions & Advanced Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Panel 1: Functions */}
                <div className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300">
                  <h3 className="font-display font-bold text-secondary-800 text-base mb-4 flex items-center gap-2 text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Core Massager Functions
                  </h3>
                  <ul className="space-y-3.5">
                    {[
                      { title: "4D Multi-Function Relief", desc: "4D kneading, tapping, shiatsu, and knock functions for full-body relief." },
                      { title: "AI-Powered Alignment", desc: "AI-powered detection for accurate shoulder and spine alignment." },
                      { title: "Smart Hands-Free Control", desc: "Hands-free control with 17 voice commands on the automatic body massager." },
                      { title: "Zero-Gravity Recline", desc: "Zero-gravity recline for improved circulation and deep comfort." },
                      { title: "Magnetic Foot Rollers", desc: "Magnetic foot rollers for a complete massager machine for full body experience." }
                    ].map((f) => (
                      <li key={f.title} className="text-sm">
                        <span className="font-semibold text-secondary-700 block">{f.title}</span>
                        <span className="text-secondary-400 text-xs mt-0.5 block leading-relaxed">{f.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Panel 2: Features */}
                <div className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300">
                  <h3 className="font-display font-bold text-secondary-800 text-base mb-4 flex items-center gap-2 text-accent">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Advanced Chair Features
                  </h3>
                  <ul className="space-y-3.5">
                    {[
                      { title: "7-Inch Touchscreen Command", desc: "7-inch touchscreen with intuitive, easy-to-use controls." },
                      { title: "Built-In Entertainment & Power", desc: "Built-in USB charging, Bluetooth speakers, and ambient LED lighting." },
                      { title: "Graphene Thermal Zones", desc: "Graphene heating zones for targeted back and leg heat therapy." },
                      { title: "Multi-Zone Compression Airbags", desc: "Airbags targeting shoulders, arms, calves, and feet on the body massage machine." },
                      { title: "16 cm Calf Extender Adjustment", desc: "Calf extender adjusts up to 16 cm for full coverage across all body types." }
                    ].map((f) => (
                      <li key={f.title} className="text-sm">
                        <span className="font-semibold text-secondary-700 block">{f.title}</span>
                        <span className="text-secondary-400 text-xs mt-0.5 block leading-relaxed">{f.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div>
            <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">
              Therapeutic Health Benefits
            </h2>
            <div className="rounded-3xl bg-secondary-900 text-white p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10 grid sm:grid-cols-2 gap-4">
                {healthBenefits.map((b) => (
                  <div key={b.title} className="flex gap-3 items-start p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-white">{b.title}</h4>
                      <p className="text-xs text-secondary-300 leading-relaxed mt-1">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-secondary-700 mb-4">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={product.faqs} />
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-secondary-100 p-6 sticky top-24">
            <h2 className="font-display font-semibold text-secondary-700 mb-1">Quick Enquiry</h2>
            <p className="text-sm text-secondary-400 mb-5">
              We&apos;ll call or WhatsApp you back with stock and delivery details.
            </p>
            <EnquiryForm productName={product.name} compact />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-wide pb-20">
          <h2 className="font-display text-xl font-semibold text-secondary-700 mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </PageAnimate>
  );
}
