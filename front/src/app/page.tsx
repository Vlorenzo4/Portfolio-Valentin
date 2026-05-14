"use client";
import { useState } from "react";
import SkillCard from "../components/SkillCard";
export default function Home() {
  const [activeExp, setActiveExp] = useState(0);
  const backendSkills = [
    { name: "NestJS", color: "#e0234e", icon: "nestjs.svg" },
    { name: "TypeScript", color: "#3178c6", icon: "typescript.svg" },
    { name: "PostgreSQL", color: "#336791", icon: "postgresql.svg" },
  ];

  const frontendSkills = [
    { name: "React", color: "#61dafb", icon: "react.svg" },
    { name: "JavaScript", color: "#f7df1e", icon: "javascript.svg" },
  ];

  const experiencias = [
    {
      id: 0,
      empresa: "Plan TV",
      canal: "Canal 13",
      logo: "/logos/canal13.png", // Asegurate de tener esta ruta
      puesto: "Editor de Videos",
      fecha: "Mayo 2023 — Septiembre 2025",
      tareas: [
        "Edición de contenido dinámico para emisión nacional en el programa Plan TV.",
        "Gestión integral de post-producción visual bajo estándares de Artear.",
        "Coordinación de entregas y presupuestos para proyectos profesionales.",
      ],
      tools: [
        { name: "Premiere Pro", icon: "/icons/premiere.png" },
        { name: "After Effects", icon: "/icons/after.png" },
        { name: "Photoshop", icon: "/icons/photoshop.png" },
        { name: "Illustrator", icon: "/icons/illustrator.png" },
      ],
    },
    // Aquí podés agregar Henry u otras en el futuro
  ];

  //const tools = [{ name: "Docker", color: "#2496ed", icon: "docker.svg" }];

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center w-full">
      {/* --- SECCIÓN HERO --- */}
      <section className="mb-40 mt-10 flex flex-col items-center">
        <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] mb-8">
          {/* Usamos inline-block y un padding derecho exagerado para Lorenzo */}
          <span className="inline-block py-2 pr-10 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
            VALENTIN
            <br />
            LORENZO
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mb-12 opacity-90">
          Full Stack Developer orientado a Backend. Especializado en crear
          soluciones sólidas y escalables.
        </p>

        {/* BOTÓN CON DEGRADADO */}
        <a
          href="/tu-cv.pdf"
          download
          className="px-12 py-5 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] text-black font-black text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(30,96,255,0.2)] uppercase tracking-widest"
        >
          Descargar CV
        </a>
      </section>
      {/* --- SECCIÓN HABILIDADES --- */}
      <section
        id="habilidades"
        className="w-full max-w-6xl py-24 px-10 flex flex-col items-center text-center"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible px-10">
          <span className="inline-block py-2 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
            HABILIDADES
          </span>
        </h2>

        {/* Ajustamos la raya para que sea un poco más ancha y combine con el título expandido */}
        <div className="h-1.5 w-[340px] md:w-[500px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>
        <div className="mb-20">
          {/* Subtítulos en blanco puro y centrados */}
          <h3 className="text-2xl font-bold text-white mb-12 uppercase tracking-[0.3em]">
            Back End
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {backendSkills.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-12 uppercase tracking-[0.3em]">
            Front End
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {frontendSkills.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>
      {/* --- SECCIÓN EXPERIENCIA LABORAL --- */}
      {/* Añadimos pb-40 para dar mucho más espacio antes de Proyectos */}
      <section id="experiencia" className="w-full max-w-6xl pt-24 pb-40 px-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic overflow-visible px-10">
            <span className="inline-block py-2 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
              EXPERIENCIA LABORAL
            </span>
          </h2>
          <div className="h-1.5 w-64 md:w-[450px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] rounded-full"></div>
        </div>

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

              {/* Herramientas con LOGOS */}
              <div className="flex flex-wrap gap-6 pt-8 ">
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
      {/* --- SECCIÓN PROYECTOS  --- */}
      <section
        id="proyectos"
        className="w-full max-w-6xl py-24 px-10 flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
          {/* Mismo equilibrio aquí */}
          <span className="inline-block py-2 px-10 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
            PROYECTOS
          </span>
        </h2>
        <div className="h-1.5 w-[340px] md:w-[500px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>
        <div className="text-white/40 text-xl italic">
          Próximamente: Proyectos de Backend y Full Stack...
        </div>
      </section>
      {/* FORMULARIO DE CONTACTO (FOOTER) */}
      <footer className="bg-duo-card border border-white/10 rounded-5xl p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-duo-green mb-4">
              ¿Hablamos?
            </h2>
            <p className="text-white/40 text-lg">
              Dejame un mensaje y nos ponemos en contacto.
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <input
              placeholder="Tu nombre"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-duo-green transition-all"
            />
            <input
              placeholder="Tu email"
              className="bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-duo-green transition-all"
            />
            <textarea
              placeholder="Tu mensaje"
              rows={4}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-duo-green transition-all"
            ></textarea>
            <button className="bg-white text-black font-bold py-4 rounded-2xl hover:bg-duo-green transition-colors">
              Enviar
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
