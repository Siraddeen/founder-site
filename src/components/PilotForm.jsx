import { useState } from "react";
import { person, pilotMail } from "../site.js";

export default function PilotForm({ id = "pilot-form" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleOrTeamSize: "",
    currentTool: "",
    message: "",
    botField: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g., name@agency.com).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Honeypot spam check - silent exit if bot filled it out
    if (formData.botField) {
      const isLocal =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1");
      setSubmissionStatus(isLocal ? "local-mock" : "success");
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);
    setErrorMessage("");

    try {
      const payload = new URLSearchParams({
        "form-name": "pilot-interest",
        name: formData.name.trim(),
        email: formData.email.trim(),
        roleOrTeamSize: formData.roleOrTeamSize.trim(),
        currentTool: formData.currentTool.trim(),
        message: formData.message.trim(),
        "bot-field": formData.botField,
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      });

      if (response.ok) {
        const isLocal =
          typeof window !== "undefined" &&
          (window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1" ||
            window.location.hostname === "0.0.0.0");
        const isMock =
          response.headers.get("X-Local-Mock") === "true" || isLocal;
        setSubmissionStatus(isMock ? "local-mock" : "success");
      } else {
        setSubmissionStatus("error");
        setErrorMessage(
          "We could not submit your response at this time. Please try again or email the founder directly."
        );
      }
    } catch (err) {
      setSubmissionStatus("error");
      setErrorMessage(
        "Network connection error. Please check your connection or reach out directly via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      roleOrTeamSize: "",
      currentTool: "",
      message: "",
      botField: "",
    });
    setErrors({});
    setSubmissionStatus(null);
    setErrorMessage("");
  };

  return (
    <div id={id} className="rounded-2xl border border-teal/25 bg-white p-6 shadow-sm sm:p-8">
      {submissionStatus === "local-mock" ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-amber/40 bg-amber-soft/80 p-6 text-ink"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-display text-lg font-bold text-ink">
                Local test successful — no application was sent or stored.
              </h4>
              <p className="text-xs font-semibold text-amber-dark">
                Vite local preview mock
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base">
            Your form inputs, validation, and submission flow functioned properly. Because you are
            testing in a local development or preview environment, this submission was handled by the
            Vite local mock and was not sent to Netlify Forms or stored.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-amber/30 pt-4 text-xs text-muted">
            <button
              type="button"
              onClick={handleReset}
              className="font-medium text-ink underline underline-offset-2 hover:text-teal"
            >
              Reset form and test again
            </button>
            <span>·</span>
            <span>
              Real submissions are processed only when deployed to Netlify.
            </span>
          </div>
        </div>
      ) : submissionStatus === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-teal/30 bg-teal-soft/60 p-6 text-ink"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <h4 className="font-display text-lg font-bold text-ink">
                Pilot Application Received!
              </h4>
              <p className="text-xs text-muted">
                Direct founder response incoming
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/90 sm:text-base">
            Thank you, <strong className="font-semibold text-ink">{formData.name}</strong>. I have
            received your interest for testing the CRM. I’ll review your application and get back to you at{" "}
            <strong className="font-semibold text-ink">{formData.email}</strong> as soon as I can.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-teal/20 pt-4 text-xs text-muted">
            <button
              type="button"
              onClick={handleReset}
              className="font-medium text-teal underline underline-offset-2 hover:text-teal-dark"
            >
              Submit another application
            </button>
            <span>·</span>
            <span>
              Need urgent contact? Email{" "}
              <a
                href={`mailto:${person.email}`}
                className="font-semibold text-ink underline hover:text-teal"
              >
                {person.email}
              </a>
            </span>
          </div>
        </div>
      ) : (
        <form
          name="pilot-interest"
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4"
        >
          {/* Netlify Forms detection hidden fields */}
          <input type="hidden" name="form-name" value="pilot-interest" />
          <p className="hidden" aria-hidden="true">
            <label>
              Don't fill this out if you're human:{" "}
              <input
                name="bot-field"
                value={formData.botField}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </label>
          </p>

          {submissionStatus === "error" && (
            <div
              role="alert"
              className="rounded-lg border border-[#E05252]/40 bg-[#FDF2F2] p-4 text-sm text-[#9B1C1C]"
            >
              <div className="flex items-start gap-2.5">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E05252]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium">{errorMessage}</p>
                  <p className="mt-1 text-xs text-[#9B1C1C]/80">
                    Direct fallback:{" "}
                    <a href={pilotMail} className="font-semibold underline hover:text-[#7A1414]">
                      Open email client with prefilled details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor={`${id}-name`}
                className="block text-xs font-semibold uppercase tracking-wider text-ink"
              >
                Your Name <span className="text-[#C53030]">*</span>
              </label>
              <input
                id={`${id}-name`}
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? `${id}-name-error` : undefined}
                placeholder="e.g. Alex Morgan"
                disabled={isSubmitting}
                className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/50 focus-visible:outline-teal ${
                  errors.name
                    ? "border-[#E05252] bg-[#FDF2F2]/50 focus:border-[#E05252]"
                    : "border-line bg-paper/50 focus:border-teal focus:bg-white"
                }`}
              />
              {errors.name && (
                <p id={`${id}-name-error`} className="mt-1 text-xs font-medium text-[#C53030]">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor={`${id}-email`}
                className="block text-xs font-semibold uppercase tracking-wider text-ink"
              >
                Work Email <span className="text-[#C53030]">*</span>
              </label>
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? `${id}-email-error` : undefined}
                placeholder="alex@studio.com"
                disabled={isSubmitting}
                className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/50 focus-visible:outline-teal ${
                  errors.email
                    ? "border-[#E05252] bg-[#FDF2F2]/50 focus:border-[#E05252]"
                    : "border-line bg-paper/50 focus:border-teal focus:bg-white"
                }`}
              />
              {errors.email && (
                <p id={`${id}-email-error`} className="mt-1 text-xs font-medium text-[#C53030]">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Role / Team size */}
            <div>
              <label
                htmlFor={`${id}-role`}
                className="block text-xs font-semibold uppercase tracking-wider text-ink"
              >
                Role or Team Size <span className="font-normal text-muted">(Optional)</span>
              </label>
              <input
                id={`${id}-role`}
                type="text"
                name="roleOrTeamSize"
                value={formData.roleOrTeamSize}
                onChange={handleChange}
                placeholder="e.g. Founder, 3-person studio"
                disabled={isSubmitting}
                className="mt-1.5 block w-full rounded-lg border border-line bg-paper/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-teal focus:bg-white focus-visible:outline-teal"
              />
            </div>

            {/* Current tool */}
            <div>
              <label
                htmlFor={`${id}-tool`}
                className="block text-xs font-semibold uppercase tracking-wider text-ink"
              >
                Current Tools <span className="font-normal text-muted">(Optional)</span>
              </label>
              <input
                id={`${id}-tool`}
                type="text"
                name="currentTool"
                value={formData.currentTool}
                onChange={handleChange}
                placeholder="e.g. Notion, Spreadsheets, Stripe"
                disabled={isSubmitting}
                className="mt-1.5 block w-full rounded-lg border border-line bg-paper/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-teal focus:bg-white focus-visible:outline-teal"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor={`${id}-message`}
              className="block text-xs font-semibold uppercase tracking-wider text-ink"
            >
              What workflow do you want to streamline?{" "}
              <span className="font-normal text-muted">(Optional)</span>
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about how you manage leads, deals, or invoicing today..."
              disabled={isSubmitting}
              className="mt-1.5 block w-full rounded-lg border border-line bg-paper/50 px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-teal focus:bg-white focus-visible:outline-teal"
            ></textarea>
          </div>

          {/* Privacy statement */}
          <div className="rounded-lg border border-line/60 bg-paper/40 p-3 text-xs text-muted">
            <p className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>
                <strong>Privacy:</strong> Your information will be used to review your pilot application
                and contact you about participation.
              </span>
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper shadow-md transition-all hover:bg-teal hover:text-white focus-visible:outline-teal disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Submitting application...</span>
                  </>
                ) : (
                  <>
                    <span>Apply for the Agency Pilot</span>
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
                  </>
                )}
              </button>

              <span className="text-xs text-muted">
                Prefer email?{" "}
                <a
                  href={pilotMail}
                  className="font-semibold text-ink underline underline-offset-2 hover:text-teal"
                >
                  Send email via client
                </a>
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
