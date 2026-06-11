import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { enfoque } from "../data/content";

const filaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const Enfoque = () => (
  <section id="enfoque" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="El enfoque"
        titulo={
          <>
            Nuestro <span className="font-display italic">enfoque</span>
          </>
        }
        subtexto="La diferencia entre un anuncio que la gente salta y un video que la gente comparte."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface/30 border border-stroke rounded-3xl p-8">
          <h3 className="text-xl font-display italic mb-6 text-muted">Lo que evitamos</h3>
          <ul className="space-y-5">
            {enfoque.evitamos.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={filaVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-start gap-3 text-sm text-muted"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs mt-0.5">
                  ✕
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="bg-surface/30 border border-stroke rounded-3xl p-8">
          <h3 className="text-xl font-display italic mb-6">Lo que sí buscamos</h3>
          <ul className="space-y-5">
            {enfoque.buscamos.map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={filaVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-verde/30 text-emerald-400 flex items-center justify-center text-xs mt-0.5">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Enfoque;
