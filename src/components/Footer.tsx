"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail]         = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => { setEmail(""); setSubscribed(false); }, 5000);
  };

  return (
    <footer className="w-full bg-[#03008a] text-white">

      {/* ¡Hablemos! CTA */}
      <div className="border-b border-white/10 py-16 flex flex-col items-center gap-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black tracking-tight">¡Hablemos!</h2>
        <Link href="#contacto"
          className="flex items-center gap-2 bg-white text-[#0500c8] font-extrabold text-sm uppercase px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-[#03008a] transition-all duration-300 shadow-lg">
          Talk to Us <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Directory */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand col */}
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-black tracking-wider">huus<span className="text-cyan-400">.</span></span>
          <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
            Conectando tu negocio en cualquier lugar con enlaces dedicados y ciberseguridad empresarial.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {[
              { label: "Facebook", svg: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />, fill: true },
              { label: "Instagram", svg: (<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>), fill: false },
              { label: "TikTok", svg: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.78-.22-.22-.41-.47-.58-.73v7.02c0 3.74-3.07 6.88-6.88 6.88-3.74 0-6.88-3.07-6.88-6.88 0-3.64 2.87-6.68 6.5-6.86v4.02c-1.39.15-2.48 1.34-2.48 2.84 0 1.58 1.29 2.87 2.87 2.87 1.56 0 2.83-1.25 2.87-2.81V0z" />, fill: true },
              { label: "LinkedIn", svg: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />, fill: true },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-blue-200 hover:text-white hover:border-white/50 transition-all cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24"
                  fill={s.fill ? "currentColor" : "none"}
                  stroke={s.fill ? "none" : "currentColor"}
                  strokeWidth={s.fill ? "0" : "2"}
                  strokeLinecap="round" strokeLinejoin="round">
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10 text-xs text-blue-200">
            <a href="tel:8002245999" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" /> Teléfono: 800-224-5999
            </a>
            <a href="mailto:contacto@huus.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" /> contacto@huus.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Av. Constitución 2026, Monterrey, NL
            </div>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Empresa</h4>
          <ul className="flex flex-col gap-3">
            {["Alianzas Estratégicas","Quiénes Somos","Eventos","Prensa","Blog","Preguntas Frecuentes"].map((l, i) => (
              <li key={i}>
                <Link href="#" className="text-sm text-blue-200 hover:text-white transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Términos y Políticas – spans 2 cols */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Términos y Políticas</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {[
              "Política de privacidad",
              "Términos y Condiciones del Sitio Web",
              "Términos y Condiciones de uso del Internet",
              "Site Map",
              "Contratos marcos de presentación de servicios",
              "Términos y condiciones del portal",
              "Carta de derechos de los usuarios",
              "Colaboración con la justicia",
              "Aviso de Privacidad",
              "Cobertura",
              "Política de uso justo",
            ].map((l, i) => (
              <Link key={i} href="#" className="text-xs text-blue-200 hover:text-white transition-colors leading-relaxed">
                • {l}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-bold text-base whitespace-nowrap">¡Únete al Newsletter!</span>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5" /> ¡Registrado con éxito!
              </div>
            ) : (
              <>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email" required
                  className="w-full bg-white text-slate-900 text-sm px-5 py-3.5 rounded-full pr-32 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <button type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold uppercase px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-slate-700 transition-colors cursor-pointer">
                  Subscribe <Send className="w-3 h-3" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-blue-300">
        © 2026 Huus. Todos los derechos reservados.
      </div>

    </footer>
  );
}
