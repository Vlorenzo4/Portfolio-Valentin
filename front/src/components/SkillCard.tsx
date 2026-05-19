import Image from "next/image";

export default function SkillCard({
  name,
  color,
  icon,
}: {
  name: string;
  color: string;
  icon: string;
}) {
  return (
    <div className="group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 cursor-pointer select-none">
      {/* FONDO EN HOVER: Ahora pasa a ser blanco sólido para recortar los logos oscuros */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 rounded-2xl bg-white border border-transparent shadow-xl group-hover:scale-105"
        style={{
          boxShadow: `0 10px 30px rgba(255, 255, 255, 0.2), 0 0 20px ${color}30`,
        }}
      />

      {/* TU EFECTO DE DESTELLO: Se mantiene atrás para dar un aura sutil de color */}
      <div
        className="absolute w-16 h-16 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-2xl rounded-full pointer-events-none"
        style={{ backgroundColor: color }}
      />

      {/* CONTENEDOR DEL LOGO */}
      <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-400 group-hover:scale-105">
        <Image
          src={`/logos/${icon}`}
          alt={name}
          fill
          className="object-contain grayscale brightness-125 contrast-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-400"
        />
      </div>

      {/* TEXTO DE LA TECNOLOGÍA */}
      <span
        className="relative z-10 text-xs md:text-sm font-black tracking-wide uppercase transition-colors duration-300"
        style={{ color: "rgba(255, 255, 255, 0.4)" }} // Blanco apagado inicial sobre el fondo negro
      >
        {/* En reposo se ve gris/blanco apagado */}
        <span className="group-hover:hidden">{name}</span>

        {/* EN HOVER: Pasa a color negro sólido para que se lea perfecto sobre el nuevo fondo blanco */}
        <span className="hidden group-hover:inline text-black font-black">
          {name}
        </span>
      </span>
    </div>
  );
}
