import Link from "next/link";
import { Logo } from "@/components/ui";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/properties", label: "Properties" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About Us" },
    ],
  },
  {
    title: "Who it is for",
    links: [
      { href: "/property-managers", label: "Property managers" },
      { href: "/residents", label: "Residents" },
      { href: "/get-started", label: "Get started" },
      { href: "/login", label: "Login" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms and Conditions" },
      { href: "/legal/cookies", label: "Cookie Policy" },
      { href: "/legal/data-protection", label: "Data Protection Policy" },
      { href: "/legal/accessibility", label: "Accessibility Statement" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-mist">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
            The operating system for modern co-living. This website is where you learn the platform and look at homes.
            The product runs the home once you are in it.
          </p>
          <p className="mt-5 text-sm">
            <a className="underline decoration-white/30 underline-offset-4 hover:decoration-gold-soft" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <span className="mx-2 text-white/30">/</span>
            <a className="hover:text-paper" href={site.phone.href}>
              {site.phone.display}
            </a>
          </p>
          <ul className="mt-5 flex gap-4 text-sm">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="underline decoration-white/30 underline-offset-4 hover:text-paper" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">{column.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">Markets</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>United States</li>
            <li>Ghana</li>
            <li>Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-mist/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} CoHab OS. All rights reserved.</p>
          <p>United States, Ghana, and Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
