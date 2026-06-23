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
    duracion: "Spot principal · Hero Video",
    orientacion: "16:9 cinematográfico",
    queEs:
      "El corazón narrativo de la semana. Spot principal cinematográfico que aplica la regla “Muestra, no cuentes”.",
    paraQue:
      "Generar conexión emocional profunda explicando el trasfondo de una propuesta a través de micro-historias humanas.",
    comoSeVe:
      "Arranca directo con El Gancho de los 3 Segundos. Mezcla planos de Dron 4K, ópticas fijas con desenfoque de fondo y música in crescendo.",
    donde: "YouTube · Facebook · Instagram",
    frecuencia: "1 por semana",
    video: media.reels.cineminuto,
    colSpan: "md:col-span-7",
  },
  {
    id: "color",
    nombre: "Color",
    duracion: "Micro-cápsula nativa",
    orientacion: "vertical 9:16",
    queEs:
      "Micro-cápsula vertical con edición rítmica basada en el ASMR Urbano: el sonido de la ciudad dictando los cortes.",
    paraQue:
      "Lograr retención masiva, viralidad instantánea y modernizar la imagen ante las nuevas generaciones.",
    comoSeVe:
      "Cortes rápidos (1.5 s), paleta de color viva, texturas de los espacios públicos recuperados, rostros de la comunidad y subtítulos dinámicos.",
    donde: "TikTok · Reels · YouTube Shorts",
    frecuencia: "2 por semana",
    video: media.reels.color,
    colSpan: "md:col-span-5",
  },
  {
    id: "face-to-face",
    nombre: "Face to Face",
    duracion: "Cobertura ágil",
    orientacion: "vertical nativo",
    queEs:
      "Cobertura ágil estilo Run and Gun o Vlog: Clara resolviendo problemas en territorio y hablando de tú a tú con la gente.",
    paraQue: "Transmitir autenticidad, cercanía y escucha activa directamente desde el territorio.",
    comoSeVe:
      "Cámara en mano controlada o celular de alta gama, sin filtros, con audio ambiental real. Captura el momento.",
    donde: "Redes · historias y contenido al momento",
    frecuencia: "Cada evento",
    video: media.reels.faceToFace,
    colSpan: "md:col-span-4",
  },
  {
    id: "podcast",
    nombre: "Podcast “Clara Escucha”",
    duracion: "Episodio + 8–10 clips",
    orientacion: "horizontal + vertical",
    queEs:
      "Clara en una conversación humana, cercana y sin filtros con invitados especiales. El episodio es el “colchón” del que salen los clips.",
    paraQue:
      "Crear un espacio de diálogo extendido, instalar discurso y optimizar assets reciclables de una sola grabación.",
    comoSeVe:
      "Set con look premium y texturas ricas. Clips verticales (9:16) con subtítulos dinámicos que cambian de tamaño o color para enfatizar palabras clave.",
    donde: "Episodio en YouTube · cortes en redes",
    frecuencia: "2 al mes + 8–10 clips",
    video: media.reels.podcast,
    colSpan: "md:col-span-4",
  },
  {
    id: "servicios",
    nombre: "Servicios",
    duracion: "Video dinámico hipermoderno",
    orientacion: "formato mixto",
    queEs:
      "Lanzamiento de un servicio institucional o programa con Gráficos Integrados (VFX/Motion Graphics) y tipografías que flotan en un entorno 3D.",
    paraQue:
      "Comunicar datos duros, programas y beneficios institucionales sin perder el dinamismo visual.",
    comoSeVe:
      "Formato mixto, uso avanzado de gráficos integrados y textos flotantes hipermodernos en la escena.",
    donde: "Facebook · Instagram · TikTok",
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
  {
    formato: "Cineminuto",
    frecuencia: "1 por semana",
    publica: "YouTube · Facebook · IG",
    estilo: "16:9, estética cinematográfica de pantalla grande, ópticas fijas, música in crescendo.",
    objetivo: "Conexión emocional profunda; explicar propuestas a través de micro-historias humanas.",
  },
  {
    formato: "Color",
    frecuencia: "2 por semana",
    publica: "TikTok · Reels · Shorts",
    estilo: "Vertical 9:16, cortes rápidos (1.5 s), paleta viva, subtítulos dinámicos y ASMR urbano.",
    objetivo: "Retención masiva, viralidad instantánea y modernización de la imagen ante nuevas generaciones.",
  },
  {
    formato: "Face to Face",
    frecuencia: "Cada evento",
    publica: "Vertical · Redes",
    estilo: "Estilo Vlog, cámara en mano, color natural sin excesiva postproducción, audio ambiental premium.",
    objetivo: "Transmitir autenticidad, cercanía y escucha activa directamente desde el territorio.",
  },
  {
    formato: "Podcast “Clara Escucha”",
    frecuencia: "2 al mes + 8–10 clips",
    publica: "YouTube + cortes en redes",
    estilo: "Set con look premium y texturas ricas. Clips en vertical 9:16 con tipografía dinámica integrada.",
    objetivo: "Espacio de diálogo extendido, instalación de discurso y optimización de assets reciclables.",
  },
  {
    formato: "Servicios",
    frecuencia: "1 por semana",
    publica: "Facebook · Instagram · TikTok",
    estilo: "Formato mixto, uso avanzado de gráficos integrados (VFX) y textos flotantes hipermodernos.",
    objetivo: "Comunicar datos duros, programas y beneficios institucionales sin perder dinamismo visual.",
  },
];

