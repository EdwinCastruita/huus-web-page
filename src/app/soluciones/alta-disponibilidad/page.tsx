"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown, Search, Cloud, Activity, RefreshCw } from "lucide-react";
import Partners from "@/components/Partners";

export default function AltaDisponibilidadPage() {
  // Form state
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    compania: "",
    necesidad: "",
    telefono: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.compania || !formData.telefono || !formData.mensaje) {
      alert("Por favor rellene todos los campos obligatorios.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: "",
        email: "",
        compania: "",
        necesidad: "",
        telefono: "",
        mensaje: "",
      });
    }, 3000);
  };

  const faqs = [
    {
      q: "¿En cuánto tiempo instalan?",
      a: "Nuestra promesa de entrega es líder en el mercado. Para conexiones de fibra óptica e infraestructura microonda estándar, realizamos la instalación e implementación en menos de 6 horas una vez aprobado el contrato técnico.",
    },
    {
      q: "¿Ofrecen soporte 24/7?",
      a: "Sí. Contamos con un Centro de Operaciones de Red (NOC) propio que monitorea tu enlace de Alta Disponibilidad 24/7/365, con atención telefónica y soporte técnico en sitio de inmediato en caso de cualquier incidente.",
    },
    {
      q: "¿Pueden integrar múltiples enlaces?",
      a: "Por supuesto. Diseñamos soluciones híbridas que combinan fibra óptica de alta capacidad con enlaces de respaldo microondas para garantizar un 99.97% de disponibilidad real por contrato.",
    },
    {
      q: "¿Como empezaron?",
      a: "Nacimos como respuesta a la necesidad de las medianas y grandes empresas de contar con un servicio de conectividad robusto, transparente y con tiempos de respuesta inmediatos, acumulando hoy más de 25 años de experiencia acumulada en el sector.",
    },
  ];

  return (
    <div className="w-full bg-[#00041a] text-white">
      
      {/* ── HERO & LEAD FORM SECTION ── */}
      <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-[#00041a] via-[#021085] to-[#0026ff] flex flex-col justify-center overflow-hidden px-6 pt-32 pb-20">
        
        {/* Decorative background vectors */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.15),transparent_40%)]" />
          
          {/* Subtle matrix-style floating binary code columns */}
          <div className="absolute inset-0 opacity-[0.12] mix-blend-screen">
            <div className="absolute top-[12%] left-[4%] text-[10px] font-mono text-cyan-400 leading-relaxed rotate-12 select-none">
              10110011 01001010<br/>01010010 11001011<br/>11010101 00101100
            </div>
            <div className="absolute bottom-[20%] right-[6%] text-[10px] font-mono text-purple-400 leading-relaxed -rotate-6 select-none">
              01101010 11010101<br/>10101100 00101101<br/>11010010 01101010
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Info & Benefits */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-3 px-3 py-1 bg-cyan-400/10 rounded-full">
              Redundancia & SLA
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
              Alta<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300">
                Disponibilidad
              </span>
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 mb-8 max-w-xl leading-relaxed">
              La solución de Alta Disponibilidad minimiza y reduce un posible corte de servicio, derivado de una falla o degradación de alguno de los proveedores de Internet conectados al equipo. Con esto se garantiza la continuidad operativa de forma rápida y automática.
            </p>

            <div className="mb-10 w-full">
              <h3 className="text-cyan-400 font-bold text-lg mb-4">Beneficios Huus:</h3>
              <ul className="space-y-3.5">
                {[
                  "Multi Tecnología de acceso (SD-WAN / Híbrida).",
                  "Tiempo de implementación remota rápida y fácil.",
                  "Soporte técnico premium 24/7/365.",
                  "Reportes de consumo históricos y en tiempo real.",
                  "No está limitado solamente a nuestra cobertura (integra terceros)."
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d946ef] shrink-0 mt-0.5" />
                    <span className="text-blue-50/95 font-medium text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#diferenciadores" className="bg-[#d946ef] hover:bg-[#d946ef]/90 text-white font-bold tracking-wider px-10 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-pink-500/20 uppercase text-xs">
              Explorar
            </a>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-white text-slate-900 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-black text-slate-800 mb-6 text-left">
                Solicita una Propuesta
              </h3>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Tu asesor técnico te contactará en un plazo máximo de 6 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-left">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre y Apellido"
                        required
                        className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm text-slate-800 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-left">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nombre@gmail.com"
                        required
                        className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm text-slate-800 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-left">
                        Compañía / Giro *
                      </label>
                      <input
                        type="text"
                        name="compania"
                        value={formData.compania}
                        onChange={handleInputChange}
                        placeholder="Marca"
                        required
                        className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm text-slate-800 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-left">
                        ¿Qué Necesitas? *
                      </label>
                      <input
                        type="text"
                        name="necesidad"
                        value={formData.necesidad}
                        onChange={handleInputChange}
                        placeholder="Marca"
                        className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm text-slate-800 transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-left">
                        Teléfono (10 dígitos) *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="Teléfono"
                        required
                        className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm text-slate-800 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-left">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Escriba aquí su mensaje"
                      rows={3}
                      required
                      className="w-full border-b-2 border-slate-200 focus:border-[#0026ff] outline-none py-2 text-sm text-slate-800 resize-none transition-colors"
                    />
                  </div>

                  {/* Google reCAPTCHA badge */}
                  <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 p-2 rounded-xl text-[10px] text-slate-400">
                    <div className="w-5 h-5 bg-sky-500 rounded flex items-center justify-center text-white font-black text-xs">G</div>
                    <div className="text-left leading-normal">
                      protected by <strong>reCAPTCHA</strong><br/>
                      <span className="text-slate-300">Privacy - Terms</span>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-[#d946ef] hover:bg-[#d946ef]/90 text-white font-bold py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer text-sm">
                    Enviar y recibir propuesta
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── KEY DIFFERENTIATORS SECTION ── */}
      <section id="diferenciadores" className="w-full bg-[#0026ff] py-20 px-6 text-center relative overflow-hidden">
        {/* Glow behind the differentiators */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.15),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">
            Diferenciadores clave de Huus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 stroke-[1]" />,
                title: "Inspección Profunda",
                text: "Visión de uso de servicio de Internet. Segmentación por categorías o páginas web.",
              },
              {
                icon: <Cloud className="w-10 h-10 stroke-[1]" />,
                title: "Gestión en Nube",
                text: "Notificaciones de estado y desempeño de tus enlaces en tiempo real.",
              },
              {
                icon: <Activity className="w-10 h-10 stroke-[1]" />,
                title: "Monitoreo Libre",
                text: "Acceso a reportes históricos del consumo y desempeño de tus conexiones.",
              },
              {
                icon: <RefreshCw className="w-10 h-10 stroke-[1]" />,
                title: "Equipo Compatible",
                text: "Integración y optimización de otros proveedores de Internet a nuestros equipos.",
              },
            ].map((diff, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center mb-6 text-white bg-white/5 shadow-inner">
                  {diff.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-wide">{diff.title}</h4>
                <p className="text-blue-100/80 text-sm leading-relaxed max-w-[240px]">{diff.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQs) ── */}
      <section className="w-full bg-[#00041a] py-20 px-6 relative overflow-hidden">
        {/* Diagonal split background representation matching screenshot */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,50 0,90" fill="#0026ff" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-right mb-16 tracking-tight pr-6 border-r-4 border-cyan-400">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="w-full text-left rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-4 px-6 bg-[#8f5bff] hover:bg-[#8f5bff]/90 text-white font-bold text-sm sm:text-base cursor-pointer transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-black">{activeFaq === idx ? "−" : "+"}</span>
                </button>
                <div className={`transition-all duration-300 ease-in-out bg-[#00041a] border-x border-b border-white/5 rounded-b-2xl overflow-hidden ${
                  activeFaq === idx ? "max-h-40 py-4 px-6 opacity-100" : "max-h-0 py-0 px-6 opacity-0"
                }`}>
                  <p className="text-blue-200/90 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS LOGO MARQUEE ── */}
      <Partners />

    </div>
  );
}
