"use client"

import React from 'react';
import Image from "next/legacy/image";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '76vh',
  width: '100%',
  overflow: 'hidden', // Evita desbordamientos en el slider
};

const captionStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: 10, // Asegura que el texto esté sobre la imagen
  color: '#fff',
  textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
};

interface SlideshowProps {
  images: { url: string; title?: string; subtitle?: string; highlightSubtitle?: string }[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images = [] }) => {
  return (
    <div className="slide-container w-full h-auto mx-auto">
      <Slide duration={6000} transitionDuration={1000} infinite indicators={false} arrows={false} autoplay>
        {images.map((slideImage, index) => (
          <div key={index} style={divStyle} className="relative">
            {/* Imagen con Next.js */}
            <Image
              src={slideImage.url}
              alt={slideImage.title || 'Slide image'}
              layout="fill"
              objectFit="cover"
              priority={index === 0} // Solo la primera imagen tendrá prioridad
              quality={90} // Optimización para mejor calidad y carga
            />

            {/* Texto superpuesto */}
            <div style={captionStyle} className="left-5 md:left-10 bottom-10 md:bottom-24">
              {slideImage.title && <h2 className="text-4xl font-semibold text-left w-96 font-fredoka">{slideImage.title}</h2>}
              {(slideImage.subtitle || slideImage.highlightSubtitle) && (
                <p className="text-lg w-96 font-fredoka font-light">
                  {slideImage.subtitle} <br />
                  {slideImage.highlightSubtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
