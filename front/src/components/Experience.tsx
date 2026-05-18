"use client";
import { useState } from "react";

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiencias = [
    {
      id: 0,
      empresa: "Plan TV",
      canal: "Canal 13",
      logo: "/logos/canal13.png",
      puesto: "Editor de Videos",
      fecha: "Mayo 2023 — Septiembre 2025",
      tareas: [
        "Edición de contenido dinámico para emisión nacional en el programa Plan TV.",
        "Gestión integral de post-producción visual bajo estándares de Artear.",
        "Coordinación de entregas y presupuestos para proyectos profesionales.",
      ],
      tools: [
        { name: "Premiere Pro", icon: "/public/design/premiere.svg" },
        { name: "After Effects", icon: "/public/design/after-effects.svg" },
      ],
    },
  ];

  return (
    <section id="experiencia" className="w-full max-w-6xl pt-24 pb-40 px-10">
      {/* Título */}
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic overflow-visible px-10">
          <span className="inline-block py-2 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
            EXPERIENCIA LABORAL
          </span>
        </h2>
        <div className="h-1.5 w-64 md:w-[450px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] rounded-full"></div>
      </div>

      {/* Selector y Contenido */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 w-full">
        {/* Selector de Empresa */}
        <div className="flex md:flex-col gap-6 shrink-0">
          {experiencias.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExp(exp.id)}
              className="group relative w-36 h-36 md:w-40 md:h-40 flex flex-col items-center justify-center transition-all duration-300"
            >
              <div
                className={`absolute inset-0 rounded-xl border transition-all duration-500 ${
                  activeExp === exp.id
                    ? "border-[#1e60ff]/50 bg-white/[0.05]"
                    : "border-transparent group-hover:border-white/10 group-hover:bg-white/[0.02]"
                }`}
              />

              <div className="relative z-10 w-14 h-14 mb-3">
                <img
                  src={exp.logo}
                  className={`w-full h-full object-contain transition-all duration-500 ${
                    activeExp === exp.id
                      ? "grayscale-0"
                      : "grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100"
                  }`}
                  alt="Logo"
                />
              </div>

              <div className="relative z-10 text-center px-2">
                <h4 className="text-white font-black text-xs uppercase tracking-tight">
                  {exp.empresa}
                </h4>
                <p className="text-[#37f98a] text-[8px] font-bold uppercase tracking-widest mt-1">
                  {exp.canal}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ÚNICA RAYA: Divisoria Vertical */}
        <div className="hidden md:block w-[1px] bg-white/10 self-stretch"></div>

        {/* Información del Puesto */}
        <div className="flex-1 w-full pt-1">
          <div key={activeExp} className="animate-in fade-in duration-500">
            <div className="flex flex-row justify-between items-end mb-8 pb-4">
              <h3 className="text-2xl md:text-3xl font-black italic uppercase leading-none bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
                {experiencias[activeExp].puesto}
              </h3>
              <span className="text-white font-mono font-bold text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap ml-4">
                {experiencias[activeExp].fecha}
              </span>
            </div>

            <ul className="space-y-5 w-full mb-12">
              {experiencias[activeExp].tareas.map((tarea, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-white text-sm md:text-base font-medium leading-relaxed"
                >
                  <span className="text-[#37f98a] mt-1.5 flex-shrink-0 text-[8px]">
                    ◆
                  </span>
                  <p className="opacity-80">{tarea}</p>
                </li>
              ))}
            </ul>

            {/* Herramientas con LOGOS (sin rayas raras) */}
            <div className="flex flex-wrap gap-6 pt-2">
              {experiencias[activeExp].tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 group/tool"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover/tool:border-[#37f98a] transition-all duration-300">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                  <span className="text-[8px] font-bold uppercase text-white/40 group-hover/tool:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
