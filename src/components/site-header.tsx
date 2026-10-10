"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { contactHref, navLinks, siteConfig } from "@/lib/site";

const MENU_ID = "menu-principal";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-xl bg-ink font-display text-sm font-semibold tracking-tight text-paper"
          >
            {siteConfig.initials}
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[1.0625rem] font-semibold tracking-tight">
              {siteConfig.name}
            </span>
            <span className="label block whitespace-nowrap text-[0.6875rem] text-ink-soft">{siteConfig.role}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface p-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-full px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-rose"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={contactHref}>Contacto</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={MENU_ID}
          className="flex size-11 items-center justify-center rounded-full border border-ink/25 bg-surface lg:hidden"
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>

      <nav
        id={MENU_ID}
        aria-label="Principal, versión móvil"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {[...navLinks, { href: contactHref, label: "Contacto" }].map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center font-display text-xl font-semibold tracking-tight"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
