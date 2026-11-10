import {
  AnalyticsDesktop,
  IntelligenceDesktop,
  LandlordScoreDesktop,
  LivenessPhone,
  LivingIqPhone,
  MaintenanceDesktop,
  ManagementDashboard,
  RentPhone,
  ResidentPhone,
  TourPhone,
  VaultPhone,
  VendorDesktop,
  VerifiedPhone,
} from "@/components/mockups/screens";

const modules = [
  ["Onboarding", "Application, ID upload, liveness check, lease, and house rules. Consent comes before any biometric."],
  ["Property management", "Homes, units, rooms, occupancy, and which tools each property uses."],
  ["Rent and money", "Balances, reminders, history, and a Rent-Score. Payment processors are planned, not connected."],
  ["Maintenance", "A request with a photo, a vendor, a status, and a completion step."],
  ["Property intelligence", "Natural-language questions and recommendations. Coming soon."],
  ["Living IQ", "Weekly house feedback, chores, swaps, and notices when someone is away."],
  ["Landlord reliability", "Residents rate response, resolution, and communication. The score is an aggregate."],
  ["Tours", "In person, virtual, or self-guided. Smart-lock entry is a later integration."],
  ["Documents", "Leases, signatures, and a vault the resident can reopen."],
  ["Resident app", "Home, rent, repairs, community, chores, documents, and emergency contacts."],
  ["Manager desk", "Portfolio, people, money, maintenance, vendors, tours, and settings."],
  ["Vendor desk", "Registration, jobs, tracking, earnings, and ratings for trades."],
];

export function ProductShowcase() {
  return (
    <section id="inside" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Inside CoHab OS</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-balance text-navy sm:text-5xl">
          Intelligent living. Simplified management.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          These are proposed product screens. They show how the platform is designed to look and what each module is for.
          They do not sign a lease, take a payment, dispatch a vendor, or run a biometric check.
        </p>

        <figure className="relative mt-12 xl:pb-6">
          <div className="xl:mr-48" aria-hidden="true">
            <ManagementDashboard />
          </div>
          <figcaption className="mt-3 max-w-xl text-sm text-muted">
            Property management dashboard. The counts are sample figures for a portfolio across Accra, Lagos, and the United States.
          </figcaption>
          <div className="mt-8 flex justify-center xl:absolute xl:right-0 xl:top-8 xl:mt-0" aria-hidden="true">
            <div className="xl:origin-top-right xl:scale-[0.78]">
              <ResidentPhone />
            </div>
          </div>
        </figure>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 xl:mt-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Identity verification</p>
            <h3 className="mt-2 font-serif text-3xl text-navy">A live person, matched to their document.</h3>
            <p className="mt-4 leading-relaxed text-muted">
              The designed check is AI-powered identity verification and facial liveness detection. It is meant to confirm
              the applicant is present and matches the government ID they submit, so a printed photo or a recording cannot
              stand in for them. Biometric information would be collected only with explicit consent, stored under the
              product’s security rules, and kept out of this marketing site. The green screen is a sample of success, not
              a result.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5" aria-hidden="true">
            <LivenessPhone />
            <VerifiedPhone />
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 hidden justify-center lg:order-1 lg:flex" aria-hidden="true">
            <RentPhone />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Resident and rent</p>
            <h3 className="mt-2 font-serif text-3xl text-navy">The home, the balance, and the score.</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Residents are designed to open one home: rent, repairs, community, chores, documents, announcements, and
              emergency contacts. The Rent-Score starts at 100. Rent is due on the 1st, the grace period ends on the 3rd,
              then the score loses 3 points a day until payment. Paying on the 1st adds 5. USD, GHS, and NGN are the
              intended currencies. Stripe, ACH, Paystack, and Mono are planned connections, not live ones.
            </p>
            <div className="mt-6 flex justify-center lg:hidden" aria-hidden="true">
              <RentPhone />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <figure>
            <div aria-hidden="true">
              <MaintenanceDesktop />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Maintenance dispatch. A plumbing request with an assigned technician and an arrival time. Sample job.
            </figcaption>
          </figure>
          <figure>
            <div aria-hidden="true">
              <IntelligenceDesktop />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Property intelligence is coming soon. The question is an example of what a manager could ask once the assistant can read the ledger.
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          <Screen title="Living IQ and chores" caption="Weekly house feedback and the rota, including a swap.">
            <LivingIqPhone />
          </Screen>
          <Screen title="Tour booking" caption="In-person, virtual, and self-guided times. Smart lock is not connected.">
            <TourPhone />
          </Screen>
          <Screen title="Document vault" caption="Lease, identification, and house rules, as the vault is designed.">
            <VaultPhone />
          </Screen>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure>
            <div aria-hidden="true">
              <LandlordScoreDesktop />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Landlord reliability. A sample 4.8 from maintenance, communication, and resolution. Not a published rating.
            </figcaption>
          </figure>
          <figure>
            <div aria-hidden="true">
              <VendorDesktop />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Vendor desk for a trade on the property’s own list, with a sample job and earnings.
            </figcaption>
          </figure>
        </div>

        <figure className="mt-8">
          <div aria-hidden="true">
            <AnalyticsDesktop />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Portfolio analytics. Occupancy by market is drawn as a sample, not from a live book of homes.
          </figcaption>
        </figure>

        <div className="mt-16 border-t border-navy/10 pt-10">
          <h3 className="font-serif text-3xl text-navy">The modules these screens belong to</h3>
          <ol className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {modules.map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-serif text-sage">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-semibold text-navy">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Screen({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <figure>
      <div className="flex justify-center" aria-hidden="true">
        {children}
      </div>
      <figcaption className="mt-4">
        <span className="block font-semibold text-navy">{title}</span>
        <span className="mt-1 block text-sm text-muted">{caption}</span>
      </figcaption>
    </figure>
  );
}
