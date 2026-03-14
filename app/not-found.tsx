import Link from "next/link";
import { PrimaryButton } from "@/lib/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="rounded-3xl bg-white p-12 ring-1 ring-slate-200/60 shadow-card text-center max-w-md w-full">
        <div className="text-6xl font-semibold tracking-tight text-slate-900">404</div>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-3 text-base text-slate-700">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/" className={PrimaryButton}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
