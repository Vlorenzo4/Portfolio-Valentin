// src/components/SkillCard.tsx
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
    <div className="group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 cursor-pointer">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl"
        style={{ boxShadow: `0 0 20px ${color}15` }}
      />

      <div
        className="absolute w-16 h-16 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-3xl rounded-full"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 mb-2">
        <Image
          src={`/icons/${icon}`}
          alt={name}
          fill
          className="object-contain grayscale brightness-125 contrast-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500"
        />
      </div>

      <span
        className="relative z-10 text-xs md:text-sm font-bold tracking-wide transition-colors duration-300"
        style={{ color: "rgba(255, 255, 255, 0.5)" }} //   Blanco apagado inicial
      >
        <span className="group-hover:hidden">{name}</span>
        <span className="hidden group-hover:inline" style={{ color: color }}>
          {name}
        </span>
      </span>
    </div>
  );
}
