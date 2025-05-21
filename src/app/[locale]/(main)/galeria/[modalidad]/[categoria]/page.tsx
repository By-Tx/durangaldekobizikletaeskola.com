"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "@/app/[locale]/components/mainPage/gallery/Card";
import { API_URL } from "@/lib/config";

export default function CategoriaPage() {
  const [categoriaData, setCategoriaData] = useState<{ image: string; link: string; title: string; }[]>([]);
  const rutaActual = usePathname();
  const pathParts = rutaActual.split("/");
  const album = pathParts[pathParts.length - 2];
  const modalidad = pathParts[pathParts.length - 1];

  useEffect(() => {
    async function fetchCategoriaData() {
      console.log("Album:", album);
      console.log("Modalidad:", modalidad); 
      if (!API_URL) throw new Error("API URL no definida en las variables de entorno");

      try {
        const response = await fetch(`${API_URL}/api/gallery/category`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ album, modalidad }),
        });

        const data = await response.json();

        const processed = data.map((item: string) => {
          const cleanItem = item.replace(/\/$/, '');
          return {
            image: `https://photos.txuli.com/duranguesa/covers/${album}/${modalidad}/${cleanItem}.webp`,
            title: cleanItem,
            link: `/galeria/${album}/${modalidad}/${cleanItem}`,
          };
        });

        setCategoriaData(processed);
      } catch (err) {
        console.error("Error cargando categorías:", err);
      }
    }

    if (album && modalidad) fetchCategoriaData();
  }, [album, modalidad]);

  return (
    <div className="mt-20 grid h-screen w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-6">
      <Card album={categoriaData} />
    </div>
  );
}
