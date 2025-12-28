export default function Home() {
  return (
    <main className="space-y-12">
      <section className="rounded-3xl bg-white p-12 shadow-sm">
        <h1 className="text-5xl font-semibold tracking-tight">
          Hernan Aronson
        </h1>

        <h2 className="mt-3 text-lg font-medium text-gray-600">
          BI & Data Analyst
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700">
          Turning data into clear, actionable business insights using SQL, Python
          and BI tools.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">SQL & Analytics</h3>
          <p className="mt-2 text-sm text-gray-600">
            Data querying, joins, aggregations and KPI-focused analysis to support
            business decisions.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">BI & Dashboards</h3>
          <p className="mt-2 text-sm text-gray-600">
            Power BI dashboards with clear storytelling, clean data models and
            stakeholder-ready insights.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Python for Data</h3>
          <p className="mt-2 text-sm text-gray-600">
            Exploratory data analysis, feature engineering and practical analytics
            workflows.
          </p>
        </div>
      </section>
      <section className="rounded-3xl bg-white p-10 shadow-sm">
  <div className="flex items-end justify-between gap-6">
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
      <p className="mt-2 text-sm text-gray-600">
        Selected projects focused on BI, analytics and decision support.
      </p>
    </div>

    <a
      href="/portfolio"
      className="text-sm font-medium text-blue-600 hover:underline"
    >
      View portfolio →
    </a>
  </div>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold">SPY ROI ML Model</h3>
      <p className="mt-2 text-sm text-gray-600">
        Forward-return analysis using engineered signals and model evaluation.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold">Telecom Churn ML</h3>
      <p className="mt-2 text-sm text-gray-600">
        Churn prediction with insights on key drivers for retention strategy.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold">Happy Insurance BI</h3>
      <p className="mt-2 text-sm text-gray-600">
        Power BI dashboards with star schema modeling and KPI drilldowns.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}
