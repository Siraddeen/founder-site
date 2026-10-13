import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PilotForm from "../components/PilotForm.jsx";
import { person, product } from "../site.js";

export default function ForAgenciesPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow-lg focus:outline-teal"
      >
        Skip to content
      </a>

      <Header currentPath="/for-freelance-agencies/" />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal-dark">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75 motion-reduce:animate-none"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
              </span>
              <span>Workflow Blueprint · Freelance Agencies & Studios</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              A Dedicated CRM Workflow Built for Freelance Agencies
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Most generic CRMs are built for enterprise sales teams with endless form fields, while
              simple task apps lack payment links and pipeline stages. This CRM is tailored to how
              independent freelance agencies actually operate: from discovery call to paid invoice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#pilot-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-dark focus-visible:outline-teal"
              >
                <span>Apply for Agency Pilot</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:bg-white focus-visible:outline-teal"
              >
                <span>Explore the Workflow</span>
                <svg
                  className="h-4 w-4 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Zero software fees during pilot
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Direct founder onboarding
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Limited to 3–5 teams
              </span>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section id="workflow" className="border-t border-line bg-white/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                The Bottleneck
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                The friction in current agency operations
              </h2>
              <p className="mt-3 text-muted">
                Freelancers and small agency owners rarely have a dedicated ops person. You end up
                stitching together multiple disconnected apps just to close a project and get paid.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-soft text-amber-dark">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  Scattered Client Inquiries
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Leads arrive across contact forms, Twitter/LinkedIn DMs, and personal inbox
                  threads. Without a single intake funnel, follow-ups fall through the cracks.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-soft text-amber-dark">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  Manual Pipeline Tracking
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tracking proposals in spreadsheets or Notion databases requires manual status
                  updates. Deal values, delivery dates, and contact history get stale quickly.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-soft text-amber-dark">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  Disconnected Invoicing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  When a deal closes, you must retype client details, addresses, and line items into
                  a separate billing tool, creating payment friction and delayed invoices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How The CRM Solves It */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                The Solution
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                One continuous pipeline for client work
              </h2>
              <p className="mt-3 text-muted">
                {product.name} connects lead capture, deal progression, and client invoicing into a
                single workspace.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="grid gap-6 rounded-2xl border border-line bg-white p-6 sm:p-8 md:grid-cols-2">
                <div>
                  <span className="font-mono text-xs font-bold text-teal">STEP 01</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">
                    Capture Leads & Contacts
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    Log contacts and companies with custom fields tailored to your practice (e.g.,
                    budget range, tech requirements, target launch date). Hook into webhooks or
                    developer APIs to capture leads automatically from your own portfolio or forms.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-paper/60 p-4 text-xs font-mono text-muted">
                  <p className="font-bold text-ink mb-1">Capabilities included:</p>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Contact & Company relationship linking</li>
                    <li>Custom fields without database migrations</li>
                    <li>Scoped API key access for external form capture</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 rounded-2xl border border-line bg-white p-6 sm:p-8 md:grid-cols-2">
                <div>
                  <span className="font-mono text-xs font-bold text-teal">STEP 02</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">
                    Five-Stage Deal Kanban
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    Visualize projects moving across 5 standard agency stages: New, Contacted,
                    Proposal Sent, Won, and Lost. See expected revenue totals per column and keep
                    internal notes and tasks attached directly to the deal card.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-paper/60 p-4 text-xs font-mono text-muted">
                  <p className="font-bold text-ink mb-1">Capabilities included:</p>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Deal timeline with complete activity logs</li>
                    <li>Automated task generation on stage advance</li>
                    <li>Drag-and-drop board with column totals</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 rounded-2xl border border-line bg-white p-6 sm:p-8 md:grid-cols-2">
                <div>
                  <span className="font-mono text-xs font-bold text-teal">STEP 03</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">
                    One-Click Invoicing & Direct Payments
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    Convert won deals directly into itemized invoices without retyping client details.
                    Connect your own Stripe or Razorpay API keys—stored securely and encrypted per
                    workspace—and send a public payment link to your client.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-paper/60 p-4 text-xs font-mono text-muted">
                  <p className="font-bold text-ink mb-1">Capabilities included:</p>
                  <ul className="space-y-1.5 list-disc pl-4">
                    <li>Public hosted invoice view for your client</li>
                    <li>Encrypted per-workspace payment credentials</li>
                    <li>Automatic status transition when payment clears</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilot Program Expectations */}
        <section className="border-t border-line bg-white/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                The Pilot Partnership
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                What to expect as a pilot agency
              </h2>
              <p className="mt-3 text-muted">
                I am not looking for 500 passive signups. I am partnering with 3 to 5 active agencies
                who want a streamlined workflow and are willing to share candid feedback.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-teal/30 bg-teal-soft/40 p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-teal-dark">
                  What You Get
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink/90">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-teal font-bold">✓</span>
                    <span><strong>100% Free Access:</strong> Full workspace features unlocked throughout the pilot period with zero usage fees.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-teal font-bold">✓</span>
                    <span><strong>Direct Founder Onboarding:</strong> I will personally assist with data setup, custom fields, and payment integration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-teal font-bold">✓</span>
                    <span><strong>Direct Roadmap Influence:</strong> Agency feature requests and workflow suggestions receive top engineering priority.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-ink">
                  What Is Expected
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-ink font-bold">→</span>
                    <span><strong>Real Workflows:</strong> Put actual client deals, leads, and invoicing through the platform.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-ink font-bold">→</span>
                    <span><strong>Honest Feedback:</strong> Point out friction points, awkward UI flows, or missing essentials.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-ink font-bold">→</span>
                    <span><strong>Occasional Sync:</strong> A brief message or check-in every couple of weeks on how the tool is performing.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embedded Pilot Form */}
            <div className="mt-12">
              <div className="mb-6 max-w-xl">
                <h3 className="font-display text-2xl font-bold text-ink">
                  Apply for the Agency Pilot
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Tell me a bit about your agency setup. I review each application individually and
                  reach out directly to schedule setup.
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
                href="/building-in-public/"
                className="inline-flex items-center gap-1 font-medium text-teal hover:underline underline-offset-2"
              >
                <span>Read the Building in Public Journal →</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
