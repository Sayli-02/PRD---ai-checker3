import { v3copy } from "@/content/v3";

const e = v3copy.mockup;

export function SearchMockup() {
  return (
    <figure className="w-full">
      <div className="v3-bezel">
        <div className="v3-screen">
          <div className="flex items-center justify-between px-5 py-3.5">
            <p className="text-sm font-semibold tracking-tight">{e.engine}</p>
            <p className="text-xs text-[var(--v3-muted)]">Ask</p>
          </div>
          <div className="mx-5 h-px bg-[var(--v3-line)]" />

          <div className="grid gap-6 p-5 sm:p-6">
            <p className="v3-query ml-auto w-fit whitespace-nowrap rounded-2xl bg-[var(--v3-paper)] px-4 py-2.5 text-sm shadow-[0_1px_0_rgb(26_21_18/0.06)]">
              {e.question}
            </p>

            <div>
              <p className="v3-row text-[var(--v3-muted)]" style={{ animationDelay: "1.5s" }}>
                {e.answerIntro}
              </p>
              <ol className="mt-4 grid gap-3">
                {e.names.map((name, i) => (
                  <li
                    key={name}
                    className="v3-row flex items-center gap-3"
                    style={{ animationDelay: `${1.7 + i * 0.28}s` }}
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--v3-paper)] text-sm font-semibold tabular-nums">
                      {i + 1}
                    </span>
                    <span className="font-medium">{name}</span>
                  </li>
                ))}
                <li
                  className="v3-miss flex items-center gap-3 rounded-lg bg-[var(--v3-accent-soft)] px-3 py-3"
                  style={{ animationDelay: "2.6s" }}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--v3-surface)] text-sm font-semibold text-[var(--v3-accent-ink)]">
                    ?
                  </span>
                  <span className="font-semibold text-[var(--v3-accent-ink)]">{e.yours}</span>
                  <span className="ml-auto text-sm font-medium text-[var(--v3-accent-ink)]">{e.missing}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-[var(--v3-muted-night)]">{e.label}</figcaption>
    </figure>
  );
}
