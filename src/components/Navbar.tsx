"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

interface DropdownItem { label: string; href: string }
interface NavSection   { label: string; items: DropdownItem[] }

const navSections: Record<string, NavSection> = {
  nosotros: {
    label: "Nosotros",
    items: [
      { label: "Quiénes Somos",        href: "/nosotros" },
      { label: "Alianzas Estratégicas", href: "#socios"   },
      { label: "Eventos",              href: "#blog"     },
      { label: "Prensa",               href: "#blog"     },
    ],
  },
  soluciones: {
    label: "Soluciones",
    items: [
      { label: "Internet Dedicado",          href: "/soluciones/internet-dedicado" },
      { label: "Internet Pyme",              href: "/soluciones/internet-pyme" },
      { label: "Internet Eventos",           href: "/soluciones/internet-eventos" },
      { label: "Internet Satelital",         href: "/soluciones/internet-satelital" },
      { label: "Alta Disponibilidad",        href: "/soluciones/alta-disponibilidad" },
      { label: "SD-WAN",                     href: "/soluciones/sd-wan" },
      { label: "Comunicaciones Unificadas",  href: "/soluciones/comunicaciones-unificadas" },
      { label: "Red WiFi",                   href: "/soluciones/red-wifi" },
      { label: "Servicios Tic's",            href: "/soluciones/servicios-tics" },
      { label: "Ciberseguridad",             href: "/soluciones/servicios-tics" },
      { label: "Video Vigilancia",           href: "/soluciones/video-vigilancia" },
      { label: "Data Centers",              href: "/soluciones/data-centers" },
    ],
  },
  soporte: {
    label: "Soporte",
    items: [
      { label: "Preguntas Frecuentes", href: "#faq"      },
      { label: "Reportar Incidente",   href: "#contacto" },
    ],
  },
  comunidad: {
    label: "Comunidad",
    items: [
      { label: "Partners",        href: "/comunidad/partners" },
      { label: "Blog",            href: "#blog"               },
      { label: "Casos de Éxito", href: "#casos"              },
    ],
  },
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileSection, setMobileSection]   = useState<string | null>(null);
  const [scrolled, setScrolled]             = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top micro-bar ── */}
      <div className="w-full bg-[#03008a] py-1 px-6 flex justify-end items-center gap-6 text-[11px] text-blue-200 z-50">
        <a href="tel:8002245999" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone className="w-3 h-3" /> 800-224-5999
        </a>
        <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-1.5 hover:text-white transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> WhatsApp
        </a>
      </div>

      {/* ── Main header ── */}
      <header className={`fixed left-0 z-40 w-full transition-all duration-300 border-b ${
        scrolled
          ? "top-0 bg-[var(--blue-primary)]/95 backdrop-blur-md shadow-lg border-white/10"
          : "top-[24px] bg-transparent border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-wider text-white select-none shrink-0">
            huus
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {Object.entries(navSections).map(([key, section]) => (
              <div key={key} className="relative py-5"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white cursor-pointer transition-colors">
                  {section.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 rounded-xl glass-card shadow-2xl py-2 transition-all duration-200 origin-top ${
                  key === "soluciones" ? "w-[480px]" : "w-56"
                } ${
                  activeDropdown === key ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}>
                  <div className={key === "soluciones" ? "grid grid-cols-2 gap-x-2" : ""}>
                    {section.items.map((item, i) => (
                      <Link key={i} href={item.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                        onClick={() => setActiveDropdown(null)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="#contacto"
              className="border border-cyan-400 text-cyan-400 text-sm font-semibold px-5 py-2 rounded-full hover:bg-cyan-400 hover:text-[#0500c8] transition-all duration-200 cursor-pointer">
              Cotiza Aquí
            </Link>
            {/* Hamburger icon (desktop hides) */}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} />

        <div className={`absolute right-0 top-0 bottom-0 w-80 bg-[#0500c8] flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
            <span className="text-xl font-black text-white">huus</span>
            <button onClick={() => setMobileOpen(false)} className="text-white cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
            {Object.entries(navSections).map(([key, section]) => (
              <div key={key} className="border-b border-white/10 pb-2">
                <button onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  className="w-full flex justify-between items-center py-3 text-white font-medium cursor-pointer">
                  {section.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === key ? "rotate-180" : ""}`} />
                </button>
                {mobileSection === key && (
                  <div className="pl-4 pb-2 flex flex-col gap-2">
                    {section.items.map((item, i) => (
                      <Link key={i} href={item.href}
                        className="text-sm text-blue-200 hover:text-white py-1 transition-colors"
                        onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="p-6 border-t border-white/10">
            <Link href="#contacto" onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-cyan-400 text-[#0500c8] font-bold py-3 rounded-full hover:bg-cyan-300 transition-colors">
              Cotiza Aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
