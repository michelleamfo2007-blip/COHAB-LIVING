import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AuthAside, RegisterForm } from "@/components/AuthForms";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Create a CoHab OS account as a property manager or a resident.",
};

export default function GetStartedPage() {
  return (
    <section className="grid lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
      <AuthAside
        title="Create your CoHab OS account."
        lede="Property manager registration and resident registration start here. The account itself opens on the platform, where you will set a password."
      />
      <div className="bg-paper px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-md">
          <h2 className="font-serif text-4xl text-navy lg:sr-only">Get started</h2>
          <Suspense fallback={<p className="text-muted">Loading the form…</p>}>
            <RegisterForm />
          </Suspense>
          <p className="mt-6 text-sm text-muted">
            Already registered?{" "}
            <Link href="/login" className="font-semibold text-navy underline underline-offset-4">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
