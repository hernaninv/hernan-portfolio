"use client";

import { useState, useEffect } from "react";

export default function ScrollButtons() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 100);
      setShowDown(
        Math.abs(window.scrollY + window.innerHeight - document.body.scrollHeight) >= 2
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set correct initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const btnBase =
    "flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white shadow-md transition-opacity duration-200";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <button
        aria-label="Scroll to top"
        tabIndex={showUp ? 0 : -1}
        className={`${btnBase} ${showUp ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span aria-hidden="true">↑</span>
      </button>
      <button
        aria-label="Scroll to bottom"
        tabIndex={showDown ? 0 : -1}
        className={`${btnBase} ${showDown ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        <span aria-hidden="true">↓</span>
      </button>
    </div>
  );
}
