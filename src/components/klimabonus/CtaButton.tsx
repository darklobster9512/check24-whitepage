import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

// CTA leitet zur Impressum-Seite weiter; das Lead-Event wird dort beim Mount abgefeuert.
export function CtaButton({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "accent";
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const styles =
    variant === "accent"
      ? "bg-accent text-accent-foreground hover:bg-accent/90"
      : "bg-primary text-primary-foreground hover:bg-primary/90";
  return (
    <Link to="/impressum" className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
