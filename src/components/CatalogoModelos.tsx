
import React from "react";
import { MODELOS_DESTACADOS } from "@/data/catalogo";

export default function CatalogoModelos() {
  return (
    <section id="modelos" className="py-16 px-4 sm:px-6 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-3">Colección Base</h2>
          <p className="text-stone-600">
            Cada diseño puede personalizarse en color de tapa, tipo de papel interior y nombre grabado en relieve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELOS_DESTACADOS.map((modelo) => (
            <div
              key={modelo.id}
              className="group rounded-2xl border border-stone-200 bg-stone-50 p-5 flex flex-col justify-between hover:border-stone-400 transition"
            >
              <div>
                {/* Simulación visual de tapa (reemplazar por foto individual de cada modelo cuando las tengan) */}
                <div
                  className={`h-44 rounded-xl mb-4 border-2 flex items-center justify-center p-4 text-white shadow-inner relative ${modelo.colorPreview}`}
                >
                  {modelo.badge && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 text-[11px] font-bold">
                      {modelo.badge}
                    </span>
                  )}
                  <span className="font-serif text-center text-sm opacity-90 tracking-wide">
                    {modelo.titulo}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-1">{modelo.titulo}</h3>
                <p className="text-xs font-medium text-emerald-800 mb-2">{modelo.subtitulo}</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{modelo.descripcion}</p>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-500 block">Desde</span>
                  <span className="font-bold text-stone-900">
                    ${modelo.precioDesde.toLocaleString("es-AR")}
                  </span>
                </div>
                <a
                  href="#configurador"
                  className="text-xs font-semibold text-stone-900 underline underline-offset-4 hover:text-emerald-800"
                >
                  Configurar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}