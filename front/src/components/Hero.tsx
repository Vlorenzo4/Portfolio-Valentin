export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="flex flex-col items-center text-center max-w-4xl mt-[-40px]">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-6 overflow-visible select-none">
          <span className="block py-2 px-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            VALENTIN
          </span>
          <span className="block py-2 px-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            LORENZO
          </span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10">
          Desarrollador Full Stack con foco en arquitecturas de servidor y
          manejo de datos. Mi enfoque está en construir aplicaciones donde la
          lógica del backend y la interfaz del usuario funcionen en total
          sincronía.
        </p>

        <a
          href="/CV-FULLSTACK - Valentin Lorenzo.pdf"
          download
          className="px-10 py-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(30,96,255,0.2)]"
        >
          DESCARGAR CV
        </a>
      </div>
    </section>
  );
}
