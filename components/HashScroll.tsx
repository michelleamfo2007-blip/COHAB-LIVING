"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 40);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
