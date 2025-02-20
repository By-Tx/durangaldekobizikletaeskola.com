import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '76vh',
  position: 'relative',
  width: '100%', 
};


const captionStyle: React.CSSProperties = {
  position: 'absolute',
  
  
  color: '#fff',
  textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
};

interface SlideshowProps {
  images: { url: string; title: string | undefined; subtitle: string| undefined; higlightSubtitle: string | undefined }[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images = [] }) => {
  return (
    <div className="slide-container w-full h-auto  mx-auto  ">
      <Slide
        duration={4000} // Duración de cada slide en milisegundos
        transitionDuration={1000} // Duración de la transición en milisegundos
        infinite={true} // Hacer que el slider sea infinito
        indicators={false} // Mostrar indicadores
        arrows={false} // Mostrar flechas de navegación
        autoplay={true}
      >
        {images.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div style={captionStyle} className='left-5 md:left-10 bottom-10 md:bottom-24'>
                <h2 className="text-4xl font-semibold text-left w-96  font-fredoka">{slideImage.title}</h2>
                <p className="text-lg  w-96 font-fredoka font-light">{slideImage.subtitle}  <br />
                {slideImage.higlightSubtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
