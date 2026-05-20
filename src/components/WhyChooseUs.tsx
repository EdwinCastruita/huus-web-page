"use client";

import React from "react";
import { Wifi, Headset, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: <span className="text-4xl font-black text-[var(--blue-primary)] select-none">25</span>,
    text: "Contamos con más de 25 años de experiencia.",
  },
  {
    icon: <Wifi className="w-9 h-9 text-[var(--blue-primary)] stroke-[1.3]" />,
    text: "Conexión simétrica, estable y dedicada.",
  },
  {
    icon: <Headset className="w-9 h-9 text-[var(--blue-primary)] stroke-[1.3]" />,
    text: "Noc propio y soporte siempre activo. Por nuestros ingenieros.",
  },
  {
    icon: <ShieldCheck className="w-9 h-9 text-[var(--blue-primary)] stroke-[1.3]" />,
    text: "Segmentación, firewalls y cifrado.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="relative w-full bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight text-center">
            ¿Por qué escoger a Huus?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-5">
              <div className="w-28 h-28 rounded-full border-2 border-[color:var(--blue-primary)]/40 flex items-center justify-center bg-white/80 hover:border-[var(--blue-primary)] hover:bg-white transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed max-w-[180px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
