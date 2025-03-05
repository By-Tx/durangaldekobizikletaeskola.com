"use client"
// components/Gallery.tsx
import { FC, useState } from 'react'
import Image from 'next/image'
// import { Link } from '@/i18n/routing'

interface ImageProps {
  src: string; // src es el único campo necesario
  link: string;
}

interface GalleryProps {
  images: ImageProps[]; // Aquí está el array de objetos de imágenes
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<string>('')
  
  const openModal = (src: string) => {
    setCurrentImage(src)
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImage('')
  }

  const handleDownload = (src: string) => {
    const link = document.createElement('a')
    link.href = src
    link.download = src.split('/').pop() || 'image'
    link.click()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Galería de Imágenes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            
              <Image
                src={item.src}
                alt={`Imagen ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openModal(item.src)} // Abre el modal con la imagen seleccionada
              />
            
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              X
            </button>
            <div className="mb-4">
              <Image
                src={currentImage}
                alt="Imagen ampliada"
                layout="intrinsic"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <button
              onClick={() => handleDownload(currentImage)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Descargar Foto
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
