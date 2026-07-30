"use client";

import { motion } from "framer-motion";

const imgs = [
  "/cafe-julia/img/cherries.jpg",
  "/cafe-julia/img/people.jpg",
  "/cafe-julia/img/branch.jpg",
  "/cafe-julia/img/tostado.jpg",
  "/cafe-julia/img/cluster.jpg",
  "/cafe-julia/img/cosecha.jpg",
  "/cafe-julia/img/molienda.jpg",
  "/cafe-julia/img/floracion.jpg",
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
