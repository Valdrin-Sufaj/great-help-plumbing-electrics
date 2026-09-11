"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/quote", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setState("sent");
      return;
    }

    const payload = await response.json().catch(() => null);
    setError(payload?.error || "Something went wrong. Please call instead.");
    setState("error");
  }

  return (
    <form
      id="quote"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60"
    >
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#0b5ea8]">
          Request a quote
        </p>
        <h2 className="mt-2 text-2xl font-black text-[#102235] md:text-3xl">
          Send your details and we will contact you
        </h2>
      </div>

      <label className="grid gap-2 text-sm font-bold text-[#102235]">
        Name
        <input
          className="focus-ring min-h-12 rounded-md border border-slate-300 px-4 text-base font-normal"
          name="name"
          autoComplete="name"
          required
        />
      </label>

      <label className="grid gap-2 text-sm font-bold text-[#102235]">
        Phone number
        <input
          className="focus-ring min-h-12 rounded-md border border-slate-300 px-4 text-base font-normal"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </label>

      <label className="grid gap-2 text-sm font-bold text-[#102235]">
        Message
        <textarea
          className="focus-ring min-h-32 rounded-md border border-slate-300 px-4 py-3 text-base font-normal"
          name="message"
          placeholder="Tell us what plumbing or electrical help you need."
          required
        />
      </label>

      <button
        type="submit"
        disabled={state === "sending"}
        className="focus-ring min-h-12 rounded-md bg-[#0b5ea8] px-5 font-black text-white transition hover:bg-[#073f73] disabled:cursor-wait disabled:opacity-70"
      >
        {state === "sending" ? "Sending..." : "Request contact"}
      </button>

      {state === "sent" && (
        <p className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
          Thanks. Your message has been sent.
        </p>
      )}
      {state === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
          {error}
        </p>
      )}
    </form>
  );
}
