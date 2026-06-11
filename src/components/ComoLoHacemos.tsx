import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tecnicas } from "../data/content";
import { isMediaReady } from "../data/media";

gsap.registerPlugin(ScrollTrigger);

const tonos = [
  "from-[#2a0a14] to-[#0a0a0a]",
  "from-[#1B6A4D]/40 to-[#0a0a0a]",
  "from-[#9F2241]/50 to-[#0a0a0a]",
  "from-[#46637f]/40 to-[#0a0a0a]",
  "from-[#D98AA6]/30 to-[#0a0a0a]",
  "from-[#caa46a]/30 to-[#0a0a0a]",
];

const ComoLoHacemos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const colIzqRef = useRef<HTMLDivElement>(null);
  const colDerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: false,
      });
      gsap.fromTo(
        colIzqRef.current,
        { y: 0 },
        {
          y: -300,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        colDerRef.current,
        { y: -200 },
        {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const Tarjeta = ({ index, rotacion }: { index: number; rotacion: string }) => {
    const t = tecnicas[index];
    return (
      <button
        onClick={() => setLightbox(index)}
        className={`block w-full max-w-[320px] text-left ${rotacion} transition-transform hover:rotate-0 hover:scale-105 duration-300`}
      >
        <div className="aspect-square rounded-2xl overflow-hidden border border-stroke relative">
          {isMediaReady(t.imagen) ? (
            <img src={t.imagen} alt={t.titulo} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${tonos[index]}`} />
          )}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="font-display italic text-lg">{t.titulo}</p>
          </div>
        </div>
        <p className="text-xs text-muted mt-2 px-1">{t.descripcion}</p>
      </button>
    );
  };

  return (
    <div ref={sectionRef} className="relative min-h-[300vh] bg-bg">
      {/* Capa 1: centro fijado */}
      <div ref={pinRef} className="h-screen flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-xl">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Cómo lo hacemos</span>
            <span className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            La técnica detrás de <span className="font-display italic">cada toma</span>
          </h2>
          <p className="text-muted">
            Recursos de cine para que el contenido se vea premium y conecte.
          </p>
        </div>
      </div>

      {/* Capa 2: columnas parallax */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6 md:px-12">
          <div className="grid grid-cols-2 gap-12 md:gap-40 pt-[60vh]">
            <div ref={colIzqRef} className="space-y-24 pointer-events-auto">
              <Tarjeta index={0} rotacion="-rotate-3" />
              <Tarjeta index={2} rotacion="rotate-2" />
              <Tarjeta index={4} rotacion="-rotate-2" />
            </div>
            <div ref={colDerRef} className="space-y-24 pointer-events-auto justify-self-end">
              <Tarjeta index={1} rotacion="rotate-3" />
              <Tarjeta index={3} rotacion="-rotate-2" />
              <Tarjeta index={5} rotacion="rotate-2" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
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
              className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden border border-stroke"
              onClick={(e) => e.stopPropagation()}
            >
              {isMediaReady(tecnicas[lightbox].imagen) ? (
                <img
                  src={tecnicas[lightbox].imagen}
                  alt={tecnicas[lightbox].titulo}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${tonos[lightbox]}`} />
              )}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 to-transparent">
                <p className="font-display italic text-2xl">{tecnicas[lightbox].titulo}</p>
                <p className="text-sm text-muted mt-1">{tecnicas[lightbox].descripcion}</p>
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
    </div>
  );
};

export default ComoLoHacemos;
