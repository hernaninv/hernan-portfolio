"use client";

import { useState } from "react";
import { PrimaryButton } from "@/lib/ui";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xvzwrkdk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
      <h2 className="text-2xl font-semibold text-slate-900">Send me a message</h2>
      <p className="mt-2 text-base text-slate-700">
        Fill out the form and I'll get back to you as soon as possible.
      </p>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl bg-green-50 p-6 ring-1 ring-green-100 text-green-800">
          <p className="font-semibold">Message sent!</p>
          <p className="mt-1 text-sm">Thanks for reaching out. I'll reply shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Hi Hernan, I'd like to connect about..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600">Something went wrong. Please try again or email me directly.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className={`${PrimaryButton} disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
