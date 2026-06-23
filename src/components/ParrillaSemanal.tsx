import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { parrilla } from "../data/content";

const ParrillaSemanal = () => (
  <section id="parrilla" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="La parrilla"
        titulo={
          <>
            Una semana de <span className="font-display italic">contenido</span>
          </>
        }
        subtexto="Distribución estratégica diseñada para cumplir las frecuencias y optimizar los flujos de grabación en territorio."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {parrilla.map((d, i) => (
          <motion.article
            key={d.dia}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col bg-surface border border-stroke rounded-3xl p-7 transition-colors hover:border-transparent hover:[box-shadow:0_0_0_1px_#9F2241,0_0_12px_rgba(159,34,65,0.25)]"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              {d.dia}
            </span>
            <h3 className="text-2xl font-display italic mb-3">{d.titulo}</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-muted mb-1">
              {d.formato}
            </p>
            <p className="text-xs text-text-primary/70 mb-5">{d.plataforma}</p>
            <p className="text-sm text-muted mt-auto">{d.enfoque}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ParrillaSemanal;
