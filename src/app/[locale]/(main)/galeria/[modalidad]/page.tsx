"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "@/app/[locale]/components/mainPage/gallery/Card";
import { API_URL } from "@/lib/config";

export default function ModalidadPage() {
  const [modalidadData, setModalidadData] = useState<{ image: string; link: string; title: string; }[]>([]);
  const rutaActual = usePathname();
  const album = rutaActual.split("/").pop();

  useEffect(() => {
    async function fetchModalidadData() {
      if (!API_URL) throw new Error("API URL no definida en las variables de entorno");

      try {
        const response = await fetch(`${API_URL}/api/gallery/modalidad?album=${album}`, {
          method: "POST",
          cache: "no-store",
           body: JSON.stringify({ year: album }),
        });

        // Comprobar si la respuesta es JSON válida
        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType?.includes("application/json")) {
          throw new Error(`Respuesta inválida del servidor (${response.status})`);
        }

        const data = await response.json();

        const processed = data
          .filter((item: string) => typeof item === "string")
          .map((item: string) => {
            const cleanItem = item.replace(/\/$/, ''); 
            return {
              image: `https://photos.txuli.com/duranguesa/covers/${album}/${cleanItem}.webp`,
              title: cleanItem,
              link: `/galeria/${album}/${cleanItem}`,
            };
          });

        setModalidadData(processed);
      } catch (err) {
        console.error("Error cargando modalidades:", err);
      }
    }

    if (album) fetchModalidadData();
  }, [album]);

  return (
    <div className="mt-20 grid h-screen w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-6">
      <Card album={modalidadData} />
    </div>
  );
}
