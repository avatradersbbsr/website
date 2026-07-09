# SEO & AEO Guide

## What's already implemented

| Feature | Where |
|---|---|
| Per-page meta title/description | `metadata` export in each `app/**/page.tsx` |
| Canonical URLs | `alternates.canonical` in each page's metadata |
| OpenGraph + Twitter cards | `app/layout.tsx` (site-wide) + product pages (per-product) |
| Organization schema | `app/layout.tsx` |
| LocalBusiness schema | `components/seo/schema.tsx` → `LocalBusinessSchema`, used on the home page |
| Product schema | `components/seo/schema.tsx` → `ProductSchema`, used on product detail pages |
| FAQ schema | `components/seo/schema.tsx` → `FAQSchema`, used on home + product pages |
| Breadcrumb schema | `components/seo/schema.tsx` → `BreadcrumbSchema`, used on About/Products/Contact/Product pages |
| Dynamic sitemap.xml | `app/sitemap.ts` — auto-includes every product page |
| Dynamic robots.txt | `app/robots.ts` |
| Semantic HTML | Proper heading hierarchy, `<nav>`, `<dl>` for specs, `<blockquote>`/`<figure>` for testimonials |

## Answer Engine Optimization (AEO)

AI answer engines (ChatGPT, Gemini, Perplexity, Google AI Overview, Bing Copilot) favour pages
that are unambiguous about **who you are, what you sell, and where you operate**. This site
supports that through:

- **Question-based headings** on the homepage FAQ and every product's FAQ section
  (`"Where is the AVA Traders showroom located?"`, `"Can I try a massage chair before
  purchasing?"`, etc.) — these map directly to how people phrase voice and AI search queries.
- **Entity clarity**: business name, address, and category are repeated consistently in
  schema markup, page copy, and metadata rather than varying across pages.
- **FAQPage schema** on both the homepage and every product page, which AI answer engines and
  Google's AI Overview commonly draw from directly.

### To improve AEO further as the site grows

1. Add a `/blog` section (structure is ready to build the same way as `/products`) with posts
   answering specific questions your customers ask, e.g. *"Is a massage chair safe during
   pregnancy?"* or *"Massage gun vs. massage chair — which do you need?"*
2. Keep FAQ answers self-contained — a good AEO answer doesn't require reading the rest of the
   page to make sense.
3. Add a Google Business Profile link and keep NAP (Name, Address, Phone) identical across the
   website, Google Business Profile, and any directory listings.

## Adding a new product without breaking SEO

Every product automatically gets:
- Its own metadata (title/description) from the `seo` field in `data/products.ts`
- Its own canonical URL and OpenGraph tags
- Product + FAQ schema
- An entry in `sitemap.xml` (regenerated automatically on build — no manual step)

Just add the entry to `data/products.ts` and everything above follows automatically.

## Manual steps after going live

1. **Google Search Console** — verify domain ownership, submit `sitemap.xml`.
2. **Google Business Profile** — keep hours, address, and phone number in sync with
   `lib/site-config.ts`.
3. **Bing Webmaster Tools** — submit the same sitemap; Bing powers Bing Copilot's answers.
4. **Structured data testing** — after deploying, validate key pages using
   [Google's Rich Results Test](https://search.google.com/test/rich-results) to confirm the
   Product, FAQ, and LocalBusiness schema render without errors.
