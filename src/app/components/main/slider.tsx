import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '76vh',
};

interface SlideshowProps {
  images: { url: string }[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images=[] }) => {
  return (
    <div className="slide-container w-9/12 mb-10 mx-auto xl:mt-36 sm:mt-10">
      <Slide
        duration={4000} // Duración de cada slide en milisegundos
        transitionDuration={800} // Duración de la transición en milisegundos
        infinite={true} // Hacer que el slider sea infinito
        indicators={true} // Mostrar indicadores
        arrows={true} // Mostrar flechas de navegación
        autoplay={true}
      >
        {images.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;