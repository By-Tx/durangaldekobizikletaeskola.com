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
    <div className="slide-container w-9/12 mb-10 mx-auto mt-36">
      <Slide>
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
