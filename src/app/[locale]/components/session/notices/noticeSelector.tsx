'use client';

import Image from "next/image";
import { useState } from "react";
import { API_URL } from "@/lib/config";

export interface NewsItem {
  slug: string;
  image: string;
  alt: string;
  date: string;
  title: string;
  category: string;
}

interface NewsSelectorProps {
  items: NewsItem[];
  onSelect: (slug: string) => void;
  onEdit: (slug: string) => void;
  selectedSlug?: string;
}

export default function NewsSelector({
  items,
  onSelect,
  selectedSlug,
}: NewsSelectorProps) {
  const [localSelection, setLocalSelection] = useState<string | null>(selectedSlug || null);

  const handleSelect = (slug: string) => {
    setLocalSelection(slug);
    onSelect(slug);
  };
  async function handleEdit(slug: string) {
   
      const response = await fetch(`${API_URL}/api/editNotices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const data = await response.json();
 console.log(data)
   return data;
   
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.slug}
          className={`group relative w-72 transition-all duration-200 cursor-pointer mx-auto border rounded-2xl overflow-hidden ${
            item.slug === localSelection
              ? 'ring-2 ring-blue-500 border-blue-300'
              : 'hover:shadow-md'
          }`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            width={300}
            height={180}
            className="w-full h-40 object-cover"
            onClick={() => handleSelect(item.slug)}
          />

          <div
            className="bg-customDarkBlue text-white rounded-b-2xl px-3 py-3 h-28 flex flex-col justify-center"
            onClick={() => handleSelect(item.slug)}
          >
            <h4 className="font-fredoka text-sm opacity-75">{item.category}</h4>
            <h3 className="font-fredoka text-base font-medium truncate">{item.title}</h3>
            <p className="text-xs opacity-60">{item.date}</p>
          </div>

          {/* Botón de edición */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // evita que dispare la selección
              handleEdit(item.slug);
            }}
            className="absolute top-2 right-2 bg-white text-gray-700 hover:bg-gray-200 transition-all p-1.5 font-semibold rounded-full shadow uppercase"
            title="Editar noticia"
          >
           editar
          </button>
        </div>
      ))}
    </div>
  );
}
