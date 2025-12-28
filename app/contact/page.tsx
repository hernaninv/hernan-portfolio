const PrimaryButton =
  "inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition";

function ContactCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) {
  return (
    <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-3 text-base text-slate-700 break-words">{value}</div>

      <div className="mt-5">
        <a href={href} className={PrimaryButton} target="_blank" rel="noreferrer">
          Open →
        </a>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Contact
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          If you’re hiring for BI / Data Analyst roles, I’d love to connect.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        {/* 2x2 grid to avoid overlap */}
        <div className="grid gap-6 md:grid-cols-2">
          <ContactCard
            title="Email"
            value="hernan.ar@alumni.technion.ac.il"
            href="mailto:hernan.ar@alumni.technion.ac.il"
          />
          <ContactCard
            title="Phone"
            value="(+972) 054-203-6164"
            href="tel:+972542036164"
          />
          <ContactCard
            title="LinkedIn"
            value="linkedin.com/in/hernanaronson"
            href="https://www.linkedin.com/in/hernanaronson/"
          />
          <ContactCard
            title="GitHub"
            value="github.com/hernaninv"
            href="https://github.com/hernaninv"
          />
        </div>
      </section>
    </div>
  );
}
