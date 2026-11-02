import { ArrowDown } from "lucide-react";
import { v3copy } from "@/content/v3";
import { withBase } from "@/lib/base-path";
import { SearchMockup } from "./search-mockup";

const h = v3copy.hero;

export function V3Hero() {
  return (
    <section className="v3-night v3-hero">
      <img
        src={withBase("/images/v3/hero-hands.jpg")}
        alt={h.imageAlt}
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="v3-hero-photo"
      />
      <div aria-hidden className="v3-hero-scrim" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-12 md:py-20 lg:gap-16 lg:py-24">
        <div className="order-2 min-w-0 md:order-1">
          <h1 className="max-w-[14ch] text-[2.6rem] leading-[1.08] text-[var(--v3-on-night)] sm:text-6xl lg:text-[4.25rem]">
            {h.title}
          </h1>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-[var(--v3-muted-night)]">{h.subtitle}</p>
          <a href="#check" className="v3-cta mt-9">
            {h.cta}
            <ArrowDown aria-hidden className="size-4" />
          </a>
        </div>
        <div className="v3-stage order-1 min-w-0 md:order-2">
          <SearchMockup />
        </div>
      </div>
    </section>
  );
}
