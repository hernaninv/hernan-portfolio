const PrimaryButton =
  "inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition";

function ProjectCard({
  title,
  objective,
  tags,
  bullets,
  href,
}: {
  title: string;
  objective: string;
  tags: string[];
  bullets: string[];
  href: string;
}) {
  return (
    <div className="relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
      {/* Button always top-right */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${PrimaryButton} absolute right-6 top-6`}
      >
        View on GitHub →
      </a>

      <h2 className="pr-28 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-base text-slate-700">
        <span className="font-semibold text-slate-900">Objective:</span>{" "}
        {objective}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 ring-1 ring-blue-100"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2 text-base text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200/60">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Portfolio
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">
          Selected projects focused on BI, analytics and decision support. Each
          project includes objective, tech stack and highlights.
        </p>
      </header>

      <div className="grid gap-6">
        <ProjectCard
          title="SPY ROI ML Model"
          objective="Analyze forward returns based on technical signals and evaluate predictive strength."
          tags={["Python", "Pandas", "Scikit-learn"]}
          bullets={[
            "Feature engineering on historical market data",
            "Evaluation across multiple horizons",
            "Clear interpretation of results for decision-making",
          ]}
          href="https://github.com/hernaninv"
        />

        <ProjectCard
          title="Telecom Churn ML"
          objective="Predict churn and identify key drivers to support retention strategies."
          tags={["Python", "Pandas", "Scikit-learn"]}
          bullets={[
            "EDA and data cleaning workflow",
            "Model comparison using standard metrics",
            "Insights on key churn drivers",
          ]}
          href="https://github.com/hernaninv"
        />

        <ProjectCard
          title="Happy Insurance BI"
          objective="Build BI dashboards for KPIs, trends and operational visibility."
          tags={["Power BI", "DAX", "Data Modeling"]}
          bullets={[
            "Star schema modeling and KPI drilldowns",
            "Clean dashboard layout with narrative insights",
            "Focus on stakeholder usability and clarity",
          ]}
          href="https://github.com/hernaninv"
        />
      </div>
    </div>
  );
}
