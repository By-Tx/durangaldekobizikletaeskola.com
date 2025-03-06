"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Gallery from "@/app/[locale]/components/mainPage/gallery/ItemGallery"; // Importa el componente Gallery

export default function GalleryPage() {
  const [albumData, setAlbumData] = useState<{ src: string; link: string }[]>([]); // Usamos "src" en lugar de "image"
  const rutaActual = usePathname();
  const rutaSinIdioma =  rutaActual.split('/').slice(-2).join('/'); // Procesamos la ruta actual

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
        console.log(rutaSinIdioma);
        const response = await fetch(`${API_URL}/api/category`, {
          method: "POST",
          cache: "no-store", // Evita caché para asegurar datos frescos en cada request
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ album: rutaSinIdioma }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await response.json();

        // Filtramos y formateamos los datos
        const filteredData = data
          .filter((item: string) => !item.includes("../")) // Filtrar elementos no deseados
          .map((item: string) => ({
            src: `https://photos.txuli.com/duranguesa/gallery/${rutaSinIdioma}/${item}`, // Cambiado de "image" a "src"
            link: `${rutaSinIdioma}/${item.slice(0, -1)}/`, 
          }));

        setAlbumData(filteredData); // Actualizamos el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    }

    fetchAlbumData();
  }, [rutaSinIdioma]); // Se ejecuta cada vez que la ruta cambia

  return (
    <div>
      <div className="mt-20 flex  w-full">
        {/* Pasamos albumData como imágenes al componente Gallery */}
        <Gallery images={albumData} />
      </div>
    </div>
  );
}
