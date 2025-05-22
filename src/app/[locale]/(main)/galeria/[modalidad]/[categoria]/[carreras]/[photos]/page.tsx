"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Gallery from "@/app/[locale]/components/mainPage/gallery/ItemGallery";
import { API_URL } from "@/lib/config";

export default function CarreraPage() {
  const [fotosCarrera, setFotosCarrera] = useState<{ src: string; link: string }[]>([]);
  const rutaActual = usePathname();
  const parts = rutaActual.split("/").slice(-4);
  const [album, modalidad, categoria, carrera] = parts;

  useEffect(() => {
    async function fetchCarreraFotos() {
      if (!API_URL) throw new Error("API URL no definida en las variables de entorno");

      try {
        const response = await fetch(`${API_URL}/api/gallery/photos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ album, modalidad, race: `${categoria}/${carrera}` }),
        });

        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType?.includes("application/json")) {
          throw new Error(`Respuesta inválida del servidor (${response.status})`);
        }

        const data = await response.json();
        console.log("Respuesta del backend:", data);

        if (!Array.isArray(data)) {
          console.error("Respuesta no es un array:", data);
          return;
        }

        const processed = data
          .filter((item: string) => typeof item === "string")
          .map((item: string) => ({
            src: `https://photos.txuli.com/duranguesa/gallery/${album}/${modalidad}/${categoria}/${carrera}/${item}`,
            link: item,
          }));

        setFotosCarrera(processed);
      } catch (err) {
        console.error("Error cargando fotos carrera:", err);
      }
    }

    if (album && modalidad && categoria && carrera) fetchCarreraFotos();
  }, [album, modalidad, categoria, carrera]);

  return (
    <div className="mt-20 w-full">
      <Gallery images={fotosCarrera} />
    </div>
  );
}
