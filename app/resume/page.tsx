export default function ResumePage() {
  return (
    <main className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="max-w-2xl text-gray-600">
          Download my resume or view a brief professional summary below.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-10 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Profile</h2>
          <p className="mt-2 max-w-3xl text-gray-700">
            BI & Data Analyst with a strong analytical background, focused on
            transforming raw data into clear, actionable business insights using
            SQL, Python and BI tools.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Core Skills</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
            <li>SQL querying, joins and KPI reporting</li>
            <li>Power BI dashboards, DAX and data modeling</li>
            <li>Python for data analysis (EDA, Pandas)</li>
            <li>Advanced Excel and reporting automation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Download</h2>
          <a
            href="/resume.pdf"
            className="mt-3 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:opacity-95"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
