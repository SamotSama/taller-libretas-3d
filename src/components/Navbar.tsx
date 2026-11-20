
import React from "react";
import { BookOpen } from "lucide-react";
import { CONFIG_NEGOCIO } from "@/data/catalogo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-serif text-xl font-bold text-stone-900">
          <BookOpen className="w-5 h-5 text-emerald-800" />
          <span>{CONFIG_NEGOCIO.nombreMarca}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a href="#modelos" className="hover:text-stone-900 transition">Modelos</a>
          <a href="#proceso" className="hover:text-stone-900 transition">Cómo se hacen</a>
          <a href="#faq" className="hover:text-stone-900 transition">Preguntas</a>
        </nav>

        <a
          href="#configurador"
          className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium transition"
        >
          Armá tu libreta
        </a>
      </div>
    </header>
  );
}