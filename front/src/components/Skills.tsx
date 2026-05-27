"use client";
import SkillCard from "./SkillCard";

export default function Skills() {
  const backendSkills = [
    { name: "Node.js", color: "#ffffff", icon: "nodejs.svg" },
    { name: "NestJS", color: "#ffffff", icon: "nestjs.svg" },
    { name: "TypeScript", color: "#ffffff", icon: "typescript.svg" },
    { name: "Express", color: "#ffffff", icon: "expressjs.svg" },
    { name: "Swagger", color: "#ffffff", icon: "swagger.svg" },
  ];

  const frontendSkills = [
    { name: "React", color: "#ffffff", icon: "react.svg" },
    { name: "Next.js", color: "#ffffff", icon: "nextjs.svg" },
    { name: "JavaScript", color: "#ffffff", icon: "javascript.svg" },
    { name: "Tailwind CSS", color: "#ffffff", icon: "tailwindcss.svg" },
  ];

  const dbSkills = [
    { name: "PostgreSQL", color: "#ffffff", icon: "postgresql.svg" },
    { name: "MongoDB", color: "#ffffff", icon: "mongodb.svg" },
  ];

  const toolsSkills = [
    { name: "Git", color: "#ffffff", icon: "git.svg" },
    { name: "GitHub", color: "#ffffff", icon: "github.svg" },
    { name: "Docker", color: "#ffffff", icon: "docker.svg" },
    { name: "Copilot", color: "#ffffff", icon: "copilot.svg" },
    { name: "Gemini", color: "#ffffff", icon: "Gemini.svg" },
  ];

  return (
    <section
      id="habilidades"
      className="w-full max-w-6xl py-24 px-10 flex flex-col items-center text-center"
    >
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible select-none translate-x-2">
          <span className="inline-block py-2 pr-6 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            HABILIDADES
          </span>
        </h2>
        <div className="h-1.5 w-[340px] md:w-[500px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>
      </div>

      <div className="mb-20 w-full">
        <h3 className="text-2xl font-bold text-white/40 mb-12 uppercase tracking-[0.3em] italic">
          Front End
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {frontendSkills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mb-20 w-full">
        <h3 className="text-2xl font-bold text-white/40 mb-12 uppercase tracking-[0.3em] italic">
          Back End
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {backendSkills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mb-20 w-full">
        <h3 className="text-2xl font-bold text-white/40 mb-12 uppercase tracking-[0.3em] italic">
          Base de Datos
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {dbSkills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-2xl font-bold text-white/40 mb-12 uppercase tracking-[0.3em] italic">
          Herramientas & IA
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {toolsSkills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
