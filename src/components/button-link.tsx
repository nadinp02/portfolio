import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";

const variants = {
  primary: "bg-ink text-paper hover:bg-rose-deep",
  secondary: "border border-ink/25 bg-surface text-ink hover:border-ink",
  // Para usar sobre el fondo grafito.
  inverse: "bg-paper text-ink hover:bg-rose",
};

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
};

function isExternal(href: string) {
  return href.startsWith("http");
}

/** Texto para lectores de pantalla en enlaces que abren otra pestaña. */
export function NewTabHint() {
  return <span className="sr-only"> (se abre en una pestaña nueva)</span>;
}

export function externalLinkProps(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export function ButtonLink({ href, variant = "primary", children, className = "" }: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] font-medium transition-colors ${variants[variant]} ${className}`;

  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...externalLinkProps(href)}>
        {children}
        <ArrowUpRight />
        <NewTabHint />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
