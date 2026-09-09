import { FormEvent, useState } from "react";
import { ChevronSelect } from "@/components/site/icons";
import { inquiries, site } from "@/data/site";

const field = "field-input px-3 py-2.5 text-lg";

export function HelloCopy() {
  return (
    <div className="space-y-8 font-sans text-lead leading-snug text-ink text-pretty">
      <p>
        Looking to staff an AI / backend seat, or just want to say hi? Send me an email and I’ll do
        my best to reply within 24 hrs!
      </p>
      <p>
        If contact forms aren’t your thing… write{" "}
        <a href={`mailto:${site.email}`} className="text-link">
          {site.email}
        </a>
      </p>
    </div>
  );
}

export function HelloForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first = String(data.get("first") ?? "");
    const last = String(data.get("last") ?? "");
    const inquiry = String(data.get("inquiry") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Name: ${first} ${last}\nInquiry: ${inquiry}\nFrom: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${inquiry} — ${first}`)}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="font-sans text-lead text-ink">
        Opening your mail app. If nothing happened, write {site.email} directly.
      </p>
    );
  }

  return (
    <form className="surface-card flex flex-col gap-6 p-6 md:p-8" onSubmit={onSubmit}>
      <fieldset className="contents">
        <legend className="mb-2 text-lg text-ink">Name *</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="first" required placeholder="First Name" className={field} autoComplete="given-name" />
          <input name="last" required placeholder="Last Name" className={field} autoComplete="family-name" />
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-lg text-ink">
          Inquiry *
          <span className="relative">
            <select
              name="inquiry"
              required
              defaultValue=""
              className={`${field} w-full appearance-none bg-surface pr-10`}
            >
              <option value="" disabled>
                Select One
              </option>
              {inquiries.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronSelect className="pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 text-cyan" />
          </span>
        </label>
        <label className="flex flex-col gap-2 text-lg text-ink">
          Email *
          <input
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className={field}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-lg text-ink">
        Message *
        <textarea name="message" required placeholder="Hello..." className={`${field} min-h-36`} />
      </label>
      <button type="submit" className="fill-btn self-start rounded-pill px-8 py-2.5 text-lg font-medium">
        Send
      </button>
    </form>
  );
}
