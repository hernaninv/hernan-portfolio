"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/lib/ui";
import FadeIn from "@/components/fade-in";
import TypingText from "@/components/typing-text";

export default function HeroSection() {
  const [startBadge] = useState(true); // starts immediately on mount
  const [startLocation, setStartLocation] = useState(false);
  const [startDesc, setStartDesc] = useState(false);

  return (
    <FadeIn>
      <section className="rounded-3xl bg-white p-10 ring-1 ring-slate-200/60 shadow-card">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
          {/* Left: text */}
          <div>
            <h1 className="text-6xl font-semibold tracking-tight text-slate-900">
              Hernan Aronson
            </h1>

            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-4 py-2 ring-1 ring-blue-200">
              <span
                className="text-xl font-semibold text-blue-600"
                aria-label="AI-driven Business & Financial Data Analyst"
                aria-live="polite"
              >
                <TypingText
                  text="AI-driven Business & Financial Data Analyst"
                  start={startBadge}
                  speed={40}
                  onDone={() => setStartLocation(true)}
                />
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              <span
                aria-label="Hod Hasharon, Israel"
                aria-live="polite"
              >
                <TypingText
                  text="Hod Hasharon, Israel"
                  start={startLocation}
                  speed={40}
                  onDone={() => setStartDesc(true)}
                />
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
              <span
                aria-label="Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools."
                aria-live="polite"
              >
                <TypingText
                  text="Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools."
                  start={startDesc}
                  speed={30}
                />
              </span>
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
    </FadeIn>
  );
}
