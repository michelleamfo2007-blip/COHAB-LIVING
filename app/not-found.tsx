import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">404</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">This page is not on the site.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The link may be old, or the home may have left the collection. You can go back to the homepage or look through
        the properties.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-navy">
          Homepage
        </Link>
        <Link href="/properties" className="btn btn-ghost">
          Properties
        </Link>
      </div>
    </section>
  );
}
