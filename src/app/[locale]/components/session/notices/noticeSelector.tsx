'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { API_URL } from "@/lib/config";

export interface NewsItem {
  slug: string;
  image: string;
  alt: string;
  date: string;
  title: string;
  subtitle: string;
  category: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
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
  const [locale, setLocale] = useState<'es' | 'eus'>('es');
  const [editData, setEditData] = useState<Record<'es' | 'eus', any> | null>(null);

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

  const handleSelect = (slug: string) => {
    setLocalSelection(slug);
    onSelect(slug);
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!localSelection) return;

  try {
    const form = new FormData();
    form.append("slug", localSelection);
    form.append("locale", locale);

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    const response = await fetch(`${API_URL}/api/notices/updateNotices`, {
      method: 'POST',
      body: form,
    });

    if (!response.ok) {
      alert('Error al guardar los cambios');
    }

    const result = await response.json();
    console.log("Guardado correctamente:", result);
    handleCloseForm();
  } catch (error) {
    alert("Error al guardar");
  }
};

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target.tagName === 'TEXTAREA') {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseForm = () => {
    setClosing(true);
    setTimeout(() => {
      setShowForm(false);
      setClosing(false);
    }, 300);
  };

  const handleEdit = async (slug: string) => {
    const response = await fetch(`${API_URL}/api/notices/editNotices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData, slug }),
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data = await response.json();
    setEditData(data);
    setLocalSelection(slug);
    setShowForm(true);
  };

  useEffect(() => {
    if (!editData) return;
    const localizedData = editData[locale];
    setFormData({
      title: localizedData?.title || '',
      subtitle: localizedData?.subTitle || '',
      p1: localizedData?.p1 || '',
      p2: localizedData?.p2 || '',
      p3: localizedData?.p3 || '',
      p4: localizedData?.p4 || '',
      p5: localizedData?.p5 || '',
      p6: localizedData?.p6 || '',
    });
  }, [editData, locale]);

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, [formData]);

  


  return (
    <>
      {showForm && (
        <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
          <div
            className={`bg-gray-900 rounded-3xl shadow-2xl max-w-xl w-[90%] relative border-2 border-blue-700 ${closing ? "animate-slide-down" : "animate-slide-up"}`}
            style={{ overflow: 'hidden' }}
          >
            <div className="p-8 relative max-h-[90vh] overflow-hidden">
              {/* Botón cerrar */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl z-10"
                onClick={handleCloseForm}
              >
                ✕
              </button>
              <h3 className="text-2xl font-extrabold text-blue-400 text-center">
                Editar noticia
              </h3>
              {/* Selector de idioma */}
              <div className="flex absolute top-4 left-4 z-10">
                {['eus', 'es'].map((lng) => (
                  <div
                    key={lng}
                    className={`text-white px-4 py-2 cursor-pointer transition-colors duration-300 ${locale === lng ? 'bg-blue-500' : 'bg-gray-700'} ${lng === 'eus' ? 'rounded-l-md' : 'rounded-r-md'}`}
                    onClick={() => setLocale(lng as 'es' | 'eus')}
                  >
                    {lng}
                  </div>
                ))}
              </div>

              {/* ÁREA SCROLLABLE SOLO DESDE AQUÍ */}
              <div className="mt-[60px] overflow-y-auto max-h-[calc(90vh-88px)] pr-1 pb-14">



                <form onSubmit={handleSubmit} className="space-y-4 text-white">
                  <input
                    placeholder="Título"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-700 hover:border-blue-700"
                  />

                  <textarea
                    placeholder="Subtítulo"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg resize-none overflow-hidden focus:outline-none focus:border-blue-700 hover:border-blue-700"
                  />

                  {["p1", "p2", "p3", "p4", "p5", "p6"]
                    
                    .map((field) => (
                      <textarea
                        key={field}
                        placeholder={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg resize-none overflow-hidden focus:outline-none focus:border-blue-700 hover:border-blue-700"
                      />
                    ))}


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
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.slug}
            className={`group relative w-72 transition-all duration-200 cursor-pointer mx-auto border rounded-2xl overflow-hidden ${item.slug === localSelection
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

            <button
              onClick={(e) => {
                e.stopPropagation();
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
    </>
  );
}
