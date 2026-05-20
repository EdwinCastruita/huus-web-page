"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "¿Qué cambia con una conexión híbrida?",
    span: "col-span-1",
  },
  {
    title: "Cómo la ciberseguridad y la conectividad mantienen viva la experiencia en eventos",
    span: "col-span-1",
  },
  {
    title: "Insights para apoyar las necesidades de colaboración del lugar de trabajo moderno",
    span: "col-span-1",
  },
  {
    title: "Identificando los estilos de trabajo en tu organización",
    span: "col-span-1",
  },
  {
    title: "Infraestructura tecnológica en sitio",
    span: "col-span-1 sm:col-span-2",
    hasGraphic: true,
  },
];

export default function BlogGrid() {
  return (
    <section id="blog" className="w-full bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-right mb-10">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Blog</span>
          <h2 className="text-3xl font-black text-slate-900 mt-1">Mira nuestro blog</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, idx) => (
            <div key={idx}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer
                bg-gradient-to-br from-[#5b21b6] to-[#0500c8]
                min-h-[180px] p-7 flex flex-col justify-between
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                ${post.span}`}
            >
              {/* Subtle inner grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Graphic for wide card */}
              {post.hasGraphic && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
                  <div className="w-24 h-24 rounded-full border-4 border-cyan-400/60 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-yellow-300/60 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-300/80" />
                    </div>
                  </div>
                </div>
              )}

              <div className="relative z-10 flex flex-col gap-4">
                <h4 className="text-base font-bold text-white leading-snug max-w-xs">
                  {post.title}
                </h4>
                <button className="self-start flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-cyan-300 group-hover:text-white transition-colors">
                  Leer <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
