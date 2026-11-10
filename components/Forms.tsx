"use client";

import { FormEvent, useState } from "react";
import { mailto, site } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-3.5 py-3 text-[15px] text-ink outline-none placeholder:text-muted/70 focus:border-gold";

export function TextField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} ${error ? "border-danger" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextArea({
  id,
  label,
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        required={required}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} ${error ? "border-danger" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClass} ${error ? "border-danger" : ""}`}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function focusFirst(errors: Record<string, string>) {
  const first = Object.keys(errors)[0];
  if (first) document.getElementById(first)?.focus();
}

function Ready({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return (
    <div role="status" className="rounded-2xl border border-sage/20 bg-[#eef4f0] p-6 sm:p-8">
      <h3 className="font-serif text-3xl text-navy">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink">{children}</div>
      <a href={href} className="btn btn-navy mt-6">
        Email this message
      </a>
    </div>
  );
}

const enquiryTypes = [
  "General question",
  "Book a demonstration",
  "Business enquiry",
  "Property question",
  "Enterprise sales",
  "Press",
  "Resident support",
];

export function ContactForm({ initialIntent }: { initialIntent?: string }) {
  const initialType =
    initialIntent === "enterprise"
      ? "Enterprise sales"
      : initialIntent === "demo"
        ? "Book a demonstration"
        : initialIntent === "business"
          ? "Business enquiry"
          : initialIntent === "resident"
            ? "Resident support"
            : enquiryTypes[0];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(initialType);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [href, setHref] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!isEmail(email)) next.email = "Enter a valid email address.";
    if (message.trim().length < 12) next.message = "Add a few sentences so the team knows how to help.";
    if (message.trim().length > 2000) next.message = "Keep the message under 2,000 characters.";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirst(next);
      return;
    }
    setHref(
      mailto(type === "Enterprise sales" || type === "Business enquiry" ? site.salesEmail : site.email, `${type} — CoHab OS`, [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone.trim() || "Not given"}`,
        `Enquiry: ${type}`,
        "",
        message.trim(),
      ]),
    );
  }

  if (href) {
    return (
      <Ready title="Your message is ready to send." href={href}>
        <p>
          This opens your email app with the message filled in. Nothing is stored on this website. Send it to reach the
          CoHab OS team.
        </p>
      </Ready>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <TextField id="name" label="Full name" value={name} onChange={setName} error={errors.name} required autoComplete="name" />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="email" label="Email" type="email" value={email} onChange={setEmail} error={errors.email} required autoComplete="email" />
        <TextField id="phone" label="Telephone" type="tel" value={phone} onChange={setPhone} autoComplete="tel" />
      </div>
      <SelectField id="type" label="Enquiry type" value={type} onChange={setType} options={enquiryTypes} />
      <TextArea id="message" label="Message" value={message} onChange={setMessage} error={errors.message} required />
      <button type="submit" className="btn btn-navy justify-self-start">
        Prepare message
      </button>
    </form>
  );
}

