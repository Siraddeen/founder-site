import { useState, useEffect } from "react";
import { person } from "../site.js";

export default function Header({ currentPath = "/" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const isHome = currentPath === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line/60 bg-paper/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href={isHome ? "#top" : "/"}
          className="group flex items-center gap-2"
          onClick={closeMenu}
        >
          <span className="font-display text-lg font-bold text-ink transition-colors group-hover:text-teal">
            {person.name}
          </span>
          <span className="hidden rounded-full border border-teal/20 bg-teal/10 px-2 py-0.5 text-[11px] font-medium text-teal-dark xs:inline-block">
            Founder & Developer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-5 text-sm font-medium text-muted md:flex lg:gap-6"
        >
          <a
            href={isHome ? "#crm" : "/#crm"}
            className="transition-colors hover:text-ink"
          >
            The CRM
          </a>
          <a
            href="/for-freelance-agencies/"
            className={`transition-colors hover:text-ink ${
              currentPath === "/for-freelance-agencies/"
                ? "font-semibold text-teal"
                : ""
            }`}
          >
            For Agencies
          </a>
          <a
            href="/building-in-public/"
            className={`transition-colors hover:text-ink ${
              currentPath === "/building-in-public/"
                ? "font-semibold text-teal"
                : ""
            }`}
          >
            Building in Public
          </a>
          <a
            href={isHome ? "#status" : "/#status"}
            className="transition-colors hover:text-ink"
          >
            Status
          </a>
          <a
            href={isHome ? "#about" : "/#about"}
            className="transition-colors hover:text-ink"
          >
            About
          </a>
          <a
            href={isHome ? "#status" : "/#status"}
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-paper shadow-xs transition-colors hover:bg-teal focus-visible:outline-teal"
          >
            Join Pilot
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={isHome ? "#status" : "/#status"}
            className="inline-flex min-h-[36px] items-center rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-paper transition-colors hover:bg-teal focus-visible:outline-teal"
            onClick={closeMenu}
          >
            Join Pilot
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2.5 text-ink hover:bg-black/5 focus-visible:outline-teal"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-b border-line bg-paper/95 px-5 py-4 shadow-lg backdrop-blur-md md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col space-y-3 text-base font-medium text-ink"
          >
            <a
              href={isHome ? "#crm" : "/#crm"}
              onClick={closeMenu}
              className="rounded-md px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-teal"
            >
              The CRM
            </a>
            <a
              href="/for-freelance-agencies/"
              onClick={closeMenu}
              className={`rounded-md px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-teal ${
                currentPath === "/for-freelance-agencies/"
                  ? "font-semibold text-teal"
                  : ""
              }`}
            >
              For Freelance Agencies
            </a>
            <a
              href="/building-in-public/"
              onClick={closeMenu}
              className={`rounded-md px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-teal ${
                currentPath === "/building-in-public/"
                  ? "font-semibold text-teal"
                  : ""
              }`}
            >
              Building in Public
            </a>
            <a
              href={isHome ? "#status" : "/#status"}
              onClick={closeMenu}
              className="rounded-md px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-teal"
            >
              Status & Pilot
            </a>
            <a
              href={isHome ? "#about" : "/#about"}
              onClick={closeMenu}
              className="rounded-md px-2 py-1.5 transition-colors hover:bg-black/5 hover:text-teal"
            >
              About founder
            </a>
            <div className="pt-2">
              <a
                href={isHome ? "#status" : "/#status"}
                onClick={closeMenu}
                className="block w-full rounded-full bg-teal py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-dark"
              >
                Apply for Pilot
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
