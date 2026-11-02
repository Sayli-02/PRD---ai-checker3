"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, Menu, X } from "lucide-react";
import { brand } from "@/config/brand";
import { v3copy } from "@/content/v3";
import { track } from "@/lib/analytics";

export function V3Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="v3-night sticky top-0 z-40 border-b border-[var(--v3-line-night)]">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/v3" aria-label="Home" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center gap-2.5">
          <span aria-hidden className="size-2.5 rounded-full bg-[var(--v3-accent)]" />
          <span className="font-[family-name:var(--font-v3-display)] text-2xl font-medium tracking-tight">
            {brand.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {v3copy.nav.links.map((l) =>
            l.href.includes("#") ? (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--v3-muted-night)] hover:text-[var(--v3-on-night)] hover:underline"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--v3-muted-night)] hover:text-[var(--v3-on-night)] hover:underline"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#check"
            onClick={() => {
              track("cta_clicked", { location: "header" });
              setOpen(false);
            }}
            className="v3-cta h-10 text-sm"
          >
            {v3copy.nav.cta}
            <ArrowDown aria-hidden className="size-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="v3-mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-[var(--v3-line-night)] md:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="v3-mobile-menu" aria-label="Main" className="border-t border-[var(--v3-line-night)] md:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-[var(--v3-line-night)] px-5">
            {v3copy.nav.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3.5 text-lg font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
