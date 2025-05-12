"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Card from "@/app/[locale]/components/mainPage/gallery/Card";

export default function GalleryPage() {
  const [albumData, setAlbumData] = useState<{ image: string; link: string; title: string; }[]>([]);
  const currentPath = usePathname();
  let pathWithoutLocale = currentPath.split('/').slice(-2).join('/'); // Process the current route
  console.log("currentPath", currentPath)
  console.log("pathWithoutLocale", pathWithoutLocale)  

  useEffect(() => {
    async function fetchAlbumData() {
      const API_URL =
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
          : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

      if (!API_URL) {
        throw new Error("API URL not defined in environment variables");
      }

      try {
        const response = await fetch(`${API_URL}/api/gallery/category`, {
          method: "POST",
          cache: "no-store", // Avoid caching to ensure fresh data on every request
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ album: pathWithoutLocale }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const subPath = currentPath.split('/').slice(4).join('/'); // Process the current route again

        // Filter and format the data
        const filteredData = data
          .filter((item: string) => !item.includes("../")) // Filter out unwanted items
          .map((item: string) => ({
            image: `https://photos.txuli.com/duranguesa/covers/${pathWithoutLocale}/${item.slice(0, -1)}.jpg`, 
            link: `${subPath}/${item.slice(0, -1)}/`, 
            title: item.slice(0, -1),
          }));

        setAlbumData(filteredData); 
      } catch (error) {
        console.error("Error loading data", error);
      }
    }

    fetchAlbumData();
  }, [pathWithoutLocale]); 

  return (
    <div>
      <div className="mt-20 flex w-full">
        {/* Pass albumData as images to the Gallery component */}
        <Card album={albumData} />
      </div>
    </div>
  );
}
