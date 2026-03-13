"use client";

export default function BackToTop() {
  return (
    <div className="flex justify-center pt-4 pb-2">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
      >
        ↑ Back to top
      </button>
    </div>
  );
}
