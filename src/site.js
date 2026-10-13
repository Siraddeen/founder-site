// Edit your content here. The page in App.jsx reads everything from this file.

export const person = {
  name: "R. Siraddeen",
  short: "Siraddeen",
  place: "Tirupati, India",
  email: "siraddeen15@gmail.com",
};

// Change this once you pick a final product name.
export const product = {
  name: "Freelance Agency CRM",
  tagline: "Leads, deals, and invoices for freelance agencies, in one workspace.",
};

export const pilotMail =
  "mailto:" + person.email +
  "?subject=" + encodeURIComponent("Pilot interest: Freelance Agency CRM") +
  "&body=" + encodeURIComponent("Hi, I run a freelance agency / freelance practice and I'd like to try the CRM.\n\nWhat I do:\nTeam size:\nWhat I use today:");

export const links = [
  { label: "Portfolio", href: "https://portfolio.siraddeen.in" },
  { label: "GitHub", href: "https://github.com/Siraddeen" },
  { label: "LinkedIn", href: "https://linkedin.com/in/siraddeen" },
  { label: "YouTube", href: "https://youtube.com/@LbTeaching" },
];

export const features = [
  ["Pipeline", "Track a lead through contact, deal, and invoice without retyping it. Add your own fields to any record."],
  ["Invoices and payments", "Send an invoice with a public payment link. Connect your own Razorpay or Stripe account; keys are stored encrypted per workspace."],
  ["Automation", "When a record is created or a field changes, create a task, send a notification or email, update a field, or call a webhook. Slow actions run in a background queue with retries."],
  ["Teams and plans", "Each agency gets its own workspace, isolated at the database level. Free, Pro, and Business plans cap members, records, and automation rules, with usage bars and an upgrade prompt."],
  ["Public API", "Read and write contacts, deals, companies, leads, invoices, and tasks with scoped API keys. Requests are rate limited and can't cross workspaces."],
  ["Audit and workspace controls", "An audit log records key changes. Workspaces can be suspended, exported, or deleted by their owner, and the deletion record is kept."],
  ["Self-hosted option", "Run it on your own server with a signed license that keeps working through a 14-day offline grace period."],
];

export const status = [
  ["Built and tested", "Core CRM, billing, public API, audit log, and workspace lifecycle all work. 20+ versions shipped, 500+ automated tests, and each version is checked against a live database before it is locked."],
  ["Not yet", "No paying customers and no outside pilot users so far. Some billing paths, such as live subscription overlap and replayed webhooks, are covered by tests but not yet exercised with real provider subscriptions."],
  ["Next", "Put it in front of the first 3 to 5 freelancers or small agencies, on their real work, and fix what gets in their way."],
];

export const projects = [
  {
    name: "SkillVault",
    text: "A course and roadmap platform on Next.js and Supabase, with tiered access, Razorpay billing, and an analytics dashboard. It is the base the CRM's auth and billing grew from.",
    links: [["Live demo", "https://skillvault.siraddeen.in"], ["Source", "https://github.com/Siraddeen/SkillVault"]],
  },
  {
    name: "SaaS Starter Kit",
    text: "SkillVault stripped down to auth, tiered subscriptions, Razorpay billing, and an admin panel, sold as a starter for other builders.",
    links: [["Gumroad", "https://siraddeen.gumroad.com/l/saas-starter-kit"]],
  },
  {
    name: "ARIA",
    text: "An offline-first emergency assistant PWA. It uses a cloud model when online, an on-device model when offline, and a 57-scenario rule engine as the always-available fallback. Built for the Gemma 4 Good Hackathon.",
    links: [["Live demo", "https://aria.siraddeen.in"]],
  },
  {
    name: "Remote Jobs Analytics",
    text: "A Python ETL pipeline into PostgreSQL with a Flask API and a React dashboard.",
    links: [["Live dashboard", "https://jobs.siraddeen.in"]],
  },
];

export const stack =
  "React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Supabase, MongoDB, Docker, GitHub Actions, and LLM integrations (Claude, Gemini, OpenRouter).";

// Real screenshots from a demo workspace (sample data, no customer data).
export const shots = {
  deals:       { src: "/shots/deals.webp",       w: 1220, h: 777, alt: "Deals pipeline board with five stages: New, Contacted, Proposal Sent, Won and Lost" },
  invoice:     { src: "/shots/invoice.webp",     w: 820,  h: 763, alt: "A paid invoice with line items, tax and totals" },
  automations: { src: "/shots/automations.webp", w: 1230, h: 570, alt: "Automation rules that run when a contact, lead or deal is created" },
  dashboard:   { src: "/shots/dashboard.webp",   w: 1235, h: 688, alt: "Workspace dashboard with record counts and upcoming tasks" },
};

// Edit these to match what you are actually willing to offer.
export const pilot = {
  heading: "Join the pilot",
  text: "I'm looking for 3 to 5 freelancers or small agencies to run real work through the CRM. In return for honest feedback, you get free access during the pilot and direct support from me, the person who built it.",
  button: "Try the CRM with your agency",
};
