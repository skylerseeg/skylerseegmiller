# skylerseegmiller.com

Personal site at [skylerseegmiller.com](https://skylerseegmiller.com). Single-route, document-as-experience — dark editorial built on Next.js 15.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS 3.4 · shadcn/ui (new-york)
- framer-motion · lucide-react
- Inter (sans) + Fraunces (serif) via `next/font/google`

## Local development

```bash
git clone https://github.com/<your-user>/skylerseegmiller.git
cd skylerseegmiller
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Customization

All copy lives in **`lib/content.ts`** as a typed discriminated union (`SECTIONS`). Edit values there and every section re-renders against the new data — no inline strings to chase down.

- **Social links**: update the `cards` array on the `connect` section.
- **Hero / building / about copy**: edit the corresponding entry in `SECTIONS`.
- **Design tokens** (palette, type scale, spacing, grain): `app/globals.css` (HSL custom properties) and `tailwind.config.ts`.
- **Motion vocabulary**: `lib/motion.ts` (`pageEnter`, `fadeUp`, `wordReveal`, `staggerContainer`).

## Project layout

```
app/
  layout.tsx       Root layout, metadata, fonts, MotionProvider, skip link
  page.tsx         Single route — composes nav + sections + footer
  globals.css      Token definitions, base styles, focus rings
  sitemap.ts       sitemap.xml generated via Metadata API
components/
  sections/        Hero, Building, Connect, About — pure renders of content.ts
  ui/Section.tsx   Section primitive used by every section
  SiteNav.tsx      Scroll-reactive header + section dots + mobile progress hairline
  SiteFooter.tsx   Three-column thin footer
lib/
  content.ts       Single source of truth for all copy
  motion.ts        Reusable framer-motion variants
  utils.ts         cn() helper
public/
  og-image.svg     1200x630 social card
  favicon.svg      SS monogram
  robots.txt
reference/         Design references (Pet Directive Brief screenshots)
```

## Deploy

Production deploy lives on Vercel. Next.js auto-detection handles the build; no `vercel.json` needed.

1. Push the repo to GitHub.
2. In Vercel, **New Project** → import the repo. Framework preset: **Next.js**. Defaults are fine.
3. Point DNS for `skylerseegmiller.com` at Vercel:
   - Apex (`skylerseegmiller.com`): A record → `76.76.21.21`
   - `www` subdomain: CNAME → `cname.vercel-dns.com`
4. Add the domain inside the Vercel project's **Domains** tab; Vercel will issue the certificate automatically.

## License

MIT — copy and adapt freely for your own site.
