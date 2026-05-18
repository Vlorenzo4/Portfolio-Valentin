"use client";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-duo-card border border-white/10 rounded-5xl p-10 md:p-16 w-full max-w-6xl mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-bold text-duo-green mb-4">¿Hablamos?</h2>
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
  );
}
