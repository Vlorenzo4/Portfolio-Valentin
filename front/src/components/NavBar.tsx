"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Experiencia Laboral", href: "#experiencia" },
    { label: "Contactame", href: "#contacto" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[200] flex flex-col gap-2 w-[240px] font-sans select-none items-stretch">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-white text-black h-12 rounded-[18px] flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <div className="flex flex-col gap-1 w-4">
            <span className="h-0.5 bg-black rounded-full w-full"></span>
            <span className="h-0.5 bg-black rounded-full w-full"></span>
          </div>
          <span className="font-black text-sm tracking-tight uppercase">
            Menú
          </span>
        </button>
      )}

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-white text-black h-12 rounded-[18px] flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 duration-200"
        >
          <span className="font-black text-sm text-black/70">✕</span>
          <span className="font-black text-sm tracking-tight uppercase">
            Cerrar
          </span>
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col gap-2 w-full">
          {menuItems.map((item, index) => {
            const delayTime = `${index * 100}ms`;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                style={{ animationDelay: delayTime }}
                className="group w-full bg-white text-black h-14 rounded-[20px] px-4 flex items-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200
                  animate-fade-in-down"
              >
                <span className="text-sm font-black text-black/30 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-200">
                  →
                </span>

                <span className="font-black text-xs uppercase tracking-tight text-black/80 group-hover:text-black transition-colors">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
