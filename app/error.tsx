"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-5 py-24 sm:px-8">
      <h1 className="font-serif text-5xl text-navy">This page did not load.</h1>
      <p className="mt-4 text-lg text-muted">You can try again, or return to the homepage if it keeps failing.</p>
      <button type="button" onClick={reset} className="btn btn-navy mt-8 self-start">
        Try again
      </button>
    </section>
  );
}
