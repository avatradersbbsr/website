import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductRail from "@/components/home/ProductRail";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import MapSection from "@/components/home/MapSection";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { getFeaturedProducts, getBestSellers } from "@/data/products";
import { siteFaqs } from "@/data/faqs";
import { FAQSchema, LocalBusinessSchema } from "@/components/seo/schema";
import { siteConfig } from "@/lib/site-config";
import PageAnimate from "@/components/shared/PageAnimate";

export const metadata: Metadata = {
  title: "Best Massage Chair Showroom in Bhubaneswar, Odisha | AVA Traders",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedProducts();
  const bestSellers = getBestSellers();

  return (
    <PageAnimate>
      <FAQSchema faqs={siteFaqs} />
      <LocalBusinessSchema />

      <Hero />
      <CategoryGrid />

      <ProductRail
        eyebrow="Featured"
        title="Featured products"
        description="A snapshot of the models our team recommends most often."
        products={featured}
      />

      <WhyChooseUs />

      <ProductRail
        eyebrow="Customer Favourites"
        title="Best-selling products"
        description="The products our Bhubaneswar customers keep coming back for."
        products={bestSellers}
      />

      <Testimonials />

      <section className="section-y container-wide">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Questions before you visit or order"
        />
        <div className="mt-6 max-w-2xl mx-auto">
          <FAQAccordion faqs={siteFaqs} />
        </div>
      </section>

      <CTASection />
      <MapSection />
    </PageAnimate>
  );
}
