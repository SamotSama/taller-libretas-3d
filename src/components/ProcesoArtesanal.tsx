
import React from "react";
import { Layers, Scissors, PenTool } from "lucide-react";

const PASOS = [
  {
    icono: Layers,
    titulo: "1. Impresión 3D de alta precisión",
    descripcion:
      "Imprimimos cada tapa y contratapa con textura mate y relieves definidos, logrando acabados imposibles en cartón tradicional.",
  },
  {
    icono: Scissors,
    titulo: "2. Plegado y costura a mano",
    descripcion:
      "Seleccionamos papel ahuesado de 80g ideal para escritura fluida, plegamos los cuadernillos y los cosemos hilo por hilo.",
  },
  {
    icono: PenTool,
    titulo: "3. Ensamble y detalles finales",
    descripcion:
      "Unimos las tapas rígidas con lomo reforzado, guardas, cinta señaladora y controlamos cada detalle antes de embalar.",
  },
];

export default function ProcesoArtesanal() {
  return (
    <section id="proceso" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-3">Tecnología + Oficio Artesanal</h2>
        <p className="text-stone-600">
          No hacemos producción industrial en serie: cada cuaderno pasa por la impresora y por nuestras manos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PASOS.map((paso) => {
          const Icono = paso.icono;
          return (
            <div key={paso.titulo} className="p-6 rounded-2xl bg-white border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-emerald-800 mb-4">
                <Icono className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{paso.titulo}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{paso.descripcion}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}