import Image from "next/image";
import { PrimaryButtonSm } from "@/lib/ui";

function ProjectCard({
  title,
  objective,
  tags,
  bullets,
  href,
  image,
}: {
  title: string;
  objective: string;
  tags: string[];
  bullets: string[];
  href: string;
  image: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200/60 shadow-card shadow-card-hover transition-transform hover:scale-[1.01]">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
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
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-blue-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        {/* Bullets */}
        <ul className="space-y-2 text-base text-slate-700">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 aspect-video">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-6">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={PrimaryButtonSm}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <header className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          {/* Texto */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Portfolio
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-slate-700">
              Selected projects focused on BI, analytics and decision support. Each
              project includes objective, tech stack and highlights.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200/60 shadow-card">
            <Image
              src="/images/portfolio/portfolio-hero.png"
              alt="Analytics dashboards and charts illustration"
              width={720}
              height={420}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </header>

      <div className="grid gap-6">
        <ProjectCard
          title="SPY ROI ML Model"
          objective="Machine learning model to estimate the probability that the S&P 500 Index will achieve a 6-month forward return greater than +5%. The project includes full feature engineering, model training, evaluation, interpretation, and reproducibility steps."
          tags={["Python", "Pandas", "Scikit-learn"]}
          bullets={[
            "Feature engineering on historical market data",
            "Evaluation across multiple horizons",
            "Clear interpretation of results for decision-making",
          ]}
          image="/images/projects/spy-roi.png"
          href="https://github.com/hernaninv/SPY-ROI-120d-ML-Model"
        />

        <ProjectCard
          title="Dynamic Pricing & Quoting Tool (Excel + VBA)"
          objective="BOM-driven costing + bundles + guardrails + PDF/Excel export for a furniture manufacturer."
          tags={["Advanced Excel", "VBA Code", "Power Query", "Macros"]}
          bullets={[
            "Designed a relational model: Parts → Products (BOM) → Bundles → Price List",
            "Built quote workflow with validations (no decimals, no zero-price, no empty bundles)",
            "Implemented UI hierarchy (top-level vs child lines) to prevent pricing confusion",
            "Exported print-ready PDF (1 page wide) + clean Excel (.xlsx values-only)",
          ]}
          image="/images/projects/dynamic-pricing.png"
          href="https://github.com/hernaninv/Furniture_Project"
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
          image="/images/projects/telecom-churn.png"
          href="https://github.com/hernaninv/TelecomChurn-ML-Project"
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
          image="/images/projects/happy-insurance.png"
          href="https://github.com/hernaninv/HappyInsurance-BI-Project"
        />
      </div>
    </div>
  );
}
