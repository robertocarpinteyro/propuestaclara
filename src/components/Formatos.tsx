import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import MediaVideo from "./MediaVideo";
import { formatos } from "../data/content";

const Formatos = () => (
  <section id="formatos" className="bg-bg py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="Los formatos"
        titulo={
          <>
            Cinco maneras de <span className="font-display italic">contar la ciudad</span>
          </>
        }
        subtexto="Cada formato cumple una función distinta y comparte un mismo lenguaje visual."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {formatos.map((f, i) => (
          <motion.article
            key={f.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl min-h-[320px] md:min-h-[380px] ${f.colSpan}`}
          >
            <MediaVideo
              src={f.video}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              label={`Reel · ${f.nombre}`}
            />
            <div className="absolute inset-0 halftone opacity-20 mix-blend-multiply pointer-events-none" />

            {/* Estado base: nombre y duración */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-2xl font-display italic">{f.nombre}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mt-1">
                {f.duracion} · {f.orientacion}
              </p>
            </div>

            {/* Hover: ficha del formato */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-bg/70 backdrop-blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="space-y-3 text-sm overflow-y-auto">
                <h3 className="text-2xl font-display italic mb-2">{f.nombre}</h3>
                <p>
                  <span className="text-muted uppercase text-[10px] tracking-[0.2em] block">¿Qué es?</span>
                  {f.queEs}
                </p>
                <p>
                  <span className="text-muted uppercase text-[10px] tracking-[0.2em] block">¿Para qué?</span>
                  {f.paraQue}
                </p>
                <p className="hidden md:block">
                  <span className="text-muted uppercase text-[10px] tracking-[0.2em] block">¿Cómo se ve?</span>
                  {f.comoSeVe}
                </p>
                <p>
                  <span className="text-muted uppercase text-[10px] tracking-[0.2em] block">¿Dónde?</span>
                  {f.donde} · <span className="text-text-primary/80">{f.frecuencia}</span>
                </p>
              </div>
              <div className="pt-4">
                <span className="gradient-border inline-flex rounded-full">
                  <span className="rounded-full bg-bg px-4 py-1.5 text-xs">
                    Ver — <span className="font-display italic">{f.nombre}</span>
                  </span>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/galeria"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-stroke px-7 py-3.5 text-sm transition-all hover:border-transparent hover:[box-shadow:0_0_0_1px_#9F2241,0_0_8px_rgba(159,34,65,0.35)]"
        >
          Ver todo el material <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Formatos;
