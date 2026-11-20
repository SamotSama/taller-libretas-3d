import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { CONFIG_NEGOCIO } from "@/data/catalogo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: `${CONFIG_NEGOCIO.nombreMarca} | Libretas Artesanales con Tapas 3D`,
  description:
    "Encuadernación cosida a mano combinada con tapas rígidas en relieve impresas en 3D. Diseños personalizados en Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans bg-stone-50 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}