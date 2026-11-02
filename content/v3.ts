import { home } from "@/content/home";

// V3-only hero and nav. Section copy is the same product, read from home so we do not drift.
export const v3copy = {
  nav: {
    links: [
      { label: "How it works", href: "/v3#how" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/v3#faq" },
    ],
    cta: "See if you are named",
  },
  hero: {
    title: "Someone asked for a business like yours.",
    subtitle: "AI answered with three names. Yours was not one of them.",
    cta: "See if you are named",
    imageAlt: "Hands on a laptop at a night desk, screen empty. Decorative, not a client photo.",
  },
  mockup: home.problem.example,
  trust: home.trust,
  shows: home.shows,
  how: home.how,
  compare: home.compare,
  report: home.report,
  blog: home.blog,
  faq: home.faq,
  finalCta: home.finalCta,
  footer: home.footer,
  form: home.hero.form,
} as const;
