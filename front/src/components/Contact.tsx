// src/components/Contact.tsx
"use client";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCargando(true);

    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje,
    };

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("¡Éxito!", response.status, response.text);

          setEnviado(true);

          setNombre("");
          setEmail("");
          setMensaje("");
        },
        (err) => {
          console.error("Error con EmailJS:", err);
          alert("Hubo un problema al enviar el mensaje. Probá de nuevo.");
        },
      )
      .finally(() => {
        setCargando(false);
      });
  };

  return (
    <section
      id="contacto"
      className="w-full max-w-6xl py-24 px-10 flex flex-col items-center"
    >
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible select-none translate-x-2">
          <span className="inline-block py-2 pr-6 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            CONTACTAME
          </span>
        </h2>
        <div className="h-1.5 w-[340px] md:w-[500px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-16 rounded-full"></div>
      </div>

      <div className="w-full max-w-2xl bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-xl backdrop-blur-sm min-h-[400px] flex items-center justify-center">
        {enviado ? (
          <div className="flex flex-col items-center text-center gap-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#37f98a]/10 border border-[#37f98a]/30 rounded-full flex items-center justify-center text-[#37f98a] text-3xl font-black shadow-[0_0_30px_rgba(55,249,138,0.1)]">
              ✓
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-white">
                ¡Mensaje Enviado!
              </h3>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed font-medium">
                Gracias por escribir. El correo ya impactó en mi bandeja de
                entrada y te voy a estar respondiendo lo antes posible.
              </p>
            </div>
            <button
              onClick={() => setEnviado(false)}
              className="mt-4 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs text-white/80 font-mono uppercase tracking-widest transition-all cursor-pointer"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold px-1">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                disabled={cargando}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: valentin lorenzo"
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-4 text-sm text-white/90 placeholder:text-white/20 focus:outline-none focus:border-[#1e60ff]/50 focus:ring-1 focus:ring-[#1e60ff]/30 transition-all font-medium disabled:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold px-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                disabled={cargando}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="valentin@example.com"
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-4 text-sm text-white/90 placeholder:text-white/20 focus:outline-none focus:border-[#1e60ff]/50 focus:ring-1 focus:ring-[#1e60ff]/30 transition-all font-medium disabled:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold px-1">
                Tu Mensaje
              </label>
              <textarea
                required
                rows={5}
                disabled={cargando}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Contame sobre tu proyecto o propuesta laboral..."
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-4 text-sm text-white/90 placeholder:text-white/20 focus:outline-none focus:border-[#37f98a]/50 focus:ring-1 focus:ring-[#37f98a]/30 transition-all font-medium resize-none leading-relaxed disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full mt-2 py-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] text-black font-black uppercase tracking-widest text-xs rounded-xl hover:opacity-95 transition-all shadow-[0_4px_25px_rgba(30,96,255,0.15)] cursor-pointer active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {cargando ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
