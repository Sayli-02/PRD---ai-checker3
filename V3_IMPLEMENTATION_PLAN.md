# V3 implementation plan — Citeo, “the missing listing”

Same product as V1 and V2: a free AI Visibility Check that turns a visitor into a lead. Different **first 8 seconds** and a **third visual world**.

Live V1 stays on production `main`. Current Citeo (dark / cream / lavender, Newsreader + Hanken Grotesk) is V2. V3 lives at **`/v3`** in this app so all three can be shown side by side.

Do not start a phase until the previous phase’s **Done when** checks pass. One pull request per phase. Ponytail before every write. Copy, brand name, and legal rules still come from `content/*.ts` and the copy-rules skill. Never invent proof.

---

## Locked product decisions (do not re-debate)

| Topic | V3 decision |
|---|---|
| Offer | Free AI Visibility Check. Team does the SEO / AEO work. |
| Primary action | Run the check, then leave contact details. |
| Hero | A **search mockup**, not a photo and not the check form. Someone asks an AI for businesses like theirs and **is not on the list**. Then the rest of the page begins. |
| Form | Header CTA jumps to `#check`. The form sits in the **final section**, same as V2, so people scroll the story. |
| Problem section | Do **not** repeat the chat card mid-page. The hero *is* the problem. Mid-page starts at “what the check shows”. |
| Proof | Real only. Testimonials and check counts stay behind existing feature flags. |
| Check engine | Reuse `/api/check`, progress, OTP, scoring. No second backend. |
| Engines in the mockup | Text names only (ChatGPT, Gemini, Perplexity). No official logos or ChatGPT chrome. Label the scene as an **illustration**. |
| Copy | Indian English, no prices, no rank promises, no AI-hype words. Names in the mockup stay made-up and labelled as such. |
| Indexing | `/v3` is a campaign variant → `noindex,nofollow` until a founder picks it. |

PRD wanted the form above the fold. V3 overrides that on purpose: the mockup is the hook; the form is the close.

---

## How V3 is not V1 or V2

| | V1 (live Vercel) | V2 (Citeo now) | V3 |
|---|---|---|---|
| First screen | Form-led hero | Dark serif headline + photo | **Light stage. The search scene is the hero.** |
| Colour | Older section tokens | `#0B0B14` / `#F4EFE6` / lavender `#B79CF0` | Cool gallery paper, ink, **one terracotta accent** |
| Type | Older stack | Newsreader + Hanken Grotesk, italic accent word | **One family: Manrope.** No italic display trick |
| Radius | Mixed | 18px cards, 8px controls | 12px cards, 4px controls |
| Surfaces | Mixed | Dark strips + cream body | Almost all light. Ink only for type and the mockup frame |
| Motion | Little | Static chat card later on the page | Short **type → answers → empty slot** in the hero |

V3 must still look expensive: lots of air, one accent, no gradients on backgrounds, no purple, no cream-lavender pairing.

### Tokens (lock in Phase 0, then only change here)

Put in `config/v3.ts`. Components never hard-code hex.

```
paper        #F4F5F7    /* cool, not V2 cream */
ink          #16181D
muted        #5C616A
line         #E2E4E8
surface      #FFFFFF
accent       #C45C32    /* terracotta — not lavender */
accent-soft  #F4E4DC
accent-ink   #8A3518    /* buttons, links */
```

Fonts: Manrope 400 / 500 / 600 via `next/font`. Headings use the same family at 600, not a second serif.

---

## Hero — the mockup (this is the whole point of V3)

**Story, in one breath:** a business owner asks an AI “best [category] in [city]” and their name is not in the answer.

**Layout (desktop):** left = short headline + one line + “See if you are named” (scrolls to `#check`). Right = the device/chat mockup. **Layout (390px):** mockup first (it *is* the hook), type under it, no form.

**Scene (CSS/HTML only, no screenshot, no new dependency):**

1. Generic “Ask” panel. Caption: “Illustrative example, not a real result.”
2. A query pill types out: `Best dental clinics in Pune?` (copy from `content/v3.ts`, same example names as V2 so we do not invent a new fake set).
3. Three numbered competitors fade in.
4. A dashed empty row: “Your business — not on the list.”
5. Respect `prefers-reduced-motion`: show the finished frame, no typing.

Do not clone ChatGPT’s UI. Neutral header, our tokens, engine name as text.

