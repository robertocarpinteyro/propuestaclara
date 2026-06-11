/**
 * Configuración de media en Cloudinary.
 * Reemplazar CLOUD_NAME y los public IDs cuando se suba el material real.
 * Mientras un asset conserve "<PENDIENTE>", el sitio muestra un placeholder
 * estilizado en su lugar (no se rompe nada).
 */
export const CLOUD_NAME = "<PENDIENTE>";

const VIDEO_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto`;
const IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto`;

export const cloudinaryVideo = (publicId: string) => `${VIDEO_BASE}/${publicId}.mp4`;
export const cloudinaryPoster = (publicId: string) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,f_auto,q_auto/${publicId}.jpg`;
export const cloudinaryImage = (publicId: string) => `${IMAGE_BASE}/${publicId}`;

export const isMediaReady = (url: string) => !url.includes("<PENDIENTE>");

/** Cineminuto — también se usa como reel del hero/footer */
const CINEMINUTO_URL =
  "https://res.cloudinary.com/dxcr9utre/video/upload/f_auto,q_auto/v1781158563/Prueba1_1_ksgc1l.mp4";
const CINEMINUTO_POSTER =
  "https://res.cloudinary.com/dxcr9utre/video/upload/so_0,f_auto,q_auto/v1781158563/Prueba1_1_ksgc1l.jpg";

/** Color — reel contemplativo ("la ola") */
const COLOR_URL =
  "https://res.cloudinary.com/dxcr9utre/video/upload/f_auto,q_auto/v1781168026/OLA_MA%CC%81S_GRANDE_fzuxpf.mp4";

export const media = {
  heroReel: CINEMINUTO_URL,
  heroPoster: CINEMINUTO_POSTER,
  reels: {
    cineminuto: CINEMINUTO_URL,
    color: COLOR_URL,
    faceToFace: cloudinaryVideo("reels/face-to-face"),
    podcast: cloudinaryVideo("reels/podcast"),
    servicios: cloudinaryVideo("reels/servicios"),
  },
  avatar: cloudinaryImage("feed/avatar.jpg"),
};
