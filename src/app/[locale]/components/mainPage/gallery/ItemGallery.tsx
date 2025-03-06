"use client"
// components/Gallery.tsx
import { FC } from 'react'
import Image from 'next/image'

interface ImageProps {
  src: string; // src es el único campo necesario
  link: string;
}

interface GalleryProps {
  images: ImageProps[]; // Aquí está el array de objetos de imágenes
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
     
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {images.map((item, index) => (
          <div key={index} className="relative overflow-hidden h-auto my-auto">
            <Image
              src={item.src}
              alt={`Imagen ${index + 1}`}
              layout="intrinsic" // Esto asegura que la imagen mantenga sus proporciones
              width={400}
              height={300}
              className="object-cover cursor-pointer h-full w-full rounded-lg" // Usamos h-full y w-full para asegurar que ocupe todo el espacio
            />
          </div>
        ))}
      </div>
        
        
    </div>
   
  )
}

export default Gallery
