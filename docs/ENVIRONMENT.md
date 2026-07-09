# Environment Variables

Copy `.env.example` to `.env.local` for local development, or add these under your hosting
provider's environment variable settings for production.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full production URL, no trailing slash. Used for canonical URLs, sitemap, and OpenGraph tags. |
| `NEXT_PUBLIC_SITE_NAME` | No | Defaults to "AVA Traders". |
| `NEXT_PUBLIC_PHONE_PRIMARY` | Yes | Main phone number in `+91XXXXXXXXXX` format. Used for click-to-call links. |
| `NEXT_PUBLIC_PHONE_SECONDARY` | No | Secondary phone number, shown in footer/contact page. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Digits only with country code, no `+` or spaces (e.g. `917008636254`). Used to build `wa.me` links. |
| `NEXT_PUBLIC_EMAIL` | Yes | Support/enquiry email address. |
| `NEXT_PUBLIC_ADDRESS` | Yes | Full showroom address, shown in footer, contact page, and schema markup. |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC` | Yes | The `src` value from a Google Maps "Embed a map" share link. |
| `NEXT_PUBLIC_GSTIN` | No | Shown in the footer for business transparency. |
| `RESEND_API_KEY` | No | Only needed if you wire up the enquiry form via Resend — see `docs/DEPLOYMENT.md`. |
| `FORMSPREE_ENDPOINT` | No | Only needed if you wire up the enquiry form via Formspree instead. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID, if you add analytics. |

All `NEXT_PUBLIC_*` variables are exposed to the browser — never put secrets in them. Anything
without the `NEXT_PUBLIC_` prefix (like `RESEND_API_KEY`) stays server-side only.
