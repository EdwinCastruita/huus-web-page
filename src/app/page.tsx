"use client";

import React from "react";
import { Globe, Shield, Clock, CheckCircle, ArrowRight, Zap } from "lucide-react";
import SolutionsGrid from "@/components/SolutionsGrid";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessCases from "@/components/SuccessCases";
import BlogGrid from "@/components/BlogGrid";
import Partners from "@/components/Partners";
import HeroOrbCanvas from "@/components/HeroOrbCanvas";

const trustBadges = [
  { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, label: "99.9% Uptime SLA" },
  { icon: <Clock className="w-4 h-4 text-cyan-400" />,          label: "NOC 24/7/365" },
  { icon: <Globe className="w-4 h-4 text-blue-400" />,           label: "Cobertura Nacional" },
  { icon: <Shield className="w-4 h-4 text-violet-400" />,        label: "Anti-DDoS incluido" },
];

export default function Home() {
  return (
    <div className="w-full">

      {/* ═══════════════════════════════════════
          1. HERO — deep dark-blue + orb
      ════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] bg-gradient-to-b from-[#00041a] via-[#020b6e] to-[#0026ff] flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-32 pb-24">

        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Radial highlights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.25),transparent_50%),radial-gradient(ellipse_at_15%_30%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(ellipse_at_85%_25%,rgba(217,70,239,0.12),transparent_40%)]" />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />
          {/* Binary code ambiance */}
          <div className="absolute inset-0 opacity-[0.10] mix-blend-screen overflow-hidden">
            <div className="absolute top-[10%] left-[5%] text-[9px] font-mono text-cyan-400 leading-loose rotate-12 select-none">
              10110011 01001010<br/>01010010 11001011<br/>11010101 00101100<br/>00101101 11010010
            </div>
            <div className="absolute top-[30%] right-[7%] text-[9px] font-mono text-purple-400 leading-loose -rotate-6 select-none">
              01101010 11010101<br/>10101100 00101101<br/>11010010 01101010<br/>00101100 10101100
            </div>
            <div className="absolute bottom-[28%] left-[9%] text-[9px] font-mono text-cyan-300 leading-loose -rotate-12 select-none">
              11010010 01101010<br/>00101100 10101100<br/>01101010 11010101<br/>10101100 00101101
            </div>
          </div>
        </div>

        {/* Neon sweep wave */}
        <div className="absolute inset-x-0 bottom-[-10%] top-[45%] pointer-events-none select-none opacity-25 z-0">
          <svg viewBox="0 0 1440 320" className="w-full h-full" fill="none" preserveAspectRatio="none">
            <path d="M-100,200 Q360,100 720,180 T1540,140"
              stroke="url(#neonSweepGrad)" strokeWidth="28" strokeLinecap="round"
              filter="blur(18px)" className="animate-pulse-slow" />
            <path d="M-100,200 Q360,100 720,180 T1540,140"
              stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.18" />
            <defs>
              <linearGradient id="neonSweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="20%"  stopColor="#22d3ee" stopOpacity="0.75" />
                <stop offset="50%"  stopColor="#d946ef" stopOpacity="0.85" />
                <stop offset="80%"  stopColor="#22d3ee" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Holographic orb */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-10">
          <div
            className="w-[500px] sm:w-[720px] md:w-[960px] h-[500px] sm:h-[720px] md:h-[960px] animate-float-orb mt-3 sm:mt-1 md:mt-0 rounded-full overflow-hidden"
            style={{
              WebkitMaskImage: "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 80%), linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              maskImage: "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 80%), linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
          >
            <HeroOrbCanvas />
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0026ff] pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#0026ff] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(96,160,255,0.18),transparent_45%)] pointer-events-none z-10" />

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto">

          {/* Badge pill */}
          <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
              Internet dedicado para empresas en México
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight drop-shadow-lg">
            Conectando en<br />
            <span className="text-shimmer">cualquier lugar</span><br />
            <span className="text-white/80">de México</span>
          </h1>

          <p className="mt-7 text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
            Internet dedicado, alta disponibilidad y seguridad empresarial con monitoreo
            NOC 24/7/365. Diseñamos tu red para que tu operación siga corriendo, pase lo que pase.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
            <a href="#contacto"
              className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm uppercase tracking-widest shadow-[0_8px_32px_rgba(139,92,246,0.5)] hover:shadow-[0_12px_40px_rgba(217,70,239,0.6)] active:scale-95 transition-all duration-300 cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                Solicitar propuesta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400" />
            </a>
            <a href="#soluciones"
              className="flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white transition-colors border border-white/20 px-8 py-3.5 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Ver soluciones
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge, i) => (
              <div key={i}
                className="flex items-center gap-2 bg-white/6 border border-white/12 rounded-full px-4 py-2 text-xs text-white/65 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default">
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════
          2. SOLUTIONS + CONTACT — blue block
      ════════════════════════════════════════ */}
      <section id="contacto" className="relative w-full bg-[var(--blue-primary)] overflow-hidden">

        {/* Top fade from hero */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10">
          <SolutionsGrid />
        </div>

        {/* Contact block */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <p className="text-cyan-300 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                Solicita tu propuesta personalizada
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Cuéntanos de tu empresa y te contactamos en{" "}
                <span className="text-gradient-cyan-purple">&lt; 24 horas</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {[
                { icon: <Globe className="w-5 h-5 text-cyan-300" />,  text: "Cobertura Nacional con Fibra Dedicada", sub: "Disponible en más de 80 ciudades de México" },
                { icon: <Shield className="w-5 h-5 text-cyan-300" />, text: "Ciberseguridad y Mitigación Anti-DDoS",  sub: "Protección en tiempo real incluida en tu plan" },
                { icon: <Clock className="w-5 h-5 text-cyan-300" />,  text: "Respuesta en < 24 horas",               sub: "Ingeniero dedicado a tu proyecto" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <span className="text-white text-sm font-semibold">{item.text}</span>
                    <p className="text-white/45 text-xs mt-0.5 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. DARK SECTIONS BLOCK (no white break)
      ════════════════════════════════════════ */}
      <div className="relative w-full bg-[var(--navy-deep)]">
        <WhyChooseUs />
        <SuccessCases />
        <BlogGrid />
      </div>

      {/* ═══════════════════════════════════════
          4. PARTNERS RIBBON
      ════════════════════════════════════════ */}
      <Partners />

    </div>
  );
}
