import { Link } from "@tanstack/react-router";
import { VolksbankMark } from "./Nav";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 text-sm">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <VolksbankMark className="h-8 w-8 text-sm" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">Volksbank Investment-Check</div>
                <div className="text-[11px] uppercase tracking-wider opacity-70">Informationsseite</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-secondary-foreground/75">
              Diese Website ist eine unabhängige Informationsseite zum Volksbank
              Investment-Check und keine offizielle Seite der Volksbank. Verbindliche
              Auskünfte, Beratung und Depoteröffnungen erfolgen ausschließlich in
              der jeweiligen Volksbank-Filiale bzw. über volksbank.at.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/70">Rechtliches</h4>
            <ul className="mt-3 space-y-2 text-secondary-foreground/85">
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
              <li><Link to="/barrierefreiheit" className="hover:text-white">Barrierefreiheit</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-secondary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} Volksbank Investment-Check · Informationsseite</p>
          <p>Alle Angaben ohne Gewähr</p>
        </div>
      </div>
    </footer>
  );
}
