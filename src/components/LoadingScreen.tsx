import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const palabras = ["Cercano", "Real", "Humano"];
const DURACION = 2700;

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [palabraIndex, setPalabraIndex] = useState(0);
  const completado = useRef(false);

  useEffect(() => {
    let raf: number;
    const inicio = performance.now();
    const tick = (ahora: number) => {
      const progreso = Math.min((ahora - inicio) / DURACION, 1);
      setCount(Math.round(progreso * 100));
      if (progreso < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!completado.current) {
        completado.current = true;
        setTimeout(onComplete, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPalabraIndex((i) => (i + 1) % palabras.length);
    }, 900);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Propuesta 2026
      </motion.span>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={palabraIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {palabras[palabraIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="absolute bottom-10 right-8 text-6xl md:text-8xl lg:text-9xl font-display tabular-nums">
        {String(count).padStart(3, "0")}
      </span>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient-glow origin-left transition-transform duration-100"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
