import { Suspense } from "react";
import { V3Footer } from "@/components/v3/footer";
import { V3Header } from "@/components/v3/header";
import { V3Hero } from "@/components/v3/hero";
import { V3Blog, V3Compare, V3Faq, V3Final, V3How, V3Report, V3Shows, V3Trust } from "@/components/v3/sections";

export default function V3Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-[4px] focus:bg-[var(--v3-ink)] focus:px-4 focus:py-2 focus:font-semibold focus:text-[var(--v3-paper)]"
      >
        Skip to content
      </a>
      <V3Header />
      <main id="main">
        <V3Hero />
        <V3Trust />
        <V3Shows />
        <V3How />
        <V3Compare />
        <V3Report />
        <Suspense fallback={null}>
          <V3Blog />
        </Suspense>
        <V3Faq />
        <V3Final />
      </main>
      <V3Footer />
    </>
  );
}
