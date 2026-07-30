"use client";

import { motion } from "framer-motion";

export default function Origin() {
  return (
    <section
      id="origen"
      className="relative py-28 text-cream overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cafe-julia/img/cultivo.jpg"
        alt="Cafetal de Eloxochitlán"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/85" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold uppercase tracking-[0.3em] text-sm"
        >
          Origen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl mt-3"
        >
          Eloxochitlán, Puebla
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-cream/70 text-lg max-w-2xl mx-auto"
        >
          En la Sierra Negra poblana, entre neblina y montaña, se cultiva un café con
          identidad. Este terroir de altura le dio a la taza de Julia el perfil que
          conquistó a los jueces de Calidad en Taza 2026.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { k: "+1,300", v: "metros de altura" },
            { k: "100%", v: "cosecha manual" },
            { k: "1º", v: "lugar Puebla 2026" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-crema/15 bg-cream/5 p-6"
            >
              <p className="font-display text-4xl text-gold">{s.k}</p>
              <p className="text-cream/60 text-sm mt-1">{s.v}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gold text-espresso p-10 md:p-14"
        >
          <h3 className="font-display text-3xl md:text-4xl">
            Prueba el café más rico de Puebla
          </h3>
          <p className="mt-3 text-espresso/80">
            Un homenaje al trabajo de Julia Andrés Moreno y a las manos que cultivan café
            de especialidad en la Sierra Negra.
          </p>
          <a
            href="#top"
            className="inline-block mt-6 bg-espresso text-cream px-8 py-3 rounded-full font-semibold hover:bg-coffee transition-colors"
          >
            Volver al inicio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
