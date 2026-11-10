"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { TextArea, TextField, SelectField } from "@/components/Forms";
import { mailto, site } from "@/lib/site";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function LoginForm() {
  const params = useSearchParams();
  const initialRole = params.get("role") === "resident" ? "Resident" : "Property manager";
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!isEmail(email)) next["login-email"] = "Enter the email on your CoHab OS account.";
    if (password.length < 8) next["login-password"] = "Enter your password. It stays in this browser and is not sent.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    setPassword("");
    setDone(true);
  }

  if (done) {
    return (
      <div role="status" className="rounded-2xl border border-navy/10 bg-ivory p-6">
        <h2 className="font-serif text-3xl text-navy">Sign-in is not connected yet.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your password was cleared and was not sent anywhere. When CoHab OS authentication is live, this form will open
          the {role === "Resident" ? "resident" : "property manager"} workspace. Until then, book a demo or ask for access.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact#demo" className="btn btn-navy">
            Book a demo
          </Link>
          <Link href="/get-started" className="btn btn-ghost">
            Create an account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <SelectField id="login-role" label="I am signing in as" value={role} onChange={setRole} options={["Property manager", "Resident"]} />
      <TextField id="login-email" label="Email" type="email" value={email} onChange={setEmail} error={errors["login-email"]} required autoComplete="username" />
      <TextField
        id="login-password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        error={errors["login-password"]}
        required
        autoComplete="current-password"
      />
      <p className="text-sm leading-relaxed text-muted">
        Login will connect to the CoHab OS platform when authentication is implemented. This page does not create a session.
      </p>
      <button type="submit" className="btn btn-navy justify-self-start">
        Continue
      </button>
    </form>
  );
}

export function RegisterForm() {
  const params = useSearchParams();
  const requested = params.get("role") === "resident" ? "Resident" : "Property manager";
  const plan = params.get("plan");
  const [role, setRole] = useState(requested);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [size, setSize] = useState("1 property");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("Looking for a home");
  const [notes, setNotes] = useState(plan ? `Interested in the ${plan} plan.` : "");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [href, setHref] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next["reg-name"] = "Enter your name.";
    if (!isEmail(email)) next["reg-email"] = "Enter a valid email address.";
    if (role === "Property manager" && company.trim().length < 2) next["reg-company"] = "Enter a company or “Independent”.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    const lines = [
      `Role: ${role}`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim() || "Not given"}`,
    ];
    if (role === "Property manager") {
      lines.push(`Company: ${company.trim()}`, `Portfolio: ${size}`);
    } else {
      lines.push(`City: ${city.trim() || "Not given"}`, `Status: ${status}`);
    }
    if (notes.trim()) lines.push("", notes.trim());
    setHref(mailto(site.email, `Account request — ${role}`, lines));
  }

  if (href) {
    return (
      <div role="status" className="rounded-2xl border border-sage/20 bg-[#eef4f0] p-6">
        <h2 className="font-serif text-3xl text-navy">Your access request is ready.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          You will choose a password inside CoHab OS when the account is opened. This website never asks for one. Email
          the request and the team will connect it to the platform.
        </p>
        <a href={href} className="btn btn-navy mt-6">
          Email this request
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <SelectField id="reg-role" label="Account type" value={role} onChange={setRole} options={["Property manager", "Resident"]} />
      <TextField id="reg-name" label="Full name" value={name} onChange={setName} error={errors["reg-name"]} required autoComplete="name" />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="reg-email" label="Email" type="email" value={email} onChange={setEmail} error={errors["reg-email"]} required autoComplete="email" />
        <TextField id="reg-phone" label="Telephone" type="tel" value={phone} onChange={setPhone} autoComplete="tel" />
      </div>
      {role === "Property manager" ? (
        <>
          <TextField id="reg-company" label="Company" value={company} onChange={setCompany} error={errors["reg-company"]} required autoComplete="organization" />
          <SelectField id="reg-size" label="Portfolio size" value={size} onChange={setSize} options={["1 property", "2–5 properties", "6–20 properties", "21 or more"]} />
        </>
      ) : (
        <>
          <TextField id="reg-city" label="City you are interested in" value={city} onChange={setCity} placeholder="Accra, Lagos, Austin…" />
          <SelectField id="reg-status" label="I am" value={status} onChange={setStatus} options={["Looking for a home", "Already a resident", "Moving soon"]} />
        </>
      )}
      <TextArea id="reg-notes" label="Anything we should know?" value={notes} onChange={setNotes} />
      <p className="text-sm leading-relaxed text-muted">
        Registration will create a CoHab OS account when authentication is connected. Until then, this form prepares an
        access request. Passwords are set in the product, not here.
      </p>
      <button type="submit" className="btn btn-gold justify-self-start">
        Request an account
      </button>
    </form>
  );
}

export function AuthAside({ title, lede }: { title: string; lede: string }) {
  return (
    <div className="bg-navy px-6 py-14 text-paper sm:px-10 lg:px-14 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">CoHab OS platform</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{lede}</p>
      <ul className="mt-8 space-y-3 text-sm text-mist">
        <li>Property manager registration opens the operator workspace.</li>
        <li>Resident login opens the home, once an account exists.</li>
        <li>Dashboards, payments, and maintenance stay in the product.</li>
      </ul>
      <Link href="/contact#demo" className="mt-8 inline-block text-sm font-semibold text-gold-soft underline underline-offset-4">
        Prefer a walkthrough first? Book a demo.
      </Link>
    </div>
  );
}
