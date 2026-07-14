"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail]           = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => { setEmail(""); setSubscribed(false); }, 5000);
  };

  const socials = [
    {
      label: "LinkedIn", href: "#", color: "#0ea5e9",
      svg: <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />,
    },
    {
      label: "Twitter", href: "#", color: "#38bdf8",
      svg: <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />,
    },
    {
      label: "Instagram", href: "#", color: "#f472b6",
      svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    },
    {
      label: "YouTube", href: "#", color: "#f87171",
      svg: <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />,
    },
  ];

  return (
    <footer className="relative w-full bg-[var(--navy-deep)] text-white overflow-hidden">

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* ¡Hablemos! CTA */}
      <div className="relative border-b border-white/8 py-20 flex flex-col items-center gap-8 text-center px-6">
        {/* Glow behind text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(34,211,238,0.06),transparent_60%)] pointer-events-none" />

        <div className="relative">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-[0.3em] mb-4">¿Listo para conectarte?</p>
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-shimmer leading-none">
            ¡Hablemos!
          </h2>
        </div>

        <p className="text-white/40 max-w-md leading-relaxed text-sm">
          Cuéntanos sobre tu empresa y un ingeniero especializado te contactará en menos de 24 horas.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="#contacto"
            className="group flex items-center gap-2.5 bg-white text-[#03008a] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-[#030040] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
            Solicitar propuesta
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a href="tel:8002245999"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium border border-white/15 px-6 py-4 rounded-full hover:border-white/30">
            <Phone className="w-4 h-4 text-cyan-400" /> 800-224-5999
          </a>
        </div>
      </div>

      {/* Directory */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand col */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-2xl font-black tracking-wider">
              huus<span className="text-cyan-400">.</span>
            </span>
            <p className="mt-3 text-sm text-white/40 leading-relaxed">
              Conectando tu negocio en cualquier lugar de México con fibra dedicada y ciberseguridad empresarial.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-2.5">
            {socials.map(({ label, href, color, svg }) => (
              <a key={label} href={href} aria-label={label}
                className="group w-9 h-9 rounded-xl border border-white/12 flex items-center justify-center text-white/35 transition-all duration-300 hover:scale-110 cursor-pointer"
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${color}60`;
                  el.style.color = color;
                  el.style.boxShadow = `0 0 16px ${color}30`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = '';
                  el.style.color = '';
                  el.style.boxShadow = '';
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  {svg}
                </svg>
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2.5 pt-4 border-t border-white/8 text-xs text-white/40">
            <a href="tel:8002245999" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 800-224-5999
            </a>
            <a href="mailto:contacto@huus.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> contacto@huus.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>Av. Constitución 2026,<br />Monterrey, NL, México</span>
            </div>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-white font-bold text-xs mb-5 uppercase tracking-[0.2em]">Empresa</h4>
          <ul className="flex flex-col gap-2.5">
            {["Alianzas Estratégicas", "Quiénes Somos", "Eventos", "Prensa", "Blog", "Preguntas Frecuentes"].map((l, i) => (
              <li key={i}>
                <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors shrink-0" />
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Soluciones */}
        <div>
          <h4 className="text-white font-bold text-xs mb-5 uppercase tracking-[0.2em]">Soluciones</h4>
          <ul className="flex flex-col gap-2.5">
            {["Internet Dedicado", "Internet Pyme", "Alta Disponibilidad", "SD-WAN", "Ciberseguridad", "Data Centers"].map((l, i) => (
              <li key={i}>
                <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200 group inline-flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-purple-400/40 group-hover:bg-purple-400 transition-colors shrink-0" />
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Términos — Newsletter */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-white font-bold text-xs mb-5 uppercase tracking-[0.2em]">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {["Política de privacidad", "Términos y Condiciones", "Aviso de Privacidad", "Cobertura", "Política de uso justo"].map((l, i) => (
                <li key={i}>
                  <Link href="#" className="text-xs text-white/35 hover:text-white transition-colors duration-200">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div className="rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
            <p className="text-white font-bold text-sm mb-1">Newsletter</p>
            <p className="text-white/40 text-xs mb-4 leading-relaxed">Tendencias tecnológicas para tu empresa cada mes.</p>
            <form onSubmit={handleSubscribe}>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> ¡Suscrito!
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="tu@empresa.com" required
                    className="flex-1 bg-white/8 border border-white/10 text-white text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400/50 placeholder-white/25 transition-colors"
                  />
                  <button type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-2 rounded-lg hover:shadow-[0_0_16px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* Legal bar */}
      <div className="border-t border-white/8 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>© 2026 Huus Telecomunicaciones. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white/60 transition-colors">Mapa del sitio</Link>
            <span>·</span>
            <Link href="#" className="hover:text-white/60 transition-colors">Aviso de Privacidad</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
