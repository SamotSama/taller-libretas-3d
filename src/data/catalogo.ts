export interface OpcionConfigurador {
  id: string;
  nombre: string;
  descripcion?: string;
  precioExtra: number;
}

export interface ModeloDestacado {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  precioDesde: number;
  badge?: string;
  colorPreview: string;
}

export const CONFIG_NEGOCIO = {
  nombreMarca: "Trazo & Capa", // Cambiar por el nombre definitivo
  telefonoWhatsApp: "5491100000000", // Formato internacional sin + ni espacios
  instagram: "@trazoycapa.ar",
  zona: "CABA y GBA • Envíos a todo el país",
  precioBaseA5: 32000,
  precioNombreRelieve: 3000,
  precioSenalador: 2500,
  demoraProduccion: "4 a 6 días hábiles",
};

export const MODELOS_DESTACADOS: ModeloDestacado[] = [
  {
    id: "grimorio",
    titulo: "Edición Grimorio Celestial",
    subtitulo: "Tapa bicolor en relieve (Negro Mate + Dorado Seda)",
    descripcion:
      "Inspirado en ediciones de fantasía. Tapa rígida impresa en alta precisión con costura expuesta reforzada y señalador hoja en 3D.",
    precioDesde: 35500,
    badge: "Más pedido",
    colorPreview: "bg-zinc-900 border-amber-500/60",
  },
  {
    id: "botanico",
    titulo: "Herbario Botánico",
    subtitulo: "Relieve orgánico en Verde Salvia + Lomo en lienzo crudo",
    descripcion:
      "Textura táctil de hojas y ramas en alto relieve sobre base mate, combinada con encuadernación tradicional en tela.",
    precioDesde: 32000,
    colorPreview: "bg-emerald-800/90 border-stone-300",
  },
  {
    id: "lector",
    titulo: "Reading Journal",
    subtitulo: "Azul Profundo + Esquineras metálicas",
    descripcion:
      "Pensado para registrar lecturas, reseñas y citas favoritas. Incluye secciones interiores estructuradas y marcador de página.",
    precioDesde: 34500,
    colorPreview: "bg-slate-800 border-amber-400/50",
  },
  {
    id: "monograma",
    titulo: "Geométrico Monograma",
    subtitulo: "Terracota Mate con iniciales personalizadas",
    descripcion:
      "Diseño arquitectónico minimalista con tus iniciales integradas directamente en el molde de impresión 3D.",
    precioDesde: 35000,
    colorPreview: "bg-orange-900/85 border-stone-300",
  },
];

export const TAMANOS: OpcionConfigurador[] = [
  {
    id: "a6",
    nombre: "A6 (Bolsillo)",
    descripcion: "10,5 × 15 cm • Ideal para llevar siempre",
    precioExtra: -4000,
  },
  {
    id: "a5",
    nombre: "A5 (Clásico)",
    descripcion: "15 × 21 cm • Tamaño estándar de escritorio",
    precioExtra: 0,
  },
];

export const DISENOS_TAPA: OpcionConfigurador[] = [
  { id: "botanico", nombre: "Relieve Botánico", precioExtra: 0 },
  { id: "grimorio", nombre: "Grimorio Fantasía (Bicolor)", precioExtra: 3500 },
  { id: "geometrico", nombre: "Geométrico Minimal", precioExtra: 0 },
  { id: "lector", nombre: "Edición Reading Journal", precioExtra: 2500 },
];

export const COLORES_FILAMENTO = [
  { nombre: "Negro Mate", hex: "#1c1917" },
  { nombre: "Verde Salvia", hex: "#5f7161" },
  { nombre: "Azul Profundo", hex: "#1e3a5f" },
  { nombre: "Terracota", hex: "#9a4c3a" },
  { nombre: "Blanco Mármol", hex: "#e7e5e4" },
  { nombre: "Violeta / Lila", hex: "#6b4c7a" },
];

export const INTERIORES: OpcionConfigurador[] = [
  { id: "lisas", nombre: "Hojas Lisas (Bookcel 80g ahuesado)", precioExtra: 0 },
  { id: "rayadas", nombre: "Hojas Rayadas", precioExtra: 1000 },
  { id: "punteadas", nombre: "Hojas Punteadas (Bullet Journal)", precioExtra: 1500 },
];

export const FAQS = [
  {
    pregunta: "¿De qué material son las tapas?",
    respuesta:
      "Están impresas en 3D con PLA de alta calidad (un bioplástico rígido, liviano y resistente derivado de almidones vegetales). Tienen un acabado mate texturado y excelente definición en los relieves.",
  },
  {
    pregunta: "¿Cómo es la encuadernación?",
    respuesta:
      "Cada libreta se pliega, perfora y cose 100% a mano cuadernillo por cuadernillo. Esto permite una apertura plana cómoda para escribir o dibujar sin que se despeguen las hojas.",
  },
  {
    pregunta: "¿Qué cuidados necesita la tapa 3D?",
    respuesta:
      "Son súper resistentes para el uso diario en mochilas o escritorios. Solo recomendamos evitar exponerlas a temperaturas extremas (por ejemplo, dejarlas al sol directo dentro de un auto cerrado en verano).",
  },
  {
    pregunta: "¿Cuánto demora un pedido y cómo son los envíos?",
    respuesta:
      "Al hacerse a pedido y a mano, la demora es de 4 a 6 días hábiles. Entregamos por mensajería en CABA y GBA, o por Correo Argentino / Andreani a todo el país.",
  },
];