const PrimaryButton =
  "inline-flex items-center justify-center rounded-xl bg-blue-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Resume
        </h1>
        <p className="mt-3 text-lg text-slate-700">
          Download my resume or view a brief professional summary below.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        <h2 className="text-2xl font-semibold text-slate-900">Profile</h2>
        <p className="mt-3 text-lg leading-relaxed text-slate-700">
          BI & Data Analyst with a strong analytical background, focused on
          transforming raw data into clear, actionable business insights using
          SQL, Python and BI tools.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">Core Skills</h2>
        <ul className="mt-4 space-y-2 text-lg text-slate-700">
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-900" />
            SQL querying, joins and KPI reporting
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-900" />
            Power BI dashboards, DAX and data modeling
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-900" />
            Python for data analysis (EDA, Pandas)
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-900" />
            Advanced Excel and reporting automation
          </li>
        </ul>

        <div className="mt-10">
          <a href="/resume.pdf" className={PrimaryButton}>
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
