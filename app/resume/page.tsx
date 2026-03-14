import { PrimaryButton } from "@/lib/ui";

const experience = [
  {
    period: "2020 – 2025",
    role: "Project Data Analyst / Sales Operations Analyst",
    company: "Intelitek Inc. — Rosh HaAyin, Israel",
    bullets: [
      "Provided end-to-end analytical support to Sales and Operations, improving pricing accuracy by ~90% and reducing commercial risk.",
      "Built and maintained financial and operational KPI frameworks for monthly and quarterly management reviews.",
      "Supported financial forecasting and planning, aligning sales projections with operational capacity and budgets.",
    ],
  },
  {
    period: "2016 – 2020",
    role: "Data Analyst & NPI Project Engineer",
    company: "Intelitek Inc. — Rosh HaAyin, Israel",
    bullets: [
      "Supported NPI initiatives bridging R&D, Operations, and Commercial teams, contributing to ~50% reduction in time-to-market.",
      "Designed pricing and quotation tools in Excel, improving pricing accuracy and cost transparency by ~90%.",
      "Analyzed cost structures and BOMs to support margin analysis and profitability planning, increasing profitability by ~10%.",
    ],
  },
  {
    period: "2011 – 2015",
    role: "Sales Ops Analyst & Investment Portfolio Assistant",
    company: "Arnoni Investments S.A.",
    bullets: [
      "Managed daily operations for multiple investment accounts, ensuring regulatory compliance and reducing margin of error by ~50%.",
      "Built automated Excel models for financial performance analysis and KPIs, reducing manual processing time by 50%.",
      "Produced monthly and quarterly performance reports for portfolio managers and senior leadership.",
    ],
  },
];

const technicalSkills = [
  { category: "Business & Analytics", items: ["Excel (Advanced)", "Power Query & Power Pivot", "Power BI", "Tableau"] },
  { category: "Data & Programming", items: ["SQL", "Python", "MongoDB"] },
  { category: "Systems", items: ["Priority ERP", "Salesforce"] },
  { category: "Other", items: ["GitHub", "Data Modeling", "Reporting Automation"] },
];

const education = [
  { degree: "B.Sc. in Mechanical Engineering", institution: "Technion Israel Institute of Technology", period: "2005 – 2010" },
  { degree: "Big Data Analysis Program", institution: "Technion School of Continuing Education", period: "May 2025 – Nov 2025" },
];

const certifications = [
  { title: "Israeli Securities Authority License (\"Professional A\")", issuer: "Meitav Dash College", year: "" },
  { title: "Project Planning & Management", issuer: "Technion Faculty of Industrial Engineering", year: "" },
  { title: "Financial Management in Projects", issuer: "Technion Faculty of Industrial Engineering", year: "" },
];

const languages = [
  { lang: "Spanish", level: "Mother Tongue" },
  { lang: "English", level: "Fluent" },
  { lang: "Hebrew", level: "Fluent" },
  { lang: "Portuguese", level: "Fluent" },
];

export default function ResumePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Resume</h1>
            <p className="mt-2 text-lg text-slate-700">
              Full professional profile — or download the PDF version.
            </p>
          </div>
          <a href="/resume.pdf" className={PrimaryButton} download>
            Download PDF
          </a>
        </div>
      </header>

      {/* Profile */}
      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">Profile</h2>
        <p className="mt-3 text-lg leading-relaxed text-slate-700">
          AI-driven Business & Financial Data Analyst with 10+ years of experience supporting budgeting,
          forecasting, variance analysis, and data-driven decision-making in global organizations.
          Strong background in financial planning, KPI tracking, pricing, and cost structure analysis,
          working closely with Finance, Sales, Operations, and Product stakeholders. Advanced Excel
          expertise complemented by formal training in BI, SQL, Python, and analytics automation.
        </p>
      </section>

      {/* Experience */}
      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">Experience</h2>
        <div className="mt-6 space-y-8">
          {experience.map((job) => (
            <div key={job.role} className="grid gap-2 md:grid-cols-[120px_1fr]">
              <span className="text-sm font-semibold text-blue-600 md:pt-1">{job.period}</span>
              <div>
                <div className="text-lg font-semibold text-slate-900">{job.role}</div>
                <div className="text-sm text-slate-500">{job.company}</div>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills + Education grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Technical Skills */}
        <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Technical Skills</h2>
          <div className="mt-5 space-y-4">
            {technicalSkills.map((group) => (
              <div key={group.category}>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{group.category}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-blue-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
          <div className="mt-5 space-y-5">
            {education.map((edu) => (
              <div key={edu.degree}>
                <div className="text-lg font-semibold text-slate-900">{edu.degree}</div>
                <div className="text-base text-slate-700">{edu.institution}</div>
                <div className="text-sm text-blue-600 font-medium">{edu.period}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Certifications + Languages grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Certifications */}
        <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Certifications</h2>
          <ul className="mt-5 space-y-3">
            {certifications.map((cert) => (
              <li key={cert.title} className="flex gap-3 text-base text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <span>
                  <span className="font-semibold text-slate-900">{cert.title}</span>
                  {cert.issuer && <span className="text-slate-500"> — {cert.issuer}</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Languages</h2>
          <div className="mt-5 space-y-3">
            {languages.map((l) => (
              <div key={l.lang} className="flex items-center justify-between">
                <span className="text-base font-semibold text-slate-900">{l.lang}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{l.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
