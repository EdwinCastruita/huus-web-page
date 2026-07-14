"use client";

import React from "react";

const partners = [
  { name: "net2phone",  abbr: "n2p",  color: "#22d3ee" },
  { name: "Trichmtec",  abbr: "TRM",  color: "#818cf8" },
  { name: "Neutral",    abbr: "NTR",  color: "#c084fc" },
  { name: "CloudCore",  abbr: "CC",   color: "#34d399" },
  { name: "Cisco",      abbr: "CSC",  color: "#0ea5e9" },
  { name: "Fortinet",   abbr: "FTN",  color: "#f59e0b" },
  { name: "Zscaler",    abbr: "ZSC",  color: "#f472b6" },
  { name: "Palo Alto",  abbr: "PAN",  color: "#fb923c" },
];

export default function Partners() {
  return (
    <section id="socios" className="relative w-full bg-[var(--indigo-deep,#0a0a2e)] py-10 overflow-hidden border-t border-white/5">

      {/* Top subtle glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8">

          {/* Label — vertical on large, horizontal on small */}
          <div className="shrink-0 hidden sm:flex flex-col items-center gap-1.5">
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/20" />
            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] whitespace-nowrap">
              Socios Tecnológicos
            </span>
            <div className="w-px h-8 bg-gradient-to-t from-transparent to-white/20" />
          </div>

          <div className="w-px h-8 bg-white/10 shrink-0 hidden sm:block" />

          {/* Scrolling marquee */}
          <div className="relative flex-1 overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a2e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a2e] to-transparent z-10 pointer-events-none" />

            <div className="partners-track flex items-center gap-12">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 shrink-0 cursor-pointer"
                >
                  {/* Logo mark */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-black transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}35`,
                      color: p.color,
                    }}
                  >
                    {p.abbr}
                  </div>
                  {/* Name */}
                  <span
                    className="text-sm font-bold whitespace-nowrap transition-colors duration-300"
                    style={{ color: `color-mix(in srgb, ${p.color} 60%, white)` }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom subtle glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </section>
  );
}
