"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, FileText, Gamepad2, Mail, Linkedin, Github } from "lucide-react";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/games", label: "Games", icon: Gamepad2 },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col bg-gradient-to-b from-slate-950 to-blue-950 px-7 py-8 text-white lg:flex">
      <div>
        <Link href="/" className="inline-flex items-center gap-3">
          <img
            src="/brand/logo-mark.svg"
            alt="Hernan Aronson logo"
            className="h-10 w-10 drop-shadow-[0_10px_18px_rgba(0,0,0,0.35)]"
          />
          <div>
            <div className="text-2xl font-semibold tracking-tight">Hernan Aronson</div>
            <div className="mt-1 text-lg text-slate-200">AI-driven Data Analyst</div>
          </div>
        </Link>
      </div>

      <nav className="mt-10 space-y-3">
        {nav.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-lg font-semibold transition",
                active
                  ? "bg-white/12 ring-1 ring-white/20 text-white"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              <Icon
                size={20}
                className={active ? "text-white" : "text-slate-400"}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center gap-4 pt-8 border-t border-white/10">
        <a
          href="https://www.linkedin.com/in/hernanaronson/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/hernaninv"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
      </div>
    </aside>
  );
}
