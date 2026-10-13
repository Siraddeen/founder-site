import { useState, useEffect, useCallback, useRef } from "react";
import {
  person,
  product,
  pilotMail,
  pilot,
  links,
  shots,
  features,
  status,
  projects,
  stack,
} from "./site.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PilotForm from "./components/PilotForm.jsx";

const ext = { target: "_blank", rel: "noreferrer noopener" };

function Lightbox({ shot, title, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Focus the close button on mount
    closeButtonRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      // Keyboard focus trap inside dialog
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-night/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title || shot.alt}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/15 bg-night shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E05252]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5B544]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#48B880]/80" />
            <span className="ml-2 text-xs font-mono text-[#C9D6E4]">
              {title || "Screenshot preview"}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-teal transition-colors"
            aria-label="Close image preview (Escape)"
          >
            <span>Close</span>
            <kbd className="hidden rounded bg-white/15 px-1.5 py-0.5 text-[10px] text-white/80 sm:inline">
              Esc
            </kbd>
          </button>
        </div>

        {/* Image viewport */}
        <div className="flex flex-1 items-center justify-center overflow-auto bg-black/40 p-2 sm:p-4">
          <img
            src={shot.src}
            width={shot.w}
            height={shot.h}
            alt={shot.alt}
            className="max-h-[78vh] w-auto max-w-full rounded border border-white/10 object-contain shadow-lg"
          />
        </div>

        {/* Caption bar */}
        <div className="border-t border-white/10 bg-night px-4 py-2.5 text-xs text-[#9FD9DE]">
          <span className="font-semibold text-white">Inspect view:</span>{" "}
          {shot.alt}
        </div>
      </div>
    </div>
  );
}

