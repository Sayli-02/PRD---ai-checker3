import { Fraunces, Manrope } from "next/font/google";

// Night desk + linen. Fraunces for display (not V2 Newsreader). Manrope for UI.
const display = Fraunces({
  variable: "--font-v3-display",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-v3",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const v3 = {
  fonts: { display, sans },
  colors: {
    paper: "#EDE6DC",
    ink: "#1A1512",
    muted: "#6B5E55",
    line: "#D9D0C4",
    surface: "#F7F3EC",
    accent: "#C45C32",
    "accent-soft": "#F0D8CC",
    "accent-ink": "#8A3518",
    night: "#1A1512",
    "on-night": "#EDE6DC",
    "muted-night": "#B7A89A",
    "line-night": "rgb(237 230 220 / 0.12)",
    bezel: "#2A221C",
  },
} as const;
