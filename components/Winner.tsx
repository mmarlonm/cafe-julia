"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Lugar", value: "1º" },
  { label: "Municipio", value: "Eloxochitlán" },
  { label: "Variedad", value: "Obata" },
  { label: "Concurso", value: "Taza 2026" },
];

export default function Winner() {
  return (
    <section id="ganadora" className="relative py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* photo collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 pt-10">
            <Photo src="/cafe-julia/img/cosecha.jpg" alt="Cortando café a mano" h="h-56" />
            <Photo src="/cafe-julia/img/lavado.jpg" alt="Selección de cerezas" h="h-40" />
          </div>
          <div className="space-y-4">
            <Photo src="/cafe-julia/img/people.jpg" alt="Recolección en el cafetal" h="h-40" />
            <Photo src="/cafe-julia/img/despulpado.jpg" alt="Cerezas recolectadas" h="h-56" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gold text-espresso font-display text-lg px-6 py-2 rounded-full shadow-xl whitespace-nowrap">
            Hecho a mano en Puebla
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-leaf font-semibold uppercase tracking-[0.25em] text-sm">
            La ganadora
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-espresso mt-3 leading-none">
            Julia Andrés
            <br />
            Moreno
          </h2>
          <p className="mt-6 text-coffee/80 text-lg leading-relaxed">
            Con manos que conocen cada estación del cafetal, Julia transformó los
            granos de <strong>Obata</strong> de su tierra en la taza más premiada de
            Puebla. Su café habla de altura, sombra, paciencia y amor por el oficio.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="rounded-2xl bg-white border border-crema/60 p-5 shadow-sm"
              >
                <p className="text-xs uppercase tracking-widest text-caramel">
                  {s.label}
                </p>
                <p className="font-display text-2xl text-espresso mt-1">
                  {s.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Photo({ src, alt, h }: { src: string; alt: string; h: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`overflow-hidden rounded-2xl shadow-lg shadow-coffee/20 ${h}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}
