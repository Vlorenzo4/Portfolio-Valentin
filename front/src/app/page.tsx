import SkillCard from "../components/SkillCard";
export default function Home() {
  const backendSkills = [
    { name: "NestJS", color: "#e0234e", icon: "nestjs.svg" },
    { name: "TypeScript", color: "#3178c6", icon: "typescript.svg" },
    { name: "PostgreSQL", color: "#336791", icon: "postgresql.svg" },
  ];

  const frontendSkills = [
    { name: "React", color: "#61dafb", icon: "react.svg" },
    { name: "JavaScript", color: "#f7df1e", icon: "javascript.svg" },
  ];

  //const tools = [{ name: "Docker", color: "#2496ed", icon: "docker.svg" }];

  return (
    <main className="min-h-screen p-6 md:p-20 max-w-5xl mx-auto flex flex-col items-center text-center">
      {" "}
      {/* --- SECCIÓN HERO --- */}
      <section className="mb-40 mt-10 flex flex-col items-center">
        <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] mb-8 overflow-visible px-4">
          <span className="bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
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
        className="w-full flex flex-col items-center mb-40"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible px-10">
          <span className="bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
            HABILIDADES
          </span>
        </h2>

        <div className="h-1.5 w-80 md:w-[450px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>

        <div className="mb-20 w-full">
          <h3 className="text-2xl font-bold text-white mb-12 uppercase tracking-widest opacity-80">
            Back End
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {backendSkills.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-bold text-white mb-12 uppercase tracking-widest opacity-80">
            Front End
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {frontendSkills.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>
      {/* --- SECCIÓN PROYECTOS (Igual a Habilidades) --- */}
      <section
        id="proyectos"
        className="w-full flex flex-col items-center mb-40"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic overflow-visible px-10">
          <span className="bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent">
            PROYECTOS
          </span>
        </h2>

        <div className="h-1.5 w-80 md:w-[450px] bg-gradient-to-r from-[#1e60ff] to-[#37f98a] mb-20 rounded-full"></div>
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
