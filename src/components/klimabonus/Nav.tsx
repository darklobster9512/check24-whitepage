import { Link, useRouterState } from "@tanstack/react-router";

export function VolksbankMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-[3px] bg-primary text-primary-foreground font-bold ${className}`}>
      C24
    </span>
  );
}

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const links = [
    { hash: "ueberblick", label: "Überblick" },
    { hash: "anspruch", label: "Für wen" },
    { hash: "ablauf", label: "Ablauf" },
    { hash: "fristen", label: "Konditionen" },
    { hash: "faq", label: "FAQ" },
  ];
  const onSectionClick = (hash: string) => (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${hash}`);
    }
  };
  return (
    <header id="top">
      {/* Info-Topbar */}
      <div className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-1.5 text-xs">
          <span className="opacity-90">Information zur CHECK24 200 €-Bonus-Aktion · Österreich</span>
          <span className="ml-auto hidden opacity-70 sm:inline">Deutsch (AT)</span>
        </div>
      </div>

      {/* Hauptheader */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <VolksbankMark className="h-8 w-10 text-xs" />
            <div className="leading-tight">
              <div className="text-base font-semibold text-foreground">CHECK24</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Bonus-Info</div>
            </div>
          </Link>
          <nav className="hidden gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                onClick={onSectionClick(l.hash)}
                className="text-sm text-foreground/75 transition hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
