import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PilotForm from "../components/PilotForm.jsx";
import { person, product } from "../site.js";

export default function BuildingInPublicPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow-lg focus:outline-teal"
      >
        Skip to content
      </a>

      <Header currentPath="/building-in-public/" />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal-dark">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75 motion-reduce:animate-none"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
              </span>
              <span>Engineering Journal · Build in Public</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              Building a Freelance Agency CRM in Public
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              I am {person.name}, a solo developer building {product.name} from {person.place}.
              I believe in transparent engineering: explaining what is fully working, what is still
              under active development, and what real agencies will test during the pilot.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md border border-line bg-paper px-3 py-1 text-xs font-medium text-ink">
                Current build: V20.7 (Development)
              </span>
              <span className="rounded-md border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium text-teal-dark">
                Status: Internal Demo & Pilot Intake
              </span>
              <span className="rounded-md border border-amber/40 bg-amber-soft px-3 py-1 text-xs font-medium text-amber-dark">
                Not yet public self-serve
              </span>
            </div>
          </div>
        </section>

        {/* Founder & Architecture Story */}
        <section className="border-t border-line bg-white/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  Founder Background
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                  From factory floor to full-stack systems
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  I trained as a mechanical engineer and spent time working on a manufacturing factory floor.
                  That environment taught me that complex systems break at the seams where different
                  tools and processes meet.
                </p>
                <p>
                  When I moved into software engineering, I noticed that freelance agencies suffer from
                  the exact same problem: leads get stuck in messaging apps, deals live in spreadsheets,
                  and invoices are sent from standalone billing gateways. Retyping client data between
                  disconnected systems causes missed follow-ups and delayed payments.
                </p>
                <p>
                  I am engineering this CRM end to end—from database schema and background worker queues
                  to payment webhooks and browser interfaces—to remove those seams completely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shipped & Verified Modules */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Verified Progress
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                What is built and functioning today
              </h2>
              <p className="mt-3 text-muted">
                The core CRM architecture is actively versioned through incremental milestone builds
                with automated test coverage, and checked against a live database before locking each release.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal font-semibold">MODULE 01</span>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                    ✓ Functional
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Pipeline & Deal Kanban
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  5-stage kanban board (New, Contacted, Proposal Sent, Won, Lost) with custom fields,
                  activity history, and aggregate revenue calculation.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal font-semibold">MODULE 02</span>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                    ✓ Functional
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Invoices & Payment Links
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Generates itemized invoices with public payment links. Connects with Stripe and
                  Razorpay accounts with encrypted credentials per workspace.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal font-semibold">MODULE 03</span>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                    ✓ Functional
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Isolated Workspaces
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Multi-tenant architecture with database-level isolation. Each agency workspace has
                  its own member roles, storage quotas, and data boundary.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal font-semibold">MODULE 04</span>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                    ✓ Functional
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Background Automations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Event-driven rule engine. Runs async jobs with retries to trigger task creation,
                  send email alerts, update fields, or dispatch external webhooks.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal font-semibold">MODULE 05</span>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                    ✓ Functional
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Public Developer API
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Scoped API keys with per-workspace rate limiting. Allows agencies to programmatically
                  create and read leads, deals, contacts, and invoices.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal font-semibold">MODULE 06</span>
                  <span className="inline-flex items-center rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal-dark">
                    ✓ Functional
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  Audit Logs & Lifecycle
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Immutable audit records for sensitive workspace changes. Includes workspace data
                  export and soft/hard deletion controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development vs. Production Distinction */}
        <section className="border-t border-line bg-white/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-dark">
                Transparency & Truth in Advertising
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                What remains under development
              </h2>
              <p className="mt-3 text-muted">
                Here is an honest breakdown of where the project stands today and what is not yet ready.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-amber/40 bg-amber-soft/60 p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  ⚠ No Paying Customers Yet
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  The product is not yet publicly launched as a self-serve SaaS. There are currently
                  no paying customers or external live agency data on the system. All screenshots and
                  demos are run on internal test workspaces with realistic dummy data.
                </p>
              </div>

              <div className="rounded-xl border border-amber/40 bg-amber-soft/60 p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  ⚠ Live Gateway Edge Cases
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  While payment webhooks and billing logic pass automated integration tests, complex
                  real-world edge cases (e.g. multi-cycle subscription overlap, replayed webhooks
                  from live bank failures) will be exercised carefully during the pilot.
                </p>
              </div>

              <div className="rounded-xl border border-teal/30 bg-teal-soft/40 p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  → What the Pilot Will Validate
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  The upcoming pilot with 3 to 5 agencies will test real day-to-day agency workflows:
                  logging real client inquiries, sending live invoices, and identifying any UI friction
                  before a wider commercial release.
                </p>
              </div>
            </div>

            {/* Embedded Pilot Form */}
            <div className="mt-12">
              <div className="mb-6 max-w-xl">
                <h3 className="font-display text-2xl font-bold text-ink">
                  Help Shape the Product as a Pilot Agency
                </h3>
                <p className="mt-2 text-sm text-muted">
                  If you run a freelance agency or boutique studio and want to test the software with
                  direct support from the engineer building it, apply below.
                </p>
              </div>
              <PilotForm id="pilot-form" />
            </div>

            {/* Cross-page Navigation */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6 text-sm text-muted">
              <a
                href="/"
                className="inline-flex items-center gap-1 font-medium text-teal hover:underline underline-offset-2"
              >
                <span>← Return to Founder Homepage</span>
              </a>
              <a
                href="/for-freelance-agencies/"
                className="inline-flex items-center gap-1 font-medium text-teal hover:underline underline-offset-2"
              >
                <span>Read Why Agencies Need a Dedicated CRM →</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
