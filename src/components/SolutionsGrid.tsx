"use client";

import React from "react";
import { Wifi, Globe, Shield, Monitor, Server, Smartphone, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Movilidad",
    description: "Conectividad móvil empresarial sin interrupciones para equipos en movimiento.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(34,211,238,0.4)",
    href: "/soluciones/internet-pyme",
  },
  {
    icon: <Wifi className="w-7 h-7" />,
    title: "Conectividad Inteligente",
    description: "Fibra dedicada simétrica con SLA garantizado y monitoreo en tiempo real.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.4)",
    href: "/soluciones/internet-dedicado",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Ciberseguridad",
    description: "Protección avanzada: firewalls, Anti-DDoS, segmentación y cifrado de datos.",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(139,92,246,0.4)",
    href: "/soluciones/servicios-tics",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Servicios Administrados",
    description: "Gestión proactiva de tu infraestructura con NOC propio 24/7/365.",
    gradient: "from-fuchsia-500 to-pink-600",
    glow: "rgba(217,70,239,0.4)",
    href: "/soluciones/servicios-tics",
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Data Centers",
    description: "Colocation y cloud privado con máxima redundancia y disponibilidad.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.4)",
    href: "/soluciones/data-centers",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "SD-WAN",
    description: "Red definida por software: optimización inteligente del tráfico empresarial.",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.4)",
    href: "/soluciones/sd-wan",
  },
];

export default function SolutionsGrid() {
  return (
    <section id="soluciones" className="relative w-full bg-[var(--blue-primary)] pt-6 pb-16 overflow-hidden">

      {/* Subtle radial glow at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(139,92,246,0.2),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-3">
            Nuestras soluciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-center">
            Todo lo que tu empresa necesita
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden card-hover glass-card-dark"
              style={{ '--glow-color': item.glow } as React.CSSProperties}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 50%, ${item.glow}, transparent 70%)` }}
              />

              {/* Grid lines texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none rounded-2xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon circle with gradient */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 8px 24px ${item.glow}` }}
                  >
                    {item.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300 mt-2" />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom gradient line on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
