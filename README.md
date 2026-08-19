# One Call Home Service — Website

A single-page Next.js 14 + Tailwind CSS site for a Jaipur/Udaipur home
services brand (Plumbing, Painting, Electrical, Cleaning, Deep Cleaning,
AC Service).

## Before you launch — please update these

1. **Phone numbers.** `+91 98765 43210` (Jaipur) and `+91 91234 56780`
   (Udaipur) are placeholders. Search the project for both numbers and
   replace them — they appear in `components/Header.tsx`, `Hero.tsx`,
   `Services.tsx`, `PaintingShowcase.tsx`, `CityAvailability.tsx` and
   `Footer.tsx`.
2. **Email address** in `components/Footer.tsx`.
3. **Before/after photos.** The painting slider (`components/BeforeAfterSlider.tsx`)
   currently uses stock photos so the layout works out of the box. Swap
   `BEFORE_IMG` and `AFTER_IMG` for real photos of the same wall, shot
   from the same angle — that's what makes a before/after convincing.
   Photos of your own completed jobs everywhere else on the site
   (the hero, the "Why Us" image) will also do more for you than stock
   photography once you have them.
4. **Social links** in `components/Footer.tsx` (`href="#"` placeholders).
5. **Rating** in `components/WhyUs.tsx` (currently a placeholder 4.9/5).

## Stock photography currently in use

All placeholder photos are from Unsplash (free to use commercially, no
attribution required). If you keep any of them, image credits are on
Unsplash's photo pages — search the photo IDs used in `Hero.tsx`,
`WhyUs.tsx`, `BeforeAfterSlider.tsx` and `Footer.tsx`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

See the setup walkthrough shared alongside this project for the full
step-by-step, from installing Node.js to deploying.

## Project structure

```
app/
  layout.tsx      — fonts, metadata, the shared arch-clip SVG defs
  page.tsx         — assembles all sections
  globals.css      — design tokens, the jharokha-arch + jali motifs
components/
  Header.tsx
  Hero.tsx
  WhyUs.tsx              — trust badges (Trusted / On Time / Quality / Satisfaction)
  Services.tsx           — the six services
  BeforeAfterSlider.tsx  — the interactive painting comparison
  PaintingShowcase.tsx   — dark section wrapping the slider
  CityAvailability.tsx   — Jaipur / Udaipur split with call buttons
  Footer.tsx
```

## Design notes

The palette and the arch motif (used on photos and as the shape of the
before/after frame) are drawn from Jaipur's own haveli architecture —
the *jharokha*, a projecting balcony window found across the old city —
rather than generic stock icons. The lattice pattern used as the
Jaipur/Udaipur divider echoes a *jali* screen. Feel free to swap the
`rose`, `brass`, `ivory` and `espresso` colors in `tailwind.config.ts`
if you'd like a different palette.
