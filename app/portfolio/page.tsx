const projects = [
  {
    title: "SPY ROI ML Model",
    objective:
      "Analyze forward returns based on technical signals and evaluate predictive strength.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    highlights: [
      "Feature engineering on historical market data",
      "Evaluation across multiple horizons",
      "Clear interpretation of results for decision-making",
    ],
    link: "https://github.com/hernaninv",
  },
  {
    title: "Telecom Churn ML",
    objective:
      "Predict churn and identify key drivers to support retention strategies.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    highlights: [
      "EDA and data cleaning workflow",
      "Model comparison using standard metrics",
      "Insights on key churn drivers",
    ],
    link: "https://github.com/hernaninv",
  },
  {
    title: "Happy Insurance BI",
    objective:
      "Build BI dashboards for KPIs, trends and operational visibility.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    highlights: [
      "Star schema design for reporting",
      "KPI dashboards and drilldowns",
      "Stakeholder-ready layout and UX",
    ],
    link: "https://github.com/hernaninv",
  },
];

export default function PortfolioPage() {
  return (
    <main className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
        <p className="max-w-2xl text-gray-600">
          Selected projects focused on BI, analytics and decision support. Each
          project includes objective, tech stack and highlights.
        </p>
      </header>

      <section className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-3xl bg-white p-10 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-gray-600">
                  <span className="font-medium text-gray-800">Objective: </span>
                  {p.objective}
                </p>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View on GitHub →
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-gray-700">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
