import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MediaVideo from "./MediaVideo";
import { media } from "../data/media";

const rotantes = ["cercano", "real", "humano", "que se comparte"];

interface HeroProps {
  /** dispara la entrada GSAP cuando termina el loading screen */
  ready: boolean;
}

const Hero = ({ ready }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [rotIndex, setRotIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setRotIndex((i) => (i + 1) % rotantes.length);
    }, 2000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    if (!ready || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".name-reveal", { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }).to(
        ".blur-in",
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section id="inicio" ref={sectionRef} className="relative h-screen overflow-hidden">
      <MediaVideo
        src={media.heroReel}
        poster={media.heroPoster}
        className="absolute inset-0 w-full h-full object-cover"
        label="Reel general · Cloudinary"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8 [filter:blur(10px)] translate-y-5">
          Propuesta · Contenido Audiovisual
        </p>

        <h1 className="name-reveal translate-y-12 text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight mb-6">
          La Ciudad
          <br />
          que Cuida
        </h1>

        <p className="blur-in [filter:blur(10px)] translate-y-5 text-lg md:text-xl mb-4">
          Contenido{" "}
          <span
            key={rotIndex}
            className="font-display italic animate-role-fade-in inline-block"
          >
            {rotantes[rotIndex]}
          </span>{" "}
          para la Ciudad de México.
        </p>

        <p className="blur-in [filter:blur(10px)] translate-y-5 text-sm md:text-base text-muted max-w-md">
          Dejar atrás el comercial tradicional: videos que se sienten parte de las redes,
          que la gente quiere ver y compartir.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <span className="absolute inset-x-0 h-1/2 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
