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
  const [closing, setClosing] = useState(false);
  const [localSelection, setLocalSelection] = useState<string | null>(selectedSlug || null);
  const [showForm, setShowForm] = useState(false);
  const [locale, setLocale] = useState('es');
  const handleSelect = (slug: string) => {
    setLocalSelection(slug);
    onSelect(slug);
  };
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',

  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleCloseForm = () => {
    setClosing(true);
    setTimeout(() => {
      setShowForm(false);
      setClosing(false);

    }, 300);
  };
  async function handleEdit(slug: string) {

    const response = await fetch(`${API_URL}/api/notices/editNotices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    });


    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    setShowForm(true);
    const data = await response.json();
    console.log(data)
    return data;

  }
  const handleSubmit = async (e: React.FormEvent) => { }


  return (
    <>
      {showForm && (
        <div className={` fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity ${closing ? "animate-fade-out" : "animate-fade-in"}`}>

          <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 w-[90%] max-w-xl relative border-2 border-blue-700 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl"
              onClick={handleCloseForm}
            >
              ✕
            </button>
            <h3 className="text-2xl font-extrabold mb-6 text-blue-400 text-center">
              Editar noticia
            </h3>
            <div className="flex absolute top-4 left-4">
              <div
                className={`text-white rounded-l-md px-4 py-2 cursor-pointer transition-colors duration-300 ${locale === 'eus' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setLocale('eus')}
              >
                eus
              </div>
              <div
                className={`text-white rounded-r-md px-4 py-2 cursor-pointer 
      transition-colors duration-300
      ${locale === 'es' ? 'bg-blue-500' : 'bg-gray-700'}`}
                onClick={() => setLocale('es')}
              >
                es
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-white">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.title}
                onChange={handleInputChange}

                required
                className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value=""

                required
                className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg"
              />
              <select
                name="role"
                value=""

                required
                className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg"
              >
                <option value="admin">Administrador</option>
                <option value="coach">Entrenador</option>
                <option value="staff">Personal</option>
                <option value="runner">Deportista</option>
                <option value="user">Usuario</option>
              </select>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.slug}
            className={`group relative w-72 min-h-72 transition-all duration-200 cursor-pointer mx-auto border rounded-2xl overflow-hidden ${item.slug === localSelection
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
              className="absolute top-2 right-2 bg-white text-gray-700 hover:bg-gray-200 p-1.5 rounded-full shadow"
              title="Editar noticia"
            >
              editar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
