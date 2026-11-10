"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui";
import { solutionLinks } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/property-managers", label: "For Property Managers", short: "Managers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us", short: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const solutionsActive = pathname.startsWith("/solutions") || pathname.startsWith("/residents");

  useEffect(() => {
    setMenu(false);
    setSolutions(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu(false);
        setSolutions(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-2 px-4 sm:h-[4.5rem] sm:gap-3 sm:px-8">
        <Logo />
        <nav className="ml-4 hidden items-center gap-5 text-sm text-navy lg:flex" aria-label="Primary">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={navClass(pathname === "/")}>
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setSolutions(true)}
            onMouseLeave={() => setSolutions(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setSolutions(false);
            }}
          >
            <button
              type="button"
              className={`${navClass(solutionsActive)} inline-flex items-center gap-1`}
              aria-expanded={solutions}
              aria-controls="solutions-menu"
              onClick={() => setSolutions(true)}
              onFocus={() => setSolutions(true)}
            >
              Solutions
              <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 transition ${solutions ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            {solutions ? (
              <div
                id="solutions-menu"
                className="absolute left-0 top-full z-20 w-[22rem] pt-3"
              >
                <div className="rounded-2xl border border-navy/10 bg-paper p-2 shadow-[0_20px_50px_rgba(8,20,34,0.12)]">
                  <Link href="/solutions" className="block rounded-xl px-3 py-3 hover:bg-ivory" onClick={() => setSolutions(false)}>
                    <span className="block text-sm font-semibold text-navy">All capabilities</span>
                    <span className="mt-0.5 block text-sm text-muted">The full CoHab OS platform, in one view.</span>
                  </Link>
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 hover:bg-ivory"
                      onClick={() => setSolutions(false)}
                    >
                      <span className="block text-sm font-semibold text-navy">{item.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{item.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {links.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={navClass(isActive(pathname, item.href))}
            >
              {item.short ? (
                <>
                  <span className="xl:hidden">{item.short}</span>
                  <span className="hidden xl:inline">{item.label}</span>
                </>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link href="/login" className="hidden px-2 text-sm font-semibold text-navy sm:inline">
            Login
          </Link>
          <Link href="/get-started" className="btn btn-gold !px-3 text-sm sm:!px-4 sm:text-[0.9375rem]">
            Get Started
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy lg:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            onClick={() => setMenu((open) => !open)}
          >
            <span className="sr-only">{menu ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {menu ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menu ? (
        <nav id="mobile-nav" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy/10 bg-paper px-4 py-4 sm:max-h-[calc(100dvh-4.5rem)] sm:px-5 lg:hidden" aria-label="Mobile">
          <div className="grid gap-1">
            <MobileLink href="/">Home</MobileLink>
            <p className="px-2 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-sage">Solutions</p>
            <MobileLink href="/solutions">All capabilities</MobileLink>
            {solutionLinks.map((item) => (
              <MobileLink key={item.href} href={item.href}>
                {item.title}
              </MobileLink>
            ))}
            <MobileLink href="/properties">Properties</MobileLink>
            <MobileLink href="/property-managers">For Property Managers</MobileLink>
            <MobileLink href="/pricing">Pricing</MobileLink>
            <MobileLink href="/about">About Us</MobileLink>
            <MobileLink href="/contact">Contact</MobileLink>
            <MobileLink href="/login">Login</MobileLink>
            <MobileLink href="/get-started">Get Started</MobileLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function navClass(active: boolean) {
  return `whitespace-nowrap border-b py-1 ${active ? "border-gold text-navy" : "border-transparent text-navy/80 hover:text-navy"}`;
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-xl px-2 py-3 text-base font-medium text-navy hover:bg-ivory">
      {children}
    </Link>
  );
}
