"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Gallery from "@/app/[locale]/components/mainPage/gallery/ItemGallery";

// Definimos un tipo para los datos de las imágenes
interface Image {
  src: string;
  link: string;
}

async function fetchImages(album: string): Promise<Image[]> {
  try {
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

    if (!API_URL) {
      throw new Error("API URL no definida en las variables de entorno");
    }

    const response = await fetch(`${API_URL}/api/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ album }),
      cache: "no-store", // Evitar caché
    });

    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData
      .filter((item: string) => !item.includes("../"))
      .map((item: string) => ({
        src: `https://photos.txuli.com/duranguesa/gallery/${album}/${item}`,
        link: `https://photos.txuli.com/duranguesa/gallery/${album}/${item}`,
      }));
  } catch (error) {
    console.error("Fetching error:", error);
    return []; // Retornar arreglo vacío si hay error
  }
}

const AlbumPage = () => {
  const [fetchData, setFetchData] = useState<Image[]>([]); // Usamos el tipo Image[]
  
  
  const rutaActual = usePathname(); // Obtener la ruta actual
  const rutaSinIdioma = rutaActual.split('/').pop() || ''; // Obtenemos la última parte de la ruta

  useEffect(() => {
    const fetchDataAsync = async () => {
    
      const data = await fetchImages(rutaSinIdioma); // Llamamos la función para obtener las imágenes
      setFetchData(data); // Guardamos los datos en el estado
     
    };

    if (rutaSinIdioma) {
      fetchDataAsync(); // Solo llamamos a la función si tenemos un álbum válido
    }
  }, [rutaSinIdioma]); // Vuelve a ejecutarse si cambia la ruta

 
  return (
    <div>
      <div className="mt-20 flex h-screen w-full">
        <Gallery images={fetchData} /> {/* Le pasamos las imágenes al componente Gallery */}
      </div>
    </div>
  );
};

export default AlbumPage;
