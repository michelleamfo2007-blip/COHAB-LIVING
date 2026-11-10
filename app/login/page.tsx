import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AuthAside, LoginForm } from "@/components/AuthForms";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to CoHab OS as a property manager or a resident.",
};

export default function LoginPage() {
  return (
    <section className="grid lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
      <AuthAside
        title="Sign in to the platform."
        lede="Property managers and residents use the same entrance. Your role decides which workspace opens, once authentication is connected."
      />
      <div className="bg-paper px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-md">
          <h2 className="font-serif text-4xl text-navy lg:sr-only">Login</h2>
          <Suspense fallback={<p className="text-muted">Loading the form…</p>}>
            <LoginForm />
          </Suspense>
          <p className="mt-6 text-sm text-muted">
            New to CoHab OS?{" "}
            <Link href="/get-started" className="font-semibold text-navy underline underline-offset-4">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
