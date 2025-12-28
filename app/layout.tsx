import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hernan Aronson | BI & Data Analyst",
  description:
    "BI & Data Analyst specializing in SQL, Python and Power BI. Turning data into clear, actionable business insights.",
};

const navItemClass =
  "block rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white transition";

const navItemActiveClass =
  "bg-white/15 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Nota: sin “active route” para mantenerlo simple (y evitar bugs).
  // Si querés que marque el activo, lo hacemos con usePathname en un Client Component.
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900">
        <div className="min-h-screen lg:flex">
          {/* Sidebar */}
          <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 bg-gradient-to-b from-slate-900 to-blue-950 text-white">
            <div className="flex h-full flex-col px-6 py-8">
              <div className="space-y-1">
                <div className="text-2xl font-semibold tracking-tight">
                  Hernan Aronson
                </div>
                <div className="text-sm font-medium text-slate-200/90">
                  BI & Data Analyst
                </div>
              </div>

              <nav className="mt-10 space-y-2">
                <Link href="/" className={navItemClass}>
                  Home
                </Link>
                <Link href="/portfolio" className={navItemClass}>
                  Portfolio
                </Link>
                <Link href="/resume" className={navItemClass}>
                  Resume
                </Link>
                <Link href="/contact" className={navItemClass}>
                  Contact
                </Link>
              </nav>

              <div className="mt-auto pt-10 text-sm text-slate-200/85">
                <div className="font-semibold">Contact</div>
                <div className="mt-2 space-y-1">
                  <a
                    className="block truncate hover:underline"
                    href="mailto:hernan.ar@alumni.technion.ac.il"
                  >
                    hernan.ar@alumni.technion.ac.il
                  </a>
                  <a className="block truncate hover:underline" href="tel:+972542036164">
                    (+972) 054-203-6164
                  </a>
                  <a
                    className="block truncate hover:underline"
                    href="https://www.linkedin.com/in/hernanaronson/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/hernanaronson
                  </a>
                  <a
                    className="block truncate hover:underline"
                    href="https://github.com/hernaninv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/hernaninv
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 lg:ml-72">
            <div className="min-h-screen bg-gradient-to-b from-slate-200/70 to-slate-100">
              <div className="mx-auto max-w-6xl px-6 py-10 lg:py-12">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
