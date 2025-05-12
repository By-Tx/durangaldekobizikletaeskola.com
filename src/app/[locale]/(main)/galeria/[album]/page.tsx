"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "@/app/[locale]/components/mainPage/gallery/Card";
import { API_URL } from "@/lib/config";


export default function Gallery() {
  const [albumData, setAlbumData] = useState<{ image: string; link: string; title: string; }[]>([]);
  console.log("carpeta album")
  const rutaActual = usePathname();
  const rutaSinIdioma = rutaActual.split('/').pop();


  useEffect(() => {
    async function fetchAlbumData() {
      
      if (!API_URL) {
        throw new Error("API URL no definida en las variables de entorno");
      }

      try {
       
        const response = await fetch(`${API_URL}/api/gallery/category`, {
          method: "POST",
          cache: "no-store", 
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
            image: `https://photos.txuli.com/duranguesa/covers/${rutaSinIdioma}/${item.slice(0, -1)}.jpg`,
            title: item.slice(0, -1),
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
    <div className="mt-20 grid h-screen w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-6">
      <Card album={albumData} />
    </div>
  );
}
