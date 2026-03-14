import Link from "next/link";
import Image from "next/image";
import { Database, BarChart3, Code2, FileSpreadsheet, MapPin } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/lib/ui";

const projects = [
  {
    title: "SPY ROI ML Model",
    description: "Forward-return analysis using engineered signals and model evaluation.",
    image: "/images/projects/spy-roi.png",
    href: "https://github.com/hernaninv/SPY-ROI-120d-ML-Model",
  },
  {
    title: "Dynamic Pricing & Quoting Tool (Excel + VBA)",
    description: "BOM-driven costing + bundles + guardrails + PDF/Excel export for a furniture manufacturer.",
    image: "/images/projects/dynamic-pricing.png",
    href: "https://github.com/hernaninv/Furniture_Project",
  },
  {
    title: "Telecom Churn ML",
    description: "Churn prediction with insights on key drivers for retention strategy.",
    image: "/images/projects/telecom-churn.png",
    href: "https://github.com/hernaninv/TelecomChurn-ML-Project",
  },
  {
    title: "Happy Insurance BI",
    description: "Power BI dashboards with star schema modeling and KPI drilldowns.",
    image: "/images/projects/happy-insurance.png",
    href: "https://github.com/hernaninv/HappyInsurance-BI-Project",
  },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
          {/* Left: text */}
          <div>
            <h1 className="text-6xl font-semibold tracking-tight text-slate-900">
              Hernan Aronson
            </h1>

            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 ring-1 ring-blue-200">
              <span className="text-xl font-semibold text-blue-600">
                AI-driven Business & Financial Data Analyst
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              <span>Hod Hasharon, Israel</span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
              Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className={PrimaryButton}>
                View Portfolio
              </Link>
              <Link href="/resume" className={SecondaryButton}>
                Resume
              </Link>
              <Link href="/contact" className={SecondaryButton}>
                Contact
              </Link>
            </div>
          </div>

          {/* Right: photo */}
          <div className="lg:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/60 shadow-card">
              <Image
                src="/images/hernan060126.png"
                alt="Hernan Aronson"
                width={340}
                height={425}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Link href="/portfolio" className="rounded-3xl bg-white p-7 ring-1 ring-slate-200/60 shadow-card shadow-card-hover transition-transform hover:scale-[1.01]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-200">
            <Database size={20} className="text-blue-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">SQL & Analytics</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Data querying, joins, aggregations and KPI-focused analysis to support
            business decisions.
          </p>
        </Link>

        <Link href="/portfolio" className="rounded-3xl bg-white p-7 ring-1 ring-slate-200/60 shadow-card shadow-card-hover transition-transform hover:scale-[1.01]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-200">
            <BarChart3 size={20} className="text-blue-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">BI & Dashboards</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Power BI dashboards with clear storytelling, clean data models and
            stakeholder-ready insights.
          </p>
        </Link>

        <Link href="/portfolio" className="rounded-3xl bg-white p-7 ring-1 ring-slate-200/60 shadow-card shadow-card-hover transition-transform hover:scale-[1.01]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-200">
            <Code2 size={20} className="text-blue-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">Python for Data</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Exploratory data analysis, feature engineering and practical analytics
            workflows.
          </p>
        </Link>

        <Link href="/portfolio" className="rounded-3xl bg-white p-7 ring-1 ring-slate-200/60 shadow-card shadow-card-hover transition-transform hover:scale-[1.01]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-200">
            <FileSpreadsheet size={20} className="text-blue-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">Excel & Automation</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Advanced Excel, VBA and Power Query for financial modeling, data transformation
            and reporting automation — turning complex spreadsheets into reliable business tools.
          </p>
        </Link>
      </section>

      {/* Featured */}
      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
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

        <div className="mt-8 grid w-full auto-rows-fr gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-card shadow-card-hover transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-base text-slate-700">{p.description}</p>
              <div className="relative mt-5 overflow-hidden rounded-xl ring-1 ring-slate-200 aspect-video">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
