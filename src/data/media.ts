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

export const media = {
  heroReel: cloudinaryVideo("reels/general"),
  heroPoster: cloudinaryPoster("reels/general"),
  reels: {
    cineminuto: cloudinaryVideo("reels/cineminuto"),
    color: cloudinaryVideo("reels/color"),
    faceToFace: cloudinaryVideo("reels/face-to-face"),
    podcast: cloudinaryVideo("reels/podcast"),
    servicios: cloudinaryVideo("reels/servicios"),
  },
  avatar: cloudinaryImage("feed/avatar.jpg"),
};
