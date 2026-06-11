import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { highlights, posts, profile, type FeedPost } from "../data/feed";
import { isMediaReady } from "../data/media";

/** Miniatura: imagen real de Cloudinary o gradiente placeholder */
const Thumb = ({ post, className = "" }: { post: FeedPost; className?: string }) =>
  isMediaReady(post.src) ? (
    <img src={post.src} alt="" className={`${className} object-cover`} loading="lazy" />
  ) : (
    <div className={`${className} bg-gradient-to-br ${post.tono}`} />
  );

const ReelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white drop-shadow" aria-hidden>
    <path d="M9.5 7.5v9l7-4.5-7-4.5z" />
    <path d="M3 8h18M8 3l3 5M14 3l3 5" stroke="white" strokeWidth="1.6" fill="none" />
    <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5" stroke="white" strokeWidth="1.6" fill="none" />
  </svg>
);

const CarruselIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white drop-shadow" aria-hidden>
    <path d="M19 3H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
    <path d="M5 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" fill="none" stroke="white" strokeWidth="1.8" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white drop-shadow" aria-hidden>
    <path d="M16 3l5 5-6 2-4 8-3-3-5 5-1-1 5-5-3-3 8-4 2-6z" />
  </svg>
);

const InstagramFeed = () => {
  const [lightbox, setLightbox] = useState<FeedPost | null>(null);

  return (
    <section id="feed" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="El feed"
          titulo={
            <>
              Así se vería el <span className="font-display italic">perfil</span>
            </>
          }
          subtexto="Mockup del feed de Instagram con esta estrategia: paleta consistente, alternancia de formatos y un perfil cuidado. Handle y números a confirmar."
        />

        {/* Marco de teléfono */}
        <div className="max-w-[420px] mx-auto rounded-[44px] border-[10px] border-[#1a1a1a] bg-white text-black shadow-2xl overflow-hidden font-body">
          {/* Header del perfil */}
          <div className="px-4 py-4">
            <div className="flex items-center gap-6">
              <div className="p-[3px] rounded-full accent-gradient shrink-0">
                <img
                  src={profile.avatar}
                  alt={profile.nombre}
                  className="w-[80px] h-[80px] rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="font-semibold text-base">@{profile.handle}</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#3897F0]" aria-label="Verificado">
                    <path d="M12 2l2.4 2.4 3.3-.5.5 3.3L20.6 9 22 12l-1.4 3-2.4 1.8-.5 3.3-3.3-.5L12 22l-2.4-2.4-3.3.5-.5-3.3L3.4 15 2 12l1.4-3 2.4-1.8.5-3.3 3.3.5L12 2z" />
                    <path d="M10.5 14.5l-2-2-1 1 3 3 6-6-1-1-5 5z" fill="white" />
                  </svg>
                </div>
                <div className="flex gap-5 text-sm">
                  <span><strong>{profile.publicaciones}</strong> publicaciones</span>
                </div>
                <div className="flex gap-5 text-sm mt-0.5">
                  <span><strong>{profile.seguidores}</strong> seguidores</span>
                  <span><strong>{profile.seguidos}</strong> seguidos</span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-sm leading-snug">
              <p className="font-semibold">{profile.nombre}</p>
              {profile.bio.map((linea) => (
                <p key={linea}>{linea}</p>
              ))}
              <p className="text-[#00376B]">{profile.link}</p>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-[#0095F6] text-white text-sm font-semibold rounded-lg py-1.5">
                Seguir
              </button>
              <button className="flex-1 bg-[#efefef] text-sm font-semibold rounded-lg py-1.5">
                Mensaje
              </button>
              <button className="bg-[#efefef] rounded-lg px-3 text-sm font-semibold" aria-label="Contacto">
                ✉
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex gap-4 px-4 pb-4 overflow-x-auto">
            {highlights.map((h) => (
              <div key={h} className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-16 h-16 rounded-full border border-[#dbdbdb] p-[3px]">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9F2241] to-[#2a0a14]" />
                </div>
                <span className="text-xs">{h}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex border-t border-[#dbdbdb]">
            <button className="flex-1 py-2.5 border-t border-black -mt-px flex justify-center" aria-label="Publicaciones">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-black" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <path d="M3 9.5h18M3 14.5h18M9.5 3v18M14.5 3v18" />
              </svg>
            </button>
            <button className="flex-1 py-2.5 flex justify-center opacity-40" aria-label="Reels">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-black" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M3 8h18M8.5 3l3 5M14.5 3l3 5M10 12l5 3-5 3v-6z" />
              </svg>
            </button>
            <button className="flex-1 py-2.5 flex justify-center opacity-40" aria-label="Etiquetado">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-black" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <circle cx="12" cy="10" r="3" />
                <path d="M6.5 19c1-3 3-4.5 5.5-4.5s4.5 1.5 5.5 4.5" />
              </svg>
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-[2px] md:gap-1">
            {posts.map((post, i) => (
              <button
                key={i}
                onClick={() => setLightbox(post)}
                className="group relative aspect-square overflow-hidden"
                aria-label={`Post ${i + 1}`}
              >
                <Thumb post={post} className="absolute inset-0 w-full h-full" />
                <span className="absolute top-1.5 right-1.5">
                  {post.tipo === "reel" && <ReelIcon />}
                  {post.tipo === "carrusel" && <CarruselIcon />}
                </span>
                {post.fijado && (
                  <span className="absolute top-1.5 left-1.5">
                    <PinIcon />
                  </span>
                )}
                <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-sm font-semibold">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comentarios}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-6 max-w-md mx-auto">
          Mockup con fines de propuesta: muestra cómo se vería el feed, no representa la
          cuenta real ni sugiere afiliación con Meta.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Thumb post={lightbox} className="absolute inset-0 w-full h-full" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-sm flex gap-4">
                <span>❤️ {lightbox.likes}</span>
                <span>💬 {lightbox.comentarios}</span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramFeed;
