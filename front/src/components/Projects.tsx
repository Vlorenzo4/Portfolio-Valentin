"use client";
import { useState } from "react";
import Image from "next/image";
import { Proyecto, misProyectos } from "../data/proyectos";

export default function Projects() {
  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<Proyecto | null>(null);

  return (
    <section
      id="proyectos"
      className="w-full max-w-6xl py-24 px-10 flex flex-col items-center"
    >
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible select-none translate-x-2">
          <span className="inline-block py-2 pr-6 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            PROYECTOS
          </span>
        </h2>
        <div className="h-1.5 w-[340px] md:w-[500px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {misProyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            onClick={() => setProyectoSeleccionado(proyecto)}
            className="group cursor-pointer relative bg-white/[0.02] border border-white/10 rounded-[32px] overflow-hidden hover:border-[#1e60ff]/40 transition-all duration-300 flex flex-col p-6 pb-8 h-full justify-between"
          >
            <div className="w-full mb-6 px-2 flex flex-col gap-1.5">
              <span className="text-white/40 font-mono font-bold text-xs tracking-wider uppercase">
                {proyecto.anio}
              </span>
              <h3 className="text-3xl font-black italic uppercase text-white tracking-tight group-hover:text-[#37f98a] transition-colors">
                {proyecto.titulo}
              </h3>
            </div>

            <div className="w-full mt-auto">
              <div className="w-full aspect-[16/10] bg-[#0c0c0c] border border-white/5 rounded-[24px] relative overflow-hidden flex items-center justify-center p-4 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e60ff]/10 to-[#37f98a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover rounded-[18px] filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {proyectoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setProyectoSeleccionado(null)}
          ></div>

          <div className="relative z-10 w-full max-w-[1240px] h-[90vh] md:h-[82vh] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#1a1a1a] border border-white/[0.05] rounded-[28px] animate-in zoom-in-95 duration-200">
            <div className="bg-[#121212] border border-white/[0.03] rounded-[20px] p-4 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                  src={proyectoSeleccionado.imagen}
                  alt={proyectoSeleccionado.titulo}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            <div className="grid grid-rows-[auto_auto_1fr_auto] gap-4 overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 bg-[#222222] border border-white/[0.04] p-5 rounded-[18px]">
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight italic select-none">
                  {proyectoSeleccionado.titulo}
                </h3>
                <button
                  onClick={() => setProyectoSeleccionado(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/10 text-white/60 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-[1fr_2.5fr] gap-4 bg-[#222222] border border-white/[0.04] p-5 rounded-[18px]">
                <div className="flex flex-col justify-center">
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-white/40 mb-1">
                    Año:
                  </h4>
                  <span className="text-white/90 font-mono font-bold text-sm">
                    {proyectoSeleccionado.anio}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-white/40 mb-1">
                    Tecnologías:
                  </h4>
                  <div className="text-xs font-bold text-[#37f98a]">
                    {proyectoSeleccionado.tags.join(", ")}
                  </div>
                </div>
              </div>

              <div className="bg-[#222222] border border-white/[0.04] p-6 rounded-[18px] overflow-hidden flex flex-col">
                <div className="overflow-y-auto pr-2 h-full custom-scrollbar text-white/80 text-sm md:text-[15px] leading-relaxed font-medium">
                  <p className="whitespace-pre-line">
                    {proyectoSeleccionado.descripcion}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <a
                  href={proyectoSeleccionado.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] text-black font-black uppercase tracking-widest text-xs rounded-xl hover:opacity-95 transition-all shadow-[0_4px_25px_rgba(30,96,255,0.12)]"
                >
                  Ver Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e60ff;
          border-radius: 10px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #1e60ff rgba(255, 255, 255, 0.01);
        }
      `}</style>
    </section>
  );
}
