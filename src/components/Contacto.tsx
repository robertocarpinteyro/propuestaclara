import { useEffect, useRef } from "react";
import gsap from "gsap";
import MediaVideo from "./MediaVideo";
import { media } from "../data/media";
import { proximosPasos } from "../data/content";

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

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-display italic mb-6">
            ¿Arrancamos con un piloto?
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-8">
            Sugerencia: el podcast “Clara Escucha” o un Cineminuto de una obra emblemática.
          </p>
          <a
            href="mailto:hola@ejemplo.mx"
            className="inline-flex items-center gap-2 rounded-full border-2 border-stroke bg-bg px-8 py-4 text-sm transition-all hover:scale-105 hover:border-transparent hover:[box-shadow:0_0_0_2px_#9F2241,0_0_8px_rgba(159,34,65,0.35)]"
          >
            Hablemos <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Próximos pasos */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-3 gap-6 mb-16">
          {proximosPasos.map((paso, i) => (
            <div key={paso.titulo} className="bg-surface/50 border border-stroke rounded-2xl p-6 backdrop-blur-sm">
              <span className="text-xs text-muted tabular-nums">0{i + 1}</span>
              <h3 className="font-display italic text-lg mt-2 mb-1">{paso.titulo}</h3>
              <p className="text-sm text-muted">{paso.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Barra de footer */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stroke/50 pt-6 text-xs text-muted">
          <div className="flex gap-5">
            <a href="#" className="hover:text-text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-text-primary transition-colors">TikTok</a>
            <a href="#" className="hover:text-text-primary transition-colors">YouTube</a>
            <a href="#" className="hover:text-text-primary transition-colors">Facebook</a>
          </div>
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
