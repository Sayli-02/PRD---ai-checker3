import Link from "next/link";
import { Lock } from "lucide-react";
import { CheckForm } from "@/components/check/check-form";
import { Reveal } from "@/components/home/reveal";
import { v3copy } from "@/content/v3";
import { formatDate, getLatestPosts } from "@/lib/blog";

const rise =
  "motion-safe:translate-y-8 motion-safe:duration-700 motion-safe:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";

function Band({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`v3-bloom scroll-mt-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <Reveal className={rise}>{children}</Reveal>
      </div>
    </section>
  );
}

export function V3Trust() {
  return (
    <section className="v3-night v3-bloom v3-bloom-lamp border-t border-[var(--v3-line-night)]">
      <Reveal className={rise}>
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-baseline gap-x-10 gap-y-3 px-5 py-7 sm:px-8">
          <p className="text-sm text-[var(--v3-muted-night)]">{v3copy.trust.label}</p>
          {v3copy.trust.engines.map((engine) => (
            <p key={engine} className="text-sm font-medium text-[var(--v3-on-night)]">
              {engine}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function V3Shows() {
  return (
    <Band className="v3-bloom-accent">
      <h2 className="max-w-[12ch] text-4xl sm:text-6xl">{v3copy.shows.eyebrow}</h2>
      <dl className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {v3copy.shows.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 90} className={rise}>
            <div>
              <dt className="font-[family-name:var(--font-v3-display)] text-3xl font-medium">{item.title}</dt>
              <dd className="mt-3 max-w-[36ch] text-[var(--v3-muted)]">{item.text}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Band>
  );
}

export function V3How() {
  return (
    <Band id="how" className="v3-wash-soft v3-bloom-soft">
      <h2 className="max-w-[14ch] text-4xl sm:text-6xl">{v3copy.how.title}</h2>
      <ol className="mt-16 grid gap-12">
        {v3copy.how.steps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 120} className={rise}>
              <div className="grid items-baseline gap-3 md:grid-cols-[7rem_1fr] md:gap-12">
                <p className="font-[family-name:var(--font-v3-display)] text-5xl font-medium text-[var(--v3-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-lg text-[var(--v3-muted)]">{step.text}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Band>
  );
}

export function V3Compare() {
  const c = v3copy.compare;
  return (
    <Band className="v3-bloom-ink">
      <h2 className="max-w-[16ch] text-4xl sm:text-6xl">{c.title}</h2>
      <p className="mt-5 max-w-[48ch] text-lg text-[var(--v3-muted)]">{c.note}</p>
      <div className="mt-12 grid overflow-hidden rounded-2xl bg-[var(--v3-night)] md:grid-cols-2">
        {c.columns.map((col, i) => (
          <div
            key={col}
            className={`p-7 sm:p-10 ${i === 0 ? "bg-[var(--v3-surface)]" : "v3-compare-aeo text-[var(--v3-on-night)]"}`}
          >
            <h3 className="font-[family-name:var(--font-v3-display)] text-3xl font-medium">{col}</h3>
            <p className={`mt-1 ${i === 0 ? "text-[var(--v3-muted)]" : "text-[var(--v3-muted-night)]"}`}>{c.subtitles[i]}</p>
            <ul className="mt-6 grid gap-4">
              {c.rows.map((row) => (
                <li key={row.label}>
                  <p className={`text-xs font-medium tracking-wide uppercase ${i === 0 ? "text-[var(--v3-muted)]" : "text-[var(--v3-muted-night)]"}`}>{row.label}</p>
                  <p className="mt-1">{row.values[i]}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Band>
  );
}

export function V3Report() {
  const r = v3copy.report;
  return (
    <Band id="sample-report" className="v3-bloom-ink">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h2 className="max-w-[12ch] text-4xl sm:text-6xl">{r.title}</h2>
          <p className="mt-5 max-w-[42ch] text-lg text-[var(--v3-muted)]">{r.body}</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-[var(--v3-surface)] p-7 shadow-[0_24px_50px_-28px_rgb(26_21_18/0.45)]">
          <div aria-hidden className="grid gap-5 blur-[5px] select-none">
            {r.rows.map((row, i) => (
              <div key={row}>
                <p className="font-medium">{row}</p>
                <div className="mt-2 h-2 rounded-full bg-[var(--v3-line)]">
                  <div
                    className="h-full rounded-full bg-[var(--v3-accent)]"
                    style={{ width: `${[72, 48, 85, 36][i % 4]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 grid place-items-center bg-[var(--v3-paper)]/55">
            <p className="flex items-center gap-2 rounded-[4px] bg-[var(--v3-ink)] px-4 py-2 text-sm font-semibold text-[var(--v3-paper)]">
              <Lock aria-hidden className="size-4" />
              {r.lock}
            </p>
          </div>
        </div>
      </div>
    </Band>
  );
}

export async function V3Blog() {
  const posts = await getLatestPosts(3);
  if (posts.length === 0) return null;
  return (
    <Band className="v3-bloom-accent">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl sm:text-6xl">{v3copy.blog.title}</h2>
        <Link href="/blog" className="font-semibold underline">
          {v3copy.blog.all}
        </Link>
      </div>
      <ul className="mt-10 grid gap-0 border-t border-[var(--v3-line)]">
        {posts.map((p) => (
          <li key={p.slug} className="border-b border-[var(--v3-line)] py-5">
            <Link href={`/blog/${p.slug}`} className="group grid gap-1 md:grid-cols-[8rem_1fr] md:gap-10">
              <time dateTime={p.date} className="text-sm text-[var(--v3-muted)]">
                {formatDate(p.date)}
              </time>
              <span>
                <span className="text-xl font-semibold group-hover:underline">{p.title}</span>
                <span className="mt-1 block max-w-[56ch] text-[var(--v3-muted)]">{p.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Band>
  );
}

export function V3Faq() {
  return (
    <Band id="faq" className="v3-wash-soft v3-bloom-soft">
      <h2 className="max-w-[10ch] text-4xl sm:text-6xl">{v3copy.faq.title}</h2>
      <div className="mt-8 border-t border-[var(--v3-line)]">
        {v3copy.faq.items.map((item) => (
          <details key={item.q} name="v3-faq" className="group border-b border-[var(--v3-line)]">
            <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4 text-left">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <span aria-hidden className="text-[var(--v3-muted)] group-open:hidden">
                +
              </span>
              <span aria-hidden className="hidden text-[var(--v3-muted)] group-open:inline">
                −
              </span>
            </summary>
            <p className="max-w-prose pb-5 text-[var(--v3-muted)]">{item.a}</p>
          </details>
        ))}
      </div>
    </Band>
  );
}

export function V3Final() {
  return (
    <Band id="check" className="v3-night v3-wash-night v3-bloom-lamp">
      <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,28rem)] md:items-start md:gap-16">
        <div>
          <h2 className="max-w-[12ch] text-4xl text-[var(--v3-on-night)] sm:text-6xl">{v3copy.finalCta.title}</h2>
          <p className="mt-5 max-w-[34ch] text-lg text-[var(--v3-muted-night)]">{v3copy.finalCta.body}</p>
        </div>
        <CheckForm location="final" />
      </div>
    </Band>
  );
}
