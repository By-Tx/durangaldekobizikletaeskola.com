"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Gallery from "@/app/[locale]/components/mainPage/gallery/ItemGallery"; // Importa el componente Gallery

export default function GalleryPage() {
  const [albumData, setAlbumData] = useState<{ src: string; link: string }[]>([]); // Usamos "src" en lugar de "image"
  const rutaActual = usePathname();
  const rutaSinIdioma = rutaActual.split('/').slice(-3).join('/');


  useEffect(() => {
    async function fetchAlbumData() {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
          : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

      if (!API_URL) {
        throw new Error("API URL no definida en las variables de entorno");
      }

      try {
        console.log("rutacilente",rutaSinIdioma);
        const response = await fetch(`${API_URL}/api/gallery/photos`, {
          method: "POST",
          cache: "no-store", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ album: rutaSinIdioma }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();

        // Filtramos y formateamos los datos
        const filteredData = data
          .filter((item: string) => !item.includes("../")) 
          .map((item: string) => ({
            src: `https://photos.txuli.com/duranguesa/gallery/${rutaSinIdioma}/${item}`,
            link: `${rutaSinIdioma}/${item.slice(0, -1)}/`, 

          }));

        setAlbumData(filteredData); 
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    }

    fetchAlbumData();
  }, [rutaSinIdioma]); 

  return (
    <div>
      <div className="mt-20 flex  w-full">
        
        <Gallery images={albumData} />
      </div>
    </div>
  );
}