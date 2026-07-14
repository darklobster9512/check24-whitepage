import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";

export function LegalLayout({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="border-b border-border bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Rechtliches</div>
          <h1 className="mt-2 text-3xl text-foreground md:text-4xl">{title}</h1>
          {updated && <p className="mt-2 text-sm text-muted-foreground">Stand: {updated}</p>}
          <div className="prose-legal mt-8 space-y-6 text-[15px] leading-relaxed text-foreground/85 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}