export const ventajaLogistica =
  "De un solo día de levantamiento de imagen en territorio bajo el estilo Run and Gun, el equipo creativo genera el material base (B-roll) suficiente para editar el Cineminuto, las piezas de Color y el video de Servicios de la semana, haciendo la producción altamente eficiente.";

export interface DiaParrilla {
  dia: string;
  titulo: string;
  formato: string;
  plataforma: string;
  enfoque: string;
}

export const parrilla: DiaParrilla[] = [
  {
    dia: "Lunes",
    titulo: "Lanzamiento de Servicios",
    formato: "Video dinámico e hipermoderno (1 por semana)",
    plataforma: "Facebook · Instagram · TikTok",
    enfoque:
      "Gráficos Integrados (VFX/Motion Graphics) con tipografías modernas que flotan en un entorno 3D para explicar un servicio institucional de manera visual y atractiva.",
  },
  {
    dia: "Martes",
    titulo: "Primer Contenido Color",
    formato: "Micro-cápsula nativa vertical (9:16)",
    plataforma: "TikTok · Reels · YouTube Shorts",
    enfoque:
      "Edición rítmica basada en el ASMR Urbano. Texturas, la viveza de los espacios públicos recuperados y rostros de la comunidad con color grading cinematográfico.",
  },
  {
    dia: "Miércoles",
    titulo: "El Cineminuto (Hero Video)",
    formato: "Spot principal cinematográfico (1 por semana)",
    plataforma: "YouTube · Facebook · Instagram",
    enfoque:
      "El corazón narrativo de la semana. Arranca con El Gancho de los 3 Segundos, mezcla Dron 4K, ópticas fijas y música in crescendo para una profunda conexión emocional.",
  },
  {
    dia: "Jueves",
    titulo: "Podcast “Clara Escucha”",
    formato: "Video-podcast completo (quincenal) + cortes semanales",
    plataforma: "YouTube + cortes verticales en redes",
    enfoque:
      "Clara en una conversación humana y sin filtros con invitados especiales. Los días sin episodio se lanzan clips de alto impacto con subtítulos dinámicos.",
  },
  {
    dia: "Viernes",
    titulo: "Segundo Contenido Color",
    formato: "Micro-cápsula nativa vertical (9:16)",
    plataforma: "TikTok · Reels · YouTube Shorts",
    enfoque:
      "Conexión y viralidad instantánea enfocada en públicos clave. Tomas fluidas con estabilizador (gimbals) y técnicas de pantalla dividida (split-screen).",
  },
  {
    dia: "Variable",
    titulo: "Face to Face · Cobertura",
    formato: "Formato vertical nativo de cobertura ágil",
    plataforma: "Redes · historias y contenido al momento",
    enfoque:
      "Estilo Run and Gun o Vlog. Cámara en mano o celular de alta gama para capturar la autenticidad absoluta: Clara resolviendo problemas en territorio, de tú a tú.",
  },
];
