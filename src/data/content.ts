import { cloudinaryImage, media } from "./media";

export interface Formato {
  id: string;
  nombre: string;
  duracion: string;
  orientacion: string;
  queEs: string;
  paraQue: string;
  comoSeVe: string;
  donde: string;
  frecuencia: string;
  video: string;
  colSpan: string;
}

export const formatos: Formato[] = [
  {
    id: "cineminuto",
    nombre: "Cineminuto",
    duracion: "1:30 – 2:15 min",
    orientacion: "horizontal",
    queEs:
      "Mini-documental con estética de cine sobre una obra o programa (p. ej. una Utopía o el Parque Elevado).",
    paraQue:
      "Conectar con emoción y mostrar la cercanía real con la gente; voz en off de Clara.",
    comoSeVe:
      "Tomas cuidadas, música, narrativa con inicio y final, color de cine. Personas reales, no selfies.",
    donde: "YouTube · Facebook · Instagram",
    frecuencia: "1 por semana",
    video: media.reels.cineminuto,
    colSpan: "md:col-span-7",
  },
  {
    id: "color",
    nombre: "Color",
    duracion: "20 – 40 seg",
    orientacion: "vertical",
    queEs:
      "Tomas de la ciudad: gente, calles, paisajes, urbanismo. Contemplativo (referencia “la ola”).",
    paraQue:
      "Transmitir el pulso de la CDMX; ambiente y cercanía sin que ella aparezca.",
    comoSeVe: "Observacional, ritmo tranquilo, sin locución.",
    donde: "TikTok · Reels · Shorts",
    frecuencia: "2 por semana",
    video: media.reels.color,
    colSpan: "md:col-span-5",
  },
  {
    id: "face-to-face",
    nombre: "Face to Face",
    duracion: "vertical",
    orientacion: "vertical",
    queEs: "Clara explica o invita a cámara lo que se hizo (p. ej. en Tlalpan).",
    paraQue: "Que ella comunique en primera persona, de tú a tú.",
    comoSeVe: "Ella al frente, con apoyo de dron y tomas de campo.",
    donde: "Redes (vertical)",
    frecuencia: "Cada que hay evento",
    video: media.reels.faceToFace,
    colSpan: "md:col-span-4",
  },
  {
    id: "podcast",
    nombre: "Podcast “Clara Escucha”",
    duracion: "largo + clips",
    orientacion: "horizontal + vertical",
    queEs: "El podcast largo es el “colchón” de contenido; de ahí salen los clips.",
    paraQue: "Generar mucho material de una sola grabación y mantener flujo constante.",
    comoSeVe:
      "Set con identidad propia (colores, micrófono, sello “La Ciudad que Cuida”); clips con ritmo.",
    donde: "Largo en YouTube; clips en TikTok / Reels / Shorts",
    frecuencia: "2 al mes + 8–10 clips",
    video: media.reels.podcast,
    colSpan: "md:col-span-4",
  },
  {
    id: "servicios",
    nombre: "Servicios",
    duracion: "tipo spot",
    orientacion: "vertical",
    queEs: "Clara toca puertas o explica una reforma/programa nuevo. Gestión que se ve.",
    paraQue: "Mostrar contacto directo y resultados concretos.",
    comoSeVe: "Más producido, formato spot, ella como protagonista.",
    donde: "Redes",
    frecuencia: "1 por semana",
    video: media.reels.servicios,
    colSpan: "md:col-span-4",
  },
];

export const enfoque = {
  evitamos: [
    "Se ve como un anuncio de gobierno · guion rígido y formal",
    "Locutor leyendo un texto · tono acartonado y distante",
    "Mismo video para todas las redes · no aprovecha cada plataforma",
    "La gente lo salta en 2 segundos · no genera conversación",
  ],
  buscamos: [
    "Se siente real y cercano · como un video que un amigo te manda",
    "Historias con emoción · personas, obras y resultados que importan",
    "Formato pensado para cada red · TikTok, Reels, YouTube, Facebook",
    "La gente lo ve completo y lo comparte · genera confianza y comunidad",
  ],
};

export const tecnicas = [
  {
    titulo: "Dron 4K",
    descripcion: "Tomas aéreas que muestran el tamaño real de las obras.",
    imagen: cloudinaryImage("refs/dron.jpg"),
  },
  {
    titulo: "Run & gun",
    descripcion: "Cámara ágil que graba en movimiento, sin grandes sets.",
    imagen: cloudinaryImage("refs/run-gun.jpg"),
  },
  {
    titulo: "Color de cine",
    descripcion: "Color grading cálido y premium.",
    imagen: cloudinaryImage("refs/color.jpg"),
  },
  {
    titulo: "Ritmo y sonido",
    descripcion: "Montaje al ritmo de la música.",
    imagen: cloudinaryImage("refs/ritmo.jpg"),
  },
  {
    titulo: "Motion graphics",
    descripcion: "Datos y cifras en pantalla, claros y modernos.",
    imagen: cloudinaryImage("refs/motion.jpg"),
  },
  {
    titulo: "Lenguaje cinematográfico",
    descripcion: "Planos, pausas y narrativa que refuerzan la emoción.",
    imagen: cloudinaryImage("refs/lenguaje.jpg"),
  },
];

export const porQueFunciona = [
  {
    titulo: "Conexión emocional inmediata",
    descripcion: "La gente siente algo, no solo ve un anuncio.",
  },
  {
    titulo: "Eficiencia de contenido",
    descripcion: "De una grabación salen muchos formatos. Más alcance, menos costo.",
  },
  {
    titulo: "Modernización de la imagen",
    descripcion: "Comunicación a la altura de las redes de hoy.",
  },
];

export const chipsImpacto = [
  "Mayor confianza",
  "Atención más rápida",
  "Participación activa",
  "Sentido de comunidad",
];

export const frecuencias = [
  { formato: "Cineminuto", frecuencia: "1 por semana", publica: "YouTube · Facebook · IG" },
  { formato: "Color", frecuencia: "2 por semana", publica: "TikTok · Reels · Shorts" },
  { formato: "Face to Face", frecuencia: "Cada evento", publica: "Vertical · Redes" },
  {
    formato: "Podcast “Clara Escucha”",
    frecuencia: "2 al mes + 8–10 clips",
    publica: "YouTube + cortes en redes",
  },
  { formato: "Servicios", frecuencia: "1 por semana", publica: "Redes" },
];
