import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

type Block = { heading: string; paragraphs: string[]; list?: string[] };

const documents: Record<string, { title: string; description: string; intro: string; blocks: Block[] }> = {
  privacy: {
    title: "Privacy Policy",
    description: "How the CoHab OS website handles personal information.",
    intro:
      "This policy describes the CoHab OS marketing website. Accounts, payments, and leases inside the product will have their own notice when that platform is connected.",
    blocks: [
      {
        heading: "Who we are",
        paragraphs: [
          `CoHab OS (“we”, “us”) publishes this website at ${site.url}. For privacy questions about the site, email ${site.email}.`,
          "We do not claim a street address on this page. Until a registered office is published, email is the contact for privacy requests.",
        ],
      },
      {
        heading: "What this policy covers",
        paragraphs: [
          "It covers information you give us through contact forms, demo requests, tour requests, and account-access requests, plus the limited technical data a web server receives when you load a page.",
          "It does not cover a future resident or manager workspace. When authentication is connected, the product will say what it collects before you use it.",
        ],
      },
      {
        heading: "Information you give us",
        paragraphs: ["Depending on the form, that can include:"],
        list: [
          "Your name, email address, and telephone number",
          "Company, role, portfolio size, and markets, if you book a demo or request a manager account",
          "The city and housing status you choose on a resident request",
          "The content of your message, including a property you ask to tour",
        ],
      },
      {
        heading: "What we do not collect here",
        paragraphs: [
          "Login passwords are typed into the sign-in form only so the page can behave like the future entrance. They are cleared in your browser and are not emailed or stored by this website.",
          "We do not ask you to pay rent, send identity documents, or complete a lease on this site.",
        ],
      },
      {
        heading: "Information collected automatically",
        paragraphs: [
          "Like most websites, the host may keep server logs: IP address, browser type, the page requested, and the time. We use that to keep the site reliable and to investigate abuse.",
          "We store one preference in local storage so the cookie notice can stay dismissed. That is not an advertising cookie. See the Cookie Policy.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: ["We use what you send so we can:"],
        list: [
          "Reply to enquiries, demo requests, and tour requests",
          "Prepare an account on the platform when registration is connected",
          "Understand which markets and portfolio sizes people ask about",
          "Protect the site and investigate misuse",
        ],
      },
      {
        heading: "Legal bases",
        paragraphs: [
          "Where a law requires a legal basis, we rely on steps toward a contract (a demo, a tour, an account), legitimate interests in answering you and securing the site, and consent where a non-essential cookie is involved. No non-essential cookies are set today.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "Messages are delivered through your own email app to our inbox. We do not sell personal information. We may share it with a hosting or email provider who processes it for us, or if the law requires it.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "CoHab OS is aimed at the United States, Ghana, and Nigeria. A message you send may be read by people working in more than one of those countries. If a required transfer mechanism applies, we will use it before we rely on a vendor in another country.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "We keep enquiry emails for as long as we need them to respond, to honour a booking, or to meet a legal duty, and then we delete or de-identify them. Server logs are kept for a short operational period.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on where you live, you may have the right to access, correct, delete, or restrict personal information, to object to certain uses, to withdraw consent, and to complain to a regulator.",
          "Residents in Ghana can look to the Data Protection Commission under the Data Protection Act, 2012 (Act 843). People in Nigeria can look to the Nigeria Data Protection Commission. People in applicable US states may have access, deletion, and correction rights under state privacy law. Email us and we will route the request. We will not discriminate against you for making one.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "This website is not directed at anyone under 18. We do not knowingly collect personal information from children. If you believe we have, email us and we will delete it.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          `We will post changes on this page and update the date. The current version is dated ${site.updated}.`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    description: "The terms that govern use of the CoHab OS website.",
    intro:
      "These terms cover the public website: the pages, the listings, and the forms. They are not the lease for a room, and they are not the contract for the CoHab OS product.",
    blocks: [
      {
        heading: "Acceptance",
        paragraphs: [
          "By using the website you agree to these terms. If you do not agree, do not use the site. If you are using it for a company, you confirm that you can bind that company.",
        ],
      },
      {
        heading: "The website is informational",
        paragraphs: [
          "Pages describe CoHab OS and show homes. They are an invitation to enquire. A listing is not an offer of a tenancy, and a plan price is not a completed subscription until we agree it with you.",
          "Rent figures are listing guides. The amount, the deposit, and what utilities include are confirmed in a lease inside the platform, not by this page alone.",
        ],
      },
      {
        heading: "The product is separate",
        paragraphs: [
          "Dashboards, payments, maintenance tools, chore tools, and ratings run in the CoHab OS platform. When that platform is opened to you, its own terms will apply. Login and registration on this website do not, by themselves, create an account or a session.",
        ],
      },
      {
        heading: "Accounts and acceptable use",
        paragraphs: ["You agree not to:"],
        list: [
          "Misrepresent who you are, including on a tour or demo request",
          "Scrape, probe, or attempt to break the site",
          "Upload unlawful, infringing, or harmful material through a form",
          "Use the listings to harass a resident, a manager, or a neighbor",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The CoHab OS name, the writing on this site, and the way the pages are arranged belong to us or our licensors. Property photographs are used to present listings and may be representative. You may not copy the site for your own product.",
          "You keep what you type into a form. You give us permission to use it to answer you and to operate the business you contacted.",
        ],
      },
      {
        heading: "No professional advice",
        paragraphs: [
          "Nothing on the site is legal, tax, immigration, or housing-advice tailored to you. Leases and local housing rules differ between cities. Get advice from someone qualified in the place where the home is.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "The website is provided as available. We work to keep listings and descriptions accurate and we correct errors when we know about them. We do not warrant that a room will still be open when you write, or that the site will be uninterrupted.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "To the extent the law allows, we are not liable for indirect or consequential loss arising from use of the website. Nothing in these terms limits liability that cannot legally be limited, including for fraud or for death or personal injury caused by negligence.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These website terms are governed by the laws of the State of Delaware, without regard to conflict-of-law rules, except where a mandatory consumer protection in your country says otherwise. Courts in Delaware have jurisdiction, subject to that same exception.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about these terms: ${site.email}. Last updated ${site.updated}.`],
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "How the CoHab OS website uses cookies and similar storage.",
    intro:
      "We keep this short because the site is still spare. If that changes, this policy changes first, and we will ask before non-essential cookies are set.",
    blocks: [
      {
        heading: "What a cookie is",
        paragraphs: [
          "A cookie is a small file a site can store on your device. Local storage is a related place in the browser where a site can keep a short note. Both can remember something between visits.",
        ],
      },
      {
        heading: "What we use today",
        paragraphs: [
          "We do not set advertising cookies, and we do not run a third-party analytics script.",
          "The cookie notice stores a single flag in local storage, under the key cohab-cookie-notice, so the notice does not return every time you open a page. That is a preference, not a tracker. The site can function if you refuse it; you will simply see the notice again.",
        ],
      },
      {
        heading: "Essential hosting",
        paragraphs: [
          "Our host may use a strictly necessary cookie to deliver the page or to balance load. Those cookies are not used to build a marketing profile.",
        ],
      },
      {
        heading: "What we may add later",
        paragraphs: [
          "If we add analytics or embedded media that set cookies, we will list them here and ask for consent before they run, except where a cookie is strictly necessary.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You can clear local storage and cookies in your browser settings. Blocking all storage may bring the notice back. It should not stop you reading the site or emailing us.",
          `Questions: ${site.email}. Last updated ${site.updated}.`,
        ],
      },
    ],
  },
  "data-protection": {
    title: "Data Protection Policy",
    description: "How CoHab OS approaches data protection across its markets.",
    intro:
      "This statement sits beside the Privacy Policy. The Privacy Policy tells you what the website collects. This statement tells you the standard we hold ourselves to, including in Ghana, Nigeria, and the United States.",
    blocks: [
      {
        heading: "Our role",
        paragraphs: [
          "For enquiries sent from this website, CoHab OS is the controller of that information: we decide why it is used and how. Email and hosting providers who carry it for us act as processors.",
          "When the product launches, a customer that operates homes may be an independent controller of resident information, and CoHab OS may be their processor. That relationship will be written into a data-processing addendum, not assumed from this page.",
        ],
      },
      {
        heading: "Principles",
        paragraphs: ["We aim to:"],
        list: [
          "Collect less than we could, and only what a form or a legal duty needs",
          "Say what we are doing in language a resident can read",
          "Keep passwords off this website entirely",
          "Limit who on the team can open an enquiry",
          "Delete what we no longer need",
          "Treat a privacy request as ordinary work, not as a nuisance",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "The site is served over HTTPS. Access to the inboxes that receive enquiries is limited to people who answer them. We do not store card numbers or identity documents on the marketing site, because we do not ask for them here.",
          "No method of transmission is perfectly secure. If we learn of a breach that creates a real risk, we will tell the people affected and the authorities the law requires us to tell, within the time those laws set.",
        ],
      },
      {
        heading: "Ghana",
        paragraphs: [
          "The Data Protection Act, 2012 (Act 843) is the reference point for personal data about people in Ghana. Rights of access and correction, and the duty to process fairly, are part of how we handle Accra enquiries and, later, resident records for homes there.",
        ],
      },
      {
        heading: "Nigeria",
        paragraphs: [
          "The Nigeria Data Protection Act, 2023, and the Nigeria Data Protection Regulation where it still applies, are the reference for people in Nigeria. We treat consent, legitimate use, security, and cross-border transfer as live obligations, not as a footer.",
        ],
      },
      {
        heading: "United States",
        paragraphs: [
          "US privacy law is mostly state law. Where a state gives a resident the right to access, delete, or correct personal information, or to appeal a refusal, we will honour that right. We do not sell personal information as that idea is commonly defined.",
        ],
      },
      {
        heading: "How to make a request",
        paragraphs: [
          `Email ${site.email} with the subject “Data request”, the country you are writing from, and enough detail for us to find the information. We may need to confirm that you are the person the information is about. We answer within the period the applicable law requires, and we will say if we need more time where the law allows it.`,
          `Last updated ${site.updated}.`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    description: "The accessibility commitment for the CoHab OS website.",
    intro:
      "CoHab OS should be usable by landlords, managers, and residents with a wide range of abilities. This statement covers the marketing website. The product will publish its own statement when it is open.",
    blocks: [
      {
        heading: "Standard",
        paragraphs: [
          "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. That is a goal we test against, not a claim that every page is already perfect.",
        ],
      },
      {
        heading: "What we have built in",
        paragraphs: ["The site includes:"],
        list: [
          "Semantic headings and landmarks, including a skip link",
          "Visible keyboard focus",
          "Labels on form fields and text that is not carried by colour alone",
          "Alt text on property and editorial images",
          "Support for reduced motion, so scroll animation steps aside when you ask the system for that",
          "Text that can be resized by the browser",
        ],
      },
      {
        heading: "Known limits",
        paragraphs: [
          "Some listing photographs are stock images used to present a home. A photo cannot carry every detail of a floor plan. The written description, amenities, and status are the accessible record, and a tour can fill the rest.",
          "Opening your email app from a form depends on the device. If that fails, the same request can be sent by writing to us directly. The address is on the contact page.",
          "Third-party maps open in Google Maps, which has its own accessibility behaviour.",
        ],
      },
      {
        heading: "Tell us what blocked you",
        paragraphs: [
          `If a page, a form, or a listing gets in your way, email ${site.email} with the page address and what you were trying to do. We treat that as a defect. We would rather hear about a barrier than defend one.`,
          "We respond to accessibility mail in the same queue as other support, and we aim to acknowledge it within five business days.",
          `Last updated ${site.updated}.`,
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const document = documents[slug];
  if (!document) return { title: "Legal" };
  return { title: document.title, description: document.description };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const document = documents[slug];
  if (!document) notFound();

  return (
    <>
      <PageHero eyebrow="Legal" title={document.title} lede={document.intro} />
      <article className="legal mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <p className="text-sm text-muted">Last updated {site.updated}.</p>
        {document.blocks.map((block) => (
          <section key={block.heading}>
            <h2>{block.heading}</h2>
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {block.list ? (
              <ul>
                {block.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <p>
          Related: <Link href="/legal/privacy">Privacy</Link>, <Link href="/legal/terms">Terms</Link>,{" "}
          <Link href="/legal/cookies">Cookies</Link>, <Link href="/legal/data-protection">Data protection</Link>,{" "}
          <Link href="/legal/accessibility">Accessibility</Link>.
        </p>
      </article>
    </>
  );
}
