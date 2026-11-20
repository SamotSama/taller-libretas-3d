
import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { CONFIG_NEGOCIO } from "@/data/catalogo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 text-stone-800 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
            <span>Hecho a mano + Impresión 3D • {CONFIG_NEGOCIO.zona}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]">
            Libretas únicas con tapas esculpidas en 3D y costura artesanal.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Combinamos la calidez de la encuadernación tradicional cosida a mano con relieves de alta precisión impresos capa por capa. Elegí el diseño, los colores y el interior a tu medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#configurador"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition shadow-sm"
            >
              Personalizar mi libreta
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#modelos"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 font-medium text-sm transition"
            >
              Ver diseños disponibles
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-200 aspect-[4/3]">
            {/* Reemplazar src con las fotos reales de Ailín en public/images/hero-libretas.jpg */}
            <img
              src="/images/hero-libretas.jpg"
              alt="Colección de libretas artesanales con tapas en relieve impresas en 3D"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}