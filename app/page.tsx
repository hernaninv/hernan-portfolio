import Link from "next/link";

const PrimaryButton =
  "inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        <h1 className="text-6xl font-semibold tracking-tight text-slate-900">
          Hernan Aronson
        </h1>

        <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 ring-1 ring-blue-100">
          <span className="text-xl font-semibold text-blue-800">
            BI & Data Analyst
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
          Turning data into clear, actionable business insights using SQL, Python
          and BI tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/portfolio" className={PrimaryButton}>
            View Portfolio
          </Link>
          <Link href="/resume" className={PrimaryButton}>
            Resume
          </Link>
          <Link href="/contact" className={PrimaryButton}>
            Contact
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/60">
          <h3 className="text-xl font-semibold text-slate-900">SQL & Analytics</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Data querying, joins, aggregations and KPI-focused analysis to support
            business decisions.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/60">
          <h3 className="text-xl font-semibold text-slate-900">BI & Dashboards</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Power BI dashboards with clear storytelling, clean data models and
            stakeholder-ready insights.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/60">
          <h3 className="text-xl font-semibold text-slate-900">Python for Data</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Exploratory data analysis, feature engineering and practical analytics
            workflows.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-700">
              Selected projects focused on BI, analytics and decision support.
            </p>
          </div>

          <Link href="/portfolio" className={PrimaryButton}>
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-semibold text-slate-900">SPY ROI ML Model</h3>
            <p className="mt-3 text-base text-slate-700">
              Forward-return analysis using engineered signals and model evaluation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-semibold text-slate-900">Telecom Churn ML</h3>
            <p className="mt-3 text-base text-slate-700">
              Churn prediction with insights on key drivers for retention strategy.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-semibold text-slate-900">Happy Insurance BI</h3>
            <p className="mt-3 text-base text-slate-700">
              Power BI dashboards with star schema modeling and KPI drilldowns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
