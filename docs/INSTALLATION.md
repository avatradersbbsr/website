# Installation Guide

## Requirements

- Node.js 18.18 or later (Node 20 LTS recommended)
- npm 9+ (comes with Node)

## 1. Install dependencies

```bash
npm install
```

## 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your real business details:

- `NEXT_PUBLIC_PHONE_PRIMARY` / `NEXT_PUBLIC_PHONE_SECONDARY` — in `+91XXXXXXXXXX` format
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, country code without `+` (e.g. `917008636254`)
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_ADDRESS`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC` — see below
- `NEXT_PUBLIC_SITE_URL` — your final production domain, e.g. `https://www.avatraders.in`

### Getting your Google Maps embed URL

1. Open [Google Maps](https://maps.google.com) and search for your showroom.
2. Click **Share** → **Embed a map** → **Copy HTML**.
3. Copy just the `src="..."` value from the `<iframe>` tag into
   `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC`.

## 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 4. Add real product photography

Product images are currently placeholders (see README). Once you have real photos:

1. Save them under `public/images/products/<product-slug>-1.jpg` (and `-2`, `-3`, etc.,
   matching the `images` array in `data/products.ts`).
2. Update `components/products/ProductCard.tsx` and `components/products/ProductGallery.tsx`
   to render `next/image` pointing at those paths instead of `ProductImagePlaceholder`.
3. Run `npm run build` locally to confirm there are no broken image paths before deploying.

## 5. Type-check and lint before committing

```bash
npm run typecheck
npm run lint
```
