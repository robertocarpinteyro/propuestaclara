import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { chipsImpacto, frecuencias, porQueFunciona } from "../data/content";

const PorQueFunciona = () => (
  <section id="por-que" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="Por qué funciona"
        titulo={
          <>
            Resultados que <span className="font-display italic">se sienten</span>
          </>
        }
      />

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {porQueFunciona.map((item, i) => (
          <motion.div
            key={item.titulo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-surface border border-stroke rounded-3xl p-8"
          >
            <h3 className="text-xl font-display italic mb-3">{item.titulo}</h3>
            <p className="text-sm text-muted">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-16 md:mb-20">
        {chipsImpacto.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-stroke px-4 py-1.5 text-xs text-muted"
          >
            {chip}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl mb-6">
          Frecuencia <span className="font-display italic">sugerida</span>
          <span className="block text-sm text-muted font-body mt-2">
            Propuesta base, ajustable según calendario y eventos.
          </span>
        </h3>
        <div className="bg-surface rounded-2xl border border-stroke overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-stroke text-left text-xs uppercase tracking-[0.2em] text-muted">
                <th className="px-6 py-4 font-medium">Formato</th>
                <th className="px-6 py-4 font-medium">Frecuencia</th>
                <th className="px-6 py-4 font-medium">Publica en</th>
              </tr>
            </thead>
            <tbody>
              {frecuencias.map((fila) => (
                <tr key={fila.formato} className="border-b border-stroke/50 last:border-0">
                  <td className="px-6 py-4 font-display italic text-base">{fila.formato}</td>
                  <td className="px-6 py-4">{fila.frecuencia}</td>
                  <td className="px-6 py-4 text-muted">{fila.publica}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PorQueFunciona;
