"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1200,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(Math.round((value * current) / steps));
      if (current >= steps) {
        clearInterval(interval);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <div className="text-5xl font-bold text-blue-600">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
