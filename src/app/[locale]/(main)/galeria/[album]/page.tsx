"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "@/app/[locale]/components/mainPage/gallery/Card";



export default function Gallery() {
  const [albumData, setAlbumData] = useState<{ image: string; link: string; title: string; }[]>([]);
  
  const rutaActual = usePathname();
  const rutaSinIdioma = rutaActual.split('/').pop();


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
        // Llamada al endpoint '/category' en lugar de '/api/gallery'
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

        const filteredData = data
          .filter((item: string) => !item.includes("../"))
          .map((item: string) => ({
            image: `https://photos.txuli.com/duranguesa/covers/${item.slice(0, -1)}.jpg`,
            title: item.slice(0, -1),
            link: `${rutaSinIdioma}/${item.slice(0, -1)}/`,
          }));

        setAlbumData(filteredData); // Actualizamos el estado con los datos filtrados y mapeados
      } catch (error) {
        console.error("Error al cargar los datos", error);
      } 
    }

    fetchAlbumData();
  }, [rutaSinIdioma]); // Vuelve a ejecutarse si cambia la ruta

 
  
  return (
    <div>
      <Card album={albumData} />
    </div>
  );
}
