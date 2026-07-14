import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huus – Internet Dedicado y Ciberseguridad Empresarial en México",
  description:
    "Conectividad dedicada, alta disponibilidad y seguridad empresarial con monitoreo NOC 24/7/365. Cobertura nacional con fibra dedicada. Diseñamos tu red para que tu operación siga corriendo, pase lo que pase.",
  keywords: ["huus", "internet dedicado", "ciberseguridad", "servicios administrados", "NOC 24/7", "fibra dedicada", "SD-WAN", "México"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
