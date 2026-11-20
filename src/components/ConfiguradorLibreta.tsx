
"use client";

import React, { useState, useMemo } from "react";
import { Send, Check } from "lucide-react";
import {
  CONFIG_NEGOCIO,
  TAMANOS,
  DISENOS_TAPA,
  COLORES_FILAMENTO,
  INTERIORES,
  OpcionConfigurador,
} from "@/data/catalogo";

export default function ConfiguradorLibreta() {
  const [tamano, setTamano] = useState<OpcionConfigurador>(TAMANOS[1]);
  const [diseno, setDiseno] = useState<OpcionConfigurador>(DISENOS_TAPA[0]);
  const [colorPrincipal, setColorPrincipal] = useState(COLORES_FILAMENTO[0]);
  const [interior, setInterior] = useState<OpcionConfigurador>(INTERIORES[0]);
  const [nombreRelieve, setNombreRelieve] = useState<string>("");
  const [incluirSenalador, setIncluirSenalador] = useState<boolean>(false);
  const [notasExtra, setNotasExtra] = useState<string>("");

  const precioTotal = useMemo(() => {
    let total =
      CONFIG_NEGOCIO.precioBaseA5 +
      tamano.precioExtra +
      diseno.precioExtra +
      interior.precioExtra;

    if (nombreRelieve.trim().length > 0) total += CONFIG_NEGOCIO.precioNombreRelieve;
    if (incluirSenalador) total += CONFIG_NEGOCIO.precioSenalador;

    return total;
  }, [tamano, diseno, interior, nombreRelieve, incluirSenalador]);

  const handleEnviarPedido = () => {
    const lineas = [
      `Hola *${CONFIG_NEGOCIO.nombreMarca}*! Quiero encargar una libreta personalizada:`,
      "",
      `• *Tamaño:* ${tamano.nombre}`,
      `• *Diseño de tapa:* ${diseno.nombre}`,
      `• *Color de filamento:* ${colorPrincipal.nombre}`,
      `• *Interior (80 hojas):* ${interior.nombre}`,
      `• *Nombre en relieve:* ${nombreRelieve.trim() ? nombreRelieve.trim() : "Sin nombre"}`,
      `• *Señalador 3D haciendo juego:* ${incluirSenalador ? "Sí" : "No"}`,
      notasExtra.trim() ? `• *Aclaraciones:* ${notasExtra.trim()}` : "",
      "",
      `• *Total estimado:* $${precioTotal.toLocaleString("es-AR")} ARS`,
    ].filter(Boolean);

    const url = `https://wa.me/${CONFIG_NEGOCIO.telefonoWhatsApp}?text=${encodeURIComponent(
      lineas.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="configurador" className="py-16 px-4 sm:px-6 bg-stone-100 border-y border-stone-200">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Pedido a medida
          </span>
          <h2 className="text-3xl font-bold text-stone-900 mt-1">Armá tu Libreta</h2>
          <p className="text-sm text-stone-600 mt-1">
            Calculá el valor al instante y envianos el detalle por WhatsApp para coordinar la seña y entrega ({CONFIG_NEGOCIO.demoraProduccion}).
          </p>
        </div>

        <div className="space-y-7">
          {/* 1. Tamaño */}
          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-2.5">
              1. Elegí el tamaño
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TAMANOS.map((item) => {
                const activo = tamano.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTamano(item)}
                    className={`p-3.5 text-left rounded-xl border transition ${
                      activo
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-300 bg-white text-stone-800 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex justify-between items-center font-semibold text-sm">
                      <span>{item.nombre}</span>
                      {item.precioExtra !== 0 && (
                        <span className="text-xs opacity-85">
                          {item.precioExtra > 0
                            ? `+$${item.precioExtra.toLocaleString("es-AR")}`
                            : `-$${Math.abs(item.precioExtra).toLocaleString("es-AR")}`}
                        </span>
                      )}
                    </div>
                    {item.descripcion && (
                      <p className={`text-xs mt-1 ${activo ? "text-stone-300" : "text-stone-500"}`}>
                        {item.descripcion}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Diseño de tapa */}
          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-2.5">
              2. Diseño de tapa 3D
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DISENOS_TAPA.map((item) => {
                const activo = diseno.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDiseno(item)}
                    className={`p-3.5 text-left rounded-xl border text-sm transition flex justify-between items-center ${
                      activo
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-300 bg-white text-stone-800 hover:border-stone-400"
                    }`}
                  >
                    <span className="font-medium">{item.nombre}</span>
                    <span className="text-xs opacity-85">
                      {item.precioExtra > 0 ? `+$${item.precioExtra.toLocaleString("es-AR")}` : "Base"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Color principal */}
          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-2.5">
              3. Color principal de tapa: <span className="font-normal text-stone-600">{colorPrincipal.nombre}</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {COLORES_FILAMENTO.map((color) => {
                const activo = colorPrincipal.nombre === color.nombre;
                return (
                  <button
                    key={color.nombre}
                    type="button"
                    onClick={() => setColorPrincipal(color)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border transition ${
                      activo
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.nombre}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Interior */}
          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-2">
              4. Tipo de hojas (80 hojas)
            </label>
            <select
              value={interior.id}
              onChange={(e) => {
                const seleccionado = INTERIORES.find((i) => i.id === e.target.value);
                if (seleccionado) setInterior(seleccionado);
              }}
              className="w-full p-3 rounded-xl border border-stone-300 bg-white text-sm text-stone-800 focus:outline-none focus:border-stone-900"
            >
              {INTERIORES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nombre}{" "}
                  {item.precioExtra > 0 ? `(+$${item.precioExtra.toLocaleString("es-AR")})` : ""}
                </option>
              ))}
            </select>
          </div>

          {/* 5. Adicionales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-1.5">
                Nombre o iniciales en relieve (+${CONFIG_NEGOCIO.precioNombreRelieve.toLocaleString("es-AR")})
              </label>
              <input
                type="text"
                maxLength={22}
                placeholder="Ej: Ailín (opcional)"
                value={nombreRelieve}
                onChange={(e) => setNombreRelieve(e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-stone-900"
              />
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={() => setIncluirSenalador(!incluirSenalador)}
                className={`w-full p-3 rounded-xl border text-sm text-left flex items-center justify-between transition ${
                  incluirSenalador
                    ? "border-emerald-700 bg-emerald-50 text-emerald-950 font-medium"
                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
                }`}
              >
                <span>Sumar señalador 3D (+${CONFIG_NEGOCIO.precioSenalador.toLocaleString("es-AR")})</span>
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center border ${
                    incluirSenalador ? "bg-emerald-700 border-emerald-700 text-white" : "border-stone-300"
                  }`}
                >
                  {incluirSenalador && <Check className="w-3.5 h-3.5" />}
                </span>
              </button>
            </div>
          </div>

          {/* Notas opcionales */}
          <div>
            <label className="block text-sm font-semibold text-stone-900 mb-1.5">
              Aclaraciones para el pedido (opcional)
            </label>
            <input
              type="text"
              maxLength={120}
              placeholder="Ej: Es para regalo, combinación de colores para detalle, etc."
              value={notasExtra}
              onChange={(e) => setNotasExtra(e.target.value)}
              className="w-full p-3 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-stone-900"
            />
          </div>

          {/* Resumen y botón WhatsApp */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-500 block">
                Total estimado
              </span>
              <span className="text-3xl font-bold text-stone-900">
                ${precioTotal.toLocaleString("es-AR")} <span className="text-sm font-normal">ARS</span>
              </span>
            </div>

            <button
              type="button"
              onClick={handleEnviarPedido}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Encargar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}