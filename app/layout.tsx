import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROUTE PORTAL — Optimising Vehicle Collection for CarPlanet",
  description: "An interactive product case study and optimization concept demonstrating operational cost reduction in multi-car vehicle collection.",
  keywords: ["Route Portal", "CarPlanet", "Vehicle Collection Optimization", "Operations Research", "Logistics", "Product Concept"],
  authors: [{ name: "Mehivish" }],
  openGraph: {
    title: "ROUTE PORTAL — Optimising Vehicle Collection for CarPlanet",
    description: "Interactive product demo showing how an optimisation engine reduces vehicle collection cost and paid driver hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#08090D] text-slate-100 selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
