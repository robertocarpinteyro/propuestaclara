import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  titulo: ReactNode;
  subtexto?: string;
}

const SectionHeader = ({ eyebrow, titulo, subtexto }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="mb-12 md:mb-16"
  >
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px bg-stroke" />
      <span className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</span>
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
      {titulo}
    </h2>
    {subtexto && <p className="text-muted max-w-xl">{subtexto}</p>}
  </motion.div>
);

export default SectionHeader;
