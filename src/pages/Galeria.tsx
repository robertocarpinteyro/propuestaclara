import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MediaVideo from "../components/MediaVideo";
import { formatos } from "../data/content";

/**
 * Galería de todo el material, agrupado por formato.
 * Conforme se suban más piezas a Cloudinary, agregar entradas aquí.
 */
const Galeria = () => (
  <div className="min-h-screen bg-bg">
    <header className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-6 flex items-center justify-between">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors"
      >
        <span aria-hidden>←</span> Volver
      </Link>
      <Link to="/" className="gradient-border rounded-full">
        <span className="flex w-9 h-9 items-center justify-center rounded-full bg-bg font-display italic text-sm">
          CC
        </span>
      </Link>
    </header>

    <main className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Galería</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
          Todo el <span className="font-display italic">material</span>
        </h1>
        <p className="text-muted max-w-xl">
          Las piezas de cada formato, en un solo lugar. Se irá llenando conforme se
          produzca más material.
        </p>
      </motion.div>

      <div className="space-y-16">
        {formatos.map((f, i) => (
          <motion.section
            key={f.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: "easeOut" }}
          >
            <div className="flex items-baseline gap-4 mb-5">
              <h2 className="text-2xl md:text-3xl font-display italic">{f.nombre}</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                {f.duracion} · {f.orientacion}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="relative overflow-hidden rounded-2xl border border-stroke bg-surface aspect-video">
                <MediaVideo
                  src={f.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  label={`Próximamente · ${f.nombre}`}
                />
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  </div>
);

export default Galeria;
