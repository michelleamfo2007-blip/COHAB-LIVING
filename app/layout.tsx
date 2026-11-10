import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { CookieNotice } from "@/components/CookieNotice";
import { HashScroll } from "@/components/HashScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CoHab OS — The operating system for modern co-living",
    template: "%s · CoHab OS",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "CoHab OS — The operating system for modern co-living",
    description: site.description,
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#081422",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieNotice />
        <HashScroll />
      </body>
    </html>
  );
}
