"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  compania: string;
  necesidad: string;
  telefono: string;
  mensaje: string;
}

const needsOptions = [
  "Internet Dedicado",
  "Alta Disponibilidad",
  "Ciberseguridad",
  "SD-WAN",
  "Data Center / Colocation",
  "WiFi Empresarial",
  "Video Vigilancia",
  "Otro",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "", email: "", compania: "", necesidad: "", telefono: "", mensaje: "",
  });
  const [errors, setErrors]         = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]       = useState(false);

  const validate = () => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.nombre.trim())    tempErrors.nombre    = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      tempErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El correo no es válido.";
    }
    if (!formData.compania.trim())  tempErrors.compania  = "Este campo es obligatorio.";
    if (!formData.necesidad.trim()) tempErrors.necesidad = "Este campo es obligatorio.";
    if (!formData.telefono.trim()) {
      tempErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ""))) {
      tempErrors.telefono = "Debe tener exactamente 10 dígitos.";
    }
    if (!formData.mensaje.trim())   tempErrors.mensaje   = "El mensaje es obligatorio.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ nombre: "", email: "", compania: "", necesidad: "", telefono: "", mensaje: "" });
      }, 1500);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-xl border transition-all duration-200 outline-none focus:bg-white ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-slate-200 focus:border-[var(--blue-primary)] focus:ring-2 focus:ring-blue-100"
    }`;

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-2xl pointer-events-none" />

      <div className="relative w-full bg-white rounded-3xl p-7 sm:p-9 border border-slate-100 shadow-[0_32px_64px_rgba(0,0,0,0.18)] overflow-hidden">

        {/* Top accent */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" />

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-14">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center mb-6 shadow-[0_0_32px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">¡Propuesta Solicitada!</h3>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-7">
              Hemos recibido tus datos. Un ingeniero especializado se pondrá en contacto contigo en menos de 24 horas.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[var(--purple-accent)] font-extrabold uppercase tracking-wider hover:underline focus:outline-none cursor-pointer"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Title */}
            <div className="mb-1">
              <h3 className="text-xl font-black text-slate-900">Solicita tu propuesta</h3>
              <p className="text-xs text-slate-400 mt-1">Respuesta garantizada en menos de 24 horas.</p>
            </div>

            {/* Row 1: Nombre + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Nombre completo *</label>
                <input type="text" name="nombre" placeholder="Juan García"
                  value={formData.nombre} onChange={handleChange} className={inputClass("nombre")} />
                {errors.nombre && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.nombre}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email *</label>
                <input type="email" name="email" placeholder="juan@empresa.com"
                  value={formData.email} onChange={handleChange} className={inputClass("email")} />
                {errors.email && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Compañía + Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Compañía *</label>
                <input type="text" name="compania" placeholder="Mi Empresa S.A."
                  value={formData.compania} onChange={handleChange} className={inputClass("compania")} />
                {errors.compania && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.compania}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Teléfono *</label>
                <input type="tel" name="telefono" placeholder="8112345678"
                  value={formData.telefono} onChange={handleChange} className={inputClass("telefono")} />
                {errors.telefono && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.telefono}
                  </span>
                )}
              </div>
            </div>

            {/* Necesidad — Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">¿Qué necesitas? *</label>
              <div className="relative">
                <select name="necesidad" value={formData.necesidad} onChange={handleChange}
                  className={`${inputClass("necesidad")} pr-10 cursor-pointer`}>
                  <option value="">Selecciona una solución</option>
                  {needsOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.necesidad && (
                <span className="text-[10px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.necesidad}
                </span>
              )}
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Mensaje *</label>
              <textarea name="mensaje" placeholder="Cuéntanos sobre tu empresa, número de empleados y necesidades de conectividad..."
                rows={3} value={formData.mensaje} onChange={handleChange}
                className={`${inputClass("mensaje")} resize-none`} />
              {errors.mensaje && (
                <span className="text-[10px] text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.mensaje}
                </span>
              )}
            </div>

            {/* reCAPTCHA mock */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3">
              <div className="relative w-8 h-8 shrink-0 flex items-center justify-center rounded bg-white shadow-sm border border-slate-200">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.002 2C6.48 2 2 6.48 2 12s4.48 10 10.002 10C17.52 22 22 17.52 22 12S17.52 2 12.002 2zm-1.8 15.6l-4.2-4.2 1.4-1.4 2.8 2.8 6.6-6.6 1.4 1.4-8 8z" />
                </svg>
              </div>
              <div className="flex flex-col text-[10px] text-slate-500 leading-tight">
                <span className="font-semibold text-slate-700">protected by reCAPTCHA</span>
                <span>Privacy - Terms</span>
              </div>
              <ShieldCheck className="w-4 h-4 text-slate-300 ml-auto" />
            </div>

            {/* Submit */}
            <button type="submit" disabled={isSubmitting}
              className="w-full relative overflow-hidden bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-violet-600 text-white font-bold py-4 rounded-xl transition-all duration-400 shadow-[0_8px_24px_rgba(139,92,246,0.4)] hover:shadow-[0_12px_32px_rgba(217,70,239,0.5)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Enviar y recibir propuesta</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}
