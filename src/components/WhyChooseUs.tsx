"use client";

import React, { useEffect, useRef, useState } from "react";
import { Wifi, Headset, ShieldCheck, Award, Zap, Users } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
}

const stats: StatItem[] = [
  {
    value: 25,
    suffix: "+",
    label: "Años de experiencia",
    sublabel: "Líderes en telecomunicaciones empresariales en México",
    icon: <Award className="w-6 h-6" />,
    gradient: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.3)",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime garantizado",
    sublabel: "SLA con penalizaciones reales — conexión simétrica y dedicada",
    icon: <Wifi className="w-6 h-6" />,
    gradient: "from-blue-400 to-indigo-600",
    glow: "rgba(59,130,246,0.3)",
  },
  {
    value: 24,
    suffix: "/7",
    label: "NOC propio siempre activo",
    sublabel: "Ingenieros especializados monitoreando tu red en tiempo real",
    icon: <Headset className="w-6 h-6" />,
    gradient: "from-violet-400 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    value: 500,
    suffix: "+",
    label: "Clientes empresariales",
    sublabel: "Segmentación, firewalls y cifrado de extremo a extremo",
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: "from-fuchsia-400 to-pink-600",
    glow: "rgba(217,70,239,0.3)",
  },
];

const features = [
  { icon: <Zap className="w-4 h-4" />, text: "Fibra simétrica dedicada" },
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Anti-DDoS incluido" },
  { icon: <Users className="w-4 h-4" />, text: "Equipo certificado CCIE" },
  { icon: <Award className="w-4 h-4" />, text: "ISO 27001 Compliant" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(current);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target % 1 === 0 ? Math.round(current) : current.toFixed(1);
  return <>{display}{suffix}</>;
}

export default function WhyChooseUs() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="relative w-full overflow-hidden bg-[var(--navy-deep)] py-24">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(139,92,246,0.12),transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(34,211,238,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            ¿Por qué escoger a{" "}
            <span className="text-gradient-cyan-purple">Huus?</span>
          </h2>
          <p className="mt-5 text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Más de dos décadas conectando empresas mexicanas con tecnología de punta y soporte humano real.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-6 glass-card-dark card-hover overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.glow}, transparent 70%)` }}
              />

              {/* Top gradient line */}
              <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.gradient} rounded-full`} />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 4px 16px ${item.glow}` }}
                >
                  {item.icon}
                </div>

                {/* Number */}
                <div className={`text-4xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1`}>
                  <AnimatedNumber target={item.value} suffix={item.suffix} inView={inView} />
                </div>

                <p className="text-white font-bold text-sm mb-2">{item.label}</p>
                <p className="text-white/45 text-xs leading-relaxed">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature pills row */}
        <div className="flex flex-wrap justify-center gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-default"
            >
              <span className="text-cyan-400">{f.icon}</span>
              {f.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
