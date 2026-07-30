"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#ganadora", label: "Ganadora" },
  { href: "#proceso", label: "Del grano a la taza" },
  { href: "#variedad", label: "Obata" },
  { href: "#origen", label: "Eloxochitlán" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-espresso/70 border-b border-crema/10"
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-cream text-lg tracking-wide">
          Calidad en Taza <span className="text-gold">2026</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-cream/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#origen"
          className="text-sm font-medium bg-gold text-espresso px-4 py-2 rounded-full hover:bg-crema transition-colors"
        >
          Café Por Amor a Puebla
        </a>
      </nav>
    </motion.header>
  );
}
