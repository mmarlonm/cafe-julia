"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* parallax image bg */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/cosecha.jpg"
          alt="Cosecha de café en Eloxochitlán"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-32 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-gold text-xs uppercase tracking-[0.3em]"
          >
            ☕ Calidad en Taza 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-cream text-6xl sm:text-7xl md:text-8xl leading-[0.9] mt-6"
          >
            El café más
            <span className="block text-gold italic">rico de Puebla</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-lg text-cream/70 text-lg leading-relaxed"
          >
            De las manos de{" "}
            <strong className="text-cream">Julia Andrés Moreno</strong> y las
            montañas de Eloxochitlán. Variedad Obata, primer lugar absoluto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#proceso"
              className="group bg-gold text-espresso font-semibold px-8 py-4 rounded-full hover:bg-cream transition-colors"
            >
              Del grano a la taza{" "}
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#ganadora"
              className="border border-cream/30 text-cream px-8 py-4 rounded-full hover:bg-cream/10 backdrop-blur transition-colors"
            >
              Conoce a la ganadora
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex gap-10 text-cream"
          >
            {[
              ["1º", "Lugar Puebla"],
              ["Obata", "Variedad"],
              ["100%", "Cosecha a mano"],
            ].map(([k, v]) => (
              <div key={v}>
                <p className="font-display text-3xl text-gold">{k}</p>
                <p className="text-cream/50 text-xs uppercase tracking-widest">
                  {v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* poster */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gold/30 blur-2xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/julia.png"
            alt="Julia Andrés Moreno, 1er lugar"
            className="relative rounded-3xl shadow-2xl shadow-black/50 border-4 border-cream/10"
          />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-sm"
      >
        ↓ Desliza
      </motion.div>
    </section>
  );
}
