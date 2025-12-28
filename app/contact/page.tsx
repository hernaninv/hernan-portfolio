export default function ContactPage() {
  return (
    <main className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-gray-600">
          If you’re hiring for BI / Data Analyst roles, I’d love to connect.
        </p>
      </header>

      <section className="rounded-3xl bg-white p-10 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <a
            className="mt-2 inline-block text-blue-600 hover:underline"
            href="mailto:hernan.ar@alumni.technion.ac.il"
          >
            hernan.ar@alumni.technion.ac.il
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold">LinkedIn</h2>
          <a
            className="mt-2 inline-block text-blue-600 hover:underline"
            href="https://www.linkedin.com/in/hernanaronson/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hernanaronson
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold">GitHub</h2>
          <a
            className="mt-2 inline-block text-blue-600 hover:underline"
            href="https://github.com/hernaninv"
            target="_blank"
            rel="noreferrer"
          >
            github.com/hernaninv
          </a>
        </div>
      </section>
    </main>
  );
}
