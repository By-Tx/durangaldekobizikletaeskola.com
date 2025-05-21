"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "@/app/[locale]/components/mainPage/gallery/Card";
import { API_URL } from "@/lib/config";

export default function RacePage() {
  const [raceData, setRaceData] = useState<{ image: string; link: string; title: string }[]>([]);
  const rutaActual = usePathname();
  const pathParts = rutaActual.split("/").filter(Boolean);

  // Obtener: /galeria/[año]/[modalidad]/[categoria]
  const album = pathParts[pathParts.length - 3];
  const modalidad = pathParts[pathParts.length - 2];
  const categoria = pathParts[pathParts.length - 1];

  useEffect(() => {
    async function fetchRaceData() {
      if (!API_URL) throw new Error("API URL no definida en las variables de entorno");

      try {
        const response = await fetch(`${API_URL}/api/gallery/races`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            album,
            modalidad,
            race: categoria,
          }),
        });

        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.status}`);
        }

        const data = await response.json();

        const processed = data.map((item: string) => {
          const cleanItem = item.replace(/\/$/, "");

          return {
            image: `https://photos.txuli.com/duranguesa/covers/${album}/${modalidad}/${categoria}/${cleanItem}.webp`,
            title: cleanItem,
            link: `/galeria/${album}/${modalidad}/${categoria}/${cleanItem}`,
          };
        });

        setRaceData(processed);
      } catch (err) {
        console.error("Error cargando carreras:", err);
      }
    }

    if (album && modalidad && categoria) {
      fetchRaceData();
    }
  }, [album, modalidad, categoria]);

  return (
    <div className="mt-20 grid h-screen w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-6">
      <Card album={raceData} />
    </div>
  );
}
