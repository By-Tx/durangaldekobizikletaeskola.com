"use client"
// components/Gallery.tsx
import { FC } from 'react'
import Image from 'next/image'

interface ImageProps {
  src: string;
  link: string;
}

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 w-full">

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Image
              src={item.src}
              alt={`Imagen ${index + 1}`}
              width={400}
              height={300} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>



    </section>

  )
}

export default Gallery
