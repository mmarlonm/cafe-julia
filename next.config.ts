/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Requerido para GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes de Next.js
  },
  // Reemplaza 'cafe-julia' por el nombre EXACTO de tu repositorio en GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/cafe-julia' : '',
};

module.exports = nextConfig;