"use client";

import React from "react";
import { ArrowRight, TrendingUp, Shield, Wifi, Zap } from "lucide-react";

const cases = [
  {
    company: "Grupo Hotelero del Norte",
    industry: "Hotelería & Turismo",
    title: "Conectividad 10Gbps para 8 propiedades simultáneas",
    result: "+40% satisfacción de huéspedes",
    description:
      "Implementamos fibra dedicada simétrica con alta disponibilidad y SD-WAN para garantizar WiFi sin interrupciones en cada habitación.",
    metric: "99.99%",
    metricLabel: "Uptime",
    icon: <Wifi className="w-5 h-5" />,
    gradientFrom: "#0a1172",
    gradientTo: "#1e3a8a",
    accentColor: "#22d3ee",
    tag: "Conectividad",
  },
  {
    company: "Distribuidora Sigma S.A.",
    industry: "Manufactura & Logística",
    title: "Zero downtime en planta de 1,200 empleados",
    result: "ROI recuperado en 6 meses",
    description:
      "Diseño de red redundante con failover automático en < 50ms. Eliminamos pérdidas por caídas de sistema que costaban $2M anuales.",
    metric: "<50ms",
    metricLabel: "Failover",
    icon: <Zap className="w-5 h-5" />,
    gradientFrom: "#1a0533",
    gradientTo: "#4c1d95",
    accentColor: "#c084fc",
    tag: "Alta disponibilidad",
  },
  {
    company: "Bancamás Financiera",
    industry: "Servicios Financieros",
    title: "Ciberseguridad empresarial con cumplimiento regulatorio",
    result: "0 incidentes en 3 años",
    description:
      "Implementamos arquitectura Zero-Trust, firewalls NGFW, Anti-DDoS y monitoreo SOC 24/7 cumpliendo normativas CNBV.",
    metric: "0",
    metricLabel: "Brechas",
    icon: <Shield className="w-5 h-5" />,
    gradientFrom: "#0c1a0a",
    gradientTo: "#14532d",
    accentColor: "#34d399",
    tag: "Ciberseguridad",
  },
  {
    company: "EventTech México",
    industry: "Eventos & Entretenimiento",
    title: "10,000 usuarios concurrentes en Foro Sol",
    result: "3 eventos sin una sola queja",
    description:
      "Red temporal de alta capacidad con cobertura WiFi total en recintos de gran aforo. Instalación en menos de 4 horas.",
    metric: "10K",
    metricLabel: "Usuarios",
    icon: <TrendingUp className="w-5 h-5" />,
    gradientFrom: "#1a0c00",
    gradientTo: "#78350f",
    accentColor: "#fbbf24",
    tag: "Internet Eventos",
  },
];

export default function SuccessCases() {
  return (
    <section id="casos" className="relative w-full bg-[var(--navy-deep)] py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(139,92,246,0.1),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4 block">
              Casos de Estudio
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Nuestros casos<br />
              <span className="text-gradient-cyan-purple">de éxito</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 max-w-sm">
            <p className="text-white/50 text-sm leading-relaxed">
              Empresas que transformaron su operación tecnológica con HUUS como aliado estratégico.
            </p>
            <button className="self-start flex items-center gap-2 border border-white/20 text-white/70 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer group">
              Ver todos los casos
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
            >
              {/* Card background */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${item.gradientFrom} 0%, ${item.gradientTo} 100%)` }}
              />
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
              {/* Glow overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${item.accentColor}, transparent 65%)` }}
              />

              <div className="relative z-10 p-7 flex flex-col h-full min-h-[260px]">
                {/* Top row: tag + metric */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                    style={{
                      color: item.accentColor,
                      borderColor: `${item.accentColor}40`,
                      background: `${item.accentColor}15`,
                    }}
                  >
                    {item.tag}
                  </span>
                  <div className="text-right">
                    <div
                      className="text-2xl font-black leading-none"
                      style={{ color: item.accentColor }}
                    >
                      {item.metric}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide">{item.metricLabel}</div>
                  </div>
                </div>

                {/* Company + industry */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ background: `${item.accentColor}30`, border: `1px solid ${item.accentColor}40` }}
                  >
                    <span style={{ color: item.accentColor }}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">{item.company}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wide">{item.industry}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Description (appears more visible on hover) */}
                <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/65 transition-colors flex-1">
                  {item.description}
                </p>

                {/* Result badge + CTA */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
                  <span
                    className="text-xs font-bold"
                    style={{ color: item.accentColor }}
                  >
                    ✓ {item.result}
                  </span>
                  <button className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">
                    Mirar más <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
