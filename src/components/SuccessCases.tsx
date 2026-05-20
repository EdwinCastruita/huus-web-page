"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    company: "NORTH CORK CREAMERIES",
    title: "Accounting Advisory",
    subtitle: "Unrivalled flexibility of workplace agility",
    bg: "from-slate-700 to-slate-900",
  },
  {
    company: "NORTH CORK CREAMERIES",
    title: "Accounting Advisory",
    subtitle: "Unrivalled flexibility of workplace agility",
    bg: "from-slate-600 to-slate-800",
  },
];

export default function SuccessCases() {
  return (
    <section id="casos" className="w-full bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left text */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#0500c8] uppercase tracking-widest">
              Casos de Estudio
            </span>
            <h3 className="text-4xl font-black text-slate-900 leading-tight">
              Nuestros Casos de Éxito
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Nuestros casos de éxito reflejan el impacto real de nuestras soluciones en
              empresas que buscaban dar el siguiente paso en su evolución tecnológica.
              Desde organizaciones que optimizaron su conectividad y aseguraron la
              continuidad operativa, hasta compañías que fortalecieron su ciberseguridad
              y modernizaron sus procesos con inteligencia artificial.
            </p>
            <button className="self-start mt-4 flex items-center gap-2 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:border-[#0500c8] hover:text-[#0500c8] transition-all cursor-pointer">
              VER ALL <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Case cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cases.map((item, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300">

                {/* Photo placeholder */}
                <div className={`relative h-52 bg-gradient-to-br ${item.bg} flex items-end p-5 overflow-hidden`}>
                  {/* Grid lines overlay for tech feel */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  {/* Simulated photo with people silhouettes */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg viewBox="0 0 200 120" className="w-full h-full" fill="white">
                      <circle cx="70" cy="45" r="20" />
                      <ellipse cx="70" cy="95" rx="30" ry="20" />
                      <circle cx="130" cy="40" r="18" />
                      <ellipse cx="130" cy="90" rx="28" ry="18" />
                    </svg>
                  </div>
                  <span className="relative z-10 text-[10px] font-black tracking-widest text-white/60 uppercase bg-black/30 px-2 py-1 rounded">
                    {item.company}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 bg-white flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.subtitle}</p>
                  <button className="self-start mt-2 flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#0500c8] hover:underline cursor-pointer">
                    MIRAR MAS <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
