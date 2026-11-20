
import React from "react";
import { FAQS } from "@/data/catalogo";

export default function Faq() {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {FAQS.map((faq) => (
          <details
            key={faq.pregunta}
            className="group rounded-2xl border border-stone-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-stone-900">
              <span>{faq.pregunta}</span>
              <span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl leading-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">{faq.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}