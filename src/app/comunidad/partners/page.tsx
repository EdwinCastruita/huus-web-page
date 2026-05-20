"use client";

import React, { useState } from "react";
import { CheckCircle2, DollarSign, TrendingUp, Gift, ChevronDown, Phone } from "lucide-react";
import Partners from "@/components/Partners";

export default function PartnersPage() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);
  const [formData, setFormData] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.empresa || !formData.email || !formData.telefono) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" }); }, 3000);
  };

  const programs = [
    { title: "Partner Referido", desc: "Refiere clientes a Huus y recibe atractivas comisiones por cada contrato exitoso que se cierre gracias a tu recomendación. Sin compromisos de ventas mínimas." },
    { title: "Alianzas Estratégicas", desc: "Establece una alianza formal con Huus para co-vender nuestros servicios, acceder a materiales de marketing exclusivos, presencia en eventos y oportunidades de co-branding." },
    { title: "Integraciones", desc: "Integra tus plataformas o productos tecnológicos con la infraestructura de Huus para ofrecer soluciones end-to-end a tus clientes con soporte técnico conjunto." },
  ];

  const steps = [
    { n: "1", title: "Contáctenos", desc: "Completa nuestro formulario con tus datos y agenda una reunión inicial con nuestro equipo." },
    { n: "2", title: "Reunión Inicial", desc: "Conversamos sobre las potenciales oportunidades y cómo podemos colaborar de la mejor forma." },
    { n: "3", title: "Kick Off", desc: "Sellaremos nuestra alianza con la firma de acuerdo y definición del plan de trabajo conjunto." },
    { n: "4", title: "¡Bienvenido!", desc: "Empezaremos a colaborar juntos y disfrutarás de los beneficios exclusivos de ser Partner." },
  ];

  return (
    <div className="w-full bg-[#00041a] text-white">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] bg-gradient-to-b from-[#00041a] via-[#021085] to-[#8f5bff] flex flex-col justify-center overflow-hidden px-6 pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.12),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-3 px-3 py-1 bg-cyan-400/10 rounded-full inline-block">Programa de Alianzas</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mt-4 mb-6">
              Únete a Nuestra<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-300">Red de Partners</span>
            </h1>
            <p className="text-lg text-blue-100/90 mb-8 max-w-lg">
              Colabora con Huus, amplía tu catálogo de servicios y genera mayores ingresos para tu negocio.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#programas" className="border-2 border-white text-white hover:bg-white hover:text-[#0026ff] font-bold px-8 py-3 rounded-full transition-all duration-200 uppercase text-xs tracking-wider">Nuestros Programas</a>
              <a href="#formulario" className="bg-[#d946ef] hover:bg-[#d946ef]/90 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 uppercase text-xs tracking-wider shadow-lg shadow-pink-500/20">Quiero ser Partner</a>
            </div>
          </div>
          {/* Decorative partner network illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDuration: "4s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0026ff] to-[#8f5bff] flex items-center justify-center shadow-2xl shadow-blue-500/30">
                  <span className="text-white text-3xl font-black tracking-wider">huus</span>
                </div>
              </div>
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div key={i} className="absolute w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center" style={{ top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 110}px - 20px)`, left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 110}px - 20px)` }}>
                  <div className="w-3 h-3 rounded-full bg-cyan-400/80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BE A PARTNER ── */}
      <section className="w-full bg-[#00041a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-16">¿Por qué ser un Huus Partner?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <DollarSign className="w-8 h-8" />, title: "Genera Ingresos", desc: "Aumenta tus ingresos mediante comisiones y oportunidades de negocio conjuntas.", color: "from-cyan-500 to-blue-500" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Aumenta tu Visibilidad", desc: "Amplía tu alcance en el mercado lógístico a través de acciones de co-marketing y presencia en eventos del sector.", color: "from-purple-500 to-pink-500" },
              { icon: <Gift className="w-8 h-8" />, title: "Recursos Exclusivos", desc: "Accede a herramientas y recursos diseñados para ayudarte a utilizar nuestras soluciones de manera óptima.", color: "from-pink-500 to-red-400" },
            ].map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-200">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-5 text-white shadow-lg`}>{c.icon}</div>
                <h4 className="text-lg font-black text-white mb-3">{c.title}</h4>
                <p className="text-blue-200/80 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="#formulario" className="border-2 border-[#d946ef] text-[#d946ef] hover:bg-[#d946ef] hover:text-white font-bold px-10 py-3 rounded-full transition-all duration-200 uppercase text-xs tracking-wider">Quiero ser Partner</a>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ACCORDION ── */}
      <section id="programas" className="w-full bg-[#021085] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Illustration */}
          <div className="hidden lg:flex flex-col gap-5">
            {["Colabora con huus, amplía tu catalogo de servicios y genera mayores ingresos.", "Colabora con huus, amplía tu catalogo de servicios y genera mayores ingresos."].map((txt, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="text-blue-100/80 text-sm mb-4">{txt}</p>
                <a href="#formulario" className="inline-block border border-white/40 text-white text-xs font-bold px-6 py-2 rounded-full hover:bg-white/10 transition-all">Enviar y recibir propuesta</a>
              </div>
            ))}
          </div>

          {/* Programs accordion */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight">Un Programa que se Adapta a tus Necesidades</h2>
            <div className="bg-[#0026ff]/40 border border-white/10 rounded-2xl overflow-hidden">
              {programs.map((p, idx) => (
                <div key={idx} className={idx < programs.length - 1 ? "border-b border-white/10" : ""}>
                  <button onClick={() => setActiveProgram(activeProgram === idx ? null : idx)} className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-bold hover:bg-white/5 transition-colors focus:outline-none">
                    <span>{p.title}</span>
                    <span className="text-xl font-black">{activeProgram === idx ? "−" : "+"}</span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${activeProgram === idx ? "max-h-32 px-6 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-blue-200/80 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <a href="#formulario" className="border border-[#d946ef] text-[#d946ef] hover:bg-[#d946ef] hover:text-white font-bold px-8 py-2.5 rounded-full transition-all duration-200 uppercase text-xs tracking-wider">Quiero ser Partner</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO BE A PARTNER STEPS ── */}
      <section className="w-full bg-[#00041a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-14">Cómo ser Partner</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 text-2xl font-black mb-4">{s.n}</div>
                <h4 className="text-white font-black text-lg mb-2">{s.title}</h4>
                <p className="text-blue-200/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="formulario" className="w-full bg-gradient-to-b from-[#00041a] to-[#021085] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Conviértete en un Partner de Huus</h2>
          <p className="text-blue-200/80">Completa el formulario y nuestro equipo de alianzas se pondrá en contacto contigo a la brevedad.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4"><CheckCircle2 className="w-10 h-10 text-emerald-600" /></div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">¡Solicitud Enviada!</h4>
              <p className="text-slate-500 text-sm">Nuestro equipo de alianzas te contactará muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-slate-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nombre completo *</label><input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre y Apellido" required className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm transition-colors" /></div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Empresa *</label><input type="text" name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Nombre de tu empresa" required className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm transition-colors" /></div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email *</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="tu@empresa.com" required className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm transition-colors" /></div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Teléfono *</label><input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} placeholder="10 dígitos" required className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm transition-colors" /></div>
              </div>
              <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">¿Cómo te gustaría colaborar?</label><textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} placeholder="Cuéntanos un poco sobre tu negocio y cómo imaginas la colaboración..." rows={4} className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm resize-none transition-colors" /></div>
              <button type="submit" className="w-full bg-[#d946ef] hover:bg-[#d946ef]/90 text-white font-bold py-4 rounded-full transition-all duration-200 shadow-md cursor-pointer">Enviar solicitud de Partnership</button>
            </form>
          )}
        </div>
      </section>

      <Partners />
    </div>
  );
}