After the hero, the page is a normal landing: trust strip → what the check shows → how we work → SEO vs AEO → sample report → blog → FAQ → form → footer.

---

## Architecture

Nested App Router, **not** `basePath` (that would move the whole app).

```
app/v3/layout.tsx          own fonts + v3.css + noindex
app/v3/page.tsx            landing only
app/v3.css                 tokens + type styles, scoped under [data-v3]
config/v3.ts               colours, fonts, feature flags
content/v3.ts              V3-only hero + section copy
components/v3/             hero-mockup, header, section, footer
```

Reuse as-is: `components/check/check-form.tsx` and the check API. Skin the form with `data-v3` CSS, do not fork the submit logic.

Header / footer for V3 are new components so V2 chrome does not leak lavender tokens.

Links inside V3 stay on `/v3` for the landing. Blog, privacy, terms, and `/check/[id]` stay the shared routes (those pages can keep V2 chrome for this variant; do not restyle the whole product in V3).

---

## Phases

### Phase 0 — Direction lock (no UI yet)

- Add `config/v3.ts` and `content/v3.ts` (hero copy + the existing illustrative names).
- Write `app/v3.css` with tokens only.
- Add `app/v3/layout.tsx` that sets `robots: { index: false }`, loads Manrope, scopes `[data-v3]`.
- Stub `app/v3/page.tsx` with “V3” so `/v3` 200s.

**Ponytail:** reuse content shape from `content/home.ts`; new token file because V2 tokens must not change.

**Done when:** `http://localhost:3000/v3` renders a blank paper page in Manrope; `/` is still V2; no hex outside `config/v3.ts`.

### Phase 1 — Hero mockup

- `components/v3/hero-search.tsx`: the Ask panel + typing sequence.
- `components/v3/hero.tsx`: headline, subhead, scroll CTA, mockup.
- Motion only with CSS or one `requestAnimationFrame` loop; no animation library.

**Ponytail:** platform (CSS animation). Skipped: Framer, Lottie, video.

**Done when:** at 390px and 1440px the visitor sees the query, three names, and the empty “your business” row without scrolling on desktop. Reduced-motion users see the final frame. Caption says it is an illustration.

### Phase 2 — Rest of the landing, V3 CSS only

Sections, in order: header, trust strip, what the check shows, how we work, SEO vs AEO, sample report, blog preview (reuse `getPosts`), FAQ, final CTA with `CheckForm` and `id="check"`, footer.

Do not port `components/home/*` and restyle. New `components/v3/*` so V2 class names (`tone-`, `rounded-card`, lavender blob) cannot leak.

**Ponytail:** reuse CheckForm, FAQ content, blog loader. New layout components only.

**Done when:** full scroll on `/v3` matches the section list above; no V2 cream/lavender on the page; header CTA lands on `#check`.

### Phase 3 — Check handoff

- Submitting the V3 form still `POST /api/check` and `router.push(/check/[id])`.
- Progress/result screens stay V2 for this variant (same product, one operate surface).
- If the founder later wants V3 chrome on the check too, that is a separate phase.

**Done when:** one real check from `/v3` reaches the existing progress page without a new API.

### Phase 4 — Verify and show

- 390px and 1440px screenshots of `/v3`.
- Keyboard: skip link, `#check`, FAQ accordion.
- Contrast: ink on paper, terracotta button on paper (check accent-ink).
- Lighthouse mobile on `/v3` (hero animation must not wreck LCP: type is CSS, no hero photo).

**Done when:** manager can open `/` (V2), `/v3` (this), and production V1.

---

## Explicitly out of scope

- Restyling V2 or production V1.
- A third check backend.
- Figma file (unless asked; `figma-designer` skill is available).
- Fake testimonials, counts, or client logos.
- Official AI-product UI clones.
- Putting V3 at site root or using `basePath`.

---

## How an agent executes a phase

1. Read this file, the PRD, and the files the phase touches.
2. Print: `Ponytail: <reuse | platform | installed dep | new code> — <what>; skipped: <what>`
3. Build only that phase’s **Done when**.
4. Verify at 390px and 1440px before the next phase.

Impeccable owns the look of `/v3` inside the tokens above. UI UX Pro Max is not asked to pick a second palette. Copy-rules still win over the landing-page-design skill’s marketing clichés. The mockup-first hero wins over that skill’s “form above the fold” default.
