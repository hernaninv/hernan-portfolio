import { PrimaryButtonSm as PrimaryButton } from "@/lib/ui";
import ContactForm from "@/components/contact-form";
import BackToTop from "@/components/back-to-top";

function ContactCard({
  title,
  value,
  href,
  buttonLabel,
}: {
  title: string;
  value: string;
  href: string;
  buttonLabel: string;
}) {
  const isExternal =
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200 shadow-card shadow-card-hover">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-3 text-base text-slate-700 break-words">{value}</div>

      <div className="mt-5">
        <a
          href={href}
          className={PrimaryButton}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {buttonLabel} →
        </a>
      </div>
    </div>
  );
}


export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Contact
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Feel free to reach out — whether it's about a project, a collaboration, or just to connect.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        {/* 2x2 grid to avoid overlap */}
        <div className="grid gap-6 md:grid-cols-2">
          <ContactCard
            title="Email"
            value="hernan.ar@alumni.technion.ac.il"
            href="mailto:hernan.ar@alumni.technion.ac.il"
            buttonLabel="Send"
          />

          <ContactCard
            title="LinkedIn"
            value="linkedin.com/in/hernanaronson"
            href="https://www.linkedin.com/in/hernanaronson/"
            buttonLabel="Open"
          />
        </div>
      </section>

      <ContactForm />
      <BackToTop />
    </div>
  );
}
