import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import MobileNav from "@/components/mobile-nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hernanaronson.com"),
  title: "Hernan Aronson | AI-driven Business & Financial Data Analyst",
  description:
    "Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools.",
  openGraph: {
    title: "Hernan Aronson | AI-driven Business & Financial Data Analyst",
    description:
      "Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools.",
    url: "https://www.hernanaronson.com/",
    siteName: "Hernan Aronson Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hernan Aronson – BI & Data Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hernan Aronson | AI-driven Business & Financial Data Analyst",
    description:
      "Turning data into clear, actionable business insights using SQL, Excel, Python and BI tools.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-slate-100 text-slate-900">
        <MobileNav />

        <div className="min-h-screen lg:flex">
          {/* Desktop sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 lg:ml-72">
            <div className="min-h-screen bg-white">
              <div className="mx-auto max-w-6xl px-6 py-10 lg:py-12">
                {children}
              </div>
            </div>
            <footer className="border-t border-slate-200 bg-slate-50 px-6 py-5">
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
                <span className="text-sm text-slate-500">© 2026 Hernan Aronson. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/hernanaronson/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 hover:text-blue-600 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/hernaninv"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 hover:text-blue-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
