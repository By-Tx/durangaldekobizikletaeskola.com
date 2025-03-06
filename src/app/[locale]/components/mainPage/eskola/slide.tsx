
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
    bottom: '30px',
    left: '20px',
    color: '#fff',
    textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    zIndex: 10,
};

interface SlideshowProps {
    images: { url: string;  }[];
    title: string;
}

const Slides: React.FC<SlideshowProps> = ({ images = [], title }) => {
    return (
        <div className="slide-container w-full h-auto  mx-auto relative">
            <h1 style={captionStyle} className='font-fredoka text-5xl font-semibold'>{title}</h1>
            <Slide
                duration={4000}
                transitionDuration={1000}
                infinite={true} 
                indicators={false} 
                arrows={false}
                autoplay={true}
            >
                {images.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                           
                        </div>
                    </div>
                ))}

            </Slide>
            
        </div>
    );
};

export default Slides;