// Browser-style frame around a real screenshot with click-to-enlarge.
function Frame({
  shot,
  caption,
  priority = false,
  title = "Demo workspace · sample data",
  onZoom,
}) {
  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && onZoom) {
      e.preventDefault();
      onZoom(shot, title);
    }
  };

  return (
    <figure className="group relative overflow-hidden rounded-xl border border-ink/15 bg-night shadow-lg transition-all duration-200 hover:border-ink/30 hover:shadow-xl">
      <div
        className="flex items-center justify-between border-b border-white/10 bg-night/95 px-3.5 py-2.5"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E05252]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5B544]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#48B880]/80" />
          <span className="ml-3 hidden text-[11px] font-mono text-[#7F93AB] sm:inline">
            {title}
          </span>
        </div>
        {onZoom && (
          <button
            type="button"
            onClick={() => onZoom(shot, title)}
            className="inline-flex min-h-[32px] items-center gap-1 rounded px-2 py-1 text-[11px] font-medium text-[#9FD9DE] transition-colors hover:text-white focus-visible:outline-teal"
            aria-label={`Enlarge screenshot: ${shot.alt}`}
          >
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
            <span className="hidden xs:inline">Click to enlarge</span>
          </button>
        )}
      </div>

      <div
        role={onZoom ? "button" : undefined}
        tabIndex={onZoom ? 0 : undefined}
        onClick={onZoom ? () => onZoom(shot, title) : undefined}
        onKeyDown={handleKeyDown}
        className={
          onZoom ? "relative block cursor-zoom-in group/img" : "relative block"
        }
        aria-label={onZoom ? `Enlarge screenshot: ${shot.alt}` : undefined}
      >
        <img
          src={shot.src}
          width={shot.w}
          height={shot.h}
          alt={shot.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding={priority ? "sync" : "async"}
          className="block h-auto w-full transition-transform duration-200 group-hover/img:scale-[1.008]"
        />
        {onZoom && (
          <div className="pointer-events-none absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-md border border-white/10 bg-night/85 px-2.5 py-1 text-[11px] font-medium text-white/95 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/img:opacity-100 sm:inline-flex">
            <svg
              className="h-3 w-3 text-teal-soft"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Click to inspect full view</span>
          </div>
        )}
      </div>

      {caption && <figcaption className="sr-only">{caption}</figcaption>}
    </figure>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14 md:py-20">
        <div>
          <h2 className="font-display text-2xl font-bold leading-tight text-ink md:text-3xl">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function Hero({ onZoom }) {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 sm:gap-12 sm:pb-20 sm:pt-12 lg:grid-cols-[1.05fr_1.15fr] lg:pt-16"
    >
      <div>
        {/* Early-stage honest status indicator */}
        <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-teal/20 bg-teal/10 px-3 py-1.5 text-xs font-semibold text-teal-dark sm:rounded-full sm:px-3.5 sm:py-1">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
          </span>
          <span className="leading-snug">
            Solo founder · Bootstrapped · Looking for 3–5 pilot agencies
          </span>
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.15rem]">
          A CRM for freelance agencies that keeps leads, deals, and invoices in
          one place.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I'm {person.name}, and I'm building {product.name} on my own. The
          product works end to end. What it needs now is a few real agencies to
          use it.
        </p>

        {/* CTA Group with clear primary/secondary hierarchy */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href="#pilot-form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-dark focus-visible:outline-teal"
          >
            <span>{pilot.button}</span>
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
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink hover:bg-white focus-visible:outline-teal"
          >
            <span>See it working</span>
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

        {/* Micro-trust signals */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Free during pilot
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Zero sales pressure
          </span>
        </div>

        {/* Contextual internal links */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-line/60 bg-white/70 px-4 py-3 text-xs text-muted">
          <span className="font-semibold text-ink">Read more:</span>
          <a
            href="/for-freelance-agencies/"
            className="inline-flex items-center gap-1 font-medium text-teal hover:text-teal-dark hover:underline underline-offset-2"
          >
            <span>Why Agencies Need a Dedicated CRM</span>
            <span aria-hidden="true">→</span>
          </a>
          <span className="hidden text-line sm:inline">•</span>
          <a
            href="/building-in-public/"
            className="inline-flex items-center gap-1 font-medium text-teal hover:text-teal-dark hover:underline underline-offset-2"
          >
            <span>Building in Public Journal</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="relative">
        <Frame
          shot={shots.deals}
          priority
          title="Deals pipeline board · 5 stages"
          onZoom={onZoom}
        />
        <p className="mt-2.5 text-center text-xs text-muted">
          <strong className="text-ink">Pipeline view.</strong> Five-stage kanban
          board from New lead to Won/Lost deal.
        </p>
      </div>
    </section>
  );
}

function Demo({ onZoom }) {
  return (
    <section id="demo" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Real Product Evidence
          </span>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink md:text-3xl">
            See it working
          </h2>
          <p className="mt-3 text-muted">
            Real screens from the app, running on a demo workspace with sample
            data. No customer data is shown.
          </p>
        </div>

        {/* 2-column screenshot row */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex flex-col">
            <Frame
              shot={shots.dashboard}
              title="Workspace dashboard · metrics & tasks"
              onZoom={onZoom}
            />
            <div className="mt-3 rounded-lg border border-line bg-white/70 p-3.5">
              <p className="text-sm text-muted">
                <strong className="text-ink">Dashboard.</strong> Record counts
                across leads, deals, contacts, companies, and the tasks due this
                week.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <Frame
              shot={shots.invoice}
              title="Invoice view · payment timeline"
              onZoom={onZoom}
            />
            <div className="mt-3 rounded-lg border border-line bg-white/70 p-3.5">
              <p className="text-sm text-muted">
                <strong className="text-ink">Invoices.</strong> Line items, tax,
                totals, and the payment shown on the activity timeline with
                public payment link.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width automation screenshot */}
        <div className="mt-10 max-w-4xl">
          <Frame
            shot={shots.automations}
            title="Automation rules · background triggers"
            onZoom={onZoom}
          />
          <div className="mt-3 rounded-lg border border-line bg-white/70 p-3.5">
            <p className="text-sm text-muted">
              <strong className="text-ink">Automations.</strong> Rules that
              create tasks, send notifications, or assign owners when a record
              is created. Background queue with retries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeShot, setActiveShot] = useState(null);
  const lastActiveElementRef = useRef(null);

  const handleZoom = useCallback((shot, title) => {
    lastActiveElementRef.current = document.activeElement;
    setActiveShot({ shot, title });
  }, []);

  const closeZoom = useCallback(() => {
    setActiveShot(null);
    if (
      lastActiveElementRef.current &&
      typeof lastActiveElementRef.current.focus === "function"
    ) {
      lastActiveElementRef.current.focus();
    }
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink focus:shadow-lg focus:outline-teal"
      >
        Skip to content
      </a>

      <Header currentPath="/" />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero onZoom={handleZoom} />
        <Demo onZoom={handleZoom} />

        {/* Features Section */}
        <Section id="crm" title={`What ${product.name} does`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(([name, text], index) => (
              <div
                key={name}
                className={`rounded-xl border border-line bg-white/70 p-5 shadow-xs transition-colors hover:border-teal/40 hover:bg-white sm:p-6 ${
                  index === features.length - 1 && features.length % 2 !== 0
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                    {name}
                  </h3>
                  <span className="font-mono text-xs text-muted/60">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Contextual link to For Agencies page */}
          <div className="mt-8 rounded-xl border border-line bg-white/80 p-5 shadow-xs sm:p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h4 className="font-display text-base font-bold text-ink">
                  Curious about the full agency workflow?
                </h4>
                <p className="mt-1 text-sm text-muted">
                  See how this architecture solves common agency bottlenecks from pitch to payment.
                </p>
              </div>
              <a
                href="/for-freelance-agencies/"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-xs font-semibold text-teal-dark hover:bg-teal hover:text-white transition-colors"
              >
                <span>Read Agency Workflow Guide</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Section>

        {/* Status & Pilot Section */}
        <Section id="status" title="Where it stands today">
          <div className="space-y-4">
            {status.map(([name, text]) => {
              const isShipped = name.toLowerCase().includes("built");
              const isNotYet = name.toLowerCase().includes("not");

              return (
                <div
                  key={name}
                  className={`rounded-xl border p-5 transition-colors sm:p-6 ${
                    isShipped
                      ? "border-teal/30 bg-teal/5"
                      : isNotYet
                        ? "border-amber/40 bg-amber-soft/80"
                        : "border-line bg-white/70"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        isShipped
                          ? "bg-teal text-white"
                          : isNotYet
                            ? "bg-[#804E00] text-white"
                            : "bg-ink text-paper"
                      }`}
                    >
                      {isShipped && "✓"}
                      {isNotYet && "⚠"}
                      {!isShipped && !isNotYet && "→"}
                      {name}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/90 sm:text-base">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contextual link to Building in Public journal */}
          <div className="mt-6 rounded-xl border border-line bg-white/80 p-5 shadow-xs sm:p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h4 className="font-display text-base font-bold text-ink">
                  Transparent engineering progress
                </h4>
                <p className="mt-1 text-sm text-muted">
                  Follow technical milestones, architectural choices, and what remains under active development.
                </p>
              </div>
              <a
                href="/building-in-public/"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-xs font-semibold text-teal-dark hover:bg-teal hover:text-white transition-colors"
              >
                <span>Read Development Journal</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Pilot Invitation Card */}
          <div id="pilot" className="mt-8 rounded-2xl border border-teal/30 bg-gradient-to-br from-teal-soft/80 via-white to-teal-soft/30 p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">
                ★ Early Pilot Invitation
              </span>
              <span className="text-xs font-bold text-teal-dark">
                Limited to 3–5 agencies
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
              {pilot.heading}
            </h3>
            <p className="mt-2.5 max-w-xl text-base leading-relaxed text-ink/80">
              {pilot.text}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-teal/20 bg-white/80 p-3.5 text-xs text-ink shadow-xs">
                <div className="mb-1 font-semibold text-teal-dark">
                  1. Free access
                </div>
                Full workspace access during pilot with zero usage fees.
              </div>
              <div className="rounded-lg border border-teal/20 bg-white/80 p-3.5 text-xs text-ink shadow-xs">
                <div className="mb-1 font-semibold text-teal-dark">
                  2. Direct founder support
                </div>
                I assist with onboarding, data import, and live debugging.
              </div>
              <div className="rounded-lg border border-teal/20 bg-white/80 p-3.5 text-xs text-ink shadow-xs">
                <div className="mb-1 font-semibold text-teal-dark">
                  3. Tailored features
                </div>
                Your feedback directly shapes the development roadmap.
              </div>
            </div>

            <div className="mt-8">
              <PilotForm id="pilot-form" />
            </div>
          </div>
        </Section>

        {/* Other Projects Section */}
        <Section id="projects" title="Other things I've built">
          <p className="mb-6 text-sm text-muted">
            Secondary projects showing end-to-end full-stack software, auth,
            billing, and AI engineering.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="flex flex-col justify-between rounded-xl border border-line bg-white/70 p-5 shadow-xs transition-colors hover:border-line hover:bg-white sm:p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-line/60 pt-3 text-xs font-semibold">
                  {p.links.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      {...ext}
                      className="inline-flex items-center gap-1 text-teal transition-colors hover:text-teal-dark hover:underline underline-offset-4"
                    >
                      <span>{label}</span>
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" title="About me">
          <div className="rounded-xl border border-line bg-white/70 p-6 shadow-xs sm:p-8">
            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                I'm a self-taught full-stack developer and AI engineer based in{" "}
                <strong className="font-semibold text-ink">
                  {person.place}
                </strong>
                . I trained as a mechanical engineer, spent time on a factory
                floor, and moved into software. I build the whole product
                myself, from the database to the payment screen.
              </p>
            </div>

            <div className="mt-6 border-t border-line/60 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink/70">
                Core Technologies & Tooling
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack
                  .split(/,\s*|\s+and\s+/)
                  .filter(Boolean)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {tech.replace(/^\(/, "").replace(/\)$/, "")}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Lightbox Modal */}
      {activeShot && (
        <Lightbox
          shot={activeShot.shot}
          title={activeShot.title}
          onClose={closeZoom}
        />
      )}
    </>
  );
}
