"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col bg-gradient-to-b from-slate-950 to-blue-950 px-7 py-8 text-white lg:flex">
      <div>
        <Link href="/" className="inline-flex items-center gap-3">
          <img
            src="/brand/img1.svg"
            alt="Logo"
            className="h-10 w-10 border border-red-500"
          />
          <div>
            <div className="text-2xl font-semibold tracking-tight">Hernan Aronson</div>
            <div className="mt-1 text-lg text-slate-200">BI & Data Analyst</div>
          </div>
        </Link>
      </div>

      <nav className="mt-10 space-y-3">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block w-full rounded-2xl px-5 py-4 text-lg font-semibold transition",
                active
                  ? "bg-white/12 ring-1 ring-white/20"
                  : "bg-white/0 hover:bg-white/10",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pb-6">
        <div className="text-sm font-semibold text-slate-200">Contact</div>
        <div className="mt-3 space-y-2 text-sm text-slate-200">
          <a className="block hover:underline" href="mailto:hernan.ar@alumni.technion.ac.il">
            hernan.ar@alumni.technion.ac.il
          </a>
          <a className="block hover:underline" href="tel:+972542036164">
            (+972) 054-203-6164
          </a>
          <a
            className="block hover:underline"
            href="https://www.linkedin.com/in/hernanaronson"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/hernanaronson
          </a>
          <a
            className="block hover:underline"
            href="https://github.com/hernaninv"
            target="_blank"
            rel="noreferrer"
          >
            github.com/hernaninv
          </a>
        </div>
      </div>
    </aside>
  );
}
