"use client";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center w-full">
      {/* --- SECCIÓN HERO --- */}
      <Hero />

      {/* --- SECCIÓN PROYECTOS  --- */}
      <Projects />

      {/* --- SECCIÓN HABILIDADES  --- */}
      <Skills />

      {/* --- SECCIÓN EXPERIENCIA LABORAL  --- */}
      <Experience />

      <Contact />

      {/* FORMULARIO DE CONTACTO (FOOTER) */}
      <Footer />
    </main>
  );
}
