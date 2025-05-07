'use client';

import React from 'react';

export default function TestButton() {
  const handleClick = async () => {
    try {
      const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  const res = await fetch(`${API_URL}/api/RenderNews`, {
  method: "POST",
    cache: "no-store",
  });

      if (!res.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await res.json();
      console.log('Respuesta del servidor:', result);
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Test
    </button>
  );
}
