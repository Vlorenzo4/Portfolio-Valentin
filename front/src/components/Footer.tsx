"use client";

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0c0c0c] border-t border-white/5 py-12 px-6 md:px-10 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-black tracking-tighter uppercase italic text-white select-none ">
            VALENTÍN
          </span>
          <p className="text-xs text-white/40 font-medium">
            Backend & Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-bold tracking-wide">
          <a
            href="https://github.com/Vlorenzo4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#1e60ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/valenlorenzo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#37f98a] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:valenvfx04@gmail.com"
            className="text-white/60 hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-6"></div>

      <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 select-none">
        © {anioActual} — Diseñado & Desarrollado por Valentín
      </p>
    </footer>
  );
}
