export default function Hero() {
  return (
    // min-h-screen ocupa el 100% de la pantalla actual.
    // flex-col y justify-center tiran todo tu contenido al centro vertical exacto.
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Todo tu contenido actual del Hero (Tu Nombre, Descripción, Botón) va acá adentro */}
      <div className="flex flex-col items-center text-center max-w-4xl mt-[-40px]">
        {/* Nota: el 'mt-[-40px]' es un truco de UI para compensar ópticamente el peso de la barra de navegación de arriba */}

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-6 overflow-visible select-none">
          {/* Le agregamos px-4 para darle aire a los bordes de la palabra y evitar el corte de la N */}
          <span className="block py-2 px-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            VALENTIN
          </span>
          <span className="block py-2 px-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] bg-clip-text text-transparent overflow-visible">
            LORENZO
          </span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10">
          Full Stack Developer orientado a Backend. Especializado en crear
          soluciones sólidas y escalables.
        </p>

        <a
          href="/tu-cv.pdf"
          className="px-10 py-4 bg-gradient-to-r from-[#1e60ff] to-[#37f98a] text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(30,96,255,0.2)]"
        >
          DESCARGAR CV
        </a>
      </div>
    </section>
  );
}
