"use client";
import { useState } from "react";
import Image from "next/image"; // <-- Solución al aviso de las imágenes de Next.js

// Definimos la Interfaz para solucionar el error del 'any' en TypeScript
interface Proyecto {
  id: number;
  titulo: string;
  anio: string;
  descripcion: string;
  imagen: string;
  tags: string[];
  github: string;
}

export default function Projects() {
  // Ahora el estado sabe que puede ser un objeto de tipo Proyecto o null
  const [proyectoSeleccionado, setProyectoSeleccionado] =
    useState<Proyecto | null>(null);

  const misProyectos: Proyecto[] = [
    {
      id: 1,
      titulo: "Montevino",
      anio: "2024",
      descripcion:
        "Sistema completo de gestión y reserva para restaurantes. MonteVino nació como una necesidad de digitalizar la experiencia gastronómica, permitiendo un control total sobre las reservas, el flujo de clientes y la optimización del servicio en tiempo real. Se enfocó en una arquitectura escalable capaz de manejar picos de tráfico sin perder rendimiento.",
      imagen: "/projects/montevino-placeholder.jpg",
      tags: ["React", "NestJS", "PostgreSQL", "TypeScript"],
      github: "https://github.com/tu-usuario/montevino",
    },
    {
      id: 2,
      titulo: "E-Commerce API",
      anio: "2023",
      descripcion:
        "Desarrollo de una API robusta para comercio electrónico. El enfoque principal fue la seguridad y la integridad de los datos, implementando autenticación JWT, hashing de contraseñas y validaciones estrictas. La base de datos fue diseñada para soportar relaciones complejas entre productos, usuarios y pedidos de manera eficiente.",
      imagen: "/projects/ecommerce-placeholder.jpg",
      tags: ["NestJS", "PostgreSQL", "JWT", "TypeScript"],
      github: "https://github.com/tu-usuario/ecommerce",
    },
  ];

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
      {/* GRILLA DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {misProyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            onClick={() => setProyectoSeleccionado(proyecto)}
            className="group cursor-pointer relative bg-white/[0.02] border border-white/10 rounded-[32px] overflow-hidden hover:border-[#1e60ff]/40 transition-all duration-300 flex flex-col p-6 pb-8"
          >
            <div className="flex flex-row justify-between items-center mb-6 px-2">
              <h3 className="text-3xl font-black italic uppercase text-white tracking-tight group-hover:text-[#37f98a] transition-colors">
                {proyecto.titulo}
              </h3>
              <span className="text-white/60 font-mono font-bold text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {proyecto.anio}
              </span>
            </div>

            <div className="w-full aspect-[16/10] bg-[#0c0c0c] border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e60ff]/10 to-[#37f98a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Componente optimizado de Next.js */}
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                fill
                className="object-cover p-6 rounded-xl filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL DE DETALLES --- */}
      {proyectoSeleccionado && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setProyectoSeleccionado(null)}
          ></div>

          <div className="relative z-10 w-full max-w-5xl bg-[#111] border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row animate-in zoom-in duration-300 shadow-2xl">
            <button
              onClick={() => setProyectoSeleccionado(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-20 font-bold"
            >
              ✕
            </button>

            {/* Parte Izquierda: Imagen optimizada */}
            <div className="w-full md:w-1/2 p-6 md:p-10 min-h-[300px] md:min-h-auto relative">
              <div className="w-full h-full bg-black/50 rounded-2xl overflow-hidden border border-white/5 relative aspect-[16/10] md:aspect-auto">
                <Image
                  src={proyectoSeleccionado.imagen}
                  alt={proyectoSeleccionado.titulo}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Parte Derecha: Información */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-4xl font-black italic uppercase text-white tracking-tighter">
                  {proyectoSeleccionado.titulo}
                </h3>
                <span className="text-[#37f98a] font-mono font-bold text-sm bg-[#37f98a]/10 px-3 py-1 rounded-lg">
                  {proyectoSeleccionado.anio}
                </span>
              </div>

              <p className="text-white/70 text-base leading-relaxed mb-8 font-medium">
                {proyectoSeleccionado.descripcion}
              </p>

              <div className="mb-10">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-4 italic">
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2">
                  {proyectoSeleccionado.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={proyectoSeleccionado.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-8 py-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(30,96,255,0.3)]"
              >
                Ver Repositorio
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
