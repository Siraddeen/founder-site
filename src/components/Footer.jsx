import { person, links } from "../site.js";

const ext = { target: "_blank", rel: "noreferrer noopener" };

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line/40 bg-night text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Talk to me
          </h2>
          <p className="mt-2 text-xs font-mono text-[#7F93AB]">
            Founder-direct communication
          </p>

          <div className="mt-6 flex flex-col space-y-2 text-sm text-[#C9D6E4]">
            <a
              href="/"
              className="hover:text-white underline-offset-4 hover:underline"
            >
              ← Founder Homepage
            </a>
            <a
              href="/for-freelance-agencies/"
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Agency CRM Workflow
            </a>
            <a
              href="/building-in-public/"
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Building in Public Journal
            </a>
          </div>
        </div>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-[#C9D6E4]">
            Run a freelance practice or a small agency and want to try the CRM, or
            just have feedback? Reach out directly to the person building it.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 font-display text-xl font-bold text-white underline underline-offset-4 transition-colors hover:text-[#5FD0D8]"
            >
              <svg
                className="h-5 w-5 text-teal-soft"
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
              <span>{person.email}</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...ext}
                className="inline-flex items-center gap-1 text-[#9FD9DE] underline underline-offset-4 transition-colors hover:text-white"
              >
                <span>{l.label}</span>
                <svg
                  className="h-3 w-3 opacity-70"
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

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#7F93AB] sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {person.name}. An independent,
              bootstrapped project, not an incorporated company.
            </p>
            <a
              href="#top"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
