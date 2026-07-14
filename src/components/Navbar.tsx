"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Zap, Globe, Shield, Monitor, Server, Smartphone, Wifi, Video, Cloud, Radio } from "lucide-react";

interface DropdownItem { label: string; href: string; icon?: React.ReactNode; description?: string }
interface NavSection   { label: string; items: DropdownItem[] }

const navSections: Record<string, NavSection> = {
  nosotros: {
    label: "Nosotros",
    items: [
      { label: "Quiénes Somos",        href: "/nosotros",   icon: <Globe className="w-4 h-4" />,   description: "Nuestra historia y misión" },
      { label: "Alianzas Estratégicas", href: "#socios",    icon: <Zap className="w-4 h-4" />,     description: "Partners tecnológicos" },
      { label: "Eventos",              href: "#blog",        icon: <Radio className="w-4 h-4" />,   description: "Próximos eventos" },
      { label: "Prensa",               href: "#blog",        icon: <Monitor className="w-4 h-4" />, description: "Sala de prensa" },
    ],
  },
  soluciones: {
    label: "Soluciones",
    items: [
      { label: "Internet Dedicado",         href: "/soluciones/internet-dedicado",        icon: <Wifi className="w-4 h-4" />,       description: "Fibra simétrica empresarial" },
      { label: "Internet Pyme",             href: "/soluciones/internet-pyme",            icon: <Globe className="w-4 h-4" />,       description: "Para empresas en crecimiento" },
      { label: "Internet Eventos",          href: "/soluciones/internet-eventos",         icon: <Radio className="w-4 h-4" />,       description: "Redes temporales de alta capacidad" },
      { label: "Internet Satelital",        href: "/soluciones/internet-satelital",       icon: <Zap className="w-4 h-4" />,         description: "Cobertura donde la fibra no llega" },
      { label: "Alta Disponibilidad",       href: "/soluciones/alta-disponibilidad",      icon: <Shield className="w-4 h-4" />,       description: "Failover automático < 50ms" },
      { label: "SD-WAN",                    href: "/soluciones/sd-wan",                   icon: <Server className="w-4 h-4" />,       description: "Red inteligente definida por software" },
      { label: "Comunicaciones Unificadas", href: "/soluciones/comunicaciones-unificadas",icon: <Phone className="w-4 h-4" />,       description: "Voz, video y colaboración" },
      { label: "Red WiFi",                  href: "/soluciones/red-wifi",                 icon: <Wifi className="w-4 h-4" />,         description: "Cobertura inalámbrica total" },
      { label: "Ciberseguridad",            href: "/soluciones/servicios-tics",           icon: <Shield className="w-4 h-4" />,       description: "NGFW, Anti-DDoS y Zero-Trust" },
      { label: "Video Vigilancia",          href: "/soluciones/video-vigilancia",         icon: <Video className="w-4 h-4" />,        description: "CCTV IP gestionado" },
      { label: "Data Centers",             href: "/soluciones/data-centers",             icon: <Cloud className="w-4 h-4" />,        description: "Colocation y cloud privado" },
      { label: "Servicios TIC's",           href: "/soluciones/servicios-tics",           icon: <Monitor className="w-4 h-4" />,      description: "Gestión completa de TI" },
    ],
  },
  soporte: {
    label: "Soporte",
    items: [
      { label: "Preguntas Frecuentes", href: "#faq",      icon: <Zap className="w-4 h-4" />,    description: "Respuestas rápidas" },
      { label: "Reportar Incidente",   href: "#contacto", icon: <Shield className="w-4 h-4" />, description: "Contacta nuestro NOC 24/7" },
    ],
  },
  comunidad: {
    label: "Comunidad",
    items: [
      { label: "Partners",        href: "/comunidad/partners", icon: <Smartphone className="w-4 h-4" />, description: "Únete al ecosistema HUUS" },
      { label: "Blog",            href: "#blog",               icon: <Globe className="w-4 h-4" />,      description: "Tendencias y noticias tech" },
      { label: "Casos de Éxito", href: "#casos",              icon: <Zap className="w-4 h-4" />,        description: "Historias de transformación" },
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
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#03005c]/95 backdrop-blur-sm py-1.5 px-6 flex justify-end items-center gap-6 text-[11px] text-blue-200 border-b border-white/5">
        <a href="tel:8002245999" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors duration-200">
          <Phone className="w-3 h-3 text-cyan-400" /> 800-224-5999
        </a>
        <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors duration-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          WhatsApp
        </a>
      </div>

      {/* ── Main header ── */}
      <header className={`fixed left-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "top-[28px] bg-[#03008a]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/8"
          : "top-[28px] bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="relative group shrink-0">
            <span className="text-2xl font-black tracking-wider text-gradient-primary select-none">
              huus
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {Object.entries(navSections).map(([key, section]) => (
              <div key={key} className="relative py-5"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  activeDropdown === key
                    ? "text-white bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/8"
                }`}>
                  {section.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === key ? "rotate-180 text-cyan-400" : ""}`} />
                </button>

                {/* Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 rounded-2xl glass-card shadow-[0_24px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] py-3 transition-all duration-250 origin-top ${
                  key === "soluciones" ? "w-[560px]" : "w-64"
                } ${
                  activeDropdown === key ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}>
                  {/* Gradient top line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                  <div className={key === "soluciones" ? "grid grid-cols-2 gap-x-1 px-2" : "px-2"}>
                    {section.items.map((item, i) => (
                      <Link key={i} href={item.href}
                        className="group/item flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/8 transition-all duration-150"
                        onClick={() => setActiveDropdown(null)}>
                        {item.icon && (
                          <span className="text-white/30 group-hover/item:text-cyan-400 transition-colors duration-200 mt-0.5 shrink-0">
                            {item.icon}
                          </span>
                        )}
                        <div>
                          <div className="text-sm text-white/85 group-hover/item:text-white font-medium transition-colors duration-150 leading-tight">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-[11px] text-white/35 group-hover/item:text-white/55 mt-0.5 transition-colors">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right side CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#contacto"
              className="relative overflow-hidden group border border-cyan-400/60 text-cyan-400 text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Cotiza Aquí</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} />

        <div className={`absolute right-0 top-0 bottom-0 w-[320px] flex flex-col transition-transform duration-350 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ background: "linear-gradient(180deg, #030089 0%, #050540 100%)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Drawer header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
            <span className="text-xl font-black text-gradient-primary">huus</span>
            <button onClick={() => setMobileOpen(false)} className="text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
            {Object.entries(navSections).map(([key, section]) => (
              <div key={key} className="rounded-xl overflow-hidden">
                <button onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    mobileSection === key ? "bg-white/12 text-white" : "text-white/75 hover:text-white hover:bg-white/8"
                  }`}>
                  {section.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSection === key ? "rotate-180 text-cyan-400" : ""}`} />
                </button>
                {mobileSection === key && (
                  <div className="px-3 pb-2 mt-1 flex flex-col gap-1">
                    {section.items.map((item, i) => (
                      <Link key={i} href={item.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/8 transition-all duration-150"
                        onClick={() => setMobileOpen(false)}>
                        {item.icon && <span className="text-cyan-400/70">{item.icon}</span>}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="p-5 border-t border-white/10 space-y-3">
            <Link href="#contacto" onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3.5 rounded-full hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-all duration-300">
              Cotiza Aquí
            </Link>
            <a href="tel:8002245999"
              className="flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-cyan-400" /> 800-224-5999
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
