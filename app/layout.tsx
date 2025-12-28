import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hernan Aronson | BI & Data Analyst",
  description:
    "BI & Data Analyst specializing in SQL, Python and Power BI. Turning data into clear, actionable business insights.",
  authors: [{ name: "Hernan Aronson" }],
  openGraph: {
    title: "Hernan Aronson | BI & Data Analyst",
    description:
      "BI & Data Analyst specializing in SQL, Python and Power BI. Turning data into clear, actionable business insights.",
    url: "https://www.hernanaronson.com",
    siteName: "Hernan Aronson Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hernan Aronson | BI & Data Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className="min-h-screen text-gray-800 antialiased">
        <Navbar />

        <main className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}