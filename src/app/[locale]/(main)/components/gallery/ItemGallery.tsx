"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageItem {
  title: string;
  image: string;
  link?: string;
}

interface InfiniteGalleryProps {
  images: ImageItem[]; // Lista de imágenes recibida por props
  itemsPerLoad?: number; // Cantidad de imágenes que carga por bloque (default: 10)
}

export default function InfiniteGallery({ images, itemsPerLoad = 10 }: InfiniteGalleryProps) {
  const [displayedImages, setDisplayedImages] = useState<ImageItem[]>(images.slice(0, itemsPerLoad));
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Función para cargar más imágenes
  const loadMoreImages = useCallback(() => {
    const nextImages = images.slice(0, (page + 1) * itemsPerLoad);
    setDisplayedImages(nextImages);
    setPage((prevPage) => prevPage + 1);
  }, [images, page, itemsPerLoad]);

  // IntersectionObserver: Detecta cuando el usuario llega al final
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadMoreImages]);

  // Función para asignar tamaño aleatorio a cada imagen
  const getRandomSpan = () => {
    const spans = ["col-span-1", "col-span-2", "row-span-1", "row-span-2"];
    return spans[Math.floor(Math.random() * spans.length)];
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 auto-rows-auto">
      {displayedImages.map((img, index) => (
        <div key={index} className={`relative overflow-hidden rounded-lg ${getRandomSpan()}`}>
          <a href={img.link ?? "#"} target="_blank" rel="noopener noreferrer">
            <Image
              src={img.image}
              alt={img.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg hover:opacity-80 transition"
              
            />
          </a>
        </div>
      ))}
     
      
    </div>
  );
}
