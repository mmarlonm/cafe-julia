"use client";

import { motion } from "framer-motion";

const notes = [
  { label: "Cuerpo", value: 85 },
  { label: "Dulzor", value: 92 },
  { label: "Acidez", value: 78 },
  { label: "Aroma", value: 95 },
];

export default function Variety() {
  return (
    <section id="variedad" className="py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-leaf uppercase tracking-[0.25em] text-sm font-semibold">
            Variedad
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-espresso mt-3">Obata</h2>
          <p className="mt-5 text-coffee/80 text-lg leading-relaxed">
            La Obata es una variedad de arábica reconocida por su resistencia a la roya
            y su taza limpia y dulce. En manos de Julia y en la altura de Eloxochitlán,
            expresa notas de caramelo, chocolate con leche y fruta madura.
          </p>

          <div className="mt-8 space-y-4">
            {notes.map((n, i) => (
              <div key={n.label}>
                <div className="flex justify-between text-sm text-coffee mb-1">
                  <span>{n.label}</span>
                  <span className="font-semibold">{n.value}</span>
                </div>
                <div className="h-2 rounded-full bg-crema/60 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${n.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-caramel to-leaf"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-coffee/30"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/tostado.jpg"
            alt="Granos de café Obata tostados"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-7xl md:text-8xl text-gold leading-none">
              100%
            </p>
            <p className="text-cream/80 uppercase tracking-widest mt-2">
              Arábica de altura
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
