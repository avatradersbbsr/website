# AVA Traders — Website

A production-ready website for **AVA Traders**, a Bhubaneswar-based showroom for massage
chairs, foot massagers, massage guns, and fitness/wellness equipment.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Product data
lives in plain TypeScript/JSON files so it's easy to edit without touching a CMS.

## What's included

- **11 pages**: Home, About, Products (catalogue with filters), Product Detail, Contact,
  Privacy Policy, Terms & Conditions, Shipping Policy, Return & Refund Policy, Disclaimer, 404.
- **36 demo products** across 7 categories (massage chairs, foot massagers, massage guns,
  neck & shoulder massagers, leg massagers, fitness equipment, health care devices).
- **SEO**: per-page metadata, canonical URLs, OpenGraph/Twitter cards, JSON-LD schema
  (Organization, LocalBusiness, Product, FAQ, Breadcrumb), dynamic `sitemap.xml` and `robots.txt`.
- **Lead generation**: WhatsApp enquiry links, click-to-call, validated enquiry form with a
  honeypot spam field and a success state.
- **Accessibility**: skip-to-content link, visible focus states, `prefers-reduced-motion`
  support, semantic headings, ARIA labels on icon-only buttons.
- **Floating WhatsApp + Call buttons**, back-to-top button, mega menu, mobile nav.

## Before you go live — replace these placeholders

This repo ships with **real, original copy** (no lorem ipsum) so it's demo-ready out of the
box, but a few things are intentionally left as placeholders for you to fill in:

1. **Product photography.** Product images currently render as a styled icon placeholder
   (`components/shared/ProductImagePlaceholder.tsx`) instead of `<img>`/`next/image` tags, so
   the site never ships with broken image links. Add real photos to
   `public/images/products/` and swap the placeholder for `next/image` in
   `components/products/ProductCard.tsx` and `components/products/ProductGallery.tsx`.
2. **Contact details.** Phone numbers, email, WhatsApp number, address, and the Google Maps
   embed URL are all pulled from environment variables — see `.env.example` and
   `docs/ENVIRONMENT.md`.
3. **Enquiry form submission.** The form in `components/shared/EnquiryForm.tsx` currently
   simulates a network request so the UI works immediately. Wire it up to a real endpoint —
   see `docs/DEPLOYMENT.md` for two ready options (Resend or Formspree).
4. **Testimonials.** `data/testimonials.ts` contains sample, realistic-sounding reviews.
   Replace with verified customer quotes once you have them.
5. **Google Analytics / Search Console.** Add your measurement ID to `.env.local` if you use
   analytics; verify the site in Search Console using the sitemap at `/sitemap.xml`.

## Project structure

```
app/                        Next.js App Router pages
  page.tsx                  Home
  about/page.tsx            About Us
  products/page.tsx         Product catalogue (filterable)
  products/[slug]/page.tsx  Product detail
  contact/page.tsx          Contact Us
  privacy-policy/           Legal pages...
  terms-and-conditions/
  shipping-policy/
  return-refund-policy/
  disclaimer/
  sitemap.ts                Dynamic sitemap.xml
  robots.ts                 Dynamic robots.txt
  not-found.tsx              Custom 404
components/
  layout/                   Header, Footer, FloatingActions
  home/                     Homepage sections (Hero, CategoryGrid, etc.)
  products/                 ProductCard, ProductGallery, ProductsCatalog
  shared/                   SectionHeading, EnquiryForm, FAQAccordion, LegalLayout
  seo/                      JSON-LD schema components
data/
  products.ts               36 demo products — edit or add here
  categories.ts             7 product categories
  testimonials.ts           Sample testimonials
  faqs.ts                   Site-wide FAQ content
lib/
  site-config.ts            Business name, contact info, nav — single source of truth
  utils.ts                  cn() class helper, INR currency formatter
types/
  product.ts                TypeScript types for Product/Category
docs/
  INSTALLATION.md
  DEPLOYMENT.md
  SEO-GUIDE.md
  ENVIRONMENT.md
```

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in real contact details
npm run dev
```

Visit `http://localhost:3000`.

See `docs/INSTALLATION.md` for full setup, `docs/DEPLOYMENT.md` for going live, and
`docs/SEO-GUIDE.md` for the SEO/AEO checklist.

## Adding or editing products

Products live in `data/products.ts` as a plain TypeScript array typed by `types/product.ts`.
To add a product, copy an existing entry and update the fields — no build step or CMS login
required. Categories live in `data/categories.ts`.

## Scripts

| Command           | What it does                              |
|--------------------|--------------------------------------------|
| `npm run dev`       | Start the local dev server                 |
| `npm run build`     | Production build (static generation)       |
| `npm run start`     | Serve the production build                 |
| `npm run lint`      | Run ESLint                                 |
| `npm run typecheck` | Run the TypeScript compiler in check mode  |
