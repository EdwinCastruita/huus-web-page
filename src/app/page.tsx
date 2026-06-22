"use client";

import React from "react";
import { Globe, Shield } from "lucide-react";
import SolutionsGrid from "@/components/SolutionsGrid";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessCases from "@/components/SuccessCases";
import BlogGrid from "@/components/BlogGrid";
import Partners from "@/components/Partners";
import HeroOrbCanvas from "@/components/HeroOrbCanvas";

export default function Home() {
  return (
    <div className="w-full">

      {/* ═══════════════════════════════════════
          1. HERO — royal blue background + orb
      ════════════════════════════════════════ */}
      <section className="relative w-full min-h-[88vh] bg-gradient-to-b from-[var(--blue-dark)] via-[var(--blue-mid)] to-[var(--blue-primary)] flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-28 pb-20">
        
        {/* Premium background layers: Glowing dots, radial highlights, and floating binary code matrices */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(145,110,255,0.22),transparent_42%),radial-gradient(circle_at_18%_26%,rgba(90,228,255,0.12),transparent_36%),radial-gradient(circle_at_82%_28%,rgba(214,113,255,0.14),transparent_38%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:42px_42px]" />
          
          {/* Subtle matrix-style floating binary code columns */}
          <div className="absolute inset-0 opacity-[0.14] mix-blend-screen overflow-hidden">
            <div className="absolute top-[8%] left-[6%] text-[9px] sm:text-[10px] font-mono text-cyan-400 leading-relaxed rotate-12 select-none">
              10110011 01001010<br/>01010010 11001011<br/>11010101 00101100<br/>00101101 11010010
            </div>
            <div className="absolute top-[28%] right-[8%] text-[10px] sm:text-[11px] font-mono text-purple-400 leading-relaxed -rotate-6 select-none">
              01101010 11010101<br/>10101100 00101101<br/>11010010 01101010<br/>00101100 10101100
            </div>
            <div className="absolute bottom-[24%] left-[10%] text-[10px] sm:text-[11px] font-mono text-cyan-300 leading-relaxed -rotate-12 select-none">
              11010010 01101010<br/>00101100 10101100<br/>01101010 11010101<br/>10101100 00101101
            </div>
            <div className="absolute bottom-[38%] right-[5%] text-[9px] sm:text-[10px] font-mono text-purple-300 leading-relaxed rotate-6 select-none">
              10110011 01001010<br/>01010010 11001011<br/>11010101 00101100<br/>00101101 11010010
            </div>
          </div>
        </div>

        {/* Curved fiber-optic style neon sweep/wave behind the lower half of the orb */}
        <div className="absolute inset-x-0 bottom-[-10%] top-[45%] pointer-events-none select-none opacity-30 z-0">
          <svg viewBox="0 0 1440 320" className="w-full h-full" fill="none" preserveAspectRatio="none">
            <path
              d="M-100,200 Q360,100 720,180 T1540,140"
              stroke="url(#neonSweepGrad)"
              strokeWidth="28"
              strokeLinecap="round"
              filter="blur(18px)"
              className="animate-pulse-slow"
            />
            <path
              d="M-100,200 Q360,100 720,180 T1540,140"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="neonSweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#d946ef" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#22d3ee" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Holographic sphere canvas — fading out at the bottom */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-10">
          <div
            className="w-[500px] sm:w-[720px] md:w-[920px] h-[500px] sm:h-[720px] md:h-[920px] animate-float-orb mt-3 sm:mt-1 md:mt-0 rounded-full overflow-hidden"
            style={{
              WebkitMaskImage: "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 82%), linear-gradient(to bottom, rgba(0,0,0,1) 64%, rgba(0,0,0,0) 100%)",
              maskImage: "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 82%), linear-gradient(to bottom, rgba(0,0,0,1) 64%, rgba(0,0,0,0) 100%)",
            }}
          >
            <HeroOrbCanvas />
          </div>
        </div>

        {/* Gradient overlay to blend orb with background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--blue-primary)] pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[var(--blue-primary)] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(96,160,255,0.22),transparent_45%)] pointer-events-none z-10" />

        {/* Hero content (sits on top of orb) */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
            Conectando en<br />cualquier lugar de México
          </h1>
          <p className="mt-6 text-sm sm:text-base text-white/75 max-w-xl leading-relaxed">
            Internet dedicado, alta disponibilidad y seguridad empresarial con monitoreo
            24/7/365. Diseñamos tu red para que tu operación siga corriendo, pase lo que pase.
          </p>
          <a href="#contacto"
            className="mt-8 px-8 py-3 rounded-full bg-[var(--pink-cta)] text-white font-bold text-sm uppercase tracking-widest shadow-[0_6px_24px_rgba(143,91,255,0.45)] hover:bg-[#7f49ff] hover:shadow-[0_8px_28px_rgba(143,91,255,0.6)] active:scale-95 transition-all duration-200 cursor-pointer">
            Explorar
          </a>
        </div>

      </section>

      {/* ═══════════════════════════════════════
          2 + 3. SOLUTIONS + CONTACT — same background block
      ════════════════════════════════════════ */}
      <section id="contacto" className="relative w-full bg-[var(--blue-primary)] overflow-hidden">
        <div className="relative z-10">
          <SolutionsGrid />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: text on blue */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <p className="text-white/80 text-sm font-medium">Solicita tu propuesta personalizada.</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Cuéntanos de tu empresa y te contactamos En &lt; 24 horas
            </h2>
            <div className="flex flex-col gap-3 mt-2 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-300 shrink-0" /> Cobertura Nacional con Fibra Dedicada
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-300 shrink-0" /> Ciberseguridad y Mitigación Anti-DDoS
              </span>
            </div>
          </div>

          {/* Right: white form card */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      <div className="relative w-full overflow-hidden bg-white -mt-32 pt-32 md:-mt-40 md:pt-40">
        {/* Diagonal cut background (blue / white / blue) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-[42%] bg-[var(--blue-primary)] [clip-path:polygon(0_0,100%_0,100%_34%,0_84%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[var(--blue-primary)] [clip-path:polygon(0_56%,100%_6%,100%_100%,0_100%)]" />
        </div>

        <div className="relative z-10">
          {/* ═══════════════════════════════════════
              4. WHY CHOOSE HUUS
          ════════════════════════════════════════ */}
          <WhyChooseUs />

          {/* ═══════════════════════════════════════
              5. SUCCESS CASES
          ════════════════════════════════════════ */}
          <SuccessCases />

          {/* ═══════════════════════════════════════
              6. BLOG
          ════════════════════════════════════════ */}
          <BlogGrid />
        </div>
      </div>

      {/* ═══════════════════════════════════════
          7. PARTNERS RIBBON
      ════════════════════════════════════════ */}
      <Partners />

    </div>
  );
}
