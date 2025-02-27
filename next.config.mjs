import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'production' ? 'build' : '.next',
  images: {
    domains: ['photos.txuli.com'], // Agrega aquí el dominio externo desde el que quieres cargar imágenes
  },
  
};



export default withNextIntl (nextConfig);