export function DemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("Property manager");
  const [size, setSize] = useState("2–5 properties");
  const [markets, setMarkets] = useState<string[]>(["Ghana"]);
  const [date, setDate] = useState("");
  const [windowTime, setWindowTime] = useState("Morning");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [href, setHref] = useState("");

  function toggleMarket(market: string) {
    setMarkets((current) => (current.includes(market) ? current.filter((item) => item !== market) : [...current, market]));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next["demo-name"] = "Enter your name.";
    if (!isEmail(email)) next["demo-email"] = "Enter a valid work email.";
    if (company.trim().length < 2) next["demo-company"] = "Enter a company or “Independent”.";
    if (markets.length === 0) next["demo-markets"] = "Choose at least one market.";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirst(next);
      return;
    }
    setHref(
      mailto(site.salesEmail, `Demo request — ${company.trim()}`, [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone.trim() || "Not given"}`,
        `Company: ${company.trim()}`,
        `Role: ${role}`,
        `Portfolio: ${size}`,
        `Markets: ${markets.join(", ")}`,
        `Preferred date: ${date || "Flexible"}`,
        `Time of day: ${windowTime}`,
        "",
        notes.trim() || "No extra notes.",
      ]),
    );
  }

  if (href) {
    return (
      <Ready title="Your demo request is ready." href={href}>
        <p>
          Email it to {site.salesEmail}. The team will reply with a time. This website does not hold a live calendar yet,
          so the message is how the booking is made.
        </p>
      </Ready>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="demo-name" label="Full name" value={name} onChange={setName} error={errors["demo-name"]} required autoComplete="name" />
        <TextField id="demo-email" label="Work email" type="email" value={email} onChange={setEmail} error={errors["demo-email"]} required autoComplete="email" />
        <TextField id="demo-phone" label="Telephone" type="tel" value={phone} onChange={setPhone} autoComplete="tel" />
        <TextField id="demo-company" label="Company" value={company} onChange={setCompany} error={errors["demo-company"]} required autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField id="demo-role" label="Role" value={role} onChange={setRole} options={["Property owner", "Property manager", "Resident", "Other"]} />
        <SelectField id="demo-size" label="Portfolio size" value={size} onChange={setSize} options={["1 property", "2–5 properties", "6–20 properties", "21 or more"]} />
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-navy">Markets</legend>
        <div className="flex flex-wrap gap-3">
          {["United States", "Ghana", "Nigeria"].map((market) => (
            <label key={market} className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-3 py-2 text-sm">
              <input type="checkbox" checked={markets.includes(market)} onChange={() => toggleMarket(market)} />
              {market}
            </label>
          ))}
        </div>
        {errors["demo-markets"] ? <p className="mt-1.5 text-sm text-danger">{errors["demo-markets"]}</p> : null}
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-date" className="mb-1.5 block text-sm font-medium text-navy">
            Preferred date
          </label>
          <input id="demo-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className={inputClass} />
        </div>
        <SelectField id="demo-window" label="Time of day" value={windowTime} onChange={setWindowTime} options={["Morning", "Afternoon", "Evening"]} />
      </div>
      <TextArea id="demo-notes" label="What should we cover?" value={notes} onChange={setNotes} />
      <button type="submit" className="btn btn-gold justify-self-start">
        Request a demonstration
      </button>
    </form>
  );
}

export function TourForm({ propertyName }: { propertyName: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("In person");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [href, setHref] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next["tour-name"] = "Enter your name.";
    if (!isEmail(email)) next["tour-email"] = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirst(next);
      return;
    }
    setHref(
      mailto(site.email, `Tour request — ${propertyName}`, [
        `Property: ${propertyName}`,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone.trim() || "Not given"}`,
        `Preferred date: ${date || "Flexible"}`,
        `Tour type: ${mode}`,
        "",
        notes.trim() || "No extra notes.",
      ]),
    );
  }

  if (href) {
    return (
      <Ready title="Your tour request is ready." href={href}>
        <p>Email it to the property team. They will confirm whether that date is open.</p>
      </Ready>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <TextField id="tour-name" label="Full name" value={name} onChange={setName} error={errors["tour-name"]} required autoComplete="name" />
      <TextField id="tour-email" label="Email" type="email" value={email} onChange={setEmail} error={errors["tour-email"]} required autoComplete="email" />
      <TextField id="tour-phone" label="Telephone" type="tel" value={phone} onChange={setPhone} autoComplete="tel" />
      <div>
        <label htmlFor="tour-date" className="mb-1.5 block text-sm font-medium text-navy">
          Preferred date
        </label>
        <input id="tour-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className={inputClass} />
      </div>
      <SelectField id="tour-mode" label="Tour type" value={mode} onChange={setMode} options={["In person", "Virtual"]} />
      <TextArea id="tour-notes" label="Notes" value={notes} onChange={setNotes} />
      <button type="submit" className="btn btn-navy">
        Schedule a tour
      </button>
    </form>
  );
}
