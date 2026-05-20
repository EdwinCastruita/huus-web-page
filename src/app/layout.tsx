import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huus – Conectando en Cualquier Lugar | Internet Dedicado y Ciberseguridad",
  description:
    "Internet dedicado, alta disponibilidad y seguridad empresarial con monitoreo 24/7/365. Diseñamos tu red para que tu operación siga corriendo, pase lo que pase.",
  keywords: ["huus", "internet dedicado", "ciberseguridad", "servicios administrados", "NOC 24/7"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
