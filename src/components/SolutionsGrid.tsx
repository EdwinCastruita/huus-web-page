"use client";

import React from "react";
import { Smartphone, Radio, Shield, Monitor, Server } from "lucide-react";

const solutions = [
  { icon: <Smartphone className="w-10 h-10 stroke-[1]" />, title: "Movilidad" },
  { icon: <Radio className="w-10 h-10 stroke-[1]" />, title: "Conectividad\nInteligente" },
  { icon: <Shield className="w-10 h-10 stroke-[1]" />, title: "Ciberseguridad" },
  { icon: <Monitor className="w-10 h-10 stroke-[1]" />, title: "Servicios\nAdministrados" },
  { icon: <Server className="w-10 h-10 stroke-[1]" />, title: "Servicios\nAdministrados" },
];

export default function SolutionsGrid() {
  return (
    <section id="soluciones" className="w-full bg-[var(--blue-primary)] pt-0 pb-10  md:pb-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="flex flex-col items-center mb-8 md:mb-9">
          <h3 className="text-2xl font-bold text-white tracking-wide">Soluciones</h3>
          <div className="mt-2 w-24 h-0.5 bg-white/60 rounded-full" />
        </div>

        {/* Icons row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-10 lg:gap-x-12">
          {solutions.map((item, idx) => (
            <a key={idx} href="#contacto"
              className="group flex flex-col items-center text-center gap-4 cursor-pointer">
              <div className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-white text-xs font-semibold leading-snug whitespace-pre-line">
                {item.title}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
