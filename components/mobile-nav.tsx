"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/games", label: "Games" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 bg-gradient-to-r from-slate-900 to-blue-950 px-5 py-3 lg:hidden">
      <Link href="/" className="shrink-0 text-base font-semibold text-white hover:text-slate-200 transition">Hernan Aronson</Link>
      <nav className="flex gap-1 overflow-x-auto text-sm font-medium text-slate-200 scrollbar-none">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "shrink-0 rounded-lg px-3 py-1.5 transition",
                active
                  ? "bg-white/20 text-white"
                  : "hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
