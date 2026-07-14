"use client";

import React from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    category: "Conectividad",
    categoryColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    title: "¿Qué cambia con una conexión híbrida en tu empresa?",
    excerpt: "SD-WAN vs. MPLS: cómo elegir la arquitectura correcta según tu volumen de tráfico y presupuesto.",
    readTime: "5 min",
    date: "Jun 2026",
    gradient: "from-[#060b27] via-[#0a1442] to-[#060b27]",
    accent: "#22d3ee",
    span: "",
  },
  {
    category: "Seguridad",
    categoryColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    title: "Cómo la ciberseguridad mantiene viva la experiencia en eventos masivos",
    excerpt: "Protocolos de seguridad en redes temporales con miles de usuarios concurrentes en recintos.",
    readTime: "7 min",
    date: "May 2026",
    gradient: "from-[#100222] via-[#1a0533] to-[#100222]",
    accent: "#c084fc",
    span: "",
  },
  {
    category: "Tendencias",
    categoryColor: "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20",
    title: "Workplace moderno: colaboración sin límites de ancho de banda",
    excerpt: "Herramientas de colaboración como Teams y Zoom requieren infraestructura dedicada real.",
    readTime: "4 min",
    date: "May 2026",
    gradient: "from-[#0f0020] via-[#1f0040] to-[#0f0020]",
    accent: "#f472b6",
    span: "",
  },
  {
    category: "Productividad",
    categoryColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    title: "Identificando estilos de trabajo en tu organización para optimizar la red",
    excerpt: "Análisis de patrones de consumo de red por departamento: el primer paso hacia la optimización.",
    readTime: "6 min",
    date: "Abr 2026",
    gradient: "from-[#020b30] via-[#051540] to-[#020b30]",
    accent: "#60a5fa",
    span: "",
  },
  {
    category: "Infraestructura",
    categoryColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    title: "Infraestructura tecnológica en sitio: qué necesita tu negocio en 2026",
    excerpt: "Guía completa para evaluar si tu empresa necesita colocation, cloud privado o solución híbrida.",
    readTime: "9 min",
    date: "Abr 2026",
    gradient: "from-[#001a0e] via-[#002a16] to-[#001a0e]",
    accent: "#34d399",
    span: "sm:col-span-2",
    wide: true,
  },
];

export default function BlogGrid() {
  return (
    <section id="blog" className="relative w-full bg-[var(--navy-deep)] py-24 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(34,211,238,0.06),transparent_55%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4 block">
              Blog & Recursos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Mira nuestro <span className="text-gradient-cyan-purple">blog</span>
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 border border-white/20 text-white/60 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer group shrink-0">
            Ver todos
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer card-hover min-h-[220px] ${post.span}`}
              style={{ background: `linear-gradient(135deg, ${post.gradient.replace('from-', '').replace('via-', '').replace('to-', '')})` }}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />

              {/* Grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Accent glow bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${post.accent}18, transparent)` }}
              />

              {/* Wide card graphic */}
              {post.wide && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none select-none">
                  <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/60" />
                    </div>
                  </div>
                </div>
              )}

              <div className="relative z-10 p-7 flex flex-col gap-4 h-full">
                {/* Category + meta */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-white/30 text-[10px]">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{post.date}</span>
                  </div>
                </div>

                {/* Title + excerpt */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read CTA */}
                <button
                  className="self-start flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: post.accent }}
                >
                  Leer artículo
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${post.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
