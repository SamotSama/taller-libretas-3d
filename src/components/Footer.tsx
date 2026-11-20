
import React from "react";
import { CONFIG_NEGOCIO } from "@/data/catalogo";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10 px-4 sm:px-6 text-sm text-stone-600">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif font-bold text-stone-900">{CONFIG_NEGOCIO.nombreMarca}</span>
          <span className="mx-2">•</span>
          <span>{CONFIG_NEGOCIO.zona}</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`https://instagram.com/${CONFIG_NEGOCIO.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition"
          >
            Instagram ({CONFIG_NEGOCIO.instagram})
          </a>
          <a href="#configurador" className="hover:text-stone-900 transition">
            Hacer un pedido
          </a>
        </div>
      </div>
    </footer>
  );
}