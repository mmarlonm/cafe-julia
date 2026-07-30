export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/60 border-t border-crema/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-display text-cream text-base">
          Calidad en Taza <span className="text-gold">2026</span> · Café Por Amor a Puebla
        </p>
        <p>Gobierno del Estado · Agricultura y Desarrollo Rural</p>
        <p>© {new Date().getFullYear()} — Julia Andrés Moreno</p>
      </div>
    </footer>
  );
}
