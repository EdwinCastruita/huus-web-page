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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    compania: "",
    necesidad: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.nombre.trim()) tempErrors.nombre = "El nombre es obligatorio.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El correo no es válido.";
    }
    
    if (!formData.compania.trim()) tempErrors.compania = "Este campo es obligatorio.";
    if (!formData.necesidad.trim()) tempErrors.necesidad = "Este campo es obligatorio.";
    
    if (!formData.telefono.trim()) {
      tempErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ""))) {
      tempErrors.telefono = "Debe tener exactamente 10 dígitos.";
    }
    
    if (!formData.mensaje.trim()) tempErrors.mensaje = "El mensaje es obligatorio.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          nombre: "",
          email: "",
          compania: "",
          necesidad: "",
          telefono: "",
          mensaje: "",
        });
      }, 1500);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow shadow border matching purple accents */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" />
      
      <div className="relative w-full bg-white rounded-3xl p-6 sm:p-9 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Propuesta Solicitada!</h3>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
              Hemos recibido tus datos con éxito. Uno de nuestros ingenieros expertos en redes se pondrá en contacto contigo en menos de 24 horas.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-xs text-[var(--pink-cta)] font-extrabold uppercase tracking-wider hover:underline focus:outline-none cursor-pointer"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Input row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-800 uppercase mb-1">
                  Nombre completo *
                </label>
                <input 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre y Apellido"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm py-2 px-1 border-b ${
                    errors.nombre ? "border-red-500" : "border-slate-200 focus:border-[var(--pink-cta)]"
                  } outline-none transition-colors duration-150`}
                />
                {errors.nombre && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.nombre}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-800 uppercase mb-1">
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Nombre@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm py-2 px-1 border-b ${
                    errors.email ? "border-red-500" : "border-slate-200 focus:border-[var(--pink-cta)]"
                  } outline-none transition-colors duration-150`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Input row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Company */}
              <div className="flex flex-col sm:col-span-1">
                <label className="text-xs font-bold text-slate-800 uppercase mb-1">
                  Compañía / Giro *
                </label>
                <input 
                  type="text" 
                  name="compania"
                  placeholder="Marca"
                  value={formData.compania}
                  onChange={handleChange}
                  className={`w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm py-2 px-1 border-b ${
                    errors.compania ? "border-red-500" : "border-slate-200 focus:border-[var(--pink-cta)]"
                  } outline-none transition-colors duration-150`}
                />
                {errors.compania && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.compania}
                  </span>
                )}
              </div>

              {/* Needs? */}
              <div className="flex flex-col sm:col-span-1">
                <label className="text-xs font-bold text-slate-800 uppercase mb-1">
                  ¿Que Necesitas? *
                </label>
                <input 
                  type="text" 
                  name="necesidad"
                  placeholder="Marca"
                  value={formData.necesidad}
                  onChange={handleChange}
                  className={`w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm py-2 px-1 border-b ${
                    errors.necesidad ? "border-red-500" : "border-slate-200 focus:border-[var(--pink-cta)]"
                  } outline-none transition-colors duration-150`}
                />
                {errors.necesidad && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.necesidad}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:col-span-1">
                <label className="text-xs font-bold text-slate-800 uppercase mb-1">
                  Teléfono (10 digitos) *
                </label>
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm py-2 px-1 border-b ${
                    errors.telefono ? "border-red-500" : "border-slate-200 focus:border-[var(--pink-cta)]"
                  } outline-none transition-colors duration-150`}
                />
                {errors.telefono && (
                  <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.telefono}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-800 uppercase mb-1">
                Mensaje *
              </label>
              <textarea 
                name="mensaje"
                placeholder="Escriba aquí su mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm py-2 px-1 border-b ${
                  errors.mensaje ? "border-red-500" : "border-slate-200 focus:border-[var(--pink-cta)]"
                } outline-none resize-none transition-colors duration-150`}
              />
              {errors.mensaje && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.mensaje}
                </span>
              )}
            </div>

            {/* reCAPTCHA style mock */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3 mt-1">
              {/* Google reCAPTCHA icon */}
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

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[var(--pink-cta)] hover:bg-[#7f49ff] text-white font-semibold py-4 rounded-full transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(143,91,255,0.4)] hover:shadow-[0_12px_24px_-5px_rgba(143,91,255,0.6)] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
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
