# Project memory

## Product intent & audience

- **Gloss Boss Mobile Detailing**: premium mobile car detailing business website.
- Multi-page marketing site aimed at prospective customers seeking mobile detailing services.
- Frontend-only; contact and booking interactions are client-side (phone, email, Facebook, form success state).
- Audience: vehicle owners valuing convenience and premium finish quality.

## Brand personality & voice

- Premium, polished, professional automotive service brand.
- Emphasis on high-end shine/finish and trustworthiness.
- Service-oriented and approachable; clear calls to action.

## Visual design & UX direction

- Premium, non-generic aesthetic; production-quality polish.
- Route-based navigation across multiple pages with mobile menu.
- Responsive layouts; sticky mobile action buttons for quick contact/booking.
- Gallery with category filters and lightbox.
- Booking form with visible success state.
- FAQ accordion; testimonial sections; package/service comparison layouts.
- Animations used for engagement without overwhelming.
- Supplied brand logo integrated into the layout.
- shadcn/ui components and Lucide React icons used throughout (per template).

## Decisions, constraints & rationale

- Framework: Vite + React with JSX, Tailwind CSS, shadcn/ui, Lucide React.
- No additional UI/theme/icon packages installed beyond template defaults.
- Frontend-only by request; no backend or form submission service wired up.
- Production build passes with no type or import errors.
- Contact interactions rely on direct links (tel:, mailto:, social URL) and client-side form state.

## Open questions & assumptions

- Booking form success is simulated client-side; no real submission backend exists.
- Gallery image sourcing/supply method not confirmed.
- Business contact details (phone, email, Facebook URL) assumed to be supplied or placeholder.
- No analytics, SEO metadata, or deployment target specified yet.