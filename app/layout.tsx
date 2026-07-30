import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Julia Andrés Moreno — 1er Lugar Calidad en Taza 2026",
  description:
    "El café más rico de Puebla. Julia Andrés Moreno, ganadora de Calidad en Taza 2026 con variedad Obata desde Eloxochitlán.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-full grain">{children}</body>
    </html>
  );
}
