"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const key = "cohab-cookie-notice";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(key) !== "dismissed");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-paper p-4 shadow-[0_16px_40px_rgba(8,20,34,0.16)] sm:inset-x-6 sm:flex sm:items-center sm:gap-6 sm:p-5">
      <p className="text-sm leading-relaxed text-muted">
        This website stores a preference on your device so this notice stays dismissed. It does not set advertising
        cookies. Read the <Link href="/legal/cookies" className="text-navy underline underline-offset-2">Cookie Policy</Link>.
      </p>
      <button
        type="button"
        className="btn btn-navy mt-3 shrink-0 sm:mt-0"
        onClick={() => {
          window.localStorage.setItem(key, "dismissed");
          setVisible(false);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
