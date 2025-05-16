'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const options = [
  { label: 'Editar Noticias', value: 'EditNotices' },
  { label: 'Crear Noticia', value: 'CreateNotices' },
];

export default function DropdownClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get('option');

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('option', value);
    router.push(`?${params.toString()}`);
    setIsOpen(false);
  };

  // Redirige automáticamente a la opción por defecto si no hay selección
  useEffect(() => {
    if (!selected) {
      const params = new URLSearchParams(searchParams);
      params.set('option', 'EditNotices');
      router.replace(`?${params.toString()}`); // reemplaza en el historial
    }
  }, [selected, router, searchParams]);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        {options.find(o => o.value === selected)?.label || 'Selecciona una opción'}
        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor">
          <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
