import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { KIRVANO_LINK } from "./data";

export function CtaButton({ children, secondary = false, className }: { children: ReactNode; secondary?: boolean; className?: string }) {
  return (
    <a href={KIRVANO_LINK} target="_blank" rel="noopener noreferrer"
      className={cn("inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold transition hover:scale-105",
        secondary ? "border border-white/35 bg-white/10 text-foreground hover:bg-white/25 hover:text-foreground transition-all" : "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90",
        className)}>
      {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}
