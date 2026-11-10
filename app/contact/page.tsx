import type { Metadata } from "next";
import { ContactForm, DemoForm } from "@/components/Forms";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CoHab OS, send a business enquiry, or schedule a demonstration.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to us, or book a demonstration."
        lede="Business enquiries, property questions, resident support, and demos all start here. Messages open in your email app so they reach the team directly."
      >
        <a href="#enquiry" className="btn btn-gold">
          Send a message
        </a>
        <a href="#demo" className="btn btn-ghost-light">
          Schedule a demo
        </a>
      </PageHero>
      <Section id="enquiry">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl text-navy">Contact the team</h2>
            <p className="mt-4 leading-relaxed text-muted">
              For a general question, a property, the press, or a resident who needs a hand. Enterprise and partnership
              notes go to sales.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd className="mt-1">
                  <a className="font-semibold text-navy underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Business enquiries</dt>
                <dd className="mt-1">
                  <a className="font-semibold text-navy underline underline-offset-4" href={`mailto:${site.salesEmail}`}>
                    {site.salesEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Telephone</dt>
                <dd className="mt-1 font-semibold text-navy">
                  <a href={site.phone.href}>{site.phone.display}</a>
                  <span className="mt-1 block font-normal text-muted">
                    {site.phone.region}. From Ghana or Nigeria, email us and we will schedule the call.
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Social</dt>
                <dd className="mt-2 flex gap-4 font-semibold text-navy">
                  {site.socials.map((social) => (
                    <a key={social.label} href={social.href} className="underline underline-offset-4" rel="noreferrer">
                      {social.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-ivory p-6 sm:p-8 lg:col-span-7">
            <ContactForm initialIntent={intent} />
          </div>
        </div>
      </Section>
      <section id="demo" className="scroll-mt-24 bg-navy text-paper">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Demonstration</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Schedule a walkthrough of the platform.</h2>
            <p className="mt-4 leading-relaxed text-mist">
              Tell us your role, the size of the portfolio, and the markets you operate in. We will reply with a time.
              A hosted calendar will replace this step when it is connected.
            </p>
          </div>
          <div className="rounded-2xl bg-paper p-6 text-ink sm:p-8 lg:col-span-8">
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
