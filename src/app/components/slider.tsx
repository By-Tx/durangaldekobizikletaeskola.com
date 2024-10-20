import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',     
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  height: '86vh',
}
const slideImages = [
  {
    url: 'https://photos.txuli.com/duranguesa/Duranguesa_3.jpg',
    
  },
  {
    url: 'https://photos.txuli.com/duranguesa/foto3.jpg',
    
  },
  {
    url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg',
    
  },
  {
    url: 'https://photos.txuli.com/duranguesa/foto2.jpg',
    
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container w-full">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}></div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;