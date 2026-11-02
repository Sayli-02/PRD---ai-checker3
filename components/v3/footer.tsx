import Link from "next/link";
import { brand } from "@/config/brand";
import { Reveal } from "@/components/home/reveal";
import { v3copy } from "@/content/v3";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function V3Footer() {
  return (
    <footer className="v3-night v3-bloom v3-bloom-lamp border-t border-[var(--v3-line-night)]">
      <Reveal className="motion-safe:translate-y-8 motion-safe:duration-700 motion-safe:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 font-[family-name:var(--font-v3-display)] text-2xl font-medium tracking-tight">
            <span aria-hidden className="size-2.5 rounded-full bg-[var(--v3-accent)]" />
            {brand.name}
          </p>
          <p className="mt-3 max-w-xs text-[var(--v3-muted-night)]">{brand.tagline}</p>
        </div>
        <div className="grid content-start gap-2">
          <h2 className="text-lg">Contact</h2>
          {brand.contact.email && (
            <a href={`mailto:${brand.contact.email}`} className="inline-flex min-h-11 items-center underline">
              {brand.contact.email}
            </a>
          )}
          <WhatsAppLink location="footer" className="min-h-11 text-[var(--v3-on-night)]" />
        </div>
        <nav aria-label="Legal" className="grid content-start gap-2">
          <h2 className="text-lg">Legal</h2>
          {v3copy.footer.legal.map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex min-h-11 items-center underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      </Reveal>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-[var(--v3-muted-night)] sm:px-8">© {brand.name}</p>
    </footer>
  );
}
