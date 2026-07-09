Drop real photography here before launch:

- `products/<slug>-1.jpg`, `-2.jpg`, `-3.jpg` — matches the `images` array in data/products.ts
- `categories/<category-slug>.jpg` — category hero images referenced in data/categories.ts
- `og-default.jpg` (1200x630) — default social share image referenced in lib/site-config.ts

Until real photos are added, product visuals render via
components/shared/ProductImagePlaceholder.tsx so nothing breaks.
