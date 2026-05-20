"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  { name: "net2phone",  icon: "📞" },
  { name: "Trichmtec",  icon: "🌐" },
  { name: "neutral",    icon: "🔗" },
  { name: "CloudCore",  icon: "☁️"  },
];

export default function Partners() {
  return (
    <section id="socios" className="w-full bg-[#22d3ee] py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">

        <span className="shrink-0 text-sm font-black text-slate-900 uppercase tracking-wider whitespace-nowrap">
          Nuestros Socios
        </span>

        <div className="flex items-center gap-1 shrink-0 text-slate-700">
          <ChevronLeft  className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
        </div>

        {/* Scrolling logos */}
        <div className="relative flex-1 overflow-hidden flex items-center h-10">
          <div className="partners-track flex items-center gap-16">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-900 font-black text-lg whitespace-nowrap">
                <span className="text-xl">{p.icon}</span>
                <span className="tracking-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
