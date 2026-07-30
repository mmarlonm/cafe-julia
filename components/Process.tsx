"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", img: "/cafe-julia/img/siembra.jpg", title: "Siembra", desc: "La semilla de Obata germina en almácigo, protegida hasta convertirse en plántula lista para el campo." },
  { n: "02", img: "/cafe-julia/img/cultivo.jpg", title: "Cultivo bajo sombra", desc: "Crece entre árboles nativos de Eloxochitlán; la altura y la sombra concentran los azúcares del grano." },
  { n: "03", img: "/cafe-julia/img/floracion.jpg", title: "Floración y fruto", desc: "El cafeto florece con aroma a jazmín y madura en cerezas rojas, listas para la cosecha." },
  { n: "04", img: "/cafe-julia/img/cosecha.jpg", title: "Cosecha a mano", desc: "Julia recolecta solo las cerezas maduras, una por una, para asegurar la máxima dulzura." },
  { n: "05", img: "/cafe-julia/img/despulpado.jpg", title: "Despulpado", desc: "Se retira la pulpa el mismo día, dejando el grano cubierto de mucílago." },
  { n: "06", img: "/cafe-julia/img/fermentacion.jpg", title: "Fermentación", desc: "El grano descansa y fermenta, revelando una taza limpia y de carácter." },
  { n: "07", img: "/cafe-julia/img/lavado.jpg", title: "Lavado y selección", desc: "Agua de manantial arrastra el mucílago; se escoge grano por grano." },
  { n: "08", img: "/cafe-julia/img/secado.jpg", title: "Secado al sol", desc: "En camas se seca lentamente hasta alcanzar su punto ideal de humedad." },
  { n: "09", img: "/cafe-julia/img/trilla.jpg", title: "Trilla", desc: "Se retira el pergamino dejando el grano verde de especialidad, listo para viajar." },
  { n: "10", img: "/cafe-julia/img/tostado.jpg", title: "Tostado", desc: "El maestro tostador despierta caramelo, chocolate y frutas del grano ganador." },
  { n: "11", img: "/cafe-julia/img/molienda.jpg", title: "Molienda", desc: "Molido en su punto justo, minutos antes de la extracción para conservar el aroma." },
  { n: "12", img: "/cafe-julia/img/servir.jpg", title: "Servir", desc: "La taza premiada de Puebla, lista para disfrutarse. Calidad en Taza 2026." },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-28 bg-espresso">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm">El viaje del café</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream mt-3">
            Del grano a la taza
          </h2>
          <p className="text-cream/60 mt-4">
            Cada paso que llevó el café de Julia a ser el número uno de Puebla.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                  left ? "" : "md:[direction:rtl]"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 [direction:ltr]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 font-display text-6xl text-cream/90 drop-shadow-lg">
                    {s.n}
                  </span>
                </motion.div>

                <div className="[direction:ltr]">
                  <div className="h-px w-16 bg-gold mb-5" />
                  <h3 className="font-display text-3xl md:text-4xl text-cream">
                    {s.title}
                  </h3>
                  <p className="text-cream/60 mt-4 text-lg leading-relaxed max-w-md">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
