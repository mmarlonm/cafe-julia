"use client";

import { motion } from "framer-motion";

const imgs = [
  "/img/cherries.jpg",
  "/img/people.jpg",
  "/img/branch.jpg",
  "/img/tostado.jpg",
  "/img/cluster.jpg",
  "/img/cosecha.jpg",
  "/img/molienda.jpg",
  "/img/floracion.jpg",
];

export default function Marquee() {
  const loop = [...imgs, ...imgs];
  return (
    <section className="bg-espresso py-6 overflow-hidden border-y border-crema/10">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
