"use client";
import SkillCard from "./SkillCard";

export default function Skills() {
  const backendSkills = [
    { name: "NestJS", color: "#e0234e", icon: "nestjs.svg" },
    { name: "TypeScript", color: "#3178c6", icon: "typescript.svg" },
    { name: "PostgreSQL", color: "#336791", icon: "postgresql.svg" },
  ];

  const frontendSkills = [
    { name: "React", color: "#61dafb", icon: "react.svg" },
    { name: "JavaScript", color: "#f7df1e", icon: "javascript.svg" },
  ];

  return (
    <section
      id="habilidades"
      className="w-full max-w-6xl py-24 px-10 flex flex-col items-center text-center"
    >
      <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible px-10">
        <span className="inline-block py-2 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
          HABILIDADES
        </span>
      </h2>

      <div className="h-1.5 w-[340px] md:w-[500px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>

      {/* CATEGORÍA BACK END */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white mb-12 uppercase tracking-[0.3em]">
          Back End
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {backendSkills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      {/* CATEGORÍA FRONT END */}
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
  );
}
