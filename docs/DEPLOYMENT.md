# Deployment Guide

## Recommended: Vercel

This is a standard Next.js App Router project, so Vercel requires no special configuration.

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — leave the build command (`next build`) and output settings
   as default.
4. Add your environment variables from `.env.example` under **Project Settings → Environment
   Variables** (use real values, not the placeholders).
5. Deploy. Vercel will give you a `*.vercel.app` URL immediately; add your custom domain under
   **Project Settings → Domains**.

## Alternative: any Node host (Render, Railway, a VPS, etc.)

```bash
npm install
npm run build
npm run start
```

The app listens on port 3000 by default (`PORT` env var to override). Put it behind Nginx or
your host's reverse proxy for TLS.

## Wiring up the enquiry form

`components/shared/EnquiryForm.tsx` currently simulates submission so the UI works without any
backend. Pick one of these to make it real:

### Option A — Resend (email notification to your inbox)

1. Create a free account at [resend.com](https://resend.com) and verify a sending domain.
2. Add `RESEND_API_KEY` to your environment variables.
3. Create `app/api/enquiry/route.ts`:

   ```ts
   import { Resend } from "resend";
   import { NextResponse } from "next/server";

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(req: Request) {
     const data = await req.json();
     await resend.emails.send({
       from: "AVA Traders Website <enquiries@yourdomain.in>",
       to: "info@avatraders.in",
       subject: `New enquiry from ${data.name}`,
       text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`,
     });
     return NextResponse.json({ ok: true });
   }
   ```

4. Add the `resend` package: `npm install resend`.
5. In `EnquiryForm.tsx`, replace the simulated `await new Promise(...)` with:

   ```ts
   await fetch("/api/enquiry", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
   ```

### Option B — Formspree (no backend code required)

1. Create a form at [formspree.io](https://formspree.io) and copy its endpoint URL into
   `FORMSPREE_ENDPOINT` in your environment variables.
2. In `EnquiryForm.tsx`, replace the simulated request with a direct `fetch()` to that
   endpoint using `method: "POST"` and `Accept: application/json` headers.

## Pre-launch checklist

- [ ] Real contact details in `.env.local` / hosting environment variables
- [ ] Real product photography added and placeholders swapped out
- [ ] Enquiry form connected to a real endpoint (Option A or B above)
- [ ] Google Maps embed URL updated to your actual showroom location
- [ ] `NEXT_PUBLIC_SITE_URL` set to your live domain (affects sitemap + canonical URLs)
- [ ] Verify site in [Google Search Console](https://search.google.com/search-console) and
      submit `https://yourdomain.in/sitemap.xml`
- [ ] Run `npm run build` locally with no errors before deploying
- [ ] Test WhatsApp and Call buttons on an actual mobile device
- [ ] Run a Lighthouse audit in Chrome DevTools on the deployed URL and address any
      environment-specific findings (real images, real fonts loaded over your CDN, etc.)
