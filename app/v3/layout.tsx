import type { Metadata } from "next";
import { v3 } from "@/config/v3";
import "../v3.css";

export const metadata: Metadata = {
  title: "AI Visibility Check",
  robots: { index: false, follow: false },
};

const colorVars = `[data-v3]{${Object.entries(v3.colors)
  .map(([key, value]) => `--v3-${key}:${value}`)
  .join(";")}}`;

export default function V3Layout({ children }: LayoutProps<"/v3">) {
  return (
    <div data-v3 className={`${v3.fonts.display.variable} ${v3.fonts.sans.variable} ${v3.fonts.sans.className}`}>
      <style dangerouslySetInnerHTML={{ __html: colorVars }} />
      {children}
    </div>
  );
}
