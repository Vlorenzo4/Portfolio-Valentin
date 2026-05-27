"use client";
import { useState } from "react";
import Image from "next/image";

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiencias = [
    {
      id: 0,
      empresa: "Plan TV",
      canal: "Canal 13",
      logo: "plantv.png",
      puesto: "Editor de Videos",
      fecha: "Mayo 2023 — Sept 2025",
      tareas: [
        `Gestioné flujos de trabajo con tiempos de entrega innegociables para emisión nacional, una capacidad de
respuesta que hoy traslado al cumplimiento de sprints y despliegues técnicos.
`,
        `Sistematicé la organización de grandes volúmenes de activos digitales, aplicando una lógica de orden y jerarquía
que es la base de mi estructura de código actual.
`,
      ],
      tools: [
        { name: "Premiere Pro", icon: "premiere.svg" },
        { name: "After Effects", icon: "after-effects.svg" },
      ],
    },
  ];

  return (
    <section id="experiencia" className="w-full max-w-6xl py-32 px-10 mx-auto">
      <div className="flex flex-col items-center text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
          EXPERIENCIA LABORAL
        </h2>
        <div className="h-1.5 w-72 md:w-[550px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-stretch min-h-[450px]">
        <div className="flex md:flex-col gap-6 shrink-0 justify-center md:justify-start">
          {experiencias.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExp(exp.id)}
              className={`group relative w-32 h-32 md:w-44 md:h-44 flex flex-col items-center justify-center rounded-3xl transition-all duration-500 border-2
                ${
                  activeExp === exp.id
                    ? "border-[#1e60ff] bg-white/[0.08] shadow-[0_0_40px_rgba(30,96,255,0.2)]"
                    : "border-transparent bg-transparent hover:bg-white/[0.05] hover:border-white/10"
                }`}
            >
              <div
                className={`relative w-16 h-16 md:w-24 md:h-24 mb-3 transition-all duration-500
                ${activeExp === exp.id ? "grayscale-0 scale-110" : "grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0"}`}
              >
                <Image
                  src={`/logos/${exp.logo}`}
                  alt={exp.empresa}
                  fill
                  className="object-cover rounded-2xl md:rounded-3xl"
                />
              </div>

              <div className="text-center">
                <p
                  className={`text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors
                  ${activeExp === exp.id ? "text-white" : "text-white/40 group-hover:text-white"}`}
                >
                  {exp.empresa}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        <div className="flex-1">
          <div
            key={activeExp}
            className="animate-in fade-in slide-in-from-right-8 duration-700"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white mb-2">
                  {experiencias[activeExp].puesto}
                </h3>
                <p className="text-[#37f98a] font-bold text-sm uppercase tracking-[0.2em]">
                  {experiencias[activeExp].empresa}{" "}
                  <span className="text-white/20 mx-2">|</span>{" "}
                  {experiencias[activeExp].canal}
                </p>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="text-white/60 font-mono text-xs font-bold uppercase">
                  {experiencias[activeExp].fecha}
                </span>
              </div>
            </div>

            <ul className="space-y-6 mb-12">
              {experiencias[activeExp].tareas.map((tarea, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#1e60ff] shadow-[0_0_10px_#1e60ff] shrink-0"></span>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {tarea}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
              {experiencias[activeExp].tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-xl hover:border-[#37f98a]/50 transition-colors"
                >
                  <Image
                    src={`/logos/${tool.icon}`}
                    width={20}
                    height={20}
                    alt={tool.name}
                    className="object-contain"
                  />
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-tighter group-hover:text-white">
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
