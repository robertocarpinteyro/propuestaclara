import { cloudinaryImage } from "./media";

/**
 * Datos del mockup de Instagram — editar aquí sin tocar el diseño.
 * Handle y métricas a confirmar con el cliente.
 */
export const profile = {
  avatar: "/avatar.jpg",
  handle: "claragob", // a confirmar
  nombre: "Clara Brugada",
  bio: ["Jefa de Gobierno de la Ciudad de México", "💜 La Ciudad que Cuida"],
  link: "laciudadquecuida.cdmx.gob.mx",
  publicaciones: "312",
  seguidores: "1.2 M",
  seguidos: "186",
};

export const highlights = ["Cineminuto", "Color", "Cara a Cara", "Podcast", "Servicios"];

export type PostTipo = "reel" | "carrusel" | "foto";

export interface FeedPost {
  src: string;
  tipo: PostTipo;
  likes: string;
  comentarios: string;
  fijado?: boolean;
  /** color del placeholder mientras no hay miniatura real */
  tono: string;
}

export const posts: FeedPost[] = [
  { src: cloudinaryImage("feed/post1.jpg"), tipo: "reel", likes: "24.1 k", comentarios: "812", fijado: true, tono: "from-[#9F2241] to-[#3d0d19]" },
  { src: cloudinaryImage("feed/post2.jpg"), tipo: "carrusel", likes: "18.4 k", comentarios: "603", fijado: true, tono: "from-[#D98AA6] to-[#9F2241]" },
  { src: cloudinaryImage("feed/post3.jpg"), tipo: "reel", likes: "31.7 k", comentarios: "1,204", fijado: true, tono: "from-[#1B6A4D] to-[#0a2e21]" },
  { src: cloudinaryImage("feed/post4.jpg"), tipo: "reel", likes: "12.9 k", comentarios: "451", tono: "from-[#2b2b2b] to-[#0a0a0a]" },
  { src: cloudinaryImage("feed/post5.jpg"), tipo: "foto", likes: "9.8 k", comentarios: "287", tono: "from-[#caa46a] to-[#6e5026]" },
  { src: cloudinaryImage("feed/post6.jpg"), tipo: "reel", likes: "27.3 k", comentarios: "934", tono: "from-[#9F2241] to-[#1a0509]" },
  { src: cloudinaryImage("feed/post7.jpg"), tipo: "carrusel", likes: "11.2 k", comentarios: "318", tono: "from-[#46637f] to-[#16222e]" },
  { src: cloudinaryImage("feed/post8.jpg"), tipo: "reel", likes: "15.6 k", comentarios: "522", tono: "from-[#D98AA6] to-[#5e2033]" },
  { src: cloudinaryImage("feed/post9.jpg"), tipo: "foto", likes: "8.4 k", comentarios: "199", tono: "from-[#1B6A4D] to-[#123527]" },
  { src: cloudinaryImage("feed/post10.jpg"), tipo: "reel", likes: "21.0 k", comentarios: "768", tono: "from-[#7a1a33] to-[#240811]" },
  { src: cloudinaryImage("feed/post11.jpg"), tipo: "carrusel", likes: "10.5 k", comentarios: "342", tono: "from-[#3a3a3a] to-[#111111]" },
  { src: cloudinaryImage("feed/post12.jpg"), tipo: "reel", likes: "19.8 k", comentarios: "655", tono: "from-[#9F2241] to-[#D98AA6]" },
];
