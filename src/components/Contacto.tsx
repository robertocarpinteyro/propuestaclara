import { useEffect, useRef } from "react";
import gsap from "gsap";
import MediaVideo from "./MediaVideo";
import { media } from "../data/media";

const Contacto = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer id="contacto" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <MediaVideo
        src={media.heroReel}
        className="absolute inset-0 w-full h-full object-cover scale-y-[-1]"
        placeholderClassName="bg-gradient-to-b from-bg via-[#1d060d] to-bg"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap mb-16 select-none" aria-hidden>
          <div ref={marqueeRef} className="inline-block will-change-transform">
            {Array.from({ length: 2 }).map((_, mitad) => (
              <span key={mitad} className="inline-block">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-5xl md:text-7xl font-display italic text-text-primary/15 mx-2"
                  >
                    LA CIUDAD QUE CUIDA •{" "}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Barra de footer */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stroke/50 pt-6 text-xs text-muted">
          <span>La Ciudad que Cuida · Propuesta 2026</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            Disponible para arrancar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;